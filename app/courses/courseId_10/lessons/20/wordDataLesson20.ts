export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "This is a story",
    "chinese": "这是一个故事",
    "pronunciation": "/ðɪs/ /ɪz/ /ə; eɪ/ /ˈstɔːri/"
  },
  {
    "id": "2",
    "sentence": "about Alissa",
    "chinese": "关于艾丽莎",
    "pronunciation": "/əˈbaʊt/ /əˈlɪsə/"
  },
  {
    "id": "3",
    "sentence": "This is a story about Alissa",
    "chinese": "这是一个关于艾丽莎的故事",
    "pronunciation": "/ðɪs/ /ɪz/ /ə; eɪ/ /ˈstɔːri/ /əˈbaʊt/ /əˈlɪsə/"
  },
  {
    "id": "4",
    "sentence": "who is having problems",
    "chinese": "正在遇到问题",
    "pronunciation": "/huː/ /ɪz/ /ˈhævɪŋ/ /ˈprɑːbləmz/"
  },
  {
    "id": "5",
    "sentence": "This is a story about Alissa who is having problems",
    "chinese": "这是一个关于艾丽莎的故事，她正面临问题",
    "pronunciation": "/ðɪs/ /ɪz/ /ə; eɪ/ /ˈstɔːri/ /əˈbaʊt/ /əˈlɪsə/ /huː/ /ɪz/ /ˈhævɪŋ/ /ˈprɑːbləmz/"
  },
  {
    "id": "6",
    "sentence": "getting to work",
    "chinese": "上班",
    "pronunciation": "/ˈɡetɪŋ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "7",
    "sentence": "This is a story about Alissa who is having problems getting to work",
    "chinese": "这是一个关于艾丽莎的故事，她正面临上班的困难",
    "pronunciation": "/ðɪs/ /ɪz/ /ə; eɪ/ /ˈstɔːri/ /əˈbaʊt/ /əˈlɪsə/ /huː/ /ɪz/ /ˈhævɪŋ/ /ˈprɑːbləmz/ /ˈɡetɪŋ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "8",
    "sentence": "Alissa is trying",
    "chinese": "艾丽莎正尝试",
    "pronunciation": "/əˈlɪsə/ /ɪz/ /ˈtraɪɪŋ/"
  },
  {
    "id": "9",
    "sentence": "to go to work",
    "chinese": "去上班",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "10",
    "sentence": "Alissa is trying to go to work",
    "chinese": "艾丽莎正准备去上班",
    "pronunciation": "/əˈlɪsə/ /ɪz/ /ˈtraɪɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "11",
    "sentence": "She is trying",
    "chinese": "她正在尝试",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈtraɪɪŋ/"
  },
  {
    "id": "12",
    "sentence": "to start her car",
    "chinese": "发动她的汽车",
    "pronunciation": "/tuː; tə/ /stɑːrt/ /hɚ/ /kɑːr/"
  },
  {
    "id": "13",
    "sentence": "She is trying to start her car",
    "chinese": "她正在尝试发动她的汽车",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈtraɪɪŋ/ /tuː; tə/ /stɑːrt/ /hɚ/ /kɑːr/"
  },
  {
    "id": "14",
    "sentence": "But it's too cold",
    "chinese": "但是太冷了",
    "pronunciation": "/bʌt/ /ɪts/ /tuː/ /koʊld/"
  },
  {
    "id": "15",
    "sentence": "outside",
    "chinese": "外面",
    "pronunciation": "/ˌaʊtˈsaɪd/"
  },
  {
    "id": "16",
    "sentence": "But it's too cold outside",
    "chinese": "但是外面太冷了",
    "pronunciation": "/bʌt/ /ɪts/ /tuː/ /koʊld/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "17",
    "sentence": "So her car",
    "chinese": "所以她的车",
    "pronunciation": "/soʊ/ /hɚ/ /kɑːr/"
  },
  {
    "id": "18",
    "sentence": "isn't starting",
    "chinese": "启动不了",
    "pronunciation": "/ˈɪznt/ /ˈstɑrtɪŋ/"
  },
  {
    "id": "19",
    "sentence": "So her car isn't starting",
    "chinese": "所以她的车启动不了",
    "pronunciation": "/soʊ/ /hɚ/ /kɑːr/ /ˈɪznt/ /ˈstɑrtɪŋ/"
  },
  {
    "id": "20",
    "sentence": "She checks the bus schedule",
    "chinese": "她查看公交车时刻表",
    "pronunciation": "/ʃiː; ʃi/ /tʃeks/ /ðə/ /bʌs/ /ˈskedʒuːl/"
  },
  {
    "id": "21",
    "sentence": "first",
    "chinese": "首先",
    "pronunciation": "/fɜːrst/"
  },
  {
    "id": "22",
    "sentence": "She checks the bus schedule first",
    "chinese": "她首先查看公交车时刻表",
    "pronunciation": "/ʃiː; ʃi/ /tʃeks/ /ðə/ /bʌs/ /ˈskedʒuːl/ /fɜːrst/"
  },
  {
    "id": "23",
    "sentence": "The city buses",
    "chinese": "城市公交车",
    "pronunciation": "/ðə/ /ˈsɪti/ /ˈbʌsɪz/"
  },
  {
    "id": "24",
    "sentence": "are too slow",
    "chinese": "太慢了",
    "pronunciation": "/ɑr/ /tuː/ /sloʊ/"
  },
  {
    "id": "25",
    "sentence": "The city buses are too slow",
    "chinese": "城市公交车太慢了",
    "pronunciation": "/ðə/ /ˈsɪti/ /ˈbʌsɪz/ /ɑr/ /tuː/ /sloʊ/"
  },
  {
    "id": "26",
    "sentence": "She checks the train schedule",
    "chinese": "她查看火车时刻表",
    "pronunciation": "/ʃiː; ʃi/ /tʃeks/ /ðə/ /treɪn/ /ˈskedʒuːl/"
  },
  {
    "id": "27",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "28",
    "sentence": "She checks the train schedule instead",
    "chinese": "她查看了火车时刻表",
    "pronunciation": "/ʃiː; ʃi/ /tʃeks/ /ðə/ /treɪn/ /ˈskedʒuːl/ /ɪnˈsted/"
  },
  {
    "id": "29",
    "sentence": "The trains are running",
    "chinese": "列车正在运行",
    "pronunciation": "/ðə/ /treɪnz/ /ɑr/ /ˈrʌnɪŋ/"
  },
  {
    "id": "30",
    "sentence": "on time",
    "chinese": "正点",
    "pronunciation": "/ɑːn/ /taɪm/"
  },
  {
    "id": "31",
    "sentence": "The trains are running on time",
    "chinese": "列车正点运行",
    "pronunciation": "/ðə/ /treɪnz/ /ɑr/ /ˈrʌnɪŋ/ /ɑːn/ /taɪm/"
  },
  {
    "id": "32",
    "sentence": "She decides",
    "chinese": "她决定",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdz/"
  },
  {
    "id": "33",
    "sentence": "to take the train",
    "chinese": "乘火车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ðə/ /treɪn/"
  },
  {
    "id": "34",
    "sentence": "She decides to take the train",
    "chinese": "她决定乘火车",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdz/ /tuː; tə/ /teɪk/ /ðə/ /treɪn/"
  },
  {
    "id": "35",
    "sentence": "to work",
    "chinese": "去上班",
    "pronunciation": "/tuː; tə/ /wɜrk/"
  },
  {
    "id": "36",
    "sentence": "She decides to take the train to work",
    "chinese": "她决定乘火车去上班",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdz/ /tuː; tə/ /teɪk/ /ðə/ /treɪn/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "37",
    "sentence": "She hopes",
    "chinese": "她希望",
    "pronunciation": "/ʃiː; ʃi/ /hoʊps/"
  },
  {
    "id": "38",
    "sentence": "she won't be late",
    "chinese": "她不会迟到",
    "pronunciation": "/ʃiː; ʃi/ /woʊnt/ /biː/ /leɪt/"
  },
  {
    "id": "39",
    "sentence": "She hopes she won't be late",
    "chinese": "她希望不会迟到",
    "pronunciation": "/ʃiː; ʃi/ /hoʊps/ /ʃiː; ʃi/ /woʊnt/ /biː/ /leɪt/"
  },
  {
    "id": "40",
    "sentence": "for work",
    "chinese": "上班",
    "pronunciation": "/fɔːr; fər/ /wɜrk/"
  },
  {
    "id": "41",
    "sentence": "She hopes she won't be late for work",
    "chinese": "她希望上班不会迟到",
    "pronunciation": "/ʃiː; ʃi/ /hoʊps/ /ʃiː; ʃi/ /woʊnt/ /biː/ /leɪt/ /fɔːr; fər/ /wɜrk/"
  },
  {
    "id": "42",
    "sentence": "I needed to go",
    "chinese": "我需要去",
    "pronunciation": "/aɪ/ /ˈniːdɪd/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "43",
    "sentence": "to work",
    "chinese": "去上班",
    "pronunciation": "/tuː; tə/ /wɜrk/"
  },
  {
    "id": "44",
    "sentence": "I needed to go to work",
    "chinese": "我需要去上班",
    "pronunciation": "/aɪ/ /ˈniːdɪd/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "45",
    "sentence": "I tried",
    "chinese": "我尝试",
    "pronunciation": "/aɪ/ /traɪd/"
  },
  {
    "id": "46",
    "sentence": "to start my car",
    "chinese": "启动我的车",
    "pronunciation": "/tuː; tə/ /stɑːrt/ /maɪ/ /kɑːr/"
  },
  {
    "id": "47",
    "sentence": "I tried to start my car",
    "chinese": "我试图启动我的车",
    "pronunciation": "/aɪ/ /traɪd/ /tuː; tə/ /stɑːrt/ /maɪ/ /kɑːr/"
  },
  {
    "id": "48",
    "sentence": "But it was too cold",
    "chinese": "但是太冷了",
    "pronunciation": "/bʌt/ /ɪt/ /wʌz; wəz/ /tuː/ /koʊld/"
  },
  {
    "id": "49",
    "sentence": "outside",
    "chinese": "外面",
    "pronunciation": "/ˌaʊtˈsaɪd/"
  },
  {
    "id": "50",
    "sentence": "But it was too cold outside",
    "chinese": "但是外面太冷了",
    "pronunciation": "/bʌt/ /ɪt/ /wʌz; wəz/ /tuː/ /koʊld/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "51",
    "sentence": "So my car",
    "chinese": "所以我的车",
    "pronunciation": "/soʊ/ /maɪ/ /kɑːr/"
  },
  {
    "id": "52",
    "sentence": "wouldn't start",
    "chinese": "发动不了",
    "pronunciation": "/ˌwʊdnt/ /stɑːrt/"
  },
  {
    "id": "53",
    "sentence": "So my car wouldn't start",
    "chinese": "所以我的车发动不了",
    "pronunciation": "/soʊ/ /maɪ/ /kɑːr/ /ˌwʊdnt/ /stɑːrt/"
  },
  {
    "id": "54",
    "sentence": "I checked the bus schedule",
    "chinese": "我查看了公交时刻表",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /bʌs/ /ˈskedʒuːl/"
  },
  {
    "id": "55",
    "sentence": "first",
    "chinese": "先",
    "pronunciation": "/fɜːrst/"
  },
  {
    "id": "56",
    "sentence": "I checked the bus schedule first",
    "chinese": "我先查看了公交时刻表",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /bʌs/ /ˈskedʒuːl/ /fɜːrst/"
  },
  {
    "id": "57",
    "sentence": "The city buses",
    "chinese": "城市公交车",
    "pronunciation": "/ðə/ /ˈsɪti/ /ˈbʌsɪz/"
  },
  {
    "id": "58",
    "sentence": "were too slow",
    "chinese": "太慢了",
    "pronunciation": "/wɜːr; wər/ /tuː/ /sloʊ/"
  },
  {
    "id": "59",
    "sentence": "The city buses were too slow",
    "chinese": "城市公交车太慢了",
    "pronunciation": "/ðə/ /ˈsɪti/ /ˈbʌsɪz/ /wɜːr; wər/ /tuː/ /sloʊ/"
  },
  {
    "id": "60",
    "sentence": "I checked the train schedule",
    "chinese": "我查看了火车时刻表",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /treɪn/ /ˈskedʒuːl/"
  },
  {
    "id": "61",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "62",
    "sentence": "I checked the train schedule instead",
    "chinese": "我查看了火车时刻表",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /treɪn/ /ˈskedʒuːl/ /ɪnˈsted/"
  },
  {
    "id": "63",
    "sentence": "The trains were running",
    "chinese": "火车正在运行",
    "pronunciation": "/ðə/ /treɪnz/ /wɜːr; wər/ /ˈrʌnɪŋ/"
  },
  {
    "id": "64",
    "sentence": "on time",
    "chinese": "正点",
    "pronunciation": "/ɑːn/ /taɪm/"
  },
  {
    "id": "65",
    "sentence": "The trains were running on time",
    "chinese": "火车正点运行",
    "pronunciation": "/ðə/ /treɪnz/ /wɜːr; wər/ /ˈrʌnɪŋ/ /ɑːn/ /taɪm/"
  },
  {
    "id": "66",
    "sentence": "I decided",
    "chinese": "我决定",
    "pronunciation": "/aɪ/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "67",
    "sentence": "to take the train",
    "chinese": "乘火车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ðə/ /treɪn/"
  },
  {
    "id": "68",
    "sentence": "I decided to take the train",
    "chinese": "我决定乘火车",
    "pronunciation": "/aɪ/ /dɪˈsaɪdɪd/ /tuː; tə/ /teɪk/ /ðə/ /treɪn/"
  },
  {
    "id": "69",
    "sentence": "to work",
    "chinese": "去上班",
    "pronunciation": "/tuː; tə/ /wɜrk/"
  },
  {
    "id": "70",
    "sentence": "I decided to take the train to work",
    "chinese": "我决定乘火车去上班",
    "pronunciation": "/aɪ/ /dɪˈsaɪdɪd/ /tuː; tə/ /teɪk/ /ðə/ /treɪn/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "71",
    "sentence": "I hoped",
    "chinese": "我希望",
    "pronunciation": "/aɪ/ /hoʊpt/"
  },
  {
    "id": "72",
    "sentence": "I wouldn't be late",
    "chinese": "我不会迟到",
    "pronunciation": "/aɪ/ /ˌwʊdnt/ /biː/ /leɪt/"
  },
  {
    "id": "73",
    "sentence": "I hoped I wouldn't be late",
    "chinese": "我希望不会迟到",
    "pronunciation": "/aɪ/ /hoʊpt/ /aɪ/ /ˌwʊdnt/ /biː/ /leɪt/"
  },
  {
    "id": "74",
    "sentence": "for work",
    "chinese": "上班",
    "pronunciation": "/fɔːr; fər/ /wɜrk/"
  },
  {
    "id": "75",
    "sentence": "I hoped I wouldn't be late for work",
    "chinese": "我希望上班不会迟到",
    "pronunciation": "/aɪ/ /hoʊpt/ /aɪ/ /ˌwʊdnt/ /biː/ /leɪt/ /fɔːr; fər/ /wɜrk/"
  },
  {
    "id": "76",
    "sentence": "Is Alissa trying",
    "chinese": "艾丽莎是不是在尝试",
    "pronunciation": "/ɪz/ /əˈlɪsə/ /ˈtraɪɪŋ/"
  },
  {
    "id": "77",
    "sentence": "to go to work",
    "chinese": "去上班",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "78",
    "sentence": "Is Alissa trying to go to work ?",
    "chinese": "艾丽莎是不是要去上班？",
    "pronunciation": "/ɪz/ /əˈlɪsə/ /ˈtraɪɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "79",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "80",
    "sentence": "Alissa is trying to go to work",
    "chinese": "Alissa 正试图去上班",
    "pronunciation": "/əˈlɪsə/ /ɪz/ /ˈtraɪɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "81",
    "sentence": "Yes , Alissa is trying to go to work",
    "chinese": "是的，Alissa 正试图去上班",
    "pronunciation": "/jes/ /əˈlɪsə/ /ɪz/ /ˈtraɪɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "82",
    "sentence": "Is it hot",
    "chinese": "热吗",
    "pronunciation": "/ɪz/ /ɪt/ /hɑːt/"
  },
  {
    "id": "83",
    "sentence": "outside",
    "chinese": "外面",
    "pronunciation": "/ˌaʊtˈsaɪd/"
  },
  {
    "id": "84",
    "sentence": "Is it hot outside ?",
    "chinese": "外面热吗？",
    "pronunciation": "/ɪz/ /ɪt/ /hɑːt/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "85",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "86",
    "sentence": "it's not hot",
    "chinese": "不热",
    "pronunciation": "/ɪts/ /nɑːt/ /hɑːt/"
  },
  {
    "id": "87",
    "sentence": "No , it's not hot",
    "chinese": "不，不热",
    "pronunciation": "/noʊ/ /ɪts/ /nɑːt/ /hɑːt/"
  },
  {
    "id": "88",
    "sentence": "outside",
    "chinese": "外面",
    "pronunciation": "/ˌaʊtˈsaɪd/"
  },
  {
    "id": "89",
    "sentence": "No , it's not hot outside",
    "chinese": "不，外面不热",
    "pronunciation": "/noʊ/ /ɪts/ /nɑːt/ /hɑːt/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "90",
    "sentence": "It's cold",
    "chinese": "外面很冷",
    "pronunciation": "/ɪts/ /koʊld/"
  },
  {
    "id": "91",
    "sentence": "outside",
    "chinese": "外面",
    "pronunciation": "/ˌaʊtˈsaɪd/"
  },
  {
    "id": "92",
    "sentence": "It's cold outside",
    "chinese": "外面很冷",
    "pronunciation": "/ɪts/ /koʊld/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "93",
    "sentence": "Does Alissa's car start",
    "chinese": "艾丽莎的车启动了吗？",
    "pronunciation": "/dʌz/ /əˈlɪsəz/ /kɑːr/ /stɑːrt/"
  },
  {
    "id": "94",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "95",
    "sentence": "Alissa's car won't start",
    "chinese": "Alissa的车无法启动",
    "pronunciation": "/əˈlɪsəz/ /kɑːr/ /woʊnt/ /stɑːrt/"
  },
  {
    "id": "96",
    "sentence": "No , Alissa's car won't start",
    "chinese": "不，Alissa的车无法启动",
    "pronunciation": "/noʊ/ /əˈlɪsəz/ /kɑːr/ /woʊnt/ /stɑːrt/"
  },
  {
    "id": "97",
    "sentence": "because it's too cold outside",
    "chinese": "因为外面太冷了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ɪts/ /tuː/ /koʊld/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "98",
    "sentence": "No , Alissa's car won't start because it's too cold outside",
    "chinese": "不，Alissa的车无法启动，因为外面太冷了",
    "pronunciation": "/noʊ/ /əˈlɪsəz/ /kɑːr/ /woʊnt/ /stɑːrt/ /bɪˈkəz, bɪˈkɔːz/ /ɪts/ /tuː/ /koʊld/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "99",
    "sentence": "Does Alissa check the train schedule",
    "chinese": "艾丽莎会查看火车时刻表吗？",
    "pronunciation": "/dʌz/ /əˈlɪsə/ /tʃek/ /ðə/ /treɪn/ /ˈskedʒuːl/"
  },
  {
    "id": "100",
    "sentence": "first",
    "chinese": "先",
    "pronunciation": "/fɜːrst/"
  },
  {
    "id": "101",
    "sentence": "Does Alissa check the train schedule first ?",
    "chinese": "艾丽莎会先查看火车时刻表吗？",
    "pronunciation": "/dʌz/ /əˈlɪsə/ /tʃek/ /ðə/ /treɪn/ /ˈskedʒuːl/ /fɜːrst/"
  },
  {
    "id": "102",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "103",
    "sentence": "she doesn't",
    "chinese": "她没有",
    "pronunciation": "/ʃiː; ʃi/ /ˈdʌznt/"
  },
  {
    "id": "104",
    "sentence": "No , she doesn't",
    "chinese": "不，她没有",
    "pronunciation": "/noʊ/ /ʃiː; ʃi/ /ˈdʌznt/"
  },
  {
    "id": "105",
    "sentence": "Alissa checks the bus schedule",
    "chinese": "艾丽莎查看公交车时刻表",
    "pronunciation": "/əˈlɪsə/ /tʃeks/ /ðə/ /bʌs/ /ˈskedʒuːl/"
  },
  {
    "id": "106",
    "sentence": "first",
    "chinese": "首先",
    "pronunciation": "/fɜːrst/"
  },
  {
    "id": "107",
    "sentence": "Alissa checks the bus schedule first",
    "chinese": "艾丽莎首先查看公交车时刻表",
    "pronunciation": "/əˈlɪsə/ /tʃeks/ /ðə/ /bʌs/ /ˈskedʒuːl/ /fɜːrst/"
  },
  {
    "id": "108",
    "sentence": "Were the city buses",
    "chinese": "城市公交车速度慢吗？",
    "pronunciation": "/wɜːr; wər/ /ðə/ /ˈsɪti/ /ˈbʌsɪz/"
  },
  {
    "id": "109",
    "sentence": "slow",
    "chinese": "慢吗？",
    "pronunciation": "/sloʊ/"
  },
  {
    "id": "110",
    "sentence": "Were the city buses slow ?",
    "chinese": "城市公交车速度慢吗？",
    "pronunciation": "/wɜːr; wər/ /ðə/ /ˈsɪti/ /ˈbʌsɪz/ /sloʊ/"
  },
  {
    "id": "111",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "112",
    "sentence": "the city buses",
    "chinese": "城市公交车",
    "pronunciation": "/ðə/ /ˈsɪti/ /ˈbʌsɪz/"
  },
  {
    "id": "113",
    "sentence": "Yes , the city buses",
    "chinese": "是的，城市公交车",
    "pronunciation": "/jes/ /ðə/ /ˈsɪti/ /ˈbʌsɪz/"
  },
  {
    "id": "114",
    "sentence": "were too slow",
    "chinese": "太慢了",
    "pronunciation": "/wɜːr; wər/ /tuː/ /sloʊ/"
  },
  {
    "id": "115",
    "sentence": "Yes , the city buses were too slow",
    "chinese": "是的，城市公交车太慢了",
    "pronunciation": "/jes/ /ðə/ /ˈsɪti/ /ˈbʌsɪz/ /wɜːr; wər/ /tuː/ /sloʊ/"
  },
  {
    "id": "116",
    "sentence": "Were the trains",
    "chinese": "火车晚了吗？",
    "pronunciation": "/wɜːr; wər/ /ðə/ /treɪnz/"
  },
  {
    "id": "117",
    "sentence": "running late",
    "chinese": "晚点",
    "pronunciation": "/ˈrʌnɪŋ/ /leɪt/"
  },
  {
    "id": "118",
    "sentence": "Were the trains running late ?",
    "chinese": "火车晚点了吗？",
    "pronunciation": "/wɜːr; wər/ /ðə/ /treɪnz/ /ˈrʌnɪŋ/ /leɪt/"
  },
  {
    "id": "119",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "120",
    "sentence": "the trains were not running",
    "chinese": "火车没有在运行",
    "pronunciation": "/ðə/ /treɪnz/ /wɜːr; wər/ /nɑːt/ /ˈrʌnɪŋ/"
  },
  {
    "id": "121",
    "sentence": "No , the trains were not running",
    "chinese": "不，火车没有在运行",
    "pronunciation": "/noʊ/ /ðə/ /treɪnz/ /wɜːr; wər/ /nɑːt/ /ˈrʌnɪŋ/"
  },
  {
    "id": "122",
    "sentence": "late",
    "chinese": "晚点",
    "pronunciation": "/leɪt/"
  },
  {
    "id": "123",
    "sentence": "No , the trains were not running late",
    "chinese": "不，火车没有晚点",
    "pronunciation": "/noʊ/ /ðə/ /treɪnz/ /wɜːr; wər/ /nɑːt/ /ˈrʌnɪŋ/ /leɪt/"
  },
  {
    "id": "124",
    "sentence": "They were running",
    "chinese": "他们正在运行",
    "pronunciation": "/ðeɪ/ /wɜːr; wər/ /ˈrʌnɪŋ/"
  },
  {
    "id": "125",
    "sentence": "on time",
    "chinese": "按时",
    "pronunciation": "/ɑːn/ /taɪm/"
  },
  {
    "id": "126",
    "sentence": "They were running on time",
    "chinese": "他们正按计划进行",
    "pronunciation": "/ðeɪ/ /wɜːr; wər/ /ˈrʌnɪŋ/ /ɑːn/ /taɪm/"
  },
  {
    "id": "127",
    "sentence": "Did Alissa decide",
    "chinese": "艾丽莎决定了吗？",
    "pronunciation": "/dɪd/ /əˈlɪsə/ /dɪˈsaɪd/"
  },
  {
    "id": "128",
    "sentence": "to take the bus",
    "chinese": "乘公交车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ðə/ /bʌs/"
  },
  {
    "id": "129",
    "sentence": "Did Alissa decide to take the bus",
    "chinese": "艾丽莎决定乘公交车吗？",
    "pronunciation": "/dɪd/ /əˈlɪsə/ /dɪˈsaɪd/ /tuː; tə/ /teɪk/ /ðə/ /bʌs/"
  },
  {
    "id": "130",
    "sentence": "to work",
    "chinese": "去上班",
    "pronunciation": "/tuː; tə/ /wɜrk/"
  },
  {
    "id": "131",
    "sentence": "Did Alissa decide to take the bus to work ?",
    "chinese": "艾丽莎决定乘公交车去上班吗？",
    "pronunciation": "/dɪd/ /əˈlɪsə/ /dɪˈsaɪd/ /tuː; tə/ /teɪk/ /ðə/ /bʌs/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "132",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "133",
    "sentence": "Alissa didn't decide",
    "chinese": "Alissa没有决定",
    "pronunciation": "/əˈlɪsə/ /ˈdɪd(ə)nt/ /dɪˈsaɪd/"
  },
  {
    "id": "134",
    "sentence": "No , Alissa didn't decide",
    "chinese": "不，Alissa没有决定",
    "pronunciation": "/noʊ/ /əˈlɪsə/ /ˈdɪd(ə)nt/ /dɪˈsaɪd/"
  },
  {
    "id": "135",
    "sentence": "to take the bus",
    "chinese": "乘坐公交车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ðə/ /bʌs/"
  },
  {
    "id": "136",
    "sentence": "No , Alissa didn't decide to take the bus",
    "chinese": "不，Alissa没有决定乘坐公交车",
    "pronunciation": "/noʊ/ /əˈlɪsə/ /ˈdɪd(ə)nt/ /dɪˈsaɪd/ /tuː; tə/ /teɪk/ /ðə/ /bʌs/"
  },
  {
    "id": "137",
    "sentence": "She decided",
    "chinese": "她决定",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "138",
    "sentence": "to take the train",
    "chinese": "乘火车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ðə/ /treɪn/"
  },
  {
    "id": "139",
    "sentence": "She decided to take the train",
    "chinese": "她决定乘火车",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdɪd/ /tuː; tə/ /teɪk/ /ðə/ /treɪn/"
  },
  {
    "id": "140",
    "sentence": "to work",
    "chinese": "去上班",
    "pronunciation": "/tuː; tə/ /wɜrk/"
  },
  {
    "id": "141",
    "sentence": "She decided to take the train to work",
    "chinese": "她决定乘火车去上班",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdɪd/ /tuː; tə/ /teɪk/ /ðə/ /treɪn/ /tuː; tə/ /wɜrk/"
  },
  {
    "id": "142",
    "sentence": "Did Alissa want",
    "chinese": "艾丽莎想",
    "pronunciation": "/dɪd/ /əˈlɪsə/ /wɑːnt/"
  },
  {
    "id": "143",
    "sentence": "to be late",
    "chinese": "迟到",
    "pronunciation": "/tuː; tə/ /biː/ /leɪt/"
  },
  {
    "id": "144",
    "sentence": "Did Alissa want to be late ?",
    "chinese": "艾丽莎是想迟到吗？",
    "pronunciation": "/dɪd/ /əˈlɪsə/ /wɑːnt/ /tuː; tə/ /biː/ /leɪt/"
  },
  {
    "id": "145",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "146",
    "sentence": "she didn't want to be late",
    "chinese": "她不想迟到",
    "pronunciation": "/ʃiː; ʃi/ /ˈdɪd(ə)nt/ /wɑːnt/ /tuː; tə/ /biː/ /leɪt/"
  },
  {
    "id": "147",
    "sentence": "No , she didn't want to be late",
    "chinese": "不，她不想迟到",
    "pronunciation": "/noʊ/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /wɑːnt/ /tuː; tə/ /biː/ /leɪt/"
  },
  {
    "id": "148",
    "sentence": "She hoped",
    "chinese": "她希望",
    "pronunciation": "/ʃiː; ʃi/ /hoʊpt/"
  },
  {
    "id": "149",
    "sentence": "she wouldn't be late",
    "chinese": "她不会迟到",
    "pronunciation": "/ʃiː; ʃi/ /ˌwʊdnt/ /biː/ /leɪt/"
  },
  {
    "id": "150",
    "sentence": "She hoped she wouldn't be late",
    "chinese": "她希望她不会迟到",
    "pronunciation": "/ʃiː; ʃi/ /hoʊpt/ /ʃiː; ʃi/ /ˌwʊdnt/ /biː/ /leɪt/"
  },
  {
    "id": "151",
    "sentence": "for work",
    "chinese": "上班",
    "pronunciation": "/fɔːr; fər/ /wɜrk/"
  },
  {
    "id": "152",
    "sentence": "She hoped she wouldn't be late for work",
    "chinese": "她希望上班不会迟到",
    "pronunciation": "/ʃiː; ʃi/ /hoʊpt/ /ʃiː; ʃi/ /ˌwʊdnt/ /biː/ /leɪt/ /fɔːr; fər/ /wɜrk/"
  },
];
