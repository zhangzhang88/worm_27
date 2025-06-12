export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "This story is about a woman",
    "chinese": "这个故事是关于一个女人",
    "pronunciation": "/ðɪs/ /ˈstɔːri/ /ɪz/ /əˈbaʊt/ /ə; eɪ/ /ˈwʊmən/"
  },
  {
    "id": "2",
    "sentence": "called Emma",
    "chinese": "名叫艾玛",
    "pronunciation": "/kɔːld/ /ˈemə/"
  },
  {
    "id": "3",
    "sentence": "This story is about a woman called Emma",
    "chinese": "这个故事是关于一个名叫艾玛的女人",
    "pronunciation": "/ðɪs/ /ˈstɔːri/ /ɪz/ /əˈbaʊt/ /ə; eɪ/ /ˈwʊmən/ /kɔːld/ /ˈemə/"
  },
  {
    "id": "4",
    "sentence": "who is not well",
    "chinese": "她身体不太好",
    "pronunciation": "/huː/ /ɪz/ /nɑːt/ /wel/"
  },
  {
    "id": "5",
    "sentence": "This story is about a woman called Emma who is not well",
    "chinese": "这个故事是关于一个名叫艾玛的女人，她身体不太好",
    "pronunciation": "/ðɪs/ /ˈstɔːri/ /ɪz/ /əˈbaʊt/ /ə; eɪ/ /ˈwʊmən/ /kɔːld/ /ˈemə/ /huː/ /ɪz/ /nɑːt/ /wel/"
  },
  {
    "id": "6",
    "sentence": "Emma isn't feeling",
    "chinese": "艾玛感觉",
    "pronunciation": "/ˈemə/ /ˈɪznt/ /ˈfiːlɪŋ/"
  },
  {
    "id": "7",
    "sentence": "very well",
    "chinese": "很好",
    "pronunciation": "/ˈveri/ /wel/"
  },
  {
    "id": "8",
    "sentence": "Emma isn't feeling very well",
    "chinese": "艾玛感觉不太好",
    "pronunciation": "/ˈemə/ /ˈɪznt/ /ˈfiːlɪŋ/ /ˈveri/ /wel/"
  },
  {
    "id": "9",
    "sentence": "She has a headache",
    "chinese": "她头痛",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /ˈhedeɪk/"
  },
  {
    "id": "10",
    "sentence": "and a sore throat",
    "chinese": "并且喉咙痛",
    "pronunciation": "/ænd; ənd/ /ə; eɪ/ /sɔːr/ /θroʊt/"
  },
  {
    "id": "11",
    "sentence": "She has a headache and a sore throat",
    "chinese": "她头痛并且喉咙痛",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /ˈhedeɪk/ /ænd; ənd/ /ə; eɪ/ /sɔːr/ /θroʊt/"
  },
  {
    "id": "12",
    "sentence": "She is also sneezing",
    "chinese": "她也在打喷嚏",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈɔːlsoʊ/ /ˈsniːzɪŋ/"
  },
  {
    "id": "13",
    "sentence": "a lot",
    "chinese": "很多",
    "pronunciation": "/ə; eɪ/ /lɑːt/"
  },
  {
    "id": "14",
    "sentence": "She is also sneezing a lot",
    "chinese": "她也在不停地打喷嚏",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈɔːlsoʊ/ /ˈsniːzɪŋ/ /ə; eɪ/ /lɑːt/"
  },
  {
    "id": "15",
    "sentence": "She decides",
    "chinese": "她决定",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdz/"
  },
  {
    "id": "16",
    "sentence": "to go to the doctor",
    "chinese": "去看医生",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /tuː; tə/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "17",
    "sentence": "She decides to go to the doctor",
    "chinese": "她决定去看医生",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdz/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "18",
    "sentence": "She tells the doctor",
    "chinese": "她告诉医生",
    "pronunciation": "/ʃiː; ʃi/ /telz/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "19",
    "sentence": "how she feels",
    "chinese": "她感觉如何？",
    "pronunciation": "/haʊ/ /ʃiː; ʃi/ /fiːlz/"
  },
  {
    "id": "20",
    "sentence": "She tells the doctor how she feels",
    "chinese": "她告诉医生她的感受",
    "pronunciation": "/ʃiː; ʃi/ /telz/ /ðə/ /ˈdɑːktər/ /haʊ/ /ʃiː; ʃi/ /fiːlz/"
  },
  {
    "id": "21",
    "sentence": "The doctor tells Emma",
    "chinese": "医生告诉艾玛",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /telz/ /ˈemə/"
  },
  {
    "id": "22",
    "sentence": "she has a cold",
    "chinese": "她感冒了",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "23",
    "sentence": "The doctor tells Emma she has a cold",
    "chinese": "医生告诉艾玛她感冒了",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /telz/ /ˈemə/ /ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "24",
    "sentence": "Emma asks the doctor",
    "chinese": "艾玛问医生",
    "pronunciation": "/ˈemə/ /æsks/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "25",
    "sentence": "for some medicine",
    "chinese": "要一些药",
    "pronunciation": "/fɔːr; fər/ /sʌm; səm/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "26",
    "sentence": "Emma asks the doctor for some medicine",
    "chinese": "艾玛向医生要了一些药",
    "pronunciation": "/ˈemə/ /æsks/ /ðə/ /ˈdɑːktər/ /fɔːr; fər/ /sʌm; səm/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "27",
    "sentence": "The doctor says",
    "chinese": "医生说",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /sez/"
  },
  {
    "id": "28",
    "sentence": "Emma doesn't need medicine",
    "chinese": "艾玛不需要吃药",
    "pronunciation": "/ˈemə/ /ˈdʌznt/ /niːd/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "29",
    "sentence": "The doctor says Emma doesn't need medicine",
    "chinese": "医生说艾玛不需要药",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /sez/ /ˈemə/ /ˈdʌznt/ /niːd/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "30",
    "sentence": "for a cold",
    "chinese": "治感冒",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "31",
    "sentence": "The doctor says Emma doesn't need medicine for a cold",
    "chinese": "医生说艾玛不需要吃药来治感冒",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /sez/ /ˈemə/ /ˈdʌznt/ /niːd/ /ˈmedɪs(ə)n/ /fɔːr; fər/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "32",
    "sentence": "The doctor tells Emma",
    "chinese": "医生告诉艾玛",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /telz/ /ˈemə/"
  },
  {
    "id": "33",
    "sentence": "to sleep",
    "chinese": "睡觉",
    "pronunciation": "/tuː; tə/ /sliːp/"
  },
  {
    "id": "34",
    "sentence": "The doctor tells Emma to sleep",
    "chinese": "医生告诉艾玛要睡觉",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /telz/ /ˈemə/ /tuː; tə/ /sliːp/"
  },
  {
    "id": "35",
    "sentence": "and drink water",
    "chinese": "并多喝水",
    "pronunciation": "/ænd; ənd/ /drɪŋk/ /ˈwɔːtər/"
  },
  {
    "id": "36",
    "sentence": "The doctor tells Emma to sleep and drink water",
    "chinese": "医生告诉艾玛要睡觉并多喝水",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /telz/ /ˈemə/ /tuː; tə/ /sliːp/ /ænd; ənd/ /drɪŋk/ /ˈwɔːtər/"
  },
  {
    "id": "37",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "38",
    "sentence": "The doctor tells Emma to sleep and drink water instead",
    "chinese": "医生告诉艾玛要睡觉并多喝水",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /telz/ /ˈemə/ /tuː; tə/ /sliːp/ /ænd; ənd/ /drɪŋk/ /ˈwɔːtər/ /ɪnˈsted/"
  },
  {
    "id": "39",
    "sentence": "Emma isn't feeling better",
    "chinese": "艾玛感觉并没有好转",
    "pronunciation": "/ˈemə/ /ˈɪznt/ /ˈfiːlɪŋ/ /ˈbetər/"
  },
  {
    "id": "40",
    "sentence": "when she leaves the doctor",
    "chinese": "当她离开医生时",
    "pronunciation": "/wen/ /ʃiː; ʃi/ /liːvz/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "41",
    "sentence": "Emma isn't feeling better when she leaves the doctor",
    "chinese": "艾玛离开医生时感觉并没有好转",
    "pronunciation": "/ˈemə/ /ˈɪznt/ /ˈfiːlɪŋ/ /ˈbetər/ /wen/ /ʃiː; ʃi/ /liːvz/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "42",
    "sentence": "Now Emma tells the story",
    "chinese": "现在，艾玛讲述这个故事",
    "pronunciation": "/naʊ/ /ˈemə/ /telz/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "43",
    "sentence": "I didn't feel very well",
    "chinese": "我感觉不太好",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /fil/ /ˈveri/ /wel/"
  },
  {
    "id": "44",
    "sentence": "I had a headache",
    "chinese": "我头痛",
    "pronunciation": "/aɪ/ /hæd/ /ə; eɪ/ /ˈhedeɪk/"
  },
  {
    "id": "45",
    "sentence": "I didn't feel very well . I had a headache",
    "chinese": "我感觉不太好我头痛",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /fil/ /ˈveri/ /wel/ /aɪ/ /hæd/ /ə; eɪ/ /ˈhedeɪk/"
  },
  {
    "id": "46",
    "sentence": "and a sore throat",
    "chinese": "喉咙也痛",
    "pronunciation": "/ænd; ənd/ /ə; eɪ/ /sɔːr/ /θroʊt/"
  },
  {
    "id": "47",
    "sentence": "I didn't feel very well . I had a headache and a sore throat",
    "chinese": "我感觉不太好我头痛，喉咙也痛。",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /fil/ /ˈveri/ /wel/ /aɪ/ /hæd/ /ə; eɪ/ /ˈhedeɪk/ /ænd; ənd/ /ə; eɪ/ /sɔːr/ /θroʊt/"
  },
  {
    "id": "48",
    "sentence": "I was also sneezing",
    "chinese": "我也一直在打喷嚏",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈɔːlsoʊ/ /ˈsniːzɪŋ/"
  },
  {
    "id": "49",
    "sentence": "a lot",
    "chinese": "很多",
    "pronunciation": "/ə; eɪ/ /lɑːt/"
  },
  {
    "id": "50",
    "sentence": "I was also sneezing a lot",
    "chinese": "我也一直在打喷嚏",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈɔːlsoʊ/ /ˈsniːzɪŋ/ /ə; eɪ/ /lɑːt/"
  },
  {
    "id": "51",
    "sentence": "I decided",
    "chinese": "我决定",
    "pronunciation": "/aɪ/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "52",
    "sentence": "to go to the doctor",
    "chinese": "去看医生",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /tuː; tə/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "53",
    "sentence": "I decided to go to the doctor",
    "chinese": "我决定去看医生",
    "pronunciation": "/aɪ/ /dɪˈsaɪdɪd/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "54",
    "sentence": "I told the doctor",
    "chinese": "我告诉医生",
    "pronunciation": "/aɪ/ /toʊld/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "55",
    "sentence": "how I felt",
    "chinese": "我的感受如何",
    "pronunciation": "/haʊ/ /aɪ/ /felt/"
  },
  {
    "id": "56",
    "sentence": "I told the doctor how I felt",
    "chinese": "我告诉医生我的感受",
    "pronunciation": "/aɪ/ /toʊld/ /ðə/ /ˈdɑːktər/ /haʊ/ /aɪ/ /felt/"
  },
  {
    "id": "57",
    "sentence": "The doctor told me",
    "chinese": "医生告诉我",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /miː/"
  },
  {
    "id": "58",
    "sentence": "I had a cold",
    "chinese": "我感冒了",
    "pronunciation": "/aɪ/ /hæd/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "59",
    "sentence": "The doctor told me I had a cold",
    "chinese": "医生告诉我我感冒了",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /miː/ /aɪ/ /hæd/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "60",
    "sentence": "I asked the doctor",
    "chinese": "我向医生要",
    "pronunciation": "/aɪ/ /æskt/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "61",
    "sentence": "for some medicine",
    "chinese": "要一些药",
    "pronunciation": "/fɔːr; fər/ /sʌm; səm/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "62",
    "sentence": "I asked the doctor for some medicine",
    "chinese": "我向医生要了一些药",
    "pronunciation": "/aɪ/ /æskt/ /ðə/ /ˈdɑːktər/ /fɔːr; fər/ /sʌm; səm/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "63",
    "sentence": "The doctor said",
    "chinese": "医生说",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /sed/"
  },
  {
    "id": "64",
    "sentence": "I didn't need medicine",
    "chinese": "我不需要药",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "65",
    "sentence": "The doctor said I didn't need medicine",
    "chinese": "医生说我感冒不需要吃药",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /sed/ /aɪ/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "66",
    "sentence": "for a cold",
    "chinese": "因为感冒",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "67",
    "sentence": "The doctor said I didn't need medicine for a cold",
    "chinese": "医生说我感冒不需要吃药",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /sed/ /aɪ/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/ /fɔːr; fər/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "68",
    "sentence": "The doctor told me",
    "chinese": "医生告诉我",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /miː/"
  },
  {
    "id": "69",
    "sentence": "to sleep",
    "chinese": "睡觉",
    "pronunciation": "/tuː; tə/ /sliːp/"
  },
  {
    "id": "70",
    "sentence": "The doctor told me to sleep",
    "chinese": "医生告诉我应该睡觉",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /miː/ /tuː; tə/ /sliːp/"
  },
  {
    "id": "71",
    "sentence": "and drink water",
    "chinese": "多喝水",
    "pronunciation": "/ænd; ənd/ /drɪŋk/ /ˈwɔːtər/"
  },
  {
    "id": "72",
    "sentence": "The doctor told me to sleep and drink water",
    "chinese": "医生告诉我应该睡觉和多喝水",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /miː/ /tuː; tə/ /sliːp/ /ænd; ənd/ /drɪŋk/ /ˈwɔːtər/"
  },
  {
    "id": "73",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "74",
    "sentence": "The doctor told me to sleep and drink water instead",
    "chinese": "医生告诉我应该睡觉和多喝水",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /miː/ /tuː; tə/ /sliːp/ /ænd; ənd/ /drɪŋk/ /ˈwɔːtər/ /ɪnˈsted/"
  },
  {
    "id": "75",
    "sentence": "I didn't feel better",
    "chinese": "我感觉并没有好转",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /fil/ /ˈbetər/"
  },
  {
    "id": "76",
    "sentence": "when I left the doctor",
    "chinese": "当我离开医生时",
    "pronunciation": "/wen/ /aɪ/ /left/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "77",
    "sentence": "I didn't feel better when I left the doctor",
    "chinese": "离开医生后，我感觉并没有好转",
    "pronunciation": "/aɪ/ /ˈdɪd(ə)nt/ /fil/ /ˈbetər/ /wen/ /aɪ/ /left/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "78",
    "sentence": "I will ask some questions",
    "chinese": "我会问一些问题",
    "pronunciation": "/aɪ/ /wɪl/ /æsk/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "79",
    "sentence": "next",
    "chinese": "接下来",
    "pronunciation": "/nekst/"
  },
  {
    "id": "80",
    "sentence": "I will ask some questions next",
    "chinese": "接下来我会问一些问题",
    "pronunciation": "/aɪ/ /wɪl/ /æsk/ /sʌm; səm/ /ˈkwestʃənz/ /nekst/"
  },
  {
    "id": "81",
    "sentence": "You can answer out loud",
    "chinese": "你可以大声回答",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈænsər/ /aʊt/ /laʊd/"
  },
  {
    "id": "82",
    "sentence": "with me",
    "chinese": "和我一起",
    "pronunciation": "/wɪð; wɪθ/ /miː/"
  },
  {
    "id": "83",
    "sentence": "You can answer out loud with me",
    "chinese": "你可以大声和我一起回答",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈænsər/ /aʊt/ /laʊd/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "84",
    "sentence": "or just listen",
    "chinese": "或者只是听",
    "pronunciation": "/ɔr/ /dʒʌst/ /ˈlɪs(ə)n/"
  },
  {
    "id": "85",
    "sentence": "You can answer out loud with me , or just listen",
    "chinese": "你可以大声和我一起回答，或者只是听",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈænsər/ /aʊt/ /laʊd/ /wɪð; wɪθ/ /miː/ /ɔr/ /dʒʌst/ /ˈlɪs(ə)n/"
  },
  {
    "id": "86",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "87",
    "sentence": "Emma isn't feeling well",
    "chinese": "艾玛感觉不太舒服",
    "pronunciation": "/ˈemə/ /ˈɪznt/ /ˈfiːlɪŋ/ /wel/"
  },
  {
    "id": "88",
    "sentence": "One : Emma isn't feeling well",
    "chinese": "艾玛感觉不太舒服",
    "pronunciation": "/wʌn/ /ˈemə/ /ˈɪznt/ /ˈfiːlɪŋ/ /wel/"
  },
  {
    "id": "89",
    "sentence": "Is Emma feeling well",
    "chinese": "艾玛感觉还好吗？",
    "pronunciation": "/ɪz/ /ˈemə/ /ˈfiːlɪŋ/ /wel/"
  },
  {
    "id": "90",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "91",
    "sentence": "she isn't feeling well",
    "chinese": "她感觉不太好",
    "pronunciation": "/ʃiː; ʃi/ /ˈɪznt/ /ˈfiːlɪŋ/ /wel/"
  },
  {
    "id": "92",
    "sentence": "No , she isn't feeling well",
    "chinese": "不，她感觉不太好",
    "pronunciation": "/noʊ/ /ʃiː; ʃi/ /ˈɪznt/ /ˈfiːlɪŋ/ /wel/"
  },
  {
    "id": "93",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "94",
    "sentence": "Emma has a headache",
    "chinese": "艾玛头痛",
    "pronunciation": "/ˈemə/ /hæz; həz/ /ə; eɪ/ /ˈhedeɪk/"
  },
  {
    "id": "95",
    "sentence": "Two : Emma has a headache",
    "chinese": "艾玛头痛",
    "pronunciation": "/tuː/ /ˈemə/ /hæz; həz/ /ə; eɪ/ /ˈhedeɪk/"
  },
  {
    "id": "96",
    "sentence": "and a sore throat",
    "chinese": "并且喉咙痛",
    "pronunciation": "/ænd; ənd/ /ə; eɪ/ /sɔːr/ /θroʊt/"
  },
  {
    "id": "97",
    "sentence": "Two : Emma has a headache and a sore throat",
    "chinese": "艾玛头痛并且喉咙痛",
    "pronunciation": "/tuː/ /ˈemə/ /hæz; həz/ /ə; eɪ/ /ˈhedeɪk/ /ænd; ənd/ /ə; eɪ/ /sɔːr/ /θroʊt/"
  },
  {
    "id": "98",
    "sentence": "What does she have",
    "chinese": "她有什么？",
    "pronunciation": "/wʌt/ /dʌz/ /ʃiː; ʃi/ /hæv/"
  },
  {
    "id": "99",
    "sentence": "She has a headache",
    "chinese": "她头痛",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /ˈhedeɪk/"
  },
  {
    "id": "100",
    "sentence": "and a sore throat",
    "chinese": "并且喉咙痛",
    "pronunciation": "/ænd; ənd/ /ə; eɪ/ /sɔːr/ /θroʊt/"
  },
  {
    "id": "101",
    "sentence": "She has a headache and a sore throat",
    "chinese": "她头痛并且喉咙痛",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /ˈhedeɪk/ /ænd; ənd/ /ə; eɪ/ /sɔːr/ /θroʊt/"
  },
  {
    "id": "102",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "103",
    "sentence": "Emma is sneezing",
    "chinese": "艾玛在打喷嚏",
    "pronunciation": "/ˈemə/ /ɪz/ /ˈsniːzɪŋ/"
  },
  {
    "id": "104",
    "sentence": "Three : Emma is sneezing",
    "chinese": "三：艾玛在打喷嚏",
    "pronunciation": "/θriː/ /ˈemə/ /ɪz/ /ˈsniːzɪŋ/"
  },
  {
    "id": "105",
    "sentence": "a lot",
    "chinese": "很多",
    "pronunciation": "/ə; eɪ/ /lɑːt/"
  },
  {
    "id": "106",
    "sentence": "Three : Emma is sneezing a lot",
    "chinese": "三：艾玛一直在打喷嚏",
    "pronunciation": "/θriː/ /ˈemə/ /ɪz/ /ˈsniːzɪŋ/ /ə; eɪ/ /lɑːt/"
  },
  {
    "id": "107",
    "sentence": "What is Emma doing",
    "chinese": "艾玛在做什么",
    "pronunciation": "/wʌt/ /ɪz/ /ˈemə/ /ˈduːɪŋ/"
  },
  {
    "id": "108",
    "sentence": "a lot",
    "chinese": "很多",
    "pronunciation": "/ə; eɪ/ /lɑːt/"
  },
  {
    "id": "109",
    "sentence": "What is Emma doing a lot ?",
    "chinese": "艾玛在做什么？",
    "pronunciation": "/wʌt/ /ɪz/ /ˈemə/ /ˈduːɪŋ/ /ə; eɪ/ /lɑːt/"
  },
  {
    "id": "110",
    "sentence": "She is sneezing",
    "chinese": "她在打喷嚏",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈsniːzɪŋ/"
  },
  {
    "id": "111",
    "sentence": "a lot",
    "chinese": "很多",
    "pronunciation": "/ə; eɪ/ /lɑːt/"
  },
  {
    "id": "112",
    "sentence": "She is sneezing a lot",
    "chinese": "她一直在打喷嚏",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈsniːzɪŋ/ /ə; eɪ/ /lɑːt/"
  },
  {
    "id": "113",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "114",
    "sentence": "Emma decides to go",
    "chinese": "艾玛决定去",
    "pronunciation": "/ˈemə/ /dɪˈsaɪdz/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "115",
    "sentence": "Four : Emma decides to go",
    "chinese": "四：艾玛决定去",
    "pronunciation": "/fɔr/ /ˈemə/ /dɪˈsaɪdz/ /tuː; tə/ /ɡoʊ/"
  },
  {
    "id": "116",
    "sentence": "to the doctor",
    "chinese": "去看医生",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "117",
    "sentence": "Four : Emma decides to go to the doctor",
    "chinese": "四：艾玛决定去看医生",
    "pronunciation": "/fɔr/ /ˈemə/ /dɪˈsaɪdz/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "118",
    "sentence": "What does Emma decide",
    "chinese": "艾玛决定",
    "pronunciation": "/wʌt/ /dʌz/ /ˈemə/ /dɪˈsaɪd/"
  },
  {
    "id": "119",
    "sentence": "to do",
    "chinese": "做什么",
    "pronunciation": "/tuː; tə/ /duː; də/"
  },
  {
    "id": "120",
    "sentence": "What does Emma decide to do ?",
    "chinese": "艾玛决定做什么？",
    "pronunciation": "/wʌt/ /dʌz/ /ˈemə/ /dɪˈsaɪd/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "121",
    "sentence": "She decides",
    "chinese": "她决定",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdz/"
  },
  {
    "id": "122",
    "sentence": "to go to the doctor",
    "chinese": "去看医生",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /tuː; tə/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "123",
    "sentence": "She decides to go to the doctor",
    "chinese": "她决定去看医生",
    "pronunciation": "/ʃiː; ʃi/ /dɪˈsaɪdz/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "124",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "125",
    "sentence": "Emma tells the doctor",
    "chinese": "艾玛告诉医生",
    "pronunciation": "/ˈemə/ /telz/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "126",
    "sentence": "Five : Emma tells the doctor",
    "chinese": "五：艾玛告诉医生",
    "pronunciation": "/faɪv/ /ˈemə/ /telz/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "127",
    "sentence": "how she feels",
    "chinese": "她感觉如何？",
    "pronunciation": "/haʊ/ /ʃiː; ʃi/ /fiːlz/"
  },
  {
    "id": "128",
    "sentence": "Five : Emma tells the doctor how she feels",
    "chinese": "五：艾玛告诉医生她的感受",
    "pronunciation": "/faɪv/ /ˈemə/ /telz/ /ðə/ /ˈdɑːktər/ /haʊ/ /ʃiː; ʃi/ /fiːlz/"
  },
  {
    "id": "129",
    "sentence": "What does she tell",
    "chinese": "她告诉什么",
    "pronunciation": "/wʌt/ /dʌz/ /ʃiː; ʃi/ /tel/"
  },
  {
    "id": "130",
    "sentence": "the doctor",
    "chinese": "医生",
    "pronunciation": "/ðə/ /ˈdɑːktər/"
  },
  {
    "id": "131",
    "sentence": "What does she tell the doctor ?",
    "chinese": "她告诉医生什么？",
    "pronunciation": "/wʌt/ /dʌz/ /ʃiː; ʃi/ /tel/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "132",
    "sentence": "She tells the doctor",
    "chinese": "她告诉医生",
    "pronunciation": "/ʃiː; ʃi/ /telz/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "133",
    "sentence": "how she feels",
    "chinese": "她感觉如何？",
    "pronunciation": "/haʊ/ /ʃiː; ʃi/ /fiːlz/"
  },
  {
    "id": "134",
    "sentence": "She tells the doctor how she feels",
    "chinese": "她告诉医生她的感受",
    "pronunciation": "/ʃiː; ʃi/ /telz/ /ðə/ /ˈdɑːktər/ /haʊ/ /ʃiː; ʃi/ /fiːlz/"
  },
  {
    "id": "135",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "136",
    "sentence": "The doctor told Emma",
    "chinese": "医生告诉艾玛",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/"
  },
  {
    "id": "137",
    "sentence": "Six : The doctor told Emma",
    "chinese": "医生告诉艾玛",
    "pronunciation": "/sɪks/ /ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/"
  },
  {
    "id": "138",
    "sentence": "that she has a cold",
    "chinese": "她感冒了",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "139",
    "sentence": "Six : The doctor told Emma that she has a cold",
    "chinese": "医生告诉艾玛她感冒了",
    "pronunciation": "/sɪks/ /ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/ /ðæt/ /ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "140",
    "sentence": "What did the doctor tell Emma",
    "chinese": "医生对艾玛说了什么？",
    "pronunciation": "/wʌt/ /dɪd/ /ðə/ /ˈdɑːktər/ /tel/ /ˈemə/"
  },
  {
    "id": "141",
    "sentence": "Six : The doctor told Emma that she has a cold . What did the doctor tell Emma ?",
    "chinese": "医生告诉艾玛她感冒了医生对艾玛说了什么？",
    "pronunciation": "/sɪks/ /ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/ /ðæt/ /ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /koʊld/ /wʌt/ /dɪd/ /ðə/ /ˈdɑːktər/ /tel/ /ˈemə/"
  },
  {
    "id": "142",
    "sentence": "The doctor told her",
    "chinese": "医生告诉她",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /hɚ/"
  },
  {
    "id": "143",
    "sentence": "that she has a cold",
    "chinese": "她感冒了",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "144",
    "sentence": "The doctor told her that she has a cold",
    "chinese": "医生告诉她，她感冒了",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /hɚ/ /ðæt/ /ʃiː; ʃi/ /hæz; həz/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "145",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "146",
    "sentence": "The doctor said",
    "chinese": "医生说",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /sed/"
  },
  {
    "id": "147",
    "sentence": "Seven : The doctor said",
    "chinese": "医生说",
    "pronunciation": "/ˈsev(ə)n/ /ðə/ /ˈdɑːktər/ /sed/"
  },
  {
    "id": "148",
    "sentence": "Emma didn't need medicine",
    "chinese": "艾玛不需要药",
    "pronunciation": "/ˈemə/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "149",
    "sentence": "Seven : The doctor said Emma didn't need medicine",
    "chinese": "医生说艾玛不需要药",
    "pronunciation": "/ˈsev(ə)n/ /ðə/ /ˈdɑːktər/ /sed/ /ˈemə/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "150",
    "sentence": "for a cold",
    "chinese": "用于感冒",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "151",
    "sentence": "Seven : The doctor said Emma didn't need medicine for a cold",
    "chinese": "医生说艾玛不需要感冒药",
    "pronunciation": "/ˈsev(ə)n/ /ðə/ /ˈdɑːktər/ /sed/ /ˈemə/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/ /fɔːr; fər/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "152",
    "sentence": "Did the doctor say",
    "chinese": "医生说了吗？",
    "pronunciation": "/dɪd/ /ðə/ /ˈdɑːktər/ /seɪ/"
  },
  {
    "id": "153",
    "sentence": "Emma needs medicine",
    "chinese": "艾玛需要吃药",
    "pronunciation": "/ˈemə/ /niːdz/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "154",
    "sentence": "Did the doctor say Emma needs medicine ?",
    "chinese": "医生说艾玛需要吃药吗？",
    "pronunciation": "/dɪd/ /ðə/ /ˈdɑːktər/ /seɪ/ /ˈemə/ /niːdz/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "155",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "156",
    "sentence": "the doctor said",
    "chinese": "医生说",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /sed/"
  },
  {
    "id": "157",
    "sentence": "No , the doctor said",
    "chinese": "不，医生说",
    "pronunciation": "/noʊ/ /ðə/ /ˈdɑːktər/ /sed/"
  },
  {
    "id": "158",
    "sentence": "Emma didn't need medicine",
    "chinese": "艾玛不需要吃药",
    "pronunciation": "/ˈemə/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "159",
    "sentence": "No , the doctor said Emma didn't need medicine",
    "chinese": "不，医生说艾玛不需要吃药",
    "pronunciation": "/noʊ/ /ðə/ /ˈdɑːktər/ /sed/ /ˈemə/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/"
  },
  {
    "id": "160",
    "sentence": "for a cold",
    "chinese": "为感冒",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "161",
    "sentence": "No , the doctor said Emma didn't need medicine for a cold",
    "chinese": "不，医生说艾玛不需要为感冒吃药",
    "pronunciation": "/noʊ/ /ðə/ /ˈdɑːktər/ /sed/ /ˈemə/ /ˈdɪd(ə)nt/ /niːd/ /ˈmedɪs(ə)n/ /fɔːr; fər/ /ə; eɪ/ /koʊld/"
  },
  {
    "id": "162",
    "sentence": "Eight :",
    "chinese": "八：",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "163",
    "sentence": "The doctor told Emma",
    "chinese": "医生告诉艾玛",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/"
  },
  {
    "id": "164",
    "sentence": "Eight : The doctor told Emma",
    "chinese": "医生告诉艾玛",
    "pronunciation": "/eɪt/ /ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/"
  },
  {
    "id": "165",
    "sentence": "to sleep",
    "chinese": "睡觉",
    "pronunciation": "/tuː; tə/ /sliːp/"
  },
  {
    "id": "166",
    "sentence": "Eight : The doctor told Emma to sleep",
    "chinese": "八：医生告诉艾玛要睡觉",
    "pronunciation": "/eɪt/ /ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/ /tuː; tə/ /sliːp/"
  },
  {
    "id": "167",
    "sentence": "and drink water",
    "chinese": "并多喝水",
    "pronunciation": "/ænd; ənd/ /drɪŋk/ /ˈwɔːtər/"
  },
  {
    "id": "168",
    "sentence": "Eight : The doctor told Emma to sleep and drink water",
    "chinese": "八：医生告诉艾玛要睡觉并多喝水",
    "pronunciation": "/eɪt/ /ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/ /tuː; tə/ /sliːp/ /ænd; ənd/ /drɪŋk/ /ˈwɔːtər/"
  },
  {
    "id": "169",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "170",
    "sentence": "Eight : The doctor told Emma to sleep and drink water instead",
    "chinese": "八：医生告诉艾玛要睡觉并多喝水",
    "pronunciation": "/eɪt/ /ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/ /tuː; tə/ /sliːp/ /ænd; ənd/ /drɪŋk/ /ˈwɔːtər/ /ɪnˈsted/"
  },
  {
    "id": "171",
    "sentence": "What did the doctor tell Emma",
    "chinese": "医生告诉艾玛什么",
    "pronunciation": "/wʌt/ /dɪd/ /ðə/ /ˈdɑːktər/ /tel/ /ˈemə/"
  },
  {
    "id": "172",
    "sentence": "to do instead",
    "chinese": "应该怎么做",
    "pronunciation": "/tuː; tə/ /duː; də/ /ɪnˈsted/"
  },
  {
    "id": "173",
    "sentence": "What did the doctor tell Emma to do instead ?",
    "chinese": "医生告诉艾玛应该怎么做？",
    "pronunciation": "/wʌt/ /dɪd/ /ðə/ /ˈdɑːktər/ /tel/ /ˈemə/ /tuː; tə/ /duː; də/ /ɪnˈsted/"
  },
  {
    "id": "174",
    "sentence": "The doctor told Emma",
    "chinese": "医生告诉艾玛",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/"
  },
  {
    "id": "175",
    "sentence": "to sleep",
    "chinese": "睡觉",
    "pronunciation": "/tuː; tə/ /sliːp/"
  },
  {
    "id": "176",
    "sentence": "The doctor told Emma to sleep",
    "chinese": "医生告诉艾玛要睡觉",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/ /tuː; tə/ /sliːp/"
  },
  {
    "id": "177",
    "sentence": "and drink water",
    "chinese": "并多喝水",
    "pronunciation": "/ænd; ənd/ /drɪŋk/ /ˈwɔːtər/"
  },
  {
    "id": "178",
    "sentence": "The doctor told Emma to sleep and drink water",
    "chinese": "医生告诉艾玛要睡觉并多喝水",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/ /tuː; tə/ /sliːp/ /ænd; ənd/ /drɪŋk/ /ˈwɔːtər/"
  },
  {
    "id": "179",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "180",
    "sentence": "The doctor told Emma to sleep and drink water instead",
    "chinese": "医生告诉艾玛要睡觉并多喝水",
    "pronunciation": "/ðə/ /ˈdɑːktər/ /toʊld/ /ˈemə/ /tuː; tə/ /sliːp/ /ænd; ənd/ /drɪŋk/ /ˈwɔːtər/ /ɪnˈsted/"
  },
  {
    "id": "181",
    "sentence": "Nine :",
    "chinese": "九：",
    "pronunciation": "/naɪn/"
  },
  {
    "id": "182",
    "sentence": "Emma didn't feel better",
    "chinese": "艾玛没有感觉好些",
    "pronunciation": "/ˈemə/ /ˈdɪd(ə)nt/ /fil/ /ˈbetər/"
  },
  {
    "id": "183",
    "sentence": "Nine : Emma didn't feel better",
    "chinese": "艾玛没有感觉好些",
    "pronunciation": "/naɪn/ /ˈemə/ /ˈdɪd(ə)nt/ /fil/ /ˈbetər/"
  },
  {
    "id": "184",
    "sentence": "when she left the doctor",
    "chinese": "当她离开医生时",
    "pronunciation": "/wen/ /ʃiː; ʃi/ /left/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "185",
    "sentence": "Nine : Emma didn't feel better when she left the doctor",
    "chinese": "九：艾玛离开医生后并没有感觉好些",
    "pronunciation": "/naɪn/ /ˈemə/ /ˈdɪd(ə)nt/ /fil/ /ˈbetər/ /wen/ /ʃiː; ʃi/ /left/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "186",
    "sentence": "Did Emma feel better",
    "chinese": "艾玛感觉好些了吗？",
    "pronunciation": "/dɪd/ /ˈemə/ /fil/ /ˈbetər/"
  },
  {
    "id": "187",
    "sentence": "when she left the doctor",
    "chinese": "当她离开医生时",
    "pronunciation": "/wen/ /ʃiː; ʃi/ /left/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "188",
    "sentence": "Did Emma feel better when she left the doctor ?",
    "chinese": "艾玛离开医生后感觉好些了吗？",
    "pronunciation": "/dɪd/ /ˈemə/ /fil/ /ˈbetər/ /wen/ /ʃiː; ʃi/ /left/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "189",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "190",
    "sentence": "Emma didn't feel better",
    "chinese": "艾玛没有感觉好些",
    "pronunciation": "/ˈemə/ /ˈdɪd(ə)nt/ /fil/ /ˈbetər/"
  },
  {
    "id": "191",
    "sentence": "No , Emma didn't feel better",
    "chinese": "不，艾玛没有感觉好些",
    "pronunciation": "/noʊ/ /ˈemə/ /ˈdɪd(ə)nt/ /fil/ /ˈbetər/"
  },
  {
    "id": "192",
    "sentence": "when she left the doctor",
    "chinese": "当她离开医生时",
    "pronunciation": "/wen/ /ʃiː; ʃi/ /left/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "193",
    "sentence": "No , Emma didn't feel better when she left the doctor",
    "chinese": "不，艾玛离开医生时并没有感觉好些",
    "pronunciation": "/noʊ/ /ˈemə/ /ˈdɪd(ə)nt/ /fil/ /ˈbetər/ /wen/ /ʃiː; ʃi/ /left/ /ðə/ /ˈdɑːktər/"
  },
  {
    "id": "194",
    "sentence": "Let's hope",
    "chinese": "让我们希望",
    "pronunciation": "/lets/ /hoʊp/"
  },
  {
    "id": "195",
    "sentence": "Emma feels better",
    "chinese": "艾玛感觉好些了",
    "pronunciation": "/ˈemə/ /fiːlz/ /ˈbetər/"
  },
  {
    "id": "196",
    "sentence": "Let's hope Emma feels better",
    "chinese": "希望艾玛感觉好些",
    "pronunciation": "/lets/ /hoʊp/ /ˈemə/ /fiːlz/ /ˈbetər/"
  },
  {
    "id": "197",
    "sentence": "soon",
    "chinese": "尽快",
    "pronunciation": "/sun/"
  },
  {
    "id": "198",
    "sentence": "Let's hope Emma feels better soon",
    "chinese": "希望艾玛能尽快好起来",
    "pronunciation": "/lets/ /hoʊp/ /ˈemə/ /fiːlz/ /ˈbetər/ /sun/"
  },
];
