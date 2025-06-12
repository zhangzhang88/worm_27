export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Before",
    "chinese": "之前",
    "pronunciation": "/bɪˈfɔr/"
  },
  {
    "id": "2",
    "sentence": "my",
    "chinese": "我的",
    "pronunciation": "/maɪ/"
  },
  {
    "id": "3",
    "sentence": "grandpa",
    "chinese": "爷爷",
    "pronunciation": "/ˈɡrændpɑː/"
  },
  {
    "id": "4",
    "sentence": "my grandpa",
    "chinese": "我爷爷",
    "pronunciation": "/maɪ/ /ˈɡrændpɑː/"
  },
  {
    "id": "5",
    "sentence": "took",
    "chinese": "拿出",
    "pronunciation": "/tʊk/"
  },
  {
    "id": "6",
    "sentence": "the",
    "chinese": "这",
    "pronunciation": "/ði/"
  },
  {
    "id": "7",
    "sentence": "letter",
    "chinese": "信",
    "pronunciation": "/'letər/"
  },
  {
    "id": "8",
    "sentence": "the letter",
    "chinese": "信",
    "pronunciation": "/ði/ /'letər/"
  },
  {
    "id": "9",
    "sentence": "out of",
    "chinese": "从",
    "pronunciation": "/aʊt/ /ɑːv/"
  },
  {
    "id": "10",
    "sentence": "the",
    "chinese": "这",
    "pronunciation": "/ði/"
  },
  {
    "id": "11",
    "sentence": "envelope",
    "chinese": "信封",
    "pronunciation": "/ˈɛnvəˌloʊp/"
  },
  {
    "id": "12",
    "sentence": "the envelope",
    "chinese": "信封",
    "pronunciation": "/ði/ /ˈɛnvəˌloʊp/"
  },
  {
    "id": "13",
    "sentence": "out of the envelope",
    "chinese": "从信封里",
    "pronunciation": "/aʊt/ /ɑːv/ /ði/ /ˈɛnvəˌloʊp/"
  },
  {
    "id": "14",
    "sentence": "my grandpa took the letter out of the envelope",
    "chinese": "我爷爷从信封里拿出信",
    "pronunciation": "/maɪ/ /ˈɡrændpɑː/ /tʊk/ /ði/ /'letər/ /aʊt/ /ɑːv/ /ði/ /ˈɛnvəˌloʊp/"
  },
  {
    "id": "15",
    "sentence": "Before my grandpa took the letter out of the envelope",
    "chinese": "在我爷爷从信封里拿出信之前",
    "pronunciation": "/bɪˈfɔr/ /maɪ/ /ˈɡrændpɑː/ /tʊk/ /ði/ /'letər/ /aʊt/ /ɑːv/ /ði/ /ˈɛnvəˌloʊp/"
  },
  {
    "id": "16",
    "sentence": "he",
    "chinese": "他",
    "pronunciation": "/hi/"
  },
  {
    "id": "17",
    "sentence": "found",
    "chinese": "发现",
    "pronunciation": "/faʊnd/"
  },
  {
    "id": "18",
    "sentence": "that",
    "chinese": "那",
    "pronunciation": "/ðæt/"
  },
  {
    "id": "19",
    "sentence": "the",
    "chinese": "这",
    "pronunciation": "/ði/"
  },
  {
    "id": "20",
    "sentence": "letter",
    "chinese": "信",
    "pronunciation": "/'letər/"
  },
  {
    "id": "21",
    "sentence": "the letter",
    "chinese": "信",
    "pronunciation": "/ði/ /'letər/"
  },
  {
    "id": "22",
    "sentence": "didn't belong to",
    "chinese": "不属于",
    "pronunciation": "/'dɪdnt/ /bɪˈlɔŋ/ /tu/"
  },
  {
    "id": "23",
    "sentence": "him",
    "chinese": "他",
    "pronunciation": "/hɪm/"
  },
  {
    "id": "24",
    "sentence": "the letter didn't belong to him",
    "chinese": "这封信不属于他",
    "pronunciation": "/ði/ /'letər/ /'dɪdnt/ /bɪˈlɔŋ/ /tu/ /hɪm/"
  },
  {
    "id": "25",
    "sentence": "because",
    "chinese": "因为",
    "pronunciation": "/bɪˈkɔːz/"
  },
  {
    "id": "26",
    "sentence": "the",
    "chinese": "这",
    "pronunciation": "/ði/"
  },
  {
    "id": "27",
    "sentence": "address",
    "chinese": "地址",
    "pronunciation": "/əˈdres/"
  },
  {
    "id": "28",
    "sentence": "the address",
    "chinese": "地址",
    "pronunciation": "/ði/ /əˈdres/"
  },
  {
    "id": "29",
    "sentence": "was",
    "chinese": "是",
    "pronunciation": "/wɑz/"
  },
  {
    "id": "30",
    "sentence": "wrong",
    "chinese": "错误的",
    "pronunciation": "/rɔŋ/"
  },
  {
    "id": "31",
    "sentence": "the address was wrong",
    "chinese": "地址是错误的",
    "pronunciation": "/ði/ /əˈdres/ /wɑz/ /rɔŋ/"
  },
  {
    "id": "32",
    "sentence": "because the address was wrong",
    "chinese": "因为地址是错误的",
    "pronunciation": "/bɪˈkɔːz/ /ði/ /əˈdres/ /wɑz/ /rɔŋ/"
  },
  {
    "id": "33",
    "sentence": "that the letter didn't belong to him because the address was wrong",
    "chinese": "这封信不属于他，因为地址是错误的",
    "pronunciation": "/ðæt/ /ði/ /'letər/ /'dɪdnt/ /bɪˈlɔŋ/ /tu/ /hɪm/ /bɪˈkɔːz/ /ði/ /əˈdres/ /wɑz/ /rɔŋ/"
  },
  {
    "id": "34",
    "sentence": "he found that the letter didn't belong to him because the address was wrong",
    "chinese": "他发现这封信不属于他，因为地址是错误的",
    "pronunciation": "/hi/ /faʊnd/ /ðæt/ /ði/ /'letər/ /'dɪdnt/ /bɪˈlɔŋ/ /tu/ /hɪm/ /bɪˈkɔːz/ /ði/ /əˈdres/ /wɑz/ /rɔŋ/"
  },
  {
    "id": "35",
    "sentence": "Before my grandpa took the letter out of the envelope , he found that the letter didn't belong to him because the address was wrong",
    "chinese": "在我爷爷从信封里拿出信之前，他发现这封信不属于他，因为地址是错误的",
    "pronunciation": "/bɪˈfɔr/ /maɪ/ /ˈɡrændpɑː/ /tʊk/ /ði/ /'letər/ /aʊt/ /ɑːv/ /ði/ /ˈɛnvəˌloʊp/ /hi/ /faʊnd/ /ðæt/ /ði/ /'letər/ /'dɪdnt/ /bɪˈlɔŋ/ /tu/ /hɪm/ /bɪˈkɔːz/ /ði/ /əˈdres/ /wɑz/ /rɔŋ/"
  },
  {
    "id": "36",
    "sentence": "the weather is fine and windy",
    "chinese": "天气晴朗且有风",
    "pronunciation": "/ði/ /'wɛðər/ /ɪz/ /faɪn/ /ænd/ /ˈwɪndi/"
  },
  {
    "id": "37",
    "sentence": "If the weather is fine and windy",
    "chinese": "如果天气晴朗且有风",
    "pronunciation": "/ɪf/ /ði/ /'wɛðər/ /ɪz/ /faɪn/ /ænd/ /ˈwɪndi/"
  },
  {
    "id": "38",
    "sentence": "this couple will fly kite",
    "chinese": "这对夫妇会放风筝",
    "pronunciation": "/ðɪs/ /'kʌpl/ /wɪl/ /flaɪ/ /kaɪt/"
  },
  {
    "id": "39",
    "sentence": "at the hill",
    "chinese": "在山上",
    "pronunciation": "/æt/ /ði/ /hɪl/"
  },
  {
    "id": "40",
    "sentence": "this couple will fly kite at the hill",
    "chinese": "这对夫妇会在山上放风筝",
    "pronunciation": "/ðɪs/ /'kʌpl/ /wɪl/ /flaɪ/ /kaɪt/ /æt/ /ði/ /hɪl/"
  },
  {
    "id": "41",
    "sentence": "If the weather is fine and windy , this couple will fly kite at the hill",
    "chinese": "如果天气晴朗且有风，这对夫妇会在山上放风筝",
    "pronunciation": "/ɪf/ /ði/ /'wɛðər/ /ɪz/ /faɪn/ /ænd/ /ˈwɪndi/ /ðɪs/ /'kʌpl/ /wɪl/ /flaɪ/ /kaɪt/ /æt/ /ði/ /hɪl/"
  },
  {
    "id": "42",
    "sentence": "however",
    "chinese": "然而",
    "pronunciation": "/həˈʒɑːvər/"
  },
  {
    "id": "43",
    "sentence": "the weather is awful",
    "chinese": "天气糟糕",
    "pronunciation": "/ði/ /'wɛðər/ /ɪz/ /'ɔːfəl/"
  },
  {
    "id": "44",
    "sentence": "if the weather is awful",
    "chinese": "如果天气糟糕",
    "pronunciation": "/ɪf/ /ði/ /'wɛðər/ /ɪz/ /'ɔːfəl/"
  },
  {
    "id": "45",
    "sentence": "they will go to the cinema",
    "chinese": "他们会去电影院",
    "pronunciation": "/ðeɪ/ /wɪl/ /ɡoʊ/ /tu/ /ði/ /'sɪnəmə/"
  },
  {
    "id": "46",
    "sentence": "to see the funny movies",
    "chinese": "看有趣的电影",
    "pronunciation": "/tu/ /siː/ /ði/ /ˈfʌni/ /'mu:viz/"
  },
  {
    "id": "47",
    "sentence": "they will go to the cinema to see the funny movies",
    "chinese": "他们会去电影院看有趣的电影",
    "pronunciation": "/ðeɪ/ /wɪl/ /ɡoʊ/ /tu/ /ði/ /'sɪnəmə/ /tu/ /siː/ /ði/ /ˈfʌni/ /'mu:viz/"
  },
  {
    "id": "48",
    "sentence": "if the weather is awful , they will go to the cinema to see the funny movies",
    "chinese": "如果天气糟糕，他们会去电影院看有趣的电影",
    "pronunciation": "/ɪf/ /ði/ /'wɛðər/ /ɪz/ /'ɔːfəl/ /ðeɪ/ /wɪl/ /ɡoʊ/ /tu/ /ði/ /'sɪnəmə/ /tu/ /siː/ /ði/ /ˈfʌni/ /'mu:viz/"
  },
  {
    "id": "49",
    "sentence": "however , if the weather is awful , they will go to the cinema to see the funny movies",
    "chinese": "然而，如果天气糟糕，他们会去电影院看有趣的电影",
    "pronunciation": "/həˈʒɑːvər/ /ɪf/ /ði/ /'wɛðər/ /ɪz/ /'ɔːfəl/ /ðeɪ/ /wɪl/ /ɡoʊ/ /tu/ /ði/ /'sɪnəmə/ /tu/ /siː/ /ði/ /ˈfʌni/ /'mu:viz/"
  },
  {
    "id": "50",
    "sentence": "If the weather is fine and windy , this couple will fly kite at the hill ; however , if the weather is awful , they will go to the cinema to see the funny movies",
    "chinese": "如果天气晴朗且有风，这对夫妇会在山上放风筝；然而，如果天气糟糕，他们会去电影院看有趣的电影",
    "pronunciation": "/ɪf/ /ði/ /'wɛðər/ /ɪz/ /faɪn/ /ænd/ /ˈwɪndi/ /ðɪs/ /'kʌpl/ /wɪl/ /flaɪ/ /kaɪt/ /æt/ /ði/ /hɪl/ /həˈʒɑːvər/ /ɪf/ /ði/ /'wɛðər/ /ɪz/ /'ɔːfəl/ /ðeɪ/ /wɪl/ /ɡoʊ/ /tu/ /ði/ /'sɪnəmə/ /tu/ /siː/ /ði/ /ˈfʌni/ /'mu:viz/"
  },
  {
    "id": "51",
    "sentence": "Last night",
    "chinese": "昨晚",
    "pronunciation": "/læst/ /naɪt/"
  },
  {
    "id": "52",
    "sentence": "he",
    "chinese": "他",
    "pronunciation": "/hi/"
  },
  {
    "id": "53",
    "sentence": "was caught",
    "chinese": "被困住",
    "pronunciation": "/wɑz/ /kɔːt/"
  },
  {
    "id": "54",
    "sentence": "in a heavy rain",
    "chinese": "在大雨中",
    "pronunciation": "/ɪn/ /eɪ/ /ˈhɛvi/ /reɪn/"
  },
  {
    "id": "55",
    "sentence": "was caught in a heavy rain",
    "chinese": "被大雨困住",
    "pronunciation": "/wɑz/ /kɔːt/ /ɪn/ /eɪ/ /ˈhɛvi/ /reɪn/"
  },
  {
    "id": "56",
    "sentence": "he was caught in a heavy rain",
    "chinese": "他被大雨困住",
    "pronunciation": "/hi/ /wɑz/ /kɔːt/ /ɪn/ /eɪ/ /ˈhɛvi/ /reɪn/"
  },
  {
    "id": "57",
    "sentence": "Last night , he was caught in a heavy rain",
    "chinese": "昨晚，他被大雨困住",
    "pronunciation": "/læst/ /naɪt/ /hi/ /wɑz/ /kɔːt/ /ɪn/ /eɪ/ /ˈhɛvi/ /reɪn/"
  },
  {
    "id": "58",
    "sentence": "the whole body",
    "chinese": "全身",
    "pronunciation": "/ði/ /hoʊl/ /'bɑdi/"
  },
  {
    "id": "59",
    "sentence": "was",
    "chinese": "是",
    "pronunciation": "/wɑz/"
  },
  {
    "id": "60",
    "sentence": "completely wet",
    "chinese": "完全湿透",
    "pronunciation": "/kəmˈpliːtli/ /wɛt/"
  },
  {
    "id": "61",
    "sentence": "was completely wet",
    "chinese": "完全湿透",
    "pronunciation": "/wɑz/ /kəmˈpliːtli/ /wɛt/"
  },
  {
    "id": "62",
    "sentence": "the whole body was completely wet",
    "chinese": "全身完全湿透",
    "pronunciation": "/ði/ /hoʊl/ /'bɑdi/ /wɑz/ /kəmˈpliːtli/ /wɛt/"
  },
  {
    "id": "63",
    "sentence": "this morning",
    "chinese": "今天早上",
    "pronunciation": "/ðɪs/ /ˈmɔːrnɪŋ/"
  },
  {
    "id": "64",
    "sentence": "he",
    "chinese": "他",
    "pronunciation": "/hi/"
  },
  {
    "id": "65",
    "sentence": "got",
    "chinese": "得",
    "pronunciation": "/ɡɑːt/"
  },
  {
    "id": "66",
    "sentence": "a bad cold and headache",
    "chinese": "重感冒和头痛",
    "pronunciation": "/eɪ/ /bæd/ /koʊld/ /ænd/ /ˈhɛdˌeɪk/"
  },
  {
    "id": "67",
    "sentence": "got a bad cold and headache",
    "chinese": "得了重感冒和头痛",
    "pronunciation": "/ɡɑːt/ /eɪ/ /bæd/ /koʊld/ /ænd/ /ˈhɛdˌeɪk/"
  },
  {
    "id": "68",
    "sentence": "he got a bad cold and headache",
    "chinese": "他得了重感冒和头痛",
    "pronunciation": "/hi/ /ɡɑːt/ /eɪ/ /bæd/ /koʊld/ /ænd/ /ˈhɛdˌeɪk/"
  },
  {
    "id": "69",
    "sentence": "this morning , he got a bad cold and headache",
    "chinese": "今天早上，他得了重感冒和头痛",
    "pronunciation": "/ðɪs/ /ˈmɔːrnɪŋ/ /hi/ /ɡɑːt/ /eɪ/ /bæd/ /koʊld/ /ænd/ /ˈhɛdˌeɪk/"
  },
  {
    "id": "70",
    "sentence": "Now",
    "chinese": "现在",
    "pronunciation": "/naʊ/"
  },
  {
    "id": "71",
    "sentence": "he",
    "chinese": "他",
    "pronunciation": "/hi/"
  },
  {
    "id": "72",
    "sentence": "is resting",
    "chinese": "休息",
    "pronunciation": "/ɪz/ /'restɪŋ/"
  },
  {
    "id": "73",
    "sentence": "in the bedroom",
    "chinese": "在卧室",
    "pronunciation": "/ɪn/ /ði/ /'bɛdrum/"
  },
  {
    "id": "74",
    "sentence": "is resting in the bedroom",
    "chinese": "在卧室休息",
    "pronunciation": "/ɪz/ /'restɪŋ/ /ɪn/ /ði/ /'bɛdrum/"
  },
  {
    "id": "75",
    "sentence": "he is resting in the bedroom",
    "chinese": "他在卧室休息",
    "pronunciation": "/hi/ /ɪz/ /'restɪŋ/ /ɪn/ /ði/ /'bɛdrum/"
  },
  {
    "id": "76",
    "sentence": "Now he is resting in the bedroom",
    "chinese": "现在他在卧室休息",
    "pronunciation": "/naʊ/ /hi/ /ɪz/ /'restɪŋ/ /ɪn/ /ði/ /'bɛdrum/"
  },
  {
    "id": "77",
    "sentence": "Last night , he was caught in a heavy rain and the whole body was completely wet and this morning , he got a bad cold and headache , Now he is resting in the bedroom",
    "chinese": "昨晚，他被大雨困住，全身完全湿透，今天早上，他得了重感冒和头痛，现在他在卧室休息",
    "pronunciation": "/læst/ /naɪt/ /hi/ /wɑz/ /kɔːt/ /ɪn/ /eɪ/ /ˈhɛvi/ /reɪn/ /ænd/ /ði/ /hoʊl/ /'bɑdi/ /wɑz/ /kəmˈpliːtli/ /wɛt/ /ænd/ /ðɪs/ /ˈmɔːrnɪŋ/ /hi/ /ɡɑːt/ /eɪ/ /bæd/ /koʊld/ /ænd/ /ˈhɛdˌeɪk/ /naʊ/ /hi/ /ɪz/ /'restɪŋ/ /ɪn/ /ði/ /'bɛdrum/"
  },
  {
    "id": "78",
    "sentence": "Those",
    "chinese": "那些",
    "pronunciation": "/ðoʊz/"
  },
  {
    "id": "79",
    "sentence": "two",
    "chinese": "两位",
    "pronunciation": "/tu/"
  },
  {
    "id": "80",
    "sentence": "female",
    "chinese": "女性",
    "pronunciation": "/ˈfiːmeɪl/"
  },
  {
    "id": "81",
    "sentence": "heroes",
    "chinese": "英雄",
    "pronunciation": "/美式音标/"
  },
  {
    "id": "82",
    "sentence": "Those two female heroes",
    "chinese": "那些两位女性英雄",
    "pronunciation": "/ðoʊz/ /tu/ /ˈfiːmeɪl/ /美式音标/"
  },
  {
    "id": "83",
    "sentence": "select",
    "chinese": "选择",
    "pronunciation": "/sɪˈlɛkt/"
  },
  {
    "id": "84",
    "sentence": "some",
    "chinese": "一些",
    "pronunciation": "/sʌm/"
  },
  {
    "id": "85",
    "sentence": "potatoes",
    "chinese": "土豆",
    "pronunciation": "/pəˈteɪtoʊz/"
  },
  {
    "id": "86",
    "sentence": "and",
    "chinese": "和",
    "pronunciation": "/ænd/"
  },
  {
    "id": "87",
    "sentence": "tomatoes",
    "chinese": "西红柿",
    "pronunciation": "/təˈmeɪtoʊz/"
  },
  {
    "id": "88",
    "sentence": "some potatoes and tomatoes",
    "chinese": "一些土豆和西红柿",
    "pronunciation": "/sʌm/ /pəˈteɪtoʊz/ /ænd/ /təˈmeɪtoʊz/"
  },
  {
    "id": "89",
    "sentence": "in",
    "chinese": "在",
    "pronunciation": "/ɪn/"
  },
  {
    "id": "90",
    "sentence": "the",
    "chinese": "这",
    "pronunciation": "/ði/"
  },
  {
    "id": "91",
    "sentence": "supermarket",
    "chinese": "超市",
    "pronunciation": "/'supɝmɑrkət/"
  },
  {
    "id": "92",
    "sentence": "in the supermarket",
    "chinese": "在超市",
    "pronunciation": "/ɪn/ /ði/ /'supɝmɑrkət/"
  },
  {
    "id": "93",
    "sentence": "Those two female heroes select some potatoes and tomatoes in the supermarket",
    "chinese": "那些两位女性英雄在超市选择一些土豆和西红柿",
    "pronunciation": "/ðoʊz/ /tu/ /ˈfiːmeɪl/ /美式音标/ /sɪˈlɛkt/ /sʌm/ /pəˈteɪtoʊz/ /ænd/ /təˈmeɪtoʊz/ /ɪn/ /ði/ /'supɝmɑrkət/"
  },
  {
    "id": "94",
    "sentence": "In",
    "chinese": "在",
    "pronunciation": "/ɪn/"
  },
  {
    "id": "95",
    "sentence": "his",
    "chinese": "他的",
    "pronunciation": "/hɪz/"
  },
  {
    "id": "96",
    "sentence": "diary",
    "chinese": "日记",
    "pronunciation": "/'daɪəri/"
  },
  {
    "id": "97",
    "sentence": "his diary",
    "chinese": "他的日记",
    "pronunciation": "/hɪz/ /'daɪəri/"
  },
  {
    "id": "98",
    "sentence": "In his diary",
    "chinese": "在他的日记中",
    "pronunciation": "/ɪn/ /hɪz/ /'daɪəri/"
  },
  {
    "id": "99",
    "sentence": "he",
    "chinese": "他",
    "pronunciation": "/hi/"
  },
  {
    "id": "100",
    "sentence": "wrote down",
    "chinese": "写下",
    "pronunciation": "/roʊt/ /daʊn/"
  },
  {
    "id": "101",
    "sentence": "the",
    "chinese": "这",
    "pronunciation": "/ði/"
  },
  {
    "id": "102",
    "sentence": "trip",
    "chinese": "旅行",
    "pronunciation": "/trɪp/"
  },
  {
    "id": "103",
    "sentence": "to",
    "chinese": "去",
    "pronunciation": "/tu/"
  },
  {
    "id": "104",
    "sentence": "the",
    "chinese": "这",
    "pronunciation": "/ði/"
  },
  {
    "id": "105",
    "sentence": "zoo",
    "chinese": "动物园",
    "pronunciation": "/zuː/"
  },
  {
    "id": "106",
    "sentence": "the zoo",
    "chinese": "动物园",
    "pronunciation": "/ði/ /zuː/"
  },
  {
    "id": "107",
    "sentence": "to the zoo",
    "chinese": "去动物园",
    "pronunciation": "/tu/ /ði/ /zuː/"
  },
  {
    "id": "108",
    "sentence": "the trip to the zoo",
    "chinese": "去动物园的旅行",
    "pronunciation": "/ði/ /trɪp/ /tu/ /ði/ /zuː/"
  },
  {
    "id": "109",
    "sentence": "he wrote down the trip to the zoo",
    "chinese": "他写下了去动物园的旅行",
    "pronunciation": "/hi/ /roʊt/ /daʊn/ /ði/ /trɪp/ /tu/ /ði/ /zuː/"
  },
  {
    "id": "110",
    "sentence": "especially",
    "chinese": "特别是",
    "pronunciation": "/ɪˈspɛʃəli/"
  },
  {
    "id": "111",
    "sentence": "that",
    "chinese": "那",
    "pronunciation": "/ðæt/"
  },
  {
    "id": "112",
    "sentence": "he",
    "chinese": "他",
    "pronunciation": "/hi/"
  },
  {
    "id": "113",
    "sentence": "fed",
    "chinese": "喂",
    "pronunciation": "/fɛd/"
  },
  {
    "id": "114",
    "sentence": "the",
    "chinese": "这",
    "pronunciation": "/ði/"
  },
  {
    "id": "115",
    "sentence": "monkeys",
    "chinese": "猴子",
    "pronunciation": "/'mʌŋkiz/"
  },
  {
    "id": "116",
    "sentence": "on",
    "chinese": "在",
    "pronunciation": "/ɑːn/"
  },
  {
    "id": "117",
    "sentence": "bananas",
    "chinese": "香蕉",
    "pronunciation": "/bəˈnænəz/"
  },
  {
    "id": "118",
    "sentence": "on bananas",
    "chinese": "在香蕉上",
    "pronunciation": "/ɑːn/ /bəˈnænəz/"
  },
  {
    "id": "119",
    "sentence": "the monkeys on bananas",
    "chinese": "猴子在香蕉上",
    "pronunciation": "/ði/ /'mʌŋkiz/ /ɑːn/ /bəˈnænəz/"
  },
  {
    "id": "120",
    "sentence": "he fed the monkeys on bananas",
    "chinese": "他给猴子喂香蕉",
    "pronunciation": "/hi/ /fɛd/ /ði/ /'mʌŋkiz/ /ɑːn/ /bəˈnænəz/"
  },
  {
    "id": "121",
    "sentence": "that he fed the monkeys on bananas",
    "chinese": "他给猴子喂香蕉",
    "pronunciation": "/ðæt/ /hi/ /fɛd/ /ði/ /'mʌŋkiz/ /ɑːn/ /bəˈnænəz/"
  },
  {
    "id": "122",
    "sentence": "especially that he fed the monkeys on bananas",
    "chinese": "特别是他给猴子喂香蕉",
    "pronunciation": "/ɪˈspɛʃəli/ /ðæt/ /hi/ /fɛd/ /ði/ /'mʌŋkiz/ /ɑːn/ /bəˈnænəz/"
  },
  {
    "id": "123",
    "sentence": "and",
    "chinese": "和",
    "pronunciation": "/ænd/"
  },
  {
    "id": "124",
    "sentence": "he",
    "chinese": "他",
    "pronunciation": "/hi/"
  },
  {
    "id": "125",
    "sentence": "also",
    "chinese": "也",
    "pronunciation": "/'ɔːls.oʊ/"
  },
  {
    "id": "126",
    "sentence": "made",
    "chinese": "拍",
    "pronunciation": "/meɪd/"
  },
  {
    "id": "127",
    "sentence": "some",
    "chinese": "一些",
    "pronunciation": "/sʌm/"
  },
  {
    "id": "128",
    "sentence": "videos",
    "chinese": "视频",
    "pronunciation": "/'vɪdioʊz/"
  },
  {
    "id": "129",
    "sentence": "of",
    "chinese": "的",
    "pronunciation": "/ɑːv/"
  },
  {
    "id": "130",
    "sentence": "wolves",
    "chinese": "狼",
    "pronunciation": "/wˈʌlvz/"
  },
  {
    "id": "131",
    "sentence": "lines",
    "chinese": "线",
    "pronunciation": "/laɪnz/"
  },
  {
    "id": "132",
    "sentence": "tigers",
    "chinese": "老虎",
    "pronunciation": "/'taɪɡərz/"
  },
  {
    "id": "133",
    "sentence": "bears",
    "chinese": "熊",
    "pronunciation": "/bɛrz/"
  },
  {
    "id": "134",
    "sentence": "wolves , lines , tigers , bears",
    "chinese": "狼、线、老虎、熊",
    "pronunciation": "/wˈʌlvz/ /laɪnz/ /'taɪɡərz/ /bɛrz/"
  },
  {
    "id": "135",
    "sentence": "of wolves , lines , tigers , bears",
    "chinese": "狼、线、老虎、熊的",
    "pronunciation": "/ɑːv/ /wˈʌlvz/ /laɪnz/ /'taɪɡərz/ /bɛrz/"
  },
  {
    "id": "136",
    "sentence": "some videos of wolves , lines , tigers , bears",
    "chinese": "一些狼、线、老虎、熊的视频",
    "pronunciation": "/sʌm/ /'vɪdioʊz/ /ɑːv/ /wˈʌlvz/ /laɪnz/ /'taɪɡərz/ /bɛrz/"
  },
  {
    "id": "137",
    "sentence": "he also made some videos of wolves , lines , tigers , bears",
    "chinese": "他还拍了一些狼、线、老虎、熊的视频",
    "pronunciation": "/hi/ /'ɔːls.oʊ/ /meɪd/ /sʌm/ /'vɪdioʊz/ /ɑːv/ /wˈʌlvz/ /laɪnz/ /'taɪɡərz/ /bɛrz/"
  },
  {
    "id": "138",
    "sentence": "and he also made some videos of wolves , lines , tigers , bears",
    "chinese": "他还拍了一些狼、线、老虎、熊的视频",
    "pronunciation": "/ænd/ /hi/ /'ɔːls.oʊ/ /meɪd/ /sʌm/ /'vɪdioʊz/ /ɑːv/ /wˈʌlvz/ /laɪnz/ /'taɪɡərz/ /bɛrz/"
  },
  {
    "id": "139",
    "sentence": "In his diary , he wrote down the trip to the zoo , especially that he fed the monkeys on bananas and he also made some videos of wolves , lines , tigers , bears",
    "chinese": "在他的日记中，他写下了去动物园的旅行，特别是他给猴子喂香蕉，还拍了一些狼、线、老虎、熊的视频",
    "pronunciation": "/ɪn/ /hɪz/ /'daɪəri/ /hi/ /roʊt/ /daʊn/ /ði/ /trɪp/ /tu/ /ði/ /zuː/ /ɪˈspɛʃəli/ /ðæt/ /hi/ /fɛd/ /ði/ /'mʌŋkiz/ /ɑːn/ /bəˈnænəz/ /ænd/ /hi/ /'ɔːls.oʊ/ /meɪd/ /sʌm/ /'vɪdioʊz/ /ɑːv/ /wˈʌlvz/ /laɪnz/ /'taɪɡərz/ /bɛrz/"
  },
  {
    "id": "140",
    "sentence": "Although",
    "chinese": "虽然",
    "pronunciation": "/ɔːlˈðoʊ/"
  },
  {
    "id": "141",
    "sentence": "the",
    "chinese": "这个",
    "pronunciation": "/ði/"
  },
  {
    "id": "142",
    "sentence": "math teacher",
    "chinese": "数学老师",
    "pronunciation": "/mæθ/ /'titʃər/"
  },
  {
    "id": "143",
    "sentence": "the math teacher(British English: maths teacher)",
    "chinese": "数学老师（英式英语：数学老师）",
    "pronunciation": "/ði/ /mæθ/ /'titʃər/ /'brɪtɪʃ'/ /'ɪŋɡlɪʃ/ /mæθs/ /'titʃər/"
  },
  {
    "id": "144",
    "sentence": "was",
    "chinese": "是",
    "pronunciation": "/wɑz/"
  },
  {
    "id": "145",
    "sentence": "very",
    "chinese": "非常",
    "pronunciation": "/ˈveri/"
  },
  {
    "id": "146",
    "sentence": "strict",
    "chinese": "严格",
    "pronunciation": "/strɪkt/"
  },
  {
    "id": "147",
    "sentence": "very strict",
    "chinese": "非常严格",
    "pronunciation": "/ˈveri/ /strɪkt/"
  },
  {
    "id": "148",
    "sentence": "with",
    "chinese": "对",
    "pronunciation": "/wɪð/"
  },
  {
    "id": "149",
    "sentence": "these",
    "chinese": "这些",
    "pronunciation": "/θiːz/"
  },
  {
    "id": "150",
    "sentence": "students",
    "chinese": "学生",
    "pronunciation": "/ˈstuːdnts/"
  },
  {
    "id": "151",
    "sentence": "these students",
    "chinese": "这些学生",
    "pronunciation": "/θiːz/ /ˈstuːdnts/"
  },
  {
    "id": "152",
    "sentence": "with these students",
    "chinese": "对这些学生",
    "pronunciation": "/wɪð/ /θiːz/ /ˈstuːdnts/"
  },
  {
    "id": "153",
    "sentence": "was very strict with these students",
    "chinese": "对这些学生非常严格",
    "pronunciation": "/wɑz/ /ˈveri/ /strɪkt/ /wɪð/ /θiːz/ /ˈstuːdnts/"
  },
  {
    "id": "154",
    "sentence": "finally",
    "chinese": "最终",
    "pronunciation": "/'faɪnəli/"
  },
  {
    "id": "155",
    "sentence": "all",
    "chinese": "都",
    "pronunciation": "/ɔːl/"
  },
  {
    "id": "156",
    "sentence": "of",
    "chinese": "的",
    "pronunciation": "/ɑːv/"
  },
  {
    "id": "157",
    "sentence": "them",
    "chinese": "他们",
    "pronunciation": "/ðɛm/"
  },
  {
    "id": "158",
    "sentence": "of them",
    "chinese": "他们",
    "pronunciation": "/ɑːv/ /ðɛm/"
  },
  {
    "id": "159",
    "sentence": "all of them",
    "chinese": "他们都",
    "pronunciation": "/ɔːl/ /ɑːv/ /ðɛm/"
  },
  {
    "id": "160",
    "sentence": "felt",
    "chinese": "感到",
    "pronunciation": "/felt/"
  },
  {
    "id": "161",
    "sentence": "thankful",
    "chinese": "感激",
    "pronunciation": "/ˈθæŋkfl/"
  },
  {
    "id": "162",
    "sentence": "felt thankful",
    "chinese": "感到感激",
    "pronunciation": "/felt/ /ˈθæŋkfl/"
  },
  {
    "id": "163",
    "sentence": "for",
    "chinese": "对",
    "pronunciation": "/fɔːr/"
  },
  {
    "id": "164",
    "sentence": "the",
    "chinese": "这个",
    "pronunciation": "/ði/"
  },
  {
    "id": "165",
    "sentence": "teacher's",
    "chinese": "老师",
    "pronunciation": "/'titʃərz/"
  },
  {
    "id": "166",
    "sentence": "the teacher's",
    "chinese": "老师的",
    "pronunciation": "/ði/ /'titʃərz/"
  },
  {
    "id": "167",
    "sentence": "patient",
    "chinese": "耐心",
    "pronunciation": "/ˈpeɪʃnt/"
  },
  {
    "id": "168",
    "sentence": "and",
    "chinese": "和",
    "pronunciation": "/ænd/"
  },
  {
    "id": "169",
    "sentence": "careful",
    "chinese": "细心",
    "pronunciation": "/'kɛrfəl/"
  },
  {
    "id": "170",
    "sentence": "guide",
    "chinese": "指导",
    "pronunciation": "/gaɪd/"
  },
  {
    "id": "171",
    "sentence": "patient and careful guide",
    "chinese": "耐心和细心指导",
    "pronunciation": "/ˈpeɪʃnt/ /ænd/ /'kɛrfəl/ /gaɪd/"
  },
  {
    "id": "172",
    "sentence": "the teacher's patient and careful guide",
    "chinese": "老师的耐心和细心指导",
    "pronunciation": "/ði/ /'titʃərz/ /ˈpeɪʃnt/ /ænd/ /'kɛrfəl/ /gaɪd/"
  },
  {
    "id": "173",
    "sentence": "for the teacher's patient and careful guide",
    "chinese": "对老师的耐心和细心指导",
    "pronunciation": "/fɔːr/ /ði/ /'titʃərz/ /ˈpeɪʃnt/ /ænd/ /'kɛrfəl/ /gaɪd/"
  },
  {
    "id": "174",
    "sentence": "finally all of them felt thankful for the teacher's patient and careful guide",
    "chinese": "最终他们都对老师的耐心和细心指导感到感激",
    "pronunciation": "/'faɪnəli/ /ɔːl/ /ɑːv/ /ðɛm/ /felt/ /ˈθæŋkfl/ /fɔːr/ /ði/ /'titʃərz/ /ˈpeɪʃnt/ /ænd/ /'kɛrfəl/ /gaɪd/"
  },
  {
    "id": "175",
    "sentence": "because",
    "chinese": "因为",
    "pronunciation": "/bɪˈkɔːz/"
  },
  {
    "id": "176",
    "sentence": "they",
    "chinese": "他们",
    "pronunciation": "/ðeɪ/"
  },
  {
    "id": "177",
    "sentence": "got",
    "chinese": "获得",
    "pronunciation": "/ɡɑːt/"
  },
  {
    "id": "178",
    "sentence": "grade",
    "chinese": "成绩",
    "pronunciation": "/greɪd/"
  },
  {
    "id": "179",
    "sentence": "A",
    "chinese": "A级",
    "pronunciation": "/eɪ/"
  },
  {
    "id": "180",
    "sentence": "grade A",
    "chinese": "A级成绩",
    "pronunciation": "/greɪd/ /eɪ/"
  },
  {
    "id": "181",
    "sentence": "they got grade A",
    "chinese": "他们获得了A级成绩",
    "pronunciation": "/ðeɪ/ /ɡɑːt/ /greɪd/ /eɪ/"
  },
  {
    "id": "182",
    "sentence": "because they got grade A",
    "chinese": "因为他们获得了A级成绩",
    "pronunciation": "/bɪˈkɔːz/ /ðeɪ/ /ɡɑːt/ /greɪd/ /eɪ/"
  },
  {
    "id": "183",
    "sentence": "Although the math teacher(British English: maths teacher) was very strict with these students , finally all of them felt thankful for the teacher's patient and careful guide because they got grade A",
    "chinese": "虽然数学老师（英式英语：数学老师）对这些学生非常严格，但最终他们都对老师的耐心和细心指导感到感激，因为他们获得了A级成绩",
    "pronunciation": "/ɔːlˈðoʊ/ /ði/ /mæθ/ /'titʃər/ /'brɪtɪʃ'/ /'ɪŋɡlɪʃ/ /mæθs/ /'titʃər/ /wɑz/ /ˈveri/ /strɪkt/ /wɪð/ /θiːz/ /ˈstuːdnts/ /'faɪnəli/ /ɔːl/ /ɑːv/ /ðɛm/ /felt/ /ˈθæŋkfl/ /fɔːr/ /ði/ /'titʃərz/ /ˈpeɪʃnt/ /ænd/ /'kɛrfəl/ /gaɪd/ /bɪˈkɔːz/ /ðeɪ/ /ɡɑːt/ /greɪd/ /eɪ/"
  },
  {
    "id": "184",
    "sentence": "The sentences",
    "chinese": "这些句子",
    "pronunciation": "/ði/ /'sɛntənsɪz/"
  },
  {
    "id": "185",
    "sentence": "of the story",
    "chinese": "关于这个故事",
    "pronunciation": "/ɑːv/ /ði/ /'stɔri/"
  },
  {
    "id": "186",
    "sentence": "in this thick book",
    "chinese": "在这本厚书里",
    "pronunciation": "/ɪn/ /ðɪs/ /θɪk/ /bʊk/"
  },
  {
    "id": "187",
    "sentence": "The sentences of the story in this thick book",
    "chinese": "这本书里的故事句子",
    "pronunciation": "/ði/ /'sɛntənsɪz/ /ɑːv/ /ði/ /'stɔri/ /ɪn/ /ðɪs/ /θɪk/ /bʊk/"
  },
  {
    "id": "188",
    "sentence": "are too long",
    "chinese": "太长",
    "pronunciation": "/ɑr/ /tuː/ /lɔːŋ/"
  },
  {
    "id": "189",
    "sentence": "for the children to understand",
    "chinese": "对孩子们来说难以理解",
    "pronunciation": "/fɔːr/ /ði/ /'tʃɪldrən/ /tu/ /ˌʌn.dərˈstænd/"
  },
  {
    "id": "190",
    "sentence": "are too long for the children to understand",
    "chinese": "对孩子们来说太长了，难以理解",
    "pronunciation": "/ɑr/ /tuː/ /lɔːŋ/ /fɔːr/ /ði/ /'tʃɪldrən/ /tu/ /ˌʌn.dərˈstænd/"
  },
  {
    "id": "191",
    "sentence": "and in addition",
    "chinese": "而且",
    "pronunciation": "/ænd/ /ɪn/ /əˈdɪʃən/"
  },
  {
    "id": "192",
    "sentence": "the story",
    "chinese": "这个故事",
    "pronunciation": "/ði/ /'stɔri/"
  },
  {
    "id": "193",
    "sentence": "is not described",
    "chinese": "没有描述",
    "pronunciation": "/ɪz/ /nɑt/ /dɪˈskraɪb/"
  },
  {
    "id": "194",
    "sentence": "in detail",
    "chinese": "详细地",
    "pronunciation": "/ɪn/ /'ditel/"
  },
  {
    "id": "195",
    "sentence": "the story is not described in detail",
    "chinese": "故事没有详细描述",
    "pronunciation": "/ði/ /'stɔri/ /ɪz/ /nɑt/ /dɪˈskraɪb/ /ɪn/ /'ditel/"
  },
  {
    "id": "196",
    "sentence": "The sentences of the story in this thick book are too long for the children to understand and in addition , the story is not described in detail",
    "chinese": "这本书里的故事句子对孩子们来说太长了，难以理解，而且故事也没有详细描述",
    "pronunciation": "/ði/ /'sɛntənsɪz/ /ɑːv/ /ði/ /'stɔri/ /ɪn/ /ðɪs/ /θɪk/ /bʊk/ /ɑr/ /tuː/ /lɔːŋ/ /fɔːr/ /ði/ /'tʃɪldrən/ /tu/ /ˌʌn.dərˈstænd/ /ænd/ /ɪn/ /əˈdɪʃən/ /ði/ /'stɔri/ /ɪz/ /nɑt/ /dɪˈskraɪb/ /ɪn/ /'ditel/"
  },
  {
    "id": "197",
    "sentence": "If you spread out",
    "chinese": "如果你展开",
    "pronunciation": "/ɪf/ /juː/ /spred/ /aʊt/"
  },
  {
    "id": "198",
    "sentence": "and read the world map",
    "chinese": "并阅读世界地图",
    "pronunciation": "/ænd/ /rɛd/ /ði/ /wɜːrd/ /mæp/"
  },
  {
    "id": "199",
    "sentence": "If you spread out and read the world map",
    "chinese": "如果你展开并阅读世界地图",
    "pronunciation": "/ɪf/ /juː/ /spred/ /aʊt/ /ænd/ /rɛd/ /ði/ /wɜːrd/ /mæp/"
  },
  {
    "id": "200",
    "sentence": "it will enable you",
    "chinese": "它会帮助你",
    "pronunciation": "/ɪt/ /wɪl/ /'ɛnəbl/ /juː/"
  },
  {
    "id": "201",
    "sentence": "to know",
    "chinese": "了解",
    "pronunciation": "/tu/ /noʊ/"
  },
  {
    "id": "202",
    "sentence": "it will enable you to know",
    "chinese": "它会帮助你了解",
    "pronunciation": "/ɪt/ /wɪl/ /'ɛnəbl/ /juː/ /tu/ /noʊ/"
  },
  {
    "id": "203",
    "sentence": "that the land area of the People's Republic of China",
    "chinese": "中华人民共和国的陆地面积",
    "pronunciation": "/ðæt/ /ði/ /lænd/ /ˈɛriə/ /ɑːv/ /ði/ /ˈpiːpəlz/ /rɪˈpʌblɪk/ /ɑːv/ /tʃaɪnə/"
  },
  {
    "id": "204",
    "sentence": "nearly equals that of the United States of America",
    "chinese": "几乎等于美利坚合众国的陆地面积",
    "pronunciation": "/ˈnɪrli/ /'ikwəlz/ /ðæt/ /ɑːv/ /ði/ /juˈnaɪtɪd/ /ˈsteɪts/ /ɑːv/ /əˈmerɪkə/"
  },
  {
    "id": "205",
    "sentence": "that the land area of the People's Republic of China nearly equals that of the United States of America",
    "chinese": "中华人民共和国的陆地面积几乎等于美利坚合众国的陆地面积",
    "pronunciation": "/ðæt/ /ði/ /lænd/ /ˈɛriə/ /ɑːv/ /ði/ /ˈpiːpəlz/ /rɪˈpʌblɪk/ /ɑːv/ /tʃaɪnə/ /ˈnɪrli/ /'ikwəlz/ /ðæt/ /ɑːv/ /ði/ /juˈnaɪtɪd/ /ˈsteɪts/ /ɑːv/ /əˈmerɪkə/"
  },
  {
    "id": "206",
    "sentence": "If you spread out and read the world map , it will enable you to know that the land area of the People's Republic of China nearly equals that of the United States of America",
    "chinese": "如果你展开并阅读世界地图，它会帮助你了解中华人民共和国的陆地面积几乎等于美利坚合众国的陆地面积",
    "pronunciation": "/ɪf/ /juː/ /spred/ /aʊt/ /ænd/ /rɛd/ /ði/ /wɜːrd/ /mæp/ /ɪt/ /wɪl/ /'ɛnəbl/ /juː/ /tu/ /noʊ/ /ðæt/ /ði/ /lænd/ /ˈɛriə/ /ɑːv/ /ði/ /ˈpiːpəlz/ /rɪˈpʌblɪk/ /ɑːv/ /tʃaɪnə/ /ˈnɪrli/ /'ikwəlz/ /ðæt/ /ɑːv/ /ði/ /juˈnaɪtɪd/ /ˈsteɪts/ /ɑːv/ /əˈmerɪkə/"
  },
  {
    "id": "207",
    "sentence": "Between he and his brother",
    "chinese": "在他和他的兄弟之间",
    "pronunciation": "/bɪˈtwin/ /hi/ /ænd/ /hɪz/ /ˈbrʌð.ər/"
  },
  {
    "id": "208",
    "sentence": "who practices high jump",
    "chinese": "练习跳高",
    "pronunciation": "/huː/ /'præktɪsɪz/ /haɪ/ /dʒʌmp/"
  },
  {
    "id": "209",
    "sentence": "Between he and his brother who practices high jump",
    "chinese": "在他和他的练习跳高兄弟之间",
    "pronunciation": "/bɪˈtwin/ /hi/ /ænd/ /hɪz/ /ˈbrʌð.ər/ /huː/ /'præktɪsɪz/ /haɪ/ /dʒʌmp/"
  },
  {
    "id": "210",
    "sentence": "his brother",
    "chinese": "他的兄弟",
    "pronunciation": "/hɪz/ /ˈbrʌð.ər/"
  },
  {
    "id": "211",
    "sentence": "is taller",
    "chinese": "更高",
    "pronunciation": "/ɪz/ /'tælɚ/"
  },
  {
    "id": "212",
    "sentence": "his brother is taller",
    "chinese": "他的兄弟更高",
    "pronunciation": "/hɪz/ /ˈbrʌð.ər/ /ɪz/ /'tælɚ/"
  },
  {
    "id": "213",
    "sentence": "but among his college classmates",
    "chinese": "但在他的大学同学中",
    "pronunciation": "/bʌt/ /əˈmʌŋ/ /hɪz/ /'kɑlɪdʒ/ /'klæsmeɪts/"
  },
  {
    "id": "214",
    "sentence": "His height",
    "chinese": "他的身高",
    "pronunciation": "/hɪz/ /haɪt/"
  },
  {
    "id": "215",
    "sentence": "is the greatest",
    "chinese": "是最高的",
    "pronunciation": "/ɪz/ /ði/ /ˈɡreɪtɪst/"
  },
  {
    "id": "216",
    "sentence": "His height is the greatest",
    "chinese": "他的身高是最高的",
    "pronunciation": "/hɪz/ /haɪt/ /ɪz/ /ði/ /ˈɡreɪtɪst/"
  },
  {
    "id": "217",
    "sentence": "but among his college classmates , His height is the greatest",
    "chinese": "但在他的大学同学中，他的身高是最高的",
    "pronunciation": "/bʌt/ /əˈmʌŋ/ /hɪz/ /'kɑlɪdʒ/ /'klæsmeɪts/ /hɪz/ /haɪt/ /ɪz/ /ði/ /ˈɡreɪtɪst/"
  },
  {
    "id": "218",
    "sentence": "Between he and his brother who practices high jump , his brother is taller , but among his college classmates , His height is the greatest",
    "chinese": "在他和他的练习跳高兄弟之间，他的兄弟更高，但在他的大学同学中，他的身高是最高的",
    "pronunciation": "/bɪˈtwin/ /hi/ /ænd/ /hɪz/ /ˈbrʌð.ər/ /huː/ /'præktɪsɪz/ /haɪ/ /dʒʌmp/ /hɪz/ /ˈbrʌð.ər/ /ɪz/ /'tælɚ/ /bʌt/ /əˈmʌŋ/ /hɪz/ /'kɑlɪdʒ/ /'klæsmeɪts/ /hɪz/ /haɪt/ /ɪz/ /ði/ /ˈɡreɪtɪst/"
  },
  {
    "id": "219",
    "sentence": "It's",
    "chinese": "它是",
    "pronunciation": "/ɪts/"
  },
  {
    "id": "220",
    "sentence": "very kind of you",
    "chinese": "你真是太好了",
    "pronunciation": "/ˈveri/ /kaɪnd/ /ɑːv/ /juː/"
  },
  {
    "id": "221",
    "sentence": "It's very kind of you",
    "chinese": "你真是太好了",
    "pronunciation": "/ɪts/ /ˈveri/ /kaɪnd/ /ɑːv/ /juː/"
  },
  {
    "id": "222",
    "sentence": "to fix our computer",
    "chinese": "修好我们的电脑",
    "pronunciation": "/tu/ /fɪks/ /aʊər/ /kəmˈpjuːtər/"
  },
  {
    "id": "223",
    "sentence": "It's very kind of you to fix our computer",
    "chinese": "你修好我们的电脑真是太好了",
    "pronunciation": "/ɪts/ /ˈveri/ /kaɪnd/ /ɑːv/ /juː/ /tu/ /fɪks/ /aʊər/ /kəmˈpjuːtər/"
  },
  {
    "id": "224",
    "sentence": "or",
    "chinese": "否则",
    "pronunciation": "/ɔr/"
  },
  {
    "id": "225",
    "sentence": "it is not likely",
    "chinese": "不太可能",
    "pronunciation": "/ɪt/ /ɪz/ /nɑt/ /'laɪkli/"
  },
  {
    "id": "226",
    "sentence": "for us to send the E-mail about recent sales to Paris before 5 o'clock",
    "chinese": "我们把最近的销售邮件发到巴黎",
    "pronunciation": "/fɔːr/ /ʌs/ /tu/ /sɛnd/ /ði/ /ˈiːmeɪl/ /əˈbaʊt/ /'risnt/ /sales/ /tu/ /'pærɪs/ /bɪˈfɔr/ /5/ /əˈklɑk/"
  },
  {
    "id": "227",
    "sentence": "it is not likely for us to send the E-mail about recent sales to Paris before 5 o'clock",
    "chinese": "我们不太可能在五点前把最近的销售邮件发到巴黎",
    "pronunciation": "/ɪt/ /ɪz/ /nɑt/ /'laɪkli/ /fɔːr/ /ʌs/ /tu/ /sɛnd/ /ði/ /ˈiːmeɪl/ /əˈbaʊt/ /'risnt/ /sales/ /tu/ /'pærɪs/ /bɪˈfɔr/ /5/ /əˈklɑk/"
  },
  {
    "id": "228",
    "sentence": "or it is not likely for us to send the E-mail about recent sales to Paris before 5 o'clock",
    "chinese": "否则我们不太可能在五点前把最近的销售邮件发到巴黎",
    "pronunciation": "/ɔr/ /ɪt/ /ɪz/ /nɑt/ /'laɪkli/ /fɔːr/ /ʌs/ /tu/ /sɛnd/ /ði/ /ˈiːmeɪl/ /əˈbaʊt/ /'risnt/ /sales/ /tu/ /'pærɪs/ /bɪˈfɔr/ /5/ /əˈklɑk/"
  },
  {
    "id": "229",
    "sentence": "It's very kind of you to fix our computer or it is not likely for us to send the E-mail about recent sales to Paris before 5 o'clock",
    "chinese": "你修好我们的电脑真是太好了，否则我们不太可能在五点前把最近的销售邮件发到巴黎",
    "pronunciation": "/ɪts/ /ˈveri/ /kaɪnd/ /ɑːv/ /juː/ /tu/ /fɪks/ /aʊər/ /kəmˈpjuːtər/ /ɔr/ /ɪt/ /ɪz/ /nɑt/ /'laɪkli/ /fɔːr/ /ʌs/ /tu/ /sɛnd/ /ði/ /ˈiːmeɪl/ /əˈbaʊt/ /'risnt/ /sales/ /tu/ /'pærɪs/ /bɪˈfɔr/ /5/ /əˈklɑk/"
  },
];
