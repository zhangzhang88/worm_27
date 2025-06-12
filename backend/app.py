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
    asyncio.run(edge_tts.Communicate(text, voice).save(cache_file))

@app.route('/api/tts', methods=['POST'])
def text_to_speech():
    try:
        data = request.json
        if not data or 'text' not in data or 'path' not in data or 'sequence' not in data:
            return jsonify({'error': 'No text, path, or sequence provided'}), 400

        text = data['text']
        voice = data.get('voice', 'en-US-AriaNeural')
        cache_dir = data['path']  # 获取动态路径
        os.makedirs(cache_dir, exist_ok=True)  # 确保目录存在
        cache_file = get_cache_filename(text, voice, cache_dir)  # 使用哈希命名

        # 检查音频文件是否已存在
        if not os.path.exists(cache_file):
            try:
                generate_audio(text, voice, cache_file)
            except Exception as e:
                print(f"Error generating audio: {str(e)}")
                if os.path.exists(cache_file):
                    os.remove(cache_file)  # 删除错误的音频文件
                return jsonify({'error': str(e)}), 500

        return send_file(cache_file, mimetype='audio/mp3')
    except Exception as e:
        print(f"Error in text_to_speech: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
