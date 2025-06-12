export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "I'd like to open",
    "chinese": "我想开",
    "pronunciation": "/aɪd/ /laɪk/ /tuː; tə/ /ˈoʊpən/"
  },
  {
    "id": "2",
    "sentence": "another account",
    "chinese": "另一个账户",
    "pronunciation": "/əˈnʌðər/ /əˈkaʊnt/"
  },
  {
    "id": "3",
    "sentence": "I'd like to open another account",
    "chinese": "我想再开一个账户",
    "pronunciation": "/aɪd/ /laɪk/ /tuː; tə/ /ˈoʊpən/ /əˈnʌðər/ /əˈkaʊnt/"
  },
  {
    "id": "4",
    "sentence": "That's great",
    "chinese": "太好了",
    "pronunciation": "/ðæts/ /ɡreɪt/"
  },
  {
    "id": "5",
    "sentence": "What kind of account",
    "chinese": "哪种类型的账户",
    "pronunciation": "/wʌt/ /kaɪnd/ /ʌv/ /əˈkaʊnt/"
  },
  {
    "id": "6",
    "sentence": "That's great . What kind of account",
    "chinese": "太好了您想开立哪种类型的账户？",
    "pronunciation": "/ðæts/ /ɡreɪt/ /wʌt/ /kaɪnd/ /ʌv/ /əˈkaʊnt/"
  },
  {
    "id": "7",
    "sentence": "would you like to open",
    "chinese": "您想开立",
    "pronunciation": "/wʊd/ /juː; jʊ/ /laɪk/ /tuː; tə/ /ˈoʊpən/"
  },
  {
    "id": "8",
    "sentence": "That's great . What kind of account would you like to open ?",
    "chinese": "太好了您想开立哪种类型的账户？",
    "pronunciation": "/ðæts/ /ɡreɪt/ /wʌt/ /kaɪnd/ /ʌv/ /əˈkaʊnt/ /wʊd/ /juː; jʊ/ /laɪk/ /tuː; tə/ /ˈoʊpən/"
  },
  {
    "id": "9",
    "sentence": "I already have",
    "chinese": "我已经有了",
    "pronunciation": "/aɪ/ /ɔːlˈredi/ /hæv/"
  },
  {
    "id": "10",
    "sentence": "a checking account",
    "chinese": "支票账户",
    "pronunciation": "/ə; eɪ/ /ˈtʃekɪŋ/ /əˈkaʊnt/"
  },
  {
    "id": "11",
    "sentence": "I already have a checking account",
    "chinese": "我已经有一个支票账户了",
    "pronunciation": "/aɪ/ /ɔːlˈredi/ /hæv/ /ə; eɪ/ /ˈtʃekɪŋ/ /əˈkaʊnt/"
  },
  {
    "id": "12",
    "sentence": "here",
    "chinese": "这里",
    "pronunciation": "/hɪr/"
  },
  {
    "id": "13",
    "sentence": "I already have a checking account here",
    "chinese": "我在这里已经有一个支票账户了",
    "pronunciation": "/aɪ/ /ɔːlˈredi/ /hæv/ /ə; eɪ/ /ˈtʃekɪŋ/ /əˈkaʊnt/ /hɪr/"
  },
  {
    "id": "14",
    "sentence": "So would you like",
    "chinese": "那么，您想",
    "pronunciation": "/soʊ/ /wʊd/ /juː; jʊ/ /laɪk/"
  },
  {
    "id": "15",
    "sentence": "to open a savings account",
    "chinese": "开一个储蓄账户",
    "pronunciation": "/tuː; tə/ /ˈoʊpən/ /ə; eɪ/ /ˈseɪvɪŋz/ /əˈkaʊnt/"
  },
  {
    "id": "16",
    "sentence": "So would you like to open a savings account ?",
    "chinese": "那么，您想开一个储蓄账户吗？",
    "pronunciation": "/soʊ/ /wʊd/ /juː; jʊ/ /laɪk/ /tuː; tə/ /ˈoʊpən/ /ə; eɪ/ /ˈseɪvɪŋz/ /əˈkaʊnt/"
  },
  {
    "id": "17",
    "sentence": "Will I earn interest",
    "chinese": "我会赚取利息吗？",
    "pronunciation": "/wɪl/ /aɪ/ /ɝn/ /ˈɪntrɛst/"
  },
  {
    "id": "18",
    "sentence": "on a savings account",
    "chinese": "在储蓄账户上",
    "pronunciation": "/ɑːn/ /ə; eɪ/ /ˈseɪvɪŋz/ /əˈkaʊnt/"
  },
  {
    "id": "19",
    "sentence": "Will I earn interest on a savings account ?",
    "chinese": "储蓄账户会有利息吗？",
    "pronunciation": "/wɪl/ /aɪ/ /ɝn/ /ˈɪntrɛst/ /ɑːn/ /ə; eɪ/ /ˈseɪvɪŋz/ /əˈkaʊnt/"
  },
  {
    "id": "20",
    "sentence": "As long as you make regular deposits",
    "chinese": "只要你定期存款",
    "pronunciation": "/æz; əz/ /lɔːŋ/ /æz; əz/ /juː; jʊ/ /meɪk/ /ˈreɡjələr/ /dɪˈpɑːzɪts/"
  },
  {
    "id": "21",
    "sentence": "and do not make withdrawals",
    "chinese": "并且不取款",
    "pronunciation": "/ænd; ənd/ /duː; də/ /nɑːt/ /meɪk/ /wɪðˈdrɔːəlz/"
  },
  {
    "id": "22",
    "sentence": "As long as you make regular deposits and do not make withdrawals",
    "chinese": "只要你定期存款并且不取款",
    "pronunciation": "/æz; əz/ /lɔːŋ/ /æz; əz/ /juː; jʊ/ /meɪk/ /ˈreɡjələr/ /dɪˈpɑːzɪts/ /ænd; ənd/ /duː; də/ /nɑːt/ /meɪk/ /wɪðˈdrɔːəlz/"
  },
  {
    "id": "23",
    "sentence": "What is",
    "chinese": "是什么",
    "pronunciation": "/wʌt/ /ɪz/"
  },
  {
    "id": "24",
    "sentence": "an interest rate",
    "chinese": "利率是什么？",
    "pronunciation": "/æn; ən/ /ˈɪntrɛst/ /reɪt/"
  },
  {
    "id": "25",
    "sentence": "What is an interest rate ?",
    "chinese": "什么是利率？",
    "pronunciation": "/wʌt/ /ɪz/ /æn; ən/ /ˈɪntrɛst/ /reɪt/"
  },
  {
    "id": "26",
    "sentence": "You will earn",
    "chinese": "您将获得",
    "pronunciation": "/juː; jʊ/ /wɪl/ /ɝn/"
  },
  {
    "id": "27",
    "sentence": "1% interest",
    "chinese": "1%的利息",
    "pronunciation": "/wʌn/ /ˈɪntrɛst/"
  },
  {
    "id": "28",
    "sentence": "You will earn 1% interest",
    "chinese": "您将获得1%的利息",
    "pronunciation": "/juː; jʊ/ /wɪl/ /ɝn/ /wʌn/ /ˈɪntrɛst/"
  },
  {
    "id": "29",
    "sentence": "per month",
    "chinese": "每月",
    "pronunciation": "/pər/ /mʌnθ/"
  },
  {
    "id": "30",
    "sentence": "You will earn 1% interest per month",
    "chinese": "您将每月获得1%的利息",
    "pronunciation": "/juː; jʊ/ /wɪl/ /ɝn/ /wʌn/ /ˈɪntrɛst/ /pər/ /mʌnθ/"
  },
  {
    "id": "31",
    "sentence": "Can I transfer money",
    "chinese": "我可以转账吗？",
    "pronunciation": "/kæn/ /aɪ/ /trænsˈfɜːr/ /ˈmʌni/"
  },
  {
    "id": "32",
    "sentence": "from my checking account",
    "chinese": "从我的支票账户",
    "pronunciation": "/frʌm/ /maɪ/ /ˈtʃekɪŋ/ /əˈkaʊnt/"
  },
  {
    "id": "33",
    "sentence": "Can I transfer money from my checking account ?",
    "chinese": "我可以从我的支票账户转账吗？",
    "pronunciation": "/kæn/ /aɪ/ /trænsˈfɜːr/ /ˈmʌni/ /frʌm/ /maɪ/ /ˈtʃekɪŋ/ /əˈkaʊnt/"
  },
  {
    "id": "34",
    "sentence": "Of course you can",
    "chinese": "当然可以",
    "pronunciation": "/ʌv/ /kɔːrs/ /juː; jʊ/ /kæn/"
  },
  {
    "id": "35",
    "sentence": "We can even set it up",
    "chinese": "我们甚至可以设置它",
    "pronunciation": "/wiː; wi/ /kæn/ /ˈiː.vən/ /set/ /ɪt/ /ʌp/"
  },
  {
    "id": "36",
    "sentence": "Of course you can . We can even set it up",
    "chinese": "当然可以我们甚至可以设置它",
    "pronunciation": "/ʌv/ /kɔːrs/ /juː; jʊ/ /kæn/ /wiː; wi/ /kæn/ /ˈiː.vən/ /set/ /ɪt/ /ʌp/"
  },
  {
    "id": "37",
    "sentence": "so it happens automatically",
    "chinese": "让它自动发生",
    "pronunciation": "/soʊ/ /ɪt/ /ˈhæpənz/ /ˌɔːtəˈmætɪkli/"
  },
  {
    "id": "38",
    "sentence": "Of course you can . We can even set it up so it happens automatically",
    "chinese": "当然可以我们甚至可以设置让它自动发生。",
    "pronunciation": "/ʌv/ /kɔːrs/ /juː; jʊ/ /kæn/ /wiː; wi/ /kæn/ /ˈiː.vən/ /set/ /ɪt/ /ʌp/ /soʊ/ /ɪt/ /ˈhæpənz/ /ˌɔːtəˈmætɪkli/"
  },
  {
    "id": "39",
    "sentence": "Are there any fees",
    "chinese": "有任何费用吗？",
    "pronunciation": "/ɑr/ /ðer; ðər/ /ˈeni/ /fiːz/"
  },
  {
    "id": "40",
    "sentence": "There is a one time",
    "chinese": "有一次",
    "pronunciation": "/ðer; ðər/ /ɪz/ /ə; eɪ/ /wʌn/ /taɪm/"
  },
  {
    "id": "41",
    "sentence": "$10 service fee",
    "chinese": "10美元的服务费",
    "pronunciation": "/ten/ /ˈsɜːrvɪs/ /fiː/"
  },
  {
    "id": "42",
    "sentence": "There is a one time $10 service fee",
    "chinese": "一次性收取10美元的服务费",
    "pronunciation": "/ðer; ðər/ /ɪz/ /ə; eɪ/ /wʌn/ /taɪm/ /ten/ /ˈsɜːrvɪs/ /fiː/"
  },
];
