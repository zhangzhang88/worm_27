export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "I checked the whole car",
    "chinese": "我检查了整辆车",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /hoʊl/ /kɑːr/"
  },
  {
    "id": "2",
    "sentence": "and",
    "chinese": "并且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "3",
    "sentence": "I checked the whole car and",
    "chinese": "我检查了整辆车，",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /hoʊl/ /kɑːr/ /ænd; ənd/"
  },
  {
    "id": "4",
    "sentence": "it has some problems",
    "chinese": "它存在一些问题",
    "pronunciation": "/ɪt/ /hæz; həz/ /sʌm; səm/ /ˈprɑːbləmz/"
  },
  {
    "id": "5",
    "sentence": "I checked the whole car and it has some problems",
    "chinese": "我检查了整辆车，发现它存在一些问题",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /hoʊl/ /kɑːr/ /ænd; ənd/ /ɪt/ /hæz; həz/ /sʌm; səm/ /ˈprɑːbləmz/"
  },
  {
    "id": "6",
    "sentence": "What kind of problems",
    "chinese": "哪些问题",
    "pronunciation": "/wʌt/ /kaɪnd/ /ʌv/ /ˈprɑːbləmz/"
  },
  {
    "id": "7",
    "sentence": "does it have",
    "chinese": "它有吗",
    "pronunciation": "/dʌz/ /ɪt/ /hæv/"
  },
  {
    "id": "8",
    "sentence": "What kind of problems does it have ?",
    "chinese": "它存在哪些问题？",
    "pronunciation": "/wʌt/ /kaɪnd/ /ʌv/ /ˈprɑːbləmz/ /dʌz/ /ɪt/ /hæv/"
  },
  {
    "id": "9",
    "sentence": "The brakes need to be replaced",
    "chinese": "刹车需要更换",
    "pronunciation": "/ðə/ /breɪks/ /niːd/ /tuː; tə/ /biː/ /rɪˈpleɪst/"
  },
  {
    "id": "10",
    "sentence": "as well as the power steering",
    "chinese": "以及动力转向系统",
    "pronunciation": "/æz; əz/ /wel/ /æz; əz/ /ðə/ /ˈpaʊər/ /ˈstɪrɪŋ/"
  },
  {
    "id": "11",
    "sentence": "The brakes need to be replaced as well as the power steering",
    "chinese": "刹车和动力转向系统都需要更换",
    "pronunciation": "/ðə/ /breɪks/ /niːd/ /tuː; tə/ /biː/ /rɪˈpleɪst/ /æz; əz/ /wel/ /æz; əz/ /ðə/ /ˈpaʊər/ /ˈstɪrɪŋ/"
  },
  {
    "id": "12",
    "sentence": "Is that all",
    "chinese": "就这些吗",
    "pronunciation": "/ɪz/ /ðæt/ /ɔːl/"
  },
  {
    "id": "13",
    "sentence": "That seems like an easy fix",
    "chinese": "这似乎是个容易解决的问题",
    "pronunciation": "/ðæt/ /siːmz/ /laɪk/ /æn; ən/ /ˈiːzi/ /fɪks/"
  },
  {
    "id": "14",
    "sentence": "Is that all ? That seems like an easy fix",
    "chinese": "就这些吗？这似乎很容易解决",
    "pronunciation": "/ɪz/ /ðæt/ /ɔːl/ /ðæt/ /siːmz/ /laɪk/ /æn; ən/ /ˈiːzi/ /fɪks/"
  },
  {
    "id": "15",
    "sentence": "That's not all",
    "chinese": "不仅如此",
    "pronunciation": "/ðæts/ /nɑːt/ /ɔːl/"
  },
  {
    "id": "16",
    "sentence": "The alternator seems to be malfunctioning",
    "chinese": "发电机似乎出现了故障",
    "pronunciation": "/ðə/ /ˈɔːltərneɪtər/ /siːmz/ /tuː; tə/ /biː/ /ˌmælfʌŋkʃənɪŋ/"
  },
  {
    "id": "17",
    "sentence": "That's not all . The alternator seems to be malfunctioning",
    "chinese": "不仅如此，发电机似乎也出现了故障",
    "pronunciation": "/ðæts/ /nɑːt/ /ɔːl/ /ðə/ /ˈɔːltərneɪtər/ /siːmz/ /tuː; tə/ /biː/ /ˌmælfʌŋkʃənɪŋ/"
  },
  {
    "id": "18",
    "sentence": "How much is it going to cost me",
    "chinese": "这要花我多少钱",
    "pronunciation": "/haʊ/ /mʌtʃ/ /ɪz/ /ɪt/ /ˈɡoʊɪŋ/ /tuː; tə/ /kɔːst/ /miː/"
  },
  {
    "id": "19",
    "sentence": "to fix it all",
    "chinese": "全部修好",
    "pronunciation": "/tuː; tə/ /fɪks/ /ɪt/ /ɔːl/"
  },
  {
    "id": "20",
    "sentence": "How much is it going to cost me to fix it all ?",
    "chinese": "全部修好要花多少钱？",
    "pronunciation": "/haʊ/ /mʌtʃ/ /ɪz/ /ɪt/ /ˈɡoʊɪŋ/ /tuː; tə/ /kɔːst/ /miː/ /tuː; tə/ /fɪks/ /ɪt/ /ɔːl/"
  },
  {
    "id": "21",
    "sentence": "It'll cost",
    "chinese": "这将花费",
    "pronunciation": "/ɪtˈl/ /kɔːst/"
  },
  {
    "id": "22",
    "sentence": "around $300 to $400",
    "chinese": "大约300到400美元",
    "pronunciation": "/əˈraʊnd/ /θriː ˈhʌndrəd/ /tuː; tə/ /fɔrˈhʌndrəd/"
  },
  {
    "id": "23",
    "sentence": "It'll cost around $300 to $400",
    "chinese": "这大概要花费300到400美元",
    "pronunciation": "/ɪtˈl/ /kɔːst/ /əˈraʊnd/ /θriː ˈhʌndrəd/ /tuː; tə/ /fɔrˈhʌndrəd/"
  },
  {
    "id": "24",
    "sentence": "That's not too bad",
    "chinese": "这还不算太糟",
    "pronunciation": "/ðæts/ /nɑːt/ /tuː/ /bæd/"
  },
  {
    "id": "25",
    "sentence": "Is there anything else",
    "chinese": "还有别的吗？",
    "pronunciation": "/ɪz/ /ðer; ðər/ /ˈɛnɪθɪŋ/ /els/"
  },
  {
    "id": "26",
    "sentence": "That's not too bad . Is there anything else ?",
    "chinese": "那还不算太糟还有别的吗？",
    "pronunciation": "/ðæts/ /nɑːt/ /tuː/ /bæd/ /ɪz/ /ðer; ðər/ /ˈɛnɪθɪŋ/ /els/"
  },
  {
    "id": "27",
    "sentence": "From what I can tell",
    "chinese": "据我所知",
    "pronunciation": "/frʌm/ /wʌt/ /aɪ/ /kæn/ /tel/"
  },
  {
    "id": "28",
    "sentence": "no",
    "chinese": "没有",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "29",
    "sentence": "From what I can tell , no",
    "chinese": "据我所知，没有",
    "pronunciation": "/frʌm/ /wʌt/ /aɪ/ /kæn/ /tel/ /noʊ/"
  },
  {
    "id": "30",
    "sentence": "I would recommend buying it",
    "chinese": "我建议购买它",
    "pronunciation": "/aɪ/ /wʊd/ /ˌrekəˈmend/ /ˈbaɪɪŋ/ /ɪt/"
  },
  {
    "id": "31",
    "sentence": "From what I can tell , no . I would recommend buying it",
    "chinese": "据我所知，没有我建议购买它。",
    "pronunciation": "/frʌm/ /wʌt/ /aɪ/ /kæn/ /tel/ /noʊ/ /aɪ/ /wʊd/ /ˌrekəˈmend/ /ˈbaɪɪŋ/ /ɪt/"
  },
  {
    "id": "32",
    "sentence": "Let me call the seller",
    "chinese": "让我联系卖家",
    "pronunciation": "/let/ /miː/ /kɔːl/ /ðə/ /ˈselər/"
  },
  {
    "id": "33",
    "sentence": "and I will let you know",
    "chinese": "我会通知你",
    "pronunciation": "/ænd; ənd/ /aɪ/ /wɪl/ /let/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "34",
    "sentence": "Let me call the seller and I will let you know",
    "chinese": "让我联系卖家，然后告诉你",
    "pronunciation": "/let/ /miː/ /kɔːl/ /ðə/ /ˈselər/ /ænd; ənd/ /aɪ/ /wɪl/ /let/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "35",
    "sentence": "if you can start",
    "chinese": "你是否可以开始",
    "pronunciation": "/ɪf/ /juː; jʊ/ /kæn/ /stɑːrt/"
  },
  {
    "id": "36",
    "sentence": "Let me call the seller and I will let you know if you can start",
    "chinese": "让我联系卖家，如果可以开始我会通知你",
    "pronunciation": "/let/ /miː/ /kɔːl/ /ðə/ /ˈselər/ /ænd; ənd/ /aɪ/ /wɪl/ /let/ /juː; jʊ/ /noʊ/ /ɪf/ /juː; jʊ/ /kæn/ /stɑːrt/"
  },
  {
    "id": "37",
    "sentence": "Great",
    "chinese": "太棒了",
    "pronunciation": "/ɡreɪt/"
  },
  {
    "id": "38",
    "sentence": "I can start right away",
    "chinese": "我马上就可以开始",
    "pronunciation": "/aɪ/ /kæn/ /stɑːrt/ /raɪt/ /əˈweɪ/"
  },
  {
    "id": "39",
    "sentence": "Great . I can start right away",
    "chinese": "太好了我马上就可以开始。",
    "pronunciation": "/ɡreɪt/ /aɪ/ /kæn/ /stɑːrt/ /raɪt/ /əˈweɪ/"
  },
  {
    "id": "40",
    "sentence": "if he gives you the thumbs up",
    "chinese": "如果他给你竖起大拇指",
    "pronunciation": "/ɪf/ /hiː/ /ɡɪvz/ /juː; jʊ/ /ðə/ /θʌmz/ /ʌp/"
  },
  {
    "id": "41",
    "sentence": "Great . I can start right away if he gives you the thumbs up",
    "chinese": "太好了如果他同意，我马上就可以开始。",
    "pronunciation": "/ɡreɪt/ /aɪ/ /kæn/ /stɑːrt/ /raɪt/ /əˈweɪ/ /ɪf/ /hiː/ /ɡɪvz/ /juː; jʊ/ /ðə/ /θʌmz/ /ʌp/"
  },
  {
    "id": "42",
    "sentence": "He said",
    "chinese": "他说",
    "pronunciation": "/hiː/ /sed/"
  },
  {
    "id": "43",
    "sentence": "that it's fine",
    "chinese": "没问题",
    "pronunciation": "/ðæt/ /ɪts/ /faɪn/"
  },
  {
    "id": "44",
    "sentence": "He said that it's fine",
    "chinese": "他说没关系。",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ɪts/ /faɪn/"
  },
  {
    "id": "45",
    "sentence": "I'll be back for the car",
    "chinese": "我会回来取车的",
    "pronunciation": "/aɪl/ /biː/ /bæk/ /fɔːr; fər/ /ðə/ /kɑːr/"
  },
  {
    "id": "46",
    "sentence": "He said that it's fine . I'll be back for the car",
    "chinese": "他说没问题我会回来取车。",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ɪts/ /faɪn/ /aɪl/ /biː/ /bæk/ /fɔːr; fər/ /ðə/ /kɑːr/"
  },
  {
    "id": "47",
    "sentence": "when you're done",
    "chinese": "当你用完时",
    "pronunciation": "/wen/ /jʊr/ /dʌn/"
  },
  {
    "id": "48",
    "sentence": "He said that it's fine . I'll be back for the car when you're done",
    "chinese": "他说没问题等你用完了，我会回来取车。",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ɪts/ /faɪn/ /aɪl/ /biː/ /bæk/ /fɔːr; fər/ /ðə/ /kɑːr/ /wen/ /jʊr/ /dʌn/"
  },
];
