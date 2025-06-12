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
    "sentence": "Founder LingQ",
    "chinese": "LingQ的创始人",
    "pronunciation": "/ˈfaʊndər/ /lɪŋk/"
  },
  {
    "id": "5",
    "sentence": "Hi , there , this is Steve Kaufmann Founder LingQ",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /lɪŋk/"
  },
  {
    "id": "6",
    "sentence": "continuing in my series",
    "chinese": "继续我的系列节目",
    "pronunciation": "/kənˈtɪnjuːɪŋ/ /ɪn/ /maɪ/ /ˈsɪriːz/"
  },
  {
    "id": "7",
    "sentence": "Hi , there , this is Steve Kaufmann Founder LingQ continuing in my series",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，继续我的系列节目",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /lɪŋk/ /kənˈtɪnjuːɪŋ/ /ɪn/ /maɪ/ /ˈsɪriːz/"
  },
  {
    "id": "8",
    "sentence": "of Seven Secrets",
    "chinese": "的七个秘密",
    "pronunciation": "/ʌv/ /ˈsev(ə)n/ /ˈsiːkrəts/"
  },
  {
    "id": "9",
    "sentence": "Hi , there , this is Steve Kaufmann Founder LingQ continuing in my series of Seven Secrets",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，继续我的系列节目《成功语言学习的七个秘密》",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /lɪŋk/ /kənˈtɪnjuːɪŋ/ /ɪn/ /maɪ/ /ˈsɪriːz/ /ʌv/ /ˈsev(ə)n/ /ˈsiːkrəts/"
  },
  {
    "id": "10",
    "sentence": "to Successful Language Learning",
    "chinese": "成功语言学习",
    "pronunciation": "/tuː; tə/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "11",
    "sentence": "Hi , there , this is Steve Kaufmann Founder LingQ continuing in my series of Seven Secrets to Successful Language Learning",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，继续我的系列节目《成功语言学习的七个秘密》",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /lɪŋk/ /kənˈtɪnjuːɪŋ/ /ɪn/ /maɪ/ /ˈsɪriːz/ /ʌv/ /ˈsev(ə)n/ /ˈsiːkrəts/ /tuː; tə/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "12",
    "sentence": "Again",
    "chinese": "再次",
    "pronunciation": "/əˈɡen/"
  },
  {
    "id": "13",
    "sentence": "I'll review them",
    "chinese": "我会审查它们",
    "pronunciation": "/aɪl/ /rɪˈvjuː/ /ðem; ðəm/"
  },
  {
    "id": "14",
    "sentence": "Again , I'll review them",
    "chinese": "再次，我会审查它们",
    "pronunciation": "/əˈɡen/ /aɪl/ /rɪˈvjuː/ /ðem; ðəm/"
  },
  {
    "id": "15",
    "sentence": "as I always do",
    "chinese": "像我总是做的那样",
    "pronunciation": "/æz; əz/ /aɪ/ /ˈɔːlweɪz/ /duː; də/"
  },
  {
    "id": "16",
    "sentence": "Again , I'll review them , as I always do",
    "chinese": "再次，我会像往常一样仔细审查它们",
    "pronunciation": "/əˈɡen/ /aɪl/ /rɪˈvjuː/ /ðem; ðəm/ /æz; əz/ /aɪ/ /ˈɔːlweɪz/ /duː; də/"
  },
  {
    "id": "17",
    "sentence": "The first one",
    "chinese": "第一个选择",
    "pronunciation": "/ðə/ /fɜːrst/ /wʌn/"
  },
  {
    "id": "18",
    "sentence": "was to spend",
    "chinese": "是去花费",
    "pronunciation": "/wʌz; wəz/ /tuː; tə/ /spend/"
  },
  {
    "id": "19",
    "sentence": "The first one was to spend",
    "chinese": "第一个选择是花费",
    "pronunciation": "/ðə/ /fɜːrst/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /spend/"
  },
  {
    "id": "20",
    "sentence": "the time",
    "chinese": "时间",
    "pronunciation": "/ðə/ /taɪm/"
  },
  {
    "id": "21",
    "sentence": "The first one was to spend the time",
    "chinese": "第一个选择是消磨时间",
    "pronunciation": "/ðə/ /fɜːrst/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /spend/ /ðə/ /taɪm/"
  },
  {
    "id": "22",
    "sentence": "The second one was",
    "chinese": "第二个建议是",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /wʌn/ /wʌz; wəz/"
  },
  {
    "id": "23",
    "sentence": "to do things",
    "chinese": "做事情",
    "pronunciation": "/tuː; tə/ /duː; də/ /θɪŋz/"
  },
  {
    "id": "24",
    "sentence": "The second one was to do things",
    "chinese": "第二个建议是做事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/"
  },
  {
    "id": "25",
    "sentence": "you like to do",
    "chinese": "你喜欢做的事情",
    "pronunciation": "/juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "26",
    "sentence": "The second one was to do things you like to do",
    "chinese": "第二个建议是做你喜欢的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "27",
    "sentence": "in language learning",
    "chinese": "在语言学习中",
    "pronunciation": "/ɪn/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "28",
    "sentence": "The second one was to do things you like to do in language learning",
    "chinese": "第二个建议是在语言学习中做你喜欢的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /wʌn/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /ɪn/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "29",
    "sentence": "The third thing was",
    "chinese": "第三件事是",
    "pronunciation": "/ðə/ /θɜrd/ /θɪŋ/ /wʌz; wəz/"
  },
  {
    "id": "30",
    "sentence": "to develop the ability",
    "chinese": "培养能力",
    "pronunciation": "/tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/"
  },
  {
    "id": "31",
    "sentence": "The third thing was to develop the ability",
    "chinese": "第三件事是培养能力",
    "pronunciation": "/ðə/ /θɜrd/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/"
  },
  {
    "id": "32",
    "sentence": "to notice what's happening",
    "chinese": "注意到正在发生的事情",
    "pronunciation": "/tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/"
  },
  {
    "id": "33",
    "sentence": "The third thing was to develop the ability to notice what's happening",
    "chinese": "第三件事是培养注意语言中正在发生什么的能力",
    "pronunciation": "/ðə/ /θɜrd/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/"
  },
  {
    "id": "34",
    "sentence": "in the language",
    "chinese": "在语言中",
    "pronunciation": "/ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "35",
    "sentence": "The third thing was to develop the ability to notice what's happening in the language",
    "chinese": "第三件事是培养注意语言中正在发生什么的能力",
    "pronunciation": "/ðə/ /θɜrd/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "36",
    "sentence": "The fourth secret was",
    "chinese": "第四个秘密是",
    "pronunciation": "/ðə/ /fɔːrθ/ /ˈsiːkrət/ /wʌz; wəz/"
  },
  {
    "id": "37",
    "sentence": "to focus on words",
    "chinese": "专注于词汇",
    "pronunciation": "/tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/"
  },
  {
    "id": "38",
    "sentence": "The fourth secret was to focus on words",
    "chinese": "第四个秘诀是专注于词汇",
    "pronunciation": "/ðə/ /fɔːrθ/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/"
  },
  {
    "id": "39",
    "sentence": "rather than grammar",
    "chinese": "而非语法",
    "pronunciation": "/ˈræðər/ /ðæn; ðən/ /ˈɡræmər/"
  },
  {
    "id": "40",
    "sentence": "The fourth secret was to focus on words rather than grammar",
    "chinese": "第四个秘诀是专注于词汇而非语法",
    "pronunciation": "/ðə/ /fɔːrθ/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/ /ˈræðər/ /ðæn; ðən/ /ˈɡræmər/"
  },
  {
    "id": "41",
    "sentence": "The fifth secret",
    "chinese": "第五个秘密",
    "pronunciation": "/ðə/ /fɪfθ/ /ˈsiːkrət/"
  },
  {
    "id": "42",
    "sentence": "was to be patient",
    "chinese": "要有耐心",
    "pronunciation": "/wʌz; wəz/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "43",
    "sentence": "The fifth secret was to be patient",
    "chinese": "第五个秘密是要有耐心",
    "pronunciation": "/ðə/ /fɪfθ/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "44",
    "sentence": "Now",
    "chinese": "现在",
    "pronunciation": "/naʊ/"
  },
  {
    "id": "45",
    "sentence": "the sixth secret is",
    "chinese": "第六个秘密是",
    "pronunciation": "/ðə/ /sɪksθ/ /ˈsiːkrət/ /ɪz/"
  },
  {
    "id": "46",
    "sentence": "Now , the sixth secret is",
    "chinese": "现在，第六个秘密是",
    "pronunciation": "/naʊ/ /ðə/ /sɪksθ/ /ˈsiːkrət/ /ɪz/"
  },
  {
    "id": "47",
    "sentence": "a matter of strategy",
    "chinese": "关于策略的问题",
    "pronunciation": "/ə; eɪ/ /ˈmætər/ /ʌv/ /ˈstrætədʒi/"
  },
  {
    "id": "48",
    "sentence": "Now , the sixth secret is a matter of strategy",
    "chinese": "现在，第六个秘密是关于策略的问题",
    "pronunciation": "/naʊ/ /ðə/ /sɪksθ/ /ˈsiːkrət/ /ɪz/ /ə; eɪ/ /ˈmætər/ /ʌv/ /ˈstrætədʒi/"
  },
  {
    "id": "49",
    "sentence": "or tactics",
    "chinese": "或战术",
    "pronunciation": "/ɔr/ /ˈtæktɪks/"
  },
  {
    "id": "50",
    "sentence": "Now , the sixth secret is a matter of strategy or tactics",
    "chinese": "现在，第六个秘密是关于策略或战术的问题",
    "pronunciation": "/naʊ/ /ðə/ /sɪksθ/ /ˈsiːkrət/ /ɪz/ /ə; eɪ/ /ˈmætər/ /ʌv/ /ˈstrætədʒi/ /ɔr/ /ˈtæktɪks/"
  },
  {
    "id": "51",
    "sentence": "if you want",
    "chinese": "如果你愿意这么理解的话",
    "pronunciation": "/ɪf/ /juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "52",
    "sentence": "Now , the sixth secret is a matter of strategy or tactics , if you want",
    "chinese": "现在，第六个秘密是关于策略或战术的问题，如果你愿意这么理解的话",
    "pronunciation": "/naʊ/ /ðə/ /sɪksθ/ /ˈsiːkrət/ /ɪz/ /ə; eɪ/ /ˈmætər/ /ʌv/ /ˈstrætədʒi/ /ɔr/ /ˈtæktɪks/ /ɪf/ /juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "53",
    "sentence": "That is",
    "chinese": "也就是说",
    "pronunciation": "/ðæt/ /ɪz/"
  },
  {
    "id": "54",
    "sentence": "make sure",
    "chinese": "确保",
    "pronunciation": "/meɪk/ /ʃʊr/"
  },
  {
    "id": "55",
    "sentence": "That is , make sure",
    "chinese": "也就是说，确保",
    "pronunciation": "/ðæt/ /ɪz/ /meɪk/ /ʃʊr/"
  },
  {
    "id": "56",
    "sentence": "you get the tools",
    "chinese": "你获得工具",
    "pronunciation": "/juː; jʊ/ /ɡet/ /ðə/ /tuːlz/"
  },
  {
    "id": "57",
    "sentence": "That is , make sure you get the tools",
    "chinese": "也就是说，确保你得到所需的工具",
    "pronunciation": "/ðæt/ /ɪz/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ðə/ /tuːlz/"
  },
  {
    "id": "58",
    "sentence": "you need",
    "chinese": "你需要",
    "pronunciation": "/juː; jʊ/ /niːd/"
  },
  {
    "id": "59",
    "sentence": "That is , make sure you get the tools you need",
    "chinese": "也就是说，确保你拥有成功所需的工具",
    "pronunciation": "/ðæt/ /ɪz/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ðə/ /tuːlz/ /juː; jʊ/ /niːd/"
  },
  {
    "id": "60",
    "sentence": "to be successful",
    "chinese": "取得成功",
    "pronunciation": "/tuː; tə/ /biː/ /səkˈsesf(ə)l/"
  },
  {
    "id": "61",
    "sentence": "That is , make sure you get the tools you need to be successful",
    "chinese": "也就是说，确保你拥有成功所需的工具",
    "pronunciation": "/ðæt/ /ɪz/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ðə/ /tuːlz/ /juː; jʊ/ /niːd/ /tuː; tə/ /biː/ /səkˈsesf(ə)l/"
  },
  {
    "id": "62",
    "sentence": "If you're fixing something up",
    "chinese": "如果你在修理家里的东西",
    "pronunciation": "/ɪf/ /jʊr/ /ˈfɪksɪŋ/ /ˈsʌmθɪŋ/ /ʌp/"
  },
  {
    "id": "63",
    "sentence": "around the house",
    "chinese": "在家里",
    "pronunciation": "/əˈraʊnd/ /ðə/ /haʊs/"
  },
  {
    "id": "64",
    "sentence": "If you're fixing something up around the house",
    "chinese": "如果你在家里修理东西",
    "pronunciation": "/ɪf/ /jʊr/ /ˈfɪksɪŋ/ /ˈsʌmθɪŋ/ /ʌp/ /əˈraʊnd/ /ðə/ /haʊs/"
  },
  {
    "id": "65",
    "sentence": "you need the proper tools",
    "chinese": "你需要合适的工具",
    "pronunciation": "/juː; jʊ/ /niːd/ /ðə/ /ˈprɑːpər/ /tuːlz/"
  },
  {
    "id": "66",
    "sentence": "If you're fixing something up around the house you need the proper tools",
    "chinese": "如果你在家里修理东西，你需要合适的工具",
    "pronunciation": "/ɪf/ /jʊr/ /ˈfɪksɪŋ/ /ˈsʌmθɪŋ/ /ʌp/ /əˈraʊnd/ /ðə/ /haʊs/ /juː; jʊ/ /niːd/ /ðə/ /ˈprɑːpər/ /tuːlz/"
  },
  {
    "id": "67",
    "sentence": "Any job is easier",
    "chinese": "任何工作都会变得更容易",
    "pronunciation": "/ˈeni/ /dʒɑːb/ /ɪz/ /ˈiziə/"
  },
  {
    "id": "68",
    "sentence": "if you have",
    "chinese": "如果你有",
    "pronunciation": "/ɪf/ /juː; jʊ/ /hæv/"
  },
  {
    "id": "69",
    "sentence": "Any job is easier if you have",
    "chinese": "如果你有，任何工作都会变得更容易",
    "pronunciation": "/ˈeni/ /dʒɑːb/ /ɪz/ /ˈiziə/ /ɪf/ /juː; jʊ/ /hæv/"
  },
  {
    "id": "70",
    "sentence": "the proper tools",
    "chinese": "合适的工具",
    "pronunciation": "/ðə/ /ˈprɑːpər/ /tuːlz/"
  },
  {
    "id": "71",
    "sentence": "Any job is easier if you have the proper tools",
    "chinese": "如果你有合适的工具，任何工作都会变得更容易",
    "pronunciation": "/ˈeni/ /dʒɑːb/ /ɪz/ /ˈiziə/ /ɪf/ /juː; jʊ/ /hæv/ /ðə/ /ˈprɑːpər/ /tuːlz/"
  },
  {
    "id": "72",
    "sentence": "So , obviously",
    "chinese": "所以，显然",
    "pronunciation": "/soʊ/ /ˈɑːbviəsli/"
  },
  {
    "id": "73",
    "sentence": "you need to have",
    "chinese": "你需要有",
    "pronunciation": "/juː; jʊ/ /niːd/ /tuː; tə/ /hæv/"
  },
  {
    "id": "74",
    "sentence": "So , obviously , you need to have",
    "chinese": "所以，显然，你需要",
    "pronunciation": "/soʊ/ /ˈɑːbviəsli/ /juː; jʊ/ /niːd/ /tuː; tə/ /hæv/"
  },
  {
    "id": "75",
    "sentence": "an mp3 player",
    "chinese": "一个MP3播放器",
    "pronunciation": "/æn; ən/ /ˌɛm ˌpiː ˈθriː/ /ˈpleɪər/"
  },
  {
    "id": "76",
    "sentence": "So , obviously , you need to have an mp3 player",
    "chinese": "所以，显然，你需要一个MP3播放器",
    "pronunciation": "/soʊ/ /ˈɑːbviəsli/ /juː; jʊ/ /niːd/ /tuː; tə/ /hæv/ /æn; ən/ /ˌɛm ˌpiː ˈθriː/ /ˈpleɪər/"
  },
  {
    "id": "77",
    "sentence": "I don't want to promote",
    "chinese": "我不想推广",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /prəˈmoʊt/"
  },
  {
    "id": "78",
    "sentence": "any one brand",
    "chinese": "任何特定品牌",
    "pronunciation": "/ˈeni/ /wʌn/ /brænd/"
  },
  {
    "id": "79",
    "sentence": "I don't want to promote any one brand",
    "chinese": "我不想推广任何特定品牌",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /prəˈmoʊt/ /ˈeni/ /wʌn/ /brænd/"
  },
  {
    "id": "80",
    "sentence": "but I have an iPod Touch",
    "chinese": "但我有一台iPod Touch",
    "pronunciation": "/bʌt/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /tʌtʃ/"
  },
  {
    "id": "81",
    "sentence": "I don't want to promote any one brand , but I have an iPod Touch",
    "chinese": "我不想推广任何特定品牌，但我有一台iPod Touch",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /prəˈmoʊt/ /ˈeni/ /wʌn/ /brænd/ /bʌt/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /tʌtʃ/"
  },
  {
    "id": "82",
    "sentence": "and I have an iPod Shuffle",
    "chinese": "我有一台iPod Shuffle",
    "pronunciation": "/ænd; ənd/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /ˈʃʌf(ə)l/"
  },
  {
    "id": "83",
    "sentence": "I don't want to promote any one brand , but I have an iPod Touch and I have an iPod Shuffle",
    "chinese": "我不想推广任何特定品牌，但我有一台iPod Touch和一台iPod Shuffle",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /prəˈmoʊt/ /ˈeni/ /wʌn/ /brænd/ /bʌt/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /tʌtʃ/ /ænd; ənd/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /ˈʃʌf(ə)l/"
  },
  {
    "id": "84",
    "sentence": "which is a smaller mp3 player",
    "chinese": "这是一款更小的mp3播放器",
    "pronunciation": "/wɪtʃ/ /ɪz/ /ə; eɪ/ /ˈsmɔːlər/ /ˌɛm ˌpiː ˈθriː/ /ˈpleɪər/"
  },
  {
    "id": "85",
    "sentence": "I don't want to promote any one brand , but I have an iPod Touch and I have an iPod Shuffle , which is a smaller mp3 player",
    "chinese": "我不想推广任何特定品牌，但我有一台iPod Touch和一台iPod Shuffle，iPod Shuffle是一款更小的mp3播放器",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /prəˈmoʊt/ /ˈeni/ /wʌn/ /brænd/ /bʌt/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /tʌtʃ/ /ænd; ənd/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /ˈʃʌf(ə)l/ /wɪtʃ/ /ɪz/ /ə; eɪ/ /ˈsmɔːlər/ /ˌɛm ˌpiː ˈθriː/ /ˈpleɪər/"
  },
  {
    "id": "86",
    "sentence": "that is more convenient",
    "chinese": "更加方便",
    "pronunciation": "/ðæt/ /ɪz/ /mɔːr/ /kənˈviːniənt/"
  },
  {
    "id": "87",
    "sentence": "I don't want to promote any one brand , but I have an iPod Touch and I have an iPod Shuffle , which is a smaller mp3 player that is more convenient",
    "chinese": "我不想推广任何特定品牌，但我有一台iPod Touch和一台iPod Shuffle，iPod Shuffle是一款更小的mp3播放器，更加方便",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /prəˈmoʊt/ /ˈeni/ /wʌn/ /brænd/ /bʌt/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /tʌtʃ/ /ænd; ənd/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /ˈʃʌf(ə)l/ /wɪtʃ/ /ɪz/ /ə; eɪ/ /ˈsmɔːlər/ /ˌɛm ˌpiː ˈθriː/ /ˈpleɪər/ /ðæt/ /ɪz/ /mɔːr/ /kənˈviːniənt/"
  },
  {
    "id": "88",
    "sentence": "when I go jogging",
    "chinese": "当我去慢跑时",
    "pronunciation": "/wen/ /aɪ/ /ɡoʊ/ /ˈdʒɑːɡɪŋ/"
  },
  {
    "id": "89",
    "sentence": "I don't want to promote any one brand , but I have an iPod Touch and I have an iPod Shuffle , which is a smaller mp3 player that is more convenient when I go jogging",
    "chinese": "我不想推广任何特定品牌，但我有一台iPod Touch和一台iPod Shuffle",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /prəˈmoʊt/ /ˈeni/ /wʌn/ /brænd/ /bʌt/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /tʌtʃ/ /ænd; ənd/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /ˈʃʌf(ə)l/ /wɪtʃ/ /ɪz/ /ə; eɪ/ /ˈsmɔːlər/ /ˌɛm ˌpiː ˈθriː/ /ˈpleɪər/ /ðæt/ /ɪz/ /mɔːr/ /kənˈviːniənt/ /wen/ /aɪ/ /ɡoʊ/ /ˈdʒɑːɡɪŋ/"
  },
  {
    "id": "90",
    "sentence": "and it's lighter",
    "chinese": "而且更轻便",
    "pronunciation": "/ænd; ənd/ /ɪts/ /ˈlaɪ.tɚ/"
  },
  {
    "id": "91",
    "sentence": "I don't want to promote any one brand , but I have an iPod Touch and I have an iPod Shuffle , which is a smaller mp3 player that is more convenient when I go jogging and it's lighter",
    "chinese": "我不想推广任何特定品牌，但我有一台iPod Touch和一台iPod ShuffleiPod Shuffle是一款更小的mp3播放器，当我去慢跑时更加方便，而且更轻便。",
    "pronunciation": "/aɪ/ /doʊnt/ /wɑːnt/ /tuː; tə/ /prəˈmoʊt/ /ˈeni/ /wʌn/ /brænd/ /bʌt/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /tʌtʃ/ /ænd; ənd/ /aɪ/ /hæv/ /æn; ən/ /aɪˈpɒd/ /ˈʃʌf(ə)l/ /wɪtʃ/ /ɪz/ /ə; eɪ/ /ˈsmɔːlər/ /ˌɛm ˌpiː ˈθriː/ /ˈpleɪər/ /ðæt/ /ɪz/ /mɔːr/ /kənˈviːniənt/ /wen/ /aɪ/ /ɡoʊ/ /ˈdʒɑːɡɪŋ/ /ænd; ənd/ /ɪts/ /ˈlaɪ.tɚ/"
  },
  {
    "id": "92",
    "sentence": "The iPod Touch",
    "chinese": "iPod Touch",
    "pronunciation": "/ðə/ /aɪˈpɒd/ /tʌtʃ/"
  },
  {
    "id": "93",
    "sentence": "has a number of advantages",
    "chinese": "具有许多优势",
    "pronunciation": "/hæz; həz/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /ədˈvæntɪdʒɪz/"
  },
  {
    "id": "94",
    "sentence": "The iPod Touch has a number of advantages",
    "chinese": "iPod Touch 具有许多优势",
    "pronunciation": "/ðə/ /aɪˈpɒd/ /tʌtʃ/ /hæz; həz/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /ədˈvæntɪdʒɪz/"
  },
  {
    "id": "95",
    "sentence": "On my iPod Touch",
    "chinese": "在我的iPod Touch上",
    "pronunciation": "/ɑːn/ /maɪ/ /aɪˈpɒd/ /tʌtʃ/"
  },
  {
    "id": "96",
    "sentence": "I have bought online dictionaries",
    "chinese": "我已经购买了在线词典",
    "pronunciation": "/aɪ/ /hæv/ /bɔːt/ /ˌɑːnˈlaɪn/ /ˈdɪkʃənˌeri/"
  },
  {
    "id": "97",
    "sentence": "On my iPod Touch I have bought online dictionaries",
    "chinese": "在我的iPod Touch上，我购买了在线词典",
    "pronunciation": "/ɑːn/ /maɪ/ /aɪˈpɒd/ /tʌtʃ/ /aɪ/ /hæv/ /bɔːt/ /ˌɑːnˈlaɪn/ /ˈdɪkʃənˌeri/"
  },
  {
    "id": "98",
    "sentence": "for the iPod",
    "chinese": "适用于iPod",
    "pronunciation": "/fɔːr; fər/ /ðə/ /aɪˈpɒd/"
  },
  {
    "id": "99",
    "sentence": "On my iPod Touch I have bought online dictionaries for the iPod",
    "chinese": "在我的iPod Touch上，我购买了适用于iPod的在线词典",
    "pronunciation": "/ɑːn/ /maɪ/ /aɪˈpɒd/ /tʌtʃ/ /aɪ/ /hæv/ /bɔːt/ /ˌɑːnˈlaɪn/ /ˈdɪkʃənˌeri/ /fɔːr; fər/ /ðə/ /aɪˈpɒd/"
  },
  {
    "id": "100",
    "sentence": "in 12 different languages",
    "chinese": "12种不同语言",
    "pronunciation": "/ɪn/ /twelv/ /ˈdɪfrənt/ /ˈlæŋɡwɪdʒɪz/"
  },
  {
    "id": "101",
    "sentence": "On my iPod Touch I have bought online dictionaries for the iPod in 12 different languages",
    "chinese": "在我的iPod Touch上，我购买了适用于iPod的12种不同语言的在线词典",
    "pronunciation": "/ɑːn/ /maɪ/ /aɪˈpɒd/ /tʌtʃ/ /aɪ/ /hæv/ /bɔːt/ /ˌɑːnˈlaɪn/ /ˈdɪkʃənˌeri/ /fɔːr; fər/ /ðə/ /aɪˈpɒd/ /ɪn/ /twelv/ /ˈdɪfrənt/ /ˈlæŋɡwɪdʒɪz/"
  },
  {
    "id": "102",
    "sentence": "I try the free dictionaries",
    "chinese": "我尝试使用免费词典",
    "pronunciation": "/aɪ/ /traɪ/ /ðə/ /friː/ /ˈdɪkʃənˌeri/"
  },
  {
    "id": "103",
    "sentence": "and if they're no good",
    "chinese": "如果它们不够好",
    "pronunciation": "/ænd; ənd/ /ɪf/ /ˈðer/ /noʊ/ /ɡʊd/"
  },
  {
    "id": "104",
    "sentence": "I try the free dictionaries and if they're no good",
    "chinese": "我尝试使用免费词典，如果它们不够好",
    "pronunciation": "/aɪ/ /traɪ/ /ðə/ /friː/ /ˈdɪkʃənˌeri/ /ænd; ənd/ /ɪf/ /ˈðer/ /noʊ/ /ɡʊd/"
  },
  {
    "id": "105",
    "sentence": "then I spend the money",
    "chinese": "然后我花钱",
    "pronunciation": "/ðen/ /aɪ/ /spend/ /ðə/ /ˈmʌni/"
  },
  {
    "id": "106",
    "sentence": "I try the free dictionaries and if they're no good , then I spend the money",
    "chinese": "我尝试使用免费词典，如果它们不够好",
    "pronunciation": "/aɪ/ /traɪ/ /ðə/ /friː/ /ˈdɪkʃənˌeri/ /ænd; ənd/ /ɪf/ /ˈðer/ /noʊ/ /ɡʊd/ /ðen/ /aɪ/ /spend/ /ðə/ /ˈmʌni/"
  },
  {
    "id": "107",
    "sentence": "to get a good dictionary",
    "chinese": "买一本好词典",
    "pronunciation": "/tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /ˈdɪkʃəneri/"
  },
  {
    "id": "108",
    "sentence": "I try the free dictionaries and if they're no good , then I spend the money to get a good dictionary",
    "chinese": "我尝试使用免费词典，如果它们不够好，我就会花钱买一本好词典",
    "pronunciation": "/aɪ/ /traɪ/ /ðə/ /friː/ /ˈdɪkʃənˌeri/ /ænd; ənd/ /ɪf/ /ˈðer/ /noʊ/ /ɡʊd/ /ðen/ /aɪ/ /spend/ /ðə/ /ˈmʌni/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /ˈdɪkʃəneri/"
  },
  {
    "id": "109",
    "sentence": "Also",
    "chinese": "另外",
    "pronunciation": "/ˈɔːlsoʊ/"
  },
  {
    "id": "110",
    "sentence": "I think",
    "chinese": "我认为",
    "pronunciation": "/aɪ/ /θɪŋk/"
  },
  {
    "id": "111",
    "sentence": "Also , I think",
    "chinese": "另外，我认为",
    "pronunciation": "/ˈɔːlsoʊ/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "112",
    "sentence": "you should buy books",
    "chinese": "你应该买书",
    "pronunciation": "/juː; jʊ/ /ʃʊd; ʃəd/ /baɪ/ /bʊks/"
  },
  {
    "id": "113",
    "sentence": "Also , I think you should buy books",
    "chinese": "另外，我认为你应该买书",
    "pronunciation": "/ˈɔːlsoʊ/ /aɪ/ /θɪŋk/ /juː; jʊ/ /ʃʊd; ʃəd/ /baɪ/ /bʊks/"
  },
  {
    "id": "114",
    "sentence": "Obviously",
    "chinese": "显然",
    "pronunciation": "/ˈɑːbviəsli/"
  },
  {
    "id": "115",
    "sentence": "we at LingQ feel",
    "chinese": "我们在LingQ认为",
    "pronunciation": "/wiː; wi/ /æt; ət/ /lɪŋk/ /fil/"
  },
  {
    "id": "116",
    "sentence": "Obviously , we at LingQ feel",
    "chinese": "显然，我们在LingQ认为",
    "pronunciation": "/ˈɑːbviəsli/ /wiː; wi/ /æt; ət/ /lɪŋk/ /fil/"
  },
  {
    "id": "117",
    "sentence": "that we have a wonderful platform",
    "chinese": "我们拥有一个出色的平台",
    "pronunciation": "/ðæt/ /wiː; wi/ /hæv/ /ə; eɪ/ /ˈwʌndərfl/ /ˈplætfɔːrm/"
  },
  {
    "id": "118",
    "sentence": "Obviously , we at LingQ feel that we have a wonderful platform",
    "chinese": "显然，我们在LingQ认为我们拥有一个出色的平台",
    "pronunciation": "/ˈɑːbviəsli/ /wiː; wi/ /æt; ət/ /lɪŋk/ /fil/ /ðæt/ /wiː; wi/ /hæv/ /ə; eɪ/ /ˈwʌndərfl/ /ˈplætfɔːrm/"
  },
  {
    "id": "119",
    "sentence": "for language learning",
    "chinese": "用于语言学习",
    "pronunciation": "/fɔːr; fər/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "120",
    "sentence": "Obviously , we at LingQ feel that we have a wonderful platform for language learning",
    "chinese": "显然，我们在LingQ认为我们拥有一个出色的语言学习平台",
    "pronunciation": "/ˈɑːbviəsli/ /wiː; wi/ /æt; ət/ /lɪŋk/ /fil/ /ðæt/ /wiː; wi/ /hæv/ /ə; eɪ/ /ˈwʌndərfl/ /ˈplætfɔːrm/ /fɔːr; fər/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "121",
    "sentence": "but I would be surprised",
    "chinese": "但我会感到惊讶",
    "pronunciation": "/bʌt/ /aɪ/ /wʊd/ /biː/ /sərˈpraɪzd/"
  },
  {
    "id": "122",
    "sentence": "Obviously , we at LingQ feel that we have a wonderful platform for language learning , but I would be surprised",
    "chinese": "显然，我们在LingQ认为我们拥有一个出色的语言学习平台，但如果",
    "pronunciation": "/ˈɑːbviəsli/ /wiː; wi/ /æt; ət/ /lɪŋk/ /fil/ /ðæt/ /wiː; wi/ /hæv/ /ə; eɪ/ /ˈwʌndərfl/ /ˈplætfɔːrm/ /fɔːr; fər/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /bʌt/ /aɪ/ /wʊd/ /biː/ /sərˈpraɪzd/"
  },
  {
    "id": "123",
    "sentence": "if most of our members",
    "chinese": "如果我们的大多数会员",
    "pronunciation": "/ɪf/ /moʊst/ /ʌv/ /aʊr/ /ˈmembərz/"
  },
  {
    "id": "124",
    "sentence": "Obviously , we at LingQ feel that we have a wonderful platform for language learning , but I would be surprised if most of our members",
    "chinese": "显然，我们在LingQ认为我们拥有一个出色的语言学习平台，但如果我们的大多数会员",
    "pronunciation": "/ˈɑːbviəsli/ /wiː; wi/ /æt; ət/ /lɪŋk/ /fil/ /ðæt/ /wiː; wi/ /hæv/ /ə; eɪ/ /ˈwʌndərfl/ /ˈplætfɔːrm/ /fɔːr; fər/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /bʌt/ /aɪ/ /wʊd/ /biː/ /sərˈpraɪzd/ /ɪf/ /moʊst/ /ʌv/ /aʊr/ /ˈmembərz/"
  },
  {
    "id": "125",
    "sentence": "don't also buy books",
    "chinese": "不也购买书籍",
    "pronunciation": "/doʊnt/ /ˈɔːlsoʊ/ /baɪ/ /bʊks/"
  },
  {
    "id": "126",
    "sentence": "Obviously , we at LingQ feel that we have a wonderful platform for language learning , but I would be surprised if most of our members don't also buy books",
    "chinese": "显然，我们在LingQ认为我们拥有一个出色的语言学习平台，但如果我们的大多数会员不购买书籍，我会感到惊讶",
    "pronunciation": "/ˈɑːbviəsli/ /wiː; wi/ /æt; ət/ /lɪŋk/ /fil/ /ðæt/ /wiː; wi/ /hæv/ /ə; eɪ/ /ˈwʌndərfl/ /ˈplætfɔːrm/ /fɔːr; fər/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /bʌt/ /aɪ/ /wʊd/ /biː/ /sərˈpraɪzd/ /ɪf/ /moʊst/ /ʌv/ /aʊr/ /ˈmembərz/ /doʊnt/ /ˈɔːlsoʊ/ /baɪ/ /bʊks/"
  },
  {
    "id": "127",
    "sentence": "You can also borrow them",
    "chinese": "你也可以借用它们",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈɔːlsoʊ/ /ˈbɑːroʊ/ /ðem; ðəm/"
  },
  {
    "id": "128",
    "sentence": "that's fine",
    "chinese": "没问题的",
    "pronunciation": "/ðæts/ /faɪn/"
  },
  {
    "id": "129",
    "sentence": "You can also borrow them , that's fine",
    "chinese": "你也可以借用它们，没问题的",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈɔːlsoʊ/ /ˈbɑːroʊ/ /ðem; ðəm/ /ðæts/ /faɪn/"
  },
  {
    "id": "130",
    "sentence": "A book will last",
    "chinese": "一本书可以持久",
    "pronunciation": "/ə; eɪ/ /bʊk/ /wɪl/ /læst/"
  },
  {
    "id": "131",
    "sentence": "you a long time",
    "chinese": "你很长时间",
    "pronunciation": "/juː; jʊ/ /ə; eɪ/ /lɔːŋ/ /taɪm/"
  },
  {
    "id": "132",
    "sentence": "A book will last you a long time",
    "chinese": "一本书可以陪伴你很长时间",
    "pronunciation": "/ə; eɪ/ /bʊk/ /wɪl/ /læst/ /juː; jʊ/ /ə; eɪ/ /lɔːŋ/ /taɪm/"
  },
  {
    "id": "133",
    "sentence": "It's not a big investment",
    "chinese": "这不是一笔大投资",
    "pronunciation": "/ɪts/ /nɑːt/ /ə; eɪ/ /bɪɡ/ /ɪnˈvestmənt/"
  },
  {
    "id": "134",
    "sentence": "whereas language learning",
    "chinese": "而语言学习",
    "pronunciation": "/ˌwerˈæz/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "135",
    "sentence": "It's not a big investment , whereas language learning",
    "chinese": "这不是一笔大投资，而语言学习",
    "pronunciation": "/ɪts/ /nɑːt/ /ə; eɪ/ /bɪɡ/ /ɪnˈvestmənt/ /ˌwerˈæz/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "136",
    "sentence": "is a major investment",
    "chinese": "是你时间上的主要投资",
    "pronunciation": "/ɪz/ /ə; eɪ/ /ˈmeɪdʒər/ /ɪnˈvestmənt/"
  },
  {
    "id": "137",
    "sentence": "It's not a big investment , whereas language learning is a major investment",
    "chinese": "这不是一笔大投资，而语言学习是你时间上的主要投资",
    "pronunciation": "/ɪts/ /nɑːt/ /ə; eɪ/ /bɪɡ/ /ɪnˈvestmənt/ /ˌwerˈæz/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /ɪz/ /ə; eɪ/ /ˈmeɪdʒər/ /ɪnˈvestmənt/"
  },
  {
    "id": "138",
    "sentence": "of your time",
    "chinese": "在你时间上的",
    "pronunciation": "/ʌv/ /jʊr; jər/ /taɪm/"
  },
  {
    "id": "139",
    "sentence": "It's not a big investment , whereas language learning is a major investment of your time",
    "chinese": "这不是一笔大投资，而语言学习是你时间上的主要投资",
    "pronunciation": "/ɪts/ /nɑːt/ /ə; eɪ/ /bɪɡ/ /ɪnˈvestmənt/ /ˌwerˈæz/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/ /ɪz/ /ə; eɪ/ /ˈmeɪdʒər/ /ɪnˈvestmənt/ /ʌv/ /jʊr; jər/ /taɪm/"
  },
  {
    "id": "140",
    "sentence": "So I would suggest",
    "chinese": "因此，我建议",
    "pronunciation": "/soʊ/ /aɪ/ /wʊd/ /səˈdʒest/"
  },
  {
    "id": "141",
    "sentence": "anyone beginning in a language",
    "chinese": "任何刚开始学习一门语言的人",
    "pronunciation": "/ˈeniwʌn/ /bɪˈɡɪnɪŋ/ /ɪn/ /ə; eɪ/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "142",
    "sentence": "So I would suggest anyone beginning in a language",
    "chinese": "因此，我建议任何刚开始学习一门语言的人",
    "pronunciation": "/soʊ/ /aɪ/ /wʊd/ /səˈdʒest/ /ˈeniwʌn/ /bɪˈɡɪnɪŋ/ /ɪn/ /ə; eɪ/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "143",
    "sentence": "should buy one of these",
    "chinese": "应该购买其中一套",
    "pronunciation": "/ʃʊd; ʃəd/ /baɪ/ /wʌn/ /ʌv/ /ðiːz/"
  },
  {
    "id": "144",
    "sentence": "So I would suggest anyone beginning in a language should buy one of these",
    "chinese": "因此，我建议任何刚开始学习一门语言的人都应该购买一套这样的",
    "pronunciation": "/soʊ/ /aɪ/ /wʊd/ /səˈdʒest/ /ˈeniwʌn/ /bɪˈɡɪnɪŋ/ /ɪn/ /ə; eɪ/ /ˈlæŋɡwɪdʒ/ /ʃʊd; ʃəd/ /baɪ/ /wʌn/ /ʌv/ /ðiːz/"
  },
  {
    "id": "145",
    "sentence": "beginner series",
    "chinese": "入门系列教材",
    "pronunciation": "/bɪˈɡɪnər/ /ˈsɪriːz/"
  },
  {
    "id": "146",
    "sentence": "So I would suggest anyone beginning in a language should buy one of these beginner series",
    "chinese": "因此，我建议任何刚开始学习一门语言的人都应该购买一套这样的入门系列教材",
    "pronunciation": "/soʊ/ /aɪ/ /wʊd/ /səˈdʒest/ /ˈeniwʌn/ /bɪˈɡɪnɪŋ/ /ɪn/ /ə; eɪ/ /ˈlæŋɡwɪdʒ/ /ʃʊd; ʃəd/ /baɪ/ /wʌn/ /ʌv/ /ðiːz/ /bɪˈɡɪnər/ /ˈsɪriːz/"
  },
  {
    "id": "147",
    "sentence": "If you're an English speaker",
    "chinese": "如果你是英语使用者",
    "pronunciation": "/ɪf/ /jʊr/ /æn; ən/ /ˈɪŋɡlɪʃ/ /ˈspiːkər/"
  },
  {
    "id": "148",
    "sentence": "then there is",
    "chinese": "那么有",
    "pronunciation": "/ðen/ /ðer; ðər/ /ɪz/"
  },
  {
    "id": "149",
    "sentence": "If you're an English speaker , then there is",
    "chinese": "如果你是英语使用者，那么",
    "pronunciation": "/ɪf/ /jʊr/ /æn; ən/ /ˈɪŋɡlɪʃ/ /ˈspiːkər/ /ðen/ /ðer; ðər/ /ɪz/"
  },
  {
    "id": "150",
    "sentence": "the Teach Yourself Series",
    "chinese": "《自学》系列",
    "pronunciation": "/ðə/ /tiːtʃ/ /jɔːrˈself/ /ˈsɪriːz/"
  },
  {
    "id": "151",
    "sentence": "If you're an English speaker , then there is the Teach Yourself Series",
    "chinese": "如果你是英语使用者，那么有《Teach Yourself》系列",
    "pronunciation": "/ɪf/ /jʊr/ /æn; ən/ /ˈɪŋɡlɪʃ/ /ˈspiːkər/ /ðen/ /ðer; ðər/ /ɪz/ /ðə/ /tiːtʃ/ /jɔːrˈself/ /ˈsɪriːz/"
  },
  {
    "id": "152",
    "sentence": "or the Colloquial Series",
    "chinese": "或《Colloquial》系列",
    "pronunciation": "/ɔr/ /ðə/ /kəˈloʊkwiəl/ /ˈsɪriːz/"
  },
  {
    "id": "153",
    "sentence": "If you're an English speaker , then there is the Teach Yourself Series or the Colloquial Series",
    "chinese": "如果你是英语使用者，那么可以选择《Teach Yourself》系列或《Colloquial》系列",
    "pronunciation": "/ɪf/ /jʊr/ /æn; ən/ /ˈɪŋɡlɪʃ/ /ˈspiːkər/ /ðen/ /ðer; ðər/ /ɪz/ /ðə/ /tiːtʃ/ /jɔːrˈself/ /ˈsɪriːz/ /ɔr/ /ðə/ /kəˈloʊkwiəl/ /ˈsɪriːz/"
  },
  {
    "id": "154",
    "sentence": "There's Assimil",
    "chinese": "有Assimil",
    "pronunciation": "/ðerz/ /əˈsɪmɪl/"
  },
  {
    "id": "155",
    "sentence": "which is available",
    "chinese": "可以获得的",
    "pronunciation": "/wɪtʃ/ /ɪz/ /əˈveɪləb(ə)l/"
  },
  {
    "id": "156",
    "sentence": "There's Assimil , which is available",
    "chinese": "有Assimil，它可供使用",
    "pronunciation": "/ðerz/ /əˈsɪmɪl/ /wɪtʃ/ /ɪz/ /əˈveɪləb(ə)l/"
  },
  {
    "id": "157",
    "sentence": "for French speakers",
    "chinese": "适用于法语使用者",
    "pronunciation": "/fɔːr; fər/ /frentʃ/ /ˈspiːkərz/"
  },
  {
    "id": "158",
    "sentence": "There's Assimil , which is available for French speakers",
    "chinese": "有Assimil，它适用于法语使用者",
    "pronunciation": "/ðerz/ /əˈsɪmɪl/ /wɪtʃ/ /ɪz/ /əˈveɪləb(ə)l/ /fɔːr; fər/ /frentʃ/ /ˈspiːkərz/"
  },
  {
    "id": "159",
    "sentence": "and English speakers",
    "chinese": "和英语使用者",
    "pronunciation": "/ænd; ənd/ /ˈɪŋɡlɪʃ/ /ˈspiːkərz/"
  },
  {
    "id": "160",
    "sentence": "There's Assimil , which is available for French speakers and English speakers",
    "chinese": "有Assimil，它适用于法语和英语使用者",
    "pronunciation": "/ðerz/ /əˈsɪmɪl/ /wɪtʃ/ /ɪz/ /əˈveɪləb(ə)l/ /fɔːr; fər/ /frentʃ/ /ˈspiːkərz/ /ænd; ənd/ /ˈɪŋɡlɪʃ/ /ˈspiːkərz/"
  },
  {
    "id": "161",
    "sentence": "There are a number of",
    "chinese": "有一些",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/"
  },
  {
    "id": "162",
    "sentence": "these starter books",
    "chinese": "这些入门书籍",
    "pronunciation": "/ðiːz/ /ˈstɑːrtər/ /bʊks/"
  },
  {
    "id": "163",
    "sentence": "There are a number of these starter books",
    "chinese": "有一些入门书籍",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /ðiːz/ /ˈstɑːrtər/ /bʊks/"
  },
  {
    "id": "164",
    "sentence": "get one",
    "chinese": "买一本",
    "pronunciation": "/ɡet/ /wʌn/"
  },
  {
    "id": "165",
    "sentence": "There are a number of these starter books , get one",
    "chinese": "有一些入门书籍，买一本吧",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /ðiːz/ /ˈstɑːrtər/ /bʊks/ /ɡet/ /wʌn/"
  },
  {
    "id": "166",
    "sentence": "I will often buy",
    "chinese": "我经常会买",
    "pronunciation": "/aɪ/ /wɪl/ /ˈɔːf(ə)n/ /baɪ/"
  },
  {
    "id": "167",
    "sentence": "one or two",
    "chinese": "一两个",
    "pronunciation": "/wʌn/ /ɔr/ /tuː/"
  },
  {
    "id": "168",
    "sentence": "I will often buy one or two",
    "chinese": "我经常会买一两个",
    "pronunciation": "/aɪ/ /wɪl/ /ˈɔːf(ə)n/ /baɪ/ /wʌn/ /ɔr/ /tuː/"
  },
  {
    "id": "169",
    "sentence": "While my main interest",
    "chinese": "虽然我的主要兴趣",
    "pronunciation": "/waɪl/ /maɪ/ /meɪn/ /ˈɪntrɛst/"
  },
  {
    "id": "170",
    "sentence": "is listening and reading",
    "chinese": "是听和读",
    "pronunciation": "/ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/"
  },
  {
    "id": "171",
    "sentence": "While my main interest is listening and reading",
    "chinese": "虽然我的主要兴趣是听和读",
    "pronunciation": "/waɪl/ /maɪ/ /meɪn/ /ˈɪntrɛst/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/"
  },
  {
    "id": "172",
    "sentence": "to the dialogue",
    "chinese": "到对话",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈdaɪəlɔːɡ/"
  },
  {
    "id": "173",
    "sentence": "While my main interest is listening and reading to the dialogue",
    "chinese": "虽然我的主要兴趣是听和读对话",
    "pronunciation": "/waɪl/ /maɪ/ /meɪn/ /ˈɪntrɛst/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/ /tuː; tə/ /ðə/ /ˈdaɪəlɔːɡ/"
  },
  {
    "id": "174",
    "sentence": "I also flip through it",
    "chinese": "我也偶尔翻阅它",
    "pronunciation": "/aɪ/ /ˈɔːlsoʊ/ /flɪp/ /θruː/ /ɪt/"
  },
  {
    "id": "175",
    "sentence": "While my main interest is listening and reading to the dialogue , I also flip through it",
    "chinese": "虽然我的主要兴趣是听和读对话，但我也偶尔翻阅它",
    "pronunciation": "/waɪl/ /maɪ/ /meɪn/ /ˈɪntrɛst/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/ /tuː; tə/ /ðə/ /ˈdaɪəlɔːɡ/ /aɪ/ /ˈɔːlsoʊ/ /flɪp/ /θruː/ /ɪt/"
  },
  {
    "id": "176",
    "sentence": "for some of the explanations",
    "chinese": "为了一些解释",
    "pronunciation": "/fɔːr; fər/ /sʌm; səm/ /ʌv/ /ðə/ /ˌekspləˈneɪʃənz/"
  },
  {
    "id": "177",
    "sentence": "While my main interest is listening and reading to the dialogue , I also flip through it for some of the explanations",
    "chinese": "虽然我的主要兴趣是听和读对话，但我也偶尔翻阅一些解释",
    "pronunciation": "/waɪl/ /maɪ/ /meɪn/ /ˈɪntrɛst/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/ /tuː; tə/ /ðə/ /ˈdaɪəlɔːɡ/ /aɪ/ /ˈɔːlsoʊ/ /flɪp/ /θruː/ /ɪt/ /fɔːr; fər/ /sʌm; səm/ /ʌv/ /ðə/ /ˌekspləˈneɪʃənz/"
  },
  {
    "id": "178",
    "sentence": "never expecting to remember them",
    "chinese": "从不指望记住它们",
    "pronunciation": "/ˈnev.ɚ/ /ɪkˈspektɪŋ/ /tuː; tə/ /rɪˈmembər/ /ðem; ðəm/"
  },
  {
    "id": "179",
    "sentence": "While my main interest is listening and reading to the dialogue , I also flip through it for some of the explanations never expecting to remember them",
    "chinese": "虽然我的主要兴趣是听和读对话，但我也偶尔翻阅一些解释，并不指望记住它们",
    "pronunciation": "/waɪl/ /maɪ/ /meɪn/ /ˈɪntrɛst/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/ /tuː; tə/ /ðə/ /ˈdaɪəlɔːɡ/ /aɪ/ /ˈɔːlsoʊ/ /flɪp/ /θruː/ /ɪt/ /fɔːr; fər/ /sʌm; səm/ /ʌv/ /ðə/ /ˌekspləˈneɪʃənz/ /ˈnev.ɚ/ /ɪkˈspektɪŋ/ /tuː; tə/ /rɪˈmembər/ /ðem; ðəm/"
  },
  {
    "id": "180",
    "sentence": "but as sort of a gradual refresher",
    "chinese": "但作为一种渐进的复习",
    "pronunciation": "/bʌt/ /æz; əz/ /sɔrt/ /ʌv/ /ə; eɪ/ /ˈɡrædʒuəl/ /rɪˈfreʃər/"
  },
  {
    "id": "181",
    "sentence": "While my main interest is listening and reading to the dialogue , I also flip through it for some of the explanations never expecting to remember them , but as sort of a gradual refresher",
    "chinese": "虽然我的主要兴趣是听和读对话，但我也偶尔翻阅一些解释，并不指望记住它们，而是作为一种渐进的复习",
    "pronunciation": "/waɪl/ /maɪ/ /meɪn/ /ˈɪntrɛst/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/ /tuː; tə/ /ðə/ /ˈdaɪəlɔːɡ/ /aɪ/ /ˈɔːlsoʊ/ /flɪp/ /θruː/ /ɪt/ /fɔːr; fər/ /sʌm; səm/ /ʌv/ /ðə/ /ˌekspləˈneɪʃənz/ /ˈnev.ɚ/ /ɪkˈspektɪŋ/ /tuː; tə/ /rɪˈmembər/ /ðem; ðəm/ /bʌt/ /æz; əz/ /sɔrt/ /ʌv/ /ə; eɪ/ /ˈɡrædʒuəl/ /rɪˈfreʃər/"
  },
  {
    "id": "182",
    "sentence": "that helps me notice",
    "chinese": "帮助我注意到",
    "pronunciation": "/ðæt/ /help스/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "183",
    "sentence": "While my main interest is listening and reading to the dialogue , I also flip through it for some of the explanations never expecting to remember them , but as sort of a gradual refresher that helps me notice",
    "chinese": "虽然我的主要兴趣是听和读对话，但我也偶尔翻阅一些解释，并不指望记住它们，而是作为一种渐进的复习，帮助我注意到一些细节",
    "pronunciation": "/waɪl/ /maɪ/ /meɪn/ /ˈɪntrɛst/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/ /tuː; tə/ /ðə/ /ˈdaɪəlɔːɡ/ /aɪ/ /ˈɔːlsoʊ/ /flɪp/ /θruː/ /ɪt/ /fɔːr; fər/ /sʌm; səm/ /ʌv/ /ðə/ /ˌekspləˈneɪʃənz/ /ˈnev.ɚ/ /ɪkˈspektɪŋ/ /tuː; tə/ /rɪˈmembər/ /ðem; ðəm/ /bʌt/ /æz; əz/ /sɔrt/ /ʌv/ /ə; eɪ/ /ˈɡrædʒuəl/ /rɪˈfreʃər/ /ðæt/ /help스/ /miː/ /ˈnoʊtɪs/"
  },
  {
    "id": "184",
    "sentence": "Audio books",
    "chinese": "有声书",
    "pronunciation": "/ˈɔːdioʊ/ /bʊks/"
  },
  {
    "id": "185",
    "sentence": "I'll buy a quality audio book",
    "chinese": "我将购买一本高质量的有声书",
    "pronunciation": "/aɪl/ /baɪ/ /ə; eɪ/ /ˈkwɑːləti/ /ˈɔːdioʊ/ /bʊk/"
  },
  {
    "id": "186",
    "sentence": "Audio books , I'll buy a quality audio book",
    "chinese": "有声书，我宁愿购买高质量的有声书",
    "pronunciation": "/ˈɔːdioʊ/ /bʊks/ /aɪl/ /baɪ/ /ə; eɪ/ /ˈkwɑːləti/ /ˈɔːdioʊ/ /bʊk/"
  },
  {
    "id": "187",
    "sentence": "rather than rely on",
    "chinese": "而不是依赖于",
    "pronunciation": "/ˈræðər/ /ðæn; ðən/ /rɪˈlaɪ/ /ɑːn/"
  },
  {
    "id": "188",
    "sentence": "Audio books , I'll buy a quality audio book rather than rely on",
    "chinese": "有声书，我宁愿购买高质量的有声书，也不愿依赖",
    "pronunciation": "/ˈɔːdioʊ/ /bʊks/ /aɪl/ /baɪ/ /ə; eɪ/ /ˈkwɑːləti/ /ˈɔːdioʊ/ /bʊk/ /ˈræðər/ /ðæn; ðən/ /rɪˈlaɪ/ /ɑːn/"
  },
  {
    "id": "189",
    "sentence": "LibriVox where",
    "chinese": "LibriVox 那里",
    "pronunciation": "/ˈlɪbrɪvɑːks/ /wer/"
  },
  {
    "id": "190",
    "sentence": "Audio books , I'll buy a quality audio book rather than rely on LibriVox where",
    "chinese": "有声书，我宁愿购买高质量的有声书，也不愿依赖LibriVox",
    "pronunciation": "/ˈɔːdioʊ/ /bʊks/ /aɪl/ /baɪ/ /ə; eɪ/ /ˈkwɑːləti/ /ˈɔːdioʊ/ /bʊk/ /ˈræðər/ /ðæn; ðən/ /rɪˈlaɪ/ /ɑːn/ /ˈlɪbrɪvɑːks/ /wer/"
  },
  {
    "id": "191",
    "sentence": "the quality can be uncertain",
    "chinese": "质量可能不稳定",
    "pronunciation": "/ðə/ /ˈkwɑːləti/ /kæn/ /biː/ /ʌnˈsɜːrt(ə)n/"
  },
  {
    "id": "192",
    "sentence": "Audio books , I'll buy a quality audio book rather than rely on LibriVox where the quality can be uncertain",
    "chinese": "有声书，我宁愿购买高质量的有声书，也不愿依赖LibriVox，因为那里的质量可能不稳定",
    "pronunciation": "/ˈɔːdioʊ/ /bʊks/ /aɪl/ /baɪ/ /ə; eɪ/ /ˈkwɑːləti/ /ˈɔːdioʊ/ /bʊk/ /ˈræðər/ /ðæn; ðən/ /rɪˈlaɪ/ /ɑːn/ /ˈlɪbrɪvɑːks/ /wer/ /ðə/ /ˈkwɑːləti/ /kæn/ /biː/ /ʌnˈsɜːrt(ə)n/"
  },
  {
    "id": "193",
    "sentence": "I admit",
    "chinese": "我承认",
    "pronunciation": "/aɪ/ /ædˈmɪt/"
  },
  {
    "id": "194",
    "sentence": "that I have",
    "chinese": "我有一台",
    "pronunciation": "/ðæt/ /aɪ/ /hæv/"
  },
  {
    "id": "195",
    "sentence": "I admit that I have",
    "chinese": "我承认我有",
    "pronunciation": "/aɪ/ /ædˈmɪt/ /ðæt/ /aɪ/ /hæv/"
  },
  {
    "id": "196",
    "sentence": "an iPad",
    "chinese": "一台iPad",
    "pronunciation": "/æn; ən/ /ˈaɪˈpæd/"
  },
  {
    "id": "197",
    "sentence": "I admit that I have an iPad",
    "chinese": "我承认我有一台iPad",
    "pronunciation": "/aɪ/ /ædˈmɪt/ /ðæt/ /aɪ/ /hæv/ /æn; ən/ /ˈaɪˈpæd/"
  },
  {
    "id": "198",
    "sentence": "I use the LingQ app",
    "chinese": "我使用LingQ应用程序",
    "pronunciation": "/aɪ/ /juːz/ /ðə/ /lɪŋk/ /æp/"
  },
  {
    "id": "199",
    "sentence": "on the iPad",
    "chinese": "在iPad上",
    "pronunciation": "/ɑːn/ /ðə/ /ˈaɪˈpæd/"
  },
  {
    "id": "200",
    "sentence": "I use the LingQ app on the iPad",
    "chinese": "我在iPad上使用LingQ应用程序",
    "pronunciation": "/aɪ/ /juːz/ /ðə/ /lɪŋk/ /æp/ /ɑːn/ /ðə/ /ˈaɪˈpæd/"
  },
  {
    "id": "201",
    "sentence": "and I love it",
    "chinese": "而且我喜欢它",
    "pronunciation": "/ænd; ənd/ /aɪ/ /lʌv/ /ɪt/"
  },
  {
    "id": "202",
    "sentence": "I use the LingQ app on the iPad and I love it",
    "chinese": "我在iPad上使用LingQ应用程序，非常喜欢它",
    "pronunciation": "/aɪ/ /juːz/ /ðə/ /lɪŋk/ /æp/ /ɑːn/ /ðə/ /ˈaɪˈpæd/ /ænd; ənd/ /aɪ/ /lʌv/ /ɪt/"
  },
  {
    "id": "203",
    "sentence": "I can click on",
    "chinese": "我可以点击",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/"
  },
  {
    "id": "204",
    "sentence": "my yellow words",
    "chinese": "我的黄色单词",
    "pronunciation": "/maɪ/ /ˈjeloʊ/ /wɜːrdz/"
  },
  {
    "id": "205",
    "sentence": "I can click on my yellow words",
    "chinese": "我可以点击我的黄色单词",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/ /maɪ/ /ˈjeloʊ/ /wɜːrdz/"
  },
  {
    "id": "206",
    "sentence": "I can listen to",
    "chinese": "我可以听",
    "pronunciation": "/aɪ/ /kæn/ /ˈlɪs(ə)n/ /tuː; tə/"
  },
  {
    "id": "207",
    "sentence": "I can click on my yellow words , I can listen to",
    "chinese": "我可以点击我的黄色单词，我可以听",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/ /maɪ/ /ˈjeloʊ/ /wɜːrdz/ /aɪ/ /kæn/ /ˈlɪs(ə)n/ /tuː; tə/"
  },
  {
    "id": "208",
    "sentence": "the audio portion",
    "chinese": "课程的音频部分",
    "pronunciation": "/ðə/ /ˈɔːdioʊ/ /ˈpɔːrʃ(ə)n/"
  },
  {
    "id": "209",
    "sentence": "I can click on my yellow words , I can listen to the audio portion",
    "chinese": "我可以点击我的黄色单词，我可以听课程的音频部分",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/ /maɪ/ /ˈjeloʊ/ /wɜːrdz/ /aɪ/ /kæn/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈɔːdioʊ/ /ˈpɔːrʃ(ə)n/"
  },
  {
    "id": "210",
    "sentence": "of the lesson",
    "chinese": "课程的",
    "pronunciation": "/ʌv/ /ðə/ /ˈles(ə)n/"
  },
  {
    "id": "211",
    "sentence": "I can click on my yellow words , I can listen to the audio portion of the lesson",
    "chinese": "我可以点击我的黄色单词，我可以听课程的音频部分",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/ /maɪ/ /ˈjeloʊ/ /wɜːrdz/ /aɪ/ /kæn/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈɔːdioʊ/ /ˈpɔːrʃ(ə)n/ /ʌv/ /ðə/ /ˈles(ə)n/"
  },
  {
    "id": "212",
    "sentence": "but not everyone",
    "chinese": "但并不是每个人",
    "pronunciation": "/bʌt/ /nɑːt/ /ˈevriwʌn/"
  },
  {
    "id": "213",
    "sentence": "I can click on my yellow words , I can listen to the audio portion of the lesson , but not everyone",
    "chinese": "我可以点击我的黄色单词，我可以听课程的音频部分，但并不是每个人",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/ /maɪ/ /ˈjeloʊ/ /wɜːrdz/ /aɪ/ /kæn/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈɔːdioʊ/ /ˈpɔːrʃ(ə)n/ /ʌv/ /ðə/ /ˈles(ə)n/ /bʌt/ /nɑːt/ /ˈevriwʌn/"
  },
  {
    "id": "214",
    "sentence": "is going to spend",
    "chinese": "将会花钱",
    "pronunciation": "/ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /spend/"
  },
  {
    "id": "215",
    "sentence": "I can click on my yellow words , I can listen to the audio portion of the lesson , but not everyone is going to spend",
    "chinese": "我可以点击我的黄色单词，我可以听课程的音频部分，但并不是每个人都会",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/ /maɪ/ /ˈjeloʊ/ /wɜːrdz/ /aɪ/ /kæn/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈɔːdioʊ/ /ˈpɔːrʃ(ə)n/ /ʌv/ /ðə/ /ˈles(ə)n/ /bʌt/ /nɑːt/ /ˈevriwʌn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /spend/"
  },
  {
    "id": "216",
    "sentence": "the money on",
    "chinese": "花钱在",
    "pronunciation": "/ðə/ /ˈmʌni/ /ɑːn/"
  },
  {
    "id": "217",
    "sentence": "I can click on my yellow words , I can listen to the audio portion of the lesson , but not everyone is going to spend the money on",
    "chinese": "我可以点击我的黄色单词，我可以听课程的音频部分，但并不是每个人都会花钱买",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/ /maɪ/ /ˈjeloʊ/ /wɜːrdz/ /aɪ/ /kæn/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈɔːdioʊ/ /ˈpɔːrʃ(ə)n/ /ʌv/ /ðə/ /ˈles(ə)n/ /bʌt/ /nɑːt/ /ˈevriwʌn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /spend/ /ðə/ /ˈmʌni/ /ɑːn/"
  },
  {
    "id": "218",
    "sentence": "an iPad",
    "chinese": "iPad",
    "pronunciation": "/æn; ən/ /ˈaɪˈpæd/"
  },
  {
    "id": "219",
    "sentence": "I can click on my yellow words , I can listen to the audio portion of the lesson , but not everyone is going to spend the money on an iPad",
    "chinese": "我可以点击我的黄色单词，我可以听课程的音频部分，但并不是每个人都会花钱买iPad",
    "pronunciation": "/aɪ/ /kæn/ /klɪk/ /ɑːn/ /maɪ/ /ˈjeloʊ/ /wɜːrdz/ /aɪ/ /kæn/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈɔːdioʊ/ /ˈpɔːrʃ(ə)n/ /ʌv/ /ðə/ /ˈles(ə)n/ /bʌt/ /nɑːt/ /ˈevriwʌn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /spend/ /ðə/ /ˈmʌni/ /ɑːn/ /æn; ən/ /ˈaɪˈpæd/"
  },
  {
    "id": "220",
    "sentence": "All I'm saying is",
    "chinese": "我想说的是",
    "pronunciation": "/ɔːl/ /aɪm/ /ˈseɪɪŋ/ /ɪz/"
  },
  {
    "id": "221",
    "sentence": "don't think you can do everything",
    "chinese": "不要以为你可以做所有事情",
    "pronunciation": "/doʊnt/ /θɪŋk/ /juː; jʊ/ /kæn/ /duː; də/ /ˈevriθɪŋ/"
  },
  {
    "id": "222",
    "sentence": "All I'm saying is don't think you can do everything",
    "chinese": "我想说的是，不要以为你可以做所有事情",
    "pronunciation": "/ɔːl/ /aɪm/ /ˈseɪɪŋ/ /ɪz/ /doʊnt/ /θɪŋk/ /juː; jʊ/ /kæn/ /duː; də/ /ˈevriθɪŋ/"
  },
  {
    "id": "223",
    "sentence": "for free",
    "chinese": "免费",
    "pronunciation": "/fɔːr; fər/ /friː/"
  },
  {
    "id": "224",
    "sentence": "All I'm saying is don't think you can do everything for free",
    "chinese": "我想说的是，不要以为你可以免费做所有事情",
    "pronunciation": "/ɔːl/ /aɪm/ /ˈseɪɪŋ/ /ɪz/ /doʊnt/ /θɪŋk/ /juː; jʊ/ /kæn/ /duː; də/ /ˈevriθɪŋ/ /fɔːr; fər/ /friː/"
  },
  {
    "id": "225",
    "sentence": "you may end up spending more time",
    "chinese": "你可能会最终花费更多时间",
    "pronunciation": "/juː; jʊ/ /meɪ/ /end/ /ʌp/ /ˈspendɪŋ/ /mɔːr/ /taɪm/"
  },
  {
    "id": "226",
    "sentence": "All I'm saying is don't think you can do everything for free , you may end up spending more time",
    "chinese": "我想说的是，不要以为你可以免费做所有事情，你可能会花费更多时间",
    "pronunciation": "/ɔːl/ /aɪm/ /ˈseɪɪŋ/ /ɪz/ /doʊnt/ /θɪŋk/ /juː; jʊ/ /kæn/ /duː; də/ /ˈevriθɪŋ/ /fɔːr; fər/ /friː/ /juː; jʊ/ /meɪ/ /end/ /ʌp/ /ˈspendɪŋ/ /mɔːr/ /taɪm/"
  },
  {
    "id": "227",
    "sentence": "trying to work around",
    "chinese": "试图绕过",
    "pronunciation": "/ˈtraɪɪŋ/ /tuː; tə/ /wɜrk/ /əˈraʊnd/"
  },
  {
    "id": "228",
    "sentence": "All I'm saying is don't think you can do everything for free , you may end up spending more time trying to work around",
    "chinese": "我想说的是，不要以为你可以免费做所有事情，你可能会花费更多时间去绕过",
    "pronunciation": "/ɔːl/ /aɪm/ /ˈseɪɪŋ/ /ɪz/ /doʊnt/ /θɪŋk/ /juː; jʊ/ /kæn/ /duː; də/ /ˈevriθɪŋ/ /fɔːr; fər/ /friː/ /juː; jʊ/ /meɪ/ /end/ /ʌp/ /ˈspendɪŋ/ /mɔːr/ /taɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /wɜrk/ /əˈraʊnd/"
  },
  {
    "id": "229",
    "sentence": "or using less than satisfactory tools",
    "chinese": "或使用不太令人满意的工具",
    "pronunciation": "/ɔr/ /ˈjuːzɪŋ/ /lɛs/ /ðæn; ðən/ /ˌsætɪsˈfækt(ə)ri/ /tuːlz/"
  },
  {
    "id": "230",
    "sentence": "All I'm saying is don't think you can do everything for free , you may end up spending more time trying to work around or using less than satisfactory tools",
    "chinese": "我想说的是，不要以为你可以免费做所有事情，你可能会花费更多时间去绕过或使用不太令人满意的工具",
    "pronunciation": "/ɔːl/ /aɪm/ /ˈseɪɪŋ/ /ɪz/ /doʊnt/ /θɪŋk/ /juː; jʊ/ /kæn/ /duː; də/ /ˈevriθɪŋ/ /fɔːr; fər/ /friː/ /juː; jʊ/ /meɪ/ /end/ /ʌp/ /ˈspendɪŋ/ /mɔːr/ /taɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /wɜrk/ /əˈraʊnd/ /ɔr/ /ˈjuːzɪŋ/ /lɛs/ /ðæn; ðən/ /ˌsætɪsˈfækt(ə)ri/ /tuːlz/"
  },
  {
    "id": "231",
    "sentence": "So whatever your budget is",
    "chinese": "所以无论你的预算是多少",
    "pronunciation": "/soʊ/ /wətˈevər/ /jʊr; jər/ /ˈbʌdʒɪt/ /ɪz/"
  },
  {
    "id": "232",
    "sentence": "make sure",
    "chinese": "确保",
    "pronunciation": "/meɪk/ /ʃʊr/"
  },
  {
    "id": "233",
    "sentence": "So whatever your budget is , make sure",
    "chinese": "所以无论你的预算多少，确保",
    "pronunciation": "/soʊ/ /wətˈevər/ /jʊr; jər/ /ˈbʌdʒɪt/ /ɪz/ /meɪk/ /ʃʊr/"
  },
  {
    "id": "234",
    "sentence": "you have the proper tools",
    "chinese": "你拥有合适的工具",
    "pronunciation": "/juː; jʊ/ /hæv/ /ðə/ /ˈprɑːpər/ /tuːlz/"
  },
  {
    "id": "235",
    "sentence": "So whatever your budget is , make sure you have the proper tools",
    "chinese": "无论你的预算多少，确保你拥有合适的工具",
    "pronunciation": "/soʊ/ /wətˈevər/ /jʊr; jər/ /ˈbʌdʒɪt/ /ɪz/ /meɪk/ /ʃʊr/ /juː; jʊ/ /hæv/ /ðə/ /ˈprɑːpər/ /tuːlz/"
  },
  {
    "id": "236",
    "sentence": "Online dictionaries",
    "chinese": "在线词典",
    "pronunciation": "/ˌɑːnˈlaɪn/ /ˈdɪkʃənˌeri/"
  },
  {
    "id": "237",
    "sentence": "for example",
    "chinese": "例如",
    "pronunciation": "/fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "238",
    "sentence": "Online dictionaries , for example",
    "chinese": "例如，在线词典",
    "pronunciation": "/ˌɑːnˈlaɪn/ /ˈdɪkʃənˌeri/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "239",
    "sentence": "if there are free ones available",
    "chinese": "如果有免费的可用",
    "pronunciation": "/ɪf/ /ðer; ðər/ /ɑr/ /friː/ /wʌnz/ /əˈveɪləb(ə)l/"
  },
  {
    "id": "240",
    "sentence": "Online dictionaries , for example , if there are free ones available",
    "chinese": "在线词典，例如，如果有免费的可用",
    "pronunciation": "/ˌɑːnˈlaɪn/ /ˈdɪkʃənˌeri/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ɪf/ /ðer; ðər/ /ɑr/ /friː/ /wʌnz/ /əˈveɪləb(ə)l/"
  },
  {
    "id": "241",
    "sentence": "get them",
    "chinese": "获取它们",
    "pronunciation": "/ɡet/ /ðem; ðəm/"
  },
  {
    "id": "242",
    "sentence": "Online dictionaries , for example , if there are free ones available get them",
    "chinese": "例如，如果有免费的在线词典，就获取它们",
    "pronunciation": "/ˌɑːnˈlaɪn/ /ˈdɪkʃənˌeri/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ɪf/ /ðer; ðər/ /ɑr/ /friː/ /wʌnz/ /əˈveɪləb(ə)l/ /ɡet/ /ðem; ðəm/"
  },
  {
    "id": "243",
    "sentence": "If that's good enough",
    "chinese": "如果那样就够了",
    "pronunciation": "/ɪf/ /ðæts/ /ɡʊd/ /ɪˈnʌf/"
  },
  {
    "id": "244",
    "sentence": "fine",
    "chinese": "那很好",
    "pronunciation": "/faɪn/"
  },
  {
    "id": "245",
    "sentence": "If that's good enough , fine",
    "chinese": "如果那样就够了，那很好",
    "pronunciation": "/ɪf/ /ðæts/ /ɡʊd/ /ɪˈnʌf/ /faɪn/"
  },
  {
    "id": "246",
    "sentence": "but if you have to spring for $5",
    "chinese": "但如果你必须花5美元",
    "pronunciation": "/bʌt/ /ɪf/ /juː; jʊ/ /hæv/ /tuː; tə/ /sprɪŋ/ /fɔːr; fər/ /faɪv/"
  },
  {
    "id": "247",
    "sentence": "If that's good enough , fine , but if you have to spring for $5",
    "chinese": "如果那样就够了，那很好，但如果你需要花5美元",
    "pronunciation": "/ɪf/ /ðæts/ /ɡʊd/ /ɪˈnʌf/ /faɪn/ /bʌt/ /ɪf/ /juː; jʊ/ /hæv/ /tuː; tə/ /sprɪŋ/ /fɔːr; fər/ /faɪv/"
  },
  {
    "id": "248",
    "sentence": "to get a good online dictionary",
    "chinese": "买一个好的在线词典",
    "pronunciation": "/tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /ˌɑːnˈlaɪn/ /ˈdɪkʃəneri/"
  },
  {
    "id": "249",
    "sentence": "If that's good enough , fine , but if you have to spring for $5 to get a good online dictionary",
    "chinese": "如果那样就够了，那很好，但如果你需要花5美元买一个好的在线词典",
    "pronunciation": "/ɪf/ /ðæts/ /ɡʊd/ /ɪˈnʌf/ /faɪn/ /bʌt/ /ɪf/ /juː; jʊ/ /hæv/ /tuː; tə/ /sprɪŋ/ /fɔːr; fər/ /faɪv/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /ˌɑːnˈlaɪn/ /ˈdɪkʃəneri/"
  },
  {
    "id": "250",
    "sentence": "or a dictionary for your iPod",
    "chinese": "或适用于iPod的词典",
    "pronunciation": "/ɔr/ /ə; eɪ/ /ˈdɪkʃəneri/ /fɔːr; fər/ /jʊr; jər/ /aɪˈpɒd/"
  },
  {
    "id": "251",
    "sentence": "If that's good enough , fine , but if you have to spring for $5 to get a good online dictionary or a dictionary for your iPod",
    "chinese": "如果那样就够了，那很好，但如果你需要花5美元买一个好的在线词典或适用于iPod的词典",
    "pronunciation": "/ɪf/ /ðæts/ /ɡʊd/ /ɪˈnʌf/ /faɪn/ /bʌt/ /ɪf/ /juː; jʊ/ /hæv/ /tuː; tə/ /sprɪŋ/ /fɔːr; fər/ /faɪv/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /ˌɑːnˈlaɪn/ /ˈdɪkʃəneri/ /ɔr/ /ə; eɪ/ /ˈdɪkʃəneri/ /fɔːr; fər/ /jʊr; jər/ /aɪˈpɒd/"
  },
  {
    "id": "252",
    "sentence": "do it",
    "chinese": "那就去做吧",
    "pronunciation": "/duː; də/ /ɪt/"
  },
  {
    "id": "253",
    "sentence": "If that's good enough , fine , but if you have to spring for $5 to get a good online dictionary or a dictionary for your iPod , do it",
    "chinese": "如果那样就够了，那很好，但如果你需要花5美元买一个好的在线词典或适用于iPod的词典，那就去做吧",
    "pronunciation": "/ɪf/ /ðæts/ /ɡʊd/ /ɪˈnʌf/ /faɪn/ /bʌt/ /ɪf/ /juː; jʊ/ /hæv/ /tuː; tə/ /sprɪŋ/ /fɔːr; fər/ /faɪv/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /ˌɑːnˈlaɪn/ /ˈdɪkʃəneri/ /ɔr/ /ə; eɪ/ /ˈdɪkʃəneri/ /fɔːr; fər/ /jʊr; jər/ /aɪˈpɒd/ /duː; də/ /ɪt/"
  },
  {
    "id": "254",
    "sentence": "EBooks , whatever",
    "chinese": "电子书，无论如何",
    "pronunciation": "/iːˈbʊks/ /wətˈevər/"
  },
  {
    "id": "255",
    "sentence": "do make sure",
    "chinese": "一定要确保",
    "pronunciation": "/duː; də/ /meɪk/ /ʃʊr/"
  },
  {
    "id": "256",
    "sentence": "EBooks , whatever , do make sure",
    "chinese": "电子书，无论如何，一定要确保",
    "pronunciation": "/iːˈbʊks/ /wətˈevər/ /duː; də/ /meɪk/ /ʃʊr/"
  },
  {
    "id": "257",
    "sentence": "you get the proper tools",
    "chinese": "你拥有合适的工具",
    "pronunciation": "/juː; jʊ/ /ɡet/ /ðə/ /ˈprɑːpər/ /tuːlz/"
  },
  {
    "id": "258",
    "sentence": "EBooks , whatever , do make sure you get the proper tools",
    "chinese": "电子书，无论如何，一定要确保你拥有合适的工具",
    "pronunciation": "/iːˈbʊks/ /wətˈevər/ /duː; də/ /meɪk/ /ʃʊr/ /juː; jʊ/ /ɡet/ /ðə/ /ˈprɑːpər/ /tuːlz/"
  },
  {
    "id": "259",
    "sentence": "It's going to make",
    "chinese": "这将会产生",
    "pronunciation": "/ɪts/ /ˈɡoʊɪŋ/ /tuː; tə/ /meɪk/"
  },
  {
    "id": "260",
    "sentence": "a big difference",
    "chinese": "重大影响",
    "pronunciation": "/ə; eɪ/ /bɪɡ/ /ˈdɪfrəns/"
  },
  {
    "id": "261",
    "sentence": "It's going to make a big difference",
    "chinese": "这将产生重大影响",
    "pronunciation": "/ɪts/ /ˈɡoʊɪŋ/ /tuː; tə/ /meɪk/ /ə; eɪ/ /bɪɡ/ /ˈdɪfrəns/"
  },
  {
    "id": "262",
    "sentence": "to your success",
    "chinese": "对你的成功",
    "pronunciation": "/tuː; tə/ /jʊr; jər/ /səkˈses/"
  },
  {
    "id": "263",
    "sentence": "It's going to make a big difference to your success",
    "chinese": "这将对你的成功产生重大影响",
    "pronunciation": "/ɪts/ /ˈɡoʊɪŋ/ /tuː; tə/ /meɪk/ /ə; eɪ/ /bɪɡ/ /ˈdɪfrəns/ /tuː; tə/ /jʊr; jər/ /səkˈses/"
  },
  {
    "id": "264",
    "sentence": "Thank you for listening",
    "chinese": "感谢大家的聆听",
    "pronunciation": "/θæŋk/ /juː; jʊ/ /fɔːr; fər/ /ˈlɪsnɪŋ/"
  },
  {
    "id": "265",
    "sentence": "and we've got",
    "chinese": "我们还有一个",
    "pronunciation": "/ænd; ənd/ /wɪv/ /ɡɑːt/"
  },
  {
    "id": "266",
    "sentence": "Thank you for listening and we've got",
    "chinese": "感谢大家的聆听，我们还有一个",
    "pronunciation": "/θæŋk/ /juː; jʊ/ /fɔːr; fər/ /ˈlɪsnɪŋ/ /ænd; ənd/ /wɪv/ /ɡɑːt/"
  },
  {
    "id": "267",
    "sentence": "one more secret to go",
    "chinese": "还有一个秘密要分享",
    "pronunciation": "/wʌn/ /mɔːr/ /ˈsiːkrət/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "268",
    "sentence": "Thank you for listening and we've got one more secret to go",
    "chinese": "感谢大家的聆听，我们还有一个秘密要分享",
    "pronunciation": "/θæŋk/ /juː; jʊ/ /fɔːr; fər/ /ˈlɪsnɪŋ/ /ænd; ənd/ /wɪv/ /ɡɑːt/ /wʌn/ /mɔːr/ /ˈsiːkrət/ /tuː; tə/ /ɡoʊ/"
  },
];
