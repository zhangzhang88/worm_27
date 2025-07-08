export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hi",
    "chinese": "你好",
    "pronunciation": "/haɪ/"
  },
  {
    "id": "2",
    "sentence": "I would like to know",
    "chinese": "我想知道",
    "pronunciation": "/aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /noʊ/"
  },
  {
    "id": "3",
    "sentence": "Hi . I would like to know",
    "chinese": "你好我想知道",
    "pronunciation": "/haɪ/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /noʊ/"
  },
  {
    "id": "4",
    "sentence": "my credit balance",
    "chinese": "我的信用余额",
    "pronunciation": "/maɪ/ /ˈkredɪt/ /ˈbæləns/"
  },
  {
    "id": "5",
    "sentence": "Hi . I would like to know my credit balance",
    "chinese": "你好，我想查询我的信用余额",
    "pronunciation": "/haɪ/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /noʊ/ /maɪ/ /ˈkredɪt/ /ˈbæləns/"
  },
  {
    "id": "6",
    "sentence": "Of course",
    "chinese": "当然",
    "pronunciation": "/ʌv/ /kɔːrs/"
  },
  {
    "id": "7",
    "sentence": "May I have your credit card number ?",
    "chinese": "可以告诉我您的信用卡号码吗？",
    "pronunciation": "/meɪ/ /aɪ/ /hæv/ /jʊr; jər/ /ˈkredɪt/ /kɑːrd/ /ˈnʌmbɚ/"
  },
  {
    "id": "8",
    "sentence": "Of course . May I have your credit card number ?",
    "chinese": "当然请提供您的信用卡号码？",
    "pronunciation": "/ʌv/ /kɔːrs/ /meɪ/ /aɪ/ /hæv/ /jʊr; jər/ /ˈkredɪt/ /kɑːrd/ /ˈnʌmbɚ/"
  },
  {
    "id": "9",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "10",
    "sentence": "It's 512-879-346",
    "chinese": "号码是512-879-346",
    "pronunciation": "/ɪts/ /512-879-346/"
  },
  {
    "id": "11",
    "sentence": "Yes . It's 512-879-346",
    "chinese": "是的号码是512-879-346。",
    "pronunciation": "/jes/ /ɪts/ /512-879-346/"
  },
  {
    "id": "12",
    "sentence": "My name is John",
    "chinese": "我的名字是John",
    "pronunciation": "/maɪ/ /neɪm/ /ɪz/ /dʒɑːn/"
  },
  {
    "id": "13",
    "sentence": "Yes . It's 512-879-346 . My name is John",
    "chinese": "是的号码是512-879-346。我叫John。",
    "pronunciation": "/jes/ /ɪts/ /512-879-346/ /maɪ/ /neɪm/ /ɪz/ /dʒɑːn/"
  },
  {
    "id": "14",
    "sentence": "Alright John",
    "chinese": "好的 John",
    "pronunciation": "/ɔːlˈraɪt/ /dʒɑːn/"
  },
  {
    "id": "15",
    "sentence": "You currently have no dues",
    "chinese": "你目前没有欠款",
    "pronunciation": "/juː; jʊ/ /ˈkɜːrəntli/ /hæv/ /noʊ/ /djuːz/"
  },
  {
    "id": "16",
    "sentence": "Alright John . You currently have no dues",
    "chinese": "好的约翰，你目前没有欠款",
    "pronunciation": "/ɔːlˈraɪt/ /dʒɑːn/ /juː; jʊ/ /ˈkɜːrəntli/ /hæv/ /noʊ/ /djuːz/"
  },
  {
    "id": "17",
    "sentence": "on your credit card",
    "chinese": "在你的信用卡上",
    "pronunciation": "/ɑːn/ /jʊr; jər/ /ˈkredɪt/ /kɑːrd/"
  },
  {
    "id": "18",
    "sentence": "Alright John . You currently have no dues on your credit card",
    "chinese": "好的 John你目前信用卡没有欠款。",
    "pronunciation": "/ɔːlˈraɪt/ /dʒɑːn/ /juː; jʊ/ /ˈkɜːrəntli/ /hæv/ /noʊ/ /djuːz/ /ɑːn/ /jʊr; jər/ /ˈkredɪt/ /kɑːrd/"
  },
  {
    "id": "19",
    "sentence": "Really ?",
    "chinese": "真的吗？",
    "pronunciation": "/ˈriːəli/"
  },
  {
    "id": "20",
    "sentence": "I finally paid it off ?",
    "chinese": "我终于还清了吗？",
    "pronunciation": "/aɪ/ /ˈfaɪnəli/ /peɪd/ /ɪt/ /ɔːf/"
  },
  {
    "id": "21",
    "sentence": "Really ? I finally paid it off ?",
    "chinese": "真的吗？我终于还清了？",
    "pronunciation": "/ˈriːəli/ /aɪ/ /ˈfaɪnəli/ /peɪd/ /ɪt/ /ɔːf/"
  },
  {
    "id": "22",
    "sentence": "Yes sir",
    "chinese": "是的，先生",
    "pronunciation": "/jes/ /sɜːr/"
  },
  {
    "id": "23",
    "sentence": "Your balance is officially zero",
    "chinese": "您的余额正式为零",
    "pronunciation": "/jʊr; jər/ /ˈbæləns/ /ɪz/ /əˈfɪʃəli/ /ˈzɪroʊ/"
  },
  {
    "id": "24",
    "sentence": "Yes sir . Your balance is officially zero",
    "chinese": "是的，先生您的余额正式归零了。",
    "pronunciation": "/jes/ /sɜːr/ /jʊr; jər/ /ˈbæləns/ /ɪz/ /əˈfɪʃəli/ /ˈzɪroʊ/"
  },
  {
    "id": "25",
    "sentence": "I must admit",
    "chinese": "我必须承认",
    "pronunciation": "/aɪ/ /mʌst; məst/ /ædˈmɪt/"
  },
  {
    "id": "26",
    "sentence": "I'm proud of myself",
    "chinese": "我为自己感到骄傲",
    "pronunciation": "/aɪm/ /praʊd/ /ʌv/ /maɪˈself/"
  },
  {
    "id": "27",
    "sentence": "I must admit , I'm proud of myself",
    "chinese": "我必须承认，我为自己感到骄傲",
    "pronunciation": "/aɪ/ /mʌst; məst/ /ædˈmɪt/ /aɪm/ /praʊd/ /ʌv/ /maɪˈself/"
  },
  {
    "id": "28",
    "sentence": "Is there anything else",
    "chinese": "还有其他事情吗",
    "pronunciation": "/ɪz/ /ðer; ðər/ /ˈɛnɪθɪŋ/ /els/"
  },
  {
    "id": "29",
    "sentence": "you'd like me to check , sir ?",
    "chinese": "您需要我检查的吗，先生？",
    "pronunciation": "/jʊd/ /laɪk/ /miː/ /tuː; tə/ /tʃek/ /sɜːr/"
  },
  {
    "id": "30",
    "sentence": "Is there anything else you'd like me to check , sir ?",
    "chinese": "先生，还有其他需要我检查的吗？",
    "pronunciation": "/ɪz/ /ðer; ðər/ /ˈɛnɪθɪŋ/ /els/ /jʊd/ /laɪk/ /miː/ /tuː; tə/ /tʃek/ /sɜːr/"
  },
  {
    "id": "31",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "32",
    "sentence": "Can you change my card status",
    "chinese": "你能更改我的卡片状态",
    "pronunciation": "/kæn/ /juː; jʊ/ /tʃeɪndʒ/ /maɪ/ /kɑːrd/ /ˈsteɪtəs; ˈstætəs/"
  },
  {
    "id": "33",
    "sentence": "Yes . Can you change my card status",
    "chinese": "好的能否更改我的卡片状态？",
    "pronunciation": "/jes/ /kæn/ /juː; jʊ/ /tʃeɪndʒ/ /maɪ/ /kɑːrd/ /ˈsteɪtəs; ˈstætəs/"
  },
  {
    "id": "34",
    "sentence": "from a college to a normal account ?",
    "chinese": "从学生账户转为普通账户吗？",
    "pronunciation": "/frʌm/ /ə; eɪ/ /ˈkɑːlɪdʒ/ /tuː; tə/ /ə; eɪ/ /ˈnɔːrm(ə)l/ /əˈkaʊnt/"
  },
  {
    "id": "35",
    "sentence": "Yes . Can you change my card status from a college to a normal account ?",
    "chinese": "好的能否将我的卡片状态从学生账户更改为普通账户？",
    "pronunciation": "/jes/ /kæn/ /juː; jʊ/ /tʃeɪndʒ/ /maɪ/ /kɑːrd/ /ˈsteɪtəs; ˈstætəs/ /frʌm/ /ə; eɪ/ /ˈkɑːlɪdʒ/ /tuː; tə/ /ə; eɪ/ /ˈnɔːrm(ə)l/ /əˈkaʊnt/"
  },
  {
    "id": "36",
    "sentence": "Of course",
    "chinese": "当然",
    "pronunciation": "/ʌv/ /kɔːrs/"
  },
  {
    "id": "37",
    "sentence": "But you'll have to come into the bank",
    "chinese": "但你必须来银行",
    "pronunciation": "/bʌt/ /jʊl/ /hæv/ /tuː; tə/ /kʌm/ /ˈɪntuː/ /ðə/ /bæŋk/"
  },
  {
    "id": "38",
    "sentence": "Of course . But you'll have to come into the bank",
    "chinese": "当然但您得来银行一趟",
    "pronunciation": "/ʌv/ /kɔːrs/ /bʌt/ /jʊl/ /hæv/ /tuː; tə/ /kʌm/ /ˈɪntuː/ /ðə/ /bæŋk/"
  },
  {
    "id": "39",
    "sentence": "to do that",
    "chinese": "才能这样做",
    "pronunciation": "/tuː; tə/ /duː; də/ /ðæt/"
  },
  {
    "id": "40",
    "sentence": "Of course . But you'll have to come into the bank to do that",
    "chinese": "当然可以但您需要亲自来银行办理。",
    "pronunciation": "/ʌv/ /kɔːrs/ /bʌt/ /jʊl/ /hæv/ /tuː; tə/ /kʌm/ /ˈɪntuː/ /ðə/ /bæŋk/ /tuː; tə/ /duː; də/ /ðæt/"
  },
  {
    "id": "41",
    "sentence": "Alright",
    "chinese": "好的",
    "pronunciation": "/ɔːlˈraɪt/"
  },
  {
    "id": "42",
    "sentence": "I'll be down first thing tomorrow",
    "chinese": "我明天一早就下来",
    "pronunciation": "/aɪl/ /biː/ /daʊn/ /fɜːrst/ /θɪŋ/ /təˈmɑːroʊ/"
  },
  {
    "id": "43",
    "sentence": "Alright . I'll be down first thing tomorrow",
    "chinese": "好的我明天一早就下来。",
    "pronunciation": "/ɔːlˈraɪt/ /aɪl/ /biː/ /daʊn/ /fɜːrst/ /θɪŋ/ /təˈmɑːroʊ/"
  },
  {
    "id": "44",
    "sentence": "Sounds good sir",
    "chinese": "听起来不错，先生",
    "pronunciation": "/saʊndz/ /ɡʊd/ /sɜːr/"
  },
  {
    "id": "45",
    "sentence": "Have a good day",
    "chinese": "祝您有愉快的一天",
    "pronunciation": "/hæv/ /ə; eɪ/ /ɡʊd/ /deɪ/"
  },
  {
    "id": "46",
    "sentence": "Sounds good sir . Have a good day",
    "chinese": "好的先生，祝您有愉快的一天",
    "pronunciation": "/saʊndz/ /ɡʊd/ /sɜːr/ /hæv/ /ə; eɪ/ /ɡʊd/ /deɪ/"
  },
];
