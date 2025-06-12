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
    "sentence": "this is Steve Kaufmann",
    "chinese": "我是Steve Kaufmann",
    "pronunciation": "/ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/"
  },
  {
    "id": "3",
    "sentence": "Hi , there , this is Steve Kaufmann",
    "chinese": "嗨，大家好，我是Steve Kaufmann",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/"
  },
  {
    "id": "4",
    "sentence": "Founder of LingQ",
    "chinese": "LingQ的创始人",
    "pronunciation": "/ˈfaʊndər/ /ʌv/ /lɪŋk/"
  },
  {
    "id": "5",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/"
  },
  {
    "id": "6",
    "sentence": "and today",
    "chinese": "今天",
    "pronunciation": "/ænd; ənd/ /təˈdeɪ/"
  },
  {
    "id": "7",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/"
  },
  {
    "id": "8",
    "sentence": "I'm gonna talk about",
    "chinese": "我要谈谈",
    "pronunciation": "/aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/"
  },
  {
    "id": "9",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today I'm gonna talk about",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要谈谈",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/ /aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/"
  },
  {
    "id": "10",
    "sentence": "the fifth Secret to",
    "chinese": "第五个秘诀",
    "pronunciation": "/ðə/ /fɪfθ/ /ˈsiːkrət/ /tuː; tə/"
  },
  {
    "id": "11",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today I'm gonna talk about the fifth Secret to",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要谈谈",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/ /aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /tuː; tə/"
  },
  {
    "id": "12",
    "sentence": "Successful Language Learning",
    "chinese": "成功的语言学习",
    "pronunciation": "/səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "13",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today I'm gonna talk about the fifth Secret to Successful Language Learning",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要和大家分享语言学习的第五个秘诀",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/ /aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /tuː; tə/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "14",
    "sentence": "Again , you'll remember",
    "chinese": "再次提醒，你将记得",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/"
  },
  {
    "id": "15",
    "sentence": "that so far",
    "chinese": "到目前为止",
    "pronunciation": "/ðæt/ /soʊ/ /fɑːr/"
  },
  {
    "id": "16",
    "sentence": "Again , you'll remember that so far",
    "chinese": "再次提醒，你将记得到目前为止",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/"
  },
  {
    "id": "17",
    "sentence": "we've discussed",
    "chinese": "我们已经讨论过",
    "pronunciation": "/wɪv/ /dɪˈskʌst/"
  },
  {
    "id": "18",
    "sentence": "Again , you'll remember that so far we've discussed",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/"
  },
  {
    "id": "19",
    "sentence": "the need to spend",
    "chinese": "需要花费",
    "pronunciation": "/ðə/ /niːd/ /tuː; tə/ /spend/"
  },
  {
    "id": "20",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/"
  },
  {
    "id": "21",
    "sentence": "a lot of time",
    "chinese": "大量时间",
    "pronunciation": "/ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/"
  },
  {
    "id": "22",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/"
  },
  {
    "id": "23",
    "sentence": "enough time",
    "chinese": "足够的时间",
    "pronunciation": "/ɪˈnʌf/ /taɪm/"
  },
  {
    "id": "24",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time , enough time",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间，足够的时间",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ɪˈnʌf/ /taɪm/"
  },
  {
    "id": "25",
    "sentence": "an hour a day",
    "chinese": "每天一小时",
    "pronunciation": "/æn; ən/ /ˈaʊər/ /ə; eɪ/ /deɪ/"
  },
  {
    "id": "26",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time , enough time , an hour a day",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间，足够的时间，每天一小时",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ɪˈnʌf/ /taɪm/ /æn; ən/ /ˈaʊər/ /ə; eɪ/ /deɪ/"
  },
  {
    "id": "27",
    "sentence": "for quite a long period of time",
    "chinese": "持续相当长的一段时间",
    "pronunciation": "/fɔːr; fər/ /kwaɪt/ /ə; eɪ/ /lɔːŋ/ /ˈpɪriəd/ /ʌv/ /taɪm/"
  },
  {
    "id": "28",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time , enough time , an hour a day for quite a long period of time",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间，足够的时间，每天一小时，持续相当长的一段时间",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ɪˈnʌf/ /taɪm/ /æn; ən/ /ˈaʊər/ /ə; eɪ/ /deɪ/ /fɔːr; fər/ /kwaɪt/ /ə; eɪ/ /lɔːŋ/ /ˈpɪriəd/ /ʌv/ /taɪm/"
  },
  {
    "id": "29",
    "sentence": "The second secret was",
    "chinese": "第二个秘密是",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/"
  },
  {
    "id": "30",
    "sentence": "to do things",
    "chinese": "去做事情",
    "pronunciation": "/tuː; tə/ /duː; də/ /θɪŋz/"
  },
  {
    "id": "31",
    "sentence": "The second secret was to do things",
    "chinese": "第二个秘密是去做事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/"
  },
  {
    "id": "32",
    "sentence": "that you like to do",
    "chinese": "你喜欢做的事情",
    "pronunciation": "/ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "33",
    "sentence": "The second secret was to do things that you like to do",
    "chinese": "第二个秘密是去做你喜欢做的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "34",
    "sentence": "in the language",
    "chinese": "用这种语言",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "35",
    "sentence": "The second secret was to do things that you like to do in the language",
    "chinese": "第二个秘诀是用这种语言去做你喜欢做的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "36",
    "sentence": "The third secret was",
    "chinese": "第三个秘诀是",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/"
  },
  {
    "id": "37",
    "sentence": "to develop the ability",
    "chinese": "培养能力",
    "pronunciation": "/tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/"
  },
  {
    "id": "38",
    "sentence": "The third secret was to develop the ability",
    "chinese": "第三个秘诀是培养能力",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/"
  },
  {
    "id": "39",
    "sentence": "to notice what's happening",
    "chinese": "注意到正在发生的事情",
    "pronunciation": "/tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/"
  },
  {
    "id": "40",
    "sentence": "The third secret was to develop the ability to notice what's happening",
    "chinese": "第三个秘诀是培养观察语言中正在发生什么的能力",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/"
  },
  {
    "id": "41",
    "sentence": "in the language",
    "chinese": "在语言中",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "42",
    "sentence": "The third secret was to develop the ability to notice what's happening in the language",
    "chinese": "第三个秘诀是培养观察语言中正在发生什么的能力",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "43",
    "sentence": "which all good language learners have",
    "chinese": "这是所有优秀语言学习者都具备的",
    "pronunciation": "/wɪtʃ/ /ɔːl/ /ɡʊd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /hæv/"
  },
  {
    "id": "44",
    "sentence": "The third secret was to develop the ability to notice what's happening in the language , which all good language learners have",
    "chinese": "第三个秘诀是培养观察语言中正在发生什么的能力，这是所有优秀语言学习者都具备的",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /wɪtʃ/ /ɔːl/ /ɡʊd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /hæv/"
  },
  {
    "id": "45",
    "sentence": "The fourth thing was",
    "chinese": "第四点是",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/"
  },
  {
    "id": "46",
    "sentence": "to focus on words",
    "chinese": "注重词汇",
    "pronunciation": "/tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/"
  },
  {
    "id": "47",
    "sentence": "The fourth thing was to focus on words",
    "chinese": "第四点是注重词汇",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/"
  },
  {
    "id": "48",
    "sentence": "vocabulary rather than",
    "chinese": "词汇而非",
    "pronunciation": "/vəˈkæbjəleri/ /ˈræðər/ /ðæn; ðən/"
  },
  {
    "id": "49",
    "sentence": "The fourth thing was to focus on words , vocabulary rather than",
    "chinese": "第四点是注重词汇而非",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/ /vəˈkæbjəleri/ /ˈræðər/ /ðæn; ðən/"
  },
  {
    "id": "50",
    "sentence": "grammar",
    "chinese": "语法",
    "pronunciation": "/ˈɡræmər/"
  },
  {
    "id": "51",
    "sentence": "The fourth thing was to focus on words , vocabulary rather than grammar",
    "chinese": "第四点是注重词汇而非语法",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/ /vəˈkæbjəleri/ /ˈræðər/ /ðæn; ðən/ /ˈɡræmər/"
  },
  {
    "id": "52",
    "sentence": "Now , the fifth secret is",
    "chinese": "现在，第五个秘诀是",
    "pronunciation": "/naʊ/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /ɪz/"
  },
  {
    "id": "53",
    "sentence": "to be patient",
    "chinese": "要有耐心",
    "pronunciation": "/tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "54",
    "sentence": "Now , the fifth secret is to be patient",
    "chinese": "现在，第五个秘诀是要有耐心",
    "pronunciation": "/naʊ/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /ɪz/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "55",
    "sentence": "patient",
    "chinese": "耐心",
    "pronunciation": "/ˈpeɪʃnt/"
  },
  {
    "id": "56",
    "sentence": "Now , the fifth secret is to be patient , patient",
    "chinese": "现在，第五个秘诀是要有耐心，耐心",
    "pronunciation": "/naʊ/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /ɪz/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ˈpeɪʃnt/"
  },
  {
    "id": "57",
    "sentence": "I see more frustrated language learners",
    "chinese": "我看到更多感到沮丧的语言学习者",
    "pronunciation": "/aɪ/ /siː/ /mɔːr/ /ˈfrʌstreɪtɪd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/"
  },
  {
    "id": "58",
    "sentence": "who get upset",
    "chinese": "感到沮丧",
    "pronunciation": "/huː/ /ɡet/ /ˌʌpˈset/"
  },
  {
    "id": "59",
    "sentence": "I see more frustrated language learners who get upset",
    "chinese": "我看到更多因忘记单词而感到沮丧的语言学习者",
    "pronunciation": "/aɪ/ /siː/ /mɔːr/ /ˈfrʌstreɪtɪd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /huː/ /ɡet/ /ˌʌpˈset/"
  },
  {
    "id": "60",
    "sentence": "because they forget words",
    "chinese": "因为他们忘记了单词",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /fərˈɡet/ /wɜːrdz/"
  },
  {
    "id": "61",
    "sentence": "I see more frustrated language learners who get upset because they forget words",
    "chinese": "我看到许多因忘记单词而感到沮丧的语言学习者",
    "pronunciation": "/aɪ/ /siː/ /mɔːr/ /ˈfrʌstreɪtɪd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /huː/ /ɡet/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /fərˈɡet/ /wɜːrdz/"
  },
  {
    "id": "62",
    "sentence": "They get upset",
    "chinese": "他们感到不安",
    "pronunciation": "/ðeɪ/ /ɡet/ /ˌʌpˈset/"
  },
  {
    "id": "63",
    "sentence": "because they don't understand",
    "chinese": "因为他们不明白",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "64",
    "sentence": "They get upset because they don't understand",
    "chinese": "他们感到不安，因为他们不明白",
    "pronunciation": "/ðeɪ/ /ɡet/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "65",
    "sentence": "Even after listening many , many times",
    "chinese": "即使多次反复听",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/"
  },
  {
    "id": "66",
    "sentence": "to the same content",
    "chinese": "对同一段内容",
    "pronunciation": "/tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/"
  },
  {
    "id": "67",
    "sentence": "Even after listening many , many times to the same content",
    "chinese": "即使多次反复听同一段内容",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/"
  },
  {
    "id": "68",
    "sentence": "certain parts of it",
    "chinese": "其中的某些部分",
    "pronunciation": "/ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/"
  },
  {
    "id": "69",
    "sentence": "Even after listening many , many times to the same content , certain parts of it",
    "chinese": "即使多次反复听同一段内容，其中的某些部分",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/"
  },
  {
    "id": "70",
    "sentence": "they just don't understand",
    "chinese": "他们就是不明白",
    "pronunciation": "/ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "71",
    "sentence": "Even after listening many , many times to the same content , certain parts of it they just don't understand",
    "chinese": "即使多次反复听同一段内容，他们仍然无法理解其中的某些部分",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "72",
    "sentence": "or they watch a movie many times",
    "chinese": "或者他们多次观看同一部电影",
    "pronunciation": "/ɔr/ /ðeɪ/ /wɑːtʃ/ /ə; eɪ/ /ˈmuːvi/ /ˈmeni/ /taɪmz/"
  },
  {
    "id": "73",
    "sentence": "Even after listening many , many times to the same content , certain parts of it they just don't understand or they watch a movie many times",
    "chinese": "即使多次反复听同一段内容，他们仍然无法理解其中的某些部分；或者他们多次观看同一部电影",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/ /ɔr/ /ðeɪ/ /wɑːtʃ/ /ə; eɪ/ /ˈmuːvi/ /ˈmeni/ /taɪmz/"
  },
  {
    "id": "74",
    "sentence": "and they can't understand it",
    "chinese": "他们仍然无法理解",
    "pronunciation": "/ænd; ənd/ /ðeɪ/ /kænt/ /ˌʌndərˈstænd/ /ɪt/"
  },
  {
    "id": "75",
    "sentence": "Even after listening many , many times to the same content , certain parts of it they just don't understand or they watch a movie many times and they can't understand it",
    "chinese": "即使多次反复听同一段内容，他们仍然无法理解其中的某些部分；或者他们多次观看同一部电影，却依然无法理解",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/ /ɔr/ /ðeɪ/ /wɑːtʃ/ /ə; eɪ/ /ˈmuːvi/ /ˈmeni/ /taɪmz/ /ænd; ənd/ /ðeɪ/ /kænt/ /ˌʌndərˈstænd/ /ɪt/"
  },
  {
    "id": "76",
    "sentence": "Let me tell you",
    "chinese": "让我告诉你",
    "pronunciation": "/let/ /miː/ /tel/ /juː; jʊ/"
  },
  {
    "id": "77",
    "sentence": "that is absolutely normal",
    "chinese": "那绝对是正常的",
    "pronunciation": "/ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "78",
    "sentence": "Let me tell you , that is absolutely normal",
    "chinese": "让我告诉你，那绝对是正常的",
    "pronunciation": "/let/ /miː/ /tel/ /juː; jʊ/ /ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "79",
    "sentence": "You will have",
    "chinese": "你将会有",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/"
  },
  {
    "id": "80",
    "sentence": "and continue to have",
    "chinese": "并且将继续会有",
    "pronunciation": "/ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/"
  },
  {
    "id": "81",
    "sentence": "You will have and continue to have",
    "chinese": "你会有并且将继续会有",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/"
  },
  {
    "id": "82",
    "sentence": "times when",
    "chinese": "一些时候",
    "pronunciation": "/taɪmz/ /wen/"
  },
  {
    "id": "83",
    "sentence": "You will have and continue to have times when",
    "chinese": "你将会有并且将继续会有一些时候",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/"
  },
  {
    "id": "84",
    "sentence": "you find it difficult",
    "chinese": "你发现它很难",
    "pronunciation": "/juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "85",
    "sentence": "You will have and continue to have times when you find it difficult",
    "chinese": "你将会有并且将继续会有一些时候，发现难以表达",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/ /juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "86",
    "sentence": "to say what",
    "chinese": "表达",
    "pronunciation": "/tuː; tə/ /seɪ/ /wʌt/"
  },
  {
    "id": "87",
    "sentence": "You will have and continue to have times when you find it difficult to say what",
    "chinese": "你将会有并且将继续会有一些时候，发现难以说出你想说的话",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/ /juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/ /tuː; tə/ /seɪ/ /wʌt/"
  },
  {
    "id": "88",
    "sentence": "you want to say",
    "chinese": "你想说的话",
    "pronunciation": "/juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "89",
    "sentence": "You will have and continue to have times when you find it difficult to say what you want to say",
    "chinese": "你会有并且将继续会有一些时候，发现难以表达你想说的话",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/ /juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/ /tuː; tə/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "90",
    "sentence": "Maybe the day before",
    "chinese": "也许前一天",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/"
  },
  {
    "id": "91",
    "sentence": "you felt you were doing very well",
    "chinese": "你觉得自己做得很好",
    "pronunciation": "/juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/"
  },
  {
    "id": "92",
    "sentence": "Maybe the day before you felt you were doing very well",
    "chinese": "也许前一天你还觉得自己做得很好",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/"
  },
  {
    "id": "93",
    "sentence": "and all of a sudden",
    "chinese": "突然间",
    "pronunciation": "/ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "94",
    "sentence": "Maybe the day before you felt you were doing very well and all of a sudden",
    "chinese": "也许前一天你还觉得自己做得很好，突然间",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "95",
    "sentence": "you can't say what you want to say",
    "chinese": "你无法说出你想说的话",
    "pronunciation": "/juː; jʊ/ /kænt/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "96",
    "sentence": "Maybe the day before you felt you were doing very well and all of a sudden you can't say what you want to say",
    "chinese": "也许前一天你还觉得自己做得很好，突然间却无法表达你想说的话",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /juː; jʊ/ /kænt/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "97",
    "sentence": "and that is absolutely normal",
    "chinese": "这完全是正常的",
    "pronunciation": "/ænd; ənd/ /ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "98",
    "sentence": "Maybe the day before you felt you were doing very well and all of a sudden you can't say what you want to say and that is absolutely normal",
    "chinese": "也许前一天你还觉得自己做得很好，突然间却无法表达你想说的话，这完全是正常的",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /juː; jʊ/ /kænt/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/ /ænd; ənd/ /ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "99",
    "sentence": "It's important to realize",
    "chinese": "重要的是要认识到",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/"
  },
  {
    "id": "100",
    "sentence": "that the brain is constantly learning",
    "chinese": "大脑一直在学习",
    "pronunciation": "/ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "101",
    "sentence": "It's important to realize that the brain is constantly learning",
    "chinese": "重要的是要认识到，大脑一直在学习",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "102",
    "sentence": "and there are a number of books",
    "chinese": "而且我读过许多书籍",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/"
  },
  {
    "id": "103",
    "sentence": "It's important to realize that the brain is constantly learning and there are a number of books",
    "chinese": "重要的是要认识到，大脑一直在学习，而且有许多书籍",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/"
  },
  {
    "id": "104",
    "sentence": "that I've read about",
    "chinese": "我读过的关于",
    "pronunciation": "/ðæt/ /aɪv/ /riːd/ /əˈbaʊt/"
  },
  {
    "id": "105",
    "sentence": "It's important to realize that the brain is constantly learning and there are a number of books that I've read about",
    "chinese": "重要的是要认识到，大脑一直在学习，而且我读过许多关于大脑如何学习的书籍",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/ /ðæt/ /aɪv/ /riːd/ /əˈbaʊt/"
  },
  {
    "id": "106",
    "sentence": "how the brain learns",
    "chinese": "大脑如何学习",
    "pronunciation": "/haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "107",
    "sentence": "It's important to realize that the brain is constantly learning and there are a number of books that I've read about how the brain learns",
    "chinese": "重要的是要认识到，大脑一直在学习，而且我读过许多关于大脑如何学习的书籍",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/ /ðæt/ /aɪv/ /riːd/ /əˈbaʊt/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "108",
    "sentence": "The brain will constantly learn",
    "chinese": "大脑会不断学习",
    "pronunciation": "/ðə/ /breɪn/ /wɪl/ /ˈkɑːnstəntli/ /lɜːrn/"
  },
  {
    "id": "109",
    "sentence": "and it's constantly changing",
    "chinese": "并且它不断变化",
    "pronunciation": "/ænd; ənd/ /ɪts/ /ˈkɑːnstəntli/ /ˈtʃeɪndʒɪŋ/"
  },
  {
    "id": "110",
    "sentence": "The brain will constantly learn and it's constantly changing",
    "chinese": "大脑会不断学习和变化",
    "pronunciation": "/ðə/ /breɪn/ /wɪl/ /ˈkɑːnstəntli/ /lɜːrn/ /ænd; ənd/ /ɪts/ /ˈkɑːnstəntli/ /ˈtʃeɪndʒɪŋ/"
  },
  {
    "id": "111",
    "sentence": "and renewing itself",
    "chinese": "并不断自我更新",
    "pronunciation": "/ænd; ənd/ /rɪˈnuːɪŋ/ /ɪtˈself/"
  },
  {
    "id": "112",
    "sentence": "The brain will constantly learn and it's constantly changing and renewing itself",
    "chinese": "大脑会不断学习和变化，并不断自我更新",
    "pronunciation": "/ðə/ /breɪn/ /wɪl/ /ˈkɑːnstəntli/ /lɜːrn/ /ænd; ənd/ /ɪts/ /ˈkɑːnstəntli/ /ˈtʃeɪndʒɪŋ/ /ænd; ənd/ /rɪˈnuːɪŋ/ /ɪtˈself/"
  },
  {
    "id": "113",
    "sentence": "However , it does so",
    "chinese": "然而，它按照自己的节奏这样做",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/"
  },
  {
    "id": "114",
    "sentence": "on its own schedule",
    "chinese": "按照自己的节奏",
    "pronunciation": "/ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/"
  },
  {
    "id": "115",
    "sentence": "However , it does so on its own schedule",
    "chinese": "然而，它是按照自己的节奏进行的",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/"
  },
  {
    "id": "116",
    "sentence": "so just because",
    "chinese": "所以仅仅因为",
    "pronunciation": "/soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "117",
    "sentence": "However , it does so on its own schedule , so just because",
    "chinese": "然而，它是按照自己的时间表进行的，所以仅仅因为",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "118",
    "sentence": "you've studied something",
    "chinese": "你已经学过某样东西",
    "pronunciation": "/juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "119",
    "sentence": "However , it does so on its own schedule , so just because you've studied something",
    "chinese": "然而，它是按照自己的节奏进行的，所以仅仅因为你已经学过某样东西",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/ /juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "120",
    "sentence": "doesn't mean",
    "chinese": "并不意味着",
    "pronunciation": "/ˈdʌznt/ /miːn/"
  },
  {
    "id": "121",
    "sentence": "However , it does so on its own schedule , so just because you've studied something doesn't mean",
    "chinese": "然而，它是按照自己的节奏进行的，所以仅仅因为你已经学过某样东西，并不意味着",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/ /juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/ /ˈdʌznt/ /miːn/"
  },
  {
    "id": "122",
    "sentence": "you're going to learn it",
    "chinese": "你将会学会它",
    "pronunciation": "/jʊr/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /ɪt/"
  },
  {
    "id": "123",
    "sentence": "However , it does so on its own schedule , so just because you've studied something doesn't mean you're going to learn it",
    "chinese": "然而，学习是按照自己的节奏进行的，所以即使你已经学过某样东西，也不意味着你已经掌握了它",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/ /juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/ /ˈdʌznt/ /miːn/ /jʊr/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /ɪt/"
  },
  {
    "id": "124",
    "sentence": "However",
    "chinese": "然而",
    "pronunciation": "/haʊˈevər/"
  },
  {
    "id": "125",
    "sentence": "you have to be confident",
    "chinese": "你必须保持自信",
    "pronunciation": "/juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/"
  },
  {
    "id": "126",
    "sentence": "However , you have to be confident",
    "chinese": "然而，你必须保持自信",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/"
  },
  {
    "id": "127",
    "sentence": "as you continue",
    "chinese": "当你继续",
    "pronunciation": "/æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/"
  },
  {
    "id": "128",
    "sentence": "However , you have to be confident as you continue",
    "chinese": "然而，你必须在继续的过程中保持自信",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/"
  },
  {
    "id": "129",
    "sentence": "and persevere",
    "chinese": "并坚持",
    "pronunciation": "/ænd; ənd/ /ˌpɜːrsəˈvɪr/"
  },
  {
    "id": "130",
    "sentence": "However , you have to be confident as you continue and persevere",
    "chinese": "然而，你必须在继续并坚持的过程中保持自信",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/"
  },
  {
    "id": "131",
    "sentence": "in your studies",
    "chinese": "在学习中",
    "pronunciation": "/ɪn/ /jʊr; jər/ /ˈstʌdiz/"
  },
  {
    "id": "132",
    "sentence": "However , you have to be confident as you continue and persevere in your studies",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/"
  },
  {
    "id": "133",
    "sentence": "and that you're doing things",
    "chinese": "并且你正在做你喜欢的事情",
    "pronunciation": "/ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/"
  },
  {
    "id": "134",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/"
  },
  {
    "id": "135",
    "sentence": "you like to do",
    "chinese": "你喜欢做的事情",
    "pronunciation": "/juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "136",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things you like to do",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "137",
    "sentence": "which in my case",
    "chinese": "在我看来",
    "pronunciation": "/wɪtʃ/ /ɪn/ /maɪ/ /keɪs/"
  },
  {
    "id": "138",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things you like to do , which in my case",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情，在我看来",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /wɪtʃ/ /ɪn/ /maɪ/ /keɪs/"
  },
  {
    "id": "139",
    "sentence": "is listening and reading",
    "chinese": "是听和读",
    "pronunciation": "/ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/"
  },
  {
    "id": "140",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things you like to do , which in my case is listening and reading",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情，在我看来，那就是听和读",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /wɪtʃ/ /ɪn/ /maɪ/ /keɪs/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/"
  },
  {
    "id": "141",
    "sentence": "Even if I'm talking to people",
    "chinese": "即使我在与人交谈",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "142",
    "sentence": "of course",
    "chinese": "当然",
    "pronunciation": "/ʌv/ /kɔːrs/"
  },
  {
    "id": "143",
    "sentence": "Even if I'm talking to people , of course",
    "chinese": "即使我在与人交谈，当然",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/ /ʌv/ /kɔːrs/"
  },
  {
    "id": "144",
    "sentence": "I'm listening",
    "chinese": "我在倾听",
    "pronunciation": "/aɪm/ /ˈlɪsnɪŋ/"
  },
  {
    "id": "145",
    "sentence": "Even if I'm talking to people , of course I'm listening",
    "chinese": "即使我在与人交谈，当然我也在倾听",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/ /ʌv/ /kɔːrs/ /aɪm/ /ˈlɪsnɪŋ/"
  },
  {
    "id": "146",
    "sentence": "and I'm noticing",
    "chinese": "我也在注意",
    "pronunciation": "/ænd; ənd/ /aɪm/ /ˈnoʊtɪsɪŋ/"
  },
  {
    "id": "147",
    "sentence": "Even if I'm talking to people , of course I'm listening and I'm noticing",
    "chinese": "即使我在与人交谈，当然我也在倾听和注意",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/ /ʌv/ /kɔːrs/ /aɪm/ /ˈlɪsnɪŋ/ /ænd; ənd/ /aɪm/ /ˈnoʊtɪsɪŋ/"
  },
  {
    "id": "148",
    "sentence": "All of this is gradually improving",
    "chinese": "所有这些都在逐步提升",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/"
  },
  {
    "id": "149",
    "sentence": "my capability in the language",
    "chinese": "我的语言能力",
    "pronunciation": "/maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "150",
    "sentence": "All of this is gradually improving my capability in the language",
    "chinese": "所有这些都在逐步提升我的语言能力",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/ /maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "151",
    "sentence": "so you have to accept that",
    "chinese": "所以你必须接受这一点",
    "pronunciation": "/soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /əkˈsept/ /ðæt/"
  },
  {
    "id": "152",
    "sentence": "All of this is gradually improving my capability in the language , so you have to accept that",
    "chinese": "所有这些都在逐步提升我的语言能力，所以你必须接受这一点",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/ /maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /əkˈsept/ /ðæt/"
  },
  {
    "id": "153",
    "sentence": "and it's not going to be overnight",
    "chinese": "而这不会是一蹴而就的",
    "pronunciation": "/ænd; ənd/ /ɪts/ /nɑːt/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /ˌoʊvərˈnaɪt/"
  },
  {
    "id": "154",
    "sentence": "All of this is gradually improving my capability in the language , so you have to accept that and it's not going to be overnight",
    "chinese": "所有这些都在逐步提升我的语言能力，所以你必须接受这一点，这不会是一蹴而就的",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/ /maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /əkˈsept/ /ðæt/ /ænd; ənd/ /ɪts/ /nɑːt/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /ˌoʊvərˈnaɪt/"
  },
  {
    "id": "155",
    "sentence": "It may take six months",
    "chinese": "可能需要六个月的时间",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/"
  },
  {
    "id": "156",
    "sentence": "for certain things to sink in",
    "chinese": "对于某些事情来说，需要时间来真正理解",
    "pronunciation": "/fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/"
  },
  {
    "id": "157",
    "sentence": "It may take six months for certain things to sink in",
    "chinese": "某些事情可能需要六个月的时间才能真正理解",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/ /fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/"
  },
  {
    "id": "158",
    "sentence": "but all of a sudden",
    "chinese": "但突然间",
    "pronunciation": "/bʌt/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "159",
    "sentence": "It may take six months for certain things to sink in , but all of a sudden",
    "chinese": "某些事情可能需要六个月的时间才能真正理解，但突然间",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/ /fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/ /bʌt/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "160",
    "sentence": "they do",
    "chinese": "它们就会变得清晰",
    "pronunciation": "/ðeɪ/ /duː; də/"
  },
  {
    "id": "161",
    "sentence": "It may take six months for certain things to sink in , but all of a sudden they do",
    "chinese": "某些事情可能需要六个月的时间才能真正理解，但突然间它们就会变得清晰",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/ /fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/ /bʌt/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /ðeɪ/ /duː; də/"
  },
  {
    "id": "162",
    "sentence": "Almost without realizing it",
    "chinese": "几乎在不知不觉中",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/"
  },
  {
    "id": "163",
    "sentence": "( and I've had this feeling )",
    "chinese": "（我有过这种感觉）",
    "pronunciation": "/ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/"
  },
  {
    "id": "164",
    "sentence": "Almost without realizing it ( and I've had this feeling )",
    "chinese": "几乎在不知不觉中（我有过这种感觉）",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/"
  },
  {
    "id": "165",
    "sentence": "I'll go back to a text",
    "chinese": "我会回到一个文本",
    "pronunciation": "/aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/"
  },
  {
    "id": "166",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到一个文本",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/"
  },
  {
    "id": "167",
    "sentence": "that I struggled with",
    "chinese": "我感到困扰的",
    "pronunciation": "/ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/"
  },
  {
    "id": "168",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到一个我曾经努力过的文本",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/"
  },
  {
    "id": "169",
    "sentence": "two-three months",
    "chinese": "两三个月",
    "pronunciation": "/tu θri/ /mʌnθs/"
  },
  {
    "id": "170",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前让我感到困扰的文本",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/"
  },
  {
    "id": "171",
    "sentence": "four months earlier",
    "chinese": "四个月前",
    "pronunciation": "/fɔr/ /mʌnθs/ /ˈɜːrliər/"
  },
  {
    "id": "172",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/"
  },
  {
    "id": "173",
    "sentence": "and it seemed that",
    "chinese": "而且似乎",
    "pronunciation": "/ænd; ənd/ /ɪt/ /siːmd/ /ðæt/"
  },
  {
    "id": "174",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/"
  },
  {
    "id": "175",
    "sentence": "I never made any progress",
    "chinese": "我从未取得任何进展",
    "pronunciation": "/aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/"
  },
  {
    "id": "176",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/"
  },
  {
    "id": "177",
    "sentence": "I could never understand",
    "chinese": "我永远无法理解",
    "pronunciation": "/aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/"
  },
  {
    "id": "178",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/"
  },
  {
    "id": "179",
    "sentence": "certain parts of it",
    "chinese": "其中的某些部分",
    "pronunciation": "/ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/"
  },
  {
    "id": "180",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/"
  },
  {
    "id": "181",
    "sentence": "and all of a sudden",
    "chinese": "突然间",
    "pronunciation": "/ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "182",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it and all of a sudden",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分，但突然间",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "183",
    "sentence": "lo and behold",
    "chinese": "瞧！",
    "pronunciation": "/loʊ/ /ænd; ənd/ /bɪˈhoʊld/"
  },
  {
    "id": "184",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it and all of a sudden lo and behold !",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分，但突然间，瞧！",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/"
  },
  {
    "id": "185",
    "sentence": "it's crystal clear to me",
    "chinese": "它对我来说变得清晰透彻了",
    "pronunciation": "/ɪts/ /ˈkrɪst(ə)l/ /klɪr/ /tuː; tə/ /miː/"
  },
  {
    "id": "186",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it and all of a sudden lo and behold ! it's crystal clear to me",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分，但突然间，瞧！它对我来说变得清晰透彻了",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /ɪts/ /ˈkrɪst(ə)l/ /klɪr/ /tuː; tə/ /miː/"
  },
  {
    "id": "187",
    "sentence": "Similarly",
    "chinese": "同样",
    "pronunciation": "/ˈsɪmələrli/"
  },
  {
    "id": "188",
    "sentence": "in speaking",
    "chinese": "在说话时",
    "pronunciation": "/ɪn/ /ˈspiːkɪŋ/"
  },
  {
    "id": "189",
    "sentence": "Similarly , in speaking",
    "chinese": "同样，在说话时",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/"
  },
  {
    "id": "190",
    "sentence": "you have these moments",
    "chinese": "你有这些时刻",
    "pronunciation": "/juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/"
  },
  {
    "id": "191",
    "sentence": "Similarly , in speaking you have these moments",
    "chinese": "同样，在说话时，你会有这些时刻",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/"
  },
  {
    "id": "192",
    "sentence": "of great triumph",
    "chinese": "伟大的胜利",
    "pronunciation": "/ʌv/ /ɡreɪt/ /ˈtraɪʌmf/"
  },
  {
    "id": "193",
    "sentence": "Similarly , in speaking you have these moments of great triumph",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/"
  },
  {
    "id": "194",
    "sentence": "when you were in a discussion",
    "chinese": "当你参与讨论时",
    "pronunciation": "/wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/"
  },
  {
    "id": "195",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/"
  },
  {
    "id": "196",
    "sentence": "and lo and behold",
    "chinese": "瞧",
    "pronunciation": "/ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/"
  },
  {
    "id": "197",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold !",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/"
  },
  {
    "id": "198",
    "sentence": "you were able to express your ideas",
    "chinese": "你能够表达你的想法",
    "pronunciation": "/juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/"
  },
  {
    "id": "199",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold ! you were able to express your ideas",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！你能够表达你的想法",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/"
  },
  {
    "id": "200",
    "sentence": "just the way you wanted to",
    "chinese": "以你想要的方式",
    "pronunciation": "/dʒʌst/ /ðə/ /weɪ/ /juː; jʊ/ /ˈwɑːntɪd/ /tuː; tə/"
  },
  {
    "id": "201",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold ! you were able to express your ideas just the way you wanted to",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！你能够以你想要的方式表达你的想法",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/ /dʒʌst/ /ðə/ /weɪ/ /juː; jʊ/ /ˈwɑːntɪd/ /tuː; tə/"
  },
  {
    "id": "202",
    "sentence": "or almost",
    "chinese": "或几乎",
    "pronunciation": "/ɔr/ /ˈɔːlmoʊst/"
  },
  {
    "id": "203",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold ! you were able to express your ideas just the way you wanted to or almost",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！你能够以你想要的方式或几乎以你想要的方式表达你的想法",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/ /dʒʌst/ /ðə/ /weɪ/ /juː; jʊ/ /ˈwɑːntɪd/ /tuː; tə/ /ɔr/ /ˈɔːlmoʊst/"
  },
  {
    "id": "204",
    "sentence": "Maybe the next day",
    "chinese": "也许第二天",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /nekst/ /deɪ/"
  },
  {
    "id": "205",
    "sentence": "you won't be so successful",
    "chinese": "你不会那么成功",
    "pronunciation": "/juː; jʊ/ /woʊnt/ /biː/ /soʊ/ /səkˈsesf(ə)l/"
  },
  {
    "id": "206",
    "sentence": "Maybe the next day you won't be so successful",
    "chinese": "也许第二天你不会那么成功",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /nekst/ /deɪ/ /juː; jʊ/ /woʊnt/ /biː/ /soʊ/ /səkˈsesf(ə)l/"
  },
  {
    "id": "207",
    "sentence": "but it's a very gradual process",
    "chinese": "但这是一个非常渐进的过程",
    "pronunciation": "/bʌt/ /ɪts/ /ə; eɪ/ /ˈveri/ /ˈɡrædʒuəl/ /ˈprɑːses/"
  },
  {
    "id": "208",
    "sentence": "Maybe the next day you won't be so successful , but it's a very gradual process",
    "chinese": "也许第二天你不会那么成功，但这是一个非常渐进的过程",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /nekst/ /deɪ/ /juː; jʊ/ /woʊnt/ /biː/ /soʊ/ /səkˈsesf(ə)l/ /bʌt/ /ɪts/ /ə; eɪ/ /ˈveri/ /ˈɡrædʒuəl/ /ˈprɑːses/"
  },
  {
    "id": "209",
    "sentence": "It's not obvious",
    "chinese": "并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/"
  },
  {
    "id": "210",
    "sentence": "which words or which structures",
    "chinese": "哪些词汇或哪些结构",
    "pronunciation": "/wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/"
  },
  {
    "id": "211",
    "sentence": "It's not obvious which words or which structures",
    "chinese": "哪些词汇或结构会先被大脑学习并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/"
  },
  {
    "id": "212",
    "sentence": "in the language",
    "chinese": "在语言中",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "213",
    "sentence": "It's not obvious which words or which structures in the language",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "214",
    "sentence": "the brain is going to learn",
    "chinese": "大脑将要学习",
    "pronunciation": "/ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/"
  },
  {
    "id": "215",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/"
  },
  {
    "id": "216",
    "sentence": "first or later",
    "chinese": "先或后",
    "pronunciation": "/fɜːrst/ /ɔr/ /ˈleɪtər/"
  },
  {
    "id": "217",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/"
  },
  {
    "id": "218",
    "sentence": "so you just have to be patient",
    "chinese": "所以你只需要保持耐心",
    "pronunciation": "/soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "219",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "220",
    "sentence": "and you have to believe",
    "chinese": "并且你必须相信",
    "pronunciation": "/ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/"
  },
  {
    "id": "221",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/"
  },
  {
    "id": "222",
    "sentence": "that what you're doing",
    "chinese": "你所做的努力",
    "pronunciation": "/ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/"
  },
  {
    "id": "223",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe that what you're doing",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信你所做的努力",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/ /ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/"
  },
  {
    "id": "224",
    "sentence": "is going to lead to",
    "chinese": "将会导致",
    "pronunciation": "/ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /liːd/ /tuː; tə/"
  },
  {
    "id": "225",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe that what you're doing is going to lead to",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信你所做的努力最终会带来期望的结果",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/ /ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /liːd/ /tuː; tə/"
  },
  {
    "id": "226",
    "sentence": "the desired result",
    "chinese": "期望的结果",
    "pronunciation": "/ðə/ /dɪˈzɪrd/ /rɪˈzʌlt/"
  },
  {
    "id": "227",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe that what you're doing is going to lead to the desired result",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信你所做的努力最终会带来期望的结果",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/ /ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /liːd/ /tuː; tə/ /ðə/ /dɪˈzɪrd/ /rɪˈzʌlt/"
  },
  {
    "id": "228",
    "sentence": "Anytime you get frustrated",
    "chinese": "每当你感到沮丧",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/"
  },
  {
    "id": "229",
    "sentence": "upset",
    "chinese": "难过",
    "pronunciation": "/ˌʌpˈset/"
  },
  {
    "id": "230",
    "sentence": "Anytime you get frustrated , upset",
    "chinese": "每当你感到沮丧、难过",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/"
  },
  {
    "id": "231",
    "sentence": "because you forgot something",
    "chinese": "因为你忘记了某事",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "232",
    "sentence": "Anytime you get frustrated , upset , because you forgot something",
    "chinese": "每当你因为忘记某事而感到沮丧、难过时",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "233",
    "sentence": "or because you don't understand something",
    "chinese": "或因为你不理解某事",
    "pronunciation": "/ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "234",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "235",
    "sentence": "all these negative thoughts",
    "chinese": "所有这些负面情绪",
    "pronunciation": "/ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/"
  },
  {
    "id": "236",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something , all these negative thoughts",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时，所有这些负面情绪",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/ /ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/"
  },
  {
    "id": "237",
    "sentence": "are very damaging",
    "chinese": "非常有害",
    "pronunciation": "/ɑr/ /ˈveri/ /ˈdæmɪdʒɪŋ/"
  },
  {
    "id": "238",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something , all these negative thoughts are very damaging",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时，所有这些负面情绪都会非常有害",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/ /ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/ /ɑr/ /ˈveri/ /ˈdæmɪdʒɪŋ/"
  },
  {
    "id": "239",
    "sentence": "to the learning process",
    "chinese": "对学习过程",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈlɜːrnɪŋ/ /ˈprɑːses/"
  },
  {
    "id": "240",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something , all these negative thoughts are very damaging to the learning process",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时，这些负面情绪都会对学习过程造成极大的损害",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/ /ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/ /ɑr/ /ˈveri/ /ˈdæmɪdʒɪŋ/ /tuː; tə/ /ðə/ /ˈlɜːrnɪŋ/ /ˈprɑːses/"
  },
  {
    "id": "241",
    "sentence": "Again , I'm not a neuroscientist",
    "chinese": "再次强调，我并非神经科学家",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/"
  },
  {
    "id": "242",
    "sentence": "but there is so much emotion",
    "chinese": "但其中蕴含着如此多的情感",
    "pronunciation": "/bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/"
  },
  {
    "id": "243",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中有如此多的情感因素",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/"
  },
  {
    "id": "244",
    "sentence": "in how the brain learns",
    "chinese": "在大脑学习的过程中",
    "pronunciation": "/ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "245",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "246",
    "sentence": "that it's very important",
    "chinese": "因此非常重要",
    "pronunciation": "/ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "247",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns that it's very important",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富，因此保持积极态度非常重要",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/ /ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "248",
    "sentence": "not to get negative",
    "chinese": "保持积极态度",
    "pronunciation": "/nɑːt/ /tuː; tə/ /ɡet/ /ˈneɡətɪv/"
  },
  {
    "id": "249",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns that it's very important not to get negative",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富，因此保持积极态度非常重要",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/ /ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /nɑːt/ /tuː; tə/ /ɡet/ /ˈneɡətɪv/"
  },
  {
    "id": "250",
    "sentence": "and to be patient",
    "chinese": "并保持耐心",
    "pronunciation": "/ænd; ənd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "251",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns that it's very important not to get negative and to be patient",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富，因此保持积极态度并保持耐心非常重要",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/ /ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /nɑːt/ /tuː; tə/ /ɡet/ /ˈneɡətɪv/ /ænd; ənd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "252",
    "sentence": "Realize that",
    "chinese": "要明白",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/"
  },
  {
    "id": "253",
    "sentence": "it's a long road",
    "chinese": "这是一条漫长的道路",
    "pronunciation": "/ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/"
  },
  {
    "id": "254",
    "sentence": "Realize that it's a long road",
    "chinese": "要明白这是一条漫长的道路",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/"
  },
  {
    "id": "255",
    "sentence": "hopefully an enjoyable road",
    "chinese": "希望是一条愉快的道路",
    "pronunciation": "/ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/"
  },
  {
    "id": "256",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/"
  },
  {
    "id": "257",
    "sentence": "but one that",
    "chinese": "但其中一条",
    "pronunciation": "/bʌt/ /wʌn/ /ðæt/"
  },
  {
    "id": "258",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road , but one that",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路，但这是一条",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/ /bʌt/ /wʌn/ /ðæt/"
  },
  {
    "id": "259",
    "sentence": "will definitely lead to",
    "chinese": "一定会导致",
    "pronunciation": "/wɪl/ /ˈdefɪnətli/ /liːd/ /tuː; tə/"
  },
  {
    "id": "260",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road , but one that will definitely lead to",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路，但它一定会带你走向",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/ /bʌt/ /wʌn/ /ðæt/ /wɪl/ /ˈdefɪnətli/ /liːd/ /tuː; tə/"
  },
  {
    "id": "261",
    "sentence": "fluency in that language",
    "chinese": "那种语言的流利",
    "pronunciation": "/ˈfluːənsi/ /ɪn/ /ðæt/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "262",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road , but one that will definitely lead to fluency in that language",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路，但它一定会带你走向那种语言的流利",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/ /bʌt/ /wʌn/ /ðæt/ /wɪl/ /ˈdefɪnətli/ /liːd/ /tuː; tə/ /ˈfluːənsi/ /ɪn/ /ðæt/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "263",
    "sentence": "Fluency need not mean perfection",
    "chinese": "流利并不意味着完美",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/"
  },
  {
    "id": "264",
    "sentence": "so if you don't expect perfection",
    "chinese": "所以如果你不追求完美",
    "pronunciation": "/soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/"
  },
  {
    "id": "265",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection",
    "chinese": "流利并不意味着完美，所以如果你不追求完美",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/"
  },
  {
    "id": "266",
    "sentence": "but you do expect to constantly improve",
    "chinese": "但你确实期望不断进步",
    "pronunciation": "/bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/"
  },
  {
    "id": "267",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection but you do expect to constantly improve",
    "chinese": "流利并不意味着完美，所以如果你不追求完美，但确实期望不断进步",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/ /bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/"
  },
  {
    "id": "268",
    "sentence": "then I think",
    "chinese": "那么我认为",
    "pronunciation": "/ðen/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "269",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection but you do expect to constantly improve , then I think",
    "chinese": "流利并不意味着完美，所以如果你不追求完美，但确实期望不断进步，那么我认为",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/ /bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/ /ðen/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "270",
    "sentence": "you can afford to be patient",
    "chinese": "你可以保持耐心",
    "pronunciation": "/juː; jʊ/ /kæn/ /əˈfɔːrd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "271",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection but you do expect to constantly improve , then I think you can afford to be patient",
    "chinese": "流利并不意味着完美，所以如果你不追求完美，但确实期望不断进步，那么我认为你可以保持耐心",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/ /bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/ /ðen/ /aɪ/ /θɪŋk/ /juː; jʊ/ /kæn/ /əˈfɔːrd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "272",
    "sentence": "So that's my fifth secret",
    "chinese": "所以，我的第五个秘诀是",
    "pronunciation": "/soʊ/ /ðæts/ /maɪ/ /fɪfθ/ /ˈsiːkrət/"
  },
  {
    "id": "273",
    "sentence": "be patient",
    "chinese": "保持耐心",
    "pronunciation": "/biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "274",
    "sentence": "So that's my fifth secret , be patient",
    "chinese": "所以，我的第五个秘诀是，保持耐心",
    "pronunciation": "/soʊ/ /ðæts/ /maɪ/ /fɪfθ/ /ˈsiːkrət/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "275",
    "sentence": "Thank you",
    "chinese": "谢谢您",
    "pronunciation": "/θæŋk/ /juː; jʊ/"
  },
  {
    "id": "276",
    "sentence": "for listening",
    "chinese": "为了聆听",
    "pronunciation": "/fɔːr; fər/ /ˈlɪsnɪŋ/"
  },
  {
    "id": "277",
    "sentence": "Thank you for listening",
    "chinese": "谢谢您的聆听",
    "pronunciation": "/θæŋk/ /juː; jʊ/ /fɔːr; fər/ /ˈlɪsnɪŋ/"
  },
];
