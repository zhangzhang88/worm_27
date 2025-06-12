export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Now let's hear the story",
    "chinese": "现在让我们听听故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "2",
    "sentence": "of Jerry",
    "chinese": "关于杰瑞的",
    "pronunciation": "/ʌv/ /ˈdʒeri/"
  },
  {
    "id": "3",
    "sentence": "Now let's hear the story of Jerry",
    "chinese": "现在让我们听听杰瑞的故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /ˈstɔːri/ /ʌv/ /ˈdʒeri/"
  },
  {
    "id": "4",
    "sentence": "who is taking a day off",
    "chinese": "他今天请了一天假",
    "pronunciation": "/huː/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /deɪ/ /ɔːf/"
  },
  {
    "id": "5",
    "sentence": "Now let's hear the story of Jerry , who is taking a day off",
    "chinese": "现在让我们听听杰瑞的故事，他今天请了一天假",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /ˈstɔːri/ /ʌv/ /ˈdʒeri/ /huː/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /deɪ/ /ɔːf/"
  },
  {
    "id": "6",
    "sentence": "from work",
    "chinese": "不上班",
    "pronunciation": "/frʌm/ /wɜrk/"
  },
  {
    "id": "7",
    "sentence": "Now let's hear the story of Jerry , who is taking a day off from work",
    "chinese": "现在让我们听听杰瑞的故事，他今天请了一天假不上班",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /ˈstɔːri/ /ʌv/ /ˈdʒeri/ /huː/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /deɪ/ /ɔːf/ /frʌm/ /wɜrk/"
  },
  {
    "id": "8",
    "sentence": "He wants to go",
    "chinese": "他想",
    "pronunciation": "/hiː/ /ˈwɒnts/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "9",
    "sentence": "see a movie",
    "chinese": "看电影",
    "pronunciation": "/siː/ /ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "10",
    "sentence": "He wants to go see a movie",
    "chinese": "他想去看电影",
    "pronunciation": "/hiː/ /ˈwɒnts/ /tuː; tə/ /ɡoʊ/ /siː/ /ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "11",
    "sentence": "Jerry likes comedy movies",
    "chinese": "杰瑞喜欢喜剧电影",
    "pronunciation": "/ˈdʒeri/ /laɪks/ /ˈkɑːmədi/ /ˈmuːviz/"
  },
  {
    "id": "12",
    "sentence": "more than",
    "chinese": "而不是",
    "pronunciation": "/mɔːr/ /ðæn; ðən/"
  },
  {
    "id": "13",
    "sentence": "Jerry likes comedy movies more than",
    "chinese": "杰瑞更喜欢喜剧电影",
    "pronunciation": "/ˈdʒeri/ /laɪks/ /ˈkɑːmədi/ /ˈmuːviz/ /mɔːr/ /ðæn; ðən/"
  },
  {
    "id": "14",
    "sentence": "romance movies",
    "chinese": "爱情电影",
    "pronunciation": "/roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "15",
    "sentence": "Jerry likes comedy movies more than romance movies",
    "chinese": "杰瑞更喜欢喜剧电影，而不是爱情电影",
    "pronunciation": "/ˈdʒeri/ /laɪks/ /ˈkɑːmədi/ /ˈmuːviz/ /mɔːr/ /ðæn; ðən/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "16",
    "sentence": "And he doesn't like science fiction movies",
    "chinese": "他不喜欢科幻电影",
    "pronunciation": "/ænd; ənd/ /hiː/ /ˈdʌznt/ /laɪk/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/"
  },
  {
    "id": "17",
    "sentence": "as much as action movies",
    "chinese": "像动作片那样",
    "pronunciation": "/æz; əz/ /mʌtʃ/ /æz; əz/ /ˈækʃən/ /ˈmuːviz/"
  },
  {
    "id": "18",
    "sentence": "And he doesn't like science fiction movies as much as action movies",
    "chinese": "他不像喜欢动作片那样喜欢科幻电影",
    "pronunciation": "/ænd; ənd/ /hiː/ /ˈdʌznt/ /laɪk/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/ /æz; əz/ /mʌtʃ/ /æz; əz/ /ˈækʃən/ /ˈmuːviz/"
  },
  {
    "id": "19",
    "sentence": "He is checking the list",
    "chinese": "他正在查看列表",
    "pronunciation": "/hiː/ /ɪz/ /ˈtʃekɪŋ/ /ðə/ /lɪst/"
  },
  {
    "id": "20",
    "sentence": "of new movies",
    "chinese": "新电影的",
    "pronunciation": "/ʌv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "21",
    "sentence": "He is checking the list of new movies",
    "chinese": "他正在查看新电影的列表",
    "pronunciation": "/hiː/ /ɪz/ /ˈtʃekɪŋ/ /ðə/ /lɪst/ /ʌv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "22",
    "sentence": "online",
    "chinese": "在线",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "23",
    "sentence": "He is checking the list of new movies online",
    "chinese": "他正在网上查看新电影的列表",
    "pronunciation": "/hiː/ /ɪz/ /ˈtʃekɪŋ/ /ðə/ /lɪst/ /ʌv/ /nuː/ /ˈmuːviz/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "24",
    "sentence": "There are five new movies",
    "chinese": "有五部新电影",
    "pronunciation": "/ðer; ðər/ /ɑr/ /faɪv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "25",
    "sentence": "playing",
    "chinese": "正在上映",
    "pronunciation": "/ˈpleɪɪŋ/"
  },
  {
    "id": "26",
    "sentence": "There are five new movies playing",
    "chinese": "有五部新电影正在上映",
    "pronunciation": "/ðer; ðər/ /ɑr/ /faɪv/ /nuː/ /ˈmuːviz/ /ˈpleɪɪŋ/"
  },
  {
    "id": "27",
    "sentence": "Three of the new movies",
    "chinese": "三部新电影",
    "pronunciation": "/θriː/ /ʌv/ /ðə/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "28",
    "sentence": "are romance movies",
    "chinese": "是爱情片",
    "pronunciation": "/ɑr/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "29",
    "sentence": "Three of the new movies are romance movies",
    "chinese": "三部新电影是爱情片",
    "pronunciation": "/θriː/ /ʌv/ /ðə/ /nuː/ /ˈmuːviz/ /ɑr/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "30",
    "sentence": "One of the movies",
    "chinese": "其中一部电影",
    "pronunciation": "/wʌn/ /ʌv/ /ðə/ /ˈmuːviz/"
  },
  {
    "id": "31",
    "sentence": "is a science fiction movie",
    "chinese": "是科幻电影",
    "pronunciation": "/ɪz/ /ə; eɪ/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/"
  },
  {
    "id": "32",
    "sentence": "One of the movies is a science fiction movie",
    "chinese": "其中一部电影是科幻电影",
    "pronunciation": "/wʌn/ /ʌv/ /ðə/ /ˈmuːviz/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/"
  },
  {
    "id": "33",
    "sentence": "One of the movies",
    "chinese": "其中一部电影",
    "pronunciation": "/wʌn/ /ʌv/ /ðə/ /ˈmuːviz/"
  },
  {
    "id": "34",
    "sentence": "is a comedy",
    "chinese": "是喜剧",
    "pronunciation": "/ɪz/ /ə; eɪ/ /ˈkɑːmədi/"
  },
  {
    "id": "35",
    "sentence": "One of the movies is a comedy",
    "chinese": "其中一部电影是喜剧",
    "pronunciation": "/wʌn/ /ʌv/ /ðə/ /ˈmuːviz/ /ɪz/ /ə; eɪ/ /ˈkɑːmədi/"
  },
  {
    "id": "36",
    "sentence": "Jerry is thinking about",
    "chinese": "杰瑞正在考虑",
    "pronunciation": "/ˈdʒeri/ /ɪz/ /ˈθɪŋkɪŋ/ /əˈbaʊt/"
  },
  {
    "id": "37",
    "sentence": "seeing the new comedy movie",
    "chinese": "去看那部新的喜剧电影",
    "pronunciation": "/ˈsiːɪŋ/ /ðə/ /nuː/ /ˈkɑːmədi/ /ˈmuːvi/"
  },
  {
    "id": "38",
    "sentence": "Jerry is thinking about seeing the new comedy movie",
    "chinese": "杰瑞正在考虑去看那部新的喜剧电影",
    "pronunciation": "/ˈdʒeri/ /ɪz/ /ˈθɪŋkɪŋ/ /əˈbaʊt/ /ˈsiːɪŋ/ /ðə/ /nuː/ /ˈkɑːmədi/ /ˈmuːvi/"
  },
  {
    "id": "39",
    "sentence": "Now let's listen",
    "chinese": "现在让我们听",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/"
  },
  {
    "id": "40",
    "sentence": "to the same story",
    "chinese": "同一个故事",
    "pronunciation": "/tuː; tə/ /ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "41",
    "sentence": "Now let's listen to the same story",
    "chinese": "现在让我们听听同一个故事",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "42",
    "sentence": "told by Jerry",
    "chinese": "杰瑞讲述的",
    "pronunciation": "/toʊld/ /baɪ/ /ˈdʒeri/"
  },
  {
    "id": "43",
    "sentence": "Now let's listen to the same story told by Jerry",
    "chinese": "现在让我们听听杰瑞讲述的同一个故事",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /seɪm/ /ˈstɔːri/ /toʊld/ /baɪ/ /ˈdʒeri/"
  },
  {
    "id": "44",
    "sentence": "I took a day off",
    "chinese": "我请了一天假",
    "pronunciation": "/aɪ/ /tʊk/ /ə; eɪ/ /deɪ/ /ɔːf/"
  },
  {
    "id": "45",
    "sentence": "from work",
    "chinese": "从工作中",
    "pronunciation": "/frʌm/ /wɜrk/"
  },
  {
    "id": "46",
    "sentence": "I took a day off from work",
    "chinese": "我请了一天假",
    "pronunciation": "/aɪ/ /tʊk/ /ə; eɪ/ /deɪ/ /ɔːf/ /frʌm/ /wɜrk/"
  },
  {
    "id": "47",
    "sentence": "I wanted to go",
    "chinese": "我想去",
    "pronunciation": "/aɪ/ /ˈwɑːntɪd/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "48",
    "sentence": "see a movie",
    "chinese": "看电影",
    "pronunciation": "/siː/ /ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "49",
    "sentence": "I wanted to go see a movie",
    "chinese": "我想去看电影",
    "pronunciation": "/aɪ/ /ˈwɑːntɪd/ /tuː; tə/ /ɡoʊ/ /siː/ /ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "50",
    "sentence": "I like comedy movies",
    "chinese": "我喜欢喜剧片",
    "pronunciation": "/aɪ/ /laɪk/ /ˈkɑːmədi/ /ˈmuːviz/"
  },
  {
    "id": "51",
    "sentence": "more than romance movies",
    "chinese": "比爱情片",
    "pronunciation": "/mɔːr/ /ðæn; ðən/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "52",
    "sentence": "I like comedy movies more than romance movies",
    "chinese": "我更喜欢喜剧片而不是爱情片",
    "pronunciation": "/aɪ/ /laɪk/ /ˈkɑːmədi/ /ˈmuːviz/ /mɔːr/ /ðæn; ðən/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "53",
    "sentence": "and I don't like science fiction movies",
    "chinese": "而且我不喜欢科幻片",
    "pronunciation": "/ænd; ənd/ /aɪ/ /doʊnt/ /laɪk/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/"
  },
  {
    "id": "54",
    "sentence": "I like comedy movies more than romance movies , and I don't like science fiction movies",
    "chinese": "我喜欢喜剧片胜过爱情片，而且我不像喜欢动作片那样喜欢科幻片",
    "pronunciation": "/aɪ/ /laɪk/ /ˈkɑːmədi/ /ˈmuːviz/ /mɔːr/ /ðæn; ðən/ /roʊˈmæns/ /ˈmuːviz/ /ænd; ənd/ /aɪ/ /doʊnt/ /laɪk/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/"
  },
  {
    "id": "55",
    "sentence": "as much as action movies",
    "chinese": "像喜欢动作片那样",
    "pronunciation": "/æz; əz/ /mʌtʃ/ /æz; əz/ /ˈækʃən/ /ˈmuːviz/"
  },
  {
    "id": "56",
    "sentence": "I like comedy movies more than romance movies , and I don't like science fiction movies as much as action movies",
    "chinese": "比起爱情片，我更喜欢喜剧片，而且我不像喜欢动作片那样喜欢科幻片",
    "pronunciation": "/aɪ/ /laɪk/ /ˈkɑːmədi/ /ˈmuːviz/ /mɔːr/ /ðæn; ðən/ /roʊˈmæns/ /ˈmuːviz/ /ænd; ənd/ /aɪ/ /doʊnt/ /laɪk/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/ /æz; əz/ /mʌtʃ/ /æz; əz/ /ˈækʃən/ /ˈmuːviz/"
  },
  {
    "id": "57",
    "sentence": "I checked the list",
    "chinese": "我查看了列表",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /lɪst/"
  },
  {
    "id": "58",
    "sentence": "of new movies",
    "chinese": "新电影的",
    "pronunciation": "/ʌv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "59",
    "sentence": "I checked the list of new movies",
    "chinese": "我查看了新电影列表",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /lɪst/ /ʌv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "60",
    "sentence": "online",
    "chinese": "在线",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "61",
    "sentence": "I checked the list of new movies online",
    "chinese": "我在线查看了新电影列表",
    "pronunciation": "/aɪ/ /tʃekt/ /ðə/ /lɪst/ /ʌv/ /nuː/ /ˈmuːviz/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "62",
    "sentence": "And there were five new movies",
    "chinese": "并且有五部新电影",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /wɜːr; wər/ /faɪv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "63",
    "sentence": "playing",
    "chinese": "正在上映",
    "pronunciation": "/ˈpleɪɪŋ/"
  },
  {
    "id": "64",
    "sentence": "And there were five new movies playing",
    "chinese": "并且有五部新电影正在上映",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /wɜːr; wər/ /faɪv/ /nuː/ /ˈmuːviz/ /ˈpleɪɪŋ/"
  },
  {
    "id": "65",
    "sentence": "Three of the new movies",
    "chinese": "三部新电影中",
    "pronunciation": "/θriː/ /ʌv/ /ðə/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "66",
    "sentence": "were romance movies",
    "chinese": "是爱情片",
    "pronunciation": "/wɜːr; wər/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "67",
    "sentence": "Three of the new movies were romance movies",
    "chinese": "三部新电影中有三部是爱情片",
    "pronunciation": "/θriː/ /ʌv/ /ðə/ /nuː/ /ˈmuːviz/ /wɜːr; wər/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "68",
    "sentence": "One of the movies",
    "chinese": "其中一部电影",
    "pronunciation": "/wʌn/ /ʌv/ /ðə/ /ˈmuːviz/"
  },
  {
    "id": "69",
    "sentence": "was a science fiction movie",
    "chinese": "是科幻片",
    "pronunciation": "/wʌz; wəz/ /ə; eɪ/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/"
  },
  {
    "id": "70",
    "sentence": "One of the movies was a science fiction movie",
    "chinese": "其中一部电影是科幻片",
    "pronunciation": "/wʌn/ /ʌv/ /ðə/ /ˈmuːviz/ /wʌz; wəz/ /ə; eɪ/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/"
  },
  {
    "id": "71",
    "sentence": "One of the movies",
    "chinese": "其中一部电影",
    "pronunciation": "/wʌn/ /ʌv/ /ðə/ /ˈmuːviz/"
  },
  {
    "id": "72",
    "sentence": "was a comedy",
    "chinese": "是喜剧",
    "pronunciation": "/wʌz; wəz/ /ə; eɪ/ /ˈkɑːmədi/"
  },
  {
    "id": "73",
    "sentence": "One of the movies was a comedy",
    "chinese": "其中一部电影是喜剧",
    "pronunciation": "/wʌn/ /ʌv/ /ðə/ /ˈmuːviz/ /wʌz; wəz/ /ə; eɪ/ /ˈkɑːmədi/"
  },
  {
    "id": "74",
    "sentence": "I thought about",
    "chinese": "我想过",
    "pronunciation": "/aɪ/ /θɔːt/ /əˈbaʊt/"
  },
  {
    "id": "75",
    "sentence": "going to see",
    "chinese": "去看",
    "pronunciation": "/ˈɡoʊɪŋ/ /tuː; tə/ /siː/"
  },
  {
    "id": "76",
    "sentence": "I thought about going to see",
    "chinese": "我想去看",
    "pronunciation": "/aɪ/ /θɔːt/ /əˈbaʊt/ /ˈɡoʊɪŋ/ /tuː; tə/ /siː/"
  },
  {
    "id": "77",
    "sentence": "the new comedy movie",
    "chinese": "那部新的喜剧电影",
    "pronunciation": "/ðə/ /nuː/ /ˈkɑːmədi/ /ˈmuːvi/"
  },
  {
    "id": "78",
    "sentence": "I thought about going to see the new comedy movie",
    "chinese": "我想去看那部新的喜剧电影",
    "pronunciation": "/aɪ/ /θɔːt/ /əˈbaʊt/ /ˈɡoʊɪŋ/ /tuː; tə/ /siː/ /ðə/ /nuː/ /ˈkɑːmədi/ /ˈmuːvi/"
  },
  {
    "id": "79",
    "sentence": "Now let's listen to some questions",
    "chinese": "现在让我们听一些问题",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "80",
    "sentence": "and you can try to answer",
    "chinese": "你可以尝试回答",
    "pronunciation": "/ænd; ənd/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "81",
    "sentence": "Now let's listen to some questions and you can try to answer",
    "chinese": "现在让我们听一些问题，你可以尝试回答",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /sʌm; səm/ /ˈkwestʃənz/ /ænd; ənd/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "82",
    "sentence": "if you want",
    "chinese": "如果你愿意",
    "pronunciation": "/ɪf/ /juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "83",
    "sentence": "Now let's listen to some questions and you can try to answer if you want",
    "chinese": "现在让我们听一些问题，如果你愿意的话可以尝试回答",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /sʌm; səm/ /ˈkwestʃənz/ /ænd; ənd/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/ /ɪf/ /juː; jʊ/ /wɑːnt/"
  },
  {
    "id": "84",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "85",
    "sentence": "Jerry has a day off",
    "chinese": "杰瑞休息一天",
    "pronunciation": "/ˈdʒeri/ /hæz; həz/ /ə; eɪ/ /deɪ/ /ɔːf/"
  },
  {
    "id": "86",
    "sentence": "One : Jerry has a day off",
    "chinese": "杰瑞今天休息",
    "pronunciation": "/wʌn/ /ˈdʒeri/ /hæz; həz/ /ə; eɪ/ /deɪ/ /ɔːf/"
  },
  {
    "id": "87",
    "sentence": "from work",
    "chinese": "从工作中",
    "pronunciation": "/frʌm/ /wɜrk/"
  },
  {
    "id": "88",
    "sentence": "One : Jerry has a day off from work",
    "chinese": "杰瑞今天不上班",
    "pronunciation": "/wʌn/ /ˈdʒeri/ /hæz; həz/ /ə; eɪ/ /deɪ/ /ɔːf/ /frʌm/ /wɜrk/"
  },
  {
    "id": "89",
    "sentence": "Is Jerry working",
    "chinese": "杰瑞今天上班吗？",
    "pronunciation": "/ɪz/ /ˈdʒeri/ /ˈwɜrkɪŋ/"
  },
  {
    "id": "90",
    "sentence": "today",
    "chinese": "今天",
    "pronunciation": "/təˈdeɪ/"
  },
  {
    "id": "91",
    "sentence": "Is Jerry working today ?",
    "chinese": "杰瑞今天上班吗？",
    "pronunciation": "/ɪz/ /ˈdʒeri/ /ˈwɜrkɪŋ/ /təˈdeɪ/"
  },
  {
    "id": "92",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "93",
    "sentence": "Jerry is not working",
    "chinese": "杰瑞没有在工作",
    "pronunciation": "/ˈdʒeri/ /ɪz/ /nɑːt/ /ˈwɜrkɪŋ/"
  },
  {
    "id": "94",
    "sentence": "No , Jerry is not working",
    "chinese": "不，杰瑞没有在工作",
    "pronunciation": "/noʊ/ /ˈdʒeri/ /ɪz/ /nɑːt/ /ˈwɜrkɪŋ/"
  },
  {
    "id": "95",
    "sentence": "He has a day off",
    "chinese": "他休息一天",
    "pronunciation": "/hiː/ /hæz; həz/ /ə; eɪ/ /deɪ/ /ɔːf/"
  },
  {
    "id": "96",
    "sentence": "from work",
    "chinese": "从工作中",
    "pronunciation": "/frʌm/ /wɜrk/"
  },
  {
    "id": "97",
    "sentence": "He has a day off from work",
    "chinese": "他今天不上班",
    "pronunciation": "/hiː/ /hæz; həz/ /ə; eɪ/ /deɪ/ /ɔːf/ /frʌm/ /wɜrk/"
  },
  {
    "id": "98",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "99",
    "sentence": "Jerry wants to go",
    "chinese": "杰瑞想去",
    "pronunciation": "/ˈdʒeri/ /ˈwɒnts/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "100",
    "sentence": "Two : Jerry wants to go",
    "chinese": "杰瑞想去看",
    "pronunciation": "/tuː/ /ˈdʒeri/ /ˈwɒnts/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "101",
    "sentence": "see a movie",
    "chinese": "看电影",
    "pronunciation": "/siː/ /ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "102",
    "sentence": "Two : Jerry wants to go see a movie",
    "chinese": "杰瑞想去看电影",
    "pronunciation": "/tuː/ /ˈdʒeri/ /ˈwɒnts/ /tuː; tə/ /ɡoʊ/ /siː/ /ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "103",
    "sentence": "What does Jerry want",
    "chinese": "杰瑞想要什么",
    "pronunciation": "/wʌt/ /dʌz/ /ˈdʒeri/ /wɑːnt/"
  },
  {
    "id": "104",
    "sentence": "to go see",
    "chinese": "去看",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /siː/"
  },
  {
    "id": "105",
    "sentence": "What does Jerry want to go see ?",
    "chinese": "杰瑞想去哪里看看？",
    "pronunciation": "/wʌt/ /dʌz/ /ˈdʒeri/ /wɑːnt/ /tuː; tə/ /ɡoʊ/ /siː/"
  },
  {
    "id": "106",
    "sentence": "He wants to go",
    "chinese": "他想",
    "pronunciation": "/hiː/ /ˈwɒnts/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "107",
    "sentence": "see a movie",
    "chinese": "看电影",
    "pronunciation": "/siː/ /ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "108",
    "sentence": "He wants to go see a movie",
    "chinese": "他想去看电影",
    "pronunciation": "/hiː/ /ˈwɒnts/ /tuː; tə/ /ɡoʊ/ /siː/ /ə; eɪ/ /ˈmuːvi/"
  },
  {
    "id": "109",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "110",
    "sentence": "Jerry doesn't like romance movies",
    "chinese": "杰瑞不喜欢爱情片",
    "pronunciation": "/ˈdʒeri/ /ˈdʌznt/ /laɪk/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "111",
    "sentence": "Three : Jerry doesn't like romance movies",
    "chinese": "三：杰瑞不喜欢爱情片",
    "pronunciation": "/θriː/ /ˈdʒeri/ /ˈdʌznt/ /laɪk/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "112",
    "sentence": "or science fiction movies",
    "chinese": "或科幻片",
    "pronunciation": "/ɔr/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/"
  },
  {
    "id": "113",
    "sentence": "Three : Jerry doesn't like romance movies , or science fiction movies",
    "chinese": "三：杰瑞不喜欢爱情片，也不喜欢科幻片",
    "pronunciation": "/θriː/ /ˈdʒeri/ /ˈdʌznt/ /laɪk/ /roʊˈmæns/ /ˈmuːviz/ /ɔr/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/"
  },
  {
    "id": "114",
    "sentence": "Does Jerry like",
    "chinese": "杰瑞喜欢吗？",
    "pronunciation": "/dʌz/ /ˈdʒeri/ /laɪk/"
  },
  {
    "id": "115",
    "sentence": "romance movies",
    "chinese": "爱情电影",
    "pronunciation": "/roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "116",
    "sentence": "Does Jerry like romance movies ?",
    "chinese": "杰瑞喜欢爱情电影吗？",
    "pronunciation": "/dʌz/ /ˈdʒeri/ /laɪk/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "117",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "118",
    "sentence": "Jerry doesn't like romance movies",
    "chinese": "杰瑞不喜欢爱情片",
    "pronunciation": "/ˈdʒeri/ /ˈdʌznt/ /laɪk/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "119",
    "sentence": "No , Jerry doesn't like romance movies",
    "chinese": "不，杰瑞不喜欢爱情片",
    "pronunciation": "/noʊ/ /ˈdʒeri/ /ˈdʌznt/ /laɪk/ /roʊˈmæns/ /ˈmuːviz/"
  },
  {
    "id": "120",
    "sentence": "or science fiction movies",
    "chinese": "或科幻片",
    "pronunciation": "/ɔr/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/"
  },
  {
    "id": "121",
    "sentence": "No , Jerry doesn't like romance movies , or science fiction movies",
    "chinese": "不，杰瑞不喜欢爱情片，也不喜欢科幻片",
    "pronunciation": "/noʊ/ /ˈdʒeri/ /ˈdʌznt/ /laɪk/ /roʊˈmæns/ /ˈmuːviz/ /ɔr/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/"
  },
  {
    "id": "122",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "123",
    "sentence": "Jerry likes comedy",
    "chinese": "杰瑞喜欢喜剧",
    "pronunciation": "/ˈdʒeri/ /laɪks/ /ˈkɑːmədi/"
  },
  {
    "id": "124",
    "sentence": "Four : Jerry likes comedy",
    "chinese": "四：杰瑞喜欢喜剧",
    "pronunciation": "/fɔr/ /ˈdʒeri/ /laɪks/ /ˈkɑːmədi/"
  },
  {
    "id": "125",
    "sentence": "and action movies",
    "chinese": "和动作电影",
    "pronunciation": "/ænd; ənd/ /ˈækʃən/ /ˈmuːviz/"
  },
  {
    "id": "126",
    "sentence": "Four : Jerry likes comedy and action movies",
    "chinese": "四：杰瑞喜欢喜剧和动作电影",
    "pronunciation": "/fɔr/ /ˈdʒeri/ /laɪks/ /ˈkɑːmədi/ /ænd; ənd/ /ˈækʃən/ /ˈmuːviz/"
  },
  {
    "id": "127",
    "sentence": "What movies",
    "chinese": "什么电影",
    "pronunciation": "/wʌt/ /ˈmuːviz/"
  },
  {
    "id": "128",
    "sentence": "does Jerry like",
    "chinese": "杰瑞喜欢吗？",
    "pronunciation": "/dʌz/ /ˈdʒeri/ /laɪk/"
  },
  {
    "id": "129",
    "sentence": "What movies does Jerry like ?",
    "chinese": "杰瑞喜欢什么电影？",
    "pronunciation": "/wʌt/ /ˈmuːviz/ /dʌz/ /ˈdʒeri/ /laɪk/"
  },
  {
    "id": "130",
    "sentence": "He likes",
    "chinese": "他喜欢",
    "pronunciation": "/hiː/ /laɪks/"
  },
  {
    "id": "131",
    "sentence": "comedy",
    "chinese": "喜剧",
    "pronunciation": "/ˈkɑːmədi/"
  },
  {
    "id": "132",
    "sentence": "He likes comedy",
    "chinese": "他喜欢喜剧",
    "pronunciation": "/hiː/ /laɪks/ /ˈkɑːmədi/"
  },
  {
    "id": "133",
    "sentence": "and",
    "chinese": "和",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "134",
    "sentence": "He likes comedy and",
    "chinese": "他喜欢喜剧和",
    "pronunciation": "/hiː/ /laɪks/ /ˈkɑːmədi/ /ænd; ənd/"
  },
  {
    "id": "135",
    "sentence": "action movies",
    "chinese": "动作电影",
    "pronunciation": "/ˈækʃən/ /ˈmuːviz/"
  },
  {
    "id": "136",
    "sentence": "He likes comedy and action movies",
    "chinese": "他喜欢喜剧和动作电影",
    "pronunciation": "/hiː/ /laɪks/ /ˈkɑːmədi/ /ænd; ənd/ /ˈækʃən/ /ˈmuːviz/"
  },
  {
    "id": "137",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "138",
    "sentence": "Jerry checked the list",
    "chinese": "杰瑞查看了列表",
    "pronunciation": "/ˈdʒeri/ /tʃekt/ /ðə/ /lɪst/"
  },
  {
    "id": "139",
    "sentence": "Five : Jerry checked the list",
    "chinese": "杰瑞查看了列表",
    "pronunciation": "/faɪv/ /ˈdʒeri/ /tʃekt/ /ðə/ /lɪst/"
  },
  {
    "id": "140",
    "sentence": "of new movies",
    "chinese": "新电影的",
    "pronunciation": "/ʌv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "141",
    "sentence": "Five : Jerry checked the list of new movies",
    "chinese": "杰瑞查看了新电影的列表",
    "pronunciation": "/faɪv/ /ˈdʒeri/ /tʃekt/ /ðə/ /lɪst/ /ʌv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "142",
    "sentence": "online",
    "chinese": "在线",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "143",
    "sentence": "Five : Jerry checked the list of new movies online",
    "chinese": "杰瑞在网上查看了新电影的列表",
    "pronunciation": "/faɪv/ /ˈdʒeri/ /tʃekt/ /ðə/ /lɪst/ /ʌv/ /nuː/ /ˈmuːviz/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "144",
    "sentence": "What list",
    "chinese": "哪个列表",
    "pronunciation": "/wʌt/ /lɪst/"
  },
  {
    "id": "145",
    "sentence": "did Jerry check",
    "chinese": "杰瑞查看了吗？",
    "pronunciation": "/dɪd/ /ˈdʒeri/ /tʃek/"
  },
  {
    "id": "146",
    "sentence": "What list did Jerry check ?",
    "chinese": "杰瑞查看了哪个列表？",
    "pronunciation": "/wʌt/ /lɪst/ /dɪd/ /ˈdʒeri/ /tʃek/"
  },
  {
    "id": "147",
    "sentence": "Jerry checked the list",
    "chinese": "杰瑞查看了列表",
    "pronunciation": "/ˈdʒeri/ /tʃekt/ /ðə/ /lɪst/"
  },
  {
    "id": "148",
    "sentence": "of new movies",
    "chinese": "新电影的",
    "pronunciation": "/ʌv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "149",
    "sentence": "Jerry checked the list of new movies",
    "chinese": "杰瑞查看了新电影的列表",
    "pronunciation": "/ˈdʒeri/ /tʃekt/ /ðə/ /lɪst/ /ʌv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "150",
    "sentence": "online",
    "chinese": "在网上",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "151",
    "sentence": "Jerry checked the list of new movies online",
    "chinese": "杰瑞在网上查看了新电影的列表",
    "pronunciation": "/ˈdʒeri/ /tʃekt/ /ðə/ /lɪst/ /ʌv/ /nuː/ /ˈmuːviz/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "152",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "153",
    "sentence": "There were five new movies",
    "chinese": "有五部新电影",
    "pronunciation": "/ðer; ðər/ /wɜːr; wər/ /faɪv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "154",
    "sentence": "Six : There were five new movies",
    "chinese": "六：有五部新电影",
    "pronunciation": "/sɪks/ /ðer; ðər/ /wɜːr; wər/ /faɪv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "155",
    "sentence": "playing",
    "chinese": "上映",
    "pronunciation": "/ˈpleɪɪŋ/"
  },
  {
    "id": "156",
    "sentence": "Six : There were five new movies playing",
    "chinese": "六：有五部新电影在上映",
    "pronunciation": "/sɪks/ /ðer; ðər/ /wɜːr; wər/ /faɪv/ /nuː/ /ˈmuːviz/ /ˈpleɪɪŋ/"
  },
  {
    "id": "157",
    "sentence": "Were there five new movies",
    "chinese": "有五部新电影在上映吗？",
    "pronunciation": "/wɜːr; wər/ /ðer; ðər/ /faɪv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "158",
    "sentence": "playing",
    "chinese": "在上映",
    "pronunciation": "/ˈpleɪɪŋ/"
  },
  {
    "id": "159",
    "sentence": "Were there five new movies playing ?",
    "chinese": "有五部新电影在上映吗？",
    "pronunciation": "/wɜːr; wər/ /ðer; ðər/ /faɪv/ /nuː/ /ˈmuːviz/ /ˈpleɪɪŋ/"
  },
  {
    "id": "160",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "161",
    "sentence": "there were five new movies",
    "chinese": "有五部新电影",
    "pronunciation": "/ðer; ðər/ /wɜːr; wər/ /faɪv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "162",
    "sentence": "Yes , there were five new movies",
    "chinese": "是的，有五部新电影",
    "pronunciation": "/jes/ /ðer; ðər/ /wɜːr; wər/ /faɪv/ /nuː/ /ˈmuːviz/"
  },
  {
    "id": "163",
    "sentence": "playing",
    "chinese": "上映",
    "pronunciation": "/ˈpleɪɪŋ/"
  },
  {
    "id": "164",
    "sentence": "Yes , there were five new movies playing",
    "chinese": "是的，有五部新电影在上映",
    "pronunciation": "/jes/ /ðer; ðər/ /wɜːr; wər/ /faɪv/ /nuː/ /ˈmuːviz/ /ˈpleɪɪŋ/"
  },
  {
    "id": "165",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "166",
    "sentence": "There was one science fiction movie",
    "chinese": "有一部科幻电影正在放映",
    "pronunciation": "/ðer; ðər/ /wʌz; wəz/ /wʌn/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/"
  },
  {
    "id": "167",
    "sentence": "Seven : There was one science fiction movie",
    "chinese": "七：当时正在放映一部科幻电影",
    "pronunciation": "/ˈsev(ə)n/ /ðer; ðər/ /wʌz; wəz/ /wʌn/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/"
  },
  {
    "id": "168",
    "sentence": "playing",
    "chinese": "正在放映",
    "pronunciation": "/ˈpleɪɪŋ/"
  },
  {
    "id": "169",
    "sentence": "Seven : There was one science fiction movie playing",
    "chinese": "七：当时正在放映一部科幻电影",
    "pronunciation": "/ˈsev(ə)n/ /ðer; ðər/ /wʌz; wəz/ /wʌn/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/ /ˈpleɪɪŋ/"
  },
  {
    "id": "170",
    "sentence": "Were there any science fiction movies",
    "chinese": "有科幻电影吗？",
    "pronunciation": "/wɜːr; wər/ /ðer; ðər/ /ˈeni/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/"
  },
  {
    "id": "171",
    "sentence": "playing",
    "chinese": "播放",
    "pronunciation": "/ˈpleɪɪŋ/"
  },
  {
    "id": "172",
    "sentence": "Were there any science fiction movies playing ?",
    "chinese": "有播放科幻电影吗？",
    "pronunciation": "/wɜːr; wər/ /ðer; ðər/ /ˈeni/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːviz/ /ˈpleɪɪŋ/"
  },
  {
    "id": "173",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "174",
    "sentence": "there was one science fiction movie",
    "chinese": "有一部科幻电影",
    "pronunciation": "/ðer; ðər/ /wʌz; wəz/ /wʌn/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/"
  },
  {
    "id": "175",
    "sentence": "Yes , there was one science fiction movie",
    "chinese": "是的，有一部科幻电影",
    "pronunciation": "/jes/ /ðer; ðər/ /wʌz; wəz/ /wʌn/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/"
  },
  {
    "id": "176",
    "sentence": "playing",
    "chinese": "在上映",
    "pronunciation": "/ˈpleɪɪŋ/"
  },
  {
    "id": "177",
    "sentence": "Yes , there was one science fiction movie playing",
    "chinese": "是的，有一部科幻电影在上映",
    "pronunciation": "/jes/ /ðer; ðər/ /wʌz; wəz/ /wʌn/ /ˈsaɪəns/ /ˈfɪkʃən/ /ˈmuːvi/ /ˈpleɪɪŋ/"
  },
  {
    "id": "178",
    "sentence": "Eight :",
    "chinese": "八：",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "179",
    "sentence": "Jerry decided to see",
    "chinese": "杰瑞决定去看",
    "pronunciation": "/ˈdʒeri/ /dɪˈsaɪdɪd/ /tuː; tə/ /siː/"
  },
  {
    "id": "180",
    "sentence": "Eight : Jerry decided to see",
    "chinese": "八：杰瑞决定去看",
    "pronunciation": "/eɪt/ /ˈdʒeri/ /dɪˈsaɪdɪd/ /tuː; tə/ /siː/"
  },
  {
    "id": "181",
    "sentence": "the new comedy movie",
    "chinese": "那部新的喜剧电影",
    "pronunciation": "/ðə/ /nuː/ /ˈkɑːmədi/ /ˈmuːvi/"
  },
  {
    "id": "182",
    "sentence": "Eight : Jerry decided to see the new comedy movie",
    "chinese": "八：杰瑞决定去看那部新的喜剧电影",
    "pronunciation": "/eɪt/ /ˈdʒeri/ /dɪˈsaɪdɪd/ /tuː; tə/ /siː/ /ðə/ /nuː/ /ˈkɑːmədi/ /ˈmuːvi/"
  },
  {
    "id": "183",
    "sentence": "What movie",
    "chinese": "什么电影",
    "pronunciation": "/wʌt/ /ˈmuːvi/"
  },
  {
    "id": "184",
    "sentence": "did Jerry decide",
    "chinese": "杰瑞决定",
    "pronunciation": "/dɪd/ /ˈdʒeri/ /dɪˈsaɪd/"
  },
  {
    "id": "185",
    "sentence": "What movie did Jerry decide",
    "chinese": "杰瑞决定看什么电影",
    "pronunciation": "/wʌt/ /ˈmuːvi/ /dɪd/ /ˈdʒeri/ /dɪˈsaɪd/"
  },
  {
    "id": "186",
    "sentence": "to see",
    "chinese": "看",
    "pronunciation": "/tuː; tə/ /siː/"
  },
  {
    "id": "187",
    "sentence": "What movie did Jerry decide to see ?",
    "chinese": "杰瑞决定看什么电影？",
    "pronunciation": "/wʌt/ /ˈmuːvi/ /dɪd/ /ˈdʒeri/ /dɪˈsaɪd/ /tuː; tə/ /siː/"
  },
  {
    "id": "188",
    "sentence": "He decided",
    "chinese": "他决定",
    "pronunciation": "/hiː/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "189",
    "sentence": "to see the new comedy movie",
    "chinese": "去看那部新的喜剧电影",
    "pronunciation": "/tuː; tə/ /siː/ /ðə/ /nuː/ /ˈkɑːmədi/ /ˈmuːvi/"
  },
  {
    "id": "190",
    "sentence": "He decided to see the new comedy movie",
    "chinese": "他决定去看那部新的喜剧电影",
    "pronunciation": "/hiː/ /dɪˈsaɪdɪd/ /tuː; tə/ /siː/ /ðə/ /nuː/ /ˈkɑːmədi/ /ˈmuːvi/"
  },
  {
    "id": "191",
    "sentence": "And there you have it",
    "chinese": "这就是",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /juː; jʊ/ /hæv/ /ɪt/"
  },
  {
    "id": "192",
    "sentence": "the story about Jerry",
    "chinese": "关于杰瑞的故事",
    "pronunciation": "/ðə/ /ˈstɔːri/ /əˈbaʊt/ /ˈdʒeri/"
  },
  {
    "id": "193",
    "sentence": "And there you have it , the story about Jerry",
    "chinese": "这就是关于杰瑞的故事",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /juː; jʊ/ /hæv/ /ɪt/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /ˈdʒeri/"
  },
  {
    "id": "194",
    "sentence": "and his day off from work",
    "chinese": "和他的工作日休息",
    "pronunciation": "/ænd; ənd/ /hɪz; ɪz/ /deɪ/ /ɔːf/ /frʌm/ /wɜrk/"
  },
  {
    "id": "195",
    "sentence": "And there you have it , the story about Jerry and his day off from work",
    "chinese": "这就是关于杰瑞和他工作日休息的故事",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /juː; jʊ/ /hæv/ /ɪt/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /ˈdʒeri/ /ænd; ənd/ /hɪz; ɪz/ /deɪ/ /ɔːf/ /frʌm/ /wɜrk/"
  },
];
