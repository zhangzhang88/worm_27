import os
import re

# 读取原始的 TypingGame.tsx 文件
with open('TypingGame.tsx', 'r', encoding='utf-8') as file:
    original_content = file.read()

# 遍历 1-55 的文件夹
for i in range(1, 56):
    folder_name = str(i)
    folder_path = os.path.join(os.getcwd(), folder_name)
    
    if os.path.exists(folder_path):
        # 修改内容
        modified_content = original_content
        
        # 修改 import 语句
        modified_content = re.sub(
            r'import \{ SentenceData \} from \'./wordDataLesson\d+\';',
            f"import {{ SentenceData }} from './wordDataLesson{i}';",
            modified_content
        )
        
        # 修改 audioPath
        modified_content = re.sub(
            r'const audioPath = `backend/audio_cache/courseId_4/\d+/`;',
            f"const audioPath = `backend/audio_cache/courseId_4/{i}/`;",
            modified_content
        )
        
        # 写入修改后的内容到目标文件
        target_file_path = os.path.join(folder_path, 'TypingGame.tsx')
        with open(target_file_path, 'w', encoding='utf-8') as file:
            file.write(modified_content)
        
        print(f"Updated TypingGame.tsx in folder {i}")
    else:
        print(f"Folder {i} does not exist")

print("All files have been updated.")