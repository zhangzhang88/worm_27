export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Good morning",
    "chinese": "早上好",
    "pronunciation": "/ɡʊd/ /ˈmɔːrnɪŋ/"
  },
  {
    "id": "2",
    "sentence": "Mr Davis",
    "chinese": "戴维斯先生",
    "pronunciation": "/ˈmɪstər/ /ˈdeɪvɪs/"
  },
  {
    "id": "3",
    "sentence": "Good morning , Mr Davis",
    "chinese": "早上好，戴维斯先生",
    "pronunciation": "/ɡʊd/ /ˈmɔːrnɪŋ/ /ˈmɪstər/ /ˈdeɪvɪs/"
  },
  {
    "id": "4",
    "sentence": "Good morning , Rudy",
    "chinese": "早上好，鲁迪",
    "pronunciation": "/ɡʊd/ /ˈmɔːrnɪŋ/ /ˈruːdi/"
  },
  {
    "id": "5",
    "sentence": "How are you today",
    "chinese": "今天过得怎么样？",
    "pronunciation": "/haʊ/ /ɑr/ /juː; jʊ/ /təˈdeɪ/"
  },
  {
    "id": "6",
    "sentence": "Good morning , Rudy . How are you today ?",
    "chinese": "早上好，鲁迪今天过得怎么样？",
    "pronunciation": "/ɡʊd/ /ˈmɔːrnɪŋ/ /ˈruːdi/ /haʊ/ /ɑr/ /juː; jʊ/ /təˈdeɪ/"
  },
  {
    "id": "7",
    "sentence": "I'm doing well",
    "chinese": "我很好",
    "pronunciation": "/aɪm/ /ˈduːɪŋ/ /wel/"
  },
  {
    "id": "8",
    "sentence": "thanks",
    "chinese": "谢谢",
    "pronunciation": "/θæŋks/"
  },
  {
    "id": "9",
    "sentence": "I'm doing well , thanks",
    "chinese": "我很好，谢谢",
    "pronunciation": "/aɪm/ /ˈduːɪŋ/ /wel/ /θæŋks/"
  },
  {
    "id": "10",
    "sentence": "So",
    "chinese": "那么",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "11",
    "sentence": "what have you got for me today",
    "chinese": "今天你给我带来了什么？",
    "pronunciation": "/wʌt/ /hæv/ /juː; jʊ/ /ɡɑːt/ /fɔːr; fər/ /miː/ /təˈdeɪ/"
  },
  {
    "id": "12",
    "sentence": "So , what have you got for me today ?",
    "chinese": "那么，今天你给我带来了什么？",
    "pronunciation": "/soʊ/ /wʌt/ /hæv/ /juː; jʊ/ /ɡɑːt/ /fɔːr; fər/ /miː/ /təˈdeɪ/"
  },
  {
    "id": "13",
    "sentence": "I have exciting news",
    "chinese": "我有令人兴奋的消息",
    "pronunciation": "/aɪ/ /hæv/ /ɪkˈsaɪtɪŋ/ /nuːz/"
  },
  {
    "id": "14",
    "sentence": "Mr Davis",
    "chinese": "戴维斯先生",
    "pronunciation": "/ˈmɪstər/ /ˈdeɪvɪs/"
  },
  {
    "id": "15",
    "sentence": "I have exciting news Mr Davis",
    "chinese": "我有令人兴奋的消息，戴维斯先生",
    "pronunciation": "/aɪ/ /hæv/ /ɪkˈsaɪtɪŋ/ /nuːz/ /ˈmɪstər/ /ˈdeɪvɪs/"
  },
  {
    "id": "16",
    "sentence": "What is it",
    "chinese": "这是什么？",
    "pronunciation": "/wʌt/ /ɪz/ /ɪt/"
  },
  {
    "id": "17",
    "sentence": "Did someone make an offer",
    "chinese": "有人出价了吗？",
    "pronunciation": "/dɪd/ /ˈsʌmwʌn/ /meɪk/ /æn; ən/ /ˈɔːfər/"
  },
  {
    "id": "18",
    "sentence": "What is it ? Did someone make an offer ?",
    "chinese": "怎么了？有人出价了吗？",
    "pronunciation": "/wʌt/ /ɪz/ /ɪt/ /dɪd/ /ˈsʌmwʌn/ /meɪk/ /æn; ən/ /ˈɔːfər/"
  },
  {
    "id": "19",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "20",
    "sentence": "I have a serious offer on your house",
    "chinese": "我收到了一个关于您房子的正式报价",
    "pronunciation": "/aɪ/ /hæv/ /ə; eɪ/ /ˈsɪriəs/ /ˈɔːfər/ /ɑːn/ /jʊr; jər/ /haʊs/"
  },
  {
    "id": "21",
    "sentence": "Yes . I have a serious offer on your house",
    "chinese": "是的我收到了一个关于您房子的正式报价。",
    "pronunciation": "/jes/ /aɪ/ /hæv/ /ə; eɪ/ /ˈsɪriəs/ /ˈɔːfər/ /ɑːn/ /jʊr; jər/ /haʊs/"
  },
  {
    "id": "22",
    "sentence": "This may be the one",
    "chinese": "这次可能真的成了",
    "pronunciation": "/ðɪs/ /meɪ/ /biː/ /ðə/ /wʌn/"
  },
  {
    "id": "23",
    "sentence": "Yes . I have a serious offer on your house . This may be the one",
    "chinese": "是的我收到了一个关于您房子的正式报价。这次可能真的成了。",
    "pronunciation": "/jes/ /aɪ/ /hæv/ /ə; eɪ/ /ˈsɪriəs/ /ˈɔːfər/ /ɑːn/ /jʊr; jər/ /haʊs/ /ðɪs/ /meɪ/ /biː/ /ðə/ /wʌn/"
  },
  {
    "id": "24",
    "sentence": "How close to the asking price",
    "chinese": "与要价相差多少",
    "pronunciation": "/haʊ/ /kloʊs/ /tuː; tə/ /ðə/ /ˈæskɪŋ/ /praɪs/"
  },
  {
    "id": "25",
    "sentence": "is the offer",
    "chinese": "是报价吗",
    "pronunciation": "/ɪz/ /ðə/ /ˈɔːfər/"
  },
  {
    "id": "26",
    "sentence": "How close to the asking price is the offer ?",
    "chinese": "报价与要价相差多少？",
    "pronunciation": "/haʊ/ /kloʊs/ /tuː; tə/ /ðə/ /ˈæskɪŋ/ /praɪs/ /ɪz/ /ðə/ /ˈɔːfər/"
  },
  {
    "id": "27",
    "sentence": "Very close",
    "chinese": "非常接近",
    "pronunciation": "/ˈveri/ /kloʊs/"
  },
  {
    "id": "28",
    "sentence": "The offer is at $325000",
    "chinese": "报价是32.5万美元",
    "pronunciation": "/ðə/ /ˈɔːfər/ /ɪz/ /æt; ət/ /θriː tuː faɪv/ /θuː θuː θuː/"
  },
  {
    "id": "29",
    "sentence": "Very close . The offer is at $325000",
    "chinese": "非常接近了报价是32.5万美元。",
    "pronunciation": "/ˈveri/ /kloʊs/ /ðə/ /ˈɔːfər/ /ɪz/ /æt; ət/ /θriː tuː faɪv/ /θuː θuː θuː/"
  },
  {
    "id": "30",
    "sentence": "Wow",
    "chinese": "哇",
    "pronunciation": "/waʊ/"
  },
  {
    "id": "31",
    "sentence": "that's great",
    "chinese": "太棒了",
    "pronunciation": "/ðæts/ /ɡreɪt/"
  },
  {
    "id": "32",
    "sentence": "Wow , that's great",
    "chinese": "哇，太棒了",
    "pronunciation": "/waʊ/ /ðæts/ /ɡreɪt/"
  },
  {
    "id": "33",
    "sentence": "That's almost",
    "chinese": "这几乎",
    "pronunciation": "/ðæts/ /ˈɔːlmoʊst/"
  },
  {
    "id": "34",
    "sentence": "Wow , that's great . That's almost",
    "chinese": "哇，太棒了这几乎",
    "pronunciation": "/waʊ/ /ðæts/ /ɡreɪt/ /ðæts/ /ˈɔːlmoʊst/"
  },
  {
    "id": "35",
    "sentence": "what we listed it for",
    "chinese": "我们列出的价格",
    "pronunciation": "/wʌt/ /wiː; wi/ /ˈlɪstɪd/ /ɪt/ /fɔːr; fər/"
  },
  {
    "id": "36",
    "sentence": "Wow , that's great . That's almost what we listed it for",
    "chinese": "哇，太棒了这几乎就是我们列出的价格。",
    "pronunciation": "/waʊ/ /ðæts/ /ɡreɪt/ /ðæts/ /ˈɔːlmoʊst/ /wʌt/ /wiː; wi/ /ˈlɪstɪd/ /ɪt/ /fɔːr; fər/"
  },
  {
    "id": "37",
    "sentence": "There are a couple of conditions , though",
    "chinese": "不过有几个条件",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈkʌp(ə)l/ /ʌv/ /kənˈdɪʃ(ə)nz/ /ðoʊ/"
  },
  {
    "id": "38",
    "sentence": "but they're not too bad",
    "chinese": "但它们并不太糟",
    "pronunciation": "/bʌt/ /ˈðer/ /nɑːt/ /tuː/ /bæd/"
  },
  {
    "id": "39",
    "sentence": "There are a couple of conditions , though , but they're not too bad",
    "chinese": "不过有几个条件，但也不算太糟",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈkʌp(ə)l/ /ʌv/ /kənˈdɪʃ(ə)nz/ /ðoʊ/ /bʌt/ /ˈðer/ /nɑːt/ /tuː/ /bæd/"
  },
  {
    "id": "40",
    "sentence": "Okay",
    "chinese": "好的",
    "pronunciation": "/oʊˈkeɪ/"
  },
  {
    "id": "41",
    "sentence": "I'm all ears",
    "chinese": "我洗耳恭听",
    "pronunciation": "/aɪm/ /ɔːl/ /ɪrz/"
  },
  {
    "id": "42",
    "sentence": "Okay , I'm all ears",
    "chinese": "好的，我洗耳恭听",
    "pronunciation": "/oʊˈkeɪ/ /aɪm/ /ɔːl/ /ɪrz/"
  },
  {
    "id": "43",
    "sentence": "Let's go over them",
    "chinese": "我们一起来过一遍吧",
    "pronunciation": "/lets/ /ɡoʊ/ /ˈoʊvər/ /ðem; ðəm/"
  },
  {
    "id": "44",
    "sentence": "Okay , I'm all ears . Let's go over them",
    "chinese": "好的，我洗耳恭听我们一起来过一遍吧。",
    "pronunciation": "/oʊˈkeɪ/ /aɪm/ /ɔːl/ /ɪrz/ /lets/ /ɡoʊ/ /ˈoʊvər/ /ðem; ðəm/"
  },
  {
    "id": "45",
    "sentence": "I'm ready to sell",
    "chinese": "我已经准备好出售了",
    "pronunciation": "/aɪm/ /ˈredi/ /tuː; tə/ /sel/"
  },
  {
    "id": "46",
    "sentence": "Okay , I'm all ears . Let's go over them . I'm ready to sell",
    "chinese": "好的，我洗耳恭听我们一起来过一遍吧。我已经准备好出售了。",
    "pronunciation": "/oʊˈkeɪ/ /aɪm/ /ɔːl/ /ɪrz/ /lets/ /ɡoʊ/ /ˈoʊvər/ /ðem; ðəm/ /aɪm/ /ˈredi/ /tuː; tə/ /sel/"
  },
];
