export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Monday",
    "chinese": "星期一",
    "pronunciation": "/ˈmʌndeɪ/"
  },
  {
    "id": "2",
    "sentence": "Tuesday",
    "chinese": "星期二",
    "pronunciation": "/ˈtuːzdeɪ/"
  },
  {
    "id": "3",
    "sentence": "Wednesday",
    "chinese": "星期三",
    "pronunciation": "/ˈwenzdeɪ/"
  },
  {
    "id": "4",
    "sentence": "Thursday",
    "chinese": "星期四",
    "pronunciation": "/ˈθɜːrzdeɪ/"
  },
  {
    "id": "5",
    "sentence": "Friday",
    "chinese": "星期五",
    "pronunciation": "/ˈfraɪdeɪ/"
  },
  {
    "id": "6",
    "sentence": "Saturday",
    "chinese": "周六",
    "pronunciation": "/ˈsætərdeɪ/"
  },
  {
    "id": "7",
    "sentence": "Sunday",
    "chinese": "周日",
    "pronunciation": "/ˈsʌndeɪ/"
  },
];
