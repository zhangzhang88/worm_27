export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Summer",
    "chinese": "夏天",
    "pronunciation": "/ˈsʌmər/"
  },
  {
    "id": "2",
    "sentence": "Spring",
    "chinese": "春天",
    "pronunciation": "/sprɪŋ/"
  },
  {
    "id": "3",
    "sentence": "Winter",
    "chinese": "冬天",
    "pronunciation": "/ˈwɪntər/"
  },
  {
    "id": "4",
    "sentence": "Fall",
    "chinese": "秋天",
    "pronunciation": "/fɔl/"
  },
  {
    "id": "5",
    "sentence": "Season",
    "chinese": "季节",
    "pronunciation": "/ˈsiːz(ə)n/"
  },
];
