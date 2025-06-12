import os
import re
import shutil

def modify_file(source_file, target_file, folder_name):
    with open(source_file, 'r') as file:
        content = file.read()
    
    # 修改 import 语句
    content = re.sub(r'from \'./wordDataLesson\d+\'', f"from './wordDataLesson{folder_name}'", content)
    
    # 修改 audioPath
    content = re.sub(r'const audioPath = `backend/audio_cache/courseId_11/\d+/`', 
                     f'const audioPath = `backend/audio_cache/courseId_11/{folder_name}/`', 
                     content)
    
    with open(target_file, 'w') as file:
        file.write(content)

def main():
    # 获取当前目录
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 源文件路径
    source_file = os.path.join(current_dir, 'TypingGame.tsx')
    
    # 确保源文件存在
    if not os.path.exists(source_file):
        print(f"错误：源文件 {source_file} 不存在")
        return

    # 遍历当前目录下的所有文件夹
    for folder_name in os.listdir(current_dir):
        folder_path = os.path.join(current_dir, folder_name)
        
        # 检查是否为目录且名称为数字
        if os.path.isdir(folder_path) and folder_name.isdigit():
            target_file = os.path.join(folder_path, 'TypingGame.tsx')
            
            # 复制并修改文件
            shutil.copy2(source_file, target_file)
            modify_file(target_file, target_file, folder_name)
            
            print(f"已更新 {target_file}")

if __name__ == "__main__":
    main()