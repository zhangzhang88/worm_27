export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hi",
    "chinese": "你好",
    "pronunciation": "/haɪ/"
  },
  {
    "id": "2",
    "sentence": "I'm Janet",
    "chinese": "我是珍妮特",
    "pronunciation": "/aɪm/ /ˈdʒænɪt/"
  },
  {
    "id": "3",
    "sentence": "Hi , I'm Janet",
    "chinese": "你好，我是珍妮特",
    "pronunciation": "/haɪ/ /aɪm/ /ˈdʒænɪt/"
  },
  {
    "id": "4",
    "sentence": "I live next door",
    "chinese": "我住在隔壁",
    "pronunciation": "/aɪ/ /lɪv; laɪv/ /nekst/ /dɔr/"
  },
  {
    "id": "5",
    "sentence": "Hi , I'm Janet . I live next door",
    "chinese": "你好，我是珍妮特我住在隔壁。",
    "pronunciation": "/haɪ/ /aɪm/ /ˈdʒænɪt/ /aɪ/ /lɪv; laɪv/ /nekst/ /dɔr/"
  },
  {
    "id": "6",
    "sentence": "Hello Janet",
    "chinese": "你好，珍妮特",
    "pronunciation": "/həˈloʊ/ /ˈdʒænɪt/"
  },
  {
    "id": "7",
    "sentence": "I'm Richard",
    "chinese": "我是理查德",
    "pronunciation": "/aɪm/ /ˈrɪtʃərd/"
  },
  {
    "id": "8",
    "sentence": "Hello Janet , I'm Richard",
    "chinese": "你好，珍妮特，我是理查德",
    "pronunciation": "/həˈloʊ/ /ˈdʒænɪt/ /aɪm/ /ˈrɪtʃərd/"
  },
  {
    "id": "9",
    "sentence": "This is my wife",
    "chinese": "这是我的妻子",
    "pronunciation": "/ðɪs/ /ɪz/ /maɪ/ /waɪf/"
  },
  {
    "id": "10",
    "sentence": "Hello Janet , I'm Richard . This is my wife",
    "chinese": "你好，珍妮特，我是理查德这是我的妻子",
    "pronunciation": "/həˈloʊ/ /ˈdʒænɪt/ /aɪm/ /ˈrɪtʃərd/ /ðɪs/ /ɪz/ /maɪ/ /waɪf/"
  },
  {
    "id": "11",
    "sentence": "Wendy",
    "chinese": "温蒂",
    "pronunciation": "/ˈwendi/"
  },
  {
    "id": "12",
    "sentence": "Hello Janet , I'm Richard . This is my wife , Wendy",
    "chinese": "你好，珍妮特，我是理查德这是我的妻子，温蒂。",
    "pronunciation": "/həˈloʊ/ /ˈdʒænɪt/ /aɪm/ /ˈrɪtʃərd/ /ðɪs/ /ɪz/ /maɪ/ /waɪf/ /ˈwendi/"
  },
  {
    "id": "13",
    "sentence": "We're going to be living side by side",
    "chinese": "我们将比邻而居",
    "pronunciation": "/wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /ˈlɪvɪŋ/ /saɪd/ /baɪ/ /saɪd/"
  },
  {
    "id": "14",
    "sentence": "We should make the best of it",
    "chinese": "我们应该充分利用这一点",
    "pronunciation": "/wiː; wi/ /ʃʊd; ʃəd/ /meɪk/ /ðə/ /best/ /ʌv/ /ɪt/"
  },
  {
    "id": "15",
    "sentence": "We're going to be living side by side . We should make the best of it",
    "chinese": "我们将比邻而居我们应该充分利用这一点。",
    "pronunciation": "/wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /ˈlɪvɪŋ/ /saɪd/ /baɪ/ /saɪd/ /wiː; wi/ /ʃʊd; ʃəd/ /meɪk/ /ðə/ /best/ /ʌv/ /ɪt/"
  },
  {
    "id": "16",
    "sentence": "I totally agree",
    "chinese": "我完全同意",
    "pronunciation": "/aɪ/ /ˈtoʊtəli/ /əˈɡriː/"
  },
  {
    "id": "17",
    "sentence": "My husband will be home soon",
    "chinese": "我丈夫很快就会回家",
    "pronunciation": "/maɪ/ /ˈhʌzbənd/ /wɪl/ /biː/ /hoʊm/ /sun/"
  },
  {
    "id": "18",
    "sentence": "He wants to meet you too",
    "chinese": "他也想见见你",
    "pronunciation": "/hiː/ /ˈwɒnts/ /tuː; tə/ /miːt/ /juː; jʊ/ /tuː/"
  },
  {
    "id": "19",
    "sentence": "My husband will be home soon . He wants to meet you too",
    "chinese": "我丈夫很快就会回家他也想见见你。",
    "pronunciation": "/maɪ/ /ˈhʌzbənd/ /wɪl/ /biː/ /hoʊm/ /sun/ /hiː/ /ˈwɒnts/ /tuː; tə/ /miːt/ /juː; jʊ/ /tuː/"
  },
  {
    "id": "20",
    "sentence": "That would be great",
    "chinese": "那太好了",
    "pronunciation": "/ðæt/ /wʊd/ /biː/ /ɡreɪt/"
  },
  {
    "id": "21",
    "sentence": "I was hoping to make new friends",
    "chinese": "我一直希望能结交新朋友",
    "pronunciation": "/aɪ/ /wʌz; wəz/ /ˈhoʊpɪŋ/ /tuː; tə/ /meɪk/ /nuː/ /frendz/"
  },
  {
    "id": "22",
    "sentence": "That would be great . I was hoping to make new friends",
    "chinese": "那太好了我一直希望能结交新朋友。",
    "pronunciation": "/ðæt/ /wʊd/ /biː/ /ɡreɪt/ /aɪ/ /wʌz; wəz/ /ˈhoʊpɪŋ/ /tuː; tə/ /meɪk/ /nuː/ /frendz/"
  },
  {
    "id": "23",
    "sentence": "Me too",
    "chinese": "我也是",
    "pronunciation": "/miː/ /tuː/"
  },
  {
    "id": "24",
    "sentence": "I knew the Thompsons",
    "chinese": "我认识汤普森一家",
    "pronunciation": "/aɪ/ /nuː/ /ðə/ /ˈtɑːmpsənz/"
  },
  {
    "id": "25",
    "sentence": "Me too . I knew the Thompsons",
    "chinese": "我也是我认识汤普森一家",
    "pronunciation": "/miː/ /tuː/ /aɪ/ /nuː/ /ðə/ /ˈtɑːmpsənz/"
  },
  {
    "id": "26",
    "sentence": "for years",
    "chinese": "多年",
    "pronunciation": "/fɔːr; fər/ /jɪrz/"
  },
  {
    "id": "27",
    "sentence": "Me too . I knew the Thompsons for years",
    "chinese": "我也是我和汤普森一家认识多年了",
    "pronunciation": "/miː/ /tuː/ /aɪ/ /nuː/ /ðə/ /ˈtɑːmpsənz/ /fɔːr; fər/ /jɪrz/"
  },
  {
    "id": "28",
    "sentence": "They lived",
    "chinese": "他们住过",
    "pronunciation": "/ðeɪ/ /lɪvd/"
  },
  {
    "id": "29",
    "sentence": "Me too . I knew the Thompsons for years . They lived",
    "chinese": "我也是我和汤普森一家认识多年了。他们以前住",
    "pronunciation": "/miː/ /tuː/ /aɪ/ /nuː/ /ðə/ /ˈtɑːmpsənz/ /fɔːr; fər/ /jɪrz/ /ðeɪ/ /lɪvd/"
  },
  {
    "id": "30",
    "sentence": "where you do now",
    "chinese": "你们现在住的地方",
    "pronunciation": "/wer/ /juː; jʊ/ /duː; də/ /naʊ/"
  },
  {
    "id": "31",
    "sentence": "Me too . I knew the Thompsons for years . They lived where you do now",
    "chinese": "我也是我和汤普森一家认识多年了。他们以前就住在你们现在住的地方。",
    "pronunciation": "/miː/ /tuː/ /aɪ/ /nuː/ /ðə/ /ˈtɑːmpsənz/ /fɔːr; fər/ /jɪrz/ /ðeɪ/ /lɪvd/ /wer/ /juː; jʊ/ /duː; də/ /naʊ/"
  },
  {
    "id": "32",
    "sentence": "How long",
    "chinese": "多久",
    "pronunciation": "/haʊ/ /lɔːŋ/"
  },
  {
    "id": "33",
    "sentence": "have you lived here",
    "chinese": "你住在这里了吗",
    "pronunciation": "/hæv/ /juː; jʊ/ /lɪvd/ /hɪr/"
  },
  {
    "id": "34",
    "sentence": "How long have you lived here ?",
    "chinese": "你在这里住了多久？",
    "pronunciation": "/haʊ/ /lɔːŋ/ /hæv/ /juː; jʊ/ /lɪvd/ /hɪr/"
  },
  {
    "id": "35",
    "sentence": "For 25 years",
    "chinese": "25年来",
    "pronunciation": "/fɔːr; fər/ /ˈtuː.faɪv/ /jɪrz/"
  },
  {
    "id": "36",
    "sentence": "I love this neighborhood",
    "chinese": "我爱这个社区",
    "pronunciation": "/aɪ/ /lʌv/ /ðɪs/ /ˈneɪbərhʊd/"
  },
  {
    "id": "37",
    "sentence": "For 25 years . I love this neighborhood",
    "chinese": "25年来，我爱这个社区",
    "pronunciation": "/fɔːr; fər/ /ˈtuː.faɪv/ /jɪrz/ /aɪ/ /lʌv/ /ðɪs/ /ˈneɪbərhʊd/"
  },
  {
    "id": "38",
    "sentence": "That sounds perfect",
    "chinese": "听起来很完美",
    "pronunciation": "/ðæt/ /saʊndz/ /ˈpɜːrfɪkt/"
  },
  {
    "id": "39",
    "sentence": "to us",
    "chinese": "对我们来说",
    "pronunciation": "/tuː; tə/ /ʌs/"
  },
  {
    "id": "40",
    "sentence": "That sounds perfect to us",
    "chinese": "这对我们来说听起来很完美",
    "pronunciation": "/ðæt/ /saʊndz/ /ˈpɜːrfɪkt/ /tuː; tə/ /ʌs/"
  },
];
