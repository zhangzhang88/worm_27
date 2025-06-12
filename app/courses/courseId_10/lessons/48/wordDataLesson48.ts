export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "My parents told me",
    "chinese": "我父母告诉我",
    "pronunciation": "/maɪ/ /ˈperənts/ /toʊld/ /miː/"
  },
  {
    "id": "2",
    "sentence": "that I have to go to university",
    "chinese": "我必须上大学",
    "pronunciation": "/ðæt/ /aɪ/ /hæv/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "3",
    "sentence": "My parents told me that I have to go to university",
    "chinese": "我父母告诉我必须上大学",
    "pronunciation": "/maɪ/ /ˈperənts/ /toʊld/ /miː/ /ðæt/ /aɪ/ /hæv/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "4",
    "sentence": "They said",
    "chinese": "他们说",
    "pronunciation": "/ðeɪ/ /sed/"
  },
  {
    "id": "5",
    "sentence": "that if I get a degree",
    "chinese": "如果我获得学位",
    "pronunciation": "/ðæt/ /ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "6",
    "sentence": "They said that if I get a degree",
    "chinese": "他们说，如果我获得学位",
    "pronunciation": "/ðeɪ/ /sed/ /ðæt/ /ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "7",
    "sentence": "I will be able to get a good job",
    "chinese": "我将能够找到一份好工作",
    "pronunciation": "/aɪ/ /wɪl/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "8",
    "sentence": "They said that if I get a degree I will be able to get a good job",
    "chinese": "他们说，如果我获得学位，我就能找到一份好工作",
    "pronunciation": "/ðeɪ/ /sed/ /ðæt/ /ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/ /aɪ/ /wɪl/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "9",
    "sentence": "However",
    "chinese": "然而",
    "pronunciation": "/haʊˈevər/"
  },
  {
    "id": "10",
    "sentence": "my friend recently told me",
    "chinese": "我的朋友最近告诉我",
    "pronunciation": "/maɪ/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /miː/"
  },
  {
    "id": "11",
    "sentence": "However , my friend recently told me",
    "chinese": "然而，我的朋友最近告诉我",
    "pronunciation": "/haʊˈevər/ /maɪ/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /miː/"
  },
  {
    "id": "12",
    "sentence": "about online courses",
    "chinese": "关于在线课程",
    "pronunciation": "/əˈbaʊt/ /ˌɑːnˈlaɪn/ /ˈkɔːrsɪz/"
  },
  {
    "id": "13",
    "sentence": "However , my friend recently told me about online courses",
    "chinese": "然而，我的朋友最近告诉我关于在线课程的事情",
    "pronunciation": "/haʊˈevər/ /maɪ/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /miː/ /əˈbaʊt/ /ˌɑːnˈlaɪn/ /ˈkɔːrsɪz/"
  },
  {
    "id": "14",
    "sentence": "She said",
    "chinese": "她说",
    "pronunciation": "/ʃiː; ʃi/ /sed/"
  },
  {
    "id": "15",
    "sentence": "I ought to study",
    "chinese": "我应该学习",
    "pronunciation": "/aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/"
  },
  {
    "id": "16",
    "sentence": "She said I ought to study",
    "chinese": "她说我应该学习",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/"
  },
  {
    "id": "17",
    "sentence": "my favourite topics",
    "chinese": "我最喜欢的主题",
    "pronunciation": "/maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/"
  },
  {
    "id": "18",
    "sentence": "She said I ought to study my favourite topics",
    "chinese": "她说我应该学习我最喜欢的主题",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/ /maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/"
  },
  {
    "id": "19",
    "sentence": "online",
    "chinese": "在网上",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "20",
    "sentence": "She said I ought to study my favourite topics online",
    "chinese": "她说我应该在网上学习我最喜欢的主题",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/ /maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "21",
    "sentence": "If I do that",
    "chinese": "如果我这样做",
    "pronunciation": "/ɪf/ /aɪ/ /duː; də/ /ðæt/"
  },
  {
    "id": "22",
    "sentence": "I can save a lot of money",
    "chinese": "我可以省下很多钱",
    "pronunciation": "/aɪ/ /kæn/ /seɪv/ /ə; eɪ/ /lɑːt/ /ʌv/ /ˈmʌni/"
  },
  {
    "id": "23",
    "sentence": "If I do that , I can save a lot of money",
    "chinese": "如果我这样做，我可以省下很多钱",
    "pronunciation": "/ɪf/ /aɪ/ /duː; də/ /ðæt/ /aɪ/ /kæn/ /seɪv/ /ə; eɪ/ /lɑːt/ /ʌv/ /ˈmʌni/"
  },
  {
    "id": "24",
    "sentence": "Now I'm not sure",
    "chinese": "我现在不确定",
    "pronunciation": "/naʊ/ /aɪm/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "25",
    "sentence": "what I should do",
    "chinese": "我该做什么",
    "pronunciation": "/wʌt/ /aɪ/ /ʃʊd; ʃəd/ /duː; də/"
  },
  {
    "id": "26",
    "sentence": "Now I'm not sure what I should do",
    "chinese": "我现在不确定该做什么",
    "pronunciation": "/naʊ/ /aɪm/ /nɑːt/ /ʃʊr/ /wʌt/ /aɪ/ /ʃʊd; ʃəd/ /duː; də/"
  },
  {
    "id": "27",
    "sentence": "If I go to university",
    "chinese": "如果我上大学",
    "pronunciation": "/ɪf/ /aɪ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "28",
    "sentence": "I can get a degree",
    "chinese": "我可以获得学位",
    "pronunciation": "/aɪ/ /kæn/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "29",
    "sentence": "If I go to university , I can get a degree",
    "chinese": "如果我上大学，我可以获得学位",
    "pronunciation": "/ɪf/ /aɪ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/ /aɪ/ /kæn/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "30",
    "sentence": "On the other hand",
    "chinese": "另一方面",
    "pronunciation": "/ɑːn/ /ðə/ /ˈʌðər/ /hænd/"
  },
  {
    "id": "31",
    "sentence": "if I study online",
    "chinese": "如果我选择在线学习",
    "pronunciation": "/ɪf/ /aɪ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "32",
    "sentence": "On the other hand , if I study online",
    "chinese": "另一方面，如果我选择在线学习",
    "pronunciation": "/ɑːn/ /ðə/ /ˈʌðər/ /hænd/ /ɪf/ /aɪ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "33",
    "sentence": "I can learn the same material",
    "chinese": "我可以学习同样的材料",
    "pronunciation": "/aɪ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "34",
    "sentence": "On the other hand , if I study online , I can learn the same material",
    "chinese": "另一方面，如果我选择在线学习，我可以学习同样的材料",
    "pronunciation": "/ɑːn/ /ðə/ /ˈʌðər/ /hænd/ /ɪf/ /aɪ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /aɪ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "35",
    "sentence": "much more cheaply",
    "chinese": "更便宜地",
    "pronunciation": "/mʌtʃ/ /mɔːr/ /ˈtʃiːpli/"
  },
  {
    "id": "36",
    "sentence": "On the other hand , if I study online , I can learn the same material much more cheaply",
    "chinese": "另一方面，如果我选择在线学习，我可以以更低的成本学习同样的材料",
    "pronunciation": "/ɑːn/ /ðə/ /ˈʌðər/ /hænd/ /ɪf/ /aɪ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /aɪ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/ /mʌtʃ/ /mɔːr/ /ˈtʃiːpli/"
  },
  {
    "id": "37",
    "sentence": "I might have to give",
    "chinese": "我可能得",
    "pronunciation": "/aɪ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/"
  },
  {
    "id": "38",
    "sentence": "both of them",
    "chinese": "它们两个",
    "pronunciation": "/boʊθ/ /ʌv/ /ðem; ðəm/"
  },
  {
    "id": "39",
    "sentence": "I might have to give both of them",
    "chinese": "我可能得试试他们两个",
    "pronunciation": "/aɪ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /boʊθ/ /ʌv/ /ðem; ðəm/"
  },
  {
    "id": "40",
    "sentence": "a try",
    "chinese": "试试",
    "pronunciation": "/ə; eɪ/ /traɪ/"
  },
  {
    "id": "41",
    "sentence": "I might have to give both of them a try",
    "chinese": "我可能得把它们两个都试试",
    "pronunciation": "/aɪ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /boʊθ/ /ʌv/ /ðem; ðəm/ /ə; eɪ/ /traɪ/"
  },
  {
    "id": "42",
    "sentence": "If I try both",
    "chinese": "如果我两种都尝试",
    "pronunciation": "/ɪf/ /aɪ/ /traɪ/ /boʊθ/"
  },
  {
    "id": "43",
    "sentence": "I should then be able to make up my mind",
    "chinese": "我应该就能做出决定了",
    "pronunciation": "/aɪ/ /ʃʊd; ʃəd/ /ðen/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /meɪk/ /ʌp/ /maɪ/ /maɪnd/"
  },
  {
    "id": "44",
    "sentence": "If I try both , I should then be able to make up my mind",
    "chinese": "如果我两种都尝试，我应该就能做出决定了",
    "pronunciation": "/ɪf/ /aɪ/ /traɪ/ /boʊθ/ /aɪ/ /ʃʊd; ʃəd/ /ðen/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /meɪk/ /ʌp/ /maɪ/ /maɪnd/"
  },
  {
    "id": "45",
    "sentence": "Now the same story",
    "chinese": "现在同一个故事",
    "pronunciation": "/naʊ/ /ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "46",
    "sentence": "told differently",
    "chinese": "以不同的方式讲述",
    "pronunciation": "/toʊld/ /ˈdɪfrəntli/"
  },
  {
    "id": "47",
    "sentence": "Now the same story told differently",
    "chinese": "现在以不同的方式讲述同一个故事",
    "pronunciation": "/naʊ/ /ðə/ /seɪm/ /ˈstɔːri/ /toʊld/ /ˈdɪfrəntli/"
  },
  {
    "id": "48",
    "sentence": "Your parents told you",
    "chinese": "你的父母告诉你",
    "pronunciation": "/jʊr; jər/ /ˈperənts/ /toʊld/ /juː; jʊ/"
  },
  {
    "id": "49",
    "sentence": "that you have to go to university",
    "chinese": "你必须上大学",
    "pronunciation": "/ðæt/ /juː; jʊ/ /hæv/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "50",
    "sentence": "Your parents told you that you have to go to university",
    "chinese": "你的父母告诉你，你必须上大学",
    "pronunciation": "/jʊr; jər/ /ˈperənts/ /toʊld/ /juː; jʊ/ /ðæt/ /juː; jʊ/ /hæv/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "51",
    "sentence": "They said",
    "chinese": "他们说",
    "pronunciation": "/ðeɪ/ /sed/"
  },
  {
    "id": "52",
    "sentence": "that if you get a degree",
    "chinese": "如果你获得学位",
    "pronunciation": "/ðæt/ /ɪf/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "53",
    "sentence": "They said that if you get a degree",
    "chinese": "他们说，如果你获得学位",
    "pronunciation": "/ðeɪ/ /sed/ /ðæt/ /ɪf/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "54",
    "sentence": "you will be able to get a good job",
    "chinese": "你将能够找到一份好工作",
    "pronunciation": "/juː; jʊ/ /wɪl/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "55",
    "sentence": "They said that if you get a degree you will be able to get a good job",
    "chinese": "他们说，如果你获得学位，你就能找到一份好工作",
    "pronunciation": "/ðeɪ/ /sed/ /ðæt/ /ɪf/ /juː; jʊ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/ /juː; jʊ/ /wɪl/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "56",
    "sentence": "However",
    "chinese": "然而",
    "pronunciation": "/haʊˈevər/"
  },
  {
    "id": "57",
    "sentence": "your friend recently told you",
    "chinese": "你的朋友最近告诉你",
    "pronunciation": "/jʊr; jər/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /juː; jʊ/"
  },
  {
    "id": "58",
    "sentence": "However , your friend recently told you",
    "chinese": "然而，你的朋友最近告诉你",
    "pronunciation": "/haʊˈevər/ /jʊr; jər/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /juː; jʊ/"
  },
  {
    "id": "59",
    "sentence": "about online courses",
    "chinese": "关于在线课程",
    "pronunciation": "/əˈbaʊt/ /ˌɑːnˈlaɪn/ /ˈkɔːrsɪz/"
  },
  {
    "id": "60",
    "sentence": "However , your friend recently told you about online courses",
    "chinese": "然而，你的朋友最近向你介绍了在线课程",
    "pronunciation": "/haʊˈevər/ /jʊr; jər/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /juː; jʊ/ /əˈbaʊt/ /ˌɑːnˈlaɪn/ /ˈkɔːrsɪz/"
  },
  {
    "id": "61",
    "sentence": "She said",
    "chinese": "她说",
    "pronunciation": "/ʃiː; ʃi/ /sed/"
  },
  {
    "id": "62",
    "sentence": "You ought to study",
    "chinese": "你应该学习",
    "pronunciation": "/juː; jʊ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/"
  },
  {
    "id": "63",
    "sentence": "She said , You ought to study",
    "chinese": "她说，你应该学习",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /juː; jʊ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/"
  },
  {
    "id": "64",
    "sentence": "your favourite topics",
    "chinese": "你最喜欢的主题",
    "pronunciation": "/jʊr; jər/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/"
  },
  {
    "id": "65",
    "sentence": "She said , You ought to study your favourite topics",
    "chinese": "她说，你应该在网上学习你最喜欢的主题",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /juː; jʊ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/ /jʊr; jər/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/"
  },
  {
    "id": "66",
    "sentence": "online",
    "chinese": "在网上",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "67",
    "sentence": "She said , You ought to study your favourite topics online",
    "chinese": "她说：“你应该在网上学习你最喜欢的主题”",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /juː; jʊ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/ /jʊr; jər/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "68",
    "sentence": "If you do that",
    "chinese": "如果你这样做",
    "pronunciation": "/ɪf/ /juː; jʊ/ /duː; də/ /ðæt/"
  },
  {
    "id": "69",
    "sentence": "you can save a lot of money",
    "chinese": "你可以省下很多钱",
    "pronunciation": "/juː; jʊ/ /kæn/ /seɪv/ /ə; eɪ/ /lɑːt/ /ʌv/ /ˈmʌni/"
  },
  {
    "id": "70",
    "sentence": "If you do that , you can save a lot of money",
    "chinese": "如果你这样做，你可以省下很多钱",
    "pronunciation": "/ɪf/ /juː; jʊ/ /duː; də/ /ðæt/ /juː; jʊ/ /kæn/ /seɪv/ /ə; eɪ/ /lɑːt/ /ʌv/ /ˈmʌni/"
  },
  {
    "id": "71",
    "sentence": "Now you're not sure",
    "chinese": "你现在不确定",
    "pronunciation": "/naʊ/ /jʊr/ /nɑːt/ /ʃʊr/"
  },
  {
    "id": "72",
    "sentence": "what you should do",
    "chinese": "你应该做什么",
    "pronunciation": "/wʌt/ /juː; jʊ/ /ʃʊd; ʃəd/ /duː; də/"
  },
  {
    "id": "73",
    "sentence": "Now you're not sure what you should do",
    "chinese": "你现在不确定该做什么",
    "pronunciation": "/naʊ/ /jʊr/ /nɑːt/ /ʃʊr/ /wʌt/ /juː; jʊ/ /ʃʊd; ʃəd/ /duː; də/"
  },
  {
    "id": "74",
    "sentence": "If you go to university",
    "chinese": "如果你上大学",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "75",
    "sentence": "you can get a degree",
    "chinese": "你可以获得学位",
    "pronunciation": "/juː; jʊ/ /kæn/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "76",
    "sentence": "If you go to university , you can get a degree",
    "chinese": "如果你上大学，你可以获得学位",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/ /juː; jʊ/ /kæn/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "77",
    "sentence": "On the other hand",
    "chinese": "另一方面",
    "pronunciation": "/ɑːn/ /ðə/ /ˈʌðər/ /hænd/"
  },
  {
    "id": "78",
    "sentence": "if you study online",
    "chinese": "如果你选择在线学习",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "79",
    "sentence": "On the other hand , if you study online",
    "chinese": "另一方面，如果你选择在线学习",
    "pronunciation": "/ɑːn/ /ðə/ /ˈʌðər/ /hænd/ /ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "80",
    "sentence": "you can learn the same material",
    "chinese": "你可以学习同样的内容",
    "pronunciation": "/juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "81",
    "sentence": "On the other hand , if you study online , you can learn the same material",
    "chinese": "另一方面，如果你选择在线学习，你可以学习到同样的内容",
    "pronunciation": "/ɑːn/ /ðə/ /ˈʌðər/ /hænd/ /ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "82",
    "sentence": "for much less",
    "chinese": "以更低的成本",
    "pronunciation": "/fɔːr; fər/ /mʌtʃ/ /lɛs/"
  },
  {
    "id": "83",
    "sentence": "On the other hand , if you study online , you can learn the same material for much less",
    "chinese": "另一方面，如果你选择在线学习，你可以以更低的成本学习到同样的内容",
    "pronunciation": "/ɑːn/ /ðə/ /ˈʌðər/ /hænd/ /ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/ /fɔːr; fər/ /mʌtʃ/ /lɛs/"
  },
  {
    "id": "84",
    "sentence": "You might have to give",
    "chinese": "你可能需要给",
    "pronunciation": "/juː; jʊ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/"
  },
  {
    "id": "85",
    "sentence": "both of them",
    "chinese": "两者",
    "pronunciation": "/boʊθ/ /ʌv/ /ðem; ðəm/"
  },
  {
    "id": "86",
    "sentence": "You might have to give both of them",
    "chinese": "你可能需要试试他们两个",
    "pronunciation": "/juː; jʊ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /boʊθ/ /ʌv/ /ðem; ðəm/"
  },
  {
    "id": "87",
    "sentence": "a try",
    "chinese": "试试",
    "pronunciation": "/ə; eɪ/ /traɪ/"
  },
  {
    "id": "88",
    "sentence": "You might have to give both of them a try",
    "chinese": "你可能需要把两者都试试",
    "pronunciation": "/juː; jʊ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /boʊθ/ /ʌv/ /ðem; ðəm/ /ə; eɪ/ /traɪ/"
  },
  {
    "id": "89",
    "sentence": "If you try both",
    "chinese": "如果你两者都尝试了",
    "pronunciation": "/ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/"
  },
  {
    "id": "90",
    "sentence": "you should then be able to make up your mind",
    "chinese": "那么你应该能够做出决定",
    "pronunciation": "/juː; jʊ/ /ʃʊd; ʃəd/ /ðen/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /meɪk/ /ʌp/ /jʊr; jər/ /maɪnd/"
  },
  {
    "id": "91",
    "sentence": "If you try both , you should then be able to make up your mind",
    "chinese": "如果你两者都尝试了，那么你应该能够做出决定",
    "pronunciation": "/ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/ /juː; jʊ/ /ʃʊd; ʃəd/ /ðen/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /meɪk/ /ʌp/ /jʊr; jər/ /maɪnd/"
  },
  {
    "id": "92",
    "sentence": "Now some questions",
    "chinese": "现在有几个问题",
    "pronunciation": "/naʊ/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "93",
    "sentence": "about the story",
    "chinese": "关于这个故事",
    "pronunciation": "/əˈbaʊt/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "94",
    "sentence": "Now some questions about the story",
    "chinese": "现在有几个关于这个故事的问题",
    "pronunciation": "/naʊ/ /sʌm; səm/ /ˈkwestʃənz/ /əˈbaʊt/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "95",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "96",
    "sentence": "My parents told me",
    "chinese": "我父母告诉我",
    "pronunciation": "/maɪ/ /ˈperənts/ /toʊld/ /miː/"
  },
  {
    "id": "97",
    "sentence": "One : My parents told me",
    "chinese": "一：我父母告诉我",
    "pronunciation": "/wʌn/ /maɪ/ /ˈperənts/ /toʊld/ /miː/"
  },
  {
    "id": "98",
    "sentence": "I have to go to university",
    "chinese": "我必须上大学",
    "pronunciation": "/aɪ/ /hæv/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "99",
    "sentence": "One : My parents told me I have to go to university",
    "chinese": "一：我父母告诉我必须上大学",
    "pronunciation": "/wʌn/ /maɪ/ /ˈperənts/ /toʊld/ /miː/ /aɪ/ /hæv/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "100",
    "sentence": "What did my parents tell me",
    "chinese": "我的父母告诉我什么？",
    "pronunciation": "/wʌt/ /dɪd/ /maɪ/ /ˈperənts/ /tel/ /miː/"
  },
  {
    "id": "101",
    "sentence": "My parents told me",
    "chinese": "我父母告诉我",
    "pronunciation": "/maɪ/ /ˈperənts/ /toʊld/ /miː/"
  },
  {
    "id": "102",
    "sentence": "I have to go to university",
    "chinese": "我必须上大学",
    "pronunciation": "/aɪ/ /hæv/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "103",
    "sentence": "My parents told me I have to go to university",
    "chinese": "我父母告诉我必须上大学",
    "pronunciation": "/maɪ/ /ˈperənts/ /toʊld/ /miː/ /aɪ/ /hæv/ /tuː; tə/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "104",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "105",
    "sentence": "They said",
    "chinese": "他们说",
    "pronunciation": "/ðeɪ/ /sed/"
  },
  {
    "id": "106",
    "sentence": "Two : They said",
    "chinese": "他们说",
    "pronunciation": "/tuː/ /ðeɪ/ /sed/"
  },
  {
    "id": "107",
    "sentence": "if I get a degree",
    "chinese": "如果我拿到学位",
    "pronunciation": "/ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "108",
    "sentence": "Two : They said if I get a degree",
    "chinese": "他们说如果我拿到学位",
    "pronunciation": "/tuː/ /ðeɪ/ /sed/ /ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "109",
    "sentence": "I will be able to get a good job",
    "chinese": "我将能够找到好工作",
    "pronunciation": "/aɪ/ /wɪl/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "110",
    "sentence": "Two : They said if I get a degree , I will be able to get a good job",
    "chinese": "他们说如果我拿到学位，就能找到好工作",
    "pronunciation": "/tuː/ /ðeɪ/ /sed/ /ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/ /aɪ/ /wɪl/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "111",
    "sentence": "What did they say",
    "chinese": "他们说了什么",
    "pronunciation": "/wʌt/ /dɪd/ /ðeɪ/ /seɪ/"
  },
  {
    "id": "112",
    "sentence": "I'd be able to get",
    "chinese": "我能得到",
    "pronunciation": "/aɪd/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/"
  },
  {
    "id": "113",
    "sentence": "What did they say I'd be able to get ?",
    "chinese": "他们说我能得到什么？",
    "pronunciation": "/wʌt/ /dɪd/ /ðeɪ/ /seɪ/ /aɪd/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/"
  },
  {
    "id": "114",
    "sentence": "They said",
    "chinese": "他们说",
    "pronunciation": "/ðeɪ/ /sed/"
  },
  {
    "id": "115",
    "sentence": "if I get a degree",
    "chinese": "如果我拿到学位",
    "pronunciation": "/ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "116",
    "sentence": "They said if I get a degree",
    "chinese": "他们说如果我拿到学位",
    "pronunciation": "/ðeɪ/ /sed/ /ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "117",
    "sentence": "I will be able to get a good job",
    "chinese": "我将能够找到一份好工作",
    "pronunciation": "/aɪ/ /wɪl/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "118",
    "sentence": "They said if I get a degree , I will be able to get a good job",
    "chinese": "他们说如果我拿到学位，我就能找到一份好工作",
    "pronunciation": "/ðeɪ/ /sed/ /ɪf/ /aɪ/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/ /aɪ/ /wɪl/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /ɡet/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "119",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "120",
    "sentence": "However",
    "chinese": "然而",
    "pronunciation": "/haʊˈevər/"
  },
  {
    "id": "121",
    "sentence": "Three : However",
    "chinese": "三：然而",
    "pronunciation": "/θriː/ /haʊˈevər/"
  },
  {
    "id": "122",
    "sentence": "my friend recently told me",
    "chinese": "我的朋友最近告诉我",
    "pronunciation": "/maɪ/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /miː/"
  },
  {
    "id": "123",
    "sentence": "Three : However , my friend recently told me",
    "chinese": "三：然而，我的朋友最近告诉我",
    "pronunciation": "/θriː/ /haʊˈevər/ /maɪ/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /miː/"
  },
  {
    "id": "124",
    "sentence": "about online courses",
    "chinese": "关于在线课程",
    "pronunciation": "/əˈbaʊt/ /ˌɑːnˈlaɪn/ /ˈkɔːrsɪz/"
  },
  {
    "id": "125",
    "sentence": "Three : However , my friend recently told me about online courses",
    "chinese": "三：然而，我的朋友最近告诉我关于在线课程的事情",
    "pronunciation": "/θriː/ /haʊˈevər/ /maɪ/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /miː/ /əˈbaʊt/ /ˌɑːnˈlaɪn/ /ˈkɔːrsɪz/"
  },
  {
    "id": "126",
    "sentence": "What did my friend tell me",
    "chinese": "我的朋友告诉我什么了",
    "pronunciation": "/wʌt/ /dɪd/ /maɪ/ /frend/ /tel/ /miː/"
  },
  {
    "id": "127",
    "sentence": "about",
    "chinese": "关于",
    "pronunciation": "/əˈbaʊt/"
  },
  {
    "id": "128",
    "sentence": "What did my friend tell me about ?",
    "chinese": "我的朋友告诉我什么了？",
    "pronunciation": "/wʌt/ /dɪd/ /maɪ/ /frend/ /tel/ /miː/ /əˈbaʊt/"
  },
  {
    "id": "129",
    "sentence": "My friend recently told me",
    "chinese": "我的朋友最近告诉我",
    "pronunciation": "/maɪ/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /miː/"
  },
  {
    "id": "130",
    "sentence": "about online courses",
    "chinese": "关于在线课程",
    "pronunciation": "/əˈbaʊt/ /ˌɑːnˈlaɪn/ /ˈkɔːrsɪz/"
  },
  {
    "id": "131",
    "sentence": "My friend recently told me about online courses",
    "chinese": "我的朋友最近告诉我关于在线课程的事情",
    "pronunciation": "/maɪ/ /frend/ /ˈriːs(ə)ntli/ /toʊld/ /miː/ /əˈbaʊt/ /ˌɑːnˈlaɪn/ /ˈkɔːrsɪz/"
  },
  {
    "id": "132",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "133",
    "sentence": "She said",
    "chinese": "她说",
    "pronunciation": "/ʃiː; ʃi/ /sed/"
  },
  {
    "id": "134",
    "sentence": "Four : She said",
    "chinese": "四：她说",
    "pronunciation": "/fɔr/ /ʃiː; ʃi/ /sed/"
  },
  {
    "id": "135",
    "sentence": "I ought to study",
    "chinese": "我应该学习",
    "pronunciation": "/aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/"
  },
  {
    "id": "136",
    "sentence": "Four : She said I ought to study",
    "chinese": "她说我应该学习",
    "pronunciation": "/fɔr/ /ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/"
  },
  {
    "id": "137",
    "sentence": "my favourite topics",
    "chinese": "我最喜欢的主题",
    "pronunciation": "/maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/"
  },
  {
    "id": "138",
    "sentence": "Four : She said I ought to study my favourite topics",
    "chinese": "四：她说我应该在网上学习我最喜欢的主题",
    "pronunciation": "/fɔr/ /ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/ /maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/"
  },
  {
    "id": "139",
    "sentence": "online",
    "chinese": "在网上",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "140",
    "sentence": "Four : She said I ought to study my favourite topics online",
    "chinese": "四：她说我应该在网上学习我最喜欢的主题",
    "pronunciation": "/fɔr/ /ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/ /maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "141",
    "sentence": "What did she say",
    "chinese": "她说了什么",
    "pronunciation": "/wʌt/ /dɪd/ /ʃiː; ʃi/ /seɪ/"
  },
  {
    "id": "142",
    "sentence": "I ought to do",
    "chinese": "我应该做",
    "pronunciation": "/aɪ/ /ɔːt/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "143",
    "sentence": "What did she say I ought to do ?",
    "chinese": "她建议我应该怎么做？",
    "pronunciation": "/wʌt/ /dɪd/ /ʃiː; ʃi/ /seɪ/ /aɪ/ /ɔːt/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "144",
    "sentence": "She said",
    "chinese": "她说",
    "pronunciation": "/ʃiː; ʃi/ /sed/"
  },
  {
    "id": "145",
    "sentence": "I ought to study",
    "chinese": "我应该学习",
    "pronunciation": "/aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/"
  },
  {
    "id": "146",
    "sentence": "She said I ought to study",
    "chinese": "她说我应该学习",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/"
  },
  {
    "id": "147",
    "sentence": "my favourite topics",
    "chinese": "我最喜欢的主题",
    "pronunciation": "/maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/"
  },
  {
    "id": "148",
    "sentence": "She said I ought to study my favourite topics",
    "chinese": "她说我应该学习我最喜欢的主题",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/ /maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/"
  },
  {
    "id": "149",
    "sentence": "online",
    "chinese": "在网上",
    "pronunciation": "/ˌɑːnˈlaɪn/"
  },
  {
    "id": "150",
    "sentence": "She said I ought to study my favourite topics online",
    "chinese": "她说我应该在网上学习我最喜欢的主题",
    "pronunciation": "/ʃiː; ʃi/ /sed/ /aɪ/ /ɔːt/ /tuː; tə/ /ˈstʌdi/ /maɪ/ /ˈfeɪvərɪt/ /ˈtɑːpɪks/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "151",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "152",
    "sentence": "If you go to university",
    "chinese": "如果你上大学",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "153",
    "sentence": "Five : If you go to university",
    "chinese": "五：如果你上大学",
    "pronunciation": "/faɪv/ /ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "154",
    "sentence": "you can get a degree",
    "chinese": "你可以获得学位",
    "pronunciation": "/juː; jʊ/ /kæn/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "155",
    "sentence": "Five : If you go to university , you can get a degree",
    "chinese": "五：如果你上大学，你可以获得学位",
    "pronunciation": "/faɪv/ /ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/ /juː; jʊ/ /kæn/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "156",
    "sentence": "What can you do",
    "chinese": "你能做什么？",
    "pronunciation": "/wʌt/ /kæn/ /juː; jʊ/ /duː; də/"
  },
  {
    "id": "157",
    "sentence": "if you go to university",
    "chinese": "如果你上大学",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "158",
    "sentence": "What can you do if you go to university ?",
    "chinese": "如果你上大学，你能做什么？",
    "pronunciation": "/wʌt/ /kæn/ /juː; jʊ/ /duː; də/ /ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "159",
    "sentence": "If you go to university",
    "chinese": "如果你上大学",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/"
  },
  {
    "id": "160",
    "sentence": "you can get a degree",
    "chinese": "你可以获得学位",
    "pronunciation": "/juː; jʊ/ /kæn/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "161",
    "sentence": "If you go to university , you can get a degree",
    "chinese": "如果你上大学，你可以获得学位",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ɡoʊ/ /tuː; tə/ /ˌjuːnɪˈvɜːrsəti/ /juː; jʊ/ /kæn/ /ɡet/ /ə; eɪ/ /dɪˈɡriː/"
  },
  {
    "id": "162",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "163",
    "sentence": "If you study online",
    "chinese": "如果你选择在线学习",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "164",
    "sentence": "Six : If you study online",
    "chinese": "六：如果你选择在线学习",
    "pronunciation": "/sɪks/ /ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "165",
    "sentence": "you can learn the same material",
    "chinese": "你可以学习相同的内容",
    "pronunciation": "/juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "166",
    "sentence": "Six : If you study online , you can learn the same material",
    "chinese": "如果你选择在线学习，你可以学习到相同的材料",
    "pronunciation": "/sɪks/ /ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "167",
    "sentence": "much more cheaply",
    "chinese": "更便宜地",
    "pronunciation": "/mʌtʃ/ /mɔːr/ /ˈtʃiːpli/"
  },
  {
    "id": "168",
    "sentence": "Six : If you study online , you can learn the same material much more cheaply",
    "chinese": "六：如果你选择在线学习，你可以以更低的成本学习到相同的内容",
    "pronunciation": "/sɪks/ /ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/ /mʌtʃ/ /mɔːr/ /ˈtʃiːpli/"
  },
  {
    "id": "169",
    "sentence": "Where can you learn",
    "chinese": "你可以在哪里学习",
    "pronunciation": "/wer/ /kæn/ /juː; jʊ/ /lɜːrn/"
  },
  {
    "id": "170",
    "sentence": "the same material",
    "chinese": "同样的材料",
    "pronunciation": "/ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "171",
    "sentence": "Where can you learn the same material",
    "chinese": "你能在哪里学到同样的材料？",
    "pronunciation": "/wer/ /kæn/ /juː; jʊ/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "172",
    "sentence": "for much less",
    "chinese": "以更低的价格",
    "pronunciation": "/fɔːr; fər/ /mʌtʃ/ /lɛs/"
  },
  {
    "id": "173",
    "sentence": "Where can you learn the same material for much less ?",
    "chinese": "在哪里可以以更低的价格学到同样的材料？",
    "pronunciation": "/wer/ /kæn/ /juː; jʊ/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/ /fɔːr; fər/ /mʌtʃ/ /lɛs/"
  },
  {
    "id": "174",
    "sentence": "If you study online",
    "chinese": "如果你选择在线学习",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "175",
    "sentence": "you can learn the same material",
    "chinese": "你可以学到同样的内容",
    "pronunciation": "/juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "176",
    "sentence": "If you study online , you can learn the same material",
    "chinese": "如果你选择在线学习，你可以学到同样的内容",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/"
  },
  {
    "id": "177",
    "sentence": "much more cheaply",
    "chinese": "更便宜地",
    "pronunciation": "/mʌtʃ/ /mɔːr/ /ˈtʃiːpli/"
  },
  {
    "id": "178",
    "sentence": "If you study online , you can learn the same material much more cheaply",
    "chinese": "如果你选择在线学习，你可以以更低的成本学到同样的内容",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/ /mʌtʃ/ /mɔːr/ /ˈtʃiːpli/"
  },
  {
    "id": "179",
    "sentence": "for much less",
    "chinese": "以更低的成本",
    "pronunciation": "/fɔːr; fər/ /mʌtʃ/ /lɛs/"
  },
  {
    "id": "180",
    "sentence": "If you study online , you can learn the same material much more cheaply , for much less",
    "chinese": "如果你选择在线学习，你可以以更低的成本学到同样的内容",
    "pronunciation": "/ɪf/ /juː; jʊ/ /ˈstʌdi/ /ˌɑːnˈlaɪn/ /juː; jʊ/ /kæn/ /lɜːrn/ /ðə/ /seɪm/ /məˈtɪriəl/ /mʌtʃ/ /mɔːr/ /ˈtʃiːpli/ /fɔːr; fər/ /mʌtʃ/ /lɛs/"
  },
  {
    "id": "181",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "182",
    "sentence": "I might have to give them both",
    "chinese": "我可能得试试它们两个",
    "pronunciation": "/aɪ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /ðem; ðəm/ /boʊθ/"
  },
  {
    "id": "183",
    "sentence": "Seven : I might have to give them both",
    "chinese": "我可能得试试它们两个",
    "pronunciation": "/ˈsev(ə)n/ /aɪ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /ðem; ðəm/ /boʊθ/"
  },
  {
    "id": "184",
    "sentence": "a try",
    "chinese": "试试",
    "pronunciation": "/ə; eɪ/ /traɪ/"
  },
  {
    "id": "185",
    "sentence": "Seven : I might have to give them both a try",
    "chinese": "我可能得把它们两个都试试",
    "pronunciation": "/ˈsev(ə)n/ /aɪ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /ðem; ðəm/ /boʊθ/ /ə; eɪ/ /traɪ/"
  },
  {
    "id": "186",
    "sentence": "What might you have to do",
    "chinese": "你可能需要做什么？",
    "pronunciation": "/wʌt/ /maɪt/ /juː; jʊ/ /hæv/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "187",
    "sentence": "I might have to give them both",
    "chinese": "我可能得把它们两个都试试",
    "pronunciation": "/aɪ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /ðem; ðəm/ /boʊθ/"
  },
  {
    "id": "188",
    "sentence": "a try",
    "chinese": "试试",
    "pronunciation": "/ə; eɪ/ /traɪ/"
  },
  {
    "id": "189",
    "sentence": "I might have to give them both a try",
    "chinese": "我可能得把它们两个都试试",
    "pronunciation": "/aɪ/ /maɪt/ /hæv/ /tuː; tə/ /ɡɪv/ /ðem; ðəm/ /boʊθ/ /ə; eɪ/ /traɪ/"
  },
  {
    "id": "190",
    "sentence": "Eight :",
    "chinese": "八：",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "191",
    "sentence": "If you try both",
    "chinese": "如果你尝试过两者",
    "pronunciation": "/ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/"
  },
  {
    "id": "192",
    "sentence": "Eight : If you try both",
    "chinese": "八：如果你尝试过两者",
    "pronunciation": "/eɪt/ /ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/"
  },
  {
    "id": "193",
    "sentence": "you should be able to make up your mind",
    "chinese": "你应该能够做出决定",
    "pronunciation": "/juː; jʊ/ /ʃʊd; ʃəd/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /meɪk/ /ʌp/ /jʊr; jər/ /maɪnd/"
  },
  {
    "id": "194",
    "sentence": "Eight : If you try both , you should be able to make up your mind",
    "chinese": "八：如果你两者都尝试过，你应该能够做出决定",
    "pronunciation": "/eɪt/ /ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/ /juː; jʊ/ /ʃʊd; ʃəd/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /meɪk/ /ʌp/ /jʊr; jər/ /maɪnd/"
  },
  {
    "id": "195",
    "sentence": "What might happen",
    "chinese": "可能会发生什么？",
    "pronunciation": "/wʌt/ /maɪt/ /ˈhæpən/"
  },
  {
    "id": "196",
    "sentence": "if you try both",
    "chinese": "如果你两种都试试",
    "pronunciation": "/ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/"
  },
  {
    "id": "197",
    "sentence": "What might happen if you try both ?",
    "chinese": "如果你两种都试试，可能会发生什么呢？",
    "pronunciation": "/wʌt/ /maɪt/ /ˈhæpən/ /ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/"
  },
  {
    "id": "198",
    "sentence": "If you try both",
    "chinese": "如果你两者都尝试过",
    "pronunciation": "/ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/"
  },
  {
    "id": "199",
    "sentence": "you should then be able to make up your mind",
    "chinese": "那么你应该能够做出决定",
    "pronunciation": "/juː; jʊ/ /ʃʊd; ʃəd/ /ðen/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /meɪk/ /ʌp/ /jʊr; jər/ /maɪnd/"
  },
  {
    "id": "200",
    "sentence": "If you try both , you should then be able to make up your mind",
    "chinese": "如果你两者都尝试过，那么你应该能够做出决定",
    "pronunciation": "/ɪf/ /juː; jʊ/ /traɪ/ /boʊθ/ /juː; jʊ/ /ʃʊd; ʃəd/ /ðen/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /meɪk/ /ʌp/ /jʊr; jər/ /maɪnd/"
  },
];
