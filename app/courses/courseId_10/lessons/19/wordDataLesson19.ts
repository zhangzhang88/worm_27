export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hello",
    "chinese": "你好",
    "pronunciation": "/həˈloʊ/"
  },
  {
    "id": "2",
    "sentence": "our next story is about Kyle",
    "chinese": "我们的下一个故事是关于凯尔的",
    "pronunciation": "/aʊr/ /nekst/ /ˈstɔːri/ /ɪz/ /əˈbaʊt/ /kaɪl/"
  },
  {
    "id": "3",
    "sentence": "Hello , our next story is about Kyle",
    "chinese": "你好，我们的下一个故事是关于凯尔的",
    "pronunciation": "/həˈloʊ/ /aʊr/ /nekst/ /ˈstɔːri/ /ɪz/ /əˈbaʊt/ /kaɪl/"
  },
  {
    "id": "4",
    "sentence": "who's taking a break",
    "chinese": "正在休息",
    "pronunciation": "/huz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/"
  },
  {
    "id": "5",
    "sentence": "Hello , our next story is about Kyle who's taking a break",
    "chinese": "你好，我们的下一个故事是关于凯尔的，他正在休息",
    "pronunciation": "/həˈloʊ/ /aʊr/ /nekst/ /ˈstɔːri/ /ɪz/ /əˈbaʊt/ /kaɪl/ /huz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/"
  },
  {
    "id": "6",
    "sentence": "at school",
    "chinese": "在学校",
    "pronunciation": "/æt; ət/ /skuːl/"
  },
  {
    "id": "7",
    "sentence": "Hello , our next story is about Kyle who's taking a break at school",
    "chinese": "你好，我们的下一个故事是关于凯尔的，他正在学校休息",
    "pronunciation": "/həˈloʊ/ /aʊr/ /nekst/ /ˈstɔːri/ /ɪz/ /əˈbaʊt/ /kaɪl/ /huz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/ /æt; ət/ /skuːl/"
  },
  {
    "id": "8",
    "sentence": "Listen to the story",
    "chinese": "听故事",
    "pronunciation": "/ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "9",
    "sentence": "about Kyle",
    "chinese": "关于凯尔",
    "pronunciation": "/əˈbaʊt/ /kaɪl/"
  },
  {
    "id": "10",
    "sentence": "Listen to the story about Kyle",
    "chinese": "听关于凯尔的故事",
    "pronunciation": "/ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /kaɪl/"
  },
  {
    "id": "11",
    "sentence": "then listen to Kyle",
    "chinese": "然后听凯尔",
    "pronunciation": "/ðen/ /ˈlɪs(ə)n/ /tuː; tə/ /kaɪl/"
  },
  {
    "id": "12",
    "sentence": "Listen to the story about Kyle , then listen to Kyle",
    "chinese": "听关于凯尔的故事，然后听凯尔",
    "pronunciation": "/ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /kaɪl/ /ðen/ /ˈlɪs(ə)n/ /tuː; tə/ /kaɪl/"
  },
  {
    "id": "13",
    "sentence": "telling his own story",
    "chinese": "讲述他自己的故事",
    "pronunciation": "/ˈtelɪŋ/ /hɪz; ɪz/ /oʊn/ /ˈstɔːri/"
  },
  {
    "id": "14",
    "sentence": "Listen to the story about Kyle , then listen to Kyle telling his own story",
    "chinese": "听关于凯尔的故事，然后听凯尔讲述他自己的故事",
    "pronunciation": "/ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /kaɪl/ /ðen/ /ˈlɪs(ə)n/ /tuː; tə/ /kaɪl/ /ˈtelɪŋ/ /hɪz; ɪz/ /oʊn/ /ˈstɔːri/"
  },
  {
    "id": "15",
    "sentence": "and then see",
    "chinese": "然后看看",
    "pronunciation": "/ænd; ənd/ /ðen/ /siː/"
  },
  {
    "id": "16",
    "sentence": "Listen to the story about Kyle , then listen to Kyle telling his own story and then see",
    "chinese": "听关于凯尔的故事，然后听凯尔讲述他自己的故事，然后看看",
    "pronunciation": "/ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /kaɪl/ /ðen/ /ˈlɪs(ə)n/ /tuː; tə/ /kaɪl/ /ˈtelɪŋ/ /hɪz; ɪz/ /oʊn/ /ˈstɔːri/ /ænd; ənd/ /ðen/ /siː/"
  },
  {
    "id": "17",
    "sentence": "if you can answer the questions",
    "chinese": "如果你能回答这些问题",
    "pronunciation": "/ɪf/ /juː; jʊ/ /kæn/ /ˈænsər/ /ðə/ /ˈkwestʃənz/"
  },
  {
    "id": "18",
    "sentence": "Listen to the story about Kyle , then listen to Kyle telling his own story and then see if you can answer the questions",
    "chinese": "听完关于凯尔的故事后，再听凯尔讲述他自己的故事，然后看看你是否能回答这些问题",
    "pronunciation": "/ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /kaɪl/ /ðen/ /ˈlɪs(ə)n/ /tuː; tə/ /kaɪl/ /ˈtelɪŋ/ /hɪz; ɪz/ /oʊn/ /ˈstɔːri/ /ænd; ənd/ /ðen/ /siː/ /ɪf/ /juː; jʊ/ /kæn/ /ˈænsər/ /ðə/ /ˈkwestʃənz/"
  },
  {
    "id": "19",
    "sentence": "Kyle is taking a break",
    "chinese": "凯尔正在休息",
    "pronunciation": "/kaɪl/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/"
  },
  {
    "id": "20",
    "sentence": "at school",
    "chinese": "在学校",
    "pronunciation": "/æt; ət/ /skuːl/"
  },
  {
    "id": "21",
    "sentence": "Kyle is taking a break at school",
    "chinese": "凯尔正在学校休息",
    "pronunciation": "/kaɪl/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/ /æt; ət/ /skuːl/"
  },
  {
    "id": "22",
    "sentence": "It's twelve o'clock",
    "chinese": "现在是十二点",
    "pronunciation": "/ɪts/ /twelv/ /əˈklɑːk/"
  },
  {
    "id": "23",
    "sentence": "and it's time for lunch",
    "chinese": "该吃午饭了",
    "pronunciation": "/ænd; ənd/ /ɪts/ /taɪm/ /fɔːr; fər/ /lʌnʧ/"
  },
  {
    "id": "24",
    "sentence": "It's twelve o'clock and it's time for lunch",
    "chinese": "现在是十二点，该吃午饭了",
    "pronunciation": "/ɪts/ /twelv/ /əˈklɑːk/ /ænd; ənd/ /ɪts/ /taɪm/ /fɔːr; fər/ /lʌnʧ/"
  },
  {
    "id": "25",
    "sentence": "Kyle doesn't have a lunch",
    "chinese": "凯尔没有带午餐",
    "pronunciation": "/kaɪl/ /ˈdʌznt/ /hæv/ /ə; eɪ/ /lʌnʧ/"
  },
  {
    "id": "26",
    "sentence": "from home",
    "chinese": "从家里",
    "pronunciation": "/frʌm/ /hoʊm/"
  },
  {
    "id": "27",
    "sentence": "Kyle doesn't have a lunch from home",
    "chinese": "凯尔没有从家里带午餐",
    "pronunciation": "/kaɪl/ /ˈdʌznt/ /hæv/ /ə; eɪ/ /lʌnʧ/ /frʌm/ /hoʊm/"
  },
  {
    "id": "28",
    "sentence": "He has to buy his lunch",
    "chinese": "他不得不买午餐",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /baɪ/ /hɪz; ɪz/ /lʌnʧ/"
  },
  {
    "id": "29",
    "sentence": "at school",
    "chinese": "在学校",
    "pronunciation": "/æt; ət/ /skuːl/"
  },
  {
    "id": "30",
    "sentence": "He has to buy his lunch at school",
    "chinese": "他不得不在学校买午餐",
    "pronunciation": "/hiː/ /hæz; həz/ /tuː; tə/ /baɪ/ /hɪz; ɪz/ /lʌnʧ/ /æt; ət/ /skuːl/"
  },
  {
    "id": "31",
    "sentence": "He goes to the cafeteria",
    "chinese": "他去自助餐厅",
    "pronunciation": "/hiː/ /ɡoʊz/ /tuː; tə/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "32",
    "sentence": "He sees",
    "chinese": "他看到",
    "pronunciation": "/hiː/ /siːz/"
  },
  {
    "id": "33",
    "sentence": "French fries",
    "chinese": "薯条",
    "pronunciation": "/frentʃ/ /fraɪz/"
  },
  {
    "id": "34",
    "sentence": "He sees French fries",
    "chinese": "他看到薯条",
    "pronunciation": "/hiː/ /siːz/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "35",
    "sentence": "and a salad",
    "chinese": "和沙拉",
    "pronunciation": "/ænd; ənd/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "36",
    "sentence": "He sees French fries , and a salad",
    "chinese": "他看到薯条和沙拉",
    "pronunciation": "/hiː/ /siːz/ /frentʃ/ /fraɪz/ /ænd; ənd/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "37",
    "sentence": "His Mom wants him",
    "chinese": "他妈妈想让他",
    "pronunciation": "/hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/"
  },
  {
    "id": "38",
    "sentence": "to eat the salad",
    "chinese": "吃沙拉",
    "pronunciation": "/tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "39",
    "sentence": "His Mom wants him to eat the salad",
    "chinese": "他妈妈想让他吃沙拉",
    "pronunciation": "/hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/ /tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "40",
    "sentence": "But Kyle wants to eat",
    "chinese": "但是凯尔想吃",
    "pronunciation": "/bʌt/ /kaɪl/ /ˈwɒnts/ /tuː; tə/ /iːt/"
  },
  {
    "id": "41",
    "sentence": "the French fries",
    "chinese": "薯条",
    "pronunciation": "/ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "42",
    "sentence": "But Kyle wants to eat the French fries",
    "chinese": "但是凯尔想吃薯条",
    "pronunciation": "/bʌt/ /kaɪl/ /ˈwɒnts/ /tuː; tə/ /iːt/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "43",
    "sentence": "He thinks",
    "chinese": "他思考",
    "pronunciation": "/hiː/ /θɪŋks/"
  },
  {
    "id": "44",
    "sentence": "for a minute",
    "chinese": "一会儿",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /ˈmɪnɪt/"
  },
  {
    "id": "45",
    "sentence": "He thinks for a minute",
    "chinese": "他思考了一会儿",
    "pronunciation": "/hiː/ /θɪŋks/ /fɔːr; fər/ /ə; eɪ/ /ˈmɪnɪt/"
  },
  {
    "id": "46",
    "sentence": "Then",
    "chinese": "然后",
    "pronunciation": "/ðen/"
  },
  {
    "id": "47",
    "sentence": "he buys",
    "chinese": "他买了",
    "pronunciation": "/hiː/ /baɪz/"
  },
  {
    "id": "48",
    "sentence": "Then , he buys",
    "chinese": "然后，他买了",
    "pronunciation": "/ðen/ /hiː/ /baɪz/"
  },
  {
    "id": "49",
    "sentence": "and eats",
    "chinese": "并吃了起来",
    "pronunciation": "/ænd; ənd/ /its/"
  },
  {
    "id": "50",
    "sentence": "Then , he buys and eats",
    "chinese": "然后，他买了并吃了",
    "pronunciation": "/ðen/ /hiː/ /baɪz/ /ænd; ənd/ /its/"
  },
  {
    "id": "51",
    "sentence": "the French fries",
    "chinese": "薯条",
    "pronunciation": "/ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "52",
    "sentence": "Then , he buys and eats the French fries",
    "chinese": "然后，他买了薯条并吃了起来",
    "pronunciation": "/ðen/ /hiː/ /baɪz/ /ænd; ənd/ /its/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "53",
    "sentence": "Now let's hear",
    "chinese": "现在让我们听听",
    "pronunciation": "/naʊ/ /lets/ /hɪr/"
  },
  {
    "id": "54",
    "sentence": "Kyle tell the story",
    "chinese": "凯尔讲述这个故事",
    "pronunciation": "/kaɪl/ /tel/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "55",
    "sentence": "Now let's hear Kyle tell the story",
    "chinese": "现在让我们听听凯尔讲述这个故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /kaɪl/ /tel/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "56",
    "sentence": "I am taking a break",
    "chinese": "我正在休息",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/"
  },
  {
    "id": "57",
    "sentence": "at school",
    "chinese": "在学校",
    "pronunciation": "/æt; ət/ /skuːl/"
  },
  {
    "id": "58",
    "sentence": "I am taking a break at school",
    "chinese": "我正在学校休息",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/ /æt; ət/ /skuːl/"
  },
  {
    "id": "59",
    "sentence": "It's twelve o'clock",
    "chinese": "现在是十二点",
    "pronunciation": "/ɪts/ /twelv/ /əˈklɑːk/"
  },
  {
    "id": "60",
    "sentence": "and it's time for lunch",
    "chinese": "该吃午饭了",
    "pronunciation": "/ænd; ənd/ /ɪts/ /taɪm/ /fɔːr; fər/ /lʌnʧ/"
  },
  {
    "id": "61",
    "sentence": "It's twelve o'clock and it's time for lunch",
    "chinese": "现在是十二点，该吃午饭了",
    "pronunciation": "/ɪts/ /twelv/ /əˈklɑːk/ /ænd; ənd/ /ɪts/ /taɪm/ /fɔːr; fər/ /lʌnʧ/"
  },
  {
    "id": "62",
    "sentence": "I don't have a lunch",
    "chinese": "我没有午餐",
    "pronunciation": "/aɪ/ /doʊnt/ /hæv/ /ə; eɪ/ /lʌnʧ/"
  },
  {
    "id": "63",
    "sentence": "from home",
    "chinese": "从家里",
    "pronunciation": "/frʌm/ /hoʊm/"
  },
  {
    "id": "64",
    "sentence": "I don't have a lunch from home",
    "chinese": "我没有从家里带午餐",
    "pronunciation": "/aɪ/ /doʊnt/ /hæv/ /ə; eɪ/ /lʌnʧ/ /frʌm/ /hoʊm/"
  },
  {
    "id": "65",
    "sentence": "I have to buy a lunch",
    "chinese": "我得买午餐",
    "pronunciation": "/aɪ/ /hæv/ /tuː; tə/ /baɪ/ /ə; eɪ/ /lʌnʧ/"
  },
  {
    "id": "66",
    "sentence": "at school",
    "chinese": "在学校",
    "pronunciation": "/æt; ət/ /skuːl/"
  },
  {
    "id": "67",
    "sentence": "I have to buy a lunch at school",
    "chinese": "我得在学校买午餐",
    "pronunciation": "/aɪ/ /hæv/ /tuː; tə/ /baɪ/ /ə; eɪ/ /lʌnʧ/ /æt; ət/ /skuːl/"
  },
  {
    "id": "68",
    "sentence": "I go to the cafeteria",
    "chinese": "我去食堂",
    "pronunciation": "/aɪ/ /ɡoʊ/ /tuː; tə/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "69",
    "sentence": "I see French fries",
    "chinese": "我看到薯条",
    "pronunciation": "/aɪ/ /siː/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "70",
    "sentence": "and a salad",
    "chinese": "和沙拉",
    "pronunciation": "/ænd; ənd/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "71",
    "sentence": "I see French fries , and a salad",
    "chinese": "我看到薯条和沙拉",
    "pronunciation": "/aɪ/ /siː/ /frentʃ/ /fraɪz/ /ænd; ənd/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "72",
    "sentence": "My Mom wants me",
    "chinese": "我妈妈想让我",
    "pronunciation": "/maɪ/ /mɑːm/ /ˈwɒnts/ /miː/"
  },
  {
    "id": "73",
    "sentence": "to eat the salad",
    "chinese": "吃沙拉",
    "pronunciation": "/tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "74",
    "sentence": "My Mom wants me to eat the salad",
    "chinese": "我妈妈想让我吃沙拉",
    "pronunciation": "/maɪ/ /mɑːm/ /ˈwɒnts/ /miː/ /tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "75",
    "sentence": "But I want to eat",
    "chinese": "但我想要吃",
    "pronunciation": "/bʌt/ /aɪ/ /wɑːnt/ /tuː; tə/ /iːt/"
  },
  {
    "id": "76",
    "sentence": "the French fries",
    "chinese": "薯条",
    "pronunciation": "/ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "77",
    "sentence": "But I want to eat the French fries",
    "chinese": "但我想要吃薯条",
    "pronunciation": "/bʌt/ /aɪ/ /wɑːnt/ /tuː; tə/ /iːt/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "78",
    "sentence": "I think",
    "chinese": "我想",
    "pronunciation": "/aɪ/ /θɪŋk/"
  },
  {
    "id": "79",
    "sentence": "for a minute",
    "chinese": "一会儿",
    "pronunciation": "/fɔːr; fər/ /ə; eɪ/ /ˈmɪnɪt/"
  },
  {
    "id": "80",
    "sentence": "I think for a minute",
    "chinese": "我想了一会儿",
    "pronunciation": "/aɪ/ /θɪŋk/ /fɔːr; fər/ /ə; eɪ/ /ˈmɪnɪt/"
  },
  {
    "id": "81",
    "sentence": "Then",
    "chinese": "然后",
    "pronunciation": "/ðen/"
  },
  {
    "id": "82",
    "sentence": "I buy",
    "chinese": "我买",
    "pronunciation": "/aɪ/ /baɪ/"
  },
  {
    "id": "83",
    "sentence": "Then , I buy",
    "chinese": "然后，我买",
    "pronunciation": "/ðen/ /aɪ/ /baɪ/"
  },
  {
    "id": "84",
    "sentence": "and eat",
    "chinese": "并吃了",
    "pronunciation": "/ænd; ənd/ /iːt/"
  },
  {
    "id": "85",
    "sentence": "Then , I buy and eat",
    "chinese": "然后，我买来并吃了",
    "pronunciation": "/ðen/ /aɪ/ /baɪ/ /ænd; ənd/ /iːt/"
  },
  {
    "id": "86",
    "sentence": "the French fries",
    "chinese": "薯条",
    "pronunciation": "/ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "87",
    "sentence": "Then , I buy and eat the French fries",
    "chinese": "然后，我买来并吃了薯条",
    "pronunciation": "/ðen/ /aɪ/ /baɪ/ /ænd; ənd/ /iːt/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "88",
    "sentence": "Now let's see",
    "chinese": "现在让我们看看",
    "pronunciation": "/naʊ/ /lets/ /siː/"
  },
  {
    "id": "89",
    "sentence": "if you can answer some of these questions",
    "chinese": "如果你能回答其中的一些问题",
    "pronunciation": "/ɪf/ /juː; jʊ/ /kæn/ /ˈænsər/ /sʌm; səm/ /ʌv/ /ðiːz/ /ˈkwestʃənz/"
  },
  {
    "id": "90",
    "sentence": "Now let's see if you can answer some of these questions",
    "chinese": "现在让我们看看你是否能回答其中的一些问题",
    "pronunciation": "/naʊ/ /lets/ /siː/ /ɪf/ /juː; jʊ/ /kæn/ /ˈænsər/ /sʌm; səm/ /ʌv/ /ðiːz/ /ˈkwestʃənz/"
  },
  {
    "id": "91",
    "sentence": "You don't have to answer",
    "chinese": "你不必回答",
    "pronunciation": "/juː; jʊ/ /doʊnt/ /hæv/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "92",
    "sentence": "you can just listen to my answers",
    "chinese": "你可以只听我的回答",
    "pronunciation": "/juː; jʊ/ /kæn/ /dʒʌst/ /ˈlɪs(ə)n/ /tuː; tə/ /maɪ/ /ˈænsər/"
  },
  {
    "id": "93",
    "sentence": "You don't have to answer , you can just listen to my answers",
    "chinese": "你不必回答，只需听我的回答即可",
    "pronunciation": "/juː; jʊ/ /doʊnt/ /hæv/ /tuː; tə/ /ˈænsər/ /juː; jʊ/ /kæn/ /dʒʌst/ /ˈlɪs(ə)n/ /tuː; tə/ /maɪ/ /ˈænsər/"
  },
  {
    "id": "94",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "95",
    "sentence": "Kyle is taking a break",
    "chinese": "凯尔正在休息",
    "pronunciation": "/kaɪl/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/"
  },
  {
    "id": "96",
    "sentence": "One : Kyle is taking a break",
    "chinese": "凯尔正在休息",
    "pronunciation": "/wʌn/ /kaɪl/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/"
  },
  {
    "id": "97",
    "sentence": "at school",
    "chinese": "在学校",
    "pronunciation": "/æt; ət/ /skuːl/"
  },
  {
    "id": "98",
    "sentence": "One : Kyle is taking a break at school",
    "chinese": "凯尔正在学校休息",
    "pronunciation": "/wʌn/ /kaɪl/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/ /æt; ət/ /skuːl/"
  },
  {
    "id": "99",
    "sentence": "Is Kyle working",
    "chinese": "凯尔在工作吗？",
    "pronunciation": "/ɪz/ /kaɪl/ /ˈwɜrkɪŋ/"
  },
  {
    "id": "100",
    "sentence": "at school",
    "chinese": "在学校",
    "pronunciation": "/æt; ət/ /skuːl/"
  },
  {
    "id": "101",
    "sentence": "Is Kyle working at school ?",
    "chinese": "凯尔在学校工作吗？",
    "pronunciation": "/ɪz/ /kaɪl/ /ˈwɜrkɪŋ/ /æt; ət/ /skuːl/"
  },
  {
    "id": "102",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "103",
    "sentence": "he is not working",
    "chinese": "他没有在工作",
    "pronunciation": "/hiː/ /ɪz/ /nɑːt/ /ˈwɜrkɪŋ/"
  },
  {
    "id": "104",
    "sentence": "No , he is not working",
    "chinese": "不，他现在没有在工作",
    "pronunciation": "/noʊ/ /hiː/ /ɪz/ /nɑːt/ /ˈwɜrkɪŋ/"
  },
  {
    "id": "105",
    "sentence": "He is taking a break",
    "chinese": "他在休息",
    "pronunciation": "/hiː/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/"
  },
  {
    "id": "106",
    "sentence": "at school",
    "chinese": "在学校",
    "pronunciation": "/æt; ət/ /skuːl/"
  },
  {
    "id": "107",
    "sentence": "He is taking a break at school",
    "chinese": "他在学校休息",
    "pronunciation": "/hiː/ /ɪz/ /ˈteɪkɪŋ/ /ə; eɪ/ /breɪk/ /æt; ət/ /skuːl/"
  },
  {
    "id": "108",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "109",
    "sentence": "It's twelve o'clock",
    "chinese": "现在是十二点",
    "pronunciation": "/ɪts/ /twelv/ /əˈklɑːk/"
  },
  {
    "id": "110",
    "sentence": "Two : It's twelve o'clock",
    "chinese": "现在是十二点",
    "pronunciation": "/tuː/ /ɪts/ /twelv/ /əˈklɑːk/"
  },
  {
    "id": "111",
    "sentence": "and it's time for lunch",
    "chinese": "该吃午饭了",
    "pronunciation": "/ænd; ənd/ /ɪts/ /taɪm/ /fɔːr; fər/ /lʌnʧ/"
  },
  {
    "id": "112",
    "sentence": "Two : It's twelve o'clock and it's time for lunch",
    "chinese": "现在是十二点，该吃午饭了",
    "pronunciation": "/tuː/ /ɪts/ /twelv/ /əˈklɑːk/ /ænd; ənd/ /ɪts/ /taɪm/ /fɔːr; fər/ /lʌnʧ/"
  },
  {
    "id": "113",
    "sentence": "Is it lunchtime",
    "chinese": "是午餐时间吗？",
    "pronunciation": "/ɪz/ /ɪt/ /ˈlʌntʃtaɪm/"
  },
  {
    "id": "114",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "115",
    "sentence": "it's lunchtime",
    "chinese": "现在是午餐时间",
    "pronunciation": "/ɪts/ /ˈlʌntʃtaɪm/"
  },
  {
    "id": "116",
    "sentence": "Yes , it's lunchtime",
    "chinese": "是的，现在是午餐时间",
    "pronunciation": "/jes/ /ɪts/ /ˈlʌntʃtaɪm/"
  },
  {
    "id": "117",
    "sentence": "It's twelve",
    "chinese": "现在是十二点",
    "pronunciation": "/ɪts/ /twelv/"
  },
  {
    "id": "118",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "119",
    "sentence": "Kyle does not have a lunch",
    "chinese": "凯尔没有午餐",
    "pronunciation": "/kaɪl/ /dʌz/ /nɑːt/ /hæv/ /ə; eɪ/ /lʌnʧ/"
  },
  {
    "id": "120",
    "sentence": "Three : Kyle does not have a lunch",
    "chinese": "三：凯尔没有午餐",
    "pronunciation": "/θriː/ /kaɪl/ /dʌz/ /nɑːt/ /hæv/ /ə; eɪ/ /lʌnʧ/"
  },
  {
    "id": "121",
    "sentence": "Does Kyle have a lunch",
    "chinese": "凯尔吃午饭了吗？",
    "pronunciation": "/dʌz/ /kaɪl/ /hæv/ /ə; eɪ/ /lʌnʧ/"
  },
  {
    "id": "122",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "123",
    "sentence": "Kyle does not have a lunch",
    "chinese": "凯尔没有午餐",
    "pronunciation": "/kaɪl/ /dʌz/ /nɑːt/ /hæv/ /ə; eɪ/ /lʌnʧ/"
  },
  {
    "id": "124",
    "sentence": "No , Kyle does not have a lunch",
    "chinese": "不，凯尔没有午餐",
    "pronunciation": "/noʊ/ /kaɪl/ /dʌz/ /nɑːt/ /hæv/ /ə; eɪ/ /lʌnʧ/"
  },
  {
    "id": "125",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "126",
    "sentence": "Kyle goes to the cafeteria",
    "chinese": "凯尔去自助餐厅",
    "pronunciation": "/kaɪl/ /ɡoʊz/ /tuː; tə/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "127",
    "sentence": "Four : Kyle goes to the cafeteria",
    "chinese": "四：凯尔去自助餐厅",
    "pronunciation": "/fɔr/ /kaɪl/ /ɡoʊz/ /tuː; tə/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "128",
    "sentence": "Does Kyle go",
    "chinese": "凯尔去吗？",
    "pronunciation": "/dʌz/ /kaɪl/ /ɡoʊ/"
  },
  {
    "id": "129",
    "sentence": "to a restaurant",
    "chinese": "去餐厅",
    "pronunciation": "/tuː; tə/ /ə; eɪ/ /ˈrestrɑːnt/"
  },
  {
    "id": "130",
    "sentence": "Does Kyle go to a restaurant ?",
    "chinese": "凯尔去餐厅了吗？",
    "pronunciation": "/dʌz/ /kaɪl/ /ɡoʊ/ /tuː; tə/ /ə; eɪ/ /ˈrestrɑːnt/"
  },
  {
    "id": "131",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "132",
    "sentence": "Kyle doesn't go to a restaurant",
    "chinese": "凯尔不去餐厅",
    "pronunciation": "/kaɪl/ /ˈdʌznt/ /ɡoʊ/ /tuː; tə/ /ə; eɪ/ /ˈrestrɑːnt/"
  },
  {
    "id": "133",
    "sentence": "No , Kyle doesn't go to a restaurant",
    "chinese": "不，凯尔不去餐厅",
    "pronunciation": "/noʊ/ /kaɪl/ /ˈdʌznt/ /ɡoʊ/ /tuː; tə/ /ə; eɪ/ /ˈrestrɑːnt/"
  },
  {
    "id": "134",
    "sentence": "Kyle goes to the cafeteria",
    "chinese": "凯尔去自助餐厅了",
    "pronunciation": "/kaɪl/ /ɡoʊz/ /tuː; tə/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "135",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "136",
    "sentence": "Kyle sees a salad",
    "chinese": "凯尔看到了一份沙拉",
    "pronunciation": "/kaɪl/ /siːz/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "137",
    "sentence": "Five : Kyle sees a salad",
    "chinese": "五：凯尔看到了一份沙拉",
    "pronunciation": "/faɪv/ /kaɪl/ /siːz/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "138",
    "sentence": "and French fries",
    "chinese": "和薯条",
    "pronunciation": "/ænd; ənd/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "139",
    "sentence": "Five : Kyle sees a salad , and French fries",
    "chinese": "五：凯尔看到了一份沙拉和薯条",
    "pronunciation": "/faɪv/ /kaɪl/ /siːz/ /ə; eɪ/ /ˈsæləd/ /ænd; ənd/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "140",
    "sentence": "in the cafeteria",
    "chinese": "在自助餐厅",
    "pronunciation": "/ɪn/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "141",
    "sentence": "Five : Kyle sees a salad , and French fries , in the cafeteria",
    "chinese": "五：凯尔在自助餐厅看到了一份沙拉和薯条",
    "pronunciation": "/faɪv/ /kaɪl/ /siːz/ /ə; eɪ/ /ˈsæləd/ /ænd; ənd/ /frentʃ/ /fraɪz/ /ɪn/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "142",
    "sentence": "Does Kyle see",
    "chinese": "凯尔看到了吗？",
    "pronunciation": "/dʌz/ /kaɪl/ /siː/"
  },
  {
    "id": "143",
    "sentence": "a salad",
    "chinese": "沙拉",
    "pronunciation": "/ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "144",
    "sentence": "Does Kyle see a salad ?",
    "chinese": "凯尔看到沙拉了吗？",
    "pronunciation": "/dʌz/ /kaɪl/ /siː/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "145",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "146",
    "sentence": "Kyle sees a salad",
    "chinese": "凯尔看到了沙拉",
    "pronunciation": "/kaɪl/ /siːz/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "147",
    "sentence": "Yes , Kyle sees a salad",
    "chinese": "是的，凯尔看到了沙拉",
    "pronunciation": "/jes/ /kaɪl/ /siːz/ /ə; eɪ/ /ˈsæləd/"
  },
  {
    "id": "148",
    "sentence": "and French fries",
    "chinese": "和薯条",
    "pronunciation": "/ænd; ənd/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "149",
    "sentence": "Yes , Kyle sees a salad , and French fries",
    "chinese": "是的，凯尔看到了沙拉和薯条",
    "pronunciation": "/jes/ /kaɪl/ /siːz/ /ə; eɪ/ /ˈsæləd/ /ænd; ənd/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "150",
    "sentence": "in the cafeteria",
    "chinese": "在自助餐厅",
    "pronunciation": "/ɪn/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "151",
    "sentence": "Yes , Kyle sees a salad , and French fries , in the cafeteria",
    "chinese": "是的，凯尔在自助餐厅看到了沙拉和薯条",
    "pronunciation": "/jes/ /kaɪl/ /siːz/ /ə; eɪ/ /ˈsæləd/ /ænd; ənd/ /frentʃ/ /fraɪz/ /ɪn/ /ðə/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "152",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "153",
    "sentence": "His Mom wants him",
    "chinese": "他妈妈希望他",
    "pronunciation": "/hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/"
  },
  {
    "id": "154",
    "sentence": "Six : His Mom wants him",
    "chinese": "六：他妈妈希望他",
    "pronunciation": "/sɪks/ /hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/"
  },
  {
    "id": "155",
    "sentence": "to eat the salad",
    "chinese": "吃沙拉",
    "pronunciation": "/tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "156",
    "sentence": "Six : His Mom wants him to eat the salad",
    "chinese": "六：他妈妈希望他吃沙拉",
    "pronunciation": "/sɪks/ /hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/ /tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "157",
    "sentence": "not the French fries",
    "chinese": "而不是薯条",
    "pronunciation": "/nɑːt/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "158",
    "sentence": "Six : His Mom wants him to eat the salad , not the French fries",
    "chinese": "六：他妈妈希望他吃沙拉，而不是薯条",
    "pronunciation": "/sɪks/ /hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/ /tuː; tə/ /iːt/ /ðə/ /ˈsæləd/ /nɑːt/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "159",
    "sentence": "Does Kyle's Mom want him",
    "chinese": "凯尔的妈妈想让他",
    "pronunciation": "/dʌz/ /kaɪlz/ /mɑːm/ /wɑːnt/ /hɪm/"
  },
  {
    "id": "160",
    "sentence": "to eat the salad",
    "chinese": "吃沙拉",
    "pronunciation": "/tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "161",
    "sentence": "Does Kyle's Mom want him to eat the salad ?",
    "chinese": "凯尔的妈妈想让他吃沙拉吗？",
    "pronunciation": "/dʌz/ /kaɪlz/ /mɑːm/ /wɑːnt/ /hɪm/ /tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "162",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "163",
    "sentence": "his Mom wants him",
    "chinese": "他妈妈希望他",
    "pronunciation": "/hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/"
  },
  {
    "id": "164",
    "sentence": "Yes , his Mom wants him",
    "chinese": "是的，他妈妈希望他",
    "pronunciation": "/jes/ /hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/"
  },
  {
    "id": "165",
    "sentence": "to eat the salad",
    "chinese": "吃沙拉",
    "pronunciation": "/tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "166",
    "sentence": "Yes , his Mom wants him to eat the salad",
    "chinese": "是的，他妈妈希望他吃沙拉",
    "pronunciation": "/jes/ /hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/ /tuː; tə/ /iːt/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "167",
    "sentence": "not the French fries",
    "chinese": "而不是薯条",
    "pronunciation": "/nɑːt/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "168",
    "sentence": "Yes , his Mom wants him to eat the salad , not the French fries",
    "chinese": "是的，他妈妈希望他吃沙拉，而不是薯条",
    "pronunciation": "/jes/ /hɪz; ɪz/ /mɑːm/ /ˈwɒnts/ /hɪm/ /tuː; tə/ /iːt/ /ðə/ /ˈsæləd/ /nɑːt/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "169",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "170",
    "sentence": "Kyle buys",
    "chinese": "凯尔买了",
    "pronunciation": "/kaɪl/ /baɪz/"
  },
  {
    "id": "171",
    "sentence": "Seven : Kyle buys",
    "chinese": "七：凯尔买了",
    "pronunciation": "/ˈsev(ə)n/ /kaɪl/ /baɪz/"
  },
  {
    "id": "172",
    "sentence": "and eats",
    "chinese": "并吃了",
    "pronunciation": "/ænd; ənd/ /its/"
  },
  {
    "id": "173",
    "sentence": "Seven : Kyle buys and eats",
    "chinese": "七：凯尔买了并吃了",
    "pronunciation": "/ˈsev(ə)n/ /kaɪl/ /baɪz/ /ænd; ənd/ /its/"
  },
  {
    "id": "174",
    "sentence": "the French fries",
    "chinese": "薯条",
    "pronunciation": "/ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "175",
    "sentence": "Seven : Kyle buys and eats the French fries",
    "chinese": "七：凯尔买了薯条并吃了",
    "pronunciation": "/ˈsev(ə)n/ /kaɪl/ /baɪz/ /ænd; ənd/ /its/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "176",
    "sentence": "Does Kyle buy the salad",
    "chinese": "凯尔买沙拉了吗？",
    "pronunciation": "/dʌz/ /kaɪl/ /baɪ/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "177",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "178",
    "sentence": "Kyle does not buy the salad",
    "chinese": "凯尔没有买沙拉",
    "pronunciation": "/kaɪl/ /dʌz/ /nɑːt/ /baɪ/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "179",
    "sentence": "No , Kyle does not buy the salad",
    "chinese": "不，凯尔没有买沙拉",
    "pronunciation": "/noʊ/ /kaɪl/ /dʌz/ /nɑːt/ /baɪ/ /ðə/ /ˈsæləd/"
  },
  {
    "id": "180",
    "sentence": "He buys",
    "chinese": "他买了",
    "pronunciation": "/hiː/ /baɪz/"
  },
  {
    "id": "181",
    "sentence": "and eats",
    "chinese": "并吃了",
    "pronunciation": "/ænd; ənd/ /its/"
  },
  {
    "id": "182",
    "sentence": "He buys and eats",
    "chinese": "他买了并吃了",
    "pronunciation": "/hiː/ /baɪz/ /ænd; ənd/ /its/"
  },
  {
    "id": "183",
    "sentence": "the French fries",
    "chinese": "薯条",
    "pronunciation": "/ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "184",
    "sentence": "He buys and eats the French fries",
    "chinese": "他买了薯条并吃了",
    "pronunciation": "/hiː/ /baɪz/ /ænd; ənd/ /its/ /ðə/ /frentʃ/ /fraɪz/"
  },
  {
    "id": "185",
    "sentence": "And that's the story",
    "chinese": "这就是故事",
    "pronunciation": "/ænd; ənd/ /ðæts/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "186",
    "sentence": "about Kyle",
    "chinese": "关于凯尔",
    "pronunciation": "/əˈbaʊt/ /kaɪl/"
  },
  {
    "id": "187",
    "sentence": "And that's the story about Kyle",
    "chinese": "这就是关于凯尔的故事",
    "pronunciation": "/ænd; ənd/ /ðæts/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /kaɪl/"
  },
  {
    "id": "188",
    "sentence": "at the school cafeteria",
    "chinese": "在学校食堂",
    "pronunciation": "/æt; ət/ /ðə/ /skuːl/ /ˌkæfɪˈtɪriə/"
  },
  {
    "id": "189",
    "sentence": "And that's the story about Kyle at the school cafeteria",
    "chinese": "这就是凯尔在学校食堂的故事",
    "pronunciation": "/ænd; ənd/ /ðæts/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /kaɪl/ /æt; ət/ /ðə/ /skuːl/ /ˌkæfɪˈtɪriə/"
  },
];
