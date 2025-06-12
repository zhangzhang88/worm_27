export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "I'd like to make a deposit",
    "chinese": "我想存一笔钱",
    "pronunciation": "/aɪd/ /laɪk/ /tuː; tə/ /meɪk/ /ə; eɪ/ /dɪˈpɑːzɪt/"
  },
  {
    "id": "2",
    "sentence": "Will you be putting this deposit",
    "chinese": "您是否打算将这笔押金",
    "pronunciation": "/wɪl/ /juː; jʊ/ /biː/ /ˈpʊtɪŋ/ /ðɪs/ /dɪˈpɑːzɪt/"
  },
  {
    "id": "3",
    "sentence": "towards the fees",
    "chinese": "用于支付费用",
    "pronunciation": "/tɔːrdz/ /ðə/ /fiːz/"
  },
  {
    "id": "4",
    "sentence": "Will you be putting this deposit towards the fees",
    "chinese": "您是否打算将这笔押金用于支付费用",
    "pronunciation": "/wɪl/ /juː; jʊ/ /biː/ /ˈpʊtɪŋ/ /ðɪs/ /dɪˈpɑːzɪt/ /tɔːrdz/ /ðə/ /fiːz/"
  },
  {
    "id": "5",
    "sentence": "you owe",
    "chinese": "您所欠的",
    "pronunciation": "/juː; jʊ/ /oʊ/"
  },
  {
    "id": "6",
    "sentence": "Will you be putting this deposit towards the fees you owe ?",
    "chinese": "您是否打算将这笔押金用于支付您所欠的费用？",
    "pronunciation": "/wɪl/ /juː; jʊ/ /biː/ /ˈpʊtɪŋ/ /ðɪs/ /dɪˈpɑːzɪt/ /tɔːrdz/ /ðə/ /fiːz/ /juː; jʊ/ /oʊ/"
  },
  {
    "id": "7",
    "sentence": "What fees",
    "chinese": "哪些费用",
    "pronunciation": "/wʌt/ /fiːz/"
  },
  {
    "id": "8",
    "sentence": "do I owe",
    "chinese": "我欠",
    "pronunciation": "/duː; də/ /aɪ/ /oʊ/"
  },
  {
    "id": "9",
    "sentence": "What fees do I owe ?",
    "chinese": "我需要支付哪些费用？",
    "pronunciation": "/wʌt/ /fiːz/ /duː; də/ /aɪ/ /oʊ/"
  },
  {
    "id": "10",
    "sentence": "You owe an overdraft fee",
    "chinese": "您需支付透支费",
    "pronunciation": "/juː; jʊ/ /oʊ/ /æn; ən/ /ˈoʊvərdræft/ /fiː/"
  },
  {
    "id": "11",
    "sentence": "of $35",
    "chinese": "35美元",
    "pronunciation": "/ʌv/ /θɹiː.faɪv/"
  },
  {
    "id": "12",
    "sentence": "You owe an overdraft fee of $35",
    "chinese": "您需支付透支费35美元",
    "pronunciation": "/juː; jʊ/ /oʊ/ /æn; ən/ /ˈoʊvərdræft/ /fiː/ /ʌv/ /θɹiː.faɪv/"
  },
  {
    "id": "13",
    "sentence": "a minimum balance fee",
    "chinese": "最低余额费",
    "pronunciation": "/ə; eɪ/ /ˈmɪnɪməm/ /ˈbæləns/ /fiː/"
  },
  {
    "id": "14",
    "sentence": "You owe an overdraft fee of $35, a minimum balance fee",
    "chinese": "您需支付透支费35美元、最低余额费",
    "pronunciation": "/juː; jʊ/ /oʊ/ /æn; ən/ /ˈoʊvərdræft/ /fiː/ /ʌv/ /θɹiː.faɪv/ /ə; eɪ/ /ˈmɪnɪməm/ /ˈbæləns/ /fiː/"
  },
  {
    "id": "15",
    "sentence": "of $8",
    "chinese": "8美元",
    "pronunciation": "/ʌv/ /eɪt/"
  },
  {
    "id": "16",
    "sentence": "You owe an overdraft fee of $35, a minimum balance fee of $8",
    "chinese": "您需支付透支费35美元、最低余额费8美元",
    "pronunciation": "/juː; jʊ/ /oʊ/ /æn; ən/ /ˈoʊvərdræft/ /fiː/ /ʌv/ /θɹiː.faɪv/ /ə; eɪ/ /ˈmɪnɪməm/ /ˈbæləns/ /fiː/ /ʌv/ /eɪt/"
  },
  {
    "id": "17",
    "sentence": "and an ATM fee",
    "chinese": "以及ATM取款费",
    "pronunciation": "/ænd; ənd/ /æn; ən/ /ˌeɪ tiː ˈem/ /fiː/"
  },
  {
    "id": "18",
    "sentence": "You owe an overdraft fee of $35 , a minimum balance fee of $8 , and an ATM fee",
    "chinese": "您需支付透支费35美元、最低余额费8美元以及ATM取款费",
    "pronunciation": "/juː; jʊ/ /oʊ/ /æn; ən/ /ˈoʊvərdræft/ /fiː/ /ʌv/ /θɹiː.faɪv/ /ə; eɪ/ /ˈmɪnɪməm/ /ˈbæləns/ /fiː/ /ʌv/ /eɪt/ /ænd; ənd/ /æn; ən/ /ˌeɪ tiː ˈem/ /fiː/"
  },
  {
    "id": "19",
    "sentence": "of $2",
    "chinese": "2美元",
    "pronunciation": "/ʌv/ /tuː/"
  },
  {
    "id": "20",
    "sentence": "You owe an overdraft fee of $35 , a minimum balance fee of $8 , and an ATM fee of $2",
    "chinese": "您需支付透支费35美元、最低余额费8美元以及ATM取款费2美元",
    "pronunciation": "/juː; jʊ/ /oʊ/ /æn; ən/ /ˈoʊvərdræft/ /fiː/ /ʌv/ /θɹiː.faɪv/ /ə; eɪ/ /ˈmɪnɪməm/ /ˈbæləns/ /fiː/ /ʌv/ /eɪt/ /ænd; ənd/ /æn; ən/ /ˌeɪ tiː ˈem/ /fiː/ /ʌv/ /tuː/"
  },
  {
    "id": "21",
    "sentence": "So much for free checking",
    "chinese": "免费支票账户的事就说到这里",
    "pronunciation": "/soʊ/ /mʌtʃ/ /fɔːr; fər/ /friː/ /ˈtʃekɪŋ/"
  },
  {
    "id": "22",
    "sentence": "Nothing in this life",
    "chinese": "人生中没有什么",
    "pronunciation": "/ˈnʌθɪŋ/ /ɪn/ /ðɪs/ /laɪf/"
  },
  {
    "id": "23",
    "sentence": "is free",
    "chinese": "是免费的",
    "pronunciation": "/ɪz/ /friː/"
  },
  {
    "id": "24",
    "sentence": "Nothing in this life is free",
    "chinese": "人生中没有什么是免费的",
    "pronunciation": "/ˈnʌθɪŋ/ /ɪn/ /ðɪs/ /laɪf/ /ɪz/ /friː/"
  },
  {
    "id": "25",
    "sentence": "Take what I owe",
    "chinese": "扣除我所欠的款项",
    "pronunciation": "/teɪk/ /wʌt/ /aɪ/ /oʊ/"
  },
  {
    "id": "26",
    "sentence": "from the amount",
    "chinese": "从金额中",
    "pronunciation": "/frʌm/ /ðə/ /əˈmaʊnt/"
  },
  {
    "id": "27",
    "sentence": "Take what I owe from the amount",
    "chinese": "从我欠的款项中扣除",
    "pronunciation": "/teɪk/ /wʌt/ /aɪ/ /oʊ/ /frʌm/ /ðə/ /əˈmaʊnt/"
  },
  {
    "id": "28",
    "sentence": "that I just deposited",
    "chinese": "我刚刚存入的",
    "pronunciation": "/ðæt/ /aɪ/ /dʒʌst/ /dɪˈpɑːzɪtɪd/"
  },
  {
    "id": "29",
    "sentence": "Take what I owe from the amount that I just deposited",
    "chinese": "从我刚刚存入的金额中扣除我所欠的款项",
    "pronunciation": "/teɪk/ /wʌt/ /aɪ/ /oʊ/ /frʌm/ /ðə/ /əˈmaʊnt/ /ðæt/ /aɪ/ /dʒʌst/ /dɪˈpɑːzɪtɪd/"
  },
  {
    "id": "30",
    "sentence": "Will that be all",
    "chinese": "请问还需要其他服务吗？",
    "pronunciation": "/wɪl/ /ðæt/ /biː/ /ɔːl/"
  },
  {
    "id": "31",
    "sentence": "I want to close",
    "chinese": "我想关闭",
    "pronunciation": "/aɪ/ /wɑːnt/ /tuː; tə/ /kloʊs/"
  },
  {
    "id": "32",
    "sentence": "my bank account",
    "chinese": "我的银行账户",
    "pronunciation": "/maɪ/ /bæŋk/ /əˈkaʊnt/"
  },
  {
    "id": "33",
    "sentence": "I want to close my bank account",
    "chinese": "我想关闭我的银行账户",
    "pronunciation": "/aɪ/ /wɑːnt/ /tuː; tə/ /kloʊs/ /maɪ/ /bæŋk/ /əˈkaʊnt/"
  },
  {
    "id": "34",
    "sentence": "I'm so sorry to hear that",
    "chinese": "听到这个消息我非常遗憾",
    "pronunciation": "/aɪm/ /soʊ/ /ˈsɑːri/ /tuː; tə/ /hɪr/ /ðæt/"
  },
  {
    "id": "35",
    "sentence": "Can I ask why",
    "chinese": "我能问一下原因吗？",
    "pronunciation": "/kæn/ /aɪ/ /æsk/ /waɪ/"
  },
  {
    "id": "36",
    "sentence": "I'm so sorry to hear that . Can I ask why ?",
    "chinese": "听到这个消息我非常遗憾我能问一下原因吗？",
    "pronunciation": "/aɪm/ /soʊ/ /ˈsɑːri/ /tuː; tə/ /hɪr/ /ðæt/ /kæn/ /aɪ/ /æsk/ /waɪ/"
  },
  {
    "id": "37",
    "sentence": "It's because of",
    "chinese": "都是因为",
    "pronunciation": "/ɪts/ /bɪˈkəz, bɪˈkɔːz/ /ʌv/"
  },
  {
    "id": "38",
    "sentence": "all the extra fees",
    "chinese": "所有的额外费用",
    "pronunciation": "/ɔːl/ /ðə/ /ˈekstrə/ /fiːz/"
  },
  {
    "id": "39",
    "sentence": "It's because of all the extra fees",
    "chinese": "这都是因为那些额外的费用",
    "pronunciation": "/ɪts/ /bɪˈkəz, bɪˈkɔːz/ /ʌv/ /ɔːl/ /ðə/ /ˈekstrə/ /fiːz/"
  },
  {
    "id": "40",
    "sentence": "Most banks",
    "chinese": "大多数银行",
    "pronunciation": "/moʊst/ /bæŋks/"
  },
  {
    "id": "41",
    "sentence": "charge fees",
    "chinese": "收取费用",
    "pronunciation": "/tʃɑrdʒ/ /fiːz/"
  },
  {
    "id": "42",
    "sentence": "Most banks charge fees",
    "chinese": "大多数银行都会收取费用",
    "pronunciation": "/moʊst/ /bæŋks/ /tʃɑrdʒ/ /fiːz/"
  },
];
