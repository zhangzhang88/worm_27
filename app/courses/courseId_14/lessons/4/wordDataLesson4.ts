export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hey",
    "chinese": "嘿",
    "pronunciation": "/heɪ/"
  },
  {
    "id": "2",
    "sentence": "this is a nice library",
    "chinese": "这是一个很棒的图书馆",
    "pronunciation": "/ðɪs/ /ɪz/ /ə; eɪ/ /naɪs/ /ˈlaɪbreri/"
  },
  {
    "id": "3",
    "sentence": "Hey , this is a nice library",
    "chinese": "嘿，这是一个很棒的图书馆",
    "pronunciation": "/heɪ/ /ðɪs/ /ɪz/ /ə; eɪ/ /naɪs/ /ˈlaɪbreri/"
  },
  {
    "id": "4",
    "sentence": "It is",
    "chinese": "是的",
    "pronunciation": "/ɪt/ /ɪz/"
  },
  {
    "id": "5",
    "sentence": "I didn't expect this",
    "chinese": "我没想到这一点",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /ɪkˈspekt/ /ðɪs/"
  },
  {
    "id": "6",
    "sentence": "It is . I didn't expect this",
    "chinese": "是的，我没想到这一点",
    "pronunciation": "/ɪt/ /ɪz/ /aɪ/ /ˈdɪd(ə)nt/ /ɪkˈspekt/ /ðɪs/"
  },
  {
    "id": "7",
    "sentence": "It doesn't look like much",
    "chinese": "看起来并不起眼",
    "pronunciation": "/ɪt/ /ˈdʌznt/ /lʊk/ /laɪk/ /mʌtʃ/"
  },
  {
    "id": "8",
    "sentence": "from the outside",
    "chinese": "从外面",
    "pronunciation": "/frʌm/ /ðə/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "9",
    "sentence": "It doesn't look like much from the outside",
    "chinese": "从外面看起来并不起眼",
    "pronunciation": "/ɪt/ /ˈdʌznt/ /lʊk/ /laɪk/ /mʌtʃ/ /frʌm/ /ðə/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "10",
    "sentence": "Didn't you know",
    "chinese": "难道你不知道",
    "pronunciation": "/ˈdɪd(ə)nt/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "11",
    "sentence": "you can't tell a book",
    "chinese": "你不能通过封面判断一本书",
    "pronunciation": "/juː; jʊ/ /kænt/ /tel/ /ə; eɪ/ /bʊk/"
  },
  {
    "id": "12",
    "sentence": "Didn't you know you can't tell a book",
    "chinese": "难道你不知道不能以貌取人吗？",
    "pronunciation": "/ˈdɪd(ə)nt/ /juː; jʊ/ /noʊ/ /juː; jʊ/ /kænt/ /tel/ /ə; eɪ/ /bʊk/"
  },
  {
    "id": "13",
    "sentence": "by its cover",
    "chinese": "根据封面",
    "pronunciation": "/baɪ/ /ɪts/ /ˈkʌvər/"
  },
  {
    "id": "14",
    "sentence": "Didn't you know you can't tell a book by its cover ?",
    "chinese": "难道你不知道不能以貌取人吗？",
    "pronunciation": "/ˈdɪd(ə)nt/ /juː; jʊ/ /noʊ/ /juː; jʊ/ /kænt/ /tel/ /ə; eɪ/ /bʊk/ /baɪ/ /ɪts/ /ˈkʌvər/"
  },
  {
    "id": "15",
    "sentence": "That's funny",
    "chinese": "真有趣",
    "pronunciation": "/ðæts/ /ˈfʌni/"
  },
  {
    "id": "16",
    "sentence": "babe",
    "chinese": "宝贝",
    "pronunciation": "/beɪb/"
  },
  {
    "id": "17",
    "sentence": "That's funny , babe",
    "chinese": "真有趣，宝贝",
    "pronunciation": "/ðæts/ /ˈfʌni/ /beɪb/"
  },
  {
    "id": "18",
    "sentence": "Anyway",
    "chinese": "无论如何",
    "pronunciation": "/ˈeniweɪ/"
  },
  {
    "id": "19",
    "sentence": "we're going to need to get new library cards",
    "chinese": "我们需要办理新的借书证",
    "pronunciation": "/wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /niːd/ /tuː; tə/ /ɡet/ /nuː/ /ˈlaɪbreri/ /kɑːrdz/"
  },
  {
    "id": "20",
    "sentence": "Anyway , we're going to need to get new library cards",
    "chinese": "无论如何，我们需要办理新的借书证",
    "pronunciation": "/ˈeniweɪ/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /niːd/ /tuː; tə/ /ɡet/ /nuː/ /ˈlaɪbreri/ /kɑːrdz/"
  },
  {
    "id": "21",
    "sentence": "I'll go",
    "chinese": "我去",
    "pronunciation": "/aɪl/ /ɡoʊ/"
  },
  {
    "id": "22",
    "sentence": "ask about it",
    "chinese": "问问看",
    "pronunciation": "/æsk/ /əˈbaʊt/ /ɪt/"
  },
  {
    "id": "23",
    "sentence": "I'll go ask about it",
    "chinese": "我去问问看",
    "pronunciation": "/aɪl/ /ɡoʊ/ /æsk/ /əˈbaʊt/ /ɪt/"
  },
  {
    "id": "24",
    "sentence": "Okay",
    "chinese": "好的",
    "pronunciation": "/oʊˈkeɪ/"
  },
  {
    "id": "25",
    "sentence": "I'm going to check the place out",
    "chinese": "我要去查看一下这个地方",
    "pronunciation": "/aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /tʃek/ /ðə/ /pleɪs/ /aʊt/"
  },
  {
    "id": "26",
    "sentence": "Okay , I'm going to check the place out",
    "chinese": "好的，我要去查看一下这个地方",
    "pronunciation": "/oʊˈkeɪ/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /tʃek/ /ðə/ /pleɪs/ /aʊt/"
  },
  {
    "id": "27",
    "sentence": "I went ahead",
    "chinese": "我已经继续",
    "pronunciation": "/aɪ/ /wɛnt/ /əˈhɛd/"
  },
  {
    "id": "28",
    "sentence": "and applied for a card",
    "chinese": "并申请了一张卡",
    "pronunciation": "/ænd; ənd/ /əˈplaɪd/ /fɔːr; fər/ /ə; eɪ/ /kɑːrd/"
  },
  {
    "id": "29",
    "sentence": "I went ahead and applied for a card",
    "chinese": "我已经申请了一张卡",
    "pronunciation": "/aɪ/ /wɛnt/ /əˈhɛd/ /ænd; ənd/ /əˈplaɪd/ /fɔːr; fər/ /ə; eɪ/ /kɑːrd/"
  },
  {
    "id": "30",
    "sentence": "You need to do the same",
    "chinese": "你需要做同样的事情",
    "pronunciation": "/juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ðə/ /seɪm/"
  },
  {
    "id": "31",
    "sentence": "I went ahead and applied for a card . You need to do the same",
    "chinese": "我已经申请了一张卡，你也需要这样做",
    "pronunciation": "/aɪ/ /wɛnt/ /əˈhɛd/ /ænd; ənd/ /əˈplaɪd/ /fɔːr; fər/ /ə; eɪ/ /kɑːrd/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ðə/ /seɪm/"
  },
  {
    "id": "32",
    "sentence": "I will right now",
    "chinese": "我现在就",
    "pronunciation": "/aɪ/ /wɪl/ /raɪt/ /naʊ/"
  },
  {
    "id": "33",
    "sentence": "but look at this exhibit",
    "chinese": "但请先看看这个展品",
    "pronunciation": "/bʌt/ /lʊk/ /æt; ət/ /ðɪs/ /ɪɡˈzɪbɪt/"
  },
  {
    "id": "34",
    "sentence": "I will right now , but look at this exhibit",
    "chinese": "我现在就翻译，但请先看看这个展品",
    "pronunciation": "/aɪ/ /wɪl/ /raɪt/ /naʊ/ /bʌt/ /lʊk/ /æt; ət/ /ðɪs/ /ɪɡˈzɪbɪt/"
  },
  {
    "id": "35",
    "sentence": "Wow",
    "chinese": "哇",
    "pronunciation": "/waʊ/"
  },
  {
    "id": "36",
    "sentence": "it's beautiful",
    "chinese": "真漂亮",
    "pronunciation": "/ɪts/ /ˈbjuːtɪf(ə)l/"
  },
  {
    "id": "37",
    "sentence": "Wow , it's beautiful",
    "chinese": "哇，真漂亮",
    "pronunciation": "/waʊ/ /ɪts/ /ˈbjuːtɪf(ə)l/"
  },
  {
    "id": "38",
    "sentence": "What is it",
    "chinese": "这是什么？",
    "pronunciation": "/wʌt/ /ɪz/ /ɪt/"
  },
  {
    "id": "39",
    "sentence": "Wow , it's beautiful . What is it ?",
    "chinese": "哇，真漂亮这是什么？",
    "pronunciation": "/waʊ/ /ɪts/ /ˈbjuːtɪf(ə)l/ /wʌt/ /ɪz/ /ɪt/"
  },
  {
    "id": "40",
    "sentence": "I'm not sure",
    "chinese": "我不确定",
    "pronunciation": "/aɪm/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "41",
    "sentence": "but I'm going to find out",
    "chinese": "但我会去弄清楚",
    "pronunciation": "/bʌt/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /faɪnd/ /aʊt/"
  },
  {
    "id": "42",
    "sentence": "I'm not sure , but I'm going to find out",
    "chinese": "我不确定，但我会去弄清楚",
    "pronunciation": "/aɪm/ /nɑːt/ /ʃʊr/ /bʌt/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /faɪnd/ /aʊt/"
  },
];
