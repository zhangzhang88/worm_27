export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "I really liked this car",
    "chinese": "我真的喜欢这辆车",
    "pronunciation": "/aɪ/ /ˈriːəli/ /laɪkt/ /ðɪs/ /kɑːr/"
  },
  {
    "id": "2",
    "sentence": "How much are you asking for it",
    "chinese": "你打算要多少钱？",
    "pronunciation": "/haʊ/ /mʌtʃ/ /ɑr/ /juː; jʊ/ /ˈæskɪŋ/ /fɔːr; fər/ /ɪt/"
  },
  {
    "id": "3",
    "sentence": "I really liked this car . How much are you asking for it ?",
    "chinese": "我真的很喜欢这辆车你打算要多少钱？",
    "pronunciation": "/aɪ/ /ˈriːəli/ /laɪkt/ /ðɪs/ /kɑːr/ /haʊ/ /mʌtʃ/ /ɑr/ /juː; jʊ/ /ˈæskɪŋ/ /fɔːr; fər/ /ɪt/"
  },
  {
    "id": "4",
    "sentence": "I'm asking for $2,000",
    "chinese": "我要求的是2000美元",
    "pronunciation": "/aɪm/ /ˈæskɪŋ/ /fɔːr; fər/ /tuː/ /θuː θuː θuː/"
  },
  {
    "id": "5",
    "sentence": "It has some minor problems",
    "chinese": "它有一些小问题",
    "pronunciation": "/ɪt/ /hæz; həz/ /sʌm; səm/ /ˈmaɪnər/ /ˈprɑːbləmz/"
  },
  {
    "id": "6",
    "sentence": "I'm asking for $2000 . It has some minor problems",
    "chinese": "我要求的是2000美元它有一些小问题。",
    "pronunciation": "/aɪm/ /ˈæskɪŋ/ /fɔːr; fər/ /tuː/ /θuː θuː θuː/ /ɪt/ /hæz; həz/ /sʌm; səm/ /ˈmaɪnər/ /ˈprɑːbləmz/"
  },
  {
    "id": "7",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "8",
    "sentence": "my mechanic told me",
    "chinese": "我的修车师傅告诉我",
    "pronunciation": "/maɪ/ /məˈkænɪk; mɪˈkænɪk/ /toʊld/ /miː/"
  },
  {
    "id": "9",
    "sentence": "Yes , my mechanic told me",
    "chinese": "是的，我的修车师傅告诉我",
    "pronunciation": "/jes/ /maɪ/ /məˈkænɪk; mɪˈkænɪk/ /toʊld/ /miː/"
  },
  {
    "id": "10",
    "sentence": "it was a quick fix",
    "chinese": "这是一个快速修复的问题",
    "pronunciation": "/ɪt/ /wʌz; wəz/ /ə; eɪ/ /kwɪk/ /fɪks/"
  },
  {
    "id": "11",
    "sentence": "Yes , my mechanic told me it was a quick fix",
    "chinese": "是的，我的修车师傅告诉我这是一个快速修复的问题",
    "pronunciation": "/jes/ /maɪ/ /məˈkænɪk; mɪˈkænɪk/ /toʊld/ /miː/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kwɪk/ /fɪks/"
  },
  {
    "id": "12",
    "sentence": "So",
    "chinese": "那么",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "13",
    "sentence": "you want",
    "chinese": "你想",
    "pronunciation": "/juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "14",
    "sentence": "So , you want",
    "chinese": "那么，你想",
    "pronunciation": "/soʊ/ /juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "15",
    "sentence": "to take",
    "chinese": "开车",
    "pronunciation": "/tuː; tə/ /teɪk/"
  },
  {
    "id": "16",
    "sentence": "So , you want to take",
    "chinese": "你是想开车吗？",
    "pronunciation": "/soʊ/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /teɪk/"
  },
  {
    "id": "17",
    "sentence": "the car",
    "chinese": "你想开车吗？",
    "pronunciation": "/ðə/ /kɑːr/"
  },
  {
    "id": "18",
    "sentence": "So , you want to take the car ?",
    "chinese": "那么，你是想开车吗？",
    "pronunciation": "/soʊ/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /teɪk/ /ðə/ /kɑːr/"
  },
  {
    "id": "19",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "20",
    "sentence": "I could write",
    "chinese": "我现在可以写",
    "pronunciation": "/aɪ/ /kʊd/ /raɪt/"
  },
  {
    "id": "21",
    "sentence": "Yes , I could write",
    "chinese": "是的，我能给你写",
    "pronunciation": "/jes/ /aɪ/ /kʊd/ /raɪt/"
  },
  {
    "id": "22",
    "sentence": "you a check",
    "chinese": "你一张支票",
    "pronunciation": "/juː; jʊ/ /ə; eɪ/ /tʃek/"
  },
  {
    "id": "23",
    "sentence": "Yes , I could write you a check",
    "chinese": "是的，我现在就可以给你写支票",
    "pronunciation": "/jes/ /aɪ/ /kʊd/ /raɪt/ /juː; jʊ/ /ə; eɪ/ /tʃek/"
  },
  {
    "id": "24",
    "sentence": "right now",
    "chinese": "立刻",
    "pronunciation": "/raɪt/ /naʊ/"
  },
  {
    "id": "25",
    "sentence": "Yes , I could write you a check right now",
    "chinese": "是的，我现在就可以给你写支票",
    "pronunciation": "/jes/ /aɪ/ /kʊd/ /raɪt/ /juː; jʊ/ /ə; eɪ/ /tʃek/ /raɪt/ /naʊ/"
  },
  {
    "id": "26",
    "sentence": "That sounds good",
    "chinese": "那听起来不错",
    "pronunciation": "/ðæt/ /saʊndz/ /ɡʊd/"
  },
  {
    "id": "27",
    "sentence": "Could I cash it today",
    "chinese": "我今天可以把它换成现金吗？",
    "pronunciation": "/kʊd/ /aɪ/ /kæʃ/ /ɪt/ /təˈdeɪ/"
  },
  {
    "id": "28",
    "sentence": "That sounds good . Could I cash it today ?",
    "chinese": "听起来不错我今天可以把它换成现金吗？",
    "pronunciation": "/ðæt/ /saʊndz/ /ɡʊd/ /kʊd/ /aɪ/ /kæʃ/ /ɪt/ /təˈdeɪ/"
  },
  {
    "id": "29",
    "sentence": "Yeah , go ahead",
    "chinese": "是啊，继续吧",
    "pronunciation": "/jeə/ /ɡoʊ/ /əˈhɛd/"
  },
  {
    "id": "30",
    "sentence": "It will clear",
    "chinese": "天气会变晴",
    "pronunciation": "/ɪt/ /wɪl/ /klɪr/"
  },
  {
    "id": "31",
    "sentence": "Yeah , go ahead . It will clear",
    "chinese": "是啊，继续吧天气会变晴。",
    "pronunciation": "/jeə/ /ɡoʊ/ /əˈhɛd/ /ɪt/ /wɪl/ /klɪr/"
  },
  {
    "id": "32",
    "sentence": "don't worry",
    "chinese": "别担心",
    "pronunciation": "/doʊnt/ /ˈwɜːri/"
  },
  {
    "id": "33",
    "sentence": "Yeah , go ahead . It will clear don't worry",
    "chinese": "是啊，继续吧天气会变晴的，别担心。",
    "pronunciation": "/jeə/ /ɡoʊ/ /əˈhɛd/ /ɪt/ /wɪl/ /klɪr/ /doʊnt/ /ˈwɜːri/"
  },
  {
    "id": "34",
    "sentence": "Didn't mean",
    "chinese": "没什么意思",
    "pronunciation": "/ˈdɪd(ə)nt/ /miːn/"
  },
  {
    "id": "35",
    "sentence": "anything by it",
    "chinese": "这没什么意思的",
    "pronunciation": "/ˈɛnɪθɪŋ/ /baɪ/ /ɪt/"
  },
  {
    "id": "36",
    "sentence": "Didn't mean anything by it",
    "chinese": "这没什么意思的",
    "pronunciation": "/ˈdɪd(ə)nt/ /miːn/ /ˈɛnɪθɪŋ/ /baɪ/ /ɪt/"
  },
  {
    "id": "37",
    "sentence": "No , it's cool",
    "chinese": "不，这很酷",
    "pronunciation": "/noʊ/ /ɪts/ /kuːl/"
  },
  {
    "id": "38",
    "sentence": "I know",
    "chinese": "我知道",
    "pronunciation": "/aɪ/ /noʊ/"
  },
  {
    "id": "39",
    "sentence": "No , it's cool . I know",
    "chinese": "不，这很酷我知道",
    "pronunciation": "/noʊ/ /ɪts/ /kuːl/ /aɪ/ /noʊ/"
  },
  {
    "id": "40",
    "sentence": "sometimes",
    "chinese": "有时候",
    "pronunciation": "/ˈsʌmtaɪmz/"
  },
  {
    "id": "41",
    "sentence": "No , it's cool . I know sometimes",
    "chinese": "不，这很酷我知道有时候",
    "pronunciation": "/noʊ/ /ɪts/ /kuːl/ /aɪ/ /noʊ/ /ˈsʌmtaɪmz/"
  },
  {
    "id": "42",
    "sentence": "you have to wait",
    "chinese": "你得等待",
    "pronunciation": "/juː; jʊ/ /hæv/ /tuː; tə/ /weɪt/"
  },
  {
    "id": "43",
    "sentence": "No , it's cool . I know sometimes you have to wait",
    "chinese": "不，这很酷我知道有时候你得等待。",
    "pronunciation": "/noʊ/ /ɪts/ /kuːl/ /aɪ/ /noʊ/ /ˈsʌmtaɪmz/ /juː; jʊ/ /hæv/ /tuː; tə/ /weɪt/"
  },
  {
    "id": "44",
    "sentence": "for a check",
    "chinese": "到账",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /tʃek/"
  },
  {
    "id": "45",
    "sentence": "No , it's cool . I know sometimes you have to wait for a check",
    "chinese": "不，这很酷我知道有时候你得等待支票到账。",
    "pronunciation": "/noʊ/ /ɪts/ /kuːl/ /aɪ/ /noʊ/ /ˈsʌmtaɪmz/ /juː; jʊ/ /hæv/ /tuː; tə/ /weɪt/ /fɔːr; fər/ /ə; eɪ/ /tʃek/"
  },
  {
    "id": "46",
    "sentence": "to clear",
    "chinese": "清算",
    "pronunciation": "/tuː; tə/ /klɪr/"
  },
  {
    "id": "47",
    "sentence": "No , it's cool . I know sometimes you have to wait for a check to clear",
    "chinese": "不，这很酷我知道有时候你得等待支票到账。",
    "pronunciation": "/noʊ/ /ɪts/ /kuːl/ /aɪ/ /noʊ/ /ˈsʌmtaɪmz/ /juː; jʊ/ /hæv/ /tuː; tə/ /weɪt/ /fɔːr; fər/ /ə; eɪ/ /tʃek/ /tuː; tə/ /klɪr/"
  },
  {
    "id": "48",
    "sentence": "Great",
    "chinese": "太好了",
    "pronunciation": "/ɡreɪt/"
  },
  {
    "id": "49",
    "sentence": "So",
    "chinese": "那么",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "50",
    "sentence": "Great ., So",
    "chinese": "好的，那么请把它写成Michael Slender的名字？",
    "pronunciation": "/ɡreɪt/ /soʊ/"
  },
  {
    "id": "51",
    "sentence": "could you make it out",
    "chinese": "你能把它写成Michael Slender的名字吗？",
    "pronunciation": "/kʊd/ /juː; jʊ/ /meɪk/ /ɪt/ /aʊt/"
  },
  {
    "id": "52",
    "sentence": "Great ., So , could you make it out",
    "chinese": "好的，那么请把它写成Michael Slender的名字？",
    "pronunciation": "/ɡreɪt/ /soʊ/ /kʊd/ /juː; jʊ/ /meɪk/ /ɪt/ /aʊt/"
  },
  {
    "id": "53",
    "sentence": "to Michael Slender",
    "chinese": "请把它写成Michael Slender的名字？",
    "pronunciation": "/tuː; tə/ /ˈmaɪk(ə)l/ /ˈslendər/"
  },
  {
    "id": "54",
    "sentence": "Great ., So , could you make it out to Michael Slender ?",
    "chinese": "好的，那么请把它写成Michael Slender的名字？",
    "pronunciation": "/ɡreɪt/ /soʊ/ /kʊd/ /juː; jʊ/ /meɪk/ /ɪt/ /aʊt/ /tuː; tə/ /ˈmaɪk(ə)l/ /ˈslendər/"
  },
  {
    "id": "55",
    "sentence": "Sure thing",
    "chinese": "当然",
    "pronunciation": "/ʃʊr/ /θɪŋ/"
  },
  {
    "id": "56",
    "sentence": "I'm going",
    "chinese": "我打算",
    "pronunciation": "/aɪm/ /ˈɡoʊɪŋ/"
  },
  {
    "id": "57",
    "sentence": "Sure thing . I'm going",
    "chinese": "当然",
    "pronunciation": "/ʃʊr/ /θɪŋ/ /aɪm/ /ˈɡoʊɪŋ/"
  },
  {
    "id": "58",
    "sentence": "to put",
    "chinese": "put",
    "pronunciation": "/tuː; tə/ /pʊt/"
  },
  {
    "id": "59",
    "sentence": "Sure thing . I'm going to put",
    "chinese": "当然，我打算把",
    "pronunciation": "/ʃʊr/ /θɪŋ/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /pʊt/"
  },
  {
    "id": "60",
    "sentence": "car payment",
    "chinese": "汽车付款",
    "pronunciation": "/kɑːr/ /ˈpeɪmənt/"
  },
  {
    "id": "61",
    "sentence": "Sure thing . I'm going to put car payment",
    "chinese": "当然，我打算把汽车付款记在备注里",
    "pronunciation": "/ʃʊr/ /θɪŋ/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /pʊt/ /kɑːr/ /ˈpeɪmənt/"
  },
  {
    "id": "62",
    "sentence": "under the memo",
    "chinese": "在备注下",
    "pronunciation": "/ˈʌndər/ /ðə/ /ˈmemoʊ/"
  },
  {
    "id": "63",
    "sentence": "Sure thing . I'm going to put car payment under the memo",
    "chinese": "当然，我会把汽车付款记在备注里",
    "pronunciation": "/ʃʊr/ /θɪŋ/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /pʊt/ /kɑːr/ /ˈpeɪmənt/ /ˈʌndər/ /ðə/ /ˈmemoʊ/"
  },
  {
    "id": "64",
    "sentence": "Sounds good , man",
    "chinese": "听起来不错，兄弟",
    "pronunciation": "/saʊndz/ /ɡʊd/ /mæn/"
  },
  {
    "id": "65",
    "sentence": "I will take care of things",
    "chinese": "我会处理事务",
    "pronunciation": "/aɪ/ /wɪl/ /teɪk/ /ker/ /ʌv/ /θɪŋz/"
  },
  {
    "id": "66",
    "sentence": "Sounds good , man . I will take care of things",
    "chinese": "听起来不错，兄弟我将处理这些事务。",
    "pronunciation": "/saʊndz/ /ɡʊd/ /mæn/ /aɪ/ /wɪl/ /teɪk/ /ker/ /ʌv/ /θɪŋz/"
  },
  {
    "id": "67",
    "sentence": "at the DMV",
    "chinese": "在DMV",
    "pronunciation": "/æt; ət/ /ðə/ /ˌdiːemˈviː/"
  },
  {
    "id": "68",
    "sentence": "Sounds good , man . I will take care of things at the DMV",
    "chinese": "听起来不错，兄弟我将明天处理DMV的事务。",
    "pronunciation": "/saʊndz/ /ɡʊd/ /mæn/ /aɪ/ /wɪl/ /teɪk/ /ker/ /ʌv/ /θɪŋz/ /æt; ət/ /ðə/ /ˌdiːemˈviː/"
  },
  {
    "id": "69",
    "sentence": "tomorrow",
    "chinese": "明天",
    "pronunciation": "/təˈmɑːroʊ/"
  },
  {
    "id": "70",
    "sentence": "Sounds good , man . I will take care of things at the DMV tomorrow",
    "chinese": "听起来不错，兄弟我明天会处理DMV那边的事务。",
    "pronunciation": "/saʊndz/ /ɡʊd/ /mæn/ /aɪ/ /wɪl/ /teɪk/ /ker/ /ʌv/ /θɪŋz/ /æt; ət/ /ðə/ /ˌdiːemˈviː/ /təˈmɑːroʊ/"
  },
];
