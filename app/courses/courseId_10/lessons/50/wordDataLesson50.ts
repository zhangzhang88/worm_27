export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Marty has been organizing",
    "chinese": "马蒂一直在组织",
    "pronunciation": "/ˈmɑrti/ /hæz; həz/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/"
  },
  {
    "id": "2",
    "sentence": "his university schedule",
    "chinese": "他的大学课程表",
    "pronunciation": "/hɪz; ɪz/ /ˌjuːnɪˈvɜːrsəti/ /ˈskedʒuːl/"
  },
  {
    "id": "3",
    "sentence": "Marty has been organizing his university schedule",
    "chinese": "马蒂一直在安排他的大学课程表",
    "pronunciation": "/ˈmɑrti/ /hæz; həz/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/ /hɪz; ɪz/ /ˌjuːnɪˈvɜːrsəti/ /ˈskedʒuːl/"
  },
  {
    "id": "4",
    "sentence": "He intends to graduate",
    "chinese": "他打算毕业",
    "pronunciation": "/hiː/ /ɪnˈtɛndz/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/"
  },
  {
    "id": "5",
    "sentence": "at the end of this year",
    "chinese": "在今年年底",
    "pronunciation": "/æt; ət/ /ðə/ /end/ /ʌv/ /ðɪs/ /jɪr/"
  },
  {
    "id": "6",
    "sentence": "He intends to graduate at the end of this year",
    "chinese": "他打算在今年年底毕业",
    "pronunciation": "/hiː/ /ɪnˈtɛndz/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/ /æt; ət/ /ðə/ /end/ /ʌv/ /ðɪs/ /jɪr/"
  },
  {
    "id": "7",
    "sentence": "He has to choose the courses",
    "chinese": "他必须选择课程",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /tʃuːz/ /ðə/ /ˈkɔːrsɪz/"
  },
  {
    "id": "8",
    "sentence": "he needs to take",
    "chinese": "他需要修读",
    "pronunciation": "/hiː/ /niːdz/ /tuː; tə/ /teɪk/"
  },
  {
    "id": "9",
    "sentence": "He has to choose the courses he needs to take",
    "chinese": "他必须选择需要修读的课程",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /tʃuːz/ /ðə/ /ˈkɔːrsɪz/ /hiː/ /niːdz/ /tuː; tə/ /teɪk/"
  },
  {
    "id": "10",
    "sentence": "in order to meet the requirements",
    "chinese": "为了满足要求",
    "pronunciation": "/ɪn/ /ˈɔːrdər/ /tuː; tə/ /miːt/ /ðə/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "11",
    "sentence": "He has to choose the courses he needs to take , in order to meet the requirements",
    "chinese": "他必须选择需要修读的课程，以满足学位要求",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /tʃuːz/ /ðə/ /ˈkɔːrsɪz/ /hiː/ /niːdz/ /tuː; tə/ /teɪk/ /ɪn/ /ˈɔːrdər/ /tuː; tə/ /miːt/ /ðə/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "12",
    "sentence": "for his degree",
    "chinese": "为了他的学位",
    "pronunciation": "/fɔːr; fər/ /hɪz; ɪz/ /dɪˈɡriː/"
  },
  {
    "id": "13",
    "sentence": "He has to choose the courses he needs to take , in order to meet the requirements for his degree",
    "chinese": "他必须选择需要修读的课程，以满足学位要求",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /tʃuːz/ /ðə/ /ˈkɔːrsɪz/ /hiː/ /niːdz/ /tuː; tə/ /teɪk/ /ɪn/ /ˈɔːrdər/ /tuː; tə/ /miːt/ /ðə/ /rɪˈkwaɪərmənts/ /fɔːr; fər/ /hɪz; ɪz/ /dɪˈɡriː/"
  },
  {
    "id": "14",
    "sentence": "One class he needs to take",
    "chinese": "他需要上的一门课",
    "pronunciation": "/wʌn/ /klæs/ /hiː/ /niːdz/ /tuː; tə/ /teɪk/"
  },
  {
    "id": "15",
    "sentence": "is Sociology",
    "chinese": "是社会学",
    "pronunciation": "/ɪz/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "16",
    "sentence": "One class he needs to take is Sociology",
    "chinese": "他需要上的一门课是社会学",
    "pronunciation": "/wʌn/ /klæs/ /hiː/ /niːdz/ /tuː; tə/ /teɪk/ /ɪz/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "17",
    "sentence": "which he doesn't like",
    "chinese": "但他并不喜欢",
    "pronunciation": "/wɪtʃ/ /hiː/ /ˈdʌznt/ /laɪk/"
  },
  {
    "id": "18",
    "sentence": "One class he needs to take is Sociology which he doesn't like",
    "chinese": "他需要上的一门课是社会学，但他并不喜欢",
    "pronunciation": "/wʌn/ /klæs/ /hiː/ /niːdz/ /tuː; tə/ /teɪk/ /ɪz/ /ˌsoʊsiˈɑːlədʒi/ /wɪtʃ/ /hiː/ /ˈdʌznt/ /laɪk/"
  },
  {
    "id": "19",
    "sentence": "Marty is majoring",
    "chinese": "马蒂正在主修",
    "pronunciation": "/ˈmɑrti/ /ɪz/ /ˈmeɪdʒərɪŋ/"
  },
  {
    "id": "20",
    "sentence": "in Humanities",
    "chinese": "在人文学科",
    "pronunciation": "/ɪn/ /hjuːˈmænəˌtiːz/"
  },
  {
    "id": "21",
    "sentence": "Marty is majoring in Humanities",
    "chinese": "马蒂正在攻读人文学科",
    "pronunciation": "/ˈmɑrti/ /ɪz/ /ˈmeɪdʒərɪŋ/ /ɪn/ /hjuːˈmænəˌtiːz/"
  },
  {
    "id": "22",
    "sentence": "He thinks",
    "chinese": "他认为",
    "pronunciation": "/hiː/ /θɪŋks/"
  },
  {
    "id": "23",
    "sentence": "Sociology is a science subject",
    "chinese": "社会学是一门科学学科",
    "pronunciation": "/ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /ˈsʌbdʒekt/"
  },
  {
    "id": "24",
    "sentence": "He thinks Sociology is a science subject",
    "chinese": "他认为社会学是一门科学学科",
    "pronunciation": "/hiː/ /θɪŋks/ /ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /ˈsʌbdʒekt/"
  },
  {
    "id": "25",
    "sentence": "yet he has to take it",
    "chinese": "但他必须修读它",
    "pronunciation": "/jet/ /hiː/ /hæz; həz/ /tuː; tə/ /teɪk/ /ɪt/"
  },
  {
    "id": "26",
    "sentence": "He thinks Sociology is a science subject , yet he has to take it",
    "chinese": "他认为社会学是一门科学学科，但他必须修读它",
    "pronunciation": "/hiː/ /θɪŋks/ /ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /ˈsʌbdʒekt/ /jet/ /hiː/ /hæz; həz/ /tuː; tə/ /teɪk/ /ɪt/"
  },
  {
    "id": "27",
    "sentence": "to meet the degree requirements",
    "chinese": "以满足学位要求",
    "pronunciation": "/tuː; tə/ /miːt/ /ðə/ /dɪˈɡriː/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "28",
    "sentence": "He thinks Sociology is a science subject , yet he has to take it to meet the degree requirements",
    "chinese": "他认为社会学是一门科学学科，但他必须修读它以满足学位要求",
    "pronunciation": "/hiː/ /θɪŋks/ /ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /ˈsʌbdʒekt/ /jet/ /hiː/ /hæz; həz/ /tuː; tə/ /teɪk/ /ɪt/ /tuː; tə/ /miːt/ /ðə/ /dɪˈɡriː/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "29",
    "sentence": "He's not sure",
    "chinese": "他不明白",
    "pronunciation": "/hiːz/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "30",
    "sentence": "why this is necessary",
    "chinese": "为什么这是必要的？",
    "pronunciation": "/waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "31",
    "sentence": "He's not sure why this is necessary",
    "chinese": "他不明白为什么这是必要的",
    "pronunciation": "/hiːz/ /nɑːt/ /ʃʊr/ /waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "32",
    "sentence": "He hopes",
    "chinese": "他希望",
    "pronunciation": "/hiː/ /hoʊps/"
  },
  {
    "id": "33",
    "sentence": "Sociology class won't be",
    "chinese": "社会学课不会",
    "pronunciation": "/ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/"
  },
  {
    "id": "34",
    "sentence": "He hopes Sociology class won't be",
    "chinese": "他希望社会学课不会",
    "pronunciation": "/hiː/ /hoʊps/ /ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/"
  },
  {
    "id": "35",
    "sentence": "too boring",
    "chinese": "太无聊",
    "pronunciation": "/tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "36",
    "sentence": "He hopes Sociology class won't be too boring",
    "chinese": "他希望社会学课不会太无聊",
    "pronunciation": "/hiː/ /hoʊps/ /ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "37",
    "sentence": "Now let's hear",
    "chinese": "现在让我们听",
    "pronunciation": "/naʊ/ /lets/ /hɪr/"
  },
  {
    "id": "38",
    "sentence": "the same story",
    "chinese": "同一个故事",
    "pronunciation": "/ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "39",
    "sentence": "Now let's hear the same story",
    "chinese": "现在让我们听同一个故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "40",
    "sentence": "from a different perspective",
    "chinese": "从不同的角度",
    "pronunciation": "/frʌm/ /ə; eɪ/ /ˈdɪfrənt/ /pərˈspektɪv/"
  },
  {
    "id": "41",
    "sentence": "Now let's hear the same story from a different perspective",
    "chinese": "现在让我们从不同的角度来听同一个故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /seɪm/ /ˈstɔːri/ /frʌm/ /ə; eɪ/ /ˈdɪfrənt/ /pərˈspektɪv/"
  },
  {
    "id": "42",
    "sentence": "The students have been organizing",
    "chinese": "学生们一直在组织",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /hæv/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/"
  },
  {
    "id": "43",
    "sentence": "their university schedules",
    "chinese": "他们的大学课程表",
    "pronunciation": "/ðer/ /ˌjuːnɪˈvɜːrsəti/ /ˈskɛdʒuːlz/"
  },
  {
    "id": "44",
    "sentence": "The students have been organizing their university schedules",
    "chinese": "学生们一直在安排他们的大学课程表",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /hæv/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/ /ðer/ /ˌjuːnɪˈvɜːrsəti/ /ˈskɛdʒuːlz/"
  },
  {
    "id": "45",
    "sentence": "They intend to graduate",
    "chinese": "他们打算毕业",
    "pronunciation": "/ðeɪ/ /ɪnˈtend/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/"
  },
  {
    "id": "46",
    "sentence": "at the end of this year",
    "chinese": "在今年年底",
    "pronunciation": "/æt; ət/ /ðə/ /end/ /ʌv/ /ðɪs/ /jɪr/"
  },
  {
    "id": "47",
    "sentence": "They intend to graduate at the end of this year",
    "chinese": "他们打算在今年年底毕业",
    "pronunciation": "/ðeɪ/ /ɪnˈtend/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/ /æt; ət/ /ðə/ /end/ /ʌv/ /ðɪs/ /jɪr/"
  },
  {
    "id": "48",
    "sentence": "Therefore",
    "chinese": "因此",
    "pronunciation": "/ˈðer.fɔr/"
  },
  {
    "id": "49",
    "sentence": "they have to select the appropriate number of classes",
    "chinese": "他们必须选择适当数量的课程",
    "pronunciation": "/ðeɪ/ /hæv/ /tuː; tə/ /sɪˈlekt/ /ðə/ /əˈproʊpriət/ /ˈnʌmbɚ/ /ʌv/ /ˈklæsɪz/"
  },
  {
    "id": "50",
    "sentence": "Therefore , they have to select the appropriate number of classes",
    "chinese": "因此，他们必须选择适当数量的课程",
    "pronunciation": "/ˈðer.fɔr/ /ðeɪ/ /hæv/ /tuː; tə/ /sɪˈlekt/ /ðə/ /əˈproʊpriət/ /ˈnʌmbɚ/ /ʌv/ /ˈklæsɪz/"
  },
  {
    "id": "51",
    "sentence": "in order to meet the requirements",
    "chinese": "为了满足要求",
    "pronunciation": "/ɪn/ /ˈɔːrdər/ /tuː; tə/ /miːt/ /ðə/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "52",
    "sentence": "Therefore , they have to select the appropriate number of classes in order to meet the requirements",
    "chinese": "因此，他们必须选择适当数量的课程以满足要求",
    "pronunciation": "/ˈðer.fɔr/ /ðeɪ/ /hæv/ /tuː; tə/ /sɪˈlekt/ /ðə/ /əˈproʊpriət/ /ˈnʌmbɚ/ /ʌv/ /ˈklæsɪz/ /ɪn/ /ˈɔːrdər/ /tuː; tə/ /miːt/ /ðə/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "53",
    "sentence": "for their degrees",
    "chinese": "为了他们的学位",
    "pronunciation": "/fɔːr; fər/ /ðer/ /dɪˈɡriːz/"
  },
  {
    "id": "54",
    "sentence": "Therefore , they have to select the appropriate number of classes in order to meet the requirements for their degrees",
    "chinese": "因此，他们必须选择适当数量的课程以满足学位要求",
    "pronunciation": "/ˈðer.fɔr/ /ðeɪ/ /hæv/ /tuː; tə/ /sɪˈlekt/ /ðə/ /əˈproʊpriət/ /ˈnʌmbɚ/ /ʌv/ /ˈklæsɪz/ /ɪn/ /ˈɔːrdər/ /tuː; tə/ /miːt/ /ðə/ /rɪˈkwaɪərmənts/ /fɔːr; fər/ /ðer/ /dɪˈɡriːz/"
  },
  {
    "id": "55",
    "sentence": "One subject",
    "chinese": "一门课程",
    "pronunciation": "/wʌn/ /ˈsʌbdʒekt/"
  },
  {
    "id": "56",
    "sentence": "they need to choose",
    "chinese": "他们需要选择",
    "pronunciation": "/ðeɪ/ /niːd/ /tuː; tə/ /tʃuːz/"
  },
  {
    "id": "57",
    "sentence": "One subject they need to choose",
    "chinese": "他们需要选择的一门课程",
    "pronunciation": "/wʌn/ /ˈsʌbdʒekt/ /ðeɪ/ /niːd/ /tuː; tə/ /tʃuːz/"
  },
  {
    "id": "58",
    "sentence": "is Sociology",
    "chinese": "是社会学",
    "pronunciation": "/ɪz/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "59",
    "sentence": "One subject they need to choose is Sociology",
    "chinese": "他们需要选择的一门课程是社会学",
    "pronunciation": "/wʌn/ /ˈsʌbdʒekt/ /ðeɪ/ /niːd/ /tuː; tə/ /tʃuːz/ /ɪz/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "60",
    "sentence": "Even though",
    "chinese": "尽管",
    "pronunciation": "/ˈiː.vən/ /ðoʊ/"
  },
  {
    "id": "61",
    "sentence": "the students are majoring in Humanities",
    "chinese": "学生们主修人文学科",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /ɑr/ /ˈmeɪdʒərɪŋ/ /ɪn/ /hjuːˈmænəˌtiːz/"
  },
  {
    "id": "62",
    "sentence": "Even though the students are majoring in Humanities",
    "chinese": "尽管学生们主修人文学科",
    "pronunciation": "/ˈiː.vən/ /ðoʊ/ /ðə/ /ˈstuːdənts/ /ɑr/ /ˈmeɪdʒərɪŋ/ /ɪn/ /hjuːˈmænəˌtiːz/"
  },
  {
    "id": "63",
    "sentence": "Some students seem to think",
    "chinese": "一些学生似乎认为",
    "pronunciation": "/sʌm; səm/ /ˈstuːdənts/ /siːm/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "64",
    "sentence": "Sociology is a science class ;",
    "chinese": "社会学是一门科学课程",
    "pronunciation": "/ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /klæs/"
  },
  {
    "id": "65",
    "sentence": "Some students seem to think Sociology is a science class ;",
    "chinese": "一些学生似乎认为社会学是一门科学课程",
    "pronunciation": "/sʌm; səm/ /ˈstuːdənts/ /siːm/ /tuː; tə/ /θɪŋk/ /ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /klæs/"
  },
  {
    "id": "66",
    "sentence": "nevertheless",
    "chinese": "然而",
    "pronunciation": "/ˌnevərðəˈles/"
  },
  {
    "id": "67",
    "sentence": "Some students seem to think Sociology is a science class ; nevertheless",
    "chinese": "一些学生似乎认为社会学是一门科学课程；然而",
    "pronunciation": "/sʌm; səm/ /ˈstuːdənts/ /siːm/ /tuː; tə/ /θɪŋk/ /ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /klæs/ /ˌnevərðəˈles/"
  },
  {
    "id": "68",
    "sentence": "they have to take it",
    "chinese": "他们必须修读这门课",
    "pronunciation": "/ðeɪ/ /hæv/ /tuː; tə/ /teɪk/ /ɪt/"
  },
  {
    "id": "69",
    "sentence": "Some students seem to think Sociology is a science class ; nevertheless , they have to take it",
    "chinese": "一些学生似乎认为社会学是一门科学课程；然而，他们必须修读这门课",
    "pronunciation": "/sʌm; səm/ /ˈstuːdənts/ /siːm/ /tuː; tə/ /θɪŋk/ /ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /klæs/ /ˌnevərðəˈles/ /ðeɪ/ /hæv/ /tuː; tə/ /teɪk/ /ɪt/"
  },
  {
    "id": "70",
    "sentence": "to meet their degree requirements",
    "chinese": "以满足学位要求",
    "pronunciation": "/tuː; tə/ /miːt/ /ðer/ /dɪˈɡriː/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "71",
    "sentence": "Some students seem to think Sociology is a science class ; nevertheless , they have to take it to meet their degree requirements",
    "chinese": "一些学生似乎认为社会学是一门科学课程；然而，他们必须修读这门课以满足学位要求",
    "pronunciation": "/sʌm; səm/ /ˈstuːdənts/ /siːm/ /tuː; tə/ /θɪŋk/ /ˌsoʊsiˈɑːlədʒi/ /ɪz/ /ə; eɪ/ /ˈsaɪəns/ /klæs/ /ˌnevərðəˈles/ /ðeɪ/ /hæv/ /tuː; tə/ /teɪk/ /ɪt/ /tuː; tə/ /miːt/ /ðer/ /dɪˈɡriː/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "72",
    "sentence": "They're not sure",
    "chinese": "他们不确定",
    "pronunciation": "/ˈðer/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "73",
    "sentence": "why this is necessary",
    "chinese": "为什么这是必要的？",
    "pronunciation": "/waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "74",
    "sentence": "They're not sure why this is necessary",
    "chinese": "他们不确定为什么这是必要的",
    "pronunciation": "/ˈðer/ /nɑːt/ /ʃʊr/ /waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "75",
    "sentence": "They hope",
    "chinese": "他们希望",
    "pronunciation": "/ðeɪ/ /hoʊp/"
  },
  {
    "id": "76",
    "sentence": "Sociology class won't be",
    "chinese": "社会学课不会",
    "pronunciation": "/ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/"
  },
  {
    "id": "77",
    "sentence": "They hope Sociology class won't be",
    "chinese": "他们希望社会学课不会",
    "pronunciation": "/ðeɪ/ /hoʊp/ /ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/"
  },
  {
    "id": "78",
    "sentence": "too boring",
    "chinese": "太无聊",
    "pronunciation": "/tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "79",
    "sentence": "They hope Sociology class won't be too boring",
    "chinese": "他们希望社会学课不会太无聊",
    "pronunciation": "/ðeɪ/ /hoʊp/ /ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "80",
    "sentence": "Now here are some questions",
    "chinese": "现在有一些问题",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "81",
    "sentence": "you can try to answer",
    "chinese": "你可以尝试回答",
    "pronunciation": "/juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "82",
    "sentence": "Now here are some questions , you can try to answer",
    "chinese": "现在有一些问题，你可以尝试回答",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "83",
    "sentence": "or simply wait to listen for the answer",
    "chinese": "或者简单地等待听答案",
    "pronunciation": "/ɔr/ /ˈsɪmpli/ /weɪt/ /tuː; tə/ /ˈlɪs(ə)n/ /fɔːr; fər/ /ðə/ /ˈænsər/"
  },
  {
    "id": "84",
    "sentence": "Now here are some questions , you can try to answer or simply wait to listen for the answer",
    "chinese": "现在有一些问题，你可以尝试回答，或者简单地等待听答案",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/ /ɔr/ /ˈsɪmpli/ /weɪt/ /tuː; tə/ /ˈlɪs(ə)n/ /fɔːr; fər/ /ðə/ /ˈænsər/"
  },
  {
    "id": "85",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "86",
    "sentence": "Marty has been organizing",
    "chinese": "马蒂一直在安排",
    "pronunciation": "/ˈmɑrti/ /hæz; həz/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/"
  },
  {
    "id": "87",
    "sentence": "One : Marty has been organizing",
    "chinese": "一：马蒂一直在组织",
    "pronunciation": "/wʌn/ /ˈmɑrti/ /hæz; həz/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/"
  },
  {
    "id": "88",
    "sentence": "his university schedule",
    "chinese": "他的大学课程表",
    "pronunciation": "/hɪz; ɪz/ /ˌjuːnɪˈvɜːrsəti/ /ˈskedʒuːl/"
  },
  {
    "id": "89",
    "sentence": "One : Marty has been organizing his university schedule",
    "chinese": "一：马蒂一直在安排他的大学课程表",
    "pronunciation": "/wʌn/ /ˈmɑrti/ /hæz; həz/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/ /hɪz; ɪz/ /ˌjuːnɪˈvɜːrsəti/ /ˈskedʒuːl/"
  },
  {
    "id": "90",
    "sentence": "What has Marty been organizing",
    "chinese": "Marty一直在组织什么？",
    "pronunciation": "/wʌt/ /hæz; həz/ /ˈmɑrti/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/"
  },
  {
    "id": "91",
    "sentence": "Marty has been organizing",
    "chinese": "马蒂一直在组织",
    "pronunciation": "/ˈmɑrti/ /hæz; həz/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/"
  },
  {
    "id": "92",
    "sentence": "his university schedule",
    "chinese": "他的大学课程表",
    "pronunciation": "/hɪz; ɪz/ /ˌjuːnɪˈvɜːrsəti/ /ˈskedʒuːl/"
  },
  {
    "id": "93",
    "sentence": "Marty has been organizing his university schedule",
    "chinese": "马蒂一直在安排他的大学课程表",
    "pronunciation": "/ˈmɑrti/ /hæz; həz/ /bɪn/ /ˈɔːrɡənaɪzɪŋ/ /hɪz; ɪz/ /ˌjuːnɪˈvɜːrsəti/ /ˈskedʒuːl/"
  },
  {
    "id": "94",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "95",
    "sentence": "He intends to graduate",
    "chinese": "他打算毕业",
    "pronunciation": "/hiː/ /ɪnˈtɛndz/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/"
  },
  {
    "id": "96",
    "sentence": "Two : He intends to graduate",
    "chinese": "他打算毕业",
    "pronunciation": "/tuː/ /hiː/ /ɪnˈtɛndz/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/"
  },
  {
    "id": "97",
    "sentence": "at the end of this year",
    "chinese": "在今年年底",
    "pronunciation": "/æt; ət/ /ðə/ /end/ /ʌv/ /ðɪs/ /jɪr/"
  },
  {
    "id": "98",
    "sentence": "Two : He intends to graduate at the end of this year",
    "chinese": "他打算在今年年底毕业",
    "pronunciation": "/tuː/ /hiː/ /ɪnˈtɛndz/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/ /æt; ət/ /ðə/ /end/ /ʌv/ /ðɪs/ /jɪr/"
  },
  {
    "id": "99",
    "sentence": "When does he intend",
    "chinese": "他打算什么时候",
    "pronunciation": "/wen/ /dʌz/ /hiː/ /ɪnˈtend/"
  },
  {
    "id": "100",
    "sentence": "to graduate",
    "chinese": "毕业",
    "pronunciation": "/tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/"
  },
  {
    "id": "101",
    "sentence": "When does he intend to graduate ?",
    "chinese": "他打算什么时候毕业？",
    "pronunciation": "/wen/ /dʌz/ /hiː/ /ɪnˈtend/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/"
  },
  {
    "id": "102",
    "sentence": "He intends to graduate",
    "chinese": "他打算毕业",
    "pronunciation": "/hiː/ /ɪnˈtɛndz/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/"
  },
  {
    "id": "103",
    "sentence": "at the end of this year",
    "chinese": "在今年年底",
    "pronunciation": "/æt; ət/ /ðə/ /end/ /ʌv/ /ðɪs/ /jɪr/"
  },
  {
    "id": "104",
    "sentence": "He intends to graduate at the end of this year",
    "chinese": "他打算在今年年底毕业",
    "pronunciation": "/hiː/ /ɪnˈtɛndz/ /tuː; tə/ /ˈɡrædʒuət; ˈgrædʒuˌeɪt/ /æt; ət/ /ðə/ /end/ /ʌv/ /ðɪs/ /jɪr/"
  },
  {
    "id": "105",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "106",
    "sentence": "Therefore",
    "chinese": "因此",
    "pronunciation": "/ˈðer.fɔr/"
  },
  {
    "id": "107",
    "sentence": "Three : Therefore",
    "chinese": "三：因此",
    "pronunciation": "/θriː/ /ˈðer.fɔr/"
  },
  {
    "id": "108",
    "sentence": "he has to select",
    "chinese": "他必须选择",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "109",
    "sentence": "Three : Therefore , he has to select",
    "chinese": "三：因此，他必须选择",
    "pronunciation": "/θriː/ /ˈðer.fɔr/ /hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "110",
    "sentence": "the appropriate number of classes",
    "chinese": "适当数量的课程",
    "pronunciation": "/ðə/ /əˈproʊpriət/ /ˈnʌmbɚ/ /ʌv/ /ˈklæsɪz/"
  },
  {
    "id": "111",
    "sentence": "Three : Therefore , he has to select the appropriate number of classes",
    "chinese": "因此，他必须选择适当数量的课程",
    "pronunciation": "/θriː/ /ˈðer.fɔr/ /hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/ /ðə/ /əˈproʊpriət/ /ˈnʌmbɚ/ /ʌv/ /ˈklæsɪz/"
  },
  {
    "id": "112",
    "sentence": "How many classes",
    "chinese": "多少门课",
    "pronunciation": "/haʊ/ /ˈmeni/ /ˈklæsɪz/"
  },
  {
    "id": "113",
    "sentence": "does he have to select",
    "chinese": "他需要选",
    "pronunciation": "/dʌz/ /hiː/ /hæv/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "114",
    "sentence": "How many classes does he have to select ?",
    "chinese": "他需要选多少门课？",
    "pronunciation": "/haʊ/ /ˈmeni/ /ˈklæsɪz/ /dʌz/ /hiː/ /hæv/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "115",
    "sentence": "He has to select",
    "chinese": "他必须选择",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "116",
    "sentence": "the appropriate number of classes",
    "chinese": "适当数量的课程",
    "pronunciation": "/ðə/ /əˈproʊpriət/ /ˈnʌmbɚ/ /ʌv/ /ˈklæsɪz/"
  },
  {
    "id": "117",
    "sentence": "He has to select the appropriate number of classes",
    "chinese": "他必须选择适当数量的课程",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/ /ðə/ /əˈproʊpriət/ /ˈnʌmbɚ/ /ʌv/ /ˈklæsɪz/"
  },
  {
    "id": "118",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "119",
    "sentence": "One class he has to select",
    "chinese": "他必须选修的一门课",
    "pronunciation": "/wʌn/ /klæs/ /hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "120",
    "sentence": "Four : One class he has to select",
    "chinese": "四：他必须选修的一门课",
    "pronunciation": "/fɔr/ /wʌn/ /klæs/ /hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "121",
    "sentence": "is Sociology",
    "chinese": "是社会学",
    "pronunciation": "/ɪz/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "122",
    "sentence": "Four : One class he has to select is Sociology",
    "chinese": "四：他必须选修的一门课是社会学",
    "pronunciation": "/fɔr/ /wʌn/ /klæs/ /hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/ /ɪz/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "123",
    "sentence": "Can you name one class",
    "chinese": "你能说出他必须选择的一门课程吗？",
    "pronunciation": "/kæn/ /juː; jʊ/ /neɪm/ /wʌn/ /klæs/"
  },
  {
    "id": "124",
    "sentence": "he has to select",
    "chinese": "他必须选择",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "125",
    "sentence": "Can you name one class he has to select ?",
    "chinese": "你能说出他必须选择的一门课程吗？",
    "pronunciation": "/kæn/ /juː; jʊ/ /neɪm/ /wʌn/ /klæs/ /hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "126",
    "sentence": "One class",
    "chinese": "一门课程",
    "pronunciation": "/wʌn/ /klæs/"
  },
  {
    "id": "127",
    "sentence": "he has to select",
    "chinese": "他必须选择",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "128",
    "sentence": "One class he has to select",
    "chinese": "他必须选择的一门课程",
    "pronunciation": "/wʌn/ /klæs/ /hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/"
  },
  {
    "id": "129",
    "sentence": "is Sociology",
    "chinese": "是社会学",
    "pronunciation": "/ɪz/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "130",
    "sentence": "One class he has to select is Sociology",
    "chinese": "他必须选择的一门课程是社会学",
    "pronunciation": "/wʌn/ /klæs/ /hiː/ /hæz; həz/ /tuː; tə/ /sɪˈlekt/ /ɪz/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "131",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "132",
    "sentence": "The students are majoring in Humanities",
    "chinese": "学生们主修人文学科",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /ɑr/ /ˈmeɪdʒərɪŋ/ /ɪn/ /hjuːˈmænəˌtiːz/"
  },
  {
    "id": "133",
    "sentence": "Five : The students are majoring in Humanities",
    "chinese": "五：学生们主修人文学科",
    "pronunciation": "/faɪv/ /ðə/ /ˈstuːdənts/ /ɑr/ /ˈmeɪdʒərɪŋ/ /ɪn/ /hjuːˈmænəˌtiːz/"
  },
  {
    "id": "134",
    "sentence": "What subject",
    "chinese": "什么专业",
    "pronunciation": "/wʌt/ /ˈsʌbdʒekt/"
  },
  {
    "id": "135",
    "sentence": "are the students",
    "chinese": "学生们",
    "pronunciation": "/ɑr/ /ðə/ /ˈstuːdənts/"
  },
  {
    "id": "136",
    "sentence": "What subject are the students",
    "chinese": "学生们主修什么",
    "pronunciation": "/wʌt/ /ˈsʌbdʒekt/ /ɑr/ /ðə/ /ˈstuːdənts/"
  },
  {
    "id": "137",
    "sentence": "majoring in",
    "chinese": "主修",
    "pronunciation": "/ˈmeɪdʒərɪŋ/ /ɪn/"
  },
  {
    "id": "138",
    "sentence": "What subject are the students majoring in ?",
    "chinese": "学生们主修什么专业？",
    "pronunciation": "/wʌt/ /ˈsʌbdʒekt/ /ɑr/ /ðə/ /ˈstuːdənts/ /ˈmeɪdʒərɪŋ/ /ɪn/"
  },
  {
    "id": "139",
    "sentence": "The students are majoring",
    "chinese": "学生们正在主修",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /ɑr/ /ˈmeɪdʒərɪŋ/"
  },
  {
    "id": "140",
    "sentence": "in Humanities",
    "chinese": "在人文学科",
    "pronunciation": "/ɪn/ /hjuːˈmænəˌtiːz/"
  },
  {
    "id": "141",
    "sentence": "The students are majoring in Humanities",
    "chinese": "学生们主修人文学科",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /ɑr/ /ˈmeɪdʒərɪŋ/ /ɪn/ /hjuːˈmænəˌtiːz/"
  },
  {
    "id": "142",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "143",
    "sentence": "The students need to take Sociology",
    "chinese": "学生需要修读社会学",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /niːd/ /tuː; tə/ /teɪk/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "144",
    "sentence": "Six : The students need to take Sociology",
    "chinese": "六：学生需要修读社会学",
    "pronunciation": "/sɪks/ /ðə/ /ˈstuːdənts/ /niːd/ /tuː; tə/ /teɪk/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "145",
    "sentence": "to meet their degree requirements",
    "chinese": "以满足学位要求",
    "pronunciation": "/tuː; tə/ /miːt/ /ðer/ /dɪˈɡriː/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "146",
    "sentence": "Six : The students need to take Sociology to meet their degree requirements",
    "chinese": "六：学生需要修读社会学以满足学位要求",
    "pronunciation": "/sɪks/ /ðə/ /ˈstuːdənts/ /niːd/ /tuː; tə/ /teɪk/ /ˌsoʊsiˈɑːlədʒi/ /tuː; tə/ /miːt/ /ðer/ /dɪˈɡriː/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "147",
    "sentence": "Why must the students",
    "chinese": "为什么学生必须",
    "pronunciation": "/waɪ/ /mʌst; məst/ /ðə/ /ˈstuːdənts/"
  },
  {
    "id": "148",
    "sentence": "take Sociology",
    "chinese": "学习社会学",
    "pronunciation": "/teɪk/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "149",
    "sentence": "Why must the students take Sociology ?",
    "chinese": "为什么学生必须学习社会学？",
    "pronunciation": "/waɪ/ /mʌst; məst/ /ðə/ /ˈstuːdənts/ /teɪk/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "150",
    "sentence": "The students have to take Sociology",
    "chinese": "学生必须修读社会学",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /hæv/ /tuː; tə/ /teɪk/ /ˌsoʊsiˈɑːlədʒi/"
  },
  {
    "id": "151",
    "sentence": "to meet the degree requirements",
    "chinese": "以满足学位要求",
    "pronunciation": "/tuː; tə/ /miːt/ /ðə/ /dɪˈɡriː/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "152",
    "sentence": "The students have to take Sociology to meet the degree requirements",
    "chinese": "学生必须修读社会学以满足学位要求",
    "pronunciation": "/ðə/ /ˈstuːdənts/ /hæv/ /tuː; tə/ /teɪk/ /ˌsoʊsiˈɑːlədʒi/ /tuː; tə/ /miːt/ /ðə/ /dɪˈɡriː/ /rɪˈkwaɪərmənts/"
  },
  {
    "id": "153",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "154",
    "sentence": "They're not sure",
    "chinese": "他们不确定",
    "pronunciation": "/ˈðer/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "155",
    "sentence": "Seven : They're not sure",
    "chinese": "七：他们不确定",
    "pronunciation": "/ˈsev(ə)n/ /ˈðer/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "156",
    "sentence": "why this is necessary",
    "chinese": "为什么这是必要的",
    "pronunciation": "/waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "157",
    "sentence": "Seven : They're not sure why this is necessary",
    "chinese": "七：他们不确定为什么这是必要的",
    "pronunciation": "/ˈsev(ə)n/ /ˈðer/ /nɑːt/ /ʃʊr/ /waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "158",
    "sentence": "Do the students understand",
    "chinese": "学生们明白吗？",
    "pronunciation": "/duː; də/ /ðə/ /ˈstuːdənts/ /ˌʌndərˈstænd/"
  },
  {
    "id": "159",
    "sentence": "why this is necessary",
    "chinese": "为什么这是必要的",
    "pronunciation": "/waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "160",
    "sentence": "Do the students understand why this is necessary ?",
    "chinese": "学生们明白为什么这是必要的吗？",
    "pronunciation": "/duː; də/ /ðə/ /ˈstuːdənts/ /ˌʌndərˈstænd/ /waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "161",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "162",
    "sentence": "they're not sure",
    "chinese": "他们不确定",
    "pronunciation": "/ˈðer/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "163",
    "sentence": "No , they're not sure",
    "chinese": "不，他们不确定",
    "pronunciation": "/noʊ/ /ˈðer/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "164",
    "sentence": "why this is necessary",
    "chinese": "为什么这是必要的",
    "pronunciation": "/waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "165",
    "sentence": "No , they're not sure why this is necessary",
    "chinese": "不，他们不确定为什么这是必要的",
    "pronunciation": "/noʊ/ /ˈðer/ /nɑːt/ /ʃʊr/ /waɪ/ /ðɪs/ /ɪz/ /ˈnesəseri/"
  },
  {
    "id": "166",
    "sentence": "Eight :",
    "chinese": "八点钟",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "167",
    "sentence": "They hope",
    "chinese": "他们希望",
    "pronunciation": "/ðeɪ/ /hoʊp/"
  },
  {
    "id": "168",
    "sentence": "Eight : They hope",
    "chinese": "他们希望",
    "pronunciation": "/eɪt/ /ðeɪ/ /hoʊp/"
  },
  {
    "id": "169",
    "sentence": "Sociology class won't be too boring",
    "chinese": "社会学课不会太无聊",
    "pronunciation": "/ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "170",
    "sentence": "Eight : They hope Sociology class won't be too boring",
    "chinese": "他们希望社会学课不会太无聊",
    "pronunciation": "/eɪt/ /ðeɪ/ /hoʊp/ /ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "171",
    "sentence": "Do they want Sociology class",
    "chinese": "他们希望社会学课",
    "pronunciation": "/duː; də/ /ðeɪ/ /wɑːnt/ /ˌsoʊsiˈɑːlədʒi/ /klæs/"
  },
  {
    "id": "172",
    "sentence": "to be boring",
    "chinese": "变得无聊",
    "pronunciation": "/tuː; tə/ /biː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "173",
    "sentence": "Do they want Sociology class to be boring ?",
    "chinese": "他们希望社会学课变得无聊吗？",
    "pronunciation": "/duː; də/ /ðeɪ/ /wɑːnt/ /ˌsoʊsiˈɑːlədʒi/ /klæs/ /tuː; tə/ /biː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "174",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "175",
    "sentence": "of course not",
    "chinese": "当然不会",
    "pronunciation": "/ʌv/ /kɔːrs/ /nɑːt/"
  },
  {
    "id": "176",
    "sentence": "No , of course not",
    "chinese": "不，当然不会",
    "pronunciation": "/noʊ/ /ʌv/ /kɔːrs/ /nɑːt/"
  },
  {
    "id": "177",
    "sentence": "They hope",
    "chinese": "他们希望",
    "pronunciation": "/ðeɪ/ /hoʊp/"
  },
  {
    "id": "178",
    "sentence": "No , of course not . They hope",
    "chinese": "不，当然不会他们希望",
    "pronunciation": "/noʊ/ /ʌv/ /kɔːrs/ /nɑːt/ /ðeɪ/ /hoʊp/"
  },
  {
    "id": "179",
    "sentence": "Sociology class won't be too boring",
    "chinese": "社会学课不会太无聊",
    "pronunciation": "/ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "180",
    "sentence": "No , of course not . They hope Sociology class won't be too boring",
    "chinese": "不，当然不会他们希望社会学课不会太无聊。",
    "pronunciation": "/noʊ/ /ʌv/ /kɔːrs/ /nɑːt/ /ðeɪ/ /hoʊp/ /ˌsoʊsiˈɑːlədʒi/ /klæs/ /woʊnt/ /biː/ /tuː/ /ˈbɔːrɪŋ/"
  },
];
