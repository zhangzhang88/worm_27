import os

def read_lesson_txt(file_path):
    sentences = []
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
        for i in range(0, len(lines), 5):  # 每5行一组，考虑空行
            if i + 3 < len(lines):  # 确保至少有4行有效数据
                id = lines[i].strip()
                sentence = lines[i + 1].strip()
                chinese = lines[i + 2].strip()
                pronunciation = lines[i + 3].strip()
                sentences.append({
                    "id": id,
                    "sentence": sentence,
                    "chinese": chinese,
                    "pronunciation": pronunciation
                })
    return sentences

def write_lesson_ts(file_path, sentences):
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write("export interface SentenceData {\n")
        file.write("  id: string;\n")
        file.write("  sentence: string;\n")
        file.write("  chinese: string;\n")
        file.write("  pronunciation: string;\n")
        file.write("}\n\n")
        file.write("export const sentences: SentenceData[] = [\n")
        for sentence in sentences:
            file.write(f'  {{\n')
            file.write(f'    "id": "{sentence["id"]}",\n')
            file.write(f'    "sentence": "{sentence["sentence"]}",\n')
            file.write(f'    "chinese": "{sentence["chinese"]}",\n')
            file.write(f'    "pronunciation": "{sentence["pronunciation"]}"\n')
            file.write(f'  }},\n')
        file.write("];\n")

def main():
    current_directory = os.path.dirname(os.path.abspath(__file__))
    lesson_txt_path = os.path.join(current_directory, 'lesson.txt')
    lesson_ts_path = os.path.join(current_directory, 'lesson.ts')

    sentences = read_lesson_txt(lesson_txt_path)
    write_lesson_ts(lesson_ts_path, sentences)

if __name__ == "__main__":
    main()