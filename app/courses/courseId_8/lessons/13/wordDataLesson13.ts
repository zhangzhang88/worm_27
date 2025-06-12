export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hi , there",
    "chinese": "嗨，大家好",
    "pronunciation": "/haɪ/ /ðer; ðər/"
  },
  {
    "id": "2",
    "sentence": "this is",
    "chinese": "我是",
    "pronunciation": "/ðɪs/ /ɪz/"
  },
  {
    "id": "3",
    "sentence": "Steve Kaufmann",
    "chinese": "Steve Kaufmann",
    "pronunciation": "/stiːv/ /kaʊfˈmæn/"
  },
  {
    "id": "4",
    "sentence": "this is Steve Kaufmann",
    "chinese": "我是Steve Kaufmann",
    "pronunciation": "/ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/"
  },
  {
    "id": "5",
    "sentence": "Hi , there , this is Steve Kaufmann",
    "chinese": "嗨，大家好，我是Steve Kaufmann",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/"
  },
  {
    "id": "6",
    "sentence": "Founder of LingQ",
    "chinese": "LingQ的创始人",
    "pronunciation": "/ˈfaʊndər/ /ʌv/ /lɪŋk/"
  },
  {
    "id": "7",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/"
  },
  {
    "id": "8",
    "sentence": "and today",
    "chinese": "今天",
    "pronunciation": "/ænd; ənd/ /təˈdeɪ/"
  },
  {
    "id": "9",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/"
  },
  {
    "id": "10",
    "sentence": "I'm gonna",
    "chinese": "我要",
    "pronunciation": "/aɪm/ /ˈɡənə; ˈgɔːnə/"
  },
  {
    "id": "11",
    "sentence": "talk about",
    "chinese": "谈论",
    "pronunciation": "/tɔːk/ /əˈbaʊt/"
  },
  {
    "id": "12",
    "sentence": "I'm gonna talk about",
    "chinese": "我要谈谈",
    "pronunciation": "/aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/"
  },
  {
    "id": "13",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today I'm gonna talk about",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要谈谈",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/ /aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/"
  },
  {
    "id": "14",
    "sentence": "the fifth",
    "chinese": "第五个",
    "pronunciation": "/ðə/ /fɪfθ/"
  },
  {
    "id": "15",
    "sentence": "Secret to",
    "chinese": "秘诀",
    "pronunciation": "/ˈsiːkrət/ /tuː; tə/"
  },
  {
    "id": "16",
    "sentence": "the fifth Secret to",
    "chinese": "第五个秘诀",
    "pronunciation": "/ðə/ /fɪfθ/ /ˈsiːkrət/ /tuː; tə/"
  },
  {
    "id": "17",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today I'm gonna talk about the fifth Secret to",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要谈谈",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/ /aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /tuː; tə/"
  },
  {
    "id": "18",
    "sentence": "Successful Language Learning",
    "chinese": "成功的语言学习",
    "pronunciation": "/səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "19",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today I'm gonna talk about the fifth Secret to Successful Language Learning",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要和大家分享语言学习的第五个秘诀",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/ /aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /tuː; tə/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "20",
    "sentence": "Again",
    "chinese": "再次提醒",
    "pronunciation": "/əˈɡen/"
  },
  {
    "id": "21",
    "sentence": "you'll remember",
    "chinese": "你将记得",
    "pronunciation": "/jʊl/ /rɪˈmembər/"
  },
  {
    "id": "22",
    "sentence": "Again , you'll remember",
    "chinese": "再次提醒，你将记得",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/"
  },
  {
    "id": "23",
    "sentence": "that so far",
    "chinese": "到目前为止",
    "pronunciation": "/ðæt/ /soʊ/ /fɑːr/"
  },
  {
    "id": "24",
    "sentence": "Again , you'll remember that so far",
    "chinese": "再次提醒，你将记得到目前为止",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/"
  },
  {
    "id": "25",
    "sentence": "we've discussed",
    "chinese": "我们已经讨论过",
    "pronunciation": "/wɪv/ /dɪˈskʌst/"
  },
  {
    "id": "26",
    "sentence": "Again , you'll remember that so far we've discussed",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/"
  },
  {
    "id": "27",
    "sentence": "the need",
    "chinese": "需要",
    "pronunciation": "/ðə/ /niːd/"
  },
  {
    "id": "28",
    "sentence": "to spend",
    "chinese": "花费",
    "pronunciation": "/tuː; tə/ /spend/"
  },
  {
    "id": "29",
    "sentence": "the need to spend",
    "chinese": "需要花费",
    "pronunciation": "/ðə/ /niːd/ /tuː; tə/ /spend/"
  },
  {
    "id": "30",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/"
  },
  {
    "id": "31",
    "sentence": "a lot of time",
    "chinese": "大量时间",
    "pronunciation": "/ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/"
  },
  {
    "id": "32",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/"
  },
  {
    "id": "33",
    "sentence": "enough time",
    "chinese": "足够的时间",
    "pronunciation": "/ɪˈnʌf/ /taɪm/"
  },
  {
    "id": "34",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time , enough time",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间，足够的时间",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ɪˈnʌf/ /taɪm/"
  },
  {
    "id": "35",
    "sentence": "an hour",
    "chinese": "一小时",
    "pronunciation": "/æn; ən/ /ˈaʊər/"
  },
  {
    "id": "36",
    "sentence": "a day",
    "chinese": "一天",
    "pronunciation": "/ə; eɪ/ /deɪ/"
  },
  {
    "id": "37",
    "sentence": "an hour a day",
    "chinese": "每天一小时",
    "pronunciation": "/æn; ən/ /ˈaʊər/ /ə; eɪ/ /deɪ/"
  },
  {
    "id": "38",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time , enough time , an hour a day",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间，足够的时间，每天一小时",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ɪˈnʌf/ /taɪm/ /æn; ən/ /ˈaʊər/ /ə; eɪ/ /deɪ/"
  },
  {
    "id": "39",
    "sentence": "for",
    "chinese": "持续",
    "pronunciation": "/fɔːr; fər/"
  },
  {
    "id": "40",
    "sentence": "quite a long period",
    "chinese": "相当长的一段时间",
    "pronunciation": "/kwaɪt/ /ə; eɪ/ /lɔːŋ/ /ˈpɪriəd/"
  },
  {
    "id": "41",
    "sentence": "of time",
    "chinese": "的时间",
    "pronunciation": "/ʌv/ /taɪm/"
  },
  {
    "id": "42",
    "sentence": "for quite a long period of time",
    "chinese": "持续相当长的一段时间",
    "pronunciation": "/fɔːr; fər/ /kwaɪt/ /ə; eɪ/ /lɔːŋ/ /ˈpɪriəd/ /ʌv/ /taɪm/"
  },
  {
    "id": "43",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time , enough time , an hour a day for quite a long period of time",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间，足够的时间，每天一小时，持续相当长的一段时间",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ɪˈnʌf/ /taɪm/ /æn; ən/ /ˈaʊər/ /ə; eɪ/ /deɪ/ /fɔːr; fər/ /kwaɪt/ /ə; eɪ/ /lɔːŋ/ /ˈpɪriəd/ /ʌv/ /taɪm/"
  },
  {
    "id": "44",
    "sentence": "The second secret",
    "chinese": "第二个秘诀",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/"
  },
  {
    "id": "45",
    "sentence": "was",
    "chinese": "是",
    "pronunciation": "/wʌz; wəz/"
  },
  {
    "id": "46",
    "sentence": "The second secret was",
    "chinese": "第二个秘密是",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/"
  },
  {
    "id": "47",
    "sentence": "to do",
    "chinese": "去做",
    "pronunciation": "/tuː; tə/ /duː; də/"
  },
  {
    "id": "48",
    "sentence": "things",
    "chinese": "事情",
    "pronunciation": "/θɪŋz/"
  },
  {
    "id": "49",
    "sentence": "to do things",
    "chinese": "去做事情",
    "pronunciation": "/tuː; tə/ /duː; də/ /θɪŋz/"
  },
  {
    "id": "50",
    "sentence": "The second secret was to do things",
    "chinese": "第二个秘密是去做事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/"
  },
  {
    "id": "51",
    "sentence": "that you",
    "chinese": "你",
    "pronunciation": "/ðæt/ /juː; jʊ/"
  },
  {
    "id": "52",
    "sentence": "like to do",
    "chinese": "喜欢做",
    "pronunciation": "/laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "53",
    "sentence": "that you like to do",
    "chinese": "你喜欢做的事情",
    "pronunciation": "/ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "54",
    "sentence": "The second secret was to do things that you like to do",
    "chinese": "第二个秘密是去做你喜欢做的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "55",
    "sentence": "in the language",
    "chinese": "用这种语言",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "56",
    "sentence": "The second secret was to do things that you like to do in the language",
    "chinese": "第二个秘诀是用这种语言去做你喜欢做的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "57",
    "sentence": "The third secret",
    "chinese": "第三个秘诀",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/"
  },
  {
    "id": "58",
    "sentence": "was",
    "chinese": "是",
    "pronunciation": "/wʌz; wəz/"
  },
  {
    "id": "59",
    "sentence": "The third secret was",
    "chinese": "第三个秘诀是",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/"
  },
  {
    "id": "60",
    "sentence": "to develop",
    "chinese": "培养",
    "pronunciation": "/tuː; tə/ /dɪˈveləp/"
  },
  {
    "id": "61",
    "sentence": "the ability",
    "chinese": "能力",
    "pronunciation": "/ðə/ /əˈbɪləti/"
  },
  {
    "id": "62",
    "sentence": "to develop the ability",
    "chinese": "培养能力",
    "pronunciation": "/tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/"
  },
  {
    "id": "63",
    "sentence": "The third secret was to develop the ability",
    "chinese": "第三个秘诀是培养能力",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/"
  },
  {
    "id": "64",
    "sentence": "to notice",
    "chinese": "注意到",
    "pronunciation": "/tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "65",
    "sentence": "what's happening",
    "chinese": "正在发生什么",
    "pronunciation": "/wʌts/ /ˈhæpənɪŋ/"
  },
  {
    "id": "66",
    "sentence": "to notice what's happening",
    "chinese": "注意到正在发生的事情",
    "pronunciation": "/tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/"
  },
  {
    "id": "67",
    "sentence": "The third secret was to develop the ability to notice what's happening",
    "chinese": "第三个秘诀是培养观察语言中正在发生什么的能力",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/"
  },
  {
    "id": "68",
    "sentence": "in the language",
    "chinese": "在语言中",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "69",
    "sentence": "The third secret was to develop the ability to notice what's happening in the language",
    "chinese": "第三个秘诀是培养观察语言中正在发生什么的能力",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "70",
    "sentence": "which",
    "chinese": "这是所有优秀语言学习者都具备的",
    "pronunciation": "/wɪtʃ/"
  },
  {
    "id": "71",
    "sentence": "all good",
    "chinese": "所有优秀的",
    "pronunciation": "/ɔːl/ /ɡʊd/"
  },
  {
    "id": "72",
    "sentence": "language learners",
    "chinese": "语言学习者",
    "pronunciation": "/ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/"
  },
  {
    "id": "73",
    "sentence": "have",
    "chinese": "具备",
    "pronunciation": "/hæv/"
  },
  {
    "id": "74",
    "sentence": "which all good language learners have",
    "chinese": "这是所有优秀语言学习者都具备的",
    "pronunciation": "/wɪtʃ/ /ɔːl/ /ɡʊd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /hæv/"
  },
  {
    "id": "75",
    "sentence": "The third secret was to develop the ability to notice what's happening in the language , which all good language learners have",
    "chinese": "第三个秘诀是培养观察语言中正在发生什么的能力，这是所有优秀语言学习者都具备的",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /wɪtʃ/ /ɔːl/ /ɡʊd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /hæv/"
  },
  {
    "id": "76",
    "sentence": "The fourth thing",
    "chinese": "第四点",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/"
  },
  {
    "id": "77",
    "sentence": "was",
    "chinese": "是",
    "pronunciation": "/wʌz; wəz/"
  },
  {
    "id": "78",
    "sentence": "The fourth thing was",
    "chinese": "第四点是",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/"
  },
  {
    "id": "79",
    "sentence": "to focus",
    "chinese": "专注于",
    "pronunciation": "/tuː; tə/ /ˈfoʊkəs/"
  },
  {
    "id": "80",
    "sentence": "on words",
    "chinese": "在词汇上",
    "pronunciation": "/ɑːn/ /wɜːrdz/"
  },
  {
    "id": "81",
    "sentence": "to focus on words",
    "chinese": "注重词汇",
    "pronunciation": "/tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/"
  },
  {
    "id": "82",
    "sentence": "The fourth thing was to focus on words",
    "chinese": "第四点是注重词汇",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/"
  },
  {
    "id": "83",
    "sentence": "vocabulary",
    "chinese": "词汇",
    "pronunciation": "/vəˈkæbjəleri/"
  },
  {
    "id": "84",
    "sentence": "rather than",
    "chinese": "而非",
    "pronunciation": "/ˈræðər/ /ðæn; ðən/"
  },
  {
    "id": "85",
    "sentence": "vocabulary rather than",
    "chinese": "词汇而非",
    "pronunciation": "/vəˈkæbjəleri/ /ˈræðər/ /ðæn; ðən/"
  },
  {
    "id": "86",
    "sentence": "The fourth thing was to focus on words , vocabulary rather than",
    "chinese": "第四点是注重词汇而非",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/ /vəˈkæbjəleri/ /ˈræðər/ /ðæn; ðən/"
  },
  {
    "id": "87",
    "sentence": "grammar",
    "chinese": "语法",
    "pronunciation": "/ˈɡræmər/"
  },
  {
    "id": "88",
    "sentence": "The fourth thing was to focus on words , vocabulary rather than grammar",
    "chinese": "第四点是注重词汇而非语法",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/ /vəˈkæbjəleri/ /ˈræðər/ /ðæn; ðən/ /ˈɡræmər/"
  },
  {
    "id": "89",
    "sentence": "Now",
    "chinese": "现在",
    "pronunciation": "/naʊ/"
  },
  {
    "id": "90",
    "sentence": "the fifth secret",
    "chinese": "第五个秘诀",
    "pronunciation": "/ðə/ /fɪfθ/ /ˈsiːkrət/"
  },
  {
    "id": "91",
    "sentence": "is",
    "chinese": "是",
    "pronunciation": "/ɪz/"
  },
  {
    "id": "92",
    "sentence": "Now , the fifth secret is",
    "chinese": "现在，第五个秘诀是",
    "pronunciation": "/naʊ/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /ɪz/"
  },
  {
    "id": "93",
    "sentence": "to be patient",
    "chinese": "要有耐心",
    "pronunciation": "/tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "94",
    "sentence": "Now , the fifth secret is to be patient",
    "chinese": "现在，第五个秘诀是要有耐心",
    "pronunciation": "/naʊ/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /ɪz/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "95",
    "sentence": "patient",
    "chinese": "耐心",
    "pronunciation": "/ˈpeɪʃnt/"
  },
  {
    "id": "96",
    "sentence": "Now , the fifth secret is to be patient , patient",
    "chinese": "现在，第五个秘诀是要有耐心，耐心",
    "pronunciation": "/naʊ/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /ɪz/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ˈpeɪʃnt/"
  },
  {
    "id": "97",
    "sentence": "I see",
    "chinese": "我看到",
    "pronunciation": "/aɪ/ /siː/"
  },
  {
    "id": "98",
    "sentence": "more",
    "chinese": "更多",
    "pronunciation": "/mɔːr/"
  },
  {
    "id": "99",
    "sentence": "frustrated",
    "chinese": "沮丧的",
    "pronunciation": "/ˈfrʌstreɪtɪd/"
  },
  {
    "id": "100",
    "sentence": "language learners",
    "chinese": "语言学习者",
    "pronunciation": "/ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/"
  },
  {
    "id": "101",
    "sentence": "I see more frustrated language learners",
    "chinese": "我看到更多感到沮丧的语言学习者",
    "pronunciation": "/aɪ/ /siː/ /mɔːr/ /ˈfrʌstreɪtɪd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/"
  },
  {
    "id": "102",
    "sentence": "who get upset",
    "chinese": "感到沮丧",
    "pronunciation": "/huː/ /ɡet/ /ˌʌpˈset/"
  },
  {
    "id": "103",
    "sentence": "I see more frustrated language learners who get upset",
    "chinese": "我看到更多因忘记单词而感到沮丧的语言学习者",
    "pronunciation": "/aɪ/ /siː/ /mɔːr/ /ˈfrʌstreɪtɪd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /huː/ /ɡet/ /ˌʌpˈset/"
  },
  {
    "id": "104",
    "sentence": "because",
    "chinese": "因为",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "105",
    "sentence": "they forget",
    "chinese": "他们忘记",
    "pronunciation": "/ðeɪ/ /fərˈɡet/"
  },
  {
    "id": "106",
    "sentence": "words",
    "chinese": "单词",
    "pronunciation": "/wɜːrdz/"
  },
  {
    "id": "107",
    "sentence": "because they forget words",
    "chinese": "因为他们忘记了单词",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /fərˈɡet/ /wɜːrdz/"
  },
  {
    "id": "108",
    "sentence": "I see more frustrated language learners who get upset because they forget words",
    "chinese": "我看到许多因忘记单词而感到沮丧的语言学习者",
    "pronunciation": "/aɪ/ /siː/ /mɔːr/ /ˈfrʌstreɪtɪd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /huː/ /ɡet/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /fərˈɡet/ /wɜːrdz/"
  },
  {
    "id": "109",
    "sentence": "They get",
    "chinese": "他们感到",
    "pronunciation": "/ðeɪ/ /ɡet/"
  },
  {
    "id": "110",
    "sentence": "upset",
    "chinese": "不安",
    "pronunciation": "/ˌʌpˈset/"
  },
  {
    "id": "111",
    "sentence": "They get upset",
    "chinese": "他们感到不安",
    "pronunciation": "/ðeɪ/ /ɡet/ /ˌʌpˈset/"
  },
  {
    "id": "112",
    "sentence": "because",
    "chinese": "因为",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "113",
    "sentence": "they don't understand",
    "chinese": "他们不明白",
    "pronunciation": "/ðeɪ/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "114",
    "sentence": "because they don't understand",
    "chinese": "因为他们不明白",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "115",
    "sentence": "They get upset because they don't understand",
    "chinese": "他们感到不安，因为他们不明白",
    "pronunciation": "/ðeɪ/ /ɡet/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "116",
    "sentence": "even after",
    "chinese": "即使之后",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/"
  },
  {
    "id": "117",
    "sentence": "listening",
    "chinese": "听",
    "pronunciation": "/ˈlɪsnɪŋ/"
  },
  {
    "id": "118",
    "sentence": "many",
    "chinese": "多次",
    "pronunciation": "/ˈmeni/"
  },
  {
    "id": "119",
    "sentence": "many times",
    "chinese": "多次",
    "pronunciation": "/ˈmeni/ /taɪmz/"
  },
  {
    "id": "120",
    "sentence": "Even after listening many , many times",
    "chinese": "即使多次反复听",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/"
  },
  {
    "id": "121",
    "sentence": "to",
    "chinese": "到",
    "pronunciation": "/tuː; tə/"
  },
  {
    "id": "122",
    "sentence": "the same content",
    "chinese": "相同的内容",
    "pronunciation": "/ðə/ /seɪm/ /ˈkɑːntent/"
  },
  {
    "id": "123",
    "sentence": "to the same content",
    "chinese": "对同一段内容",
    "pronunciation": "/tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/"
  },
  {
    "id": "124",
    "sentence": "Even after listening many , many times to the same content",
    "chinese": "即使多次反复听同一段内容",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/"
  },
  {
    "id": "125",
    "sentence": "certain parts",
    "chinese": "某些部分",
    "pronunciation": "/ˈsɜːrt(ə)n/ /pɑːrts/"
  },
  {
    "id": "126",
    "sentence": "of it",
    "chinese": "其中的",
    "pronunciation": "/ʌv/ /ɪt/"
  },
  {
    "id": "127",
    "sentence": "certain parts of it",
    "chinese": "其中的某些部分",
    "pronunciation": "/ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/"
  },
  {
    "id": "128",
    "sentence": "Even after listening many , many times to the same content , certain parts of it",
    "chinese": "即使多次反复听同一段内容，其中的某些部分",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/"
  },
  {
    "id": "129",
    "sentence": "they just don't understand",
    "chinese": "他们就是不明白",
    "pronunciation": "/ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "130",
    "sentence": "Even after listening many , many times to the same content , certain parts of it they just don't understand",
    "chinese": "即使多次反复听同一段内容，他们仍然无法理解其中的某些部分",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "131",
    "sentence": "or",
    "chinese": "或者",
    "pronunciation": "/ɔr/"
  },
  {
    "id": "132",
    "sentence": "they watch",
    "chinese": "他们观看",
    "pronunciation": "/ðeɪ/ /wɑːtʃ/"
  },
  {
    "id": "133",
    "sentence": "a movie",
    "chinese": "一部电影",
    "pronunciation": "/ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "134",
    "sentence": "or they watch a movie many times",
    "chinese": "或者他们多次观看同一部电影",
    "pronunciation": "/ɔr/ /ðeɪ/ /wɑːtʃ/ /ə; eɪ/ /ˈmuːvi/ /ˈmeni/ /taɪmz/"
  },
  {
    "id": "135",
    "sentence": "Even after listening many , many times to the same content , certain parts of it they just don't understand or they watch a movie many times",
    "chinese": "即使多次反复听同一段内容，他们仍然无法理解其中的某些部分；或者他们多次观看同一部电影",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/ /ɔr/ /ðeɪ/ /wɑːtʃ/ /ə; eɪ/ /ˈmuːvi/ /ˈmeni/ /taɪmz/"
  },
  {
    "id": "136",
    "sentence": "and",
    "chinese": "或者",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "137",
    "sentence": "they can't understand",
    "chinese": "他们无法理解",
    "pronunciation": "/ðeɪ/ /kænt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "138",
    "sentence": "it",
    "chinese": "同一段内容",
    "pronunciation": "/ɪt/"
  },
  {
    "id": "139",
    "sentence": "and they can't understand it",
    "chinese": "他们仍然无法理解",
    "pronunciation": "/ænd; ənd/ /ðeɪ/ /kænt/ /ˌʌndərˈstænd/ /ɪt/"
  },
  {
    "id": "140",
    "sentence": "Even after listening many , many times to the same content , certain parts of it they just don't understand or they watch a movie many times and they can't understand it",
    "chinese": "即使多次反复听同一段内容，他们仍然无法理解其中的某些部分；或者他们多次观看同一部电影，却依然无法理解",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/ /ɔr/ /ðeɪ/ /wɑːtʃ/ /ə; eɪ/ /ˈmuːvi/ /ˈmeni/ /taɪmz/ /ænd; ənd/ /ðeɪ/ /kænt/ /ˌʌndərˈstænd/ /ɪt/"
  },
  {
    "id": "141",
    "sentence": "Let me tell you",
    "chinese": "让我告诉你",
    "pronunciation": "/let/ /miː/ /tel/ /juː; jʊ/"
  },
  {
    "id": "142",
    "sentence": "that is",
    "chinese": "那是",
    "pronunciation": "/ðæt/ /ɪz/"
  },
  {
    "id": "143",
    "sentence": "absolutely normal",
    "chinese": "绝对正常",
    "pronunciation": "/ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "144",
    "sentence": "that is absolutely normal",
    "chinese": "那绝对是正常的",
    "pronunciation": "/ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "145",
    "sentence": "Let me tell you , that is absolutely normal",
    "chinese": "让我告诉你，那绝对是正常的",
    "pronunciation": "/let/ /miː/ /tel/ /juː; jʊ/ /ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "146",
    "sentence": "You will have",
    "chinese": "你将会有",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/"
  },
  {
    "id": "147",
    "sentence": "and continue",
    "chinese": "并且继续",
    "pronunciation": "/ænd; ənd/ /kənˈtɪnjuː/"
  },
  {
    "id": "148",
    "sentence": "to have",
    "chinese": "有",
    "pronunciation": "/tuː; tə/ /hæv/"
  },
  {
    "id": "149",
    "sentence": "and continue to have",
    "chinese": "并且将继续会有",
    "pronunciation": "/ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/"
  },
  {
    "id": "150",
    "sentence": "You will have and continue to have",
    "chinese": "你会有并且将继续会有",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/"
  },
  {
    "id": "151",
    "sentence": "times when",
    "chinese": "一些时候",
    "pronunciation": "/taɪmz/ /wen/"
  },
  {
    "id": "152",
    "sentence": "You will have and continue to have times when",
    "chinese": "你将会有并且将继续会有一些时候",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/"
  },
  {
    "id": "153",
    "sentence": "you find",
    "chinese": "你发现",
    "pronunciation": "/juː; jʊ/ /faɪnd/"
  },
  {
    "id": "154",
    "sentence": "it difficult",
    "chinese": "它困难",
    "pronunciation": "/ɪt/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "155",
    "sentence": "you find it difficult",
    "chinese": "你发现它很难",
    "pronunciation": "/juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "156",
    "sentence": "You will have and continue to have times when you find it difficult",
    "chinese": "你将会有并且将继续会有一些时候，发现难以表达",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/ /juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "157",
    "sentence": "to say",
    "chinese": "表达",
    "pronunciation": "/tuː; tə/ /seɪ/"
  },
  {
    "id": "158",
    "sentence": "what",
    "chinese": "你想说的话",
    "pronunciation": "/wʌt/"
  },
  {
    "id": "159",
    "sentence": "to say what",
    "chinese": "表达",
    "pronunciation": "/tuː; tə/ /seɪ/ /wʌt/"
  },
  {
    "id": "160",
    "sentence": "You will have and continue to have times when you find it difficult to say what",
    "chinese": "你将会有并且将继续会有一些时候，发现难以说出你想说的话",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/ /juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/ /tuː; tə/ /seɪ/ /wʌt/"
  },
  {
    "id": "161",
    "sentence": "you want",
    "chinese": "你想",
    "pronunciation": "/juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "162",
    "sentence": "you want to say",
    "chinese": "你想说的话",
    "pronunciation": "/juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "163",
    "sentence": "You will have and continue to have times when you find it difficult to say what you want to say",
    "chinese": "你会有并且将继续会有一些时候，发现难以表达你想说的话",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/ /juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/ /tuː; tə/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "164",
    "sentence": "Maybe",
    "chinese": "也许",
    "pronunciation": "/ˈmeɪbi/"
  },
  {
    "id": "165",
    "sentence": "the day before",
    "chinese": "前一天",
    "pronunciation": "/ðə/ /deɪ/ /bɪˈfɔr/"
  },
  {
    "id": "166",
    "sentence": "Maybe the day before",
    "chinese": "也许前一天",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/"
  },
  {
    "id": "167",
    "sentence": "you felt",
    "chinese": "你感到",
    "pronunciation": "/juː; jʊ/ /felt/"
  },
  {
    "id": "168",
    "sentence": "you were",
    "chinese": "你是",
    "pronunciation": "/juː; jʊ/ /wɜːr; wər/"
  },
  {
    "id": "169",
    "sentence": "doing very well",
    "chinese": "做得很好",
    "pronunciation": "/ˈduːɪŋ/ /ˈveri/ /wel/"
  },
  {
    "id": "170",
    "sentence": "you felt you were doing very well",
    "chinese": "你觉得自己做得很好",
    "pronunciation": "/juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/"
  },
  {
    "id": "171",
    "sentence": "Maybe the day before you felt you were doing very well",
    "chinese": "也许前一天你还觉得自己做得很好",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/"
  },
  {
    "id": "172",
    "sentence": "and all of a sudden",
    "chinese": "突然间",
    "pronunciation": "/ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "173",
    "sentence": "Maybe the day before you felt you were doing very well and all of a sudden",
    "chinese": "也许前一天你还觉得自己做得很好，突然间",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "174",
    "sentence": "you can't",
    "chinese": "你不能",
    "pronunciation": "/juː; jʊ/ /kænt/"
  },
  {
    "id": "175",
    "sentence": "say",
    "chinese": "表达",
    "pronunciation": "/seɪ/"
  },
  {
    "id": "176",
    "sentence": "what",
    "chinese": "什么",
    "pronunciation": "/wʌt/"
  },
  {
    "id": "177",
    "sentence": "you want",
    "chinese": "你想",
    "pronunciation": "/juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "178",
    "sentence": "to say",
    "chinese": "表达",
    "pronunciation": "/tuː; tə/ /seɪ/"
  },
  {
    "id": "179",
    "sentence": "you can't say what you want to say",
    "chinese": "你无法说出你想说的话",
    "pronunciation": "/juː; jʊ/ /kænt/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "180",
    "sentence": "Maybe the day before you felt you were doing very well and all of a sudden you can't say what you want to say",
    "chinese": "也许前一天你还觉得自己做得很好，突然间却无法表达你想说的话",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /juː; jʊ/ /kænt/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "181",
    "sentence": "and",
    "chinese": "而且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "182",
    "sentence": "that is",
    "chinese": "这完全是",
    "pronunciation": "/ðæt/ /ɪz/"
  },
  {
    "id": "183",
    "sentence": "absolutely normal",
    "chinese": "完全正常",
    "pronunciation": "/ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "184",
    "sentence": "and that is absolutely normal",
    "chinese": "这完全是正常的",
    "pronunciation": "/ænd; ənd/ /ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "185",
    "sentence": "Maybe the day before you felt you were doing very well and all of a sudden you can't say what you want to say and that is absolutely normal",
    "chinese": "也许前一天你还觉得自己做得很好，突然间却无法表达你想说的话，这完全是正常的",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /juː; jʊ/ /kænt/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/ /ænd; ənd/ /ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "186",
    "sentence": "It's important",
    "chinese": "重要的是",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "187",
    "sentence": "to realize",
    "chinese": "认识到",
    "pronunciation": "/tuː; tə/ /ˈrɪlˌaɪz/"
  },
  {
    "id": "188",
    "sentence": "It's important to realize",
    "chinese": "重要的是要认识到",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/"
  },
  {
    "id": "189",
    "sentence": "that",
    "chinese": "认识到",
    "pronunciation": "/ðæt/"
  },
  {
    "id": "190",
    "sentence": "the brain",
    "chinese": "大脑",
    "pronunciation": "/ðə/ /breɪn/"
  },
  {
    "id": "191",
    "sentence": "is constantly learning",
    "chinese": "一直在学习",
    "pronunciation": "/ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "192",
    "sentence": "that the brain is constantly learning",
    "chinese": "大脑一直在学习",
    "pronunciation": "/ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "193",
    "sentence": "It's important to realize that the brain is constantly learning",
    "chinese": "重要的是要认识到，大脑一直在学习",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "194",
    "sentence": "and",
    "chinese": "而且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "195",
    "sentence": "there are",
    "chinese": "有",
    "pronunciation": "/ðer; ðər/ /ɑr/"
  },
  {
    "id": "196",
    "sentence": "a number of books",
    "chinese": "许多书籍",
    "pronunciation": "/ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/"
  },
  {
    "id": "197",
    "sentence": "and there are a number of books",
    "chinese": "而且我读过许多书籍",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/"
  },
  {
    "id": "198",
    "sentence": "It's important to realize that the brain is constantly learning and there are a number of books",
    "chinese": "重要的是要认识到，大脑一直在学习，而且有许多书籍",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/"
  },
  {
    "id": "199",
    "sentence": "that I've read about",
    "chinese": "我读过的关于",
    "pronunciation": "/ðæt/ /aɪv/ /riːd/ /əˈbaʊt/"
  },
  {
    "id": "200",
    "sentence": "It's important to realize that the brain is constantly learning and there are a number of books that I've read about",
    "chinese": "重要的是要认识到，大脑一直在学习，而且我读过许多关于大脑如何学习的书籍",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/ /ðæt/ /aɪv/ /riːd/ /əˈbaʊt/"
  },
  {
    "id": "201",
    "sentence": "how",
    "chinese": "如何",
    "pronunciation": "/haʊ/"
  },
  {
    "id": "202",
    "sentence": "learns",
    "chinese": "学习",
    "pronunciation": "/lɜːrz/"
  },
  {
    "id": "203",
    "sentence": "how the brain learns",
    "chinese": "大脑如何学习",
    "pronunciation": "/haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "204",
    "sentence": "It's important to realize that the brain is constantly learning and there are a number of books that I've read about how the brain learns",
    "chinese": "重要的是要认识到，大脑一直在学习，而且我读过许多关于大脑如何学习的书籍",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/ /ðæt/ /aɪv/ /riːd/ /əˈbaʊt/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "205",
    "sentence": "The brain",
    "chinese": "大脑",
    "pronunciation": "/ðə/ /breɪn/"
  },
  {
    "id": "206",
    "sentence": "will constantly learn",
    "chinese": "会不断学习",
    "pronunciation": "/wɪl/ /ˈkɑːnstəntli/ /lɜːrn/"
  },
  {
    "id": "207",
    "sentence": "The brain will constantly learn",
    "chinese": "大脑会不断学习",
    "pronunciation": "/ðə/ /breɪn/ /wɪl/ /ˈkɑːnstəntli/ /lɜːrn/"
  },
  {
    "id": "208",
    "sentence": "and",
    "chinese": "并",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "209",
    "sentence": "it's constantly changing",
    "chinese": "它不断变化",
    "pronunciation": "/ɪts/ /ˈkɑːnstəntli/ /ˈtʃeɪndʒɪŋ/"
  },
  {
    "id": "210",
    "sentence": "and it's constantly changing",
    "chinese": "并且它不断变化",
    "pronunciation": "/ænd; ənd/ /ɪts/ /ˈkɑːnstəntli/ /ˈtʃeɪndʒɪŋ/"
  },
  {
    "id": "211",
    "sentence": "The brain will constantly learn and it's constantly changing",
    "chinese": "大脑会不断学习和变化",
    "pronunciation": "/ðə/ /breɪn/ /wɪl/ /ˈkɑːnstəntli/ /lɜːrn/ /ænd; ənd/ /ɪts/ /ˈkɑːnstəntli/ /ˈtʃeɪndʒɪŋ/"
  },
  {
    "id": "212",
    "sentence": "and renewing",
    "chinese": "并不断自我更新",
    "pronunciation": "/ænd; ənd/ /rɪˈnuːɪŋ/"
  },
  {
    "id": "213",
    "sentence": "itself",
    "chinese": "自身",
    "pronunciation": "/ɪtˈself/"
  },
  {
    "id": "214",
    "sentence": "and renewing itself",
    "chinese": "并不断自我更新",
    "pronunciation": "/ænd; ənd/ /rɪˈnuːɪŋ/ /ɪtˈself/"
  },
  {
    "id": "215",
    "sentence": "The brain will constantly learn and it's constantly changing and renewing itself",
    "chinese": "大脑会不断学习和变化，并不断自我更新",
    "pronunciation": "/ðə/ /breɪn/ /wɪl/ /ˈkɑːnstəntli/ /lɜːrn/ /ænd; ənd/ /ɪts/ /ˈkɑːnstəntli/ /ˈtʃeɪndʒɪŋ/ /ænd; ənd/ /rɪˈnuːɪŋ/ /ɪtˈself/"
  },
  {
    "id": "216",
    "sentence": "However",
    "chinese": "然而",
    "pronunciation": "/haʊˈevər/"
  },
  {
    "id": "217",
    "sentence": "it does so",
    "chinese": "学习是按照自己的节奏进行的",
    "pronunciation": "/ɪt/ /dʌz/ /soʊ/"
  },
  {
    "id": "218",
    "sentence": "However , it does so",
    "chinese": "然而，它按照自己的节奏这样做",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/"
  },
  {
    "id": "219",
    "sentence": "on its own schedule",
    "chinese": "按照自己的节奏",
    "pronunciation": "/ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/"
  },
  {
    "id": "220",
    "sentence": "However , it does so on its own schedule",
    "chinese": "然而，它是按照自己的节奏进行的",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/"
  },
  {
    "id": "221",
    "sentence": "so",
    "chinese": "所以",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "222",
    "sentence": "just because",
    "chinese": "仅仅因为",
    "pronunciation": "/dʒʌst/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "223",
    "sentence": "so just because",
    "chinese": "所以仅仅因为",
    "pronunciation": "/soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "224",
    "sentence": "However , it does so on its own schedule , so just because",
    "chinese": "然而，它是按照自己的时间表进行的，所以仅仅因为",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "225",
    "sentence": "you've studied",
    "chinese": "你已经学过",
    "pronunciation": "/juːv/ /ˈstʌdid/"
  },
  {
    "id": "226",
    "sentence": "something",
    "chinese": "某样东西",
    "pronunciation": "/ˈsʌmθɪŋ/"
  },
  {
    "id": "227",
    "sentence": "you've studied something",
    "chinese": "你已经学过某样东西",
    "pronunciation": "/juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "228",
    "sentence": "However , it does so on its own schedule , so just because you've studied something",
    "chinese": "然而，它是按照自己的节奏进行的，所以仅仅因为你已经学过某样东西",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/ /juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "229",
    "sentence": "doesn't mean",
    "chinese": "并不意味着",
    "pronunciation": "/ˈdʌznt/ /miːn/"
  },
  {
    "id": "230",
    "sentence": "However , it does so on its own schedule , so just because you've studied something doesn't mean",
    "chinese": "然而，它是按照自己的节奏进行的，所以仅仅因为你已经学过某样东西，并不意味着",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/ /juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/ /ˈdʌznt/ /miːn/"
  },
  {
    "id": "231",
    "sentence": "you're going",
    "chinese": "你要去",
    "pronunciation": "/jʊr/ /ˈɡoʊɪŋ/"
  },
  {
    "id": "232",
    "sentence": "to learn",
    "chinese": "掌握",
    "pronunciation": "/tuː; tə/ /lɜːrn/"
  },
  {
    "id": "233",
    "sentence": "it",
    "chinese": "学习",
    "pronunciation": "/ɪt/"
  },
  {
    "id": "234",
    "sentence": "you're going to learn it",
    "chinese": "你将会学会它",
    "pronunciation": "/jʊr/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /ɪt/"
  },
  {
    "id": "235",
    "sentence": "However , it does so on its own schedule , so just because you've studied something doesn't mean you're going to learn it",
    "chinese": "然而，学习是按照自己的节奏进行的，所以即使你已经学过某样东西，也不意味着你已经掌握了它",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/ /juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/ /ˈdʌznt/ /miːn/ /jʊr/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /ɪt/"
  },
  {
    "id": "236",
    "sentence": "However",
    "chinese": "然而",
    "pronunciation": "/haʊˈevər/"
  },
  {
    "id": "237",
    "sentence": "you have",
    "chinese": "你有",
    "pronunciation": "/juː; jʊ/ /hæv/"
  },
  {
    "id": "238",
    "sentence": "to be",
    "chinese": "保持",
    "pronunciation": "/tuː; tə/ /biː/"
  },
  {
    "id": "239",
    "sentence": "confident",
    "chinese": "自信",
    "pronunciation": "/ˈkɑːnfɪdənt/"
  },
  {
    "id": "240",
    "sentence": "you have to be confident",
    "chinese": "你必须保持自信",
    "pronunciation": "/juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/"
  },
  {
    "id": "241",
    "sentence": "However , you have to be confident",
    "chinese": "然而，你必须保持自信",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/"
  },
  {
    "id": "242",
    "sentence": "as you",
    "chinese": "当你",
    "pronunciation": "/æz; əz/ /juː; jʊ/"
  },
  {
    "id": "243",
    "sentence": "continue",
    "chinese": "继续",
    "pronunciation": "/kənˈtɪnjuː/"
  },
  {
    "id": "244",
    "sentence": "as you continue",
    "chinese": "当你继续",
    "pronunciation": "/æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/"
  },
  {
    "id": "245",
    "sentence": "However , you have to be confident as you continue",
    "chinese": "然而，你必须在继续的过程中保持自信",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/"
  },
  {
    "id": "246",
    "sentence": "and persevere",
    "chinese": "并坚持",
    "pronunciation": "/ænd; ənd/ /ˌpɜːrsəˈvɪr/"
  },
  {
    "id": "247",
    "sentence": "However , you have to be confident as you continue and persevere",
    "chinese": "然而，你必须在继续并坚持的过程中保持自信",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/"
  },
  {
    "id": "248",
    "sentence": "in your studies",
    "chinese": "在学习中",
    "pronunciation": "/ɪn/ /jʊr; jər/ /ˈstʌdiz/"
  },
  {
    "id": "249",
    "sentence": "However , you have to be confident as you continue and persevere in your studies",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/"
  },
  {
    "id": "250",
    "sentence": "and",
    "chinese": "并且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "251",
    "sentence": "that you're",
    "chinese": "你正在",
    "pronunciation": "/ðæt/ /jʊr/"
  },
  {
    "id": "252",
    "sentence": "doing things",
    "chinese": "做事情",
    "pronunciation": "/ˈduːɪŋ/ /θɪŋz/"
  },
  {
    "id": "253",
    "sentence": "and that you're doing things",
    "chinese": "并且你正在做你喜欢的事情",
    "pronunciation": "/ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/"
  },
  {
    "id": "254",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/"
  },
  {
    "id": "255",
    "sentence": "you like",
    "chinese": "你喜欢",
    "pronunciation": "/juː; jʊ/ /laɪk/"
  },
  {
    "id": "256",
    "sentence": "to do",
    "chinese": "做",
    "pronunciation": "/tuː; tə/ /duː; də/"
  },
  {
    "id": "257",
    "sentence": "you like to do",
    "chinese": "你喜欢做的事情",
    "pronunciation": "/juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "258",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things you like to do",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "259",
    "sentence": "which",
    "chinese": "在我看来",
    "pronunciation": "/wɪtʃ/"
  },
  {
    "id": "260",
    "sentence": "in my case",
    "chinese": "在我看来",
    "pronunciation": "/ɪn/ /maɪ/ /keɪs/"
  },
  {
    "id": "261",
    "sentence": "which in my case",
    "chinese": "在我看来",
    "pronunciation": "/wɪtʃ/ /ɪn/ /maɪ/ /keɪs/"
  },
  {
    "id": "262",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things you like to do , which in my case",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情，在我看来",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /wɪtʃ/ /ɪn/ /maɪ/ /keɪs/"
  },
  {
    "id": "263",
    "sentence": "is listening",
    "chinese": "是听",
    "pronunciation": "/ɪz/ /ˈlɪsnɪŋ/"
  },
  {
    "id": "264",
    "sentence": "and reading",
    "chinese": "和阅读",
    "pronunciation": "/ænd; ənd/ /ˈriːdɪŋ/"
  },
  {
    "id": "265",
    "sentence": "is listening and reading",
    "chinese": "是听和读",
    "pronunciation": "/ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/"
  },
  {
    "id": "266",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things you like to do , which in my case is listening and reading",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情，在我看来，那就是听和读",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /wɪtʃ/ /ɪn/ /maɪ/ /keɪs/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/"
  },
  {
    "id": "267",
    "sentence": "even if",
    "chinese": "即使",
    "pronunciation": "/ˈiː.vən/ /ɪf/"
  },
  {
    "id": "268",
    "sentence": "i'm talking",
    "chinese": "我在交谈",
    "pronunciation": "/aɪm/ /ˈtɔːkɪŋ/"
  },
  {
    "id": "269",
    "sentence": "to people",
    "chinese": "与人",
    "pronunciation": "/tuː; tə/ /ˈpipl/"
  },
  {
    "id": "270",
    "sentence": "Even if I'm talking to people",
    "chinese": "即使我在与人交谈",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "271",
    "sentence": "of course",
    "chinese": "当然",
    "pronunciation": "/ʌv/ /kɔːrs/"
  },
  {
    "id": "272",
    "sentence": "Even if I'm talking to people , of course",
    "chinese": "即使我在与人交谈，当然",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/ /ʌv/ /kɔːrs/"
  },
  {
    "id": "273",
    "sentence": "I'm listening",
    "chinese": "我在倾听",
    "pronunciation": "/aɪm/ /ˈlɪsnɪŋ/"
  },
  {
    "id": "274",
    "sentence": "Even if I'm talking to people , of course I'm listening",
    "chinese": "即使我在与人交谈，当然我也在倾听",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/ /ʌv/ /kɔːrs/ /aɪm/ /ˈlɪsnɪŋ/"
  },
  {
    "id": "275",
    "sentence": "and",
    "chinese": "并且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "276",
    "sentence": "I'm noticing",
    "chinese": "我也在注意",
    "pronunciation": "/aɪm/ /ˈnoʊtɪsɪŋ/"
  },
  {
    "id": "277",
    "sentence": "and I'm noticing",
    "chinese": "我也在注意",
    "pronunciation": "/ænd; ənd/ /aɪm/ /ˈnoʊtɪsɪŋ/"
  },
  {
    "id": "278",
    "sentence": "Even if I'm talking to people , of course I'm listening and I'm noticing",
    "chinese": "即使我在与人交谈，当然我也在倾听和注意",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/ /ʌv/ /kɔːrs/ /aɪm/ /ˈlɪsnɪŋ/ /ænd; ənd/ /aɪm/ /ˈnoʊtɪsɪŋ/"
  },
  {
    "id": "279",
    "sentence": "All of this",
    "chinese": "所有这些",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/"
  },
  {
    "id": "280",
    "sentence": "is gradually improving",
    "chinese": "正在逐步提升",
    "pronunciation": "/ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/"
  },
  {
    "id": "281",
    "sentence": "All of this is gradually improving",
    "chinese": "所有这些都在逐步提升",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/"
  },
  {
    "id": "282",
    "sentence": "my capability",
    "chinese": "我的能力",
    "pronunciation": "/maɪ/ /ˌkeɪpəˈbɪləti/"
  },
  {
    "id": "283",
    "sentence": "in the language",
    "chinese": "在语言中",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "284",
    "sentence": "my capability in the language",
    "chinese": "我的语言能力",
    "pronunciation": "/maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "285",
    "sentence": "All of this is gradually improving my capability in the language",
    "chinese": "所有这些都在逐步提升我的语言能力",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/ /maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "286",
    "sentence": "so",
    "chinese": "所以",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "287",
    "sentence": "you have",
    "chinese": "你必须",
    "pronunciation": "/juː; jʊ/ /hæv/"
  },
  {
    "id": "288",
    "sentence": "to accept",
    "chinese": "接受",
    "pronunciation": "/tuː; tə/ /əkˈsept/"
  },
  {
    "id": "289",
    "sentence": "that",
    "chinese": "这一点",
    "pronunciation": "/ðæt/"
  },
  {
    "id": "290",
    "sentence": "so you have to accept that",
    "chinese": "所以你必须接受这一点",
    "pronunciation": "/soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /əkˈsept/ /ðæt/"
  },
  {
    "id": "291",
    "sentence": "All of this is gradually improving my capability in the language , so you have to accept that",
    "chinese": "所有这些都在逐步提升我的语言能力，所以你必须接受这一点",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/ /maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /əkˈsept/ /ðæt/"
  },
  {
    "id": "292",
    "sentence": "and",
    "chinese": "所以",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "293",
    "sentence": "it's not",
    "chinese": "这不会是",
    "pronunciation": "/ɪts/ /nɑːt/"
  },
  {
    "id": "294",
    "sentence": "going to be",
    "chinese": "将会是",
    "pronunciation": "/ˈɡoʊɪŋ/ /tuː; tə/ /biː/"
  },
  {
    "id": "295",
    "sentence": "overnight",
    "chinese": "一夜之间",
    "pronunciation": "/ˌoʊvərˈnaɪt/"
  },
  {
    "id": "296",
    "sentence": "and it's not going to be overnight",
    "chinese": "而这不会是一蹴而就的",
    "pronunciation": "/ænd; ənd/ /ɪts/ /nɑːt/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /ˌoʊvərˈnaɪt/"
  },
  {
    "id": "297",
    "sentence": "All of this is gradually improving my capability in the language , so you have to accept that and it's not going to be overnight",
    "chinese": "所有这些都在逐步提升我的语言能力，所以你必须接受这一点，这不会是一蹴而就的",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/ /maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /əkˈsept/ /ðæt/ /ænd; ənd/ /ɪts/ /nɑːt/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /ˌoʊvərˈnaɪt/"
  },
  {
    "id": "298",
    "sentence": "it may",
    "chinese": "可能",
    "pronunciation": "/ɪt/ /meɪ/"
  },
  {
    "id": "299",
    "sentence": "take",
    "chinese": "需要",
    "pronunciation": "/teɪk/"
  },
  {
    "id": "300",
    "sentence": "six months",
    "chinese": "六个月",
    "pronunciation": "/sɪks/ /mʌnθs/"
  },
  {
    "id": "301",
    "sentence": "It may take six months",
    "chinese": "可能需要六个月的时间",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/"
  },
  {
    "id": "302",
    "sentence": "for certain things",
    "chinese": "对于某些事情",
    "pronunciation": "/fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/"
  },
  {
    "id": "303",
    "sentence": "to sink in",
    "chinese": "真正理解",
    "pronunciation": "/tuː; tə/ /sɪŋk/ /ɪn/"
  },
  {
    "id": "304",
    "sentence": "for certain things to sink in",
    "chinese": "对于某些事情来说，需要时间来真正理解",
    "pronunciation": "/fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/"
  },
  {
    "id": "305",
    "sentence": "It may take six months for certain things to sink in",
    "chinese": "某些事情可能需要六个月的时间才能真正理解",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/ /fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/"
  },
  {
    "id": "306",
    "sentence": "but",
    "chinese": "但",
    "pronunciation": "/bʌt/"
  },
  {
    "id": "307",
    "sentence": "all of a sudden",
    "chinese": "突然间",
    "pronunciation": "/ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "308",
    "sentence": "but all of a sudden",
    "chinese": "但突然间",
    "pronunciation": "/bʌt/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "309",
    "sentence": "It may take six months for certain things to sink in , but all of a sudden",
    "chinese": "某些事情可能需要六个月的时间才能真正理解，但突然间",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/ /fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/ /bʌt/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "310",
    "sentence": "they do",
    "chinese": "它们就会变得清晰",
    "pronunciation": "/ðeɪ/ /duː; də/"
  },
  {
    "id": "311",
    "sentence": "It may take six months for certain things to sink in , but all of a sudden they do",
    "chinese": "某些事情可能需要六个月的时间才能真正理解，但突然间它们就会变得清晰",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/ /fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/ /bʌt/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /ðeɪ/ /duː; də/"
  },
  {
    "id": "312",
    "sentence": "Almost without realizing it",
    "chinese": "几乎在不知不觉中",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/"
  },
  {
    "id": "313",
    "sentence": "and",
    "chinese": "并且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "314",
    "sentence": "I've had",
    "chinese": "我有过",
    "pronunciation": "/aɪv/ /hæd/"
  },
  {
    "id": "315",
    "sentence": "this feeling",
    "chinese": "这种感觉",
    "pronunciation": "/ðɪs/ /ˈfiːlɪŋ/"
  },
  {
    "id": "316",
    "sentence": "and I've had this feeling",
    "chinese": "（我有过这种感觉）",
    "pronunciation": "/ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/"
  },
  {
    "id": "317",
    "sentence": "Almost without realizing it and I've had this feeling",
    "chinese": "几乎在不知不觉中（我有过这种感觉）",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/"
  },
  {
    "id": "318",
    "sentence": "I'll go back",
    "chinese": "我会回去",
    "pronunciation": "/aɪl/ /ɡoʊ/ /bæk/"
  },
  {
    "id": "319",
    "sentence": "to",
    "chinese": "到",
    "pronunciation": "/tuː; tə/"
  },
  {
    "id": "320",
    "sentence": "a text",
    "chinese": "一个文本",
    "pronunciation": "/ə; eɪ/ /tekst/"
  },
  {
    "id": "321",
    "sentence": "I'll go back to a text",
    "chinese": "我会回到一个文本",
    "pronunciation": "/aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/"
  },
  {
    "id": "322",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到一个文本",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/"
  },
  {
    "id": "323",
    "sentence": "that",
    "chinese": "当时",
    "pronunciation": "/ðæt/"
  },
  {
    "id": "324",
    "sentence": "I struggled with",
    "chinese": "我感到困扰",
    "pronunciation": "/aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/"
  },
  {
    "id": "325",
    "sentence": "that I struggled with",
    "chinese": "我感到困扰的",
    "pronunciation": "/ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/"
  },
  {
    "id": "326",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到一个我曾经努力过的文本",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/"
  },
  {
    "id": "327",
    "sentence": "two-three months",
    "chinese": "两三个月",
    "pronunciation": "/tu θri/ /mʌnθs/"
  },
  {
    "id": "328",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前让我感到困扰的文本",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/"
  },
  {
    "id": "329",
    "sentence": "four months",
    "chinese": "四个月",
    "pronunciation": "/fɔr/ /mʌnθs/"
  },
  {
    "id": "330",
    "sentence": "earlier",
    "chinese": "之前",
    "pronunciation": "/ˈɜːrliər/"
  },
  {
    "id": "331",
    "sentence": "four months earlier",
    "chinese": "四个月前",
    "pronunciation": "/fɔr/ /mʌnθs/ /ˈɜːrliər/"
  },
  {
    "id": "332",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/"
  },
  {
    "id": "333",
    "sentence": "it seemed",
    "chinese": "当时似乎",
    "pronunciation": "/ɪt/ /siːmd/"
  },
  {
    "id": "334",
    "sentence": "and it seemed that",
    "chinese": "而且似乎",
    "pronunciation": "/ænd; ənd/ /ɪt/ /siːmd/ /ðæt/"
  },
  {
    "id": "335",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/"
  },
  {
    "id": "336",
    "sentence": "I never",
    "chinese": "我从未",
    "pronunciation": "/aɪ/ /ˈnev.ɚ/"
  },
  {
    "id": "337",
    "sentence": "made",
    "chinese": "取得",
    "pronunciation": "/meɪd/"
  },
  {
    "id": "338",
    "sentence": "any progress",
    "chinese": "任何进展",
    "pronunciation": "/ˈeni/ /ˈprɑːɡres/"
  },
  {
    "id": "339",
    "sentence": "I never made any progress",
    "chinese": "我从未取得任何进展",
    "pronunciation": "/aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/"
  },
  {
    "id": "340",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/"
  },
  {
    "id": "341",
    "sentence": "I could never understand",
    "chinese": "我永远无法理解",
    "pronunciation": "/aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/"
  },
  {
    "id": "342",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/"
  },
  {
    "id": "343",
    "sentence": "certain parts",
    "chinese": "某些部分",
    "pronunciation": "/ˈsɜːrt(ə)n/ /pɑːrts/"
  },
  {
    "id": "344",
    "sentence": "of it",
    "chinese": "关于它",
    "pronunciation": "/ʌv/ /ɪt/"
  },
  {
    "id": "345",
    "sentence": "certain parts of it",
    "chinese": "其中的某些部分",
    "pronunciation": "/ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/"
  },
  {
    "id": "346",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/"
  },
  {
    "id": "347",
    "sentence": "and all of a sudden",
    "chinese": "突然间",
    "pronunciation": "/ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "348",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it and all of a sudden",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分，但突然间",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "349",
    "sentence": "lo and behold",
    "chinese": "瞧！",
    "pronunciation": "/loʊ/ /ænd; ənd/ /bɪˈhoʊld/"
  },
  {
    "id": "350",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it and all of a sudden lo and behold !",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分，但突然间，瞧！",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/"
  },
  {
    "id": "351",
    "sentence": "it's",
    "chinese": "它对我来说",
    "pronunciation": "/ɪts/"
  },
  {
    "id": "352",
    "sentence": "crystal clear",
    "chinese": "清晰透彻",
    "pronunciation": "/ˈkrɪst(ə)l/ /klɪr/"
  },
  {
    "id": "353",
    "sentence": "to me",
    "chinese": "对我来说",
    "pronunciation": "/tuː; tə/ /miː/"
  },
  {
    "id": "354",
    "sentence": "it's crystal clear to me",
    "chinese": "它对我来说变得清晰透彻了",
    "pronunciation": "/ɪts/ /ˈkrɪst(ə)l/ /klɪr/ /tuː; tə/ /miː/"
  },
  {
    "id": "355",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it and all of a sudden lo and behold ! it's crystal clear to me",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分，但突然间，瞧！它对我来说变得清晰透彻了",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /ɪts/ /ˈkrɪst(ə)l/ /klɪr/ /tuː; tə/ /miː/"
  },
  {
    "id": "356",
    "sentence": "Similarly",
    "chinese": "同样",
    "pronunciation": "/ˈsɪmələrli/"
  },
  {
    "id": "357",
    "sentence": "in speaking",
    "chinese": "在说话时",
    "pronunciation": "/ɪn/ /ˈspiːkɪŋ/"
  },
  {
    "id": "358",
    "sentence": "Similarly , in speaking",
    "chinese": "同样，在说话时",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/"
  },
  {
    "id": "359",
    "sentence": "you have",
    "chinese": "你有",
    "pronunciation": "/juː; jʊ/ /hæv/"
  },
  {
    "id": "360",
    "sentence": "these moments",
    "chinese": "这些时刻",
    "pronunciation": "/ðiːz/ /ˈmoʊmənts/"
  },
  {
    "id": "361",
    "sentence": "you have these moments",
    "chinese": "你有这些时刻",
    "pronunciation": "/juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/"
  },
  {
    "id": "362",
    "sentence": "Similarly , in speaking you have these moments",
    "chinese": "同样，在说话时，你会有这些时刻",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/"
  },
  {
    "id": "363",
    "sentence": "of great triumph",
    "chinese": "伟大的胜利",
    "pronunciation": "/ʌv/ /ɡreɪt/ /ˈtraɪʌmf/"
  },
  {
    "id": "364",
    "sentence": "Similarly , in speaking you have these moments of great triumph",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/"
  },
  {
    "id": "365",
    "sentence": "when",
    "chinese": "当你",
    "pronunciation": "/wen/"
  },
  {
    "id": "366",
    "sentence": "you were",
    "chinese": "你曾经",
    "pronunciation": "/juː; jʊ/ /wɜːr; wər/"
  },
  {
    "id": "367",
    "sentence": "in",
    "chinese": "在",
    "pronunciation": "/ɪn/"
  },
  {
    "id": "368",
    "sentence": "a discussion",
    "chinese": "讨论",
    "pronunciation": "/ə; eɪ/ /dɪˈskʌʃn/"
  },
  {
    "id": "369",
    "sentence": "when you were in a discussion",
    "chinese": "当你参与讨论时",
    "pronunciation": "/wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/"
  },
  {
    "id": "370",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/"
  },
  {
    "id": "371",
    "sentence": "and lo and behold",
    "chinese": "瞧",
    "pronunciation": "/ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/"
  },
  {
    "id": "372",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold !",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/"
  },
  {
    "id": "373",
    "sentence": "able to",
    "chinese": "能够",
    "pronunciation": "/ˈeɪb(ə)l/ /tuː; tə/"
  },
  {
    "id": "374",
    "sentence": "express",
    "chinese": "表达",
    "pronunciation": "/ɪkˈspres/"
  },
  {
    "id": "375",
    "sentence": "your ideas",
    "chinese": "你的想法",
    "pronunciation": "/jʊr; jər/ /aɪˈdɪəz/"
  },
  {
    "id": "376",
    "sentence": "you were able to express your ideas",
    "chinese": "你能够表达你的想法",
    "pronunciation": "/juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/"
  },
  {
    "id": "377",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold ! you were able to express your ideas",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！你能够表达你的想法",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/"
  },
  {
    "id": "378",
    "sentence": "just",
    "chinese": "正好",
    "pronunciation": "/dʒʌst/"
  },
  {
    "id": "379",
    "sentence": "the way",
    "chinese": "以你想要的方式",
    "pronunciation": "/ðə/ /weɪ/"
  },
  {
    "id": "380",
    "sentence": "you wanted",
    "chinese": "你想要的",
    "pronunciation": "/juː; jʊ/ /ˈwɑːntɪd/"
  },
  {
    "id": "381",
    "sentence": "to",
    "chinese": "到",
    "pronunciation": "/tuː; tə/"
  },
  {
    "id": "382",
    "sentence": "just the way you wanted to",
    "chinese": "以你想要的方式",
    "pronunciation": "/dʒʌst/ /ðə/ /weɪ/ /juː; jʊ/ /ˈwɑːntɪd/ /tuː; tə/"
  },
  {
    "id": "383",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold ! you were able to express your ideas just the way you wanted to",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！你能够以你想要的方式表达你的想法",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/ /dʒʌst/ /ðə/ /weɪ/ /juː; jʊ/ /ˈwɑːntɪd/ /tuː; tə/"
  },
  {
    "id": "384",
    "sentence": "or almost",
    "chinese": "或几乎",
    "pronunciation": "/ɔr/ /ˈɔːlmoʊst/"
  },
  {
    "id": "385",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold ! you were able to express your ideas just the way you wanted to or almost",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！你能够以你想要的方式或几乎以你想要的方式表达你的想法",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/ /dʒʌst/ /ðə/ /weɪ/ /juː; jʊ/ /ˈwɑːntɪd/ /tuː; tə/ /ɔr/ /ˈɔːlmoʊst/"
  },
  {
    "id": "386",
    "sentence": "Maybe",
    "chinese": "也许",
    "pronunciation": "/ˈmeɪbi/"
  },
  {
    "id": "387",
    "sentence": "the next day",
    "chinese": "第二天",
    "pronunciation": "/ðə/ /nekst/ /deɪ/"
  },
  {
    "id": "388",
    "sentence": "Maybe the next day",
    "chinese": "也许第二天",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /nekst/ /deɪ/"
  },
  {
    "id": "389",
    "sentence": "you won't",
    "chinese": "你不会",
    "pronunciation": "/juː; jʊ/ /woʊnt/"
  },
  {
    "id": "390",
    "sentence": "be so successful",
    "chinese": "如此成功",
    "pronunciation": "/biː/ /soʊ/ /səkˈsesf(ə)l/"
  },
  {
    "id": "391",
    "sentence": "you won't be so successful",
    "chinese": "你不会那么成功",
    "pronunciation": "/juː; jʊ/ /woʊnt/ /biː/ /soʊ/ /səkˈsesf(ə)l/"
  },
  {
    "id": "392",
    "sentence": "Maybe the next day you won't be so successful",
    "chinese": "也许第二天你不会那么成功",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /nekst/ /deɪ/ /juː; jʊ/ /woʊnt/ /biː/ /soʊ/ /səkˈsesf(ə)l/"
  },
  {
    "id": "393",
    "sentence": "but",
    "chinese": "但",
    "pronunciation": "/bʌt/"
  },
  {
    "id": "394",
    "sentence": "it's",
    "chinese": "这是",
    "pronunciation": "/ɪts/"
  },
  {
    "id": "395",
    "sentence": "a very gradual process",
    "chinese": "一个非常渐进的过程",
    "pronunciation": "/ə; eɪ/ /ˈveri/ /ˈɡrædʒuəl/ /ˈprɑːses/"
  },
  {
    "id": "396",
    "sentence": "but it's a very gradual process",
    "chinese": "但这是一个非常渐进的过程",
    "pronunciation": "/bʌt/ /ɪts/ /ə; eɪ/ /ˈveri/ /ˈɡrædʒuəl/ /ˈprɑːses/"
  },
  {
    "id": "397",
    "sentence": "Maybe the next day you won't be so successful , but it's a very gradual process",
    "chinese": "也许第二天你不会那么成功，但这是一个非常渐进的过程",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /nekst/ /deɪ/ /juː; jʊ/ /woʊnt/ /biː/ /soʊ/ /səkˈsesf(ə)l/ /bʌt/ /ɪts/ /ə; eɪ/ /ˈveri/ /ˈɡrædʒuəl/ /ˈprɑːses/"
  },
  {
    "id": "398",
    "sentence": "It's not obvious",
    "chinese": "并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/"
  },
  {
    "id": "399",
    "sentence": "which words",
    "chinese": "哪些词汇",
    "pronunciation": "/wɪtʃ/ /wɜːrdz/"
  },
  {
    "id": "400",
    "sentence": "or",
    "chinese": "或",
    "pronunciation": "/ɔr/"
  },
  {
    "id": "401",
    "sentence": "which structures",
    "chinese": "哪些结构",
    "pronunciation": "/wɪtʃ/ /ˈstrʌktʃərz/"
  },
  {
    "id": "402",
    "sentence": "which words or which structures",
    "chinese": "哪些词汇或哪些结构",
    "pronunciation": "/wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/"
  },
  {
    "id": "403",
    "sentence": "It's not obvious which words or which structures",
    "chinese": "哪些词汇或结构会先被大脑学习并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/"
  },
  {
    "id": "404",
    "sentence": "in",
    "chinese": "在",
    "pronunciation": "/ɪn/"
  },
  {
    "id": "405",
    "sentence": "the language",
    "chinese": "语言",
    "pronunciation": "/ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "406",
    "sentence": "in the language",
    "chinese": "在语言中",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "407",
    "sentence": "It's not obvious which words or which structures in the language",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "408",
    "sentence": "the brain",
    "chinese": "大脑",
    "pronunciation": "/ðə/ /breɪn/"
  },
  {
    "id": "409",
    "sentence": "is going",
    "chinese": "将会",
    "pronunciation": "/ɪz/ /ˈɡoʊɪŋ/"
  },
  {
    "id": "410",
    "sentence": "to learn",
    "chinese": "学习",
    "pronunciation": "/tuː; tə/ /lɜːrn/"
  },
  {
    "id": "411",
    "sentence": "the brain is going to learn",
    "chinese": "大脑将要学习",
    "pronunciation": "/ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/"
  },
  {
    "id": "412",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/"
  },
  {
    "id": "413",
    "sentence": "first or later",
    "chinese": "先或后",
    "pronunciation": "/fɜːrst/ /ɔr/ /ˈleɪtər/"
  },
  {
    "id": "414",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/"
  },
  {
    "id": "415",
    "sentence": "so",
    "chinese": "因此",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "416",
    "sentence": "you just",
    "chinese": "你只需要",
    "pronunciation": "/juː; jʊ/ /dʒʌst/"
  },
  {
    "id": "417",
    "sentence": "have to",
    "chinese": "必须",
    "pronunciation": "/hæv/ /tuː; tə/"
  },
  {
    "id": "418",
    "sentence": "be patient",
    "chinese": "保持耐心",
    "pronunciation": "/biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "419",
    "sentence": "so you just have to be patient",
    "chinese": "所以你只需要保持耐心",
    "pronunciation": "/soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "420",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "421",
    "sentence": "and",
    "chinese": "并且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "422",
    "sentence": "you have to",
    "chinese": "你必须",
    "pronunciation": "/juː; jʊ/ /hæv/ /tuː; tə/"
  },
  {
    "id": "423",
    "sentence": "believe",
    "chinese": "相信",
    "pronunciation": "/bɪˈliːv/"
  },
  {
    "id": "424",
    "sentence": "and you have to believe",
    "chinese": "并且你必须相信",
    "pronunciation": "/ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/"
  },
  {
    "id": "425",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/"
  },
  {
    "id": "426",
    "sentence": "that",
    "chinese": "你所做的努力",
    "pronunciation": "/ðæt/"
  },
  {
    "id": "427",
    "sentence": "what",
    "chinese": "什么",
    "pronunciation": "/wʌt/"
  },
  {
    "id": "428",
    "sentence": "you're doing",
    "chinese": "你所做的努力",
    "pronunciation": "/jʊr/ /ˈduːɪŋ/"
  },
  {
    "id": "429",
    "sentence": "that what you're doing",
    "chinese": "你所做的努力",
    "pronunciation": "/ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/"
  },
  {
    "id": "430",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe that what you're doing",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信你所做的努力",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/ /ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/"
  },
  {
    "id": "431",
    "sentence": "is going to lead to",
    "chinese": "将会导致",
    "pronunciation": "/ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /liːd/ /tuː; tə/"
  },
  {
    "id": "432",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe that what you're doing is going to lead to",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信你所做的努力最终会带来期望的结果",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/ /ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /liːd/ /tuː; tə/"
  },
  {
    "id": "433",
    "sentence": "the desired result",
    "chinese": "期望的结果",
    "pronunciation": "/ðə/ /dɪˈzɪrd/ /rɪˈzʌlt/"
  },
  {
    "id": "434",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe that what you're doing is going to lead to the desired result",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信你所做的努力最终会带来期望的结果",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/ /ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /liːd/ /tuː; tə/ /ðə/ /dɪˈzɪrd/ /rɪˈzʌlt/"
  },
  {
    "id": "435",
    "sentence": "Anytime",
    "chinese": "任何时候",
    "pronunciation": "/ˈænitaɪm/"
  },
  {
    "id": "436",
    "sentence": "you get",
    "chinese": "你感到",
    "pronunciation": "/juː; jʊ/ /ɡet/"
  },
  {
    "id": "437",
    "sentence": "frustrated",
    "chinese": "沮丧",
    "pronunciation": "/ˈfrʌstreɪtɪd/"
  },
  {
    "id": "438",
    "sentence": "Anytime you get frustrated",
    "chinese": "每当你感到沮丧",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/"
  },
  {
    "id": "439",
    "sentence": "upset",
    "chinese": "难过",
    "pronunciation": "/ˌʌpˈset/"
  },
  {
    "id": "440",
    "sentence": "Anytime you get frustrated , upset",
    "chinese": "每当你感到沮丧、难过",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/"
  },
  {
    "id": "441",
    "sentence": "because",
    "chinese": "因为",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "442",
    "sentence": "you forgot",
    "chinese": "你忘记了",
    "pronunciation": "/juː; jʊ/ /fərˈɡɑːt/"
  },
  {
    "id": "443",
    "sentence": "something",
    "chinese": "某事",
    "pronunciation": "/ˈsʌmθɪŋ/"
  },
  {
    "id": "444",
    "sentence": "because you forgot something",
    "chinese": "因为你忘记了某事",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "445",
    "sentence": "Anytime you get frustrated , upset , because you forgot something",
    "chinese": "每当你因为忘记某事而感到沮丧、难过时",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "446",
    "sentence": "or",
    "chinese": "或",
    "pronunciation": "/ɔr/"
  },
  {
    "id": "447",
    "sentence": "you don't understand",
    "chinese": "你不理解",
    "pronunciation": "/juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "448",
    "sentence": "or because you don't understand something",
    "chinese": "或因为你不理解某事",
    "pronunciation": "/ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "449",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "450",
    "sentence": "all these",
    "chinese": "所有这些",
    "pronunciation": "/ɔːl/ /ðiːz/"
  },
  {
    "id": "451",
    "sentence": "negative thoughts",
    "chinese": "负面情绪",
    "pronunciation": "/ˈneɡətɪv/ /θɔːts/"
  },
  {
    "id": "452",
    "sentence": "all these negative thoughts",
    "chinese": "所有这些负面情绪",
    "pronunciation": "/ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/"
  },
  {
    "id": "453",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something , all these negative thoughts",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时，所有这些负面情绪",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/ /ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/"
  },
  {
    "id": "454",
    "sentence": "are very damaging",
    "chinese": "非常有害",
    "pronunciation": "/ɑr/ /ˈveri/ /ˈdæmɪdʒɪŋ/"
  },
  {
    "id": "455",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something , all these negative thoughts are very damaging",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时，所有这些负面情绪都会非常有害",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/ /ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/ /ɑr/ /ˈveri/ /ˈdæmɪdʒɪŋ/"
  },
  {
    "id": "456",
    "sentence": "to",
    "chinese": "因为",
    "pronunciation": "/tuː; tə/"
  },
  {
    "id": "457",
    "sentence": "the learning process",
    "chinese": "学习过程",
    "pronunciation": "/ðə/ /ˈlɜːrnɪŋ/ /ˈprɑːses/"
  },
  {
    "id": "458",
    "sentence": "to the learning process",
    "chinese": "对学习过程",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈlɜːrnɪŋ/ /ˈprɑːses/"
  },
  {
    "id": "459",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something , all these negative thoughts are very damaging to the learning process",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时，这些负面情绪都会对学习过程造成极大的损害",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/ /ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/ /ɑr/ /ˈveri/ /ˈdæmɪdʒɪŋ/ /tuː; tə/ /ðə/ /ˈlɜːrnɪŋ/ /ˈprɑːses/"
  },
  {
    "id": "460",
    "sentence": "Again",
    "chinese": "再次强调",
    "pronunciation": "/əˈɡen/"
  },
  {
    "id": "461",
    "sentence": "I'm not",
    "chinese": "我不是",
    "pronunciation": "/aɪm/ /nɑːt/"
  },
  {
    "id": "462",
    "sentence": "a neuroscientist",
    "chinese": "神经科学家",
    "pronunciation": "/ə; eɪ/ /ˈnʊroʊsaɪəntɪst/"
  },
  {
    "id": "463",
    "sentence": "Again , I'm not a neuroscientist",
    "chinese": "再次强调，我并非神经科学家",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/"
  },
  {
    "id": "464",
    "sentence": "but",
    "chinese": "但",
    "pronunciation": "/bʌt/"
  },
  {
    "id": "465",
    "sentence": "there is",
    "chinese": "存在",
    "pronunciation": "/ðer; ðər/ /ɪz/"
  },
  {
    "id": "466",
    "sentence": "so much",
    "chinese": "如此之多",
    "pronunciation": "/soʊ/ /mʌtʃ/"
  },
  {
    "id": "467",
    "sentence": "emotion",
    "chinese": "情感",
    "pronunciation": "/ɪˈmoʊʃ(ə)n/"
  },
  {
    "id": "468",
    "sentence": "but there is so much emotion",
    "chinese": "但其中蕴含着如此多的情感",
    "pronunciation": "/bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/"
  },
  {
    "id": "469",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中有如此多的情感因素",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/"
  },
  {
    "id": "470",
    "sentence": "in",
    "chinese": "在",
    "pronunciation": "/ɪn/"
  },
  {
    "id": "471",
    "sentence": "how",
    "chinese": "方式",
    "pronunciation": "/haʊ/"
  },
  {
    "id": "472",
    "sentence": "the brain",
    "chinese": "大脑",
    "pronunciation": "/ðə/ /breɪn/"
  },
  {
    "id": "473",
    "sentence": "learns",
    "chinese": "学习",
    "pronunciation": "/lɜːrz/"
  },
  {
    "id": "474",
    "sentence": "in how the brain learns",
    "chinese": "在大脑学习的过程中",
    "pronunciation": "/ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "475",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "476",
    "sentence": "that",
    "chinese": "因此",
    "pronunciation": "/ðæt/"
  },
  {
    "id": "477",
    "sentence": "it's very important",
    "chinese": "非常重要",
    "pronunciation": "/ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "478",
    "sentence": "that it's very important",
    "chinese": "因此非常重要",
    "pronunciation": "/ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "479",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns that it's very important",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富，因此保持积极态度非常重要",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/ /ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "480",
    "sentence": "not to get",
    "chinese": "不要变得",
    "pronunciation": "/nɑːt/ /tuː; tə/ /ɡet/"
  },
  {
    "id": "481",
    "sentence": "negative",
    "chinese": "消极的",
    "pronunciation": "/ˈneɡətɪv/"
  },
  {
    "id": "482",
    "sentence": "not to get negative",
    "chinese": "保持积极态度",
    "pronunciation": "/nɑːt/ /tuː; tə/ /ɡet/ /ˈneɡətɪv/"
  },
  {
    "id": "483",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns that it's very important not to get negative",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富，因此保持积极态度非常重要",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/ /ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /nɑːt/ /tuː; tə/ /ɡet/ /ˈneɡətɪv/"
  },
  {
    "id": "484",
    "sentence": "and",
    "chinese": "并",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "485",
    "sentence": "to be patient",
    "chinese": "保持耐心",
    "pronunciation": "/tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "486",
    "sentence": "and to be patient",
    "chinese": "并保持耐心",
    "pronunciation": "/ænd; ənd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "487",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns that it's very important not to get negative and to be patient",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富，因此保持积极态度并保持耐心非常重要",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/ /ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /nɑːt/ /tuː; tə/ /ɡet/ /ˈneɡətɪv/ /ænd; ənd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "488",
    "sentence": "Realize",
    "chinese": "明白",
    "pronunciation": "/ˈrɪlˌaɪz/"
  },
  {
    "id": "489",
    "sentence": "that",
    "chinese": "它",
    "pronunciation": "/ðæt/"
  },
  {
    "id": "490",
    "sentence": "Realize that",
    "chinese": "要明白",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/"
  },
  {
    "id": "491",
    "sentence": "it's",
    "chinese": "这是",
    "pronunciation": "/ɪts/"
  },
  {
    "id": "492",
    "sentence": "a long road",
    "chinese": "一条漫长的道路",
    "pronunciation": "/ə; eɪ/ /lɔːŋ/ /roʊd/"
  },
  {
    "id": "493",
    "sentence": "it's a long road",
    "chinese": "这是一条漫长的道路",
    "pronunciation": "/ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/"
  },
  {
    "id": "494",
    "sentence": "Realize that it's a long road",
    "chinese": "要明白这是一条漫长的道路",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/"
  },
  {
    "id": "495",
    "sentence": "hopefully",
    "chinese": "希望",
    "pronunciation": "/ˈhoʊpfəli/"
  },
  {
    "id": "496",
    "sentence": "an enjoyable road",
    "chinese": "一条愉快的道路",
    "pronunciation": "/æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/"
  },
  {
    "id": "497",
    "sentence": "hopefully an enjoyable road",
    "chinese": "希望是一条愉快的道路",
    "pronunciation": "/ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/"
  },
  {
    "id": "498",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/"
  },
  {
    "id": "499",
    "sentence": "but",
    "chinese": "但",
    "pronunciation": "/bʌt/"
  },
  {
    "id": "500",
    "sentence": "one",
    "chinese": "它",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "501",
    "sentence": "but one that",
    "chinese": "但其中一条",
    "pronunciation": "/bʌt/ /wʌn/ /ðæt/"
  },
  {
    "id": "502",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road , but one that",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路，但这是一条",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/ /bʌt/ /wʌn/ /ðæt/"
  },
  {
    "id": "503",
    "sentence": "will definitely lead to",
    "chinese": "一定会导致",
    "pronunciation": "/wɪl/ /ˈdefɪnətli/ /liːd/ /tuː; tə/"
  },
  {
    "id": "504",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road , but one that will definitely lead to",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路，但它一定会带你走向",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/ /bʌt/ /wʌn/ /ðæt/ /wɪl/ /ˈdefɪnətli/ /liːd/ /tuː; tə/"
  },
  {
    "id": "505",
    "sentence": "fluency",
    "chinese": "流利",
    "pronunciation": "/ˈfluːənsi/"
  },
  {
    "id": "506",
    "sentence": "in",
    "chinese": "在",
    "pronunciation": "/ɪn/"
  },
  {
    "id": "507",
    "sentence": "that language",
    "chinese": "那种语言",
    "pronunciation": "/ðæt/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "508",
    "sentence": "fluency in that language",
    "chinese": "那种语言的流利",
    "pronunciation": "/ˈfluːənsi/ /ɪn/ /ðæt/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "509",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road , but one that will definitely lead to fluency in that language",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路，但它一定会带你走向那种语言的流利",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/ /bʌt/ /wʌn/ /ðæt/ /wɪl/ /ˈdefɪnətli/ /liːd/ /tuː; tə/ /ˈfluːənsi/ /ɪn/ /ðæt/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "510",
    "sentence": "Fluency need",
    "chinese": "流利需要",
    "pronunciation": "/ˈfluːənsi/ /niːd/"
  },
  {
    "id": "511",
    "sentence": "not mean",
    "chinese": "并不意味着",
    "pronunciation": "/nɑːt/ /miːn/"
  },
  {
    "id": "512",
    "sentence": "perfection",
    "chinese": "完美",
    "pronunciation": "/pərˈfekʃən/"
  },
  {
    "id": "513",
    "sentence": "Fluency need not mean perfection",
    "chinese": "流利并不意味着完美",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/"
  },
  {
    "id": "514",
    "sentence": "so",
    "chinese": "所以",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "515",
    "sentence": "if you don't expect",
    "chinese": "如果你不期望",
    "pronunciation": "/ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/"
  },
  {
    "id": "516",
    "sentence": "so if you don't expect perfection",
    "chinese": "所以如果你不追求完美",
    "pronunciation": "/soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/"
  },
  {
    "id": "517",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection",
    "chinese": "流利并不意味着完美，所以如果你不追求完美",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/"
  },
  {
    "id": "518",
    "sentence": "but",
    "chinese": "但",
    "pronunciation": "/bʌt/"
  },
  {
    "id": "519",
    "sentence": "you do expect",
    "chinese": "你的确期望",
    "pronunciation": "/juː; jʊ/ /duː; də/ /ɪkˈspekt/"
  },
  {
    "id": "520",
    "sentence": "to constantly improve",
    "chinese": "不断进步",
    "pronunciation": "/tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/"
  },
  {
    "id": "521",
    "sentence": "but you do expect to constantly improve",
    "chinese": "但你确实期望不断进步",
    "pronunciation": "/bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/"
  },
  {
    "id": "522",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection but you do expect to constantly improve",
    "chinese": "流利并不意味着完美，所以如果你不追求完美，但确实期望不断进步",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/ /bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/"
  },
  {
    "id": "523",
    "sentence": "then",
    "chinese": "那么",
    "pronunciation": "/ðen/"
  },
  {
    "id": "524",
    "sentence": "I think",
    "chinese": "我认为",
    "pronunciation": "/aɪ/ /θɪŋk/"
  },
  {
    "id": "525",
    "sentence": "then I think",
    "chinese": "那么我认为",
    "pronunciation": "/ðen/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "526",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection but you do expect to constantly improve , then I think",
    "chinese": "流利并不意味着完美，所以如果你不追求完美，但确实期望不断进步，那么我认为",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/ /bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/ /ðen/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "527",
    "sentence": "you can afford",
    "chinese": "你可以保持",
    "pronunciation": "/juː; jʊ/ /kæn/ /əˈfɔːrd/"
  },
  {
    "id": "528",
    "sentence": "to be patient",
    "chinese": "保持耐心",
    "pronunciation": "/tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "529",
    "sentence": "you can afford to be patient",
    "chinese": "你可以保持耐心",
    "pronunciation": "/juː; jʊ/ /kæn/ /əˈfɔːrd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "530",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection but you do expect to constantly improve , then I think you can afford to be patient",
    "chinese": "流利并不意味着完美，所以如果你不追求完美，但确实期望不断进步，那么我认为你可以保持耐心",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/ /bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/ /ðen/ /aɪ/ /θɪŋk/ /juː; jʊ/ /kæn/ /əˈfɔːrd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "531",
    "sentence": "so that's",
    "chinese": "所以，那就是",
    "pronunciation": "/soʊ/ /ðæts/"
  },
  {
    "id": "532",
    "sentence": "my fifth secret",
    "chinese": "我的第五个秘诀",
    "pronunciation": "/maɪ/ /fɪfθ/ /ˈsiːkrət/"
  },
  {
    "id": "533",
    "sentence": "So that's my fifth secret",
    "chinese": "所以，我的第五个秘诀是",
    "pronunciation": "/soʊ/ /ðæts/ /maɪ/ /fɪfθ/ /ˈsiːkrət/"
  },
  {
    "id": "534",
    "sentence": "be patient",
    "chinese": "保持耐心",
    "pronunciation": "/biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "535",
    "sentence": "So that's my fifth secret , be patient",
    "chinese": "所以，我的第五个秘诀是，保持耐心",
    "pronunciation": "/soʊ/ /ðæts/ /maɪ/ /fɪfθ/ /ˈsiːkrət/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "536",
    "sentence": "Thank you",
    "chinese": "谢谢您",
    "pronunciation": "/θæŋk/ /juː; jʊ/"
  },
  {
    "id": "537",
    "sentence": "for listening",
    "chinese": "为了聆听",
    "pronunciation": "/fɔːr; fər/ /ˈlɪsnɪŋ/"
  },
  {
    "id": "538",
    "sentence": "Thank you for listening",
    "chinese": "谢谢您的聆听",
    "pronunciation": "/θæŋk/ /juː; jʊ/ /fɔːr; fər/ /ˈlɪsnɪŋ/"
  },
];
