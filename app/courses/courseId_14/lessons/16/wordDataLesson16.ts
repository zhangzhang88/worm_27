export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "I want to contest",
    "chinese": "我想提出异议",
    "pronunciation": "/aɪ/ /wɑːnt/ /tuː; tə/ /ˈkɑːntest/"
  },
  {
    "id": "2",
    "sentence": "some charges",
    "chinese": "一些费用",
    "pronunciation": "/sʌm; səm/ /ˈtʃɑrdʒɪz/"
  },
  {
    "id": "3",
    "sentence": "I want to contest some charges",
    "chinese": "我想对一些费用提出异议",
    "pronunciation": "/aɪ/ /wɑːnt/ /tuː; tə/ /ˈkɑːntest/ /sʌm; səm/ /ˈtʃɑrdʒɪz/"
  },
  {
    "id": "4",
    "sentence": "I see",
    "chinese": "我看到",
    "pronunciation": "/aɪ/ /siː/"
  },
  {
    "id": "5",
    "sentence": "I want to contest some charges I see",
    "chinese": "我想对看到的一些费用提出异议",
    "pronunciation": "/aɪ/ /wɑːnt/ /tuː; tə/ /ˈkɑːntest/ /sʌm; səm/ /ˈtʃɑrdʒɪz/ /aɪ/ /siː/"
  },
  {
    "id": "6",
    "sentence": "on my account",
    "chinese": "在我的账户上",
    "pronunciation": "/ɑːn/ /maɪ/ /əˈkaʊnt/"
  },
  {
    "id": "7",
    "sentence": "I want to contest some charges I see on my account",
    "chinese": "我想对账户上显示的一些费用提出异议",
    "pronunciation": "/aɪ/ /wɑːnt/ /tuː; tə/ /ˈkɑːntest/ /sʌm; səm/ /ˈtʃɑrdʒɪz/ /aɪ/ /siː/ /ɑːn/ /maɪ/ /əˈkaʊnt/"
  },
  {
    "id": "8",
    "sentence": "Do you think",
    "chinese": "你认为",
    "pronunciation": "/duː; də/ /juː; jʊ/ /θɪŋk/"
  },
  {
    "id": "9",
    "sentence": "your account has been compromised",
    "chinese": "你的账户被入侵了吗？",
    "pronunciation": "/jʊr; jər/ /əˈkaʊnt/ /hæz; həz/ /bɪn/ /ˈkrɑːmprəmaɪzd/"
  },
  {
    "id": "10",
    "sentence": "Do you think your account has been compromised ?",
    "chinese": "你认为你的账户被入侵了吗？",
    "pronunciation": "/duː; də/ /juː; jʊ/ /θɪŋk/ /jʊr; jər/ /əˈkaʊnt/ /hæz; həz/ /bɪn/ /ˈkrɑːmprəmaɪzd/"
  },
  {
    "id": "11",
    "sentence": "I think",
    "chinese": "我认为",
    "pronunciation": "/aɪ/ /θɪŋk/"
  },
  {
    "id": "12",
    "sentence": "I am a victim",
    "chinese": "我是受害者",
    "pronunciation": "/aɪ/ /æm; əm/ /ə; eɪ/ /ˈvɪktɪm/"
  },
  {
    "id": "13",
    "sentence": "I think I am a victim",
    "chinese": "我认为自己是受害者",
    "pronunciation": "/aɪ/ /θɪŋk/ /aɪ/ /æm; əm/ /ə; eɪ/ /ˈvɪktɪm/"
  },
  {
    "id": "14",
    "sentence": "of identity theft",
    "chinese": "身份盗窃",
    "pronunciation": "/ʌv/ /aɪˈdentəti/ /θeft/"
  },
  {
    "id": "15",
    "sentence": "I think I am a victim of identity theft",
    "chinese": "我认为自己是身份盗窃的受害者",
    "pronunciation": "/aɪ/ /θɪŋk/ /aɪ/ /æm; əm/ /ə; eɪ/ /ˈvɪktɪm/ /ʌv/ /aɪˈdentəti/ /θeft/"
  },
  {
    "id": "16",
    "sentence": "What proof",
    "chinese": "什么证据",
    "pronunciation": "/wʌt/ /pruːf/"
  },
  {
    "id": "17",
    "sentence": "do you have",
    "chinese": "你有吗？",
    "pronunciation": "/duː; də/ /juː; jʊ/ /hæv/"
  },
  {
    "id": "18",
    "sentence": "What proof do you have ?",
    "chinese": "你有什么证据？",
    "pronunciation": "/wʌt/ /pruːf/ /duː; də/ /juː; jʊ/ /hæv/"
  },
  {
    "id": "19",
    "sentence": "I did not buy anything",
    "chinese": "我没有买任何东西",
    "pronunciation": "/aɪ/ /dɪd/ /nɑːt/ /baɪ/ /ˈɛnɪθɪŋ/"
  },
  {
    "id": "20",
    "sentence": "in Miami",
    "chinese": "在迈阿密",
    "pronunciation": "/ɪn/ /maɪˈæmi/"
  },
  {
    "id": "21",
    "sentence": "I did not buy anything in Miami",
    "chinese": "我没有在迈阿密买任何东西",
    "pronunciation": "/aɪ/ /dɪd/ /nɑːt/ /baɪ/ /ˈɛnɪθɪŋ/ /ɪn/ /maɪˈæmi/"
  },
  {
    "id": "22",
    "sentence": "last week",
    "chinese": "上周",
    "pronunciation": "/læst/ /wik/"
  },
  {
    "id": "23",
    "sentence": "I did not buy anything in Miami last week",
    "chinese": "我上周在迈阿密没有买任何东西",
    "pronunciation": "/aɪ/ /dɪd/ /nɑːt/ /baɪ/ /ˈɛnɪθɪŋ/ /ɪn/ /maɪˈæmi/ /læst/ /wik/"
  },
  {
    "id": "24",
    "sentence": "How can we be sure",
    "chinese": "我们怎么能确定呢？",
    "pronunciation": "/haʊ/ /kæn/ /wiː; wi/ /biː/ /ʃʊr/"
  },
  {
    "id": "25",
    "sentence": "I work here",
    "chinese": "我在这里工作",
    "pronunciation": "/aɪ/ /wɜrk/ /hɪr/"
  },
  {
    "id": "26",
    "sentence": "in New Jersey",
    "chinese": "在新泽西",
    "pronunciation": "/ɪn/ /nuː/ /ˈdʒɜːrzi/"
  },
  {
    "id": "27",
    "sentence": "I work here in New Jersey",
    "chinese": "我在新泽西工作",
    "pronunciation": "/aɪ/ /wɜrk/ /hɪr/ /ɪn/ /nuː/ /ˈdʒɜːrzi/"
  },
  {
    "id": "28",
    "sentence": "We will open",
    "chinese": "我们将开始",
    "pronunciation": "/wiː; wi/ /wɪl/ /ˈoʊpən/"
  },
  {
    "id": "29",
    "sentence": "an investigation",
    "chinese": "调查",
    "pronunciation": "/æn; ən/ /ˌɪn.vɛstɪˈɡeɪʃ.ən/"
  },
  {
    "id": "30",
    "sentence": "We will open an investigation",
    "chinese": "我们将展开调查",
    "pronunciation": "/wiː; wi/ /wɪl/ /ˈoʊpən/ /æn; ən/ /ˌɪn.vɛstɪˈɡeɪʃ.ən/"
  },
  {
    "id": "31",
    "sentence": "How long",
    "chinese": "多长时间",
    "pronunciation": "/haʊ/ /lɔːŋ/"
  },
  {
    "id": "32",
    "sentence": "will that take",
    "chinese": "那需要",
    "pronunciation": "/wɪl/ /ðæt/ /teɪk/"
  },
  {
    "id": "33",
    "sentence": "How long will that take ?",
    "chinese": "那需要多长时间？",
    "pronunciation": "/haʊ/ /lɔːŋ/ /wɪl/ /ðæt/ /teɪk/"
  },
  {
    "id": "34",
    "sentence": "The investigation can take",
    "chinese": "调查可能需要",
    "pronunciation": "/ðə/ /ˌɪn.vɛstɪˈɡeɪʃ.ən/ /kæn/ /teɪk/"
  },
  {
    "id": "35",
    "sentence": "up to six weeks",
    "chinese": "长达六周",
    "pronunciation": "/ʌp/ /tuː; tə/ /sɪks/ /wiːks/"
  },
  {
    "id": "36",
    "sentence": "The investigation can take up to six weeks",
    "chinese": "调查可能需要长达六周的时间",
    "pronunciation": "/ðə/ /ˌɪn.vɛstɪˈɡeɪʃ.ən/ /kæn/ /teɪk/ /ʌp/ /tuː; tə/ /sɪks/ /wiːks/"
  },
  {
    "id": "37",
    "sentence": "I need my money",
    "chinese": "我需要我的钱",
    "pronunciation": "/aɪ/ /niːd/ /maɪ/ /ˈmʌni/"
  },
  {
    "id": "38",
    "sentence": "now",
    "chinese": "现在",
    "pronunciation": "/naʊ/"
  },
  {
    "id": "39",
    "sentence": "I need my money now",
    "chinese": "我现在需要我的钱",
    "pronunciation": "/aɪ/ /niːd/ /maɪ/ /ˈmʌni/ /naʊ/"
  },
  {
    "id": "40",
    "sentence": "though",
    "chinese": "不过",
    "pronunciation": "/ðoʊ/"
  },
  {
    "id": "41",
    "sentence": "I need my money now though",
    "chinese": "我现在就需要我的钱",
    "pronunciation": "/aɪ/ /niːd/ /maɪ/ /ˈmʌni/ /naʊ/ /ðoʊ/"
  },
  {
    "id": "42",
    "sentence": "The charges",
    "chinese": "费用",
    "pronunciation": "/ðə/ /ˈtʃɑrdʒɪz/"
  },
  {
    "id": "43",
    "sentence": "you contest",
    "chinese": "您争议",
    "pronunciation": "/juː; jʊ/ /ˈkɑːntest/"
  },
  {
    "id": "44",
    "sentence": "The charges you contest",
    "chinese": "您争议的费用",
    "pronunciation": "/ðə/ /ˈtʃɑrdʒɪz/ /juː; jʊ/ /ˈkɑːntest/"
  },
  {
    "id": "45",
    "sentence": "will be frozen",
    "chinese": "将被冻结",
    "pronunciation": "/wɪl/ /biː/ /ˈfroʊzn/"
  },
  {
    "id": "46",
    "sentence": "The charges you contest will be frozen",
    "chinese": "您争议的费用将被冻结",
    "pronunciation": "/ðə/ /ˈtʃɑrdʒɪz/ /juː; jʊ/ /ˈkɑːntest/ /wɪl/ /biː/ /ˈfroʊzn/"
  },
];
