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
    "sentence": "it's Steve Kaufmann",
    "chinese": "我是Steve Kaufmann",
    "pronunciation": "/ɪts/ /stiːv/ /kaʊfˈmæn/"
  },
  {
    "id": "3",
    "sentence": "Hi , there , it's Steve Kaufmann",
    "chinese": "嗨，大家好，我是Steve Kaufmann",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ɪts/ /stiːv/ /kaʊfˈmæn/"
  },
  {
    "id": "4",
    "sentence": "Founder of LingQ",
    "chinese": "LingQ的创始人",
    "pronunciation": "/ˈfaʊndər/ /ʌv/ /lɪŋk/"
  },
  {
    "id": "5",
    "sentence": "Hi , there , it's Steve Kaufmann Founder of LingQ",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ɪts/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/"
  },
  {
    "id": "6",
    "sentence": "and I'm going to talk to you",
    "chinese": "今天我要和大家分享",
    "pronunciation": "/ænd; ənd/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /tɔːk/ /tuː; tə/ /juː; jʊ/"
  },
  {
    "id": "7",
    "sentence": "Hi , there , it's Steve Kaufmann Founder of LingQ and I'm going to talk to you",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要和大家谈谈",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ɪts/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /tɔːk/ /tuː; tə/ /juː; jʊ/"
  },
  {
    "id": "8",
    "sentence": "about the third of my Secrets",
    "chinese": "关于我的第三个秘诀",
    "pronunciation": "/əˈbaʊt/ /ðə/ /θɜrd/ /ʌv/ /maɪ/ /ˈsiːkrəts/"
  },
  {
    "id": "9",
    "sentence": "Hi , there , it's Steve Kaufmann Founder of LingQ and I'm going to talk to you about the third of my Secrets",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要和大家分享我的第三个成功语言学习的秘诀",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ɪts/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /tɔːk/ /tuː; tə/ /juː; jʊ/ /əˈbaʊt/ /ðə/ /θɜrd/ /ʌv/ /maɪ/ /ˈsiːkrəts/"
  },
  {
    "id": "10",
    "sentence": "to Successful Language Learning",
    "chinese": "成功语言学习",
    "pronunciation": "/tuː; tə/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "11",
    "sentence": "Hi , there , it's Steve Kaufmann Founder of LingQ and I'm going to talk to you about the third of my Secrets to Successful Language Learning",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要和大家分享我的第三个成功语言学习的秘诀",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ɪts/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /tɔːk/ /tuː; tə/ /juː; jʊ/ /əˈbaʊt/ /ðə/ /θɜrd/ /ʌv/ /maɪ/ /ˈsiːkrəts/ /tuː; tə/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "12",
    "sentence": "The first one was",
    "chinese": "第一个方法是",
    "pronunciation": "/ðə/ /fɜːrst/ /wʌn/ /wʌz; wəz/"
  },
  {
    "id": "13",
    "sentence": "to spend the time",
    "chinese": "花时间",
    "pronunciation": "/tuː; tə/ /spend/ /ðə/ /taɪm/"
  },
  {
    "id": "14",
    "sentence": "The first one was to spend the time",
    "chinese": "第一个方法是花时间",
    "pronunciation": "/ðə/ /fɜːrst/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /spend/ /ðə/ /taɪm/"
  },
  {
    "id": "15",
    "sentence": "every day",
    "chinese": "每天",
    "pronunciation": "/ˈevri/ /deɪ/"
  },
  {
    "id": "16",
    "sentence": "The first one was to spend the time every day",
    "chinese": "第一个方法是每天花时间",
    "pronunciation": "/ðə/ /fɜːrst/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /spend/ /ðə/ /taɪm/ /ˈevri/ /deɪ/"
  },
  {
    "id": "17",
    "sentence": "and for as long as",
    "chinese": "并且坚持足够长的时间",
    "pronunciation": "/ænd; ənd/ /fɔːr; fər/ /æz; əz/ /lɔːŋ/ /æz; əz/"
  },
  {
    "id": "18",
    "sentence": "The first one was to spend the time every day and for as long as",
    "chinese": "第一个方法是每天花时间，并且坚持足够长的时间",
    "pronunciation": "/ðə/ /fɜːrst/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /spend/ /ðə/ /taɪm/ /ˈevri/ /deɪ/ /ænd; ənd/ /fɔːr; fər/ /æz; əz/ /lɔːŋ/ /æz; əz/"
  },
  {
    "id": "19",
    "sentence": "it takes",
    "chinese": "所需的时间",
    "pronunciation": "/ɪt/ /teɪks/"
  },
  {
    "id": "20",
    "sentence": "The first one was to spend the time every day and for as long as it takes",
    "chinese": "第一个方法是每天花时间，并且坚持足够长的时间",
    "pronunciation": "/ðə/ /fɜːrst/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /spend/ /ðə/ /taɪm/ /ˈevri/ /deɪ/ /ænd; ənd/ /fɔːr; fər/ /æz; əz/ /lɔːŋ/ /æz; əz/ /ɪt/ /teɪks/"
  },
  {
    "id": "21",
    "sentence": "The second secret was",
    "chinese": "第二个秘诀是",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/"
  },
  {
    "id": "22",
    "sentence": "to do things",
    "chinese": "做事情",
    "pronunciation": "/tuː; tə/ /duː; də/ /θɪŋz/"
  },
  {
    "id": "23",
    "sentence": "The second secret was to do things",
    "chinese": "第二个秘诀是做事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/"
  },
  {
    "id": "24",
    "sentence": "that you like to do",
    "chinese": "你喜欢做的事情",
    "pronunciation": "/ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "25",
    "sentence": "The second secret was to do things that you like to do",
    "chinese": "第二个秘密是做你喜欢做的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "26",
    "sentence": "in language learning",
    "chinese": "在语言学习中",
    "pronunciation": "/ɪn/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "27",
    "sentence": "The second secret was to do things that you like to do in language learning",
    "chinese": "第二个秘诀是在语言学习中做你喜欢做的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /ɪn/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "28",
    "sentence": "That will insure your success",
    "chinese": "这将确保你的成功",
    "pronunciation": "/ðæt/ /wɪl/ /ɪnˈʃʊr/ /jʊr; jər/ /səkˈses/"
  },
  {
    "id": "29",
    "sentence": "and insure that",
    "chinese": "并确保",
    "pronunciation": "/ænd; ənd/ /ɪnˈʃʊr/ /ðæt/"
  },
  {
    "id": "30",
    "sentence": "That will insure your success and insure that",
    "chinese": "这将确保你的成功并确保",
    "pronunciation": "/ðæt/ /wɪl/ /ɪnˈʃʊr/ /jʊr; jər/ /səkˈses/ /ænd; ənd/ /ɪnˈʃʊr/ /ðæt/"
  },
  {
    "id": "31",
    "sentence": "you stay with it",
    "chinese": "你坚持下去",
    "pronunciation": "/juː; jʊ/ /steɪ/ /wɪð; wɪθ/ /ɪt/"
  },
  {
    "id": "32",
    "sentence": "That will insure your success and insure that you stay with it",
    "chinese": "这将确保你的成功，并确保你坚持下去",
    "pronunciation": "/ðæt/ /wɪl/ /ɪnˈʃʊr/ /jʊr; jər/ /səkˈses/ /ænd; ənd/ /ɪnˈʃʊr/ /ðæt/ /juː; jʊ/ /steɪ/ /wɪð; wɪθ/ /ɪt/"
  },
  {
    "id": "33",
    "sentence": "The third secret is",
    "chinese": "第三个秘密是",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /ɪz/"
  },
  {
    "id": "34",
    "sentence": "to notice what is happening",
    "chinese": "注意到正在发生的事情",
    "pronunciation": "/tuː; tə/ /ˈnoʊtɪs/ /wʌt/ /ɪz/ /ˈhæpənɪŋ/"
  },
  {
    "id": "35",
    "sentence": "The third secret is to notice what is happening",
    "chinese": "第三个秘密是要注意正在发生的事情",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /ɪz/ /tuː; tə/ /ˈnoʊtɪs/ /wʌt/ /ɪz/ /ˈhæpənɪŋ/"
  },
  {
    "id": "36",
    "sentence": "in the language",
    "chinese": "在语言中",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "37",
    "sentence": "The third secret is to notice what is happening in the language",
    "chinese": "第三个秘密是要注意语言中正在发生的事情",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /ɪz/ /tuː; tə/ /ˈnoʊtɪs/ /wʌt/ /ɪz/ /ˈhæpənɪŋ/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "38",
    "sentence": "This is extremely important",
    "chinese": "这非常重要",
    "pronunciation": "/ðɪs/ /ɪz/ /ɪkˈstriːmli/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "39",
    "sentence": "Now",
    "chinese": "那么",
    "pronunciation": "/naʊ/"
  },
  {
    "id": "40",
    "sentence": "how do you develop",
    "chinese": "你如何培养",
    "pronunciation": "/haʊ/ /duː; də/ /juː; jʊ/ /dɪˈveləp/"
  },
  {
    "id": "41",
    "sentence": "Now , how do you develop",
    "chinese": "那么，你如何培养",
    "pronunciation": "/naʊ/ /haʊ/ /duː; də/ /juː; jʊ/ /dɪˈveləp/"
  },
  {
    "id": "42",
    "sentence": "the ability to notice",
    "chinese": "察觉能力",
    "pronunciation": "/ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "43",
    "sentence": "Now , how do you develop the ability to notice ?",
    "chinese": "那么，你如何培养这种察觉能力呢？",
    "pronunciation": "/naʊ/ /haʊ/ /duː; də/ /juː; jʊ/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "44",
    "sentence": "There are a number of things",
    "chinese": "有很多事情",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /θɪŋz/"
  },
  {
    "id": "45",
    "sentence": "that you need to do",
    "chinese": "你需要做的",
    "pronunciation": "/ðæt/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "46",
    "sentence": "There are a number of things that you need to do",
    "chinese": "你需要做很多事情",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /θɪŋz/ /ðæt/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "47",
    "sentence": "First of all",
    "chinese": "首先",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/"
  },
  {
    "id": "48",
    "sentence": "I would like to stress",
    "chinese": "我想强调的是",
    "pronunciation": "/aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/"
  },
  {
    "id": "49",
    "sentence": "First of all , I would like to stress",
    "chinese": "首先，我想强调",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/"
  },
  {
    "id": "50",
    "sentence": "that the ability to notice",
    "chinese": "能够注意到细节的能力",
    "pronunciation": "/ðæt/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "51",
    "sentence": "First of all , I would like to stress that the ability to notice",
    "chinese": "首先，我想强调的是，能够注意到细节的能力",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/ /ðæt/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "52",
    "sentence": "is probably the largest difference",
    "chinese": "可能是最大的区别",
    "pronunciation": "/ɪz/ /ˈprɑːbəbli/ /ðə/ /ˈlɑːrdʒɪst/ /ˈdɪfrəns/"
  },
  {
    "id": "53",
    "sentence": "First of all , I would like to stress that the ability to notice is probably the largest difference",
    "chinese": "首先，我想强调的是，能够注意到细节的能力可能是最大的区别",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/ /ðæt/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ɪz/ /ˈprɑːbəbli/ /ðə/ /ˈlɑːrdʒɪst/ /ˈdɪfrəns/"
  },
  {
    "id": "54",
    "sentence": "the most significant difference",
    "chinese": "最显著的区别",
    "pronunciation": "/ðə/ /moʊst/ /sɪɡˈnɪfɪkənt/ /ˈdɪfrəns/"
  },
  {
    "id": "55",
    "sentence": "First of all , I would like to stress that the ability to notice is probably the largest difference , the most significant difference",
    "chinese": "首先，我想强调的是，能够注意到细节的能力可能是最大的区别，也是最显著的区别",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/ /ðæt/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ɪz/ /ˈprɑːbəbli/ /ðə/ /ˈlɑːrdʒɪst/ /ˈdɪfrəns/ /ðə/ /moʊst/ /sɪɡˈnɪfɪkənt/ /ˈdɪfrəns/"
  },
  {
    "id": "56",
    "sentence": "between people who are good at language learning",
    "chinese": "在擅长语言学习的人与不擅长语言学习的人之间",
    "pronunciation": "/bɪˈtwin/ /ˈpipl/ /huː/ /ɑr/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "57",
    "sentence": "First of all , I would like to stress that the ability to notice is probably the largest difference , the most significant difference between people who are good at language learning",
    "chinese": "首先，我想强调的是，能够注意到细节的能力可能是擅长语言学习的人与不擅长语言学习的人之间最大的区别，也是最显著的区别",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/ /ðæt/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ɪz/ /ˈprɑːbəbli/ /ðə/ /ˈlɑːrdʒɪst/ /ˈdɪfrəns/ /ðə/ /moʊst/ /sɪɡˈnɪfɪkənt/ /ˈdɪfrəns/ /bɪˈtwin/ /ˈpipl/ /huː/ /ɑr/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "58",
    "sentence": "and people who are not good at language learning",
    "chinese": "和不擅长语言学习的人",
    "pronunciation": "/ænd; ənd/ /ˈpipl/ /huː/ /ɑr/ /nɑːt/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "59",
    "sentence": "First of all , I would like to stress that the ability to notice is probably the largest difference , the most significant difference between people who are good at language learning and people who are not good at language learning",
    "chinese": "首先，我想强调的是，能够注意到细节的能力可能是擅长语言学习的人与不擅长语言学习的人之间最大的区别，也是最显著的区别",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/ /ðæt/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ɪz/ /ˈprɑːbəbli/ /ðə/ /ˈlɑːrdʒɪst/ /ˈdɪfrəns/ /ðə/ /moʊst/ /sɪɡˈnɪfɪkənt/ /ˈdɪfrəns/ /bɪˈtwin/ /ˈpipl/ /huː/ /ɑr/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ˈpipl/ /huː/ /ɑr/ /nɑːt/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "60",
    "sentence": "so it's very important",
    "chinese": "因此非常重要",
    "pronunciation": "/soʊ/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "61",
    "sentence": "First of all , I would like to stress that the ability to notice is probably the largest difference , the most significant difference between people who are good at language learning and people who are not good at language learning , so it's very important",
    "chinese": "首先，我想强调的是，能够注意到细节的能力可能是擅长语言学习的人与不擅长语言学习的人之间最大的区别，也是最显著的区别，因此非常重要",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/ /ðæt/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ɪz/ /ˈprɑːbəbli/ /ðə/ /ˈlɑːrdʒɪst/ /ˈdɪfrəns/ /ðə/ /moʊst/ /sɪɡˈnɪfɪkənt/ /ˈdɪfrəns/ /bɪˈtwin/ /ˈpipl/ /huː/ /ɑr/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ˈpipl/ /huː/ /ɑr/ /nɑːt/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /soʊ/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "62",
    "sentence": "to develop the ability to notice",
    "chinese": "培养注意到细节的能力",
    "pronunciation": "/tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "63",
    "sentence": "First of all , I would like to stress that the ability to notice is probably the largest difference , the most significant difference between people who are good at language learning and people who are not good at language learning , so it's very important to develop the ability to notice",
    "chinese": "首先，我想强调的是，能够注意到细节的能力可能是擅长语言学习的人与不擅长语言学习的人之间最大的区别，也是最显著的区别，因此培养这种能力非常重要",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /aɪ/ /wʊd/ /laɪk/ /tuː; tə/ /stres/ /ðæt/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ɪz/ /ˈprɑːbəbli/ /ðə/ /ˈlɑːrdʒɪst/ /ˈdɪfrəns/ /ðə/ /moʊst/ /sɪɡˈnɪfɪkənt/ /ˈdɪfrəns/ /bɪˈtwin/ /ˈpipl/ /huː/ /ɑr/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ˈpipl/ /huː/ /ɑr/ /nɑːt/ /ɡʊd/ /æt; ət/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /soʊ/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "64",
    "sentence": "Now , the first thing",
    "chinese": "现在，首先",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/"
  },
  {
    "id": "65",
    "sentence": "you need to do",
    "chinese": "你需要做",
    "pronunciation": "/juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "66",
    "sentence": "Now , the first thing you need to do",
    "chinese": "现在，你需要做的第一件事",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "67",
    "sentence": "is to make sure",
    "chinese": "是要确保",
    "pronunciation": "/ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/"
  },
  {
    "id": "68",
    "sentence": "Now , the first thing you need to do is to make sure",
    "chinese": "现在，你需要做的第一件事是确保",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/"
  },
  {
    "id": "69",
    "sentence": "you get a lot of exposure",
    "chinese": "你大量接触",
    "pronunciation": "/juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/"
  },
  {
    "id": "70",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure",
    "chinese": "现在，你需要做的第一件事是确保你通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/"
  },
  {
    "id": "71",
    "sentence": "to the language",
    "chinese": "这门语言",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "72",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language",
    "chinese": "现在，你需要做的第一件事是确保你通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "73",
    "sentence": "through listening , reading",
    "chinese": "通过听和读",
    "pronunciation": "/θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/"
  },
  {
    "id": "74",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language through listening , reading",
    "chinese": "首先，你需要做的是确保通过听、读来大量接触这门语言",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/ /θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/"
  },
  {
    "id": "75",
    "sentence": "or , if you prefer",
    "chinese": "或者，如果你喜欢",
    "pronunciation": "/ɔr/ /ɪf/ /juː; jʊ/ /prɪˈfɜːr/"
  },
  {
    "id": "76",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language through listening , reading or , if you prefer",
    "chinese": "现在，你需要做的第一件事就是确保通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/ /θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/ /ɔr/ /ɪf/ /juː; jʊ/ /prɪˈfɜːr/"
  },
  {
    "id": "77",
    "sentence": "watching videos",
    "chinese": "观看视频",
    "pronunciation": "/ˈwɑtʃɪŋ/ /ˈvɪdioʊz/"
  },
  {
    "id": "78",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language through listening , reading or , if you prefer , watching videos",
    "chinese": "现在，你需要做的第一件事是确保通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/ /θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/ /ɔr/ /ɪf/ /juː; jʊ/ /prɪˈfɜːr/ /ˈwɑtʃɪŋ/ /ˈvɪdioʊz/"
  },
  {
    "id": "79",
    "sentence": "but somehow",
    "chinese": "但无论如何",
    "pronunciation": "/bʌt/ /ˈsʌmhaʊ/"
  },
  {
    "id": "80",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language through listening , reading or , if you prefer , watching videos , but somehow",
    "chinese": "现在，你需要做的第一件事是确保通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言，但无论如何",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/ /θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/ /ɔr/ /ɪf/ /juː; jʊ/ /prɪˈfɜːr/ /ˈwɑtʃɪŋ/ /ˈvɪdioʊz/ /bʌt/ /ˈsʌmhaʊ/"
  },
  {
    "id": "81",
    "sentence": "you have to get a lot of the language",
    "chinese": "你必须大量吸收这门语言",
    "pronunciation": "/juː; jʊ/ /hæv/ /tuː; tə/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "82",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language through listening , reading or , if you prefer , watching videos , but somehow you have to get a lot of the language",
    "chinese": "首先，你需要做的是确保通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/ /θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/ /ɔr/ /ɪf/ /juː; jʊ/ /prɪˈfɜːr/ /ˈwɑtʃɪŋ/ /ˈvɪdioʊz/ /bʌt/ /ˈsʌmhaʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "83",
    "sentence": "into you",
    "chinese": "进入你的头脑",
    "pronunciation": "/ˈɪntuː/ /juː; jʊ/"
  },
  {
    "id": "84",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language through listening , reading or , if you prefer , watching videos , but somehow you have to get a lot of the language into you",
    "chinese": "现在，你需要做的第一件事是确保通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言，但无论如何，你必须大量吸收这门语言",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/ /θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/ /ɔr/ /ɪf/ /juː; jʊ/ /prɪˈfɜːr/ /ˈwɑtʃɪŋ/ /ˈvɪdioʊz/ /bʌt/ /ˈsʌmhaʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ðə/ /ˈlæŋɡwɪdʒ/ /ˈɪntuː/ /juː; jʊ/"
  },
  {
    "id": "85",
    "sentence": "because you can't notice things",
    "chinese": "因为你无法注意到那些你未曾体验过的东西",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /kænt/ /ˈnoʊtɪs/ /θɪŋz/"
  },
  {
    "id": "86",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language through listening , reading or , if you prefer , watching videos , but somehow you have to get a lot of the language into you because you can't notice things",
    "chinese": "首先，你需要做的是确保通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言，但无论如何，你必须大量吸收这门语言，因为你无法注意到那些你未曾体验过的东西",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/ /θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/ /ɔr/ /ɪf/ /juː; jʊ/ /prɪˈfɜːr/ /ˈwɑtʃɪŋ/ /ˈvɪdioʊz/ /bʌt/ /ˈsʌmhaʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ðə/ /ˈlæŋɡwɪdʒ/ /ˈɪntuː/ /juː; jʊ/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /kænt/ /ˈnoʊtɪs/ /θɪŋz/"
  },
  {
    "id": "87",
    "sentence": "that you haven't already experienced",
    "chinese": "你未曾体验过的",
    "pronunciation": "/ðæt/ /juː; jʊ/ /ˈhævənt/ /ɔːlˈredi/ /ɪkˈspɪriənst/"
  },
  {
    "id": "88",
    "sentence": "Now , the first thing you need to do is to make sure you get a lot of exposure to the language through listening , reading or , if you prefer , watching videos , but somehow you have to get a lot of the language into you because you can't notice things that you haven't already experienced",
    "chinese": "首先，你需要做的是通过听、读，或者如果你喜欢，观看视频，来大量接触这门语言无论如何，你必须大量吸收这门语言，因为你无法注意到那些你未曾体验过的东西。",
    "pronunciation": "/naʊ/ /ðə/ /fɜːrst/ /θɪŋ/ /juː; jʊ/ /niːd/ /tuː; tə/ /duː; də/ /ɪz/ /tuː; tə/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/ /θruː/ /ˈlɪsnɪŋ/ /ˈriːdɪŋ/ /ɔr/ /ɪf/ /juː; jʊ/ /prɪˈfɜːr/ /ˈwɑtʃɪŋ/ /ˈvɪdioʊz/ /bʌt/ /ˈsʌmhaʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /ɡet/ /ə; eɪ/ /lɑːt/ /ʌv/ /ðə/ /ˈlæŋɡwɪdʒ/ /ˈɪntuː/ /juː; jʊ/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /kænt/ /ˈnoʊtɪs/ /θɪŋz/ /ðæt/ /juː; jʊ/ /ˈhævənt/ /ɔːlˈredi/ /ɪkˈspɪriənst/"
  },
  {
    "id": "89",
    "sentence": "It's a bit like",
    "chinese": "这有点像",
    "pronunciation": "/ɪts/ /ə; eɪ/ /bɪt/ /laɪk/"
  },
  {
    "id": "90",
    "sentence": "the saying",
    "chinese": "那句俗话",
    "pronunciation": "/ðə/ /ˈseɪɪŋ/"
  },
  {
    "id": "91",
    "sentence": "It's a bit like the saying",
    "chinese": "这有点像那句俗话",
    "pronunciation": "/ɪts/ /ə; eɪ/ /bɪt/ /laɪk/ /ðə/ /ˈseɪɪŋ/"
  },
  {
    "id": "92",
    "sentence": "you can only learn",
    "chinese": "你只能学到",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈoʊnli/ /lɜːrn/"
  },
  {
    "id": "93",
    "sentence": "It's a bit like the saying you can only learn",
    "chinese": "这有点像那句俗话：你只能学到",
    "pronunciation": "/ɪts/ /ə; eɪ/ /bɪt/ /laɪk/ /ðə/ /ˈseɪɪŋ/ /juː; jʊ/ /kæn/ /ˈoʊnli/ /lɜːrn/"
  },
  {
    "id": "94",
    "sentence": "what you already know",
    "chinese": "你已经知道的东西",
    "pronunciation": "/wʌt/ /juː; jʊ/ /ɔːlˈredi/ /noʊ/"
  },
  {
    "id": "95",
    "sentence": "It's a bit like the saying you can only learn what you already know",
    "chinese": "这有点像那句俗话：你只能学到你已经知道的东西",
    "pronunciation": "/ɪts/ /ə; eɪ/ /bɪt/ /laɪk/ /ðə/ /ˈseɪɪŋ/ /juː; jʊ/ /kæn/ /ˈoʊnli/ /lɜːrn/ /wʌt/ /juː; jʊ/ /ɔːlˈredi/ /noʊ/"
  },
  {
    "id": "96",
    "sentence": "It sounds a bit contradictory",
    "chinese": "这听起来有点矛盾",
    "pronunciation": "/ɪt/ /saʊndz/ /ə; eɪ/ /bɪt/ /ˌkɑːntrəˈdɪktəri/"
  },
  {
    "id": "97",
    "sentence": "but you can't notice",
    "chinese": "但你无法注意到",
    "pronunciation": "/bʌt/ /juː; jʊ/ /kænt/ /ˈnoʊtɪs/"
  },
  {
    "id": "98",
    "sentence": "It sounds a bit contradictory , but you can't notice",
    "chinese": "这听起来有点矛盾，但你还不能注意到",
    "pronunciation": "/ɪt/ /saʊndz/ /ə; eɪ/ /bɪt/ /ˌkɑːntrəˈdɪktəri/ /bʌt/ /juː; jʊ/ /kænt/ /ˈnoʊtɪs/"
  },
  {
    "id": "99",
    "sentence": "until you've actually",
    "chinese": "直到你实际上",
    "pronunciation": "/ʌnˈtɪl/ /juːv/ /ˈæktʃuəli/"
  },
  {
    "id": "100",
    "sentence": "It sounds a bit contradictory , but you can't notice until you've actually",
    "chinese": "这听起来有点矛盾，但直到你实际上已经",
    "pronunciation": "/ɪt/ /saʊndz/ /ə; eɪ/ /bɪt/ /ˌkɑːntrəˈdɪktəri/ /bʌt/ /juː; jʊ/ /kænt/ /ˈnoʊtɪs/ /ʌnˈtɪl/ /juːv/ /ˈæktʃuəli/"
  },
  {
    "id": "101",
    "sentence": "consciously and subconsciously",
    "chinese": "有意识和无意识地",
    "pronunciation": "/ˈkɑːnʃəsli/ /ænd; ənd/ /ˌsʌbˈkɑːnʃəsli/"
  },
  {
    "id": "102",
    "sentence": "It sounds a bit contradictory , but you can't notice until you've actually consciously and subconsciously",
    "chinese": "这听起来有点矛盾，但只有在你真正有意识和无意识地经历过某事后，你才能注意到",
    "pronunciation": "/ɪt/ /saʊndz/ /ə; eɪ/ /bɪt/ /ˌkɑːntrəˈdɪktəri/ /bʌt/ /juː; jʊ/ /kænt/ /ˈnoʊtɪs/ /ʌnˈtɪl/ /juːv/ /ˈæktʃuəli/ /ˈkɑːnʃəsli/ /ænd; ənd/ /ˌsʌbˈkɑːnʃəsli/"
  },
  {
    "id": "103",
    "sentence": "experienced something",
    "chinese": "经历过某事",
    "pronunciation": "/ɪkˈspɪriənst/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "104",
    "sentence": "It sounds a bit contradictory , but you can't notice until you've actually consciously and subconsciously experienced something",
    "chinese": "这听起来有点矛盾，但只有在你真正有意识和无意识地经历过某事后，你才能注意到",
    "pronunciation": "/ɪt/ /saʊndz/ /ə; eɪ/ /bɪt/ /ˌkɑːntrəˈdɪktəri/ /bʌt/ /juː; jʊ/ /kænt/ /ˈnoʊtɪs/ /ʌnˈtɪl/ /juːv/ /ˈæktʃuəli/ /ˈkɑːnʃəsli/ /ænd; ənd/ /ˌsʌbˈkɑːnʃəsli/ /ɪkˈspɪriənst/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "105",
    "sentence": "So , hopefully",
    "chinese": "所以，希望",
    "pronunciation": "/soʊ/ /ˈhoʊpfəli/"
  },
  {
    "id": "106",
    "sentence": "you are spending a lot of time",
    "chinese": "你花了很多时间",
    "pronunciation": "/juː; jʊ/ /ɑr/ /ˈspendɪŋ/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/"
  },
  {
    "id": "107",
    "sentence": "So , hopefully , you are spending a lot of time",
    "chinese": "所以，希望你花了很多时间",
    "pronunciation": "/soʊ/ /ˈhoʊpfəli/ /juː; jʊ/ /ɑr/ /ˈspendɪŋ/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/"
  },
  {
    "id": "108",
    "sentence": "gaining that exposure",
    "chinese": "获得那种接触",
    "pronunciation": "/ˈɡeɪnɪŋ/ /ðæt/ /ɪkˈspoʊʒər/"
  },
  {
    "id": "109",
    "sentence": "So , hopefully , you are spending a lot of time gaining that exposure",
    "chinese": "所以，希望你花了很多时间来接触这门语言",
    "pronunciation": "/soʊ/ /ˈhoʊpfəli/ /juː; jʊ/ /ɑr/ /ˈspendɪŋ/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ˈɡeɪnɪŋ/ /ðæt/ /ɪkˈspoʊʒər/"
  },
  {
    "id": "110",
    "sentence": "to the language",
    "chinese": "这门语言",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "111",
    "sentence": "So , hopefully , you are spending a lot of time gaining that exposure to the language",
    "chinese": "所以，希望你花了很多时间来接触这门语言",
    "pronunciation": "/soʊ/ /ˈhoʊpfəli/ /juː; jʊ/ /ɑr/ /ˈspendɪŋ/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ˈɡeɪnɪŋ/ /ðæt/ /ɪkˈspoʊʒər/ /tuː; tə/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "112",
    "sentence": "Now",
    "chinese": "现在",
    "pronunciation": "/naʊ/"
  },
  {
    "id": "113",
    "sentence": "how do you start",
    "chinese": "你是如何开始",
    "pronunciation": "/haʊ/ /duː; də/ /juː; jʊ/ /stɑːrt/"
  },
  {
    "id": "114",
    "sentence": "Now , how do you start",
    "chinese": "那么，你是如何开始",
    "pronunciation": "/naʊ/ /haʊ/ /duː; də/ /juː; jʊ/ /stɑːrt/"
  },
  {
    "id": "115",
    "sentence": "noticing",
    "chinese": "注意到",
    "pronunciation": "/ˈnoʊtɪsɪŋ/"
  },
  {
    "id": "116",
    "sentence": "Now , how do you start noticing ?",
    "chinese": "那么，你是如何开始注意到的呢？",
    "pronunciation": "/naʊ/ /haʊ/ /duː; də/ /juː; jʊ/ /stɑːrt/ /ˈnoʊtɪsɪŋ/"
  },
  {
    "id": "117",
    "sentence": "There are a number of things",
    "chinese": "有一些事情",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /θɪŋz/"
  },
  {
    "id": "118",
    "sentence": "that can help you notice",
    "chinese": "可以帮助你注意到",
    "pronunciation": "/ðæt/ /kæn/ /help/ /juː; jʊ/ /ˈnoʊtɪs/"
  },
  {
    "id": "119",
    "sentence": "There are a number of things that can help you notice",
    "chinese": "有一些方法可以帮助你注意到",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /θɪŋz/ /ðæt/ /kæn/ /help/ /juː; jʊ/ /ˈnoʊtɪs/"
  },
  {
    "id": "120",
    "sentence": "First of all",
    "chinese": "首先",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/"
  },
  {
    "id": "121",
    "sentence": "you have to want",
    "chinese": "你必须想要",
    "pronunciation": "/juː; jʊ/ /hæv/ /tuː; tə/ /wɑːnt/"
  },
  {
    "id": "122",
    "sentence": "First of all , you have to want",
    "chinese": "首先，你必须想要",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /juː; jʊ/ /hæv/ /tuː; tə/ /wɑːnt/"
  },
  {
    "id": "123",
    "sentence": "to notice",
    "chinese": "注意到",
    "pronunciation": "/tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "124",
    "sentence": "First of all , you have to want to notice",
    "chinese": "首先，你必须想要注意到",
    "pronunciation": "/fɜːrst/ /ʌv/ /ɔːl/ /juː; jʊ/ /hæv/ /tuː; tə/ /wɑːnt/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "125",
    "sentence": "So if I'm reading",
    "chinese": "所以如果我在阅读",
    "pronunciation": "/soʊ/ /ɪf/ /aɪm/ /ˈriːdɪŋ/"
  },
  {
    "id": "126",
    "sentence": "I'll often underline",
    "chinese": "我经常会划下",
    "pronunciation": "/aɪl/ /ˈɔːf(ə)n/ /ˌʌndərˈlaɪn/"
  },
  {
    "id": "127",
    "sentence": "So if I'm reading , I'll often underline",
    "chinese": "所以如果我在阅读，我经常会划下",
    "pronunciation": "/soʊ/ /ɪf/ /aɪm/ /ˈriːdɪŋ/ /aɪl/ /ˈɔːf(ə)n/ /ˌʌndərˈlaɪn/"
  },
  {
    "id": "128",
    "sentence": "certain expressions",
    "chinese": "某些表达",
    "pronunciation": "/ˈsɜːrt(ə)n/ /ɪkˈsprɛʃnz/"
  },
  {
    "id": "129",
    "sentence": "So if I'm reading , I'll often underline certain expressions",
    "chinese": "所以如果我在阅读，我经常会划下某些表达",
    "pronunciation": "/soʊ/ /ɪf/ /aɪm/ /ˈriːdɪŋ/ /aɪl/ /ˈɔːf(ə)n/ /ˌʌndərˈlaɪn/ /ˈsɜːrt(ə)n/ /ɪkˈsprɛʃnz/"
  },
  {
    "id": "130",
    "sentence": "or words",
    "chinese": "或词语",
    "pronunciation": "/ɔr/ /wɜːrdz/"
  },
  {
    "id": "131",
    "sentence": "So if I'm reading , I'll often underline certain expressions or words",
    "chinese": "所以如果我在阅读，我经常会划下某些表达或词语",
    "pronunciation": "/soʊ/ /ɪf/ /aɪm/ /ˈriːdɪŋ/ /aɪl/ /ˈɔːf(ə)n/ /ˌʌndərˈlaɪn/ /ˈsɜːrt(ə)n/ /ɪkˈsprɛʃnz/ /ɔr/ /wɜːrdz/"
  },
  {
    "id": "132",
    "sentence": "If I'm reading at LingQ",
    "chinese": "如果我在LingQ上阅读",
    "pronunciation": "/ɪf/ /aɪm/ /ˈriːdɪŋ/ /æt; ət/ /lɪŋk/"
  },
  {
    "id": "133",
    "sentence": "I will save words",
    "chinese": "我将保存单词",
    "pronunciation": "/aɪ/ /wɪl/ /seɪv/ /wɜːrdz/"
  },
  {
    "id": "134",
    "sentence": "If I'm reading at LingQ , I will save words",
    "chinese": "如果我在LingQ上阅读，我会保存单词",
    "pronunciation": "/ɪf/ /aɪm/ /ˈriːdɪŋ/ /æt; ət/ /lɪŋk/ /aɪ/ /wɪl/ /seɪv/ /wɜːrdz/"
  },
  {
    "id": "135",
    "sentence": "and phrases",
    "chinese": "和短语",
    "pronunciation": "/ænd; ənd/ /freɪzɪz/"
  },
  {
    "id": "136",
    "sentence": "If I'm reading at LingQ , I will save words and phrases",
    "chinese": "如果我在LingQ上阅读，我会保存单词和短语",
    "pronunciation": "/ɪf/ /aɪm/ /ˈriːdɪŋ/ /æt; ət/ /lɪŋk/ /aɪ/ /wɪl/ /seɪv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/"
  },
  {
    "id": "137",
    "sentence": "to my personal database",
    "chinese": "到我的个人数据库中",
    "pronunciation": "/tuː; tə/ /maɪ/ /ˈpɜːrsən(ə)l/ /ˈdeɪtəbeɪs/"
  },
  {
    "id": "138",
    "sentence": "If I'm reading at LingQ , I will save words and phrases to my personal database",
    "chinese": "如果我在LingQ上阅读，我会将单词和短语保存到我的个人数据库中",
    "pronunciation": "/ɪf/ /aɪm/ /ˈriːdɪŋ/ /æt; ət/ /lɪŋk/ /aɪ/ /wɪl/ /seɪv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /tuː; tə/ /maɪ/ /ˈpɜːrsən(ə)l/ /ˈdeɪtəbeɪs/"
  },
  {
    "id": "139",
    "sentence": "Just the act of saving them",
    "chinese": "仅仅是保存它们的行为",
    "pronunciation": "/dʒʌst/ /ðə/ /ækt/ /ʌv/ /ˈseɪvɪŋ/ /ðem; ðəm/"
  },
  {
    "id": "140",
    "sentence": "helps me notice",
    "chinese": "帮助我注意到",
    "pronunciation": "/help스/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "141",
    "sentence": "Just the act of saving them helps me notice",
    "chinese": "仅仅是保存它们的行为就帮助我注意到",
    "pronunciation": "/dʒʌst/ /ðə/ /ækt/ /ʌv/ /ˈseɪvɪŋ/ /ðem; ðəm/ /help스/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "142",
    "sentence": "Now , when I review these",
    "chinese": "现在，当我复习这些内容时",
    "pronunciation": "/naʊ/ /wen/ /aɪ/ /rɪˈvjuː/ /ðiːz/"
  },
  {
    "id": "143",
    "sentence": "in flashcards",
    "chinese": "用闪卡",
    "pronunciation": "/ɪn/ /ˈflæʃkɑrdz/"
  },
  {
    "id": "144",
    "sentence": "Now , when I review these in flashcards",
    "chinese": "现在，当我用闪卡复习这些内容时",
    "pronunciation": "/naʊ/ /wen/ /aɪ/ /rɪˈvjuː/ /ðiːz/ /ɪn/ /ˈflæʃkɑrdz/"
  },
  {
    "id": "145",
    "sentence": "that again helps me notice",
    "chinese": "这再次帮助我注意到",
    "pronunciation": "/ðæt/ /əˈɡen/ /help스/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "146",
    "sentence": "Now , when I review these in flashcards that again helps me notice",
    "chinese": "现在，当我用闪卡复习这些内容时，这再次帮助我注意到",
    "pronunciation": "/naʊ/ /wen/ /aɪ/ /rɪˈvjuː/ /ðiːz/ /ɪn/ /ˈflæʃkɑrdz/ /ðæt/ /əˈɡen/ /help스/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "147",
    "sentence": "It's not because",
    "chinese": "并不是因为",
    "pronunciation": "/ɪts/ /nɑːt/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "148",
    "sentence": "I review them in flashcards",
    "chinese": "我用闪卡复习它们",
    "pronunciation": "/aɪ/ /rɪˈvjuː/ /ðem; ðəm/ /ɪn/ /ˈflæʃkɑrdz/"
  },
  {
    "id": "149",
    "sentence": "It's not because I review them in flashcards",
    "chinese": "并不是因为我用闪卡复习了",
    "pronunciation": "/ɪts/ /nɑːt/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /rɪˈvjuː/ /ðem; ðəm/ /ɪn/ /ˈflæʃkɑrdz/"
  },
  {
    "id": "150",
    "sentence": "that I'm going to remember them",
    "chinese": "我会记住它们",
    "pronunciation": "/ðæt/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /rɪˈmembər/ /ðem; ðəm/"
  },
  {
    "id": "151",
    "sentence": "It's not because I review them in flashcards that I'm going to remember them",
    "chinese": "并不是因为我用闪卡复习了，我就会记住它们",
    "pronunciation": "/ɪts/ /nɑːt/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /rɪˈvjuː/ /ðem; ðəm/ /ɪn/ /ˈflæʃkɑrdz/ /ðæt/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /rɪˈmembər/ /ðem; ðəm/"
  },
  {
    "id": "152",
    "sentence": "I won't necessarily remember them",
    "chinese": "我不一定会记住它们",
    "pronunciation": "/aɪ/ /woʊnt/ /ˌnɛsəˈsɛrəli/ /rɪˈmembər/ /ðem; ðəm/"
  },
  {
    "id": "153",
    "sentence": "It's not because I review them in flashcards that I'm going to remember them , I won't necessarily remember them",
    "chinese": "并不是因为我用闪卡复习了，我就会记住它们，我不一定会记住它们",
    "pronunciation": "/ɪts/ /nɑːt/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /rɪˈvjuː/ /ðem; ðəm/ /ɪn/ /ˈflæʃkɑrdz/ /ðæt/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /rɪˈmembər/ /ðem; ðəm/ /aɪ/ /woʊnt/ /ˌnɛsəˈsɛrəli/ /rɪˈmembər/ /ðem; ðəm/"
  },
  {
    "id": "154",
    "sentence": "Some words I'll remember",
    "chinese": "有些词我会记住",
    "pronunciation": "/sʌm; səm/ /wɜːrdz/ /aɪl/ /rɪˈmembər/"
  },
  {
    "id": "155",
    "sentence": "some I won't",
    "chinese": "有些则不会",
    "pronunciation": "/sʌm; səm/ /aɪ/ /woʊnt/"
  },
  {
    "id": "156",
    "sentence": "Some words I'll remember , some I won't",
    "chinese": "有些词我会记住，有些则不会",
    "pronunciation": "/sʌm; səm/ /wɜːrdz/ /aɪl/ /rɪˈmembər/ /sʌm; səm/ /aɪ/ /woʊnt/"
  },
  {
    "id": "157",
    "sentence": "but it's all",
    "chinese": "但这一切都在",
    "pronunciation": "/bʌt/ /ɪts/ /ɔːl/"
  },
  {
    "id": "158",
    "sentence": "Some words I'll remember , some I won't , but it's all",
    "chinese": "有些词我会记住，有些则不会，但这一切都在",
    "pronunciation": "/sʌm; səm/ /wɜːrdz/ /aɪl/ /rɪˈmembər/ /sʌm; səm/ /aɪ/ /woʊnt/ /bʌt/ /ɪts/ /ɔːl/"
  },
  {
    "id": "159",
    "sentence": "slowly building up",
    "chinese": "慢慢培养",
    "pronunciation": "/ˈsloʊli/ /ˈbɪldɪŋ/ /ʌp/"
  },
  {
    "id": "160",
    "sentence": "Some words I'll remember , some I won't , but it's all slowly building up",
    "chinese": "有些词我会记住，有些则不会，但这一切都在慢慢培养",
    "pronunciation": "/sʌm; səm/ /wɜːrdz/ /aɪl/ /rɪˈmembər/ /sʌm; səm/ /aɪ/ /woʊnt/ /bʌt/ /ɪts/ /ɔːl/ /ˈsloʊli/ /ˈbɪldɪŋ/ /ʌp/"
  },
  {
    "id": "161",
    "sentence": "this ability to notice",
    "chinese": "这种注意的能力",
    "pronunciation": "/ðɪs/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "162",
    "sentence": "Some words I'll remember , some I won't , but it's all slowly building up this ability to notice",
    "chinese": "有些词我会记住，有些则不会，但这一切都在慢慢培养我注意的能力",
    "pronunciation": "/sʌm; səm/ /wɜːrdz/ /aɪl/ /rɪˈmembər/ /sʌm; səm/ /aɪ/ /woʊnt/ /bʌt/ /ɪts/ /ɔːl/ /ˈsloʊli/ /ˈbɪldɪŋ/ /ʌp/ /ðɪs/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "163",
    "sentence": "If I'm corrected",
    "chinese": "如果我被纠正",
    "pronunciation": "/ɪf/ /aɪm/ /kəˈrektɪd/"
  },
  {
    "id": "164",
    "sentence": "it may help me",
    "chinese": "这可能会帮助我",
    "pronunciation": "/ɪt/ /meɪ/ /help/ /miː/"
  },
  {
    "id": "165",
    "sentence": "If I'm corrected it may help me",
    "chinese": "如果我被纠正，这可能会帮助我",
    "pronunciation": "/ɪf/ /aɪm/ /kəˈrektɪd/ /ɪt/ /meɪ/ /help/ /miː/"
  },
  {
    "id": "166",
    "sentence": "notice",
    "chinese": "注意到",
    "pronunciation": "/ˈnoʊtɪs/"
  },
  {
    "id": "167",
    "sentence": "If I'm corrected it may help me notice",
    "chinese": "如果我被纠正，这可能会帮助我注意到",
    "pronunciation": "/ɪf/ /aɪm/ /kəˈrektɪd/ /ɪt/ /meɪ/ /help/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "168",
    "sentence": "It may not",
    "chinese": "它可能不会",
    "pronunciation": "/ɪt/ /meɪ/ /nɑːt/"
  },
  {
    "id": "169",
    "sentence": "but it certainly won't",
    "chinese": "但它肯定不会",
    "pronunciation": "/bʌt/ /ɪt/ /ˈsɜːrt(ə)nli/ /woʊnt/"
  },
  {
    "id": "170",
    "sentence": "It may not , but it certainly won't",
    "chinese": "它可能不会，但它肯定不会",
    "pronunciation": "/ɪt/ /meɪ/ /nɑːt/ /bʌt/ /ɪt/ /ˈsɜːrt(ə)nli/ /woʊnt/"
  },
  {
    "id": "171",
    "sentence": "necessarily correct me",
    "chinese": "必然纠正我",
    "pronunciation": "/ˌnɛsəˈsɛrəli/ /kəˈrekt/ /miː/"
  },
  {
    "id": "172",
    "sentence": "It may not , but it certainly won't necessarily correct me",
    "chinese": "它可能不会，但它肯定不会必然纠正我",
    "pronunciation": "/ɪt/ /meɪ/ /nɑːt/ /bʌt/ /ɪt/ /ˈsɜːrt(ə)nli/ /woʊnt/ /ˌnɛsəˈsɛrəli/ /kəˈrekt/ /miː/"
  },
  {
    "id": "173",
    "sentence": "Maybe an explanation",
    "chinese": "或许一个解释",
    "pronunciation": "/ˈmeɪbi/ /æn; ən/ /ˌekspləˈneɪʃn/"
  },
  {
    "id": "174",
    "sentence": "from a teacher",
    "chinese": "来自老师的",
    "pronunciation": "/frʌm/ /ə; eɪ/ /ˈtiːtʃər/"
  },
  {
    "id": "175",
    "sentence": "Maybe an explanation from a teacher",
    "chinese": "或许老师的解释",
    "pronunciation": "/ˈmeɪbi/ /æn; ən/ /ˌekspləˈneɪʃn/ /frʌm/ /ə; eɪ/ /ˈtiːtʃər/"
  },
  {
    "id": "176",
    "sentence": "or an explanation",
    "chinese": "或一个解释",
    "pronunciation": "/ɔr/ /æn; ən/ /ˌekspləˈneɪʃn/"
  },
  {
    "id": "177",
    "sentence": "Maybe an explanation from a teacher or an explanation",
    "chinese": "或许老师的解释或解释",
    "pronunciation": "/ˈmeɪbi/ /æn; ən/ /ˌekspləˈneɪʃn/ /frʌm/ /ə; eɪ/ /ˈtiːtʃər/ /ɔr/ /æn; ən/ /ˌekspləˈneɪʃn/"
  },
  {
    "id": "178",
    "sentence": "in a grammar book",
    "chinese": "在语法书中",
    "pronunciation": "/ɪn/ /ə; eɪ/ /ˈɡræmər/ /bʊk/"
  },
  {
    "id": "179",
    "sentence": "Maybe an explanation from a teacher or an explanation in a grammar book",
    "chinese": "或许老师的解释或语法书中的解释",
    "pronunciation": "/ˈmeɪbi/ /æn; ən/ /ˌekspləˈneɪʃn/ /frʌm/ /ə; eɪ/ /ˈtiːtʃər/ /ɔr/ /æn; ən/ /ˌekspləˈneɪʃn/ /ɪn/ /ə; eɪ/ /ˈɡræmər/ /bʊk/"
  },
  {
    "id": "180",
    "sentence": "will help me notice",
    "chinese": "会帮助我注意到",
    "pronunciation": "/wɪl/ /help/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "181",
    "sentence": "Maybe an explanation from a teacher or an explanation in a grammar book will help me notice",
    "chinese": "或许老师的解释或语法书中的解释能帮助我注意到这一点",
    "pronunciation": "/ˈmeɪbi/ /æn; ən/ /ˌekspləˈneɪʃn/ /frʌm/ /ə; eɪ/ /ˈtiːtʃər/ /ɔr/ /æn; ən/ /ˌekspləˈneɪʃn/ /ɪn/ /ə; eɪ/ /ˈɡræmər/ /bʊk/ /wɪl/ /help/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "182",
    "sentence": "That's why",
    "chinese": "这就是为什么",
    "pronunciation": "/ðæts/ /waɪ/"
  },
  {
    "id": "183",
    "sentence": "I often review grammar books",
    "chinese": "我经常复习语法书",
    "pronunciation": "/aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/"
  },
  {
    "id": "184",
    "sentence": "That's why I often review grammar books",
    "chinese": "这就是为什么我经常复习语法书",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/"
  },
  {
    "id": "185",
    "sentence": "very quickly",
    "chinese": "非常快地",
    "pronunciation": "/ˈveri/ /ˈkwɪkli/"
  },
  {
    "id": "186",
    "sentence": "That's why I often review grammar books very quickly",
    "chinese": "这就是为什么我经常快速复习语法书",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/"
  },
  {
    "id": "187",
    "sentence": "again",
    "chinese": "再次强调",
    "pronunciation": "/əˈɡen/"
  },
  {
    "id": "188",
    "sentence": "That's why I often review grammar books very quickly , again",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/"
  },
  {
    "id": "189",
    "sentence": "not with the intention",
    "chinese": "不是出于意图",
    "pronunciation": "/nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/"
  },
  {
    "id": "190",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则或动词结尾",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/"
  },
  {
    "id": "191",
    "sentence": "or the hope",
    "chinese": "或希望",
    "pronunciation": "/ɔr/ /ðə/ /hoʊp/"
  },
  {
    "id": "192",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则或动词结尾",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/"
  },
  {
    "id": "193",
    "sentence": "that I'll remember",
    "chinese": "我会记住",
    "pronunciation": "/ðæt/ /aɪl/ /rɪˈmembər/"
  },
  {
    "id": "194",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope that I'll remember",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/ /ðæt/ /aɪl/ /rɪˈmembər/"
  },
  {
    "id": "195",
    "sentence": "a particular rule",
    "chinese": "某个特定的规则",
    "pronunciation": "/ə; eɪ/ /pərˈtɪkjələr/ /ruːl/"
  },
  {
    "id": "196",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope that I'll remember a particular rule",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/ /ðæt/ /aɪl/ /rɪˈmembər/ /ə; eɪ/ /pərˈtɪkjələr/ /ruːl/"
  },
  {
    "id": "197",
    "sentence": "or a particular verb ending",
    "chinese": "或某个特定的动词结尾",
    "pronunciation": "/ɔr/ /ə; eɪ/ /pərˈtɪkjələr/ /vɜːrb/ /ˈendɪŋ/"
  },
  {
    "id": "198",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope that I'll remember a particular rule or a particular verb ending",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则或动词结尾",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/ /ðæt/ /aɪl/ /rɪˈmembər/ /ə; eɪ/ /pərˈtɪkjələr/ /ruːl/ /ɔr/ /ə; eɪ/ /pərˈtɪkjələr/ /vɜːrb/ /ˈendɪŋ/"
  },
  {
    "id": "199",
    "sentence": "but because",
    "chinese": "而是因为",
    "pronunciation": "/bʌt/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "200",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope that I'll remember a particular rule or a particular verb ending , but because",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则或动词结尾，而是因为",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/ /ðæt/ /aɪl/ /rɪˈmembər/ /ə; eɪ/ /pərˈtɪkjələr/ /ruːl/ /ɔr/ /ə; eɪ/ /pərˈtɪkjələr/ /vɜːrb/ /ˈendɪŋ/ /bʌt/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "201",
    "sentence": "it's just that process",
    "chinese": "就是这个过程",
    "pronunciation": "/ɪts/ /dʒʌst/ /ðæt/ /ˈprɑːses/"
  },
  {
    "id": "202",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope that I'll remember a particular rule or a particular verb ending , but because it's just that process",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则或动词结尾，而是因为这个过程",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/ /ðæt/ /aɪl/ /rɪˈmembər/ /ə; eɪ/ /pərˈtɪkjələr/ /ruːl/ /ɔr/ /ə; eɪ/ /pərˈtɪkjələr/ /vɜːrb/ /ˈendɪŋ/ /bʌt/ /bɪˈkəz, bɪˈkɔːz/ /ɪts/ /dʒʌst/ /ðæt/ /ˈprɑːses/"
  },
  {
    "id": "203",
    "sentence": "that continuous cumulative process",
    "chinese": "这个持续累积的过程",
    "pronunciation": "/ðæt/ /kənˈtɪnjuəs/ /ˈkjuːmjəleɪtɪv/ /ˈprɑːses/"
  },
  {
    "id": "204",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope that I'll remember a particular rule or a particular verb ending , but because it's just that process , that continuous cumulative process",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则或动词结尾，而是因为这个过程，这个持续累积的过程",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/ /ðæt/ /aɪl/ /rɪˈmembər/ /ə; eɪ/ /pərˈtɪkjələr/ /ruːl/ /ɔr/ /ə; eɪ/ /pərˈtɪkjələr/ /vɜːrb/ /ˈendɪŋ/ /bʌt/ /bɪˈkəz, bɪˈkɔːz/ /ɪts/ /dʒʌst/ /ðæt/ /ˈprɑːses/ /ðæt/ /kənˈtɪnjuəs/ /ˈkjuːmjəleɪtɪv/ /ˈprɑːses/"
  },
  {
    "id": "205",
    "sentence": "of getting me",
    "chinese": "让我",
    "pronunciation": "/ʌv/ /ˈɡetɪŋ/ /miː/"
  },
  {
    "id": "206",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope that I'll remember a particular rule or a particular verb ending , but because it's just that process , that continuous cumulative process of getting me",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则或动词结尾，而是因为这个过程，这个持续累积的过程让我注意到某些东西",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/ /ðæt/ /aɪl/ /rɪˈmembər/ /ə; eɪ/ /pərˈtɪkjələr/ /ruːl/ /ɔr/ /ə; eɪ/ /pərˈtɪkjələr/ /vɜːrb/ /ˈendɪŋ/ /bʌt/ /bɪˈkəz, bɪˈkɔːz/ /ɪts/ /dʒʌst/ /ðæt/ /ˈprɑːses/ /ðæt/ /kənˈtɪnjuəs/ /ˈkjuːmjəleɪtɪv/ /ˈprɑːses/ /ʌv/ /ˈɡetɪŋ/ /miː/"
  },
  {
    "id": "207",
    "sentence": "to notice certain things",
    "chinese": "注意到某些东西",
    "pronunciation": "/tuː; tə/ /ˈnoʊtɪs/ /ˈsɜːrt(ə)n/ /θɪŋz/"
  },
  {
    "id": "208",
    "sentence": "That's why I often review grammar books very quickly , again , not with the intention or the hope that I'll remember a particular rule or a particular verb ending , but because it's just that process , that continuous cumulative process of getting me to notice certain things",
    "chinese": "这就是为什么我经常快速复习语法书，再次强调，并不是为了记住某个特定的规则或动词结尾，而是因为这个过程，这个持续累积的过程让我注意到某些东西",
    "pronunciation": "/ðæts/ /waɪ/ /aɪ/ /ˈɔːf(ə)n/ /rɪˈvjuː/ /ˈɡræmər/ /bʊks/ /ˈveri/ /ˈkwɪkli/ /əˈɡen/ /nɑːt/ /wɪð; wɪθ/ /ðə/ /ɪnˈtenʃ(ə)n/ /ɔr/ /ðə/ /hoʊp/ /ðæt/ /aɪl/ /rɪˈmembər/ /ə; eɪ/ /pərˈtɪkjələr/ /ruːl/ /ɔr/ /ə; eɪ/ /pərˈtɪkjələr/ /vɜːrb/ /ˈendɪŋ/ /bʌt/ /bɪˈkəz, bɪˈkɔːz/ /ɪts/ /dʒʌst/ /ðæt/ /ˈprɑːses/ /ðæt/ /kənˈtɪnjuəs/ /ˈkjuːmjəleɪtɪv/ /ˈprɑːses/ /ʌv/ /ˈɡetɪŋ/ /miː/ /tuː; tə/ /ˈnoʊtɪs/ /ˈsɜːrt(ə)n/ /θɪŋz/"
  },
  {
    "id": "209",
    "sentence": "Once I notice something",
    "chinese": "一旦我注意到某件事",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/"
  },
  {
    "id": "210",
    "sentence": "let's say it was a correction",
    "chinese": "比如说它是一个修正",
    "pronunciation": "/lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/"
  },
  {
    "id": "211",
    "sentence": "Once I notice something , let's say it was a correction",
    "chinese": "一旦我注意到某件事，比如说它是一个修正",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/ /lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/"
  },
  {
    "id": "212",
    "sentence": "in my writing",
    "chinese": "在我的写作中",
    "pronunciation": "/ɪn/ /maɪ/ /ˈraɪtɪŋ/"
  },
  {
    "id": "213",
    "sentence": "Once I notice something , let's say it was a correction in my writing",
    "chinese": "一旦我注意到某件事，比如说我在写作中的一个修正",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/ /lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/ /ɪn/ /maɪ/ /ˈraɪtɪŋ/"
  },
  {
    "id": "214",
    "sentence": "and then I look for it",
    "chinese": "然后我会特别留意它",
    "pronunciation": "/ænd; ənd/ /ðen/ /aɪ/ /lʊk/ /fɔːr; fər/ /ɪt/"
  },
  {
    "id": "215",
    "sentence": "Once I notice something , let's say it was a correction in my writing and then I look for it",
    "chinese": "一旦我注意到某件事，比如说我在写作中的一个修正，然后我就会特别留意它",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/ /lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/ /ɪn/ /maɪ/ /ˈraɪtɪŋ/ /ænd; ənd/ /ðen/ /aɪ/ /lʊk/ /fɔːr; fər/ /ɪt/"
  },
  {
    "id": "216",
    "sentence": "when I'm reading",
    "chinese": "当我阅读时",
    "pronunciation": "/wen/ /aɪm/ /ˈriːdɪŋ/"
  },
  {
    "id": "217",
    "sentence": "Once I notice something , let's say it was a correction in my writing and then I look for it when I'm reading",
    "chinese": "一旦我注意到某件事，比如说我在写作中的一个修正，然后我在阅读时就会特别留意它",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/ /lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/ /ɪn/ /maɪ/ /ˈraɪtɪŋ/ /ænd; ənd/ /ðen/ /aɪ/ /lʊk/ /fɔːr; fər/ /ɪt/ /wen/ /aɪm/ /ˈriːdɪŋ/"
  },
  {
    "id": "218",
    "sentence": "or when I hear the language",
    "chinese": "或者当我听到这种语言时",
    "pronunciation": "/ɔr/ /wen/ /aɪ/ /hɪr/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "219",
    "sentence": "Once I notice something , let's say it was a correction in my writing and then I look for it when I'm reading or when I hear the language",
    "chinese": "一旦我注意到某件事，比如说我在写作中的一个修正，然后我在阅读或听到这种语言时就会特别留意它",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/ /lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/ /ɪn/ /maɪ/ /ˈraɪtɪŋ/ /ænd; ənd/ /ðen/ /aɪ/ /lʊk/ /fɔːr; fər/ /ɪt/ /wen/ /aɪm/ /ˈriːdɪŋ/ /ɔr/ /wen/ /aɪ/ /hɪr/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "220",
    "sentence": "all of a sudden",
    "chinese": "突然间",
    "pronunciation": "/ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "221",
    "sentence": "Once I notice something , let's say it was a correction in my writing and then I look for it when I'm reading or when I hear the language , all of a sudden",
    "chinese": "一旦我注意到某件事，比如说我在写作中的一个修正，然后我在阅读或听到这种语言时就会特别留意它，突然间",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/ /lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/ /ɪn/ /maɪ/ /ˈraɪtɪŋ/ /ænd; ənd/ /ðen/ /aɪ/ /lʊk/ /fɔːr; fər/ /ɪt/ /wen/ /aɪm/ /ˈriːdɪŋ/ /ɔr/ /wen/ /aɪ/ /hɪr/ /ðə/ /ˈlæŋɡwɪdʒ/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/"
  },
  {
    "id": "222",
    "sentence": "I start to notice these things",
    "chinese": "我开始注意到这些事情",
    "pronunciation": "/aɪ/ /stɑːrt/ /tuː; tə/ /ˈnoʊtɪs/ /ðiːz/ /θɪŋz/"
  },
  {
    "id": "223",
    "sentence": "Once I notice something , let's say it was a correction in my writing and then I look for it when I'm reading or when I hear the language , all of a sudden I start to notice these things",
    "chinese": "一旦我注意到某件事，比如说我在写作中的一个修正，然后我在阅读或听到这种语言时就会特别留意它，突然间我开始注意到这些事情",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/ /lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/ /ɪn/ /maɪ/ /ˈraɪtɪŋ/ /ænd; ənd/ /ðen/ /aɪ/ /lʊk/ /fɔːr; fər/ /ɪt/ /wen/ /aɪm/ /ˈriːdɪŋ/ /ɔr/ /wen/ /aɪ/ /hɪr/ /ðə/ /ˈlæŋɡwɪdʒ/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /aɪ/ /stɑːrt/ /tuː; tə/ /ˈnoʊtɪs/ /ðiːz/ /θɪŋz/"
  },
  {
    "id": "224",
    "sentence": "everywhere",
    "chinese": "各处",
    "pronunciation": "/ˈɛvriwɛr/"
  },
  {
    "id": "225",
    "sentence": "Once I notice something , let's say it was a correction in my writing and then I look for it when I'm reading or when I hear the language , all of a sudden I start to notice these things everywhere",
    "chinese": "一旦我注意到某件事，比如说我在写作中的一个修正，然后我在阅读或听到这种语言时就会特别留意它，突然间我开始在各处注意到这些事情",
    "pronunciation": "/wʌns/ /aɪ/ /ˈnoʊtɪs/ /ˈsʌmθɪŋ/ /lets/ /seɪ/ /ɪt/ /wʌz; wəz/ /ə; eɪ/ /kəˈrekʃn/ /ɪn/ /maɪ/ /ˈraɪtɪŋ/ /ænd; ənd/ /ðen/ /aɪ/ /lʊk/ /fɔːr; fər/ /ɪt/ /wen/ /aɪm/ /ˈriːdɪŋ/ /ɔr/ /wen/ /aɪ/ /hɪr/ /ðə/ /ˈlæŋɡwɪdʒ/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /aɪ/ /stɑːrt/ /tuː; tə/ /ˈnoʊtɪs/ /ðiːz/ /θɪŋz/ /ˈɛvriwɛr/"
  },
  {
    "id": "226",
    "sentence": "As we notice things",
    "chinese": "当我们注意到事物时",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/"
  },
  {
    "id": "227",
    "sentence": "in the language",
    "chinese": "在语言中",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "228",
    "sentence": "As we notice things in the language",
    "chinese": "当我们注意到语言中的事物时",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "229",
    "sentence": "they become a part of us",
    "chinese": "它们成为了我们的一部分",
    "pronunciation": "/ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/"
  },
  {
    "id": "230",
    "sentence": "As we notice things in the language they become a part of us",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/"
  },
  {
    "id": "231",
    "sentence": "and pretty soon",
    "chinese": "而且很快",
    "pronunciation": "/ænd; ənd/ /ˈprɪti/ /sun/"
  },
  {
    "id": "232",
    "sentence": "As we notice things in the language they become a part of us and pretty soon",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分，很快",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/ /ænd; ənd/ /ˈprɪti/ /sun/"
  },
  {
    "id": "233",
    "sentence": "because we've noticed it here",
    "chinese": "因为我们在这里注意到了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /wɪv/ /ˈnoʊtɪst/ /ɪt/ /hɪr/"
  },
  {
    "id": "234",
    "sentence": "As we notice things in the language they become a part of us and pretty soon because we've noticed it here",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分，很快，因为我们在这里注意到了",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/ /ænd; ənd/ /ˈprɪti/ /sun/ /bɪˈkəz, bɪˈkɔːz/ /wɪv/ /ˈnoʊtɪst/ /ɪt/ /hɪr/"
  },
  {
    "id": "235",
    "sentence": "and noticed it there",
    "chinese": "并且在那里也注意到了",
    "pronunciation": "/ænd; ənd/ /ˈnoʊtɪst/ /ɪt/ /ðer; ðər/"
  },
  {
    "id": "236",
    "sentence": "As we notice things in the language they become a part of us and pretty soon because we've noticed it here and noticed it there",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分，很快，因为我们在这里注意到了，在那里也注意到了",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/ /ænd; ənd/ /ˈprɪti/ /sun/ /bɪˈkəz, bɪˈkɔːz/ /wɪv/ /ˈnoʊtɪst/ /ɪt/ /hɪr/ /ænd; ənd/ /ˈnoʊtɪst/ /ɪt/ /ðer; ðər/"
  },
  {
    "id": "237",
    "sentence": "suddenly automatically",
    "chinese": "突然间自然而然地",
    "pronunciation": "/ˈsʌd(ə)nli/ /ˌɔːtəˈmætɪkli/"
  },
  {
    "id": "238",
    "sentence": "As we notice things in the language they become a part of us and pretty soon because we've noticed it here and noticed it there , suddenly automatically",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分，很快，因为我们在这里注意到了，在那里也注意到了，突然间，我们自然而然地",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/ /ænd; ənd/ /ˈprɪti/ /sun/ /bɪˈkəz, bɪˈkɔːz/ /wɪv/ /ˈnoʊtɪst/ /ɪt/ /hɪr/ /ænd; ənd/ /ˈnoʊtɪst/ /ɪt/ /ðer; ðər/ /ˈsʌd(ə)nli/ /ˌɔːtəˈmætɪkli/"
  },
  {
    "id": "239",
    "sentence": "we start using these words",
    "chinese": "我们开始使用这些词汇",
    "pronunciation": "/wiː; wi/ /stɑːrt/ /ˈjuːzɪŋ/ /ðiːz/ /wɜːrdz/"
  },
  {
    "id": "240",
    "sentence": "As we notice things in the language they become a part of us and pretty soon because we've noticed it here and noticed it there , suddenly automatically we start using these words",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分，很快，因为我们在这里注意到了，在那里也注意到了，突然间，我们自然而然地开始使用这些词汇",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/ /ænd; ənd/ /ˈprɪti/ /sun/ /bɪˈkəz, bɪˈkɔːz/ /wɪv/ /ˈnoʊtɪst/ /ɪt/ /hɪr/ /ænd; ənd/ /ˈnoʊtɪst/ /ɪt/ /ðer; ðər/ /ˈsʌd(ə)nli/ /ˌɔːtəˈmætɪkli/ /wiː; wi/ /stɑːrt/ /ˈjuːzɪŋ/ /ðiːz/ /wɜːrdz/"
  },
  {
    "id": "241",
    "sentence": "and phrases",
    "chinese": "和短语",
    "pronunciation": "/ænd; ənd/ /freɪzɪz/"
  },
  {
    "id": "242",
    "sentence": "As we notice things in the language they become a part of us and pretty soon because we've noticed it here and noticed it there , suddenly automatically we start using these words and phrases",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分，很快，因为我们在这里注意到了，在那里也注意到了，突然间，我们自然而然地开始使用这些词汇和短语",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/ /ænd; ənd/ /ˈprɪti/ /sun/ /bɪˈkəz, bɪˈkɔːz/ /wɪv/ /ˈnoʊtɪst/ /ɪt/ /hɪr/ /ænd; ənd/ /ˈnoʊtɪst/ /ɪt/ /ðer; ðər/ /ˈsʌd(ə)nli/ /ˌɔːtəˈmætɪkli/ /wiː; wi/ /stɑːrt/ /ˈjuːzɪŋ/ /ðiːz/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/"
  },
  {
    "id": "243",
    "sentence": "or patterns of the language",
    "chinese": "或语言模式",
    "pronunciation": "/ɔr/ /ˈpætərn/ /ʌv/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "244",
    "sentence": "As we notice things in the language they become a part of us and pretty soon because we've noticed it here and noticed it there , suddenly automatically we start using these words and phrases or patterns of the language",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分，很快，因为我们在这里注意到了，在那里也注意到了，突然间，我们自然而然地开始使用这些词汇、短语或语言模式",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/ /ænd; ənd/ /ˈprɪti/ /sun/ /bɪˈkəz, bɪˈkɔːz/ /wɪv/ /ˈnoʊtɪst/ /ɪt/ /hɪr/ /ænd; ənd/ /ˈnoʊtɪst/ /ɪt/ /ðer; ðər/ /ˈsʌd(ə)nli/ /ˌɔːtəˈmætɪkli/ /wiː; wi/ /stɑːrt/ /ˈjuːzɪŋ/ /ðiːz/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɔr/ /ˈpætərn/ /ʌv/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "245",
    "sentence": "more correctly",
    "chinese": "更正确地",
    "pronunciation": "/mɔːr/ /kəˈrektli/"
  },
  {
    "id": "246",
    "sentence": "As we notice things in the language they become a part of us and pretty soon because we've noticed it here and noticed it there , suddenly automatically we start using these words and phrases or patterns of the language more correctly",
    "chinese": "当我们注意到语言中的事物时，它们就成为了我们的一部分，很快，因为我们在这里注意到了，在那里也注意到了，突然间，我们自然而然地开始更正确地使用这些词汇、短语或语言模式",
    "pronunciation": "/æz; əz/ /wiː; wi/ /ˈnoʊtɪs/ /θɪŋz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðeɪ/ /bɪˈkʌm/ /ə; eɪ/ /pɑːrt/ /ʌv/ /ʌs/ /ænd; ənd/ /ˈprɪti/ /sun/ /bɪˈkəz, bɪˈkɔːz/ /wɪv/ /ˈnoʊtɪst/ /ɪt/ /hɪr/ /ænd; ənd/ /ˈnoʊtɪst/ /ɪt/ /ðer; ðər/ /ˈsʌd(ə)nli/ /ˌɔːtəˈmætɪkli/ /wiː; wi/ /stɑːrt/ /ˈjuːzɪŋ/ /ðiːz/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɔr/ /ˈpætərn/ /ʌv/ /ðə/ /ˈlæŋɡwɪdʒ/ /mɔːr/ /kəˈrektli/"
  },
  {
    "id": "247",
    "sentence": "Now , the same is true",
    "chinese": "现在，同样的情况也适用于",
    "pronunciation": "/naʊ/ /ðə/ /seɪm/ /ɪz/ /truː/"
  },
  {
    "id": "248",
    "sentence": "with pronunciation",
    "chinese": "关于发音",
    "pronunciation": "/wɪð; wɪθ/ /prəˌnʌnsiˈeɪʃən/"
  },
  {
    "id": "249",
    "sentence": "Now , the same is true with pronunciation",
    "chinese": "现在，发音也是如此",
    "pronunciation": "/naʊ/ /ðə/ /seɪm/ /ɪz/ /truː/ /wɪð; wɪθ/ /prəˌnʌnsiˈeɪʃən/"
  },
  {
    "id": "250",
    "sentence": "You can't pronounce",
    "chinese": "你无法发音",
    "pronunciation": "/juː; jʊ/ /kænt/ /prəˈnaʊns/"
  },
  {
    "id": "251",
    "sentence": "what you can't hear",
    "chinese": "你听不到的东西",
    "pronunciation": "/wʌt/ /juː; jʊ/ /kænt/ /hɪr/"
  },
  {
    "id": "252",
    "sentence": "You can't pronounce what you can't hear",
    "chinese": "如果你听不到某种语言的发音，你就无法正确发音",
    "pronunciation": "/juː; jʊ/ /kænt/ /prəˈnaʊns/ /wʌt/ /juː; jʊ/ /kænt/ /hɪr/"
  },
  {
    "id": "253",
    "sentence": "so you have to pay attention",
    "chinese": "所以你必须注意",
    "pronunciation": "/soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/"
  },
  {
    "id": "254",
    "sentence": "You can't pronounce what you can't hear , so you have to pay attention",
    "chinese": "如果你听不到某种语言的发音，你就无法正确发音，因此你必须注意",
    "pronunciation": "/juː; jʊ/ /kænt/ /prəˈnaʊns/ /wʌt/ /juː; jʊ/ /kænt/ /hɪr/ /soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/"
  },
  {
    "id": "255",
    "sentence": "to how the language is pronounced",
    "chinese": "到语言的发音方式",
    "pronunciation": "/tuː; tə/ /haʊ/ /ðə/ /ˈlæŋɡwɪdʒ/ /ɪz/ /prəˈnaʊnst/"
  },
  {
    "id": "256",
    "sentence": "You can't pronounce what you can't hear , so you have to pay attention to how the language is pronounced",
    "chinese": "如果你听不到某种语言的发音，你就无法正确发音，因此你必须注意语言的发音方式",
    "pronunciation": "/juː; jʊ/ /kænt/ /prəˈnaʊns/ /wʌt/ /juː; jʊ/ /kænt/ /hɪr/ /soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/ /haʊ/ /ðə/ /ˈlæŋɡwɪdʒ/ /ɪz/ /prəˈnaʊnst/"
  },
  {
    "id": "257",
    "sentence": "It's not just",
    "chinese": "不仅仅是",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/"
  },
  {
    "id": "258",
    "sentence": "the individual sounds",
    "chinese": "单个音节",
    "pronunciation": "/ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/"
  },
  {
    "id": "259",
    "sentence": "It's not just the individual sounds",
    "chinese": "不仅仅是单个音节",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/ /ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/"
  },
  {
    "id": "260",
    "sentence": "you need to pay attention to",
    "chinese": "你需要关注",
    "pronunciation": "/juː; jʊ/ /niːd/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/"
  },
  {
    "id": "261",
    "sentence": "It's not just the individual sounds you need to pay attention to",
    "chinese": "不仅仅是单个音节需要注意",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/ /ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/ /juː; jʊ/ /niːd/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/"
  },
  {
    "id": "262",
    "sentence": "it's the intonation",
    "chinese": "语调也很重要",
    "pronunciation": "/ɪts/ /ðə/ /ˌɪntəˈneɪʃ(ə)n/"
  },
  {
    "id": "263",
    "sentence": "It's not just the individual sounds you need to pay attention to , it's the intonation",
    "chinese": "不仅仅是单个音节需要注意，语调也很重要",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/ /ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/ /juː; jʊ/ /niːd/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/ /ɪts/ /ðə/ /ˌɪntəˈneɪʃ(ə)n/"
  },
  {
    "id": "264",
    "sentence": "and sometimes",
    "chinese": "而且有时候",
    "pronunciation": "/ænd; ənd/ /ˈsʌmtaɪmz/"
  },
  {
    "id": "265",
    "sentence": "It's not just the individual sounds you need to pay attention to , it's the intonation and sometimes",
    "chinese": "不仅仅是单个音节需要注意，语调也很重要，有时候",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/ /ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/ /juː; jʊ/ /niːd/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/ /ɪts/ /ðə/ /ˌɪntəˈneɪʃ(ə)n/ /ænd; ənd/ /ˈsʌmtaɪmz/"
  },
  {
    "id": "266",
    "sentence": "it can be very useful",
    "chinese": "这可能会非常有用",
    "pronunciation": "/ɪt/ /kæn/ /biː/ /ˈveri/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "267",
    "sentence": "It's not just the individual sounds you need to pay attention to , it's the intonation and sometimes it can be very useful",
    "chinese": "不仅仅是单个音节需要注意，语调也很重要，有时候聆听并模仿会非常有用",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/ /ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/ /juː; jʊ/ /niːd/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/ /ɪts/ /ðə/ /ˌɪntəˈneɪʃ(ə)n/ /ænd; ənd/ /ˈsʌmtaɪmz/ /ɪt/ /kæn/ /biː/ /ˈveri/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "268",
    "sentence": "to listen and imitate",
    "chinese": "聆听并模仿",
    "pronunciation": "/tuː; tə/ /ˈlɪs(ə)n/ /ænd; ənd/ /ˈɪmɪteɪt/"
  },
  {
    "id": "269",
    "sentence": "It's not just the individual sounds you need to pay attention to , it's the intonation and sometimes it can be very useful to listen and imitate",
    "chinese": "不仅仅是单个音节需要注意，语调也很重要，有时候聆听并模仿会非常有用",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/ /ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/ /juː; jʊ/ /niːd/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/ /ɪts/ /ðə/ /ˌɪntəˈneɪʃ(ə)n/ /ænd; ənd/ /ˈsʌmtaɪmz/ /ɪt/ /kæn/ /biː/ /ˈveri/ /ˈjuːsf(ə)l/ /tuː; tə/ /ˈlɪs(ə)n/ /ænd; ənd/ /ˈɪmɪteɪt/"
  },
  {
    "id": "270",
    "sentence": "because that's helping you",
    "chinese": "因为这有助于你",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðæts/ /ˈhelpɪŋ/ /juː; jʊ/"
  },
  {
    "id": "271",
    "sentence": "It's not just the individual sounds you need to pay attention to , it's the intonation and sometimes it can be very useful to listen and imitate because that's helping you",
    "chinese": "不仅仅是单个音节需要注意，语调也很重要，有时候聆听并模仿会非常有用，因为这有助于你注意到细节",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/ /ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/ /juː; jʊ/ /niːd/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/ /ɪts/ /ðə/ /ˌɪntəˈneɪʃ(ə)n/ /ænd; ənd/ /ˈsʌmtaɪmz/ /ɪt/ /kæn/ /biː/ /ˈveri/ /ˈjuːsf(ə)l/ /tuː; tə/ /ˈlɪs(ə)n/ /ænd; ənd/ /ˈɪmɪteɪt/ /bɪˈkəz, bɪˈkɔːz/ /ðæts/ /ˈhelpɪŋ/ /juː; jʊ/"
  },
  {
    "id": "272",
    "sentence": "to notice",
    "chinese": "注意到",
    "pronunciation": "/tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "273",
    "sentence": "It's not just the individual sounds you need to pay attention to , it's the intonation and sometimes it can be very useful to listen and imitate because that's helping you to notice",
    "chinese": "不仅仅是单个音节需要注意，语调也很重要，有时候聆听并模仿会非常有用，因为这有助于你注意到细节",
    "pronunciation": "/ɪts/ /nɑːt/ /dʒʌst/ /ðə/ /ˌɪndɪˈvɪdʒuəl/ /saʊndz/ /juː; jʊ/ /niːd/ /tuː; tə/ /peɪ/ /əˈtenʃ(ə)n/ /tuː; tə/ /ɪts/ /ðə/ /ˌɪntəˈneɪʃ(ə)n/ /ænd; ənd/ /ˈsʌmtaɪmz/ /ɪt/ /kæn/ /biː/ /ˈveri/ /ˈjuːsf(ə)l/ /tuː; tə/ /ˈlɪs(ə)n/ /ænd; ənd/ /ˈɪmɪteɪt/ /bɪˈkəz, bɪˈkɔːz/ /ðæts/ /ˈhelpɪŋ/ /juː; jʊ/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "274",
    "sentence": "So whether it be pronunciation",
    "chinese": "因此，无论是发音",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/"
  },
  {
    "id": "275",
    "sentence": "correct usage or",
    "chinese": "正确使用或",
    "pronunciation": "/kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/"
  },
  {
    "id": "276",
    "sentence": "So whether it be pronunciation , correct usage or",
    "chinese": "因此，无论是发音、正确使用还是",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/"
  },
  {
    "id": "277",
    "sentence": "the accumulation of words and phrases",
    "chinese": "词汇和短语的积累",
    "pronunciation": "/ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/"
  },
  {
    "id": "278",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/"
  },
  {
    "id": "279",
    "sentence": "it's very important to hone",
    "chinese": "培养这种能力非常重要",
    "pronunciation": "/ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/"
  },
  {
    "id": "280",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，磨练这种能力都非常重要",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/"
  },
  {
    "id": "281",
    "sentence": "that ability to notice",
    "chinese": "这种注意力的能力",
    "pronunciation": "/ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "282",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "283",
    "sentence": "and it starts with",
    "chinese": "而它始于",
    "pronunciation": "/ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/"
  },
  {
    "id": "284",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice and it starts with",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要，并且这种能力始于",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/"
  },
  {
    "id": "285",
    "sentence": "a desire to notice",
    "chinese": "想要注意的愿望",
    "pronunciation": "/ə; eɪ/ /dɪˈzaɪər/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "286",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice and it starts with a desire to notice",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要，这种能力始于一种想要注意的愿望",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/ /ə; eɪ/ /dɪˈzaɪər/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "287",
    "sentence": "the conscious determination",
    "chinese": "有意识的决心",
    "pronunciation": "/ðə/ /ˈkɑːnʃəs/ /dɪˌtɜːrmɪˈneɪʃən/"
  },
  {
    "id": "288",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice and it starts with a desire to notice , the conscious determination",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要这种能力始于一种想要注意的愿望，一种有意识的决心",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/ /ə; eɪ/ /dɪˈzaɪər/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈkɑːnʃəs/ /dɪˌtɜːrmɪˈneɪʃən/"
  },
  {
    "id": "289",
    "sentence": "will , to say",
    "chinese": "意志，即",
    "pronunciation": "/wɪl/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "290",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice and it starts with a desire to notice , the conscious determination , will , to say",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要这种能力始于一种想要注意的愿望，一种有意识的决心，一种意志，即",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/ /ə; eɪ/ /dɪˈzaɪər/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈkɑːnʃəs/ /dɪˌtɜːrmɪˈneɪʃən/ /wɪl/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "291",
    "sentence": "I'm going to try to notice",
    "chinese": "我要努力去注意",
    "pronunciation": "/aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /traɪ/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "292",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice and it starts with a desire to notice , the conscious determination , will , to say I'm going to try to notice",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要这种能力始于一种想要注意的愿望，一种有意识的决心，一种意志，即我要努力去注意语言",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/ /ə; eɪ/ /dɪˈzaɪər/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈkɑːnʃəs/ /dɪˌtɜːrmɪˈneɪʃən/ /wɪl/ /tuː; tə/ /seɪ/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /traɪ/ /tuː; tə/ /ˈnoʊtɪs/"
  },
  {
    "id": "293",
    "sentence": "the language",
    "chinese": "语言",
    "pronunciation": "/ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "294",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice and it starts with a desire to notice , the conscious determination , will , to say I'm going to try to notice the language",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要这种能力始于一种想要注意的愿望，一种有意识的决心，一种意志，即我要努力去注意语言",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/ /ə; eɪ/ /dɪˈzaɪər/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈkɑːnʃəs/ /dɪˌtɜːrmɪˈneɪʃən/ /wɪl/ /tuː; tə/ /seɪ/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /traɪ/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "295",
    "sentence": "and then you train yourself",
    "chinese": "然后你通过这些各种活动来训练自己",
    "pronunciation": "/ænd; ənd/ /ðen/ /juː; jʊ/ /treɪn/ /jɔːrˈself/"
  },
  {
    "id": "296",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice and it starts with a desire to notice , the conscious determination , will , to say I'm going to try to notice the language and then you train yourself",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要这种能力始于一种想要注意的愿望，一种有意识的决心，一种意志，即我要努力去注意语言，然后通过这些各种活动来训练自己。",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/ /ə; eɪ/ /dɪˈzaɪər/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈkɑːnʃəs/ /dɪˌtɜːrmɪˈneɪʃən/ /wɪl/ /tuː; tə/ /seɪ/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /traɪ/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈlæŋɡwɪdʒ/ /ænd; ənd/ /ðen/ /juː; jʊ/ /treɪn/ /jɔːrˈself/"
  },
  {
    "id": "297",
    "sentence": "through these various activities",
    "chinese": "通过这些各种活动",
    "pronunciation": "/θruː/ /ðiːz/ /ˈveriəs/ /ækˈtɪvətiz/"
  },
  {
    "id": "298",
    "sentence": "So whether it be pronunciation , correct usage or the accumulation of words and phrases , it's very important to hone that ability to notice and it starts with a desire to notice , the conscious determination , will , to say I'm going to try to notice the language and then you train yourself through these various activities",
    "chinese": "因此，无论是发音、正确使用还是词汇和短语的积累，培养这种注意力的能力都非常重要这种能力始于一种想要注意的愿望，一种有意识的决心，一种意志，即我要努力去注意语言，然后通过这些各种活动来训练自己。",
    "pronunciation": "/soʊ/ /ˈweðər/ /ɪt/ /biː/ /prəˌnʌnsiˈeɪʃən/ /kəˈrekt/ /ˈjuːsɪdʒ/ /ɔr/ /ðə/ /əˌkjuːmjəˈleɪʃn/ /ʌv/ /wɜːrdz/ /ænd; ənd/ /freɪzɪz/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /hoʊn/ /ðæt/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /ænd; ənd/ /ɪt/ /stɑːrts/ /wɪð; wɪθ/ /ə; eɪ/ /dɪˈzaɪər/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈkɑːnʃəs/ /dɪˌtɜːrmɪˈneɪʃən/ /wɪl/ /tuː; tə/ /seɪ/ /aɪm/ /ˈɡoʊɪŋ/ /tuː; tə/ /traɪ/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈlæŋɡwɪdʒ/ /ænd; ənd/ /ðen/ /juː; jʊ/ /treɪn/ /jɔːrˈself/ /θruː/ /ðiːz/ /ˈveriəs/ /ækˈtɪvətiz/"
  },
  {
    "id": "299",
    "sentence": "So that's the third hint",
    "chinese": "所以这是第三个提示",
    "pronunciation": "/soʊ/ /ðæts/ /ðə/ /θɜrd/ /hɪnt/"
  },
  {
    "id": "300",
    "sentence": "learn to notice the language",
    "chinese": "学会注意语言",
    "pronunciation": "/lɜːrn/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "301",
    "sentence": "So that's the third hint , learn to notice the language",
    "chinese": "所以这是第三个提示，学会注意语言",
    "pronunciation": "/soʊ/ /ðæts/ /ðə/ /θɜrd/ /hɪnt/ /lɜːrn/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "302",
    "sentence": "and you'll become",
    "chinese": "并且你将成为",
    "pronunciation": "/ænd; ənd/ /jʊl/ /bɪˈkʌm/"
  },
  {
    "id": "303",
    "sentence": "So that's the third hint , learn to notice the language and you'll become",
    "chinese": "所以这是第三个提示，学会注意语言，你将成为",
    "pronunciation": "/soʊ/ /ðæts/ /ðə/ /θɜrd/ /hɪnt/ /lɜːrn/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈlæŋɡwɪdʒ/ /ænd; ənd/ /jʊl/ /bɪˈkʌm/"
  },
  {
    "id": "304",
    "sentence": "an efficient and successful language learner",
    "chinese": "高效且成功的语言学习者",
    "pronunciation": "/æn; ən/ /ɪˈfɪʃnt/ /ænd; ənd/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnər/"
  },
  {
    "id": "305",
    "sentence": "So that's the third hint , learn to notice the language and you'll become an efficient and successful language learner",
    "chinese": "所以这是第三个提示，学会注意语言，你将成为一个高效且成功的语言学习者",
    "pronunciation": "/soʊ/ /ðæts/ /ðə/ /θɜrd/ /hɪnt/ /lɜːrn/ /tuː; tə/ /ˈnoʊtɪs/ /ðə/ /ˈlæŋɡwɪdʒ/ /ænd; ənd/ /jʊl/ /bɪˈkʌm/ /æn; ən/ /ɪˈfɪʃnt/ /ænd; ənd/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnər/"
  },
  {
    "id": "306",
    "sentence": "Thank you",
    "chinese": "谢谢",
    "pronunciation": "/θæŋk/ /juː; jʊ/"
  },
];
