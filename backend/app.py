from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import edge_tts
import asyncio
import os
import hashlib

app = Flask(__name__)
CORS(app)  # 允许所有来源的请求

def get_cache_filename(text, voice, cache_dir):
    # 使用文本和语音生成唯一的哈希文件名
    hash_object = hashlib.md5((text + voice).encode())
    return os.path.join(cache_dir, f"{hash_object.hexdigest()}.mp3")

def generate_audio(text, voice, cache_file):
    # 使用 edge-tts 生成音频并保存到缓存文件
    try:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        loop.run_until_complete(edge_tts.Communicate(text, voice).save(cache_file))
        loop.close()
    except Exception as e:
        raise RuntimeError(f"Failed to generate audio: {str(e)}") from e

@app.route('/api/tts', methods=['POST'])
def text_to_speech():
    try:
        data = request.json
        if not data or 'text' not in data or 'path' not in data:
            return jsonify({'error': 'No text or path provided'}), 400

        text = data['text']
        voice = data.get('voice', 'en-US-AriaNeural')
        cache_dir = data['path']  # 获取动态路径
        
        # 确保缓存目录在 backend 内部，防止路径遍历攻击
        safe_cache_dir = os.path.join('/tmp', cache_dir)
        os.makedirs(safe_cache_dir, exist_ok=True)  # 确保目录存在
        
        cache_file = get_cache_filename(text, voice, safe_cache_dir)  # 使用哈希命名

        # 检查音频文件是否已存在
        if not os.path.exists(cache_file):
            try:
                generate_audio(text, voice, cache_file)
            except Exception as e:
                error_msg = f"Failed to generate audio: {str(e)}"
                print(error_msg)
                import traceback
                traceback.print_exc()
                if os.path.exists(cache_file):
                    os.remove(cache_file)  # 删除错误的音频文件
                return jsonify({'error': error_msg}), 500

        return send_file(cache_file, mimetype='audio/mp3')
    except Exception as e:
        error_msg = f"Error in text_to_speech: {str(e)}"
        print(error_msg)
        import traceback
        traceback.print_exc()
        return jsonify({'error': error_msg}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    # 使用Zeabur提供的PORT环境变量，如果没有则使用默认端口5001
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=True, host='0.0.0.0', port=port)
