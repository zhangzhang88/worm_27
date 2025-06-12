import os

def rename_mp3_files():
    # 获取当前目录
    current_directory = os.getcwd()
    
    # 遍历当前目录下的所有文件
    for filename in os.listdir(current_directory):
        # 检查文件名是否以大写的MP3结尾
        if filename.endswith('.MP3'):
            # 构造新的文件名，将大写的MP3改为小写的mp3
            new_filename = filename[:-4] + '.mp3'
            # 重命名文件
            os.rename(os.path.join(current_directory, filename), os.path.join(current_directory, new_filename))
            print(f'Renamed {filename} to {new_filename}')

if __name__ == "__main__":
    rename_mp3_files()