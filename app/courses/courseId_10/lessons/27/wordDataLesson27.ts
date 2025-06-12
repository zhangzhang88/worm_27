export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Now we will hear the story",
    "chinese": "现在我们将听到故事",
    "pronunciation": "/naʊ/ /wiː; wi/ /wɪl/ /hɪr/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "2",
    "sentence": "about Bill",
    "chinese": "关于比尔",
    "pronunciation": "/əˈbaʊt/ /bɪl/"
  },
  {
    "id": "3",
    "sentence": "Now we will hear the story about Bill",
    "chinese": "现在我们将听到关于比尔的故事",
    "pronunciation": "/naʊ/ /wiː; wi/ /wɪl/ /hɪr/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /bɪl/"
  },
  {
    "id": "4",
    "sentence": "who will go on a trip",
    "chinese": "即将旅行",
    "pronunciation": "/huː/ /wɪl/ /ɡoʊ/ /ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "5",
    "sentence": "Now we will hear the story about Bill who will go on a trip",
    "chinese": "现在我们将听到关于比尔即将旅行的故事",
    "pronunciation": "/naʊ/ /wiː; wi/ /wɪl/ /hɪr/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /bɪl/ /huː/ /wɪl/ /ɡoʊ/ /ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "6",
    "sentence": "Bill will go",
    "chinese": "比尔将去",
    "pronunciation": "/bɪl/ /wɪl/ /ɡoʊ/"
  },
  {
    "id": "7",
    "sentence": "on a trip",
    "chinese": "去旅行",
    "pronunciation": "/ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "8",
    "sentence": "Bill will go on a trip",
    "chinese": "比尔将去旅行",
    "pronunciation": "/bɪl/ /wɪl/ /ɡoʊ/ /ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "9",
    "sentence": "He doesn't have much money",
    "chinese": "他没有很多钱",
    "pronunciation": "/hiː/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/"
  },
  {
    "id": "10",
    "sentence": "though",
    "chinese": "但",
    "pronunciation": "/ðoʊ/"
  },
  {
    "id": "11",
    "sentence": "He doesn't have much money , though",
    "chinese": "他虽然钱不多",
    "pronunciation": "/hiː/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/ /ðoʊ/"
  },
  {
    "id": "12",
    "sentence": "so he will go somewhere",
    "chinese": "所以他要去一些地方",
    "pronunciation": "/soʊ/ /hiː/ /wɪl/ /ɡoʊ/ /ˈsʌmwer/"
  },
  {
    "id": "13",
    "sentence": "He doesn't have much money , though so he will go somewhere",
    "chinese": "他虽然钱不多，但会去一些便宜的地方",
    "pronunciation": "/hiː/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/ /ðoʊ/ /soʊ/ /hiː/ /wɪl/ /ɡoʊ/ /ˈsʌmwer/"
  },
  {
    "id": "14",
    "sentence": "cheap",
    "chinese": "便宜的",
    "pronunciation": "/tʃiːp/"
  },
  {
    "id": "15",
    "sentence": "He doesn't have much money , though so he will go somewhere cheap",
    "chinese": "他虽然钱不多，但会去一些便宜的地方",
    "pronunciation": "/hiː/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/ /ðoʊ/ /soʊ/ /hiː/ /wɪl/ /ɡoʊ/ /ˈsʌmwer/ /tʃiːp/"
  },
  {
    "id": "16",
    "sentence": "He always leaves the country",
    "chinese": "他总是出国",
    "pronunciation": "/hiː/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/"
  },
  {
    "id": "17",
    "sentence": "when he travels",
    "chinese": "当他旅行时",
    "pronunciation": "/wen/ /hiː/ /ˈtrævlz/"
  },
  {
    "id": "18",
    "sentence": "He always leaves the country when he travels",
    "chinese": "他每次旅行都会出国",
    "pronunciation": "/hiː/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/ /wen/ /hiː/ /ˈtrævlz/"
  },
  {
    "id": "19",
    "sentence": "so this time",
    "chinese": "所以这次",
    "pronunciation": "/soʊ/ /ðɪs/ /taɪm/"
  },
  {
    "id": "20",
    "sentence": "He always leaves the country when he travels so this time",
    "chinese": "他每次旅行都会出国，所以这次",
    "pronunciation": "/hiː/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/ /wen/ /hiː/ /ˈtrævlz/ /soʊ/ /ðɪs/ /taɪm/"
  },
  {
    "id": "21",
    "sentence": "he will go to Canada",
    "chinese": "他会去加拿大",
    "pronunciation": "/hiː/ /wɪl/ /ɡoʊ/ /tuː; tə/ /ˈkænədə/"
  },
  {
    "id": "22",
    "sentence": "He always leaves the country when he travels so this time , he will go to Canada",
    "chinese": "他每次旅行都会出国，所以这次他会去加拿大",
    "pronunciation": "/hiː/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/ /wen/ /hiː/ /ˈtrævlz/ /soʊ/ /ðɪs/ /taɪm/ /hiː/ /wɪl/ /ɡoʊ/ /tuː; tə/ /ˈkænədə/"
  },
  {
    "id": "23",
    "sentence": "Bill is from the United States",
    "chinese": "比尔来自美国",
    "pronunciation": "/bɪl/ /ɪz/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/"
  },
  {
    "id": "24",
    "sentence": "so",
    "chinese": "所以",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "25",
    "sentence": "Bill is from the United States so",
    "chinese": "比尔来自美国，所以",
    "pronunciation": "/bɪl/ /ɪz/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/ /soʊ/"
  },
  {
    "id": "26",
    "sentence": "Canada is very close",
    "chinese": "加拿大离得很近",
    "pronunciation": "/ˈkænədə/ /ɪz/ /ˈveri/ /kloʊs/"
  },
  {
    "id": "27",
    "sentence": "Bill is from the United States so Canada is very close",
    "chinese": "比尔来自美国，所以加拿大离得很近",
    "pronunciation": "/bɪl/ /ɪz/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/ /soʊ/ /ˈkænədə/ /ɪz/ /ˈveri/ /kloʊs/"
  },
  {
    "id": "28",
    "sentence": "Bill will only stay in Canada",
    "chinese": "比尔只会在加拿大停留",
    "pronunciation": "/bɪl/ /wɪl/ /ˈoʊnli/ /steɪ/ /ɪn/ /ˈkænədə/"
  },
  {
    "id": "29",
    "sentence": "for a few days",
    "chinese": "停留几天",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /fjuː/ /deɪz/"
  },
  {
    "id": "30",
    "sentence": "Bill will only stay in Canada for a few days",
    "chinese": "比尔只会在加拿大停留几天",
    "pronunciation": "/bɪl/ /wɪl/ /ˈoʊnli/ /steɪ/ /ɪn/ /ˈkænədə/ /fɔːr; fər/ /ə; eɪ/ /fjuː/ /deɪz/"
  },
  {
    "id": "31",
    "sentence": "He will stay in a big city",
    "chinese": "他将在一个大城市停留",
    "pronunciation": "/hiː/ /wɪl/ /steɪ/ /ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/"
  },
  {
    "id": "32",
    "sentence": "and he will take lots of pictures",
    "chinese": "并在那里拍摄许多照片",
    "pronunciation": "/ænd; ənd/ /hiː/ /wɪl/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/"
  },
  {
    "id": "33",
    "sentence": "He will stay in a big city and he will take lots of pictures",
    "chinese": "他将在一个大城市停留，并在那里拍摄许多照片",
    "pronunciation": "/hiː/ /wɪl/ /steɪ/ /ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/ /ænd; ənd/ /hiː/ /wɪl/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/"
  },
  {
    "id": "34",
    "sentence": "there",
    "chinese": "那里",
    "pronunciation": "/ðer; ðər/"
  },
  {
    "id": "35",
    "sentence": "He will stay in a big city and he will take lots of pictures there",
    "chinese": "他将在一个大城市停留，并在那里拍摄许多照片",
    "pronunciation": "/hiː/ /wɪl/ /steɪ/ /ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/ /ænd; ənd/ /hiː/ /wɪl/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/ /ðer; ðər/"
  },
  {
    "id": "36",
    "sentence": "Now let's hear the story",
    "chinese": "现在让我们听听故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "37",
    "sentence": "told by Bill",
    "chinese": "比尔讲述的",
    "pronunciation": "/toʊld/ /baɪ/ /bɪl/"
  },
  {
    "id": "38",
    "sentence": "Now let's hear the story told by Bill",
    "chinese": "现在让我们听听比尔讲述的故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /ˈstɔːri/ /toʊld/ /baɪ/ /bɪl/"
  },
  {
    "id": "39",
    "sentence": "I was planning",
    "chinese": "我计划",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈplænɪŋ/"
  },
  {
    "id": "40",
    "sentence": "to go on a trip",
    "chinese": "去旅行",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "41",
    "sentence": "I was planning to go on a trip",
    "chinese": "我计划去旅行",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈplænɪŋ/ /tuː; tə/ /ɡoʊ/ /ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "42",
    "sentence": "I didn't have much money",
    "chinese": "我没有太多钱",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /hæv/ /mʌtʃ/ /ˈmʌni/"
  },
  {
    "id": "43",
    "sentence": "though",
    "chinese": "虽然",
    "pronunciation": "/ðoʊ/"
  },
  {
    "id": "44",
    "sentence": "I didn't have much money though",
    "chinese": "虽然我没有太多钱",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /hæv/ /mʌtʃ/ /ˈmʌni/ /ðoʊ/"
  },
  {
    "id": "45",
    "sentence": "so I was planning to go somewhere",
    "chinese": "所以我计划去某个地方",
    "pronunciation": "/soʊ/ /aɪ/ /wʌz; wəz/ /ˈplænɪŋ/ /tuː; tə/ /ɡoʊ/ /ˈsʌmwer/"
  },
  {
    "id": "46",
    "sentence": "I didn't have much money though , so I was planning to go somewhere",
    "chinese": "我没有太多钱，所以我计划去",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /hæv/ /mʌtʃ/ /ˈmʌni/ /ðoʊ/ /soʊ/ /aɪ/ /wʌz; wəz/ /ˈplænɪŋ/ /tuː; tə/ /ɡoʊ/ /ˈsʌmwer/"
  },
  {
    "id": "47",
    "sentence": "cheap",
    "chinese": "便宜的",
    "pronunciation": "/tʃiːp/"
  },
  {
    "id": "48",
    "sentence": "I didn't have much money though , so I was planning to go somewhere cheap",
    "chinese": "虽然我没有太多钱，所以我计划去一个便宜的地方",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /hæv/ /mʌtʃ/ /ˈmʌni/ /ðoʊ/ /soʊ/ /aɪ/ /wʌz; wəz/ /ˈplænɪŋ/ /tuː; tə/ /ɡoʊ/ /ˈsʌmwer/ /tʃiːp/"
  },
  {
    "id": "49",
    "sentence": "I always leave the country",
    "chinese": "我总是离开自己的国家",
    "pronunciation": "/aɪ/ /ˈɔːlweɪz/ /liːv/ /ðə/ /ˈkʌntri/"
  },
  {
    "id": "50",
    "sentence": "when I travel",
    "chinese": "当我旅行时",
    "pronunciation": "/wen/ /aɪ/ /ˈtræv(ə)l/"
  },
  {
    "id": "51",
    "sentence": "I always leave the country when I travel",
    "chinese": "我每次旅行都会离开自己的国家",
    "pronunciation": "/aɪ/ /ˈɔːlweɪz/ /liːv/ /ðə/ /ˈkʌntri/ /wen/ /aɪ/ /ˈtræv(ə)l/"
  },
  {
    "id": "52",
    "sentence": "so this time",
    "chinese": "所以这次",
    "pronunciation": "/soʊ/ /ðɪs/ /taɪm/"
  },
  {
    "id": "53",
    "sentence": "I always leave the country when I travel , so this time",
    "chinese": "我每次旅行都会离开自己的国家，所以这次",
    "pronunciation": "/aɪ/ /ˈɔːlweɪz/ /liːv/ /ðə/ /ˈkʌntri/ /wen/ /aɪ/ /ˈtræv(ə)l/ /soʊ/ /ðɪs/ /taɪm/"
  },
  {
    "id": "54",
    "sentence": "I was going to go to Canada",
    "chinese": "我打算去加拿大",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˈkænədə/"
  },
  {
    "id": "55",
    "sentence": "I always leave the country when I travel , so this time I was going to go to Canada",
    "chinese": "我每次旅行都会离开自己的国家，所以这次我打算去加拿大",
    "pronunciation": "/aɪ/ /ˈɔːlweɪz/ /liːv/ /ðə/ /ˈkʌntri/ /wen/ /aɪ/ /ˈtræv(ə)l/ /soʊ/ /ðɪs/ /taɪm/ /aɪ/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˈkænədə/"
  },
  {
    "id": "56",
    "sentence": "I'm from the United States",
    "chinese": "我来自美国",
    "pronunciation": "/aɪm/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/"
  },
  {
    "id": "57",
    "sentence": "so",
    "chinese": "所以",
    "pronunciation": "/soʊ/"
  },
  {
    "id": "58",
    "sentence": "I'm from the United States so",
    "chinese": "我来自美国，所以",
    "pronunciation": "/aɪm/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/ /soʊ/"
  },
  {
    "id": "59",
    "sentence": "Canada is very close",
    "chinese": "加拿大很近",
    "pronunciation": "/ˈkænədə/ /ɪz/ /ˈveri/ /kloʊs/"
  },
  {
    "id": "60",
    "sentence": "I'm from the United States so Canada is very close",
    "chinese": "我来自美国，所以加拿大离我很近",
    "pronunciation": "/aɪm/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/ /soʊ/ /ˈkænədə/ /ɪz/ /ˈveri/ /kloʊs/"
  },
  {
    "id": "61",
    "sentence": "I was only going to stay",
    "chinese": "我原本只打算待",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈoʊnli/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/"
  },
  {
    "id": "62",
    "sentence": "in Canada",
    "chinese": "在加拿大",
    "pronunciation": "/ɪn/ /ˈkænədə/"
  },
  {
    "id": "63",
    "sentence": "I was only going to stay in Canada",
    "chinese": "我原本只打算在加拿大待",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈoʊnli/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ˈkænədə/"
  },
  {
    "id": "64",
    "sentence": "for a few days",
    "chinese": "待几天",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /fjuː/ /deɪz/"
  },
  {
    "id": "65",
    "sentence": "I was only going to stay in Canada for a few days",
    "chinese": "我原本只打算在加拿大待几天",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈoʊnli/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ˈkænədə/ /fɔːr; fər/ /ə; eɪ/ /fjuː/ /deɪz/"
  },
  {
    "id": "66",
    "sentence": "But I was going to stay in a big city",
    "chinese": "但我打算留在大城市",
    "pronunciation": "/bʌt/ /aɪ/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/"
  },
  {
    "id": "67",
    "sentence": "and I was going to take lots of pictures there",
    "chinese": "并且我打算在那里拍很多照片",
    "pronunciation": "/ænd; ənd/ /aɪ/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/ /ðer; ðər/"
  },
  {
    "id": "68",
    "sentence": "But I was going to stay in a big city and I was going to take lots of pictures there",
    "chinese": "但我打算留在大城市，并且在那里拍很多照片",
    "pronunciation": "/bʌt/ /aɪ/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/ /ænd; ənd/ /aɪ/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/ /ðer; ðər/"
  },
  {
    "id": "69",
    "sentence": "Now",
    "chinese": "现在",
    "pronunciation": "/naʊ/"
  },
  {
    "id": "70",
    "sentence": "here are some questions",
    "chinese": "有一些问题",
    "pronunciation": "/hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "71",
    "sentence": "Now here are some questions",
    "chinese": "现在有一些问题",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "72",
    "sentence": "You can answer",
    "chinese": "你可以回答",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈænsər/"
  },
  {
    "id": "73",
    "sentence": "if you want",
    "chinese": "如果你想的话",
    "pronunciation": "/ɪf/ /juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "74",
    "sentence": "You can answer if you want",
    "chinese": "你可以回答，如果愿意的话",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈænsər/ /ɪf/ /juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "75",
    "sentence": "otherwise just listen",
    "chinese": "否则就只听",
    "pronunciation": "/ˈʌðərwaɪz/ /dʒʌst/ /ˈlɪs(ə)n/"
  },
  {
    "id": "76",
    "sentence": "You can answer if you want , otherwise just listen",
    "chinese": "你可以回答，如果不想的话，就只听好了",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈænsər/ /ɪf/ /juː; jʊ/ /wɑːnt/ /ˈʌðərwaɪz/ /dʒʌst/ /ˈlɪs(ə)n/"
  },
  {
    "id": "77",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "78",
    "sentence": "Bill will go on a trip",
    "chinese": "比尔将去旅行",
    "pronunciation": "/bɪl/ /wɪl/ /ɡoʊ/ /ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "79",
    "sentence": "One : Bill will go on a trip",
    "chinese": "比尔将去旅行",
    "pronunciation": "/wʌn/ /bɪl/ /wɪl/ /ɡoʊ/ /ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "80",
    "sentence": "What will Bill do",
    "chinese": "比尔会做什么？",
    "pronunciation": "/wʌt/ /wɪl/ /bɪl/ /duː; də/"
  },
  {
    "id": "81",
    "sentence": "Bill will go",
    "chinese": "比尔将去",
    "pronunciation": "/bɪl/ /wɪl/ /ɡoʊ/"
  },
  {
    "id": "82",
    "sentence": "on a trip",
    "chinese": "去旅行",
    "pronunciation": "/ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "83",
    "sentence": "Bill will go on a trip",
    "chinese": "比尔将去旅行",
    "pronunciation": "/bɪl/ /wɪl/ /ɡoʊ/ /ɑːn/ /ə; eɪ/ /trɪp/"
  },
  {
    "id": "84",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "85",
    "sentence": "Bill doesn't have much money",
    "chinese": "比尔没有多少钱",
    "pronunciation": "/bɪl/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/"
  },
  {
    "id": "86",
    "sentence": "Two : Bill doesn't have much money",
    "chinese": "比尔没有多少钱",
    "pronunciation": "/tuː/ /bɪl/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/"
  },
  {
    "id": "87",
    "sentence": "What problem",
    "chinese": "什么问题",
    "pronunciation": "/wʌt/ /ˈprɑːbləm/"
  },
  {
    "id": "88",
    "sentence": "does Bill have",
    "chinese": "比尔有什么",
    "pronunciation": "/dʌz/ /bɪl/ /hæv/"
  },
  {
    "id": "89",
    "sentence": "What problem does Bill have",
    "chinese": "比尔有什么问题",
    "pronunciation": "/wʌt/ /ˈprɑːbləm/ /dʌz/ /bɪl/ /hæv/"
  },
  {
    "id": "90",
    "sentence": "though",
    "chinese": "不过",
    "pronunciation": "/ðoʊ/"
  },
  {
    "id": "91",
    "sentence": "What problem does Bill have , though ?",
    "chinese": "不过，比尔遇到了什么问题呢？",
    "pronunciation": "/wʌt/ /ˈprɑːbləm/ /dʌz/ /bɪl/ /hæv/ /ðoʊ/"
  },
  {
    "id": "92",
    "sentence": "Bill doesn't have much money",
    "chinese": "比尔没有多少钱",
    "pronunciation": "/bɪl/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/"
  },
  {
    "id": "93",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "94",
    "sentence": "He will go somewhere",
    "chinese": "他会去某个地方",
    "pronunciation": "/hiː/ /wɪl/ /ɡoʊ/ /ˈsʌmwer/"
  },
  {
    "id": "95",
    "sentence": "Three : He will go somewhere",
    "chinese": "三：他会去一些地方",
    "pronunciation": "/θriː/ /hiː/ /wɪl/ /ɡoʊ/ /ˈsʌmwer/"
  },
  {
    "id": "96",
    "sentence": "cheap",
    "chinese": "便宜的",
    "pronunciation": "/tʃiːp/"
  },
  {
    "id": "97",
    "sentence": "Three : He will go somewhere cheap",
    "chinese": "三：他会去一些便宜的地方",
    "pronunciation": "/θriː/ /hiː/ /wɪl/ /ɡoʊ/ /ˈsʌmwer/ /tʃiːp/"
  },
  {
    "id": "98",
    "sentence": "What will Bill do",
    "chinese": "比尔会怎么做？",
    "pronunciation": "/wʌt/ /wɪl/ /bɪl/ /duː; də/"
  },
  {
    "id": "99",
    "sentence": "because he doesn't have much money",
    "chinese": "因为他没有多少钱",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /hiː/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/"
  },
  {
    "id": "100",
    "sentence": "What will Bill do because he doesn't have much money ?",
    "chinese": "比尔会怎么做，因为他没有多少钱？",
    "pronunciation": "/wʌt/ /wɪl/ /bɪl/ /duː; də/ /bɪˈkəz, bɪˈkɔːz/ /hiː/ /ˈdʌznt/ /hæv/ /mʌtʃ/ /ˈmʌni/"
  },
  {
    "id": "101",
    "sentence": "He will go",
    "chinese": "他会去",
    "pronunciation": "/hiː/ /wɪl/ /ɡoʊ/"
  },
  {
    "id": "102",
    "sentence": "somewhere cheap",
    "chinese": "便宜的地方",
    "pronunciation": "/ˈsʌmwer/ /tʃiːp/"
  },
  {
    "id": "103",
    "sentence": "He will go somewhere cheap",
    "chinese": "他会去一个便宜的地方",
    "pronunciation": "/hiː/ /wɪl/ /ɡoʊ/ /ˈsʌmwer/ /tʃiːp/"
  },
  {
    "id": "104",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "105",
    "sentence": "Bill always leaves the country",
    "chinese": "比尔总是出国",
    "pronunciation": "/bɪl/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/"
  },
  {
    "id": "106",
    "sentence": "Four : Bill always leaves the country",
    "chinese": "比尔每次旅行都会出国",
    "pronunciation": "/fɔr/ /bɪl/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/"
  },
  {
    "id": "107",
    "sentence": "when he travels",
    "chinese": "当他旅行时",
    "pronunciation": "/wen/ /hiː/ /ˈtrævlz/"
  },
  {
    "id": "108",
    "sentence": "Four : Bill always leaves the country when he travels",
    "chinese": "比尔每次旅行都会出国",
    "pronunciation": "/fɔr/ /bɪl/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/ /wen/ /hiː/ /ˈtrævlz/"
  },
  {
    "id": "109",
    "sentence": "What does Bill always do",
    "chinese": "比尔总是做什么",
    "pronunciation": "/wʌt/ /dʌz/ /bɪl/ /ˈɔːlweɪz/ /duː; də/"
  },
  {
    "id": "110",
    "sentence": "when he travels",
    "chinese": "他旅行时",
    "pronunciation": "/wen/ /hiː/ /ˈtrævlz/"
  },
  {
    "id": "111",
    "sentence": "What does Bill always do when he travels ?",
    "chinese": "比尔旅行时总是做什么？",
    "pronunciation": "/wʌt/ /dʌz/ /bɪl/ /ˈɔːlweɪz/ /duː; də/ /wen/ /hiː/ /ˈtrævlz/"
  },
  {
    "id": "112",
    "sentence": "Bill always leaves the country",
    "chinese": "比尔总是出国",
    "pronunciation": "/bɪl/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/"
  },
  {
    "id": "113",
    "sentence": "when he travels",
    "chinese": "当他旅行时",
    "pronunciation": "/wen/ /hiː/ /ˈtrævlz/"
  },
  {
    "id": "114",
    "sentence": "Bill always leaves the country when he travels",
    "chinese": "比尔每次旅行都会出国",
    "pronunciation": "/bɪl/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/ /wen/ /hiː/ /ˈtrævlz/"
  },
  {
    "id": "115",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "116",
    "sentence": "This time",
    "chinese": "这一次",
    "pronunciation": "/ðɪs/ /taɪm/"
  },
  {
    "id": "117",
    "sentence": "Five : This time",
    "chinese": "这一次",
    "pronunciation": "/faɪv/ /ðɪs/ /taɪm/"
  },
  {
    "id": "118",
    "sentence": "he was going to go to Canada",
    "chinese": "他打算去加拿大",
    "pronunciation": "/hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˈkænədə/"
  },
  {
    "id": "119",
    "sentence": "Five : This time , he was going to go to Canada",
    "chinese": "这一次，他打算去加拿大",
    "pronunciation": "/faɪv/ /ðɪs/ /taɪm/ /hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˈkænədə/"
  },
  {
    "id": "120",
    "sentence": "Because he always leaves the country",
    "chinese": "因为他总是离开国家",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /hiː/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/"
  },
  {
    "id": "121",
    "sentence": "where was Bill going to go",
    "chinese": "比尔要去哪里？",
    "pronunciation": "/wer/ /wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "122",
    "sentence": "Because he always leaves the country , where was Bill going to go",
    "chinese": "因为他总是出国，比尔这次要去哪里？",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /hiː/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/ /wer/ /wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "123",
    "sentence": "this time",
    "chinese": "这次",
    "pronunciation": "/ðɪs/ /taɪm/"
  },
  {
    "id": "124",
    "sentence": "Because he always leaves the country , where was Bill going to go this time ?",
    "chinese": "因为他总是出国，这次比尔要去哪里呢？",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /hiː/ /ˈɔːlweɪz/ /liːvz/ /ðə/ /ˈkʌntri/ /wer/ /wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/ /ðɪs/ /taɪm/"
  },
  {
    "id": "125",
    "sentence": "This time",
    "chinese": "这次",
    "pronunciation": "/ðɪs/ /taɪm/"
  },
  {
    "id": "126",
    "sentence": "he was going to go to Canada",
    "chinese": "他打算去加拿大",
    "pronunciation": "/hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˈkænədə/"
  },
  {
    "id": "127",
    "sentence": "This time , he was going to go to Canada",
    "chinese": "这次，他打算去加拿大",
    "pronunciation": "/ðɪs/ /taɪm/ /hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˈkænədə/"
  },
  {
    "id": "128",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "129",
    "sentence": "Bill is from the United States",
    "chinese": "比尔来自美国",
    "pronunciation": "/bɪl/ /ɪz/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/"
  },
  {
    "id": "130",
    "sentence": "Six : Bill is from the United States",
    "chinese": "六：比尔来自美国",
    "pronunciation": "/sɪks/ /bɪl/ /ɪz/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/"
  },
  {
    "id": "131",
    "sentence": "Where is Bill",
    "chinese": "比尔在哪里",
    "pronunciation": "/wer/ /ɪz/ /bɪl/"
  },
  {
    "id": "132",
    "sentence": "from",
    "chinese": "来自",
    "pronunciation": "/frʌm/"
  },
  {
    "id": "133",
    "sentence": "Where is Bill from ?",
    "chinese": "比尔来自哪里？",
    "pronunciation": "/wer/ /ɪz/ /bɪl/ /frʌm/"
  },
  {
    "id": "134",
    "sentence": "Bill is from",
    "chinese": "比尔来自",
    "pronunciation": "/bɪl/ /ɪz/ /frʌm/"
  },
  {
    "id": "135",
    "sentence": "the United States",
    "chinese": "美国",
    "pronunciation": "/ðə/ /juˈnaɪtɪd/ /steɪts/"
  },
  {
    "id": "136",
    "sentence": "Bill is from the United States",
    "chinese": "比尔来自美国",
    "pronunciation": "/bɪl/ /ɪz/ /frʌm/ /ðə/ /juˈnaɪtɪd/ /steɪts/"
  },
  {
    "id": "137",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "138",
    "sentence": "Bill was only going to stay in Canada",
    "chinese": "比尔只打算在加拿大待",
    "pronunciation": "/bɪl/ /wʌz; wəz/ /ˈoʊnli/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ˈkænədə/"
  },
  {
    "id": "139",
    "sentence": "Seven : Bill was only going to stay in Canada",
    "chinese": "比尔只打算在加拿大待",
    "pronunciation": "/ˈsev(ə)n/ /bɪl/ /wʌz; wəz/ /ˈoʊnli/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ˈkænədə/"
  },
  {
    "id": "140",
    "sentence": "for a few days",
    "chinese": "待几天",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /fjuː/ /deɪz/"
  },
  {
    "id": "141",
    "sentence": "Seven : Bill was only going to stay in Canada for a few days",
    "chinese": "比尔只打算在加拿大待几天",
    "pronunciation": "/ˈsev(ə)n/ /bɪl/ /wʌz; wəz/ /ˈoʊnli/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ˈkænədə/ /fɔːr; fər/ /ə; eɪ/ /fjuː/ /deɪz/"
  },
  {
    "id": "142",
    "sentence": "How long",
    "chinese": "多久",
    "pronunciation": "/haʊ/ /lɔːŋ/"
  },
  {
    "id": "143",
    "sentence": "was Bill going to stay",
    "chinese": "比尔打算待",
    "pronunciation": "/wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/"
  },
  {
    "id": "144",
    "sentence": "How long was Bill going to stay",
    "chinese": "比尔打算待多久",
    "pronunciation": "/haʊ/ /lɔːŋ/ /wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/"
  },
  {
    "id": "145",
    "sentence": "in Canada",
    "chinese": "在加拿大",
    "pronunciation": "/ɪn/ /ˈkænədə/"
  },
  {
    "id": "146",
    "sentence": "How long was Bill going to stay in Canada ?",
    "chinese": "比尔打算在加拿大待多久？",
    "pronunciation": "/haʊ/ /lɔːŋ/ /wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ˈkænədə/"
  },
  {
    "id": "147",
    "sentence": "Bill was going to stay in Canada",
    "chinese": "比尔打算待在加拿大",
    "pronunciation": "/bɪl/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ˈkænədə/"
  },
  {
    "id": "148",
    "sentence": "only for a few days",
    "chinese": "只待几天",
    "pronunciation": "/ˈoʊnli/ /fɔːr; fər/ /ə; eɪ/ /fjuː/ /deɪz/"
  },
  {
    "id": "149",
    "sentence": "Bill was going to stay in Canada only for a few days",
    "chinese": "比尔只打算在加拿大待几天",
    "pronunciation": "/bɪl/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ˈkænədə/ /ˈoʊnli/ /fɔːr; fər/ /ə; eɪ/ /fjuː/ /deɪz/"
  },
  {
    "id": "150",
    "sentence": "Eight :",
    "chinese": "八：",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "151",
    "sentence": "He was going to stay",
    "chinese": "他打算住",
    "pronunciation": "/hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/"
  },
  {
    "id": "152",
    "sentence": "Eight : He was going to stay",
    "chinese": "八：他打算住",
    "pronunciation": "/eɪt/ /hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/"
  },
  {
    "id": "153",
    "sentence": "in a big city",
    "chinese": "在一个大城市",
    "pronunciation": "/ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/"
  },
  {
    "id": "154",
    "sentence": "Eight : He was going to stay in a big city",
    "chinese": "八：他打算住在一个大城市",
    "pronunciation": "/eɪt/ /hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/"
  },
  {
    "id": "155",
    "sentence": "What kind of city",
    "chinese": "什么样的城市",
    "pronunciation": "/wʌt/ /kaɪnd/ /ʌv/ /ˈsɪti/"
  },
  {
    "id": "156",
    "sentence": "was Bill going to stay in",
    "chinese": "比尔打算住在",
    "pronunciation": "/wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/"
  },
  {
    "id": "157",
    "sentence": "What kind of city was Bill going to stay in ?",
    "chinese": "比尔打算住在什么样的城市？",
    "pronunciation": "/wʌt/ /kaɪnd/ /ʌv/ /ˈsɪti/ /wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/"
  },
  {
    "id": "158",
    "sentence": "He was going to stay",
    "chinese": "他打算住",
    "pronunciation": "/hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/"
  },
  {
    "id": "159",
    "sentence": "in a big city",
    "chinese": "在大城市",
    "pronunciation": "/ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/"
  },
  {
    "id": "160",
    "sentence": "He was going to stay in a big city",
    "chinese": "他打算住在大城市",
    "pronunciation": "/hiː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /steɪ/ /ɪn/ /ə; eɪ/ /bɪɡ/ /ˈsɪti/"
  },
  {
    "id": "161",
    "sentence": "Nine :",
    "chinese": "九：",
    "pronunciation": "/naɪn/"
  },
  {
    "id": "162",
    "sentence": "Bill was going to take lots of pictures",
    "chinese": "比尔打算拍很多照片",
    "pronunciation": "/bɪl/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/"
  },
  {
    "id": "163",
    "sentence": "Nine : Bill was going to take lots of pictures",
    "chinese": "九：比尔打算拍很多照片",
    "pronunciation": "/naɪn/ /bɪl/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/"
  },
  {
    "id": "164",
    "sentence": "there",
    "chinese": "那里",
    "pronunciation": "/ðer; ðər/"
  },
  {
    "id": "165",
    "sentence": "Nine : Bill was going to take lots of pictures there",
    "chinese": "九：比尔打算在那里拍很多照片",
    "pronunciation": "/naɪn/ /bɪl/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/ /ðer; ðər/"
  },
  {
    "id": "166",
    "sentence": "What was Bill going to do",
    "chinese": "比尔打算做什么",
    "pronunciation": "/wʌt/ /wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "167",
    "sentence": "there",
    "chinese": "那里",
    "pronunciation": "/ðer; ðər/"
  },
  {
    "id": "168",
    "sentence": "What was Bill going to do there ?",
    "chinese": "比尔打算在那里做什么？",
    "pronunciation": "/wʌt/ /wʌz; wəz/ /bɪl/ /ˈɡoʊɪŋ/ /tuː; tə/ /duː; də/ /ðer; ðər/"
  },
  {
    "id": "169",
    "sentence": "Bill was going to take",
    "chinese": "比尔打算拍",
    "pronunciation": "/bɪl/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /teɪk/"
  },
  {
    "id": "170",
    "sentence": "lots of pictures",
    "chinese": "很多照片",
    "pronunciation": "/lɑːts/ /ʌv/ /ˈpɪktʃərz/"
  },
  {
    "id": "171",
    "sentence": "Bill was going to take lots of pictures",
    "chinese": "比尔打算拍很多照片",
    "pronunciation": "/bɪl/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/"
  },
  {
    "id": "172",
    "sentence": "there",
    "chinese": "那里",
    "pronunciation": "/ðer; ðər/"
  },
  {
    "id": "173",
    "sentence": "Bill was going to take lots of pictures there",
    "chinese": "比尔打算在那里拍很多照片",
    "pronunciation": "/bɪl/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /teɪk/ /lɑːts/ /ʌv/ /ˈpɪktʃərz/ /ðer; ðər/"
  },
  {
    "id": "174",
    "sentence": "And that's the story",
    "chinese": "这就是故事",
    "pronunciation": "/ænd; ənd/ /ðæts/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "175",
    "sentence": "of Bill",
    "chinese": "比尔的",
    "pronunciation": "/ʌv/ /bɪl/"
  },
  {
    "id": "176",
    "sentence": "And that's the story of Bill",
    "chinese": "这就是比尔的故事",
    "pronunciation": "/ænd; ənd/ /ðæts/ /ðə/ /ˈstɔːri/ /ʌv/ /bɪl/"
  },
];
