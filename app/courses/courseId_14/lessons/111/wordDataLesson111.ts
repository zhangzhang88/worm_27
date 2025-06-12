export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hello , Mr Smith",
    "chinese": "您好，史密斯先生",
    "pronunciation": "/həˈloʊ/ /ˈmɪstər/ /smɪθ/"
  },
  {
    "id": "2",
    "sentence": "It's nice to finally meet you",
    "chinese": "很高兴终于见到您了",
    "pronunciation": "/ɪts/ /naɪs/ /tuː; tə/ /ˈfaɪnəli/ /miːt/ /juː; jʊ/"
  },
  {
    "id": "3",
    "sentence": "Hello , Mr Smith . It's nice to finally meet you",
    "chinese": "您好，史密斯先生很高兴终于见到您了。",
    "pronunciation": "/həˈloʊ/ /ˈmɪstər/ /smɪθ/ /ɪts/ /naɪs/ /tuː; tə/ /ˈfaɪnəli/ /miːt/ /juː; jʊ/"
  },
  {
    "id": "4",
    "sentence": "Likewise , Mrs Jones",
    "chinese": "琼斯夫人，您也一样",
    "pronunciation": "/ˈlaɪkwaɪz/ /ˈmɪsɪz/ /dʒoʊnz/"
  },
  {
    "id": "5",
    "sentence": "Please sit down",
    "chinese": "请坐",
    "pronunciation": "/pliːz/ /sɪt/ /daʊn/"
  },
  {
    "id": "6",
    "sentence": "Likewise , Mrs Jones . Please sit down",
    "chinese": "琼斯夫人，您也一样请坐。",
    "pronunciation": "/ˈlaɪkwaɪz/ /ˈmɪsɪz/ /dʒoʊnz/ /pliːz/ /sɪt/ /daʊn/"
  },
  {
    "id": "7",
    "sentence": "Is James in trouble again",
    "chinese": "詹姆斯又惹麻烦了吗？",
    "pronunciation": "/ɪz/ /dʒeɪmz/ /ɪn/ /ˈtrʌbəl/ /əˈɡen/"
  },
  {
    "id": "8",
    "sentence": "Actually , no",
    "chinese": "其实，不",
    "pronunciation": "/ˈæktʃuəli/ /noʊ/"
  },
  {
    "id": "9",
    "sentence": "He's not",
    "chinese": "他不是",
    "pronunciation": "/hiːz/ /nɑːt/"
  },
  {
    "id": "10",
    "sentence": "Actually , no . He's not",
    "chinese": "其实，不他不是。",
    "pronunciation": "/ˈæktʃuəli/ /noʊ/ /hiːz/ /nɑːt/"
  },
  {
    "id": "11",
    "sentence": "What's the purpose of this meeting exactly",
    "chinese": "这次会议的具体目的是什么？",
    "pronunciation": "/wʌts/ /ðə/ /ˈpɜːrpəs/ /ʌv/ /ðɪs/ /ˈmiːtɪŋ/ /ɪɡˈzæktli/"
  },
  {
    "id": "12",
    "sentence": "I just wanted to let you know",
    "chinese": "我只是想让你知道",
    "pronunciation": "/aɪ/ /dʒʌst/ /ˈwɑːntɪd/ /tuː; tə/ /let/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "13",
    "sentence": "that James is doing very well",
    "chinese": "詹姆斯现在表现得非常好",
    "pronunciation": "/ðæt/ /dʒeɪmz/ /ɪz/ /ˈduːɪŋ/ /ˈveri/ /wel/"
  },
  {
    "id": "14",
    "sentence": "I just wanted to let you know that James is doing very well",
    "chinese": "我只是想告诉你，詹姆斯现在表现得非常好",
    "pronunciation": "/aɪ/ /dʒʌst/ /ˈwɑːntɪd/ /tuː; tə/ /let/ /juː; jʊ/ /noʊ/ /ðæt/ /dʒeɪmz/ /ɪz/ /ˈduːɪŋ/ /ˈveri/ /wel/"
  },
  {
    "id": "15",
    "sentence": "Oh , is that right",
    "chinese": "哦，是这样吗？",
    "pronunciation": "/oʊ/ /ɪz/ /ðæt/ /raɪt/"
  },
  {
    "id": "16",
    "sentence": "I'm so proud",
    "chinese": "我真是太自豪了",
    "pronunciation": "/aɪm/ /soʊ/ /praʊd/"
  },
  {
    "id": "17",
    "sentence": "Oh , is that right ? I'm so proud",
    "chinese": "哦，是这样吗？我真是太自豪了",
    "pronunciation": "/oʊ/ /ɪz/ /ðæt/ /raɪt/ /aɪm/ /soʊ/ /praʊd/"
  },
  {
    "id": "18",
    "sentence": "He has been staying for tutoring",
    "chinese": "他一直在接受辅导",
    "pronunciation": "/hiː/ /hæz; həz/ /bɪn/ /ˈsteɪɪŋ/ /fɔːr; fər/ /ˈtu:tərɪŋ/"
  },
  {
    "id": "19",
    "sentence": "and his marks have skyrocketed",
    "chinese": "他的成绩突飞猛进",
    "pronunciation": "/ænd; ənd/ /hɪz; ɪz/ /mɑːrks/ /hæv/ /ˈskaɪrɑːkɪtɪd/"
  },
  {
    "id": "20",
    "sentence": "He has been staying for tutoring , and his marks have skyrocketed",
    "chinese": "他一直在接受辅导，成绩突飞猛进",
    "pronunciation": "/hiː/ /hæz; həz/ /bɪn/ /ˈsteɪɪŋ/ /fɔːr; fər/ /ˈtu:tərɪŋ/ /ænd; ənd/ /hɪz; ɪz/ /mɑːrks/ /hæv/ /ˈskaɪrɑːkɪtɪd/"
  },
  {
    "id": "21",
    "sentence": "I always knew",
    "chinese": "我一直都知道",
    "pronunciation": "/aɪ/ /ˈɔːlweɪz/ /nuː/"
  },
  {
    "id": "22",
    "sentence": "he had it in him",
    "chinese": "他有这个能力",
    "pronunciation": "/hiː/ /hæd/ /ɪt/ /ɪn/ /hɪm/"
  },
  {
    "id": "23",
    "sentence": "I always knew he had it in him",
    "chinese": "我一直都知道他有这个能力",
    "pronunciation": "/aɪ/ /ˈɔːlweɪz/ /nuː/ /hiː/ /hæd/ /ɪt/ /ɪn/ /hɪm/"
  },
  {
    "id": "24",
    "sentence": "He behaves better",
    "chinese": "他表现得更好了",
    "pronunciation": "/hiː/ /bɪˈheɪvz/ /ˈbetər/"
  },
  {
    "id": "25",
    "sentence": "in the classroom , too",
    "chinese": "在教室里，也",
    "pronunciation": "/ɪn/ /ðə/ /ˈklæsruːm/ /tuː/"
  },
  {
    "id": "26",
    "sentence": "He behaves better in the classroom , too",
    "chinese": "他在教室里的表现也更好了",
    "pronunciation": "/hiː/ /bɪˈheɪvz/ /ˈbetər/ /ɪn/ /ðə/ /ˈklæsruːm/ /tuː/"
  },
  {
    "id": "27",
    "sentence": "I do believe",
    "chinese": "我确实相信",
    "pronunciation": "/aɪ/ /duː; də/ /bɪˈliːv/"
  },
  {
    "id": "28",
    "sentence": "my James is growing up",
    "chinese": "我的詹姆斯正在成长",
    "pronunciation": "/maɪ/ /dʒeɪmz/ /ɪz/ /ˈɡroʊɪŋ/ /ʌp/"
  },
  {
    "id": "29",
    "sentence": "I do believe my James is growing up",
    "chinese": "我确实相信我的詹姆斯正在成长",
    "pronunciation": "/aɪ/ /duː; də/ /bɪˈliːv/ /maɪ/ /dʒeɪmz/ /ɪz/ /ˈɡroʊɪŋ/ /ʌp/"
  },
  {
    "id": "30",
    "sentence": "All children need to mature",
    "chinese": "所有孩子成长所需",
    "pronunciation": "/ɔːl/ /ˈtʃɪldrən/ /niːd/ /tuː; tə/ /məˈtʃʊr/"
  },
  {
    "id": "31",
    "sentence": "is motivation",
    "chinese": "是动力",
    "pronunciation": "/ɪz/ /ˌmoʊtɪˈveɪʃ(ə)n/"
  },
  {
    "id": "32",
    "sentence": "All children need to mature is motivation",
    "chinese": "所有孩子成长所需的只是动力",
    "pronunciation": "/ɔːl/ /ˈtʃɪldrən/ /niːd/ /tuː; tə/ /məˈtʃʊr/ /ɪz/ /ˌmoʊtɪˈveɪʃ(ə)n/"
  },
];
