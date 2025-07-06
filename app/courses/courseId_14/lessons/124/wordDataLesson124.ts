export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hello",
    "chinese": "你好",
    "pronunciation": "/həˈloʊ/"
  },
  {
    "id": "2",
    "sentence": "Is this the Smith residence ?",
    "chinese": "这里是史密斯家吗？",
    "pronunciation": "/ɪz/ /ðɪs/ /ðə/ /smɪθ/ /ˈrezɪdəns/"
  },
  {
    "id": "3",
    "sentence": "Hello . Is this the Smith residence ?",
    "chinese": "你好，这里是史密斯家吗？",
    "pronunciation": "/həˈloʊ/ /ɪz/ /ðɪs/ /ðə/ /smɪθ/ /ˈrezɪdəns/"
  },
  {
    "id": "4",
    "sentence": "Yes it is",
    "chinese": "是的",
    "pronunciation": "/jes/ /ɪt/ /ɪz/"
  },
  {
    "id": "5",
    "sentence": "May I ask who's calling ?",
    "chinese": "请问您是哪位？",
    "pronunciation": "/meɪ/ /aɪ/ /æsk/ /huz/ /ˈkɔːlɪŋ/"
  },
  {
    "id": "6",
    "sentence": "Yes it is . May I ask who's calling ?",
    "chinese": "是的请问您是哪位？",
    "pronunciation": "/jes/ /ɪt/ /ɪz/ /meɪ/ /aɪ/ /æsk/ /huz/ /ˈkɔːlɪŋ/"
  },
  {
    "id": "7",
    "sentence": "This is your bank",
    "chinese": "这是您的银行",
    "pronunciation": "/ðɪs/ /ɪz/ /jʊr; jər/ /bæŋk/"
  },
  {
    "id": "8",
    "sentence": "calling in regards to",
    "chinese": "来电是关于",
    "pronunciation": "/ˈkɔːlɪŋ/ /ɪn/ /rɪˈɡɑːrdz/ /tuː; tə/"
  },
  {
    "id": "9",
    "sentence": "This is your bank calling in regards to",
    "chinese": "这里是您的银行来电，关于",
    "pronunciation": "/ðɪs/ /ɪz/ /jʊr; jər/ /bæŋk/ /ˈkɔːlɪŋ/ /ɪn/ /rɪˈɡɑːrdz/ /tuː; tə/"
  },
  {
    "id": "10",
    "sentence": "an overcharge on your credit card",
    "chinese": "您的信用卡上的一笔超额收费",
    "pronunciation": "/æn; ən/ /ˌoʊvərˈtʃɑːrdʒ/ /ɑːn/ /jʊr; jər/ /ˈkredɪt/ /kɑːrd/"
  },
  {
    "id": "11",
    "sentence": "This is your bank calling in regards to an overcharge on your credit card",
    "chinese": "这里是您的银行来电，关于您的信用卡存在超额扣款的问题",
    "pronunciation": "/ðɪs/ /ɪz/ /jʊr; jər/ /bæŋk/ /ˈkɔːlɪŋ/ /ɪn/ /rɪˈɡɑːrdz/ /tuː; tə/ /æn; ən/ /ˌoʊvərˈtʃɑːrdʒ/ /ɑːn/ /jʊr; jər/ /ˈkredɪt/ /kɑːrd/"
  },
  {
    "id": "12",
    "sentence": "I'm sorry",
    "chinese": "我很抱歉",
    "pronunciation": "/aɪm/ /ˈsɑːri/"
  },
  {
    "id": "13",
    "sentence": "There must be some mistake",
    "chinese": "一定是哪里弄错了",
    "pronunciation": "/ðer; ðər/ /mʌst; məst/ /biː/ /sʌm; səm/ /mɪˈsteɪk/"
  },
  {
    "id": "14",
    "sentence": "I'm sorry . There must be some mistake",
    "chinese": "抱歉，一定是哪里弄错了",
    "pronunciation": "/aɪm/ /ˈsɑːri/ /ðer; ðər/ /mʌst; məst/ /biː/ /sʌm; səm/ /mɪˈsteɪk/"
  },
  {
    "id": "15",
    "sentence": "It says here",
    "chinese": "这里说",
    "pronunciation": "/ɪt/ /sez/ /hɪr/"
  },
  {
    "id": "16",
    "sentence": "that you charged over $500 on it yesterday",
    "chinese": "你昨天在上面花费了超过500美元",
    "pronunciation": "/ðæt/ /juː; jʊ/ /tʃɑrdʒd/ /ˈoʊvər/ /faɪv 'hʌndrəd/ /ɑːn/ /ɪt/ /ˈjestərdeɪ/"
  },
  {
    "id": "17",
    "sentence": "It says here that you charged over $500 on it yesterday",
    "chinese": "这里显示您昨天在这上面消费了超过500美元",
    "pronunciation": "/ɪt/ /sez/ /hɪr/ /ðæt/ /juː; jʊ/ /tʃɑrdʒd/ /ˈoʊvər/ /faɪv 'hʌndrəd/ /ɑːn/ /ɪt/ /ˈjestərdeɪ/"
  },
  {
    "id": "18",
    "sentence": "That can't be right",
    "chinese": "这不可能是对的",
    "pronunciation": "/ðæt/ /kænt/ /biː/ /raɪt/"
  },
  {
    "id": "19",
    "sentence": "I have not used it in months",
    "chinese": "我已经好几个月没用它了",
    "pronunciation": "/aɪ/ /hæv/ /nɑːt/ /juzd/ /ɪt/ /ɪn/ /mʌnθs/"
  },
  {
    "id": "20",
    "sentence": "That can't be right . I have not used it in months",
    "chinese": "这不可能我已经好几个月没用过它了。",
    "pronunciation": "/ðæt/ /kænt/ /biː/ /raɪt/ /aɪ/ /hæv/ /nɑːt/ /juzd/ /ɪt/ /ɪn/ /mʌnθs/"
  },
  {
    "id": "21",
    "sentence": "Are you saying",
    "chinese": "你是在说",
    "pronunciation": "/ɑr/ /juː; jʊ/ /ˈseɪɪŋ/"
  },
  {
    "id": "22",
    "sentence": "you did not make that charge ?",
    "chinese": "你没有进行那次收费吗？",
    "pronunciation": "/juː; jʊ/ /dɪd/ /nɑːt/ /meɪk/ /ðæt/ /tʃɑrdʒ/"
  },
  {
    "id": "23",
    "sentence": "Are you saying you did not make that charge ?",
    "chinese": "你是说你没有进行那笔消费吗？",
    "pronunciation": "/ɑr/ /juː; jʊ/ /ˈseɪɪŋ/ /juː; jʊ/ /dɪd/ /nɑːt/ /meɪk/ /ðæt/ /tʃɑrdʒ/"
  },
  {
    "id": "24",
    "sentence": "That is exactly what I am saying",
    "chinese": "这正是我想说的",
    "pronunciation": "/ðæt/ /ɪz/ /ɪɡˈzæktli/ /wʌt/ /aɪ/ /æm; əm/ /ˈseɪɪŋ/"
  },
  {
    "id": "25",
    "sentence": "Looking closer",
    "chinese": "仔细一看,",
    "pronunciation": "/ˈlʊkɪŋ/ /ˈkloʊzər/"
  },
  {
    "id": "26",
    "sentence": "this charge was made",
    "chinese": "这笔费用是在",
    "pronunciation": "/ðɪs/ /tʃɑrdʒ/ /wʌz; wəz/ /meɪd/"
  },
  {
    "id": "27",
    "sentence": "Looking closer , this charge was made",
    "chinese": "仔细一看，这笔消费发生在",
    "pronunciation": "/ˈlʊkɪŋ/ /ˈkloʊzər/ /ðɪs/ /tʃɑrdʒ/ /wʌz; wəz/ /meɪd/"
  },
  {
    "id": "28",
    "sentence": "in a different city",
    "chinese": "另一个城市产生的",
    "pronunciation": "/ɪn/ /ə; eɪ/ /ˈdɪfrənt/ /ˈsɪti/"
  },
  {
    "id": "29",
    "sentence": "Looking closer , this charge was made in a different city",
    "chinese": "仔细一看，这笔消费是在另一个城市完成的",
    "pronunciation": "/ˈlʊkɪŋ/ /ˈkloʊzər/ /ðɪs/ /tʃɑrdʒ/ /wʌz; wəz/ /meɪd/ /ɪn/ /ə; eɪ/ /ˈdɪfrənt/ /ˈsɪti/"
  },
  {
    "id": "30",
    "sentence": "I am looking for my card now",
    "chinese": "我正在找我的卡",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈlʊkɪŋ/ /fɔːr; fər/ /maɪ/ /kɑːrd/ /naʊ/"
  },
  {
    "id": "31",
    "sentence": "and I cannot find it",
    "chinese": "但我找不到它",
    "pronunciation": "/ænd; ənd/ /aɪ/ /ˈkænɑːt/ /faɪnd/ /ɪt/"
  },
  {
    "id": "32",
    "sentence": "I am looking for my card now and I cannot find it",
    "chinese": "我正在找我的卡，但怎么也找不到",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈlʊkɪŋ/ /fɔːr; fər/ /maɪ/ /kɑːrd/ /naʊ/ /ænd; ənd/ /aɪ/ /ˈkænɑːt/ /faɪnd/ /ɪt/"
  },
  {
    "id": "33",
    "sentence": "This calls for further investigation",
    "chinese": "这需要进一步调查",
    "pronunciation": "/ðɪs/ /kɔːlz/ /fɔːr; fər/ /ˈfɜːrðər/ /ˌɪn.vɛstɪˈɡeɪʃ.ən/"
  },
  {
    "id": "34",
    "sentence": "I assure you",
    "chinese": "我向你保证",
    "pronunciation": "/aɪ/ /əˈʃʊr/ /juː; jʊ/"
  },
  {
    "id": "35",
    "sentence": "I did not make the purchase",
    "chinese": "我没有进行这次购买",
    "pronunciation": "/aɪ/ /dɪd/ /nɑːt/ /meɪk/ /ðə/ /ˈpɜːrtʃəs/"
  },
  {
    "id": "36",
    "sentence": "I assure you I did not make the purchase",
    "chinese": "我向您保证我没有购买",
    "pronunciation": "/aɪ/ /əˈʃʊr/ /juː; jʊ/ /aɪ/ /dɪd/ /nɑːt/ /meɪk/ /ðə/ /ˈpɜːrtʃəs/"
  },
];
