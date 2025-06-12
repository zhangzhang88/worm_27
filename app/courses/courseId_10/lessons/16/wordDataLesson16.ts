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
    "sentence": "today we're going to hear about Gene",
    "chinese": "今天我们要听听关于吉恩的故事",
    "pronunciation": "/təˈdeɪ/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /əˈbaʊt/ /dʒiːn/"
  },
  {
    "id": "3",
    "sentence": "Hello , today we're going to hear about Gene",
    "chinese": "你好，今天我们要听听关于吉恩的故事",
    "pronunciation": "/həˈloʊ/ /təˈdeɪ/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /əˈbaʊt/ /dʒiːn/"
  },
  {
    "id": "4",
    "sentence": "who wants a new job",
    "chinese": "他想要一份新工作",
    "pronunciation": "/huː/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "5",
    "sentence": "Hello , today we're going to hear about Gene , who wants a new job",
    "chinese": "你好，今天我们要听听关于吉恩的故事，他想要一份新工作",
    "pronunciation": "/həˈloʊ/ /təˈdeɪ/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /əˈbaʊt/ /dʒiːn/ /huː/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "6",
    "sentence": "This is story sixteen",
    "chinese": "这是故事十六",
    "pronunciation": "/ðɪs/ /ɪz/ /ˈstɔːri/ /ˌsɪksˈtiːn/"
  },
  {
    "id": "7",
    "sentence": "Remember",
    "chinese": "记住",
    "pronunciation": "/rɪˈmembər/"
  },
  {
    "id": "8",
    "sentence": "we're going to hear the story",
    "chinese": "我们将听到故事",
    "pronunciation": "/wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "9",
    "sentence": "Remember , we're going to hear the story",
    "chinese": "记住，我们将听到故事",
    "pronunciation": "/rɪˈmembər/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "10",
    "sentence": "about Gene",
    "chinese": "关于吉恩",
    "pronunciation": "/əˈbaʊt/ /dʒiːn/"
  },
  {
    "id": "11",
    "sentence": "Remember , we're going to hear the story about Gene",
    "chinese": "记住，我们将先听到关于吉恩的故事",
    "pronunciation": "/rɪˈmembər/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /dʒiːn/"
  },
  {
    "id": "12",
    "sentence": "and then",
    "chinese": "然后",
    "pronunciation": "/ænd; ənd/ /ðen/"
  },
  {
    "id": "13",
    "sentence": "Remember , we're going to hear the story about Gene , and then",
    "chinese": "记住，我们将先听到关于吉恩的故事，然后",
    "pronunciation": "/rɪˈmembər/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /dʒiːn/ /ænd; ənd/ /ðen/"
  },
  {
    "id": "14",
    "sentence": "we will hear the story",
    "chinese": "我们将听到故事",
    "pronunciation": "/wiː; wi/ /wɪl/ /hɪr/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "15",
    "sentence": "Remember , we're going to hear the story about Gene , and then we will hear the story",
    "chinese": "记住，我们将先听到关于吉恩的故事，然后我们将听到吉恩本人讲述的故事",
    "pronunciation": "/rɪˈmembər/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /dʒiːn/ /ænd; ənd/ /ðen/ /wiː; wi/ /wɪl/ /hɪr/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "16",
    "sentence": "told by Gene",
    "chinese": "吉恩讲述的",
    "pronunciation": "/toʊld/ /baɪ/ /dʒiːn/"
  },
  {
    "id": "17",
    "sentence": "Remember , we're going to hear the story about Gene , and then we will hear the story told by Gene",
    "chinese": "记住，我们将先听到关于吉恩的故事，然后我们将听到吉恩本人讲述的故事",
    "pronunciation": "/rɪˈmembər/ /wɪr/ /ˈɡoʊɪŋ/ /tuː; tə/ /hɪr/ /ðə/ /ˈstɔːri/ /əˈbaʊt/ /dʒiːn/ /ænd; ənd/ /ðen/ /wiː; wi/ /wɪl/ /hɪr/ /ðə/ /ˈstɔːri/ /toʊld/ /baɪ/ /dʒiːn/"
  },
  {
    "id": "18",
    "sentence": "This will be followed",
    "chinese": "接下来是",
    "pronunciation": "/ðɪs/ /wɪl/ /biː/ /ˈfɑːloʊd/"
  },
  {
    "id": "19",
    "sentence": "by questions",
    "chinese": "通过提问",
    "pronunciation": "/baɪ/ /ˈkwestʃənz/"
  },
  {
    "id": "20",
    "sentence": "This will be followed by questions",
    "chinese": "接下来是提问环节",
    "pronunciation": "/ðɪs/ /wɪl/ /biː/ /ˈfɑːloʊd/ /baɪ/ /ˈkwestʃənz/"
  },
  {
    "id": "21",
    "sentence": "You can just listen to the questions",
    "chinese": "你可以只听问题",
    "pronunciation": "/juː; jʊ/ /kæn/ /dʒʌst/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈkwestʃənz/"
  },
  {
    "id": "22",
    "sentence": "and the answer",
    "chinese": "和答案",
    "pronunciation": "/ænd; ənd/ /ðə/ /ˈænsər/"
  },
  {
    "id": "23",
    "sentence": "You can just listen to the questions and the answer",
    "chinese": "你可以只听问题和答案",
    "pronunciation": "/juː; jʊ/ /kæn/ /dʒʌst/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈkwestʃənz/ /ænd; ənd/ /ðə/ /ˈænsər/"
  },
  {
    "id": "24",
    "sentence": "or you can try to answer the questions",
    "chinese": "或者你可以尝试自己回答问题",
    "pronunciation": "/ɔr/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/ /ðə/ /ˈkwestʃənz/"
  },
  {
    "id": "25",
    "sentence": "You can just listen to the questions and the answer , or you can try to answer the questions",
    "chinese": "你可以只听问题和答案，或者你可以尝试自己回答问题",
    "pronunciation": "/juː; jʊ/ /kæn/ /dʒʌst/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈkwestʃənz/ /ænd; ənd/ /ðə/ /ˈænsər/ /ɔr/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/ /ðə/ /ˈkwestʃənz/"
  },
  {
    "id": "26",
    "sentence": "yourself",
    "chinese": "你自己",
    "pronunciation": "/jɔːrˈself/"
  },
  {
    "id": "27",
    "sentence": "You can just listen to the questions and the answer , or you can try to answer the questions yourself",
    "chinese": "你可以只听问题和答案，或者你可以尝试自己回答问题",
    "pronunciation": "/juː; jʊ/ /kæn/ /dʒʌst/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈkwestʃənz/ /ænd; ənd/ /ðə/ /ˈænsər/ /ɔr/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/ /ðə/ /ˈkwestʃənz/ /jɔːrˈself/"
  },
  {
    "id": "28",
    "sentence": "It's up to you",
    "chinese": "由你决定",
    "pronunciation": "/ɪts/ /ʌp/ /tuː; tə/ /juː; jʊ/"
  },
  {
    "id": "29",
    "sentence": "So let's listen",
    "chinese": "所以让我们听",
    "pronunciation": "/soʊ/ /lets/ /ˈlɪs(ə)n/"
  },
  {
    "id": "30",
    "sentence": "to the story",
    "chinese": "关于这个故事",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "31",
    "sentence": "So let's listen to the story",
    "chinese": "所以让我们听听这个故事",
    "pronunciation": "/soʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "32",
    "sentence": "of Gene",
    "chinese": "关于吉恩的",
    "pronunciation": "/ʌv/ /dʒiːn/"
  },
  {
    "id": "33",
    "sentence": "So let's listen to the story of Gene",
    "chinese": "所以让我们听听吉恩的故事",
    "pronunciation": "/soʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/ /ʌv/ /dʒiːn/"
  },
  {
    "id": "34",
    "sentence": "who wants a new job",
    "chinese": "想要新工作",
    "pronunciation": "/huː/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "35",
    "sentence": "So let's listen to the story of Gene who wants a new job",
    "chinese": "让我们来听听吉恩想要新工作的故事",
    "pronunciation": "/soʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈstɔːri/ /ʌv/ /dʒiːn/ /huː/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "36",
    "sentence": "Gene wants",
    "chinese": "吉恩想要",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/"
  },
  {
    "id": "37",
    "sentence": "a new job",
    "chinese": "一份新工作",
    "pronunciation": "/ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "38",
    "sentence": "Gene wants a new job",
    "chinese": "吉恩想要一份新工作",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "39",
    "sentence": "He doesn't like",
    "chinese": "他不喜欢",
    "pronunciation": "/hiː/ /ˈdʌznt/ /laɪk/"
  },
  {
    "id": "40",
    "sentence": "his office job",
    "chinese": "他的办公室工作",
    "pronunciation": "/hɪz; ɪz/ /ˈɑːfɪs/ /dʒɑːb/"
  },
  {
    "id": "41",
    "sentence": "He doesn't like his office job",
    "chinese": "他不喜欢他的办公室工作",
    "pronunciation": "/hiː/ /ˈdʌznt/ /laɪk/ /hɪz; ɪz/ /ˈɑːfɪs/ /dʒɑːb/"
  },
  {
    "id": "42",
    "sentence": "He thinks",
    "chinese": "他认为",
    "pronunciation": "/hiː/ /θɪŋks/"
  },
  {
    "id": "43",
    "sentence": "his job is",
    "chinese": "他的工作是",
    "pronunciation": "/hɪz; ɪz/ /dʒɑːb/ /ɪz/"
  },
  {
    "id": "44",
    "sentence": "He thinks his job is",
    "chinese": "他认为他的工作是",
    "pronunciation": "/hiː/ /θɪŋks/ /hɪz; ɪz/ /dʒɑːb/ /ɪz/"
  },
  {
    "id": "45",
    "sentence": "too boring",
    "chinese": "太无聊了",
    "pronunciation": "/tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "46",
    "sentence": "He thinks his job is too boring",
    "chinese": "他认为他的工作太无聊了",
    "pronunciation": "/hiː/ /θɪŋks/ /hɪz; ɪz/ /dʒɑːb/ /ɪz/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "47",
    "sentence": "Gene wants",
    "chinese": "吉恩想要",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/"
  },
  {
    "id": "48",
    "sentence": "a more exciting job",
    "chinese": "一份更刺激的工作",
    "pronunciation": "/ə; eɪ/ /mɔːr/ /ɪkˈsaɪtɪŋ/ /dʒɑːb/"
  },
  {
    "id": "49",
    "sentence": "Gene wants a more exciting job",
    "chinese": "吉恩想要一份更刺激的工作",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/ /ə; eɪ/ /mɔːr/ /ɪkˈsaɪtɪŋ/ /dʒɑːb/"
  },
  {
    "id": "50",
    "sentence": "He looks for a new job",
    "chinese": "他在寻找新工作",
    "pronunciation": "/hiː/ /lʊks/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "51",
    "sentence": "online",
    "chinese": "在线",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "52",
    "sentence": "He looks for a new job online",
    "chinese": "他在网上寻找新工作",
    "pronunciation": "/hiː/ /lʊks/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "53",
    "sentence": "There are many jobs",
    "chinese": "有许多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "54",
    "sentence": "in restaurants",
    "chinese": "在餐厅里",
    "pronunciation": "/ɪn/ /ˈrestərənt/"
  },
  {
    "id": "55",
    "sentence": "There are many jobs in restaurants",
    "chinese": "餐厅里有许多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/ /ɪn/ /ˈrestərənt/"
  },
  {
    "id": "56",
    "sentence": "There are also many jobs",
    "chinese": "也有很多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈɔːlsoʊ/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "57",
    "sentence": "in stores",
    "chinese": "在商店里",
    "pronunciation": "/ɪn/ /stɔrz/"
  },
  {
    "id": "58",
    "sentence": "There are also many jobs in stores",
    "chinese": "商店里也有很多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈɔːlsoʊ/ /ˈmeni/ /dʒɑːbz/ /ɪn/ /stɔrz/"
  },
  {
    "id": "59",
    "sentence": "Gene can't cook",
    "chinese": "吉恩不太会做饭",
    "pronunciation": "/dʒiːn/ /kænt/ /kʊk/"
  },
  {
    "id": "60",
    "sentence": "very well",
    "chinese": "很好",
    "pronunciation": "/ˈveri/ /wel/"
  },
  {
    "id": "61",
    "sentence": "Gene can't cook very well",
    "chinese": "吉恩不太会做饭",
    "pronunciation": "/dʒiːn/ /kænt/ /kʊk/ /ˈveri/ /wel/"
  },
  {
    "id": "62",
    "sentence": "But he likes shopping",
    "chinese": "但他喜欢购物",
    "pronunciation": "/bʌt/ /hiː/ /laɪks/ /ˈʃɑːpɪŋ/"
  },
  {
    "id": "63",
    "sentence": "and talking to people",
    "chinese": "和与人交谈",
    "pronunciation": "/ænd; ənd/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "64",
    "sentence": "But he likes shopping and talking to people",
    "chinese": "但他喜欢购物和与人交谈",
    "pronunciation": "/bʌt/ /hiː/ /laɪks/ /ˈʃɑːpɪŋ/ /ænd; ənd/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "65",
    "sentence": "Gene hopes",
    "chinese": "吉恩希望",
    "pronunciation": "/dʒiːn/ /hoʊps/"
  },
  {
    "id": "66",
    "sentence": "he can find a job",
    "chinese": "他能找到工作",
    "pronunciation": "/hiː/ /kæn/ /faɪnd/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "67",
    "sentence": "Gene hopes he can find a job",
    "chinese": "吉恩希望他能找到工作",
    "pronunciation": "/dʒiːn/ /hoʊps/ /hiː/ /kæn/ /faɪnd/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "68",
    "sentence": "in a store",
    "chinese": "在一家商店",
    "pronunciation": "/ɪn/ /ə; eɪ/ /stɔːr/"
  },
  {
    "id": "69",
    "sentence": "Gene hopes he can find a job in a store",
    "chinese": "吉恩希望他能在一家商店找到工作",
    "pronunciation": "/dʒiːn/ /hoʊps/ /hiː/ /kæn/ /faɪnd/ /ə; eɪ/ /dʒɑːb/ /ɪn/ /ə; eɪ/ /stɔːr/"
  },
  {
    "id": "70",
    "sentence": "Now let's listen",
    "chinese": "现在让我们听",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/"
  },
  {
    "id": "71",
    "sentence": "to the same story",
    "chinese": "同一个故事",
    "pronunciation": "/tuː; tə/ /ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "72",
    "sentence": "Now let's listen to the same story",
    "chinese": "现在让我们听听同一个故事",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "73",
    "sentence": "told by Gene",
    "chinese": "吉恩讲述的",
    "pronunciation": "/toʊld/ /baɪ/ /dʒiːn/"
  },
  {
    "id": "74",
    "sentence": "Now let's listen to the same story told by Gene",
    "chinese": "现在让我们听听吉恩讲述的同一个故事",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /seɪm/ /ˈstɔːri/ /toʊld/ /baɪ/ /dʒiːn/"
  },
  {
    "id": "75",
    "sentence": "I want",
    "chinese": "我想要",
    "pronunciation": "/aɪ/ /wɑːnt/"
  },
  {
    "id": "76",
    "sentence": "a new job",
    "chinese": "一份新工作",
    "pronunciation": "/ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "77",
    "sentence": "I want a new job",
    "chinese": "我想要一份新工作",
    "pronunciation": "/aɪ/ /wɑːnt/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "78",
    "sentence": "I don't like",
    "chinese": "我不喜欢",
    "pronunciation": "/aɪ/ /doʊnt/ /laɪk/"
  },
  {
    "id": "79",
    "sentence": "my office job",
    "chinese": "我的办公室工作",
    "pronunciation": "/maɪ/ /ˈɑːfɪs/ /dʒɑːb/"
  },
  {
    "id": "80",
    "sentence": "I don't like my office job",
    "chinese": "我不喜欢我的办公室工作",
    "pronunciation": "/aɪ/ /doʊnt/ /laɪk/ /maɪ/ /ˈɑːfɪs/ /dʒɑːb/"
  },
  {
    "id": "81",
    "sentence": "I think",
    "chinese": "我觉得",
    "pronunciation": "/aɪ/ /θɪŋk/"
  },
  {
    "id": "82",
    "sentence": "my job is",
    "chinese": "我的工作是",
    "pronunciation": "/maɪ/ /dʒɑːb/ /ɪz/"
  },
  {
    "id": "83",
    "sentence": "I think my job is",
    "chinese": "我觉得我的工作是",
    "pronunciation": "/aɪ/ /θɪŋk/ /maɪ/ /dʒɑːb/ /ɪz/"
  },
  {
    "id": "84",
    "sentence": "too boring",
    "chinese": "太无聊",
    "pronunciation": "/tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "85",
    "sentence": "I think my job is too boring",
    "chinese": "我觉得我的工作太无聊了",
    "pronunciation": "/aɪ/ /θɪŋk/ /maɪ/ /dʒɑːb/ /ɪz/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "86",
    "sentence": "I want",
    "chinese": "我想要",
    "pronunciation": "/aɪ/ /wɑːnt/"
  },
  {
    "id": "87",
    "sentence": "a more exciting job",
    "chinese": "一份更令人兴奋的工作",
    "pronunciation": "/ə; eɪ/ /mɔːr/ /ɪkˈsaɪtɪŋ/ /dʒɑːb/"
  },
  {
    "id": "88",
    "sentence": "I want a more exciting job",
    "chinese": "我想要一份更令人兴奋的工作",
    "pronunciation": "/aɪ/ /wɑːnt/ /ə; eɪ/ /mɔːr/ /ɪkˈsaɪtɪŋ/ /dʒɑːb/"
  },
  {
    "id": "89",
    "sentence": "I look for a new job",
    "chinese": "我在寻找新工作",
    "pronunciation": "/aɪ/ /lʊk/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "90",
    "sentence": "online",
    "chinese": "在线",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "91",
    "sentence": "I look for a new job online",
    "chinese": "我在网上寻找新工作",
    "pronunciation": "/aɪ/ /lʊk/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "92",
    "sentence": "There are many jobs",
    "chinese": "有很多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "93",
    "sentence": "in restaurants",
    "chinese": "在餐厅里",
    "pronunciation": "/ɪn/ /ˈrestərənt/"
  },
  {
    "id": "94",
    "sentence": "There are many jobs in restaurants",
    "chinese": "餐厅里有很多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/ /ɪn/ /ˈrestərənt/"
  },
  {
    "id": "95",
    "sentence": "There are also many jobs",
    "chinese": "也有很多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈɔːlsoʊ/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "96",
    "sentence": "in stores",
    "chinese": "在商店里",
    "pronunciation": "/ɪn/ /stɔrz/"
  },
  {
    "id": "97",
    "sentence": "There are also many jobs in stores",
    "chinese": "商店里也有很多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈɔːlsoʊ/ /ˈmeni/ /dʒɑːbz/ /ɪn/ /stɔrz/"
  },
  {
    "id": "98",
    "sentence": "I can't cook",
    "chinese": "我不会做饭",
    "pronunciation": "/aɪ/ /kænt/ /kʊk/"
  },
  {
    "id": "99",
    "sentence": "very well",
    "chinese": "很好",
    "pronunciation": "/ˈveri/ /wel/"
  },
  {
    "id": "100",
    "sentence": "I can't cook very well",
    "chinese": "我不太会做饭",
    "pronunciation": "/aɪ/ /kænt/ /kʊk/ /ˈveri/ /wel/"
  },
  {
    "id": "101",
    "sentence": "But I like shopping",
    "chinese": "但我喜欢购物",
    "pronunciation": "/bʌt/ /aɪ/ /laɪk/ /ˈʃɑːpɪŋ/"
  },
  {
    "id": "102",
    "sentence": "and talking to people",
    "chinese": "和与人交谈",
    "pronunciation": "/ænd; ənd/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "103",
    "sentence": "But I like shopping and talking to people",
    "chinese": "但我喜欢购物和与人交谈",
    "pronunciation": "/bʌt/ /aɪ/ /laɪk/ /ˈʃɑːpɪŋ/ /ænd; ənd/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "104",
    "sentence": "I hope",
    "chinese": "我希望",
    "pronunciation": "/aɪ/ /hoʊp/"
  },
  {
    "id": "105",
    "sentence": "I can find a job",
    "chinese": "我能找到工作",
    "pronunciation": "/aɪ/ /kæn/ /faɪnd/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "106",
    "sentence": "I hope I can find a job",
    "chinese": "我希望能找到工作",
    "pronunciation": "/aɪ/ /hoʊp/ /aɪ/ /kæn/ /faɪnd/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "107",
    "sentence": "in a store",
    "chinese": "在一家商店",
    "pronunciation": "/ɪn/ /ə; eɪ/ /stɔːr/"
  },
  {
    "id": "108",
    "sentence": "I hope I can find a job in a store",
    "chinese": "我希望能在一家商店找到工作",
    "pronunciation": "/aɪ/ /hoʊp/ /aɪ/ /kæn/ /faɪnd/ /ə; eɪ/ /dʒɑːb/ /ɪn/ /ə; eɪ/ /stɔːr/"
  },
  {
    "id": "109",
    "sentence": "Now let's listen",
    "chinese": "现在让我们听",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/"
  },
  {
    "id": "110",
    "sentence": "to these questions",
    "chinese": "这些问题",
    "pronunciation": "/tuː; tə/ /ðiːz/ /ˈkwestʃənz/"
  },
  {
    "id": "111",
    "sentence": "Now let's listen to these questions",
    "chinese": "现在让我们听听这些问题",
    "pronunciation": "/naʊ/ /lets/ /ˈlɪs(ə)n/ /tuː; tə/ /ðiːz/ /ˈkwestʃənz/"
  },
  {
    "id": "112",
    "sentence": "If you want to try",
    "chinese": "如果你想尝试",
    "pronunciation": "/ɪf/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /traɪ/"
  },
  {
    "id": "113",
    "sentence": "to answer them",
    "chinese": "回答它们",
    "pronunciation": "/tuː; tə/ /ˈænsər/ /ðem; ðəm/"
  },
  {
    "id": "114",
    "sentence": "If you want to try to answer them",
    "chinese": "如果你想尝试回答它们",
    "pronunciation": "/ɪf/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /traɪ/ /tuː; tə/ /ˈænsər/ /ðem; ðəm/"
  },
  {
    "id": "115",
    "sentence": "please do so",
    "chinese": "请尽管回答",
    "pronunciation": "/pliːz/ /duː; də/ /soʊ/"
  },
  {
    "id": "116",
    "sentence": "If you want to try to answer them , please do so",
    "chinese": "如果你想尝试回答这些问题，请尽管回答",
    "pronunciation": "/ɪf/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /traɪ/ /tuː; tə/ /ˈænsər/ /ðem; ðəm/ /pliːz/ /duː; də/ /soʊ/"
  },
  {
    "id": "117",
    "sentence": "You don't have to",
    "chinese": "你不必这样做",
    "pronunciation": "/juː; jʊ/ /doʊnt/ /hæv/ /tuː; tə/"
  },
  {
    "id": "118",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "119",
    "sentence": "Gene wants a new job",
    "chinese": "吉恩想要一份新工作",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "120",
    "sentence": "One : Gene wants a new job",
    "chinese": "一：吉恩想要一份新工作",
    "pronunciation": "/wʌn/ /dʒiːn/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "121",
    "sentence": "Does Gene want",
    "chinese": "吉恩想要吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /wɑːnt/"
  },
  {
    "id": "122",
    "sentence": "a new job",
    "chinese": "一份新工作",
    "pronunciation": "/ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "123",
    "sentence": "Does Gene want a new job ?",
    "chinese": "吉恩想要一份新工作吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /wɑːnt/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "124",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "125",
    "sentence": "Gene wants a new job",
    "chinese": "吉恩想要一份新工作",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "126",
    "sentence": "Yes , Gene wants a new job",
    "chinese": "是的，吉恩想要一份新工作",
    "pronunciation": "/jes/ /dʒiːn/ /ˈwɒnts/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "127",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "128",
    "sentence": "Gene thinks",
    "chinese": "吉恩觉得",
    "pronunciation": "/dʒiːn/ /θɪŋks/"
  },
  {
    "id": "129",
    "sentence": "Two : Gene thinks",
    "chinese": "二：吉恩觉得",
    "pronunciation": "/tuː/ /dʒiːn/ /θɪŋks/"
  },
  {
    "id": "130",
    "sentence": "his job is",
    "chinese": "他的工作是",
    "pronunciation": "/hɪz; ɪz/ /dʒɑːb/ /ɪz/"
  },
  {
    "id": "131",
    "sentence": "Two : Gene thinks his job is",
    "chinese": "二：吉恩觉得他的工作是",
    "pronunciation": "/tuː/ /dʒiːn/ /θɪŋks/ /hɪz; ɪz/ /dʒɑːb/ /ɪz/"
  },
  {
    "id": "132",
    "sentence": "too boring",
    "chinese": "太无聊了",
    "pronunciation": "/tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "133",
    "sentence": "Two : Gene thinks his job is too boring",
    "chinese": "二：吉恩觉得他的工作太无聊了",
    "pronunciation": "/tuː/ /dʒiːn/ /θɪŋks/ /hɪz; ɪz/ /dʒɑːb/ /ɪz/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "134",
    "sentence": "Does Gene like",
    "chinese": "吉恩喜欢吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /laɪk/"
  },
  {
    "id": "135",
    "sentence": "his office job",
    "chinese": "他的办公室工作",
    "pronunciation": "/hɪz; ɪz/ /ˈɑːfɪs/ /dʒɑːb/"
  },
  {
    "id": "136",
    "sentence": "Does Gene like his office job ?",
    "chinese": "吉恩喜欢他的办公室工作吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /laɪk/ /hɪz; ɪz/ /ˈɑːfɪs/ /dʒɑːb/"
  },
  {
    "id": "137",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "138",
    "sentence": "he doesn't like his office job",
    "chinese": "他不喜欢他的办公室工作",
    "pronunciation": "/hiː/ /ˈdʌznt/ /laɪk/ /hɪz; ɪz/ /ˈɑːfɪs/ /dʒɑːb/"
  },
  {
    "id": "139",
    "sentence": "No , he doesn't like his office job",
    "chinese": "不，他不喜欢他的办公室工作",
    "pronunciation": "/noʊ/ /hiː/ /ˈdʌznt/ /laɪk/ /hɪz; ɪz/ /ˈɑːfɪs/ /dʒɑːb/"
  },
  {
    "id": "140",
    "sentence": "He thinks",
    "chinese": "他认为",
    "pronunciation": "/hiː/ /θɪŋks/"
  },
  {
    "id": "141",
    "sentence": "his job is",
    "chinese": "他的工作是",
    "pronunciation": "/hɪz; ɪz/ /dʒɑːb/ /ɪz/"
  },
  {
    "id": "142",
    "sentence": "He thinks his job is",
    "chinese": "他觉得他的工作是",
    "pronunciation": "/hiː/ /θɪŋks/ /hɪz; ɪz/ /dʒɑːb/ /ɪz/"
  },
  {
    "id": "143",
    "sentence": "too boring",
    "chinese": "太无聊了",
    "pronunciation": "/tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "144",
    "sentence": "He thinks his job is too boring",
    "chinese": "他觉得他的工作太无聊了",
    "pronunciation": "/hiː/ /θɪŋks/ /hɪz; ɪz/ /dʒɑːb/ /ɪz/ /tuː/ /ˈbɔːrɪŋ/"
  },
  {
    "id": "145",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "146",
    "sentence": "Gene wants",
    "chinese": "吉恩想要",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/"
  },
  {
    "id": "147",
    "sentence": "Three : Gene wants",
    "chinese": "三：吉恩想要",
    "pronunciation": "/θriː/ /dʒiːn/ /ˈwɒnts/"
  },
  {
    "id": "148",
    "sentence": "a more exciting job",
    "chinese": "一份更刺激的工作",
    "pronunciation": "/ə; eɪ/ /mɔːr/ /ɪkˈsaɪtɪŋ/ /dʒɑːb/"
  },
  {
    "id": "149",
    "sentence": "Three : Gene wants a more exciting job",
    "chinese": "三：吉恩想要一份更刺激的工作",
    "pronunciation": "/θriː/ /dʒiːn/ /ˈwɒnts/ /ə; eɪ/ /mɔːr/ /ɪkˈsaɪtɪŋ/ /dʒɑːb/"
  },
  {
    "id": "150",
    "sentence": "Does Gene want",
    "chinese": "吉恩想要吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /wɑːnt/"
  },
  {
    "id": "151",
    "sentence": "a boring job",
    "chinese": "一份无聊的工作",
    "pronunciation": "/ə; eɪ/ /ˈbɔːrɪŋ/ /dʒɑːb/"
  },
  {
    "id": "152",
    "sentence": "Does Gene want a boring job ?",
    "chinese": "吉恩想要一份无聊的工作吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /wɑːnt/ /ə; eɪ/ /ˈbɔːrɪŋ/ /dʒɑːb/"
  },
  {
    "id": "153",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "154",
    "sentence": "Gene wants",
    "chinese": "吉恩想要",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/"
  },
  {
    "id": "155",
    "sentence": "No , Gene wants",
    "chinese": "不，吉恩想要",
    "pronunciation": "/noʊ/ /dʒiːn/ /ˈwɒnts/"
  },
  {
    "id": "156",
    "sentence": "a more exciting job",
    "chinese": "一份更令人兴奋的工作",
    "pronunciation": "/ə; eɪ/ /mɔːr/ /ɪkˈsaɪtɪŋ/ /dʒɑːb/"
  },
  {
    "id": "157",
    "sentence": "No , Gene wants a more exciting job",
    "chinese": "不，吉恩想要一份更令人兴奋的工作",
    "pronunciation": "/noʊ/ /dʒiːn/ /ˈwɒnts/ /ə; eɪ/ /mɔːr/ /ɪkˈsaɪtɪŋ/ /dʒɑːb/"
  },
  {
    "id": "158",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "159",
    "sentence": "Gene looks for a new job",
    "chinese": "吉恩在寻找新工作",
    "pronunciation": "/dʒiːn/ /lʊks/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "160",
    "sentence": "Four : Gene looks for a new job",
    "chinese": "四：吉恩寻找新工作",
    "pronunciation": "/fɔr/ /dʒiːn/ /lʊks/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "161",
    "sentence": "online",
    "chinese": "在网上",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "162",
    "sentence": "Four : Gene looks for a new job online",
    "chinese": "四：吉恩在网上寻找新工作",
    "pronunciation": "/fɔr/ /dʒiːn/ /lʊks/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "163",
    "sentence": "Does Gene look for a job",
    "chinese": "吉恩在找工作吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /lʊk/ /fɔːr; fər/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "164",
    "sentence": "online",
    "chinese": "在网上",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "165",
    "sentence": "Does Gene look for a job online ?",
    "chinese": "吉恩在网上找工作吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /lʊk/ /fɔːr; fər/ /ə; eɪ/ /dʒɑːb/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "166",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "167",
    "sentence": "he looks for a new job",
    "chinese": "他在寻找新工作",
    "pronunciation": "/hiː/ /lʊks/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "168",
    "sentence": "Yes , he looks for a new job",
    "chinese": "是的，他在寻找新工作",
    "pronunciation": "/jes/ /hiː/ /lʊks/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "169",
    "sentence": "online",
    "chinese": "在网上",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "170",
    "sentence": "Yes , he looks for a new job online",
    "chinese": "是的，他在网上寻找新工作",
    "pronunciation": "/jes/ /hiː/ /lʊks/ /fɔːr; fər/ /ə; eɪ/ /nuː/ /dʒɑːb/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "171",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "172",
    "sentence": "There are many jobs",
    "chinese": "有许多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "173",
    "sentence": "Five : There are many jobs",
    "chinese": "五：有许多工作",
    "pronunciation": "/faɪv/ /ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "174",
    "sentence": "in restaurants",
    "chinese": "在餐厅里",
    "pronunciation": "/ɪn/ /ˈrestərənt/"
  },
  {
    "id": "175",
    "sentence": "Five : There are many jobs in restaurants",
    "chinese": "五：餐厅里有许多工作",
    "pronunciation": "/faɪv/ /ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/ /ɪn/ /ˈrestərənt/"
  },
  {
    "id": "176",
    "sentence": "Are there many jobs",
    "chinese": "有很多工作吗？",
    "pronunciation": "/ɑr/ /ðer; ðər/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "177",
    "sentence": "in restaurants",
    "chinese": "在餐馆里",
    "pronunciation": "/ɪn/ /ˈrestərənt/"
  },
  {
    "id": "178",
    "sentence": "Are there many jobs in restaurants ?",
    "chinese": "餐馆里有很多工作吗？",
    "pronunciation": "/ɑr/ /ðer; ðər/ /ˈmeni/ /dʒɑːbz/ /ɪn/ /ˈrestərənt/"
  },
  {
    "id": "179",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "180",
    "sentence": "there are many jobs",
    "chinese": "有很多工作",
    "pronunciation": "/ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "181",
    "sentence": "Yes , there are many jobs",
    "chinese": "是的，有很多工作",
    "pronunciation": "/jes/ /ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/"
  },
  {
    "id": "182",
    "sentence": "in restaurants",
    "chinese": "在餐厅里",
    "pronunciation": "/ɪn/ /ˈrestərənt/"
  },
  {
    "id": "183",
    "sentence": "Yes , there are many jobs in restaurants",
    "chinese": "是的，餐厅里有很多工作",
    "pronunciation": "/jes/ /ðer; ðər/ /ɑr/ /ˈmeni/ /dʒɑːbz/ /ɪn/ /ˈrestərənt/"
  },
  {
    "id": "184",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "185",
    "sentence": "Gene can't cook",
    "chinese": "吉恩不太会做饭",
    "pronunciation": "/dʒiːn/ /kænt/ /kʊk/"
  },
  {
    "id": "186",
    "sentence": "Six : Gene can't cook",
    "chinese": "六：吉恩不会做饭",
    "pronunciation": "/sɪks/ /dʒiːn/ /kænt/ /kʊk/"
  },
  {
    "id": "187",
    "sentence": "very well",
    "chinese": "很好",
    "pronunciation": "/ˈveri/ /wel/"
  },
  {
    "id": "188",
    "sentence": "Six : Gene can't cook very well",
    "chinese": "六：吉恩不太会做饭",
    "pronunciation": "/sɪks/ /dʒiːn/ /kænt/ /kʊk/ /ˈveri/ /wel/"
  },
  {
    "id": "189",
    "sentence": "Can Gene cook",
    "chinese": "Gene 会做饭吗？",
    "pronunciation": "/kæn/ /dʒiːn/ /kʊk/"
  },
  {
    "id": "190",
    "sentence": "well",
    "chinese": "做得好吗？",
    "pronunciation": "/wel/"
  },
  {
    "id": "191",
    "sentence": "Can Gene cook well ?",
    "chinese": "Gene 做饭做得好吗？",
    "pronunciation": "/kæn/ /dʒiːn/ /kʊk/ /wel/"
  },
  {
    "id": "192",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "193",
    "sentence": "Gene can't cook",
    "chinese": "吉恩不太会做饭",
    "pronunciation": "/dʒiːn/ /kænt/ /kʊk/"
  },
  {
    "id": "194",
    "sentence": "No , Gene can't cook",
    "chinese": "不，吉恩不会做饭",
    "pronunciation": "/noʊ/ /dʒiːn/ /kænt/ /kʊk/"
  },
  {
    "id": "195",
    "sentence": "very well",
    "chinese": "很好",
    "pronunciation": "/ˈveri/ /wel/"
  },
  {
    "id": "196",
    "sentence": "No , Gene can't cook very well",
    "chinese": "不，吉恩不太会做饭",
    "pronunciation": "/noʊ/ /dʒiːn/ /kænt/ /kʊk/ /ˈveri/ /wel/"
  },
  {
    "id": "197",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "198",
    "sentence": "Gene likes shopping",
    "chinese": "吉恩喜欢购物",
    "pronunciation": "/dʒiːn/ /laɪks/ /ˈʃɑːpɪŋ/"
  },
  {
    "id": "199",
    "sentence": "Seven : Gene likes shopping",
    "chinese": "七：吉恩喜欢购物",
    "pronunciation": "/ˈsev(ə)n/ /dʒiːn/ /laɪks/ /ˈʃɑːpɪŋ/"
  },
  {
    "id": "200",
    "sentence": "and talking to people",
    "chinese": "和与人交谈",
    "pronunciation": "/ænd; ənd/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "201",
    "sentence": "Seven : Gene likes shopping and talking to people",
    "chinese": "七：吉恩喜欢购物和与人交谈",
    "pronunciation": "/ˈsev(ə)n/ /dʒiːn/ /laɪks/ /ˈʃɑːpɪŋ/ /ænd; ənd/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "202",
    "sentence": "Does Gene like talking",
    "chinese": "Gene喜欢交谈",
    "pronunciation": "/dʌz/ /dʒiːn/ /laɪk/ /ˈtɔːkɪŋ/"
  },
  {
    "id": "203",
    "sentence": "to people",
    "chinese": "与人",
    "pronunciation": "/tuː; tə/ /ˈpipl/"
  },
  {
    "id": "204",
    "sentence": "Does Gene like talking to people ?",
    "chinese": "Gene喜欢与人交谈吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /laɪk/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "205",
    "sentence": "Yes",
    "chinese": "是的",
    "pronunciation": "/jes/"
  },
  {
    "id": "206",
    "sentence": "Gene likes talking to people",
    "chinese": "吉恩喜欢与人交谈",
    "pronunciation": "/dʒiːn/ /laɪks/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "207",
    "sentence": "Yes , Gene likes talking to people",
    "chinese": "是的，吉恩喜欢与人交谈",
    "pronunciation": "/jes/ /dʒiːn/ /laɪks/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/"
  },
  {
    "id": "208",
    "sentence": "and shopping",
    "chinese": "和购物",
    "pronunciation": "/ænd; ənd/ /ˈʃɑːpɪŋ/"
  },
  {
    "id": "209",
    "sentence": "Yes , Gene likes talking to people , and shopping",
    "chinese": "是的，吉恩喜欢与人交谈和购物",
    "pronunciation": "/jes/ /dʒiːn/ /laɪks/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/ /ænd; ənd/ /ˈʃɑːpɪŋ/"
  },
  {
    "id": "210",
    "sentence": "Eight :",
    "chinese": "八：",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "211",
    "sentence": "Gene wants to find a job",
    "chinese": "吉恩想找份工作",
    "pronunciation": "/dʒiːn/ /ˈwɒnts/ /tuː; tə/ /faɪnd/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "212",
    "sentence": "Eight : Gene wants to find a job",
    "chinese": "八：吉恩想找份工作",
    "pronunciation": "/eɪt/ /dʒiːn/ /ˈwɒnts/ /tuː; tə/ /faɪnd/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "213",
    "sentence": "in a store",
    "chinese": "在一家商店",
    "pronunciation": "/ɪn/ /ə; eɪ/ /stɔːr/"
  },
  {
    "id": "214",
    "sentence": "Eight : Gene wants to find a job in a store",
    "chinese": "八：吉恩想在一家商店找份工作",
    "pronunciation": "/eɪt/ /dʒiːn/ /ˈwɒnts/ /tuː; tə/ /faɪnd/ /ə; eɪ/ /dʒɑːb/ /ɪn/ /ə; eɪ/ /stɔːr/"
  },
  {
    "id": "215",
    "sentence": "Does Gene want a job",
    "chinese": "吉恩想要一份工作吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /wɑːnt/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "216",
    "sentence": "in a restaurant",
    "chinese": "在餐厅",
    "pronunciation": "/ɪn/ /ə; eɪ/ /ˈrestrɑːnt/"
  },
  {
    "id": "217",
    "sentence": "Does Gene want a job in a restaurant ?",
    "chinese": "吉恩想在餐厅工作吗？",
    "pronunciation": "/dʌz/ /dʒiːn/ /wɑːnt/ /ə; eɪ/ /dʒɑːb/ /ɪn/ /ə; eɪ/ /ˈrestrɑːnt/"
  },
  {
    "id": "218",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "219",
    "sentence": "he doesn't want a job",
    "chinese": "他不想工作",
    "pronunciation": "/hiː/ /ˈdʌznt/ /wɑːnt/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "220",
    "sentence": "No , he doesn't want a job",
    "chinese": "不，他不想工作",
    "pronunciation": "/noʊ/ /hiː/ /ˈdʌznt/ /wɑːnt/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "221",
    "sentence": "in a restaurant",
    "chinese": "在餐厅",
    "pronunciation": "/ɪn/ /ə; eɪ/ /ˈrestrɑːnt/"
  },
  {
    "id": "222",
    "sentence": "No , he doesn't want a job in a restaurant",
    "chinese": "不，他不想在餐厅工作",
    "pronunciation": "/noʊ/ /hiː/ /ˈdʌznt/ /wɑːnt/ /ə; eɪ/ /dʒɑːb/ /ɪn/ /ə; eɪ/ /ˈrestrɑːnt/"
  },
  {
    "id": "223",
    "sentence": "He wants to find a job",
    "chinese": "他想找份工作",
    "pronunciation": "/hiː/ /ˈwɒnts/ /tuː; tə/ /faɪnd/ /ə; eɪ/ /dʒɑːb/"
  },
  {
    "id": "224",
    "sentence": "in a store",
    "chinese": "在一家商店",
    "pronunciation": "/ɪn/ /ə; eɪ/ /stɔːr/"
  },
  {
    "id": "225",
    "sentence": "He wants to find a job in a store",
    "chinese": "他想在一家商店找份工作",
    "pronunciation": "/hiː/ /ˈwɒnts/ /tuː; tə/ /faɪnd/ /ə; eɪ/ /dʒɑːb/ /ɪn/ /ə; eɪ/ /stɔːr/"
  },
  {
    "id": "226",
    "sentence": "And there you have it",
    "chinese": "这就是了",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /juː; jʊ/ /hæv/ /ɪt/"
  },
  {
    "id": "227",
    "sentence": "that's the story of Gene",
    "chinese": "这就是吉恩的故事",
    "pronunciation": "/ðæts/ /ðə/ /ˈstɔːri/ /ʌv/ /dʒiːn/"
  },
  {
    "id": "228",
    "sentence": "And there you have it , that's the story of Gene",
    "chinese": "这就是吉恩的故事",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /juː; jʊ/ /hæv/ /ɪt/ /ðæts/ /ðə/ /ˈstɔːri/ /ʌv/ /dʒiːn/"
  },
  {
    "id": "229",
    "sentence": "who wants to find a new job",
    "chinese": "想要找到新工作",
    "pronunciation": "/huː/ /ˈwɒnts/ /tuː; tə/ /faɪnd/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
  {
    "id": "230",
    "sentence": "And there you have it , that's the story of Gene who wants to find a new job",
    "chinese": "这就是吉恩想要找到新工作的故事",
    "pronunciation": "/ænd; ənd/ /ðer; ðər/ /juː; jʊ/ /hæv/ /ɪt/ /ðæts/ /ðə/ /ˈstɔːri/ /ʌv/ /dʒiːn/ /huː/ /ˈwɒnts/ /tuː; tə/ /faɪnd/ /ə; eɪ/ /nuː/ /dʒɑːb/"
  },
];
