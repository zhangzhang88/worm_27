export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "I liked the car",
    "chinese": "我喜欢这辆车",
    "pronunciation": "/aɪ/ /laɪkt/ /ðə/ /kɑːr/"
  },
  {
    "id": "2",
    "sentence": "but",
    "chinese": "但是",
    "pronunciation": "/bʌt/"
  },
  {
    "id": "3",
    "sentence": "I liked the car but",
    "chinese": "我喜欢这辆车，但",
    "pronunciation": "/aɪ/ /laɪkt/ /ðə/ /kɑːr/ /bʌt/"
  },
  {
    "id": "4",
    "sentence": "I'm not happy with the price",
    "chinese": "对价格不满意",
    "pronunciation": "/aɪm/ /nɑːt/ /ˈhæpi/ /wɪð; wɪθ/ /ðə/ /praɪs/"
  },
  {
    "id": "5",
    "sentence": "I liked the car but I'm not happy with the price",
    "chinese": "我喜欢这辆车，但对价格不满意",
    "pronunciation": "/aɪ/ /laɪkt/ /ðə/ /kɑːr/ /bʌt/ /aɪm/ /nɑːt/ /ˈhæpi/ /wɪð; wɪθ/ /ðə/ /praɪs/"
  },
  {
    "id": "6",
    "sentence": "I'm sorry",
    "chinese": "抱歉",
    "pronunciation": "/aɪm/ /ˈsɑːri/"
  },
  {
    "id": "7",
    "sentence": "but",
    "chinese": "但是",
    "pronunciation": "/bʌt/"
  },
  {
    "id": "8",
    "sentence": "I'm sorry but",
    "chinese": "很抱歉，但是",
    "pronunciation": "/aɪm/ /ˈsɑːri/ /bʌt/"
  },
  {
    "id": "9",
    "sentence": "that's the best",
    "chinese": "这是我们能做的最好的",
    "pronunciation": "/ðæts/ /ðə/ /best/"
  },
  {
    "id": "10",
    "sentence": "I'm sorry but that's the best",
    "chinese": "很抱歉，但这已经是我们能做的最好的了",
    "pronunciation": "/aɪm/ /ˈsɑːri/ /bʌt/ /ðæts/ /ðə/ /best/"
  },
  {
    "id": "11",
    "sentence": "we can do",
    "chinese": "我们能做的",
    "pronunciation": "/wiː; wi/ /kæn/ /duː; də/"
  },
  {
    "id": "12",
    "sentence": "I'm sorry but that's the best we can do",
    "chinese": "很抱歉，但这已经是我们能做的最好的了",
    "pronunciation": "/aɪm/ /ˈsɑːri/ /bʌt/ /ðæts/ /ðə/ /best/ /wiː; wi/ /kæn/ /duː; də/"
  },
  {
    "id": "13",
    "sentence": "Could you talk to your manager",
    "chinese": "你能和你的经理谈谈",
    "pronunciation": "/kʊd/ /juː; jʊ/ /tɔːk/ /tuː; tə/ /jʊr; jər/ /ˈmænɪdʒər/"
  },
  {
    "id": "14",
    "sentence": "and have it brought down",
    "chinese": "看能不能把它降低",
    "pronunciation": "/ænd; ənd/ /hæv/ /ɪt/ /brɔːt/ /daʊn/"
  },
  {
    "id": "15",
    "sentence": "Could you talk to your manager and have it brought down ?",
    "chinese": "你能和你的经理谈谈，看能不能把它降低吗？",
    "pronunciation": "/kʊd/ /juː; jʊ/ /tɔːk/ /tuː; tə/ /jʊr; jər/ /ˈmænɪdʒər/ /ænd; ənd/ /hæv/ /ɪt/ /brɔːt/ /daʊn/"
  },
  {
    "id": "16",
    "sentence": "I could try",
    "chinese": "我可以试试",
    "pronunciation": "/aɪ/ /kʊd/ /traɪ/"
  },
  {
    "id": "17",
    "sentence": "but",
    "chinese": "但",
    "pronunciation": "/bʌt/"
  },
  {
    "id": "18",
    "sentence": "I could try but",
    "chinese": "我可以试试，但",
    "pronunciation": "/aɪ/ /kʊd/ /traɪ/ /bʌt/"
  },
  {
    "id": "19",
    "sentence": "it probably won't work",
    "chinese": "可能不会有效果",
    "pronunciation": "/ɪt/ /ˈprɑːbəbli/ /woʊnt/ /wɜrk/"
  },
  {
    "id": "20",
    "sentence": "I could try but it probably won't work",
    "chinese": "我可以试试，但可能不会有效果",
    "pronunciation": "/aɪ/ /kʊd/ /traɪ/ /bʌt/ /ɪt/ /ˈprɑːbəbli/ /woʊnt/ /wɜrk/"
  },
  {
    "id": "21",
    "sentence": "I can't afford $15,000",
    "chinese": "我承担不起15000美元",
    "pronunciation": "/aɪ/ /kænt/ /əˈfɔːrd/ /ˌfɪfˈtiːn/ /θuː θuː θuː/"
  },
  {
    "id": "22",
    "sentence": "The most I can spend",
    "chinese": "我最多只能花",
    "pronunciation": "/ðə/ /moʊst/ /aɪ/ /kæn/ /spend/"
  },
  {
    "id": "23",
    "sentence": "I can't afford $15000 . The most I can spend",
    "chinese": "我承担不起15000美元，我最多能花费",
    "pronunciation": "/aɪ/ /kænt/ /əˈfɔːrd/ /ˌfɪfˈtiːn/ /θuː θuː θuː/ /ðə/ /moʊst/ /aɪ/ /kæn/ /spend/"
  },
  {
    "id": "24",
    "sentence": "is $10,000",
    "chinese": "10000美元",
    "pronunciation": "/ɪz/ /ten/ /θuː θuː θuː/"
  },
  {
    "id": "25",
    "sentence": "I can't afford $15000 . The most I can spend is $10000",
    "chinese": "我承担不起15000美元我最多只能花10000美元。",
    "pronunciation": "/aɪ/ /kænt/ /əˈfɔːrd/ /ˌfɪfˈtiːn/ /θuː θuː θuː/ /ðə/ /moʊst/ /aɪ/ /kæn/ /spend/ /ɪz/ /ten/ /θuː θuː θuː/"
  },
  {
    "id": "26",
    "sentence": "Let me call my manager",
    "chinese": "让我给我的经理打电话",
    "pronunciation": "/let/ /miː/ /kɔːl/ /maɪ/ /ˈmænɪdʒər/"
  },
  {
    "id": "27",
    "sentence": "He is out of the office",
    "chinese": "他现在不在办公室",
    "pronunciation": "/hiː/ /ɪz/ /aʊt/ /ʌv/ /ðə/ /ˈɑːfɪs/"
  },
  {
    "id": "28",
    "sentence": "Let me call my manager . He is out of the office",
    "chinese": "让我给我的经理打电话他现在不在办公室。",
    "pronunciation": "/let/ /miː/ /kɔːl/ /maɪ/ /ˈmænɪdʒər/ /hiː/ /ɪz/ /aʊt/ /ʌv/ /ðə/ /ˈɑːfɪs/"
  },
  {
    "id": "29",
    "sentence": "I can pay it all off now",
    "chinese": "我现在可以全部还清了",
    "pronunciation": "/aɪ/ /kæn/ /peɪ/ /ɪt/ /ɔːl/ /ɔːf/ /naʊ/"
  },
  {
    "id": "30",
    "sentence": "I don't want to be making payments",
    "chinese": "我不想再支付分期款了",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /biː/ /ˈmeɪkɪŋ/ /ˈpeɪmənts/"
  },
  {
    "id": "31",
    "sentence": "I can pay it all off now . I don't want to be making payments",
    "chinese": "我现在可以全部还清了我不想再支付分期款了。",
    "pronunciation": "/aɪ/ /kæn/ /peɪ/ /ɪt/ /ɔːl/ /ɔːf/ /naʊ/ /aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /biː/ /ˈmeɪkɪŋ/ /ˈpeɪmənts/"
  },
  {
    "id": "32",
    "sentence": "Well",
    "chinese": "嗯",
    "pronunciation": "/wel/"
  },
  {
    "id": "33",
    "sentence": "my manager said",
    "chinese": "我的经理说",
    "pronunciation": "/maɪ/ /ˈmænɪdʒər/ /sed/"
  },
  {
    "id": "34",
    "sentence": "Well , my manager said",
    "chinese": "嗯，我的经理说",
    "pronunciation": "/wel/ /maɪ/ /ˈmænɪdʒər/ /sed/"
  },
  {
    "id": "35",
    "sentence": "that we can accept",
    "chinese": "我们可以接受",
    "pronunciation": "/ðæt/ /wiː; wi/ /kæn/ /əˈsɛpt/"
  },
  {
    "id": "36",
    "sentence": "Well , my manager said that we can work",
    "chinese": "我的经理说，我们可以",
    "pronunciation": "/wel/ /maɪ/ /ˈmænɪdʒər/ /sed/ /ðæt/ /wiː; wi/ /kæn/ /wɜrk/"
  },
  {
    "id": "37",
    "sentence": "with $11,000",
    "chinese": "我们可以接受11000美元",
    "pronunciation": "/wɪð; wɪθ/ /ˈwʌnˈtiː/ /θuː θuː θuː/"
  },
  {
    "id": "38",
    "sentence": "Well , my manager said that we can work with $11,000",
    "chinese": "好吧，我的经理说我们可以接受11000美元。",
    "pronunciation": "/wel/ /maɪ/ /ˈmænɪdʒər/ /sed/ /ðæt/ /wiː; wi/ /kæn/ /wɜrk/ /wɪð; wɪθ/ /ˈwʌnˈtiː/ /θuː θuː θuː/"
  },
  {
    "id": "39",
    "sentence": "I can't do",
    "chinese": "我做不到",
    "pronunciation": "/aɪ/ /kænt/ /duː; də/"
  },
  {
    "id": "40",
    "sentence": "$11,000",
    "chinese": "一万一千美元",
    "pronunciation": "/ˈwʌnˈtiː/ /θuː θuː θuː/"
  },
  {
    "id": "41",
    "sentence": "I can't do $11,000",
    "chinese": "我做不到一万一千美元",
    "pronunciation": "/aɪ/ /kænt/ /duː; də/ /ˈwʌnˈtiː/ /θuː θuː θuː/"
  },
  {
    "id": "42",
    "sentence": "How about",
    "chinese": "怎么样？",
    "pronunciation": "/haʊ/ /əˈbaʊt/"
  },
  {
    "id": "43",
    "sentence": "I can't do $11000 . How about",
    "chinese": "我做不到一万一千美元，如何",
    "pronunciation": "/aɪ/ /kænt/ /duː; də/ /ˈwʌnˈtiː/ /θuː θuː θuː/ /haʊ/ /əˈbaʊt/"
  },
  {
    "id": "44",
    "sentence": "$10500",
    "chinese": "一万零五百美元",
    "pronunciation": "/ten/ /faɪv 'hʌndrəd/"
  },
  {
    "id": "45",
    "sentence": "I can't do $11000 . How about $10500 ?",
    "chinese": "我做不到一万一千美元，一万零五百美元如何？",
    "pronunciation": "/aɪ/ /kænt/ /duː; də/ /ˈwʌnˈtiː/ /θuː θuː θuː/ /haʊ/ /əˈbaʊt/ /ten/ /faɪv 'hʌndrəd/"
  },
  {
    "id": "46",
    "sentence": "Let me",
    "chinese": "让我",
    "pronunciation": "/let/ /miː/"
  },
  {
    "id": "47",
    "sentence": "check",
    "chinese": "让我检查",
    "pronunciation": "/tʃek/"
  },
  {
    "id": "48",
    "sentence": "Let me check",
    "chinese": "让我看看",
    "pronunciation": "/let/ /miː/ /tʃek/"
  },
  {
    "id": "49",
    "sentence": "Great",
    "chinese": "太好了",
    "pronunciation": "/ɡreɪt/"
  },
  {
    "id": "50",
    "sentence": "I can pay you",
    "chinese": "我可以支付给你",
    "pronunciation": "/aɪ/ /kæn/ /peɪ/ /juː; jʊ/"
  },
  {
    "id": "51",
    "sentence": "Great . I can pay you",
    "chinese": "太好了，我可以支付给你",
    "pronunciation": "/ɡreɪt/ /aɪ/ /kæn/ /peɪ/ /juː; jʊ/"
  },
  {
    "id": "52",
    "sentence": "with a check",
    "chinese": "用支票",
    "pronunciation": "/wɪð; wɪθ/ /ə; eɪ/ /tʃek/"
  },
  {
    "id": "53",
    "sentence": "Great . I can pay you with a check",
    "chinese": "太好了，我可以用支票支付给你",
    "pronunciation": "/ɡreɪt/ /aɪ/ /kæn/ /peɪ/ /juː; jʊ/ /wɪð; wɪθ/ /ə; eɪ/ /tʃek/"
  },
  {
    "id": "54",
    "sentence": "today",
    "chinese": "今天",
    "pronunciation": "/təˈdeɪ/"
  },
  {
    "id": "55",
    "sentence": "Great . I can pay you with a check today",
    "chinese": "太好了，我今天可以用支票支付给你",
    "pronunciation": "/ɡreɪt/ /aɪ/ /kæn/ /peɪ/ /juː; jʊ/ /wɪð; wɪθ/ /ə; eɪ/ /tʃek/ /təˈdeɪ/"
  },
  {
    "id": "56",
    "sentence": "It seems that",
    "chinese": "似乎",
    "pronunciation": "/ɪt/ /siːmz/ /ðæt/"
  },
  {
    "id": "57",
    "sentence": "$10500 will work",
    "chinese": "10500美元可行",
    "pronunciation": "/ten/ /faɪv 'hʌndrəd/ /wɪl/ /wɜrk/"
  },
  {
    "id": "58",
    "sentence": "It seems that $10500 will work",
    "chinese": "看起来10500美元应该可行",
    "pronunciation": "/ɪt/ /siːmz/ /ðæt/ /ten/ /faɪv 'hʌndrəd/ /wɪl/ /wɜrk/"
  },
  {
    "id": "59",
    "sentence": "Let's get",
    "chinese": "让我们填写",
    "pronunciation": "/lets/ /ɡet/"
  },
  {
    "id": "60",
    "sentence": "It seems that $10500 will work . Let's get",
    "chinese": "看来10500美元应该足够了，让我们",
    "pronunciation": "/ɪt/ /siːmz/ /ðæt/ /ten/ /faɪv 'hʌndrəd/ /wɪl/ /wɜrk/ /lets/ /ɡet/"
  },
  {
    "id": "61",
    "sentence": "the paperwork filled",
    "chinese": "填写文件",
    "pronunciation": "/ðə/ /ˈpeɪpərwɜrk/ /fɪld/"
  },
  {
    "id": "62",
    "sentence": "It seems that $10500 will work . Let's get the paperwork filled",
    "chinese": "似乎10,500美元可以了。让我们填写文件吧。",
    "pronunciation": "/ɪt/ /siːmz/ /ðæt/ /ten/ /faɪv 'hʌndrəd/ /wɪl/ /wɜrk/ /lets/ /ɡet/ /ðə/ /ˈpeɪpərwɜrk/ /fɪld/"
  },
];
