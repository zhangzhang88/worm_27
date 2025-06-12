export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "This story is about Anne",
    "chinese": "这个故事是关于安妮的",
    "pronunciation": "/ðɪs/ /ˈstɔːri/ /ɪz/ /əˈbaʊt/ /æn/"
  },
  {
    "id": "2",
    "sentence": "I think",
    "chinese": "我认为",
    "pronunciation": "/aɪ/ /θɪŋk/"
  },
  {
    "id": "3",
    "sentence": "it might rain today",
    "chinese": "今天可能会下雨",
    "pronunciation": "/ɪt/ /maɪt/ /reɪn/ /təˈdeɪ/"
  },
  {
    "id": "4",
    "sentence": "I think it might rain today",
    "chinese": "我认为今天可能会下雨",
    "pronunciation": "/aɪ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /təˈdeɪ/"
  },
  {
    "id": "5",
    "sentence": "because there are dark clouds",
    "chinese": "因为天上有乌云",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/"
  },
  {
    "id": "6",
    "sentence": "I think it might rain today , because there are dark clouds",
    "chinese": "我认为今天可能会下雨，因为天上有乌云",
    "pronunciation": "/aɪ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /təˈdeɪ/ /bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/"
  },
  {
    "id": "7",
    "sentence": "in the sky",
    "chinese": "在天空中",
    "pronunciation": "/ɪn/ /ðə/ /skaɪ/"
  },
  {
    "id": "8",
    "sentence": "I think it might rain today , because there are dark clouds in the sky",
    "chinese": "我认为今天可能会下雨，因为天上有乌云",
    "pronunciation": "/aɪ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /təˈdeɪ/ /bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/ /ɪn/ /ðə/ /skaɪ/"
  },
  {
    "id": "9",
    "sentence": "Even if it doesn't start raining",
    "chinese": "即使不会开始下雨",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /ɪt/ /ˈdʌznt/ /stɑːrt/ /ˈreɪnɪŋ/"
  },
  {
    "id": "10",
    "sentence": "I'd better take my umbrella with me",
    "chinese": "我最好带上伞",
    "pronunciation": "/aɪd/ /ˈbetər/ /teɪk/ /maɪ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "11",
    "sentence": "Even if it doesn't start raining , I'd better take my umbrella with me",
    "chinese": "即使不会下雨，我还是最好带上伞",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /ɪt/ /ˈdʌznt/ /stɑːrt/ /ˈreɪnɪŋ/ /aɪd/ /ˈbetər/ /teɪk/ /maɪ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "12",
    "sentence": "since I got soaked yesterday",
    "chinese": "因为昨天我被淋透了",
    "pronunciation": "/sɪns/ /aɪ/ /ɡɑːt/ /soʊkt/ /ˈjestərdeɪ/"
  },
  {
    "id": "13",
    "sentence": "Even if it doesn't start raining , I'd better take my umbrella with me , since I got soaked yesterday",
    "chinese": "即使不会下雨，我还是最好带上伞，因为昨天我被淋透了",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /ɪt/ /ˈdʌznt/ /stɑːrt/ /ˈreɪnɪŋ/ /aɪd/ /ˈbetər/ /teɪk/ /maɪ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/ /sɪns/ /aɪ/ /ɡɑːt/ /soʊkt/ /ˈjestərdeɪ/"
  },
  {
    "id": "14",
    "sentence": "Sometimes I decide",
    "chinese": "有时候我决定",
    "pronunciation": "/ˈsʌmtaɪmz/ /aɪ/ /dɪˈsaɪd/"
  },
  {
    "id": "15",
    "sentence": "not to take an umbrella",
    "chinese": "不带伞",
    "pronunciation": "/nɑːt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "16",
    "sentence": "Sometimes I decide not to take an umbrella",
    "chinese": "有时候我决定不带伞",
    "pronunciation": "/ˈsʌmtaɪmz/ /aɪ/ /dɪˈsaɪd/ /nɑːt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "17",
    "sentence": "Sometimes I just forget",
    "chinese": "有时候我忘了",
    "pronunciation": "/ˈsʌmtaɪmz/ /aɪ/ /dʒʌst/ /fərˈɡet/"
  },
  {
    "id": "18",
    "sentence": "to take one",
    "chinese": "吃一粒",
    "pronunciation": "/tuː; tə/ /teɪk/ /wʌn/"
  },
  {
    "id": "19",
    "sentence": "Sometimes I just forget to take one",
    "chinese": "有时候我忘了吃一粒",
    "pronunciation": "/ˈsʌmtaɪmz/ /aɪ/ /dʒʌst/ /fərˈɡet/ /tuː; tə/ /teɪk/ /wʌn/"
  },
  {
    "id": "20",
    "sentence": "I often hesitate",
    "chinese": "我经常犹豫",
    "pronunciation": "/aɪ/ /ˈɔːf(ə)n/ /ˈhezɪteɪt/"
  },
  {
    "id": "21",
    "sentence": "to take an umbrella with me",
    "chinese": "带伞",
    "pronunciation": "/tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "22",
    "sentence": "I often hesitate to take an umbrella with me",
    "chinese": "我经常犹豫要不要带伞",
    "pronunciation": "/aɪ/ /ˈɔːf(ə)n/ /ˈhezɪteɪt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "23",
    "sentence": "when I should",
    "chinese": "当我应该的时候",
    "pronunciation": "/wen/ /aɪ/ /ʃʊd; ʃəd/"
  },
  {
    "id": "24",
    "sentence": "I often hesitate to take an umbrella with me , when I should",
    "chinese": "我经常在应该带伞的时候犹豫不决",
    "pronunciation": "/aɪ/ /ˈɔːf(ə)n/ /ˈhezɪteɪt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/ /wen/ /aɪ/ /ʃʊd; ʃəd/"
  },
  {
    "id": "25",
    "sentence": "This is because",
    "chinese": "这是因为",
    "pronunciation": "/ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "26",
    "sentence": "I know",
    "chinese": "我知道",
    "pronunciation": "/aɪ/ /noʊ/"
  },
  {
    "id": "27",
    "sentence": "This is because I know",
    "chinese": "这是因为我知道",
    "pronunciation": "/ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /noʊ/"
  },
  {
    "id": "28",
    "sentence": "I often leave my umbrella behind",
    "chinese": "我常常把伞落在某个地方",
    "pronunciation": "/aɪ/ /ˈɔːf(ə)n/ /liːv/ /maɪ/ /ʌmˈbrelə/ /bɪˈhaɪnd/"
  },
  {
    "id": "29",
    "sentence": "This is because I know I often leave my umbrella behind",
    "chinese": "这是因为我知道我经常把伞落在某个地方",
    "pronunciation": "/ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /noʊ/ /aɪ/ /ˈɔːf(ə)n/ /liːv/ /maɪ/ /ʌmˈbrelə/ /bɪˈhaɪnd/"
  },
  {
    "id": "30",
    "sentence": "somewhere",
    "chinese": "某个地方",
    "pronunciation": "/ˈsʌmwer/"
  },
  {
    "id": "31",
    "sentence": "This is because I know I often leave my umbrella behind somewhere",
    "chinese": "这是因为我知道我经常把伞落在某个地方",
    "pronunciation": "/ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /noʊ/ /aɪ/ /ˈɔːf(ə)n/ /liːv/ /maɪ/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/"
  },
  {
    "id": "32",
    "sentence": "when I do take one with me",
    "chinese": "当我确实带伞的时候",
    "pronunciation": "/wen/ /aɪ/ /duː; də/ /teɪk/ /wʌn/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "33",
    "sentence": "This is because I know I often leave my umbrella behind somewhere when I do take one with me",
    "chinese": "这是因为我知道，即使我带了伞，也常常会把它落在某个地方",
    "pronunciation": "/ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /noʊ/ /aɪ/ /ˈɔːf(ə)n/ /liːv/ /maɪ/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/ /wen/ /aɪ/ /duː; də/ /teɪk/ /wʌn/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "34",
    "sentence": "In any case",
    "chinese": "无论如何",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/"
  },
  {
    "id": "35",
    "sentence": "it seems to me",
    "chinese": "我觉得",
    "pronunciation": "/ɪt/ /siːmz/ /tuː; tə/ /miː/"
  },
  {
    "id": "36",
    "sentence": "In any case , it seems to me",
    "chinese": "无论如何，我觉得",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmz/ /tuː; tə/ /miː/"
  },
  {
    "id": "37",
    "sentence": "that whenever I don't take my umbrella",
    "chinese": "每当我忘记带伞时",
    "pronunciation": "/ðæt/ /wenˈevər/ /aɪ/ /doʊnt/ /teɪk/ /maɪ/ /ʌmˈbrelə/"
  },
  {
    "id": "38",
    "sentence": "In any case , it seems to me that whenever I don't take my umbrella",
    "chinese": "无论如何，我觉得每当我忘记带伞时",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmz/ /tuː; tə/ /miː/ /ðæt/ /wenˈevər/ /aɪ/ /doʊnt/ /teɪk/ /maɪ/ /ʌmˈbrelə/"
  },
  {
    "id": "39",
    "sentence": "it rains",
    "chinese": "天就会下雨",
    "pronunciation": "/ɪt/ /reɪnz/"
  },
  {
    "id": "40",
    "sentence": "In any case , it seems to me that whenever I don't take my umbrella , it rains",
    "chinese": "无论如何，我觉得每当我忘记带伞时，天就会下雨",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmz/ /tuː; tə/ /miː/ /ðæt/ /wenˈevər/ /aɪ/ /doʊnt/ /teɪk/ /maɪ/ /ʌmˈbrelə/ /ɪt/ /reɪnz/"
  },
  {
    "id": "41",
    "sentence": "and I end up getting wet",
    "chinese": "结果我总是被淋湿",
    "pronunciation": "/ænd; ənd/ /aɪ/ /end/ /ʌp/ /ˈɡetɪŋ/ /wet/"
  },
  {
    "id": "42",
    "sentence": "In any case , it seems to me that whenever I don't take my umbrella , it rains and I end up getting wet",
    "chinese": "无论如何，我觉得每当我忘记带伞时，天就会下雨，结果我总是被淋湿",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmz/ /tuː; tə/ /miː/ /ðæt/ /wenˈevər/ /aɪ/ /doʊnt/ /teɪk/ /maɪ/ /ʌmˈbrelə/ /ɪt/ /reɪnz/ /ænd; ənd/ /aɪ/ /end/ /ʌp/ /ˈɡetɪŋ/ /wet/"
  },
  {
    "id": "43",
    "sentence": "Yesterday",
    "chinese": "昨天",
    "pronunciation": "/ˈjestərdeɪ/"
  },
  {
    "id": "44",
    "sentence": "for example",
    "chinese": "例如",
    "pronunciation": "/fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "45",
    "sentence": "Yesterday , for example",
    "chinese": "例如，昨天",
    "pronunciation": "/ˈjestərdeɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "46",
    "sentence": "I thought",
    "chinese": "我以为",
    "pronunciation": "/aɪ/ /θɔːt/"
  },
  {
    "id": "47",
    "sentence": "Yesterday , for example , I thought",
    "chinese": "例如，昨天我以为",
    "pronunciation": "/ˈjestərdeɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /aɪ/ /θɔːt/"
  },
  {
    "id": "48",
    "sentence": "it wouldn't rain",
    "chinese": "不会下雨",
    "pronunciation": "/ɪt/ /ˌwʊdnt/ /reɪn/"
  },
  {
    "id": "49",
    "sentence": "Yesterday , for example , I thought it wouldn't rain",
    "chinese": "例如，昨天我以为不会下雨",
    "pronunciation": "/ˈjestərdeɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /aɪ/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/"
  },
  {
    "id": "50",
    "sentence": "even though",
    "chinese": "尽管",
    "pronunciation": "/ˈiː.vən/ /ðoʊ/"
  },
  {
    "id": "51",
    "sentence": "Yesterday , for example , I thought it wouldn't rain , even though",
    "chinese": "例如，昨天我以为不会下雨，尽管",
    "pronunciation": "/ˈjestərdeɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /aɪ/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/"
  },
  {
    "id": "52",
    "sentence": "the forecast said",
    "chinese": "天气预报说",
    "pronunciation": "/ðə/ /ˈfɔːrkæst/ /sed/"
  },
  {
    "id": "53",
    "sentence": "Yesterday , for example , I thought it wouldn't rain , even though the forecast said",
    "chinese": "例如，昨天我以为不会下雨，尽管天气预报说",
    "pronunciation": "/ˈjestərdeɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /aɪ/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/ /ðə/ /ˈfɔːrkæst/ /sed/"
  },
  {
    "id": "54",
    "sentence": "there was a twenty percent chance of rain",
    "chinese": "有百分之二十的降雨概率",
    "pronunciation": "/ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/"
  },
  {
    "id": "55",
    "sentence": "Yesterday , for example , I thought it wouldn't rain , even though the forecast said there was a twenty percent chance of rain",
    "chinese": "例如，昨天我以为不会下雨，尽管天气预报说有百分之二十的降雨概率",
    "pronunciation": "/ˈjestərdeɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /aɪ/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/ /ðə/ /ˈfɔːrkæst/ /sed/ /ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/"
  },
  {
    "id": "56",
    "sentence": "I left the house",
    "chinese": "我离开了房子",
    "pronunciation": "/aɪ/ /left/ /ðə/ /haʊs/"
  },
  {
    "id": "57",
    "sentence": "without an umbrella",
    "chinese": "没有带伞",
    "pronunciation": "/wɪˈðaʊt/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "58",
    "sentence": "I left the house without an umbrella",
    "chinese": "我没有带伞就出门了",
    "pronunciation": "/aɪ/ /left/ /ðə/ /haʊs/ /wɪˈðaʊt/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "59",
    "sentence": "hoping for the best",
    "chinese": "希望能有好运气",
    "pronunciation": "/ˈhoʊpɪŋ/ /fɔːr; fər/ /ðə/ /best/"
  },
  {
    "id": "60",
    "sentence": "I left the house without an umbrella , hoping for the best",
    "chinese": "我没有带伞就出门了，希望能有好运气",
    "pronunciation": "/aɪ/ /left/ /ðə/ /haʊs/ /wɪˈðaʊt/ /æn; ən/ /ʌmˈbrelə/ /ˈhoʊpɪŋ/ /fɔːr; fər/ /ðə/ /best/"
  },
  {
    "id": "61",
    "sentence": "But what do you know",
    "chinese": "可是你知道吗？",
    "pronunciation": "/bʌt/ /wʌt/ /duː; də/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "62",
    "sentence": "it rained",
    "chinese": "下雨了",
    "pronunciation": "/ɪt/ /reɪnd/"
  },
  {
    "id": "63",
    "sentence": "But what do you know , it rained",
    "chinese": "可是你知道吗，下雨了",
    "pronunciation": "/bʌt/ /wʌt/ /duː; də/ /juː; jʊ/ /noʊ/ /ɪt/ /reɪnd/"
  },
  {
    "id": "64",
    "sentence": "and I got drenched",
    "chinese": "我被淋湿了",
    "pronunciation": "/ænd; ənd/ /aɪ/ /ɡɑːt/ /drentʃt/"
  },
  {
    "id": "65",
    "sentence": "But what do you know , it rained and I got drenched",
    "chinese": "可是你知道吗，下雨了，我被淋湿了",
    "pronunciation": "/bʌt/ /wʌt/ /duː; də/ /juː; jʊ/ /noʊ/ /ɪt/ /reɪnd/ /ænd; ənd/ /aɪ/ /ɡɑːt/ /drentʃt/"
  },
  {
    "id": "66",
    "sentence": "I am just going to have to be",
    "chinese": "我必须",
    "pronunciation": "/aɪ/ /æm; əm/ /dʒʌst/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/"
  },
  {
    "id": "67",
    "sentence": "more careful",
    "chinese": "更加小心",
    "pronunciation": "/mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "68",
    "sentence": "I am just going to have to be more careful",
    "chinese": "我必须更加小心",
    "pronunciation": "/aɪ/ /æm; əm/ /dʒʌst/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "69",
    "sentence": "I need to be more careful",
    "chinese": "我需要更加小心",
    "pronunciation": "/aɪ/ /niːd/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "70",
    "sentence": "about taking an umbrella",
    "chinese": "关于带伞",
    "pronunciation": "/əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "71",
    "sentence": "I need to be more careful about taking an umbrella",
    "chinese": "我需要更加小心地记得带伞",
    "pronunciation": "/aɪ/ /niːd/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "72",
    "sentence": "and more careful",
    "chinese": "并且更加小心",
    "pronunciation": "/ænd; ənd/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "73",
    "sentence": "I need to be more careful about taking an umbrella , and more careful",
    "chinese": "我需要更加小心地记得带伞，并且更加小心",
    "pronunciation": "/aɪ/ /niːd/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/ /ænd; ənd/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "74",
    "sentence": "about remembering to bring it back home",
    "chinese": "记得把它带回家",
    "pronunciation": "/əˈbaʊt/ /rɪˈmembərɪŋ/ /tuː; tə/ /brɪŋ/ /ɪt/ /bæk/ /hoʊm/"
  },
  {
    "id": "75",
    "sentence": "I need to be more careful about taking an umbrella , and more careful about remembering to bring it back home",
    "chinese": "我需要更加小心地记得带伞，并且更加小心地记得把它带回家",
    "pronunciation": "/aɪ/ /niːd/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/ /ænd; ənd/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /rɪˈmembərɪŋ/ /tuː; tə/ /brɪŋ/ /ɪt/ /bæk/ /hoʊm/"
  },
  {
    "id": "76",
    "sentence": "Life is full of difficult decisions",
    "chinese": "生活中充满了艰难的抉择",
    "pronunciation": "/laɪf/ /ɪz/ /fʊl/ /ʌv/ /ˈdɪfɪkəlt/ /dɪˈsɪʒənz/"
  },
  {
    "id": "77",
    "sentence": "Now the story",
    "chinese": "现在故事",
    "pronunciation": "/naʊ/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "78",
    "sentence": "told differently",
    "chinese": "以不同的方式讲述",
    "pronunciation": "/toʊld/ /ˈdɪfrəntli/"
  },
  {
    "id": "79",
    "sentence": "Now the story told differently",
    "chinese": "现在故事以不同的方式讲述",
    "pronunciation": "/naʊ/ /ðə/ /ˈstɔːri/ /toʊld/ /ˈdɪfrəntli/"
  },
  {
    "id": "80",
    "sentence": "Anne thought",
    "chinese": "安妮认为",
    "pronunciation": "/æn/ /θɔːt/"
  },
  {
    "id": "81",
    "sentence": "it would rain",
    "chinese": "会下雨",
    "pronunciation": "/ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "82",
    "sentence": "Anne thought it would rain",
    "chinese": "安妮认为会下雨",
    "pronunciation": "/æn/ /θɔːt/ /ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "83",
    "sentence": "last Monday",
    "chinese": "上周一",
    "pronunciation": "/læst/ /ˈmʌndeɪ/"
  },
  {
    "id": "84",
    "sentence": "Anne thought it would rain last Monday",
    "chinese": "安妮认为上周一会下雨",
    "pronunciation": "/æn/ /θɔːt/ /ɪt/ /wʊd/ /reɪn/ /læst/ /ˈmʌndeɪ/"
  },
  {
    "id": "85",
    "sentence": "because there were dark clouds",
    "chinese": "因为天上有乌云",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /wɜːr; wər/ /dɑrk/ /klaʊdz/"
  },
  {
    "id": "86",
    "sentence": "Anne thought it would rain last Monday , because there were dark clouds",
    "chinese": "安妮认为上周一会下雨，因为天空中有乌云",
    "pronunciation": "/æn/ /θɔːt/ /ɪt/ /wʊd/ /reɪn/ /læst/ /ˈmʌndeɪ/ /bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /wɜːr; wər/ /dɑrk/ /klaʊdz/"
  },
  {
    "id": "87",
    "sentence": "in the sky",
    "chinese": "在天空中",
    "pronunciation": "/ɪn/ /ðə/ /skaɪ/"
  },
  {
    "id": "88",
    "sentence": "Anne thought it would rain last Monday , because there were dark clouds in the sky",
    "chinese": "安妮认为上周一会下雨，因为天空中有乌云",
    "pronunciation": "/æn/ /θɔːt/ /ɪt/ /wʊd/ /reɪn/ /læst/ /ˈmʌndeɪ/ /bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /wɜːr; wər/ /dɑrk/ /klaʊdz/ /ɪn/ /ðə/ /skaɪ/"
  },
  {
    "id": "89",
    "sentence": "Even if it didn't start raining",
    "chinese": "即使没有开始下雨",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /ɪt/ /ˈdɪd(ə)nt/ /stɑːrt/ /ˈreɪnɪŋ/"
  },
  {
    "id": "90",
    "sentence": "she thought",
    "chinese": "她认为",
    "pronunciation": "/ʃiː; ʃi/ /θɔːt/"
  },
  {
    "id": "91",
    "sentence": "Even if it didn't start raining , she thought",
    "chinese": "即使没有开始下雨，她也认为",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /ɪt/ /ˈdɪd(ə)nt/ /stɑːrt/ /ˈreɪnɪŋ/ /ʃiː; ʃi/ /θɔːt/"
  },
  {
    "id": "92",
    "sentence": "she'd better take her umbrella with her",
    "chinese": "她最好带上伞",
    "pronunciation": "/ʃiːd/ /ˈbetər/ /teɪk/ /hɚ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /hɚ/"
  },
  {
    "id": "93",
    "sentence": "Even if it didn't start raining , she thought she'd better take her umbrella with her",
    "chinese": "即使没有开始下雨，她也认为最好带上伞",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /ɪt/ /ˈdɪd(ə)nt/ /stɑːrt/ /ˈreɪnɪŋ/ /ʃiː; ʃi/ /θɔːt/ /ʃiːd/ /ˈbetər/ /teɪk/ /hɚ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /hɚ/"
  },
  {
    "id": "94",
    "sentence": "since she had gotten soaked",
    "chinese": "因为她前一天已经被淋透了",
    "pronunciation": "/sɪns/ /ʃiː; ʃi/ /hæd/ /ˈɡɑːtn/ /soʊkt/"
  },
  {
    "id": "95",
    "sentence": "Even if it didn't start raining , she thought she'd better take her umbrella with her , since she had gotten soaked",
    "chinese": "即使没有开始下雨，她也认为最好带上伞，因为她前一天已经被淋透了",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /ɪt/ /ˈdɪd(ə)nt/ /stɑːrt/ /ˈreɪnɪŋ/ /ʃiː; ʃi/ /θɔːt/ /ʃiːd/ /ˈbetər/ /teɪk/ /hɚ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /hɚ/ /sɪns/ /ʃiː; ʃi/ /hæd/ /ˈɡɑːtn/ /soʊkt/"
  },
  {
    "id": "96",
    "sentence": "the previous day",
    "chinese": "前一天",
    "pronunciation": "/ðə/ /ˈpriːviəs/ /deɪ/"
  },
  {
    "id": "97",
    "sentence": "Even if it didn't start raining , she thought she'd better take her umbrella with her , since she had gotten soaked the previous day",
    "chinese": "即使没有开始下雨，她也认为最好带上伞，因为她前一天已经被淋透了",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /ɪt/ /ˈdɪd(ə)nt/ /stɑːrt/ /ˈreɪnɪŋ/ /ʃiː; ʃi/ /θɔːt/ /ʃiːd/ /ˈbetər/ /teɪk/ /hɚ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /hɚ/ /sɪns/ /ʃiː; ʃi/ /hæd/ /ˈɡɑːtn/ /soʊkt/ /ðə/ /ˈpriːviəs/ /deɪ/"
  },
  {
    "id": "98",
    "sentence": "It was true",
    "chinese": "确实",
    "pronunciation": "/ɪt/ /wʌz; wəz/ /truː/"
  },
  {
    "id": "99",
    "sentence": "that she often decided",
    "chinese": "她常常决定",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /ˈɔːf(ə)n/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "100",
    "sentence": "It was true that she often decided",
    "chinese": "确实，她常常决定",
    "pronunciation": "/ɪt/ /wʌz; wəz/ /truː/ /ðæt/ /ʃiː; ʃi/ /ˈɔːf(ə)n/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "101",
    "sentence": "not to take an umbrella",
    "chinese": "不带伞",
    "pronunciation": "/nɑːt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "102",
    "sentence": "It was true that she often decided not to take an umbrella",
    "chinese": "确实，她常常决定不带伞",
    "pronunciation": "/ɪt/ /wʌz; wəz/ /truː/ /ðæt/ /ʃiː; ʃi/ /ˈɔːf(ə)n/ /dɪˈsaɪdɪd/ /nɑːt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "103",
    "sentence": "or simply just forgot",
    "chinese": "或者干脆就忘了",
    "pronunciation": "/ɔr/ /ˈsɪmpli/ /dʒʌst/ /fərˈɡɑːt/"
  },
  {
    "id": "104",
    "sentence": "It was true that she often decided not to take an umbrella , or simply just forgot",
    "chinese": "确实，她常常决定不带伞，或者干脆就忘了带",
    "pronunciation": "/ɪt/ /wʌz; wəz/ /truː/ /ðæt/ /ʃiː; ʃi/ /ˈɔːf(ə)n/ /dɪˈsaɪdɪd/ /nɑːt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /ɔr/ /ˈsɪmpli/ /dʒʌst/ /fərˈɡɑːt/"
  },
  {
    "id": "105",
    "sentence": "to take one",
    "chinese": "带一把",
    "pronunciation": "/tuː; tə/ /teɪk/ /wʌn/"
  },
  {
    "id": "106",
    "sentence": "It was true that she often decided not to take an umbrella , or simply just forgot to take one",
    "chinese": "确实，她常常决定不带伞，或者干脆就忘了带",
    "pronunciation": "/ɪt/ /wʌz; wəz/ /truː/ /ðæt/ /ʃiː; ʃi/ /ˈɔːf(ə)n/ /dɪˈsaɪdɪd/ /nɑːt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /ɔr/ /ˈsɪmpli/ /dʒʌst/ /fərˈɡɑːt/ /tuː; tə/ /teɪk/ /wʌn/"
  },
  {
    "id": "107",
    "sentence": "Furthermore",
    "chinese": "此外",
    "pronunciation": "/ˌfɜːrðərˈmɔːr/"
  },
  {
    "id": "108",
    "sentence": "she often hesitated",
    "chinese": "她常常犹豫",
    "pronunciation": "/ʃiː; ʃi/ /ˈɔːf(ə)n/ /ˈhezɪteɪtɪd; ˈhezəteɪtɪd/"
  },
  {
    "id": "109",
    "sentence": "Furthermore , she often hesitated",
    "chinese": "此外，她常常犹豫",
    "pronunciation": "/ˌfɜːrðərˈmɔːr/ /ʃiː; ʃi/ /ˈɔːf(ə)n/ /ˈhezɪteɪtɪd; ˈhezəteɪtɪd/"
  },
  {
    "id": "110",
    "sentence": "to take an umbrella with her",
    "chinese": "带上伞",
    "pronunciation": "/tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /hɚ/"
  },
  {
    "id": "111",
    "sentence": "Furthermore , she often hesitated to take an umbrella with her",
    "chinese": "此外，她常常犹豫要不要带伞",
    "pronunciation": "/ˌfɜːrðərˈmɔːr/ /ʃiː; ʃi/ /ˈɔːf(ə)n/ /ˈhezɪteɪtɪd; ˈhezəteɪtɪd/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /hɚ/"
  },
  {
    "id": "112",
    "sentence": "when she should have taken one",
    "chinese": "当她本应该带一把伞的时候",
    "pronunciation": "/wen/ /ʃiː; ʃi/ /ʃʊd; ʃəd/ /hæv/ /ˈteɪkən/ /wʌn/"
  },
  {
    "id": "113",
    "sentence": "Furthermore , she often hesitated to take an umbrella with her , when she should have taken one",
    "chinese": "此外，她常常在应该带伞的时候犹豫不决，最终没有带上",
    "pronunciation": "/ˌfɜːrðərˈmɔːr/ /ʃiː; ʃi/ /ˈɔːf(ə)n/ /ˈhezɪteɪtɪd; ˈhezəteɪtɪd/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /hɚ/ /wen/ /ʃiː; ʃi/ /ʃʊd; ʃəd/ /hæv/ /ˈteɪkən/ /wʌn/"
  },
  {
    "id": "114",
    "sentence": "This was because",
    "chinese": "这是因为",
    "pronunciation": "/ðɪs/ /wʌz; wəz/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "115",
    "sentence": "she knew",
    "chinese": "她知道",
    "pronunciation": "/ʃiː; ʃi/ /nuː/"
  },
  {
    "id": "116",
    "sentence": "This was because she knew",
    "chinese": "这是因为她知道",
    "pronunciation": "/ðɪs/ /wʌz; wəz/ /bɪˈkəz, bɪˈkɔːz/ /ʃiː; ʃi/ /nuː/"
  },
  {
    "id": "117",
    "sentence": "that she would often leave her umbrella behind somewhere",
    "chinese": "她会常常把伞落在某个地方",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /wʊd/ /ˈɔːf(ə)n/ /liːv/ /hɚ/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/"
  },
  {
    "id": "118",
    "sentence": "This was because she knew that she would often leave her umbrella behind somewhere",
    "chinese": "这是因为她知道，她常常会把伞落在某个地方",
    "pronunciation": "/ðɪs/ /wʌz; wəz/ /bɪˈkəz, bɪˈkɔːz/ /ʃiː; ʃi/ /nuː/ /ðæt/ /ʃiː; ʃi/ /wʊd/ /ˈɔːf(ə)n/ /liːv/ /hɚ/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/"
  },
  {
    "id": "119",
    "sentence": "when she did take one with her",
    "chinese": "当她确实带伞出门时",
    "pronunciation": "/wen/ /ʃiː; ʃi/ /dɪd/ /teɪk/ /wʌn/ /wɪð; wɪθ/ /hɚ/"
  },
  {
    "id": "120",
    "sentence": "This was because she knew that she would often leave her umbrella behind somewhere , when she did take one with her",
    "chinese": "这是因为她知道，当她确实带伞出门时，她常常会把伞落在某个地方",
    "pronunciation": "/ðɪs/ /wʌz; wəz/ /bɪˈkəz, bɪˈkɔːz/ /ʃiː; ʃi/ /nuː/ /ðæt/ /ʃiː; ʃi/ /wʊd/ /ˈɔːf(ə)n/ /liːv/ /hɚ/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/ /wen/ /ʃiː; ʃi/ /dɪd/ /teɪk/ /wʌn/ /wɪð; wɪθ/ /hɚ/"
  },
  {
    "id": "121",
    "sentence": "In any case",
    "chinese": "无论如何",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/"
  },
  {
    "id": "122",
    "sentence": "it seemed to Anne",
    "chinese": "安妮似乎觉得",
    "pronunciation": "/ɪt/ /siːmd/ /tuː; tə/ /æn/"
  },
  {
    "id": "123",
    "sentence": "In any case , it seemed to Anne",
    "chinese": "无论如何，安妮似乎觉得",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmd/ /tuː; tə/ /æn/"
  },
  {
    "id": "124",
    "sentence": "that whenever she didn't take her umbrella",
    "chinese": "每当她不带伞的时候",
    "pronunciation": "/ðæt/ /wenˈevər/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /teɪk/ /hɚ/ /ʌmˈbrelə/"
  },
  {
    "id": "125",
    "sentence": "In any case , it seemed to Anne that whenever she didn't take her umbrella",
    "chinese": "无论如何，安妮似乎觉得，每当她不带伞的时候",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmd/ /tuː; tə/ /æn/ /ðæt/ /wenˈevər/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /teɪk/ /hɚ/ /ʌmˈbrelə/"
  },
  {
    "id": "126",
    "sentence": "it would rain",
    "chinese": "天就会下雨",
    "pronunciation": "/ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "127",
    "sentence": "In any case , it seemed to Anne that whenever she didn't take her umbrella , it would rain",
    "chinese": "无论如何，安妮似乎觉得，每当她不带伞的时候，天就会下雨",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmd/ /tuː; tə/ /æn/ /ðæt/ /wenˈevər/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /teɪk/ /hɚ/ /ʌmˈbrelə/ /ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "128",
    "sentence": "and she would end up getting wet",
    "chinese": "而她最终会淋湿",
    "pronunciation": "/ænd; ənd/ /ʃiː; ʃi/ /wʊd/ /end/ /ʌp/ /ˈɡetɪŋ/ /wet/"
  },
  {
    "id": "129",
    "sentence": "In any case , it seemed to Anne that whenever she didn't take her umbrella , it would rain and she would end up getting wet",
    "chinese": "无论如何，安妮似乎觉得，每当她不带伞的时候，天就会下雨，而她最终会淋湿",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmd/ /tuː; tə/ /æn/ /ðæt/ /wenˈevər/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /teɪk/ /hɚ/ /ʌmˈbrelə/ /ɪt/ /wʊd/ /reɪn/ /ænd; ənd/ /ʃiː; ʃi/ /wʊd/ /end/ /ʌp/ /ˈɡetɪŋ/ /wet/"
  },
  {
    "id": "130",
    "sentence": "The other day",
    "chinese": "前几天",
    "pronunciation": "/ðə/ /ˈʌðər/ /deɪ/"
  },
  {
    "id": "131",
    "sentence": "for example",
    "chinese": "例如",
    "pronunciation": "/fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "132",
    "sentence": "The other day , for example",
    "chinese": "前几天，例如",
    "pronunciation": "/ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "133",
    "sentence": "she had thought",
    "chinese": "她曾认为",
    "pronunciation": "/ʃiː; ʃi/ /hæd/ /θɔːt/"
  },
  {
    "id": "134",
    "sentence": "The other day , for example , she had thought",
    "chinese": "例如，前几天她认为",
    "pronunciation": "/ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/"
  },
  {
    "id": "135",
    "sentence": "it wouldn't rain",
    "chinese": "不会下雨",
    "pronunciation": "/ɪt/ /ˌwʊdnt/ /reɪn/"
  },
  {
    "id": "136",
    "sentence": "The other day , for example , she had thought it wouldn't rain",
    "chinese": "例如，前几天她认为不会下雨",
    "pronunciation": "/ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/"
  },
  {
    "id": "137",
    "sentence": "even though",
    "chinese": "尽管",
    "pronunciation": "/ˈiː.vən/ /ðoʊ/"
  },
  {
    "id": "138",
    "sentence": "The other day , for example , she had thought it wouldn't rain , even though",
    "chinese": "例如，前几天她认为不会下雨，尽管",
    "pronunciation": "/ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/"
  },
  {
    "id": "139",
    "sentence": "the forecast had said",
    "chinese": "天气预报说",
    "pronunciation": "/ðə/ /ˈfɔːrkæst/ /hæd/ /sed/"
  },
  {
    "id": "140",
    "sentence": "The other day , for example , she had thought it wouldn't rain , even though the forecast had said",
    "chinese": "例如，前几天她认为不会下雨，尽管天气预报说",
    "pronunciation": "/ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/ /ðə/ /ˈfɔːrkæst/ /hæd/ /sed/"
  },
  {
    "id": "141",
    "sentence": "that there was a twenty percent chance of rain",
    "chinese": "有百分之二十的降雨概率",
    "pronunciation": "/ðæt/ /ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/"
  },
  {
    "id": "142",
    "sentence": "The other day , for example , she had thought it wouldn't rain , even though the forecast had said that there was a twenty percent chance of rain",
    "chinese": "例如，前几天她认为不会下雨，尽管天气预报说有百分之二十的降雨概率",
    "pronunciation": "/ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/ /ðə/ /ˈfɔːrkæst/ /hæd/ /sed/ /ðæt/ /ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/"
  },
  {
    "id": "143",
    "sentence": "She had left the house",
    "chinese": "她离开了家",
    "pronunciation": "/ʃiː; ʃi/ /hæd/ /left/ /ðə/ /haʊs/"
  },
  {
    "id": "144",
    "sentence": "without an umbrella",
    "chinese": "没带伞",
    "pronunciation": "/wɪˈðaʊt/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "145",
    "sentence": "She had left the house without an umbrella",
    "chinese": "她没带伞就离开了家",
    "pronunciation": "/ʃiː; ʃi/ /hæd/ /left/ /ðə/ /haʊs/ /wɪˈðaʊt/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "146",
    "sentence": "hoping for the best",
    "chinese": "希望一切顺利",
    "pronunciation": "/ˈhoʊpɪŋ/ /fɔːr; fər/ /ðə/ /best/"
  },
  {
    "id": "147",
    "sentence": "She had left the house without an umbrella , hoping for the best",
    "chinese": "她没带伞就离开了家，希望一切顺利",
    "pronunciation": "/ʃiː; ʃi/ /hæd/ /left/ /ðə/ /haʊs/ /wɪˈðaʊt/ /æn; ən/ /ʌmˈbrelə/ /ˈhoʊpɪŋ/ /fɔːr; fər/ /ðə/ /best/"
  },
  {
    "id": "148",
    "sentence": "But what do you know",
    "chinese": "但你知道吗？",
    "pronunciation": "/bʌt/ /wʌt/ /duː; də/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "149",
    "sentence": "it had rained",
    "chinese": "天竟然下雨了",
    "pronunciation": "/ɪt/ /hæd/ /reɪnd/"
  },
  {
    "id": "150",
    "sentence": "But what do you know , it had rained",
    "chinese": "但你知道吗，天竟然下雨了",
    "pronunciation": "/bʌt/ /wʌt/ /duː; də/ /juː; jʊ/ /noʊ/ /ɪt/ /hæd/ /reɪnd/"
  },
  {
    "id": "151",
    "sentence": "and she had gotten drenched",
    "chinese": "她被淋得湿透了",
    "pronunciation": "/ænd; ənd/ /ʃiː; ʃi/ /hæd/ /ˈɡɑːtn/ /drentʃt/"
  },
  {
    "id": "152",
    "sentence": "But what do you know , it had rained and she had gotten drenched",
    "chinese": "但你知道吗，天竟然下雨了，她被淋得湿透了",
    "pronunciation": "/bʌt/ /wʌt/ /duː; də/ /juː; jʊ/ /noʊ/ /ɪt/ /hæd/ /reɪnd/ /ænd; ənd/ /ʃiː; ʃi/ /hæd/ /ˈɡɑːtn/ /drentʃt/"
  },
  {
    "id": "153",
    "sentence": "She thought to herself",
    "chinese": "她暗自思忖",
    "pronunciation": "/ʃiː; ʃi/ /θɔːt/ /tuː; tə/ /hɜːrˈself/"
  },
  {
    "id": "154",
    "sentence": "that she was just going to have to be more careful",
    "chinese": "她必须更加小心",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /wʌz; wəz/ /dʒʌst/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "155",
    "sentence": "She thought to herself that she was just going to have to be more careful",
    "chinese": "她暗自思忖，自己必须更加小心",
    "pronunciation": "/ʃiː; ʃi/ /θɔːt/ /tuː; tə/ /hɜːrˈself/ /ðæt/ /ʃiː; ʃi/ /wʌz; wəz/ /dʒʌst/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "156",
    "sentence": "She was going to have to be more careful",
    "chinese": "她将不得不更加小心",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "157",
    "sentence": "about taking an umbrella",
    "chinese": "关于带上雨伞",
    "pronunciation": "/əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "158",
    "sentence": "She was going to have to be more careful about taking an umbrella",
    "chinese": "她将不得不更加小心地带上雨伞",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "159",
    "sentence": "and more careful",
    "chinese": "并且更加小心",
    "pronunciation": "/ænd; ənd/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "160",
    "sentence": "She was going to have to be more careful about taking an umbrella , and more careful",
    "chinese": "她将不得不更加小心地带上雨伞，并且更加小心",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/ /ænd; ənd/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "161",
    "sentence": "about remembering to bring it back home",
    "chinese": "记得把它带回家",
    "pronunciation": "/əˈbaʊt/ /rɪˈmembərɪŋ/ /tuː; tə/ /brɪŋ/ /ɪt/ /bæk/ /hoʊm/"
  },
  {
    "id": "162",
    "sentence": "She was going to have to be more careful about taking an umbrella , and more careful about remembering to bring it back home",
    "chinese": "她将不得不更加小心地带上雨伞，并且更加小心地记得把它带回家",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/ /ænd; ənd/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /rɪˈmembərɪŋ/ /tuː; tə/ /brɪŋ/ /ɪt/ /bæk/ /hoʊm/"
  },
  {
    "id": "163",
    "sentence": "Life is full of difficult decisions",
    "chinese": "生活中充满了艰难的抉择",
    "pronunciation": "/laɪf/ /ɪz/ /fʊl/ /ʌv/ /ˈdɪfɪkəlt/ /dɪˈsɪʒənz/"
  },
  {
    "id": "164",
    "sentence": "Next",
    "chinese": "接下来",
    "pronunciation": "/nekst/"
  },
  {
    "id": "165",
    "sentence": "I'll ask some questions",
    "chinese": "我会问一些问题",
    "pronunciation": "/aɪl/ /æsk/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "166",
    "sentence": "Next , I'll ask some questions",
    "chinese": "接下来，我会问一些问题",
    "pronunciation": "/nekst/ /aɪl/ /æsk/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "167",
    "sentence": "about Anne's story",
    "chinese": "关于安妮的故事",
    "pronunciation": "/əˈbaʊt/ /ænz/ /ˈstɔːri/"
  },
  {
    "id": "168",
    "sentence": "Next , I'll ask some questions about Anne's story",
    "chinese": "接下来，我会问一些关于安妮故事的问题",
    "pronunciation": "/nekst/ /aɪl/ /æsk/ /sʌm; səm/ /ˈkwestʃənz/ /əˈbaʊt/ /ænz/ /ˈstɔːri/"
  },
  {
    "id": "169",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "170",
    "sentence": "I think it might rain today",
    "chinese": "我觉得今天可能会下雨",
    "pronunciation": "/aɪ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /təˈdeɪ/"
  },
  {
    "id": "171",
    "sentence": "One : I think it might rain today",
    "chinese": "一：我觉得今天可能会下雨",
    "pronunciation": "/wʌn/ /aɪ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /təˈdeɪ/"
  },
  {
    "id": "172",
    "sentence": "because there are dark clouds",
    "chinese": "因为天上有乌云",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/"
  },
  {
    "id": "173",
    "sentence": "One : I think it might rain today , because there are dark clouds",
    "chinese": "一：我觉得今天可能会下雨，因为天上有乌云",
    "pronunciation": "/wʌn/ /aɪ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /təˈdeɪ/ /bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/"
  },
  {
    "id": "174",
    "sentence": "in the sky",
    "chinese": "在天空中",
    "pronunciation": "/ɪn/ /ðə/ /skaɪ/"
  },
  {
    "id": "175",
    "sentence": "One : I think it might rain today , because there are dark clouds in the sky",
    "chinese": "一：我觉得今天可能会下雨，因为天上有乌云",
    "pronunciation": "/wʌn/ /aɪ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /təˈdeɪ/ /bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/ /ɪn/ /ðə/ /skaɪ/"
  },
  {
    "id": "176",
    "sentence": "Why do I think",
    "chinese": "为什么我觉得",
    "pronunciation": "/waɪ/ /duː; də/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "177",
    "sentence": "it might rain",
    "chinese": "可能会下雨",
    "pronunciation": "/ɪt/ /maɪt/ /reɪn/"
  },
  {
    "id": "178",
    "sentence": "Why do I think it might rain ?",
    "chinese": "为什么我觉得可能会下雨？",
    "pronunciation": "/waɪ/ /duː; də/ /aɪ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/"
  },
  {
    "id": "179",
    "sentence": "You think",
    "chinese": "你认为",
    "pronunciation": "/juː; jʊ/ /θɪŋk/"
  },
  {
    "id": "180",
    "sentence": "it might rain",
    "chinese": "可能会下雨",
    "pronunciation": "/ɪt/ /maɪt/ /reɪn/"
  },
  {
    "id": "181",
    "sentence": "You think it might rain",
    "chinese": "你认为可能会下雨",
    "pronunciation": "/juː; jʊ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/"
  },
  {
    "id": "182",
    "sentence": "because there are dark clouds",
    "chinese": "因为天上有乌云",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/"
  },
  {
    "id": "183",
    "sentence": "You think it might rain because there are dark clouds",
    "chinese": "你认为可能会下雨，因为天上有乌云",
    "pronunciation": "/juː; jʊ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/"
  },
  {
    "id": "184",
    "sentence": "in the sky",
    "chinese": "在天空中",
    "pronunciation": "/ɪn/ /ðə/ /skaɪ/"
  },
  {
    "id": "185",
    "sentence": "You think it might rain because there are dark clouds in the sky",
    "chinese": "你认为可能会下雨，因为天上有乌云",
    "pronunciation": "/juː; jʊ/ /θɪŋk/ /ɪt/ /maɪt/ /reɪn/ /bɪˈkəz, bɪˈkɔːz/ /ðer; ðər/ /ɑr/ /dɑrk/ /klaʊdz/ /ɪn/ /ðə/ /skaɪ/"
  },
  {
    "id": "186",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "187",
    "sentence": "I'd better take my umbrella with me",
    "chinese": "我最好带上我的伞",
    "pronunciation": "/aɪd/ /ˈbetər/ /teɪk/ /maɪ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "188",
    "sentence": "Two : I'd better take my umbrella with me",
    "chinese": "我最好带上我的伞",
    "pronunciation": "/tuː/ /aɪd/ /ˈbetər/ /teɪk/ /maɪ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "189",
    "sentence": "since I got soaked yesterday",
    "chinese": "因为昨天我被淋湿了",
    "pronunciation": "/sɪns/ /aɪ/ /ɡɑːt/ /soʊkt/ /ˈjestərdeɪ/"
  },
  {
    "id": "190",
    "sentence": "Two : I'd better take my umbrella with me , since I got soaked yesterday",
    "chinese": "二：我最好带上我的伞，因为昨天我被淋湿了",
    "pronunciation": "/tuː/ /aɪd/ /ˈbetər/ /teɪk/ /maɪ/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/ /sɪns/ /aɪ/ /ɡɑːt/ /soʊkt/ /ˈjestərdeɪ/"
  },
  {
    "id": "191",
    "sentence": "Why had I better take my umbrella",
    "chinese": "为什么我最好带上我的伞？",
    "pronunciation": "/waɪ/ /hæd/ /aɪ/ /ˈbetər/ /teɪk/ /maɪ/ /ʌmˈbrelə/"
  },
  {
    "id": "192",
    "sentence": "You should take your umbrella",
    "chinese": "你应该带上雨伞",
    "pronunciation": "/juː; jʊ/ /ʃʊd; ʃəd/ /teɪk/ /jʊr; jər/ /ʌmˈbrelə/"
  },
  {
    "id": "193",
    "sentence": "because you got soaked yesterday",
    "chinese": "因为你昨天被淋湿了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /ɡɑːt/ /soʊkt/ /ˈjestərdeɪ/"
  },
  {
    "id": "194",
    "sentence": "You should take your umbrella because you got soaked yesterday",
    "chinese": "你应该带上雨伞，因为你昨天被淋湿了",
    "pronunciation": "/juː; jʊ/ /ʃʊd; ʃəd/ /teɪk/ /jʊr; jər/ /ʌmˈbrelə/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /ɡɑːt/ /soʊkt/ /ˈjestərdeɪ/"
  },
  {
    "id": "195",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "196",
    "sentence": "I often hesitate",
    "chinese": "我常常犹豫",
    "pronunciation": "/aɪ/ /ˈɔːf(ə)n/ /ˈhezɪteɪt/"
  },
  {
    "id": "197",
    "sentence": "Three : I often hesitate",
    "chinese": "三：我常常犹豫",
    "pronunciation": "/θriː/ /aɪ/ /ˈɔːf(ə)n/ /ˈhezɪteɪt/"
  },
  {
    "id": "198",
    "sentence": "to take an umbrella with me",
    "chinese": "带伞",
    "pronunciation": "/tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "199",
    "sentence": "Three : I often hesitate to take an umbrella with me",
    "chinese": "三：我常常在应该带伞的时候犹豫不决",
    "pronunciation": "/θriː/ /aɪ/ /ˈɔːf(ə)n/ /ˈhezɪteɪt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "200",
    "sentence": "when I should",
    "chinese": "当我应该的时候",
    "pronunciation": "/wen/ /aɪ/ /ʃʊd; ʃəd/"
  },
  {
    "id": "201",
    "sentence": "Three : I often hesitate to take an umbrella with me , when I should",
    "chinese": "三：我常常在应该带伞的时候犹豫不决",
    "pronunciation": "/θriː/ /aɪ/ /ˈɔːf(ə)n/ /ˈhezɪteɪt/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/ /wen/ /aɪ/ /ʃʊd; ʃəd/"
  },
  {
    "id": "202",
    "sentence": "Am I always sure",
    "chinese": "我总是确定吗？",
    "pronunciation": "/æm; əm/ /aɪ/ /ˈɔːlweɪz/ /ʃʊr/"
  },
  {
    "id": "203",
    "sentence": "to take an umbrella with me",
    "chinese": "随身携带雨伞",
    "pronunciation": "/tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "204",
    "sentence": "Am I always sure to take an umbrella with me ?",
    "chinese": "我是否总是要随身携带雨伞？",
    "pronunciation": "/æm; əm/ /aɪ/ /ˈɔːlweɪz/ /ʃʊr/ /tuː; tə/ /teɪk/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "205",
    "sentence": "No",
    "chinese": "不",
    "pronunciation": "/noʊ/"
  },
  {
    "id": "206",
    "sentence": "sometimes you hesitate",
    "chinese": "有时候你会犹豫",
    "pronunciation": "/ˈsʌmtaɪmz/ /juː; jʊ/ /ˈhezɪteɪt/"
  },
  {
    "id": "207",
    "sentence": "No , sometimes you hesitate",
    "chinese": "不，有时候你会犹豫",
    "pronunciation": "/noʊ/ /ˈsʌmtaɪmz/ /juː; jʊ/ /ˈhezɪteɪt/"
  },
  {
    "id": "208",
    "sentence": "to bring an umbrella with you",
    "chinese": "带伞",
    "pronunciation": "/tuː; tə/ /brɪŋ/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /juː; jʊ/"
  },
  {
    "id": "209",
    "sentence": "No , sometimes you hesitate to bring an umbrella with you",
    "chinese": "不，有时候你会犹豫是否要带伞",
    "pronunciation": "/noʊ/ /ˈsʌmtaɪmz/ /juː; jʊ/ /ˈhezɪteɪt/ /tuː; tə/ /brɪŋ/ /æn; ən/ /ʌmˈbrelə/ /wɪð; wɪθ/ /juː; jʊ/"
  },
  {
    "id": "210",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "211",
    "sentence": "This is because",
    "chinese": "这是因为",
    "pronunciation": "/ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "212",
    "sentence": "Four : This is because",
    "chinese": "四：这是因为",
    "pronunciation": "/fɔr/ /ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/"
  },
  {
    "id": "213",
    "sentence": "I know",
    "chinese": "我知道",
    "pronunciation": "/aɪ/ /noʊ/"
  },
  {
    "id": "214",
    "sentence": "Four : This is because I know",
    "chinese": "四：这是因为我知道",
    "pronunciation": "/fɔr/ /ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /noʊ/"
  },
  {
    "id": "215",
    "sentence": "I often leave my umbrella behind somewhere",
    "chinese": "我常常会把它落在某个地方",
    "pronunciation": "/aɪ/ /ˈɔːf(ə)n/ /liːv/ /maɪ/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/"
  },
  {
    "id": "216",
    "sentence": "Four : This is because I know I often leave my umbrella behind somewhere",
    "chinese": "四：这是因为我知道我经常把伞落在某个地方",
    "pronunciation": "/fɔr/ /ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /noʊ/ /aɪ/ /ˈɔːf(ə)n/ /liːv/ /maɪ/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/"
  },
  {
    "id": "217",
    "sentence": "when I do take one with me",
    "chinese": "即使我带了伞",
    "pronunciation": "/wen/ /aɪ/ /duː; də/ /teɪk/ /wʌn/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "218",
    "sentence": "Four : This is because I know I often leave my umbrella behind somewhere when I do take one with me",
    "chinese": "四：这是因为我知道，即使我带了伞，我也常常会把它落在某个地方",
    "pronunciation": "/fɔr/ /ðɪs/ /ɪz/ /bɪˈkəz, bɪˈkɔːz/ /aɪ/ /noʊ/ /aɪ/ /ˈɔːf(ə)n/ /liːv/ /maɪ/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/ /wen/ /aɪ/ /duː; də/ /teɪk/ /wʌn/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "219",
    "sentence": "What do I often do",
    "chinese": "我经常做什么",
    "pronunciation": "/wʌt/ /duː; də/ /aɪ/ /ˈɔːf(ə)n/ /duː; də/"
  },
  {
    "id": "220",
    "sentence": "with my umbrella",
    "chinese": "用我的伞",
    "pronunciation": "/wɪð; wɪθ/ /maɪ/ /ʌmˈbrelə/"
  },
  {
    "id": "221",
    "sentence": "What do I often do with my umbrella ?",
    "chinese": "我经常用我的伞做什么？",
    "pronunciation": "/wʌt/ /duː; də/ /aɪ/ /ˈɔːf(ə)n/ /duː; də/ /wɪð; wɪθ/ /maɪ/ /ʌmˈbrelə/"
  },
  {
    "id": "222",
    "sentence": "You often leave your umbrella behind",
    "chinese": "你经常把伞落在某个地方",
    "pronunciation": "/juː; jʊ/ /ˈɔːf(ə)n/ /liːv/ /jʊr; jər/ /ʌmˈbrelə/ /bɪˈhaɪnd/"
  },
  {
    "id": "223",
    "sentence": "somewhere",
    "chinese": "某个地方",
    "pronunciation": "/ˈsʌmwer/"
  },
  {
    "id": "224",
    "sentence": "You often leave your umbrella behind somewhere",
    "chinese": "你经常把伞落在某个地方",
    "pronunciation": "/juː; jʊ/ /ˈɔːf(ə)n/ /liːv/ /jʊr; jər/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/"
  },
  {
    "id": "225",
    "sentence": "when you do take one with you",
    "chinese": "当你确实带着一把伞的时候",
    "pronunciation": "/wen/ /juː; jʊ/ /duː; də/ /teɪk/ /wʌn/ /wɪð; wɪθ/ /juː; jʊ/"
  },
  {
    "id": "226",
    "sentence": "You often leave your umbrella behind somewhere when you do take one with you",
    "chinese": "你经常带着伞出门，却总是把它落在某个地方",
    "pronunciation": "/juː; jʊ/ /ˈɔːf(ə)n/ /liːv/ /jʊr; jər/ /ʌmˈbrelə/ /bɪˈhaɪnd/ /ˈsʌmwer/ /wen/ /juː; jʊ/ /duː; də/ /teɪk/ /wʌn/ /wɪð; wɪθ/ /juː; jʊ/"
  },
  {
    "id": "227",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "228",
    "sentence": "In any case",
    "chinese": "无论如何",
    "pronunciation": "/ɪn/ /ˈeni/ /keɪs/"
  },
  {
    "id": "229",
    "sentence": "Five : In any case",
    "chinese": "五：无论如何",
    "pronunciation": "/faɪv/ /ɪn/ /ˈeni/ /keɪs/"
  },
  {
    "id": "230",
    "sentence": "it seemed to Anne",
    "chinese": "安妮似乎觉得",
    "pronunciation": "/ɪt/ /siːmd/ /tuː; tə/ /æn/"
  },
  {
    "id": "231",
    "sentence": "Five : In any case , it seemed to Anne",
    "chinese": "五：无论如何，安妮似乎觉得",
    "pronunciation": "/faɪv/ /ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmd/ /tuː; tə/ /æn/"
  },
  {
    "id": "232",
    "sentence": "that whenever she didn't take her umbrella",
    "chinese": "每当她不带伞的时候",
    "pronunciation": "/ðæt/ /wenˈevər/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /teɪk/ /hɚ/ /ʌmˈbrelə/"
  },
  {
    "id": "233",
    "sentence": "Five : In any case , it seemed to Anne that whenever she didn't take her umbrella",
    "chinese": "五：无论如何，安妮似乎觉得，每当她不带伞的时候",
    "pronunciation": "/faɪv/ /ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmd/ /tuː; tə/ /æn/ /ðæt/ /wenˈevər/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /teɪk/ /hɚ/ /ʌmˈbrelə/"
  },
  {
    "id": "234",
    "sentence": "it would rain",
    "chinese": "天就会下雨",
    "pronunciation": "/ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "235",
    "sentence": "Five : In any case , it seemed to Anne that whenever she didn't take her umbrella , it would rain",
    "chinese": "五：无论如何，安妮似乎觉得，每当她不带伞的时候，天就会下雨",
    "pronunciation": "/faɪv/ /ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmd/ /tuː; tə/ /æn/ /ðæt/ /wenˈevər/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /teɪk/ /hɚ/ /ʌmˈbrelə/ /ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "236",
    "sentence": "and she would end up getting wet",
    "chinese": "而她最终也会被淋湿",
    "pronunciation": "/ænd; ənd/ /ʃiː; ʃi/ /wʊd/ /end/ /ʌp/ /ˈɡetɪŋ/ /wet/"
  },
  {
    "id": "237",
    "sentence": "Five : In any case , it seemed to Anne that whenever she didn't take her umbrella , it would rain and she would end up getting wet",
    "chinese": "五：无论如何，安妮似乎觉得，每当她不带伞的时候，天就会下雨，而她最终也会被淋湿",
    "pronunciation": "/faɪv/ /ɪn/ /ˈeni/ /keɪs/ /ɪt/ /siːmd/ /tuː; tə/ /æn/ /ðæt/ /wenˈevər/ /ʃiː; ʃi/ /ˈdɪd(ə)nt/ /teɪk/ /hɚ/ /ʌmˈbrelə/ /ɪt/ /wʊd/ /reɪn/ /ænd; ənd/ /ʃiː; ʃi/ /wʊd/ /end/ /ʌp/ /ˈɡetɪŋ/ /wet/"
  },
  {
    "id": "238",
    "sentence": "What would happen to Anne",
    "chinese": "安妮会怎么样？",
    "pronunciation": "/wʌt/ /wʊd/ /ˈhæpən/ /tuː; tə/ /æn/"
  },
  {
    "id": "239",
    "sentence": "when it would rain",
    "chinese": "下雨时",
    "pronunciation": "/wen/ /ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "240",
    "sentence": "What would happen to Anne when it would rain ?",
    "chinese": "安妮在下雨时会怎么样？",
    "pronunciation": "/wʌt/ /wʊd/ /ˈhæpən/ /tuː; tə/ /æn/ /wen/ /ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "241",
    "sentence": "It would rain",
    "chinese": "天会下雨",
    "pronunciation": "/ɪt/ /wʊd/ /reɪn/"
  },
  {
    "id": "242",
    "sentence": "and she would end up getting wet",
    "chinese": "她最终会淋湿",
    "pronunciation": "/ænd; ənd/ /ʃiː; ʃi/ /wʊd/ /end/ /ʌp/ /ˈɡetɪŋ/ /wet/"
  },
  {
    "id": "243",
    "sentence": "It would rain and she would end up getting wet",
    "chinese": "天会下雨，她最终会淋湿",
    "pronunciation": "/ɪt/ /wʊd/ /reɪn/ /ænd; ənd/ /ʃiː; ʃi/ /wʊd/ /end/ /ʌp/ /ˈɡetɪŋ/ /wet/"
  },
  {
    "id": "244",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "245",
    "sentence": "The other day",
    "chinese": "前几天",
    "pronunciation": "/ðə/ /ˈʌðər/ /deɪ/"
  },
  {
    "id": "246",
    "sentence": "Six : The other day",
    "chinese": "前几天",
    "pronunciation": "/sɪks/ /ðə/ /ˈʌðər/ /deɪ/"
  },
  {
    "id": "247",
    "sentence": "for example",
    "chinese": "比如说",
    "pronunciation": "/fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "248",
    "sentence": "Six : The other day , for example",
    "chinese": "比如说，前几天",
    "pronunciation": "/sɪks/ /ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "249",
    "sentence": "she had thought",
    "chinese": "她曾认为",
    "pronunciation": "/ʃiː; ʃi/ /hæd/ /θɔːt/"
  },
  {
    "id": "250",
    "sentence": "Six : The other day , for example , she had thought",
    "chinese": "比如说，前几天她认为",
    "pronunciation": "/sɪks/ /ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/"
  },
  {
    "id": "251",
    "sentence": "it wouldn't rain",
    "chinese": "不会下雨",
    "pronunciation": "/ɪt/ /ˌwʊdnt/ /reɪn/"
  },
  {
    "id": "252",
    "sentence": "Six : The other day , for example , she had thought it wouldn't rain",
    "chinese": "比如说，前几天她认为不会下雨",
    "pronunciation": "/sɪks/ /ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/"
  },
  {
    "id": "253",
    "sentence": "even though",
    "chinese": "尽管",
    "pronunciation": "/ˈiː.vən/ /ðoʊ/"
  },
  {
    "id": "254",
    "sentence": "Six : The other day , for example , she had thought it wouldn't rain , even though",
    "chinese": "比如说，前几天她认为不会下雨，尽管",
    "pronunciation": "/sɪks/ /ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/"
  },
  {
    "id": "255",
    "sentence": "the forecast had said",
    "chinese": "天气预报说",
    "pronunciation": "/ðə/ /ˈfɔːrkæst/ /hæd/ /sed/"
  },
  {
    "id": "256",
    "sentence": "Six : The other day , for example , she had thought it wouldn't rain , even though the forecast had said",
    "chinese": "比如说，前几天她认为不会下雨，尽管天气预报说",
    "pronunciation": "/sɪks/ /ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/ /ðə/ /ˈfɔːrkæst/ /hæd/ /sed/"
  },
  {
    "id": "257",
    "sentence": "there was a twenty percent chance of rain",
    "chinese": "有百分之二十的降雨概率",
    "pronunciation": "/ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/"
  },
  {
    "id": "258",
    "sentence": "Six : The other day , for example , she had thought it wouldn't rain , even though the forecast had said there was a twenty percent chance of rain",
    "chinese": "比如说，前几天她认为不会下雨，尽管天气预报说有百分之二十的降雨概率",
    "pronunciation": "/sɪks/ /ðə/ /ˈʌðər/ /deɪ/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ʃiː; ʃi/ /hæd/ /θɔːt/ /ɪt/ /ˌwʊdnt/ /reɪn/ /ˈiː.vən/ /ðoʊ/ /ðə/ /ˈfɔːrkæst/ /hæd/ /sed/ /ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/"
  },
  {
    "id": "259",
    "sentence": "What percent chance of rain",
    "chinese": "下雨的概率是多少？",
    "pronunciation": "/wʌt/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/"
  },
  {
    "id": "260",
    "sentence": "had the forecast said",
    "chinese": "天气预报说",
    "pronunciation": "/hæd/ /ðə/ /ˈfɔːrkæst/ /sed/"
  },
  {
    "id": "261",
    "sentence": "What percent chance of rain had the forecast said",
    "chinese": "天气预报说下雨的概率是多少？",
    "pronunciation": "/wʌt/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/ /hæd/ /ðə/ /ˈfɔːrkæst/ /sed/"
  },
  {
    "id": "262",
    "sentence": "there was",
    "chinese": "有",
    "pronunciation": "/ðer; ðər/ /wʌz; wəz/"
  },
  {
    "id": "263",
    "sentence": "What percent chance of rain had the forecast said there was ?",
    "chinese": "天气预报说下雨的概率是多少？",
    "pronunciation": "/wʌt/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/ /hæd/ /ðə/ /ˈfɔːrkæst/ /sed/ /ðer; ðər/ /wʌz; wəz/"
  },
  {
    "id": "264",
    "sentence": "The forecast had said",
    "chinese": "预报说",
    "pronunciation": "/ðə/ /ˈfɔːrkæst/ /hæd/ /sed/"
  },
  {
    "id": "265",
    "sentence": "that there was a twenty percent chance",
    "chinese": "有百分之二十的可能性",
    "pronunciation": "/ðæt/ /ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/"
  },
  {
    "id": "266",
    "sentence": "The forecast had said that there was a twenty percent chance",
    "chinese": "预报说有百分之二十的降雨概率",
    "pronunciation": "/ðə/ /ˈfɔːrkæst/ /hæd/ /sed/ /ðæt/ /ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/"
  },
  {
    "id": "267",
    "sentence": "of rain",
    "chinese": "降雨",
    "pronunciation": "/ʌv/ /reɪn/"
  },
  {
    "id": "268",
    "sentence": "The forecast had said that there was a twenty percent chance of rain",
    "chinese": "预报说有百分之二十的降雨概率",
    "pronunciation": "/ðə/ /ˈfɔːrkæst/ /hæd/ /sed/ /ðæt/ /ðer; ðər/ /wʌz; wəz/ /ə; eɪ/ /ˈtwenti/ /pərˈsent/ /tʃæns/ /ʌv/ /reɪn/"
  },
  {
    "id": "269",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "270",
    "sentence": "She thought to herself",
    "chinese": "她暗自思忖",
    "pronunciation": "/ʃiː; ʃi/ /θɔːt/ /tuː; tə/ /hɜːrˈself/"
  },
  {
    "id": "271",
    "sentence": "Seven : She thought to herself",
    "chinese": "七：她暗自思忖",
    "pronunciation": "/ˈsev(ə)n/ /ʃiː; ʃi/ /θɔːt/ /tuː; tə/ /hɜːrˈself/"
  },
  {
    "id": "272",
    "sentence": "that she was just going to have to be more careful",
    "chinese": "她必须更加小心",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /wʌz; wəz/ /dʒʌst/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "273",
    "sentence": "Seven : She thought to herself that she was just going to have to be more careful",
    "chinese": "七：她暗自思忖，自己必须更加小心谨慎",
    "pronunciation": "/ˈsev(ə)n/ /ʃiː; ʃi/ /θɔːt/ /tuː; tə/ /hɜːrˈself/ /ðæt/ /ʃiː; ʃi/ /wʌz; wəz/ /dʒʌst/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "274",
    "sentence": "What was Anne going to have to be",
    "chinese": "安妮将要成为什么？",
    "pronunciation": "/wʌt/ /wʌz; wəz/ /æn/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/"
  },
  {
    "id": "275",
    "sentence": "She was going to have to be",
    "chinese": "她将不得不",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/"
  },
  {
    "id": "276",
    "sentence": "more careful",
    "chinese": "更加小心",
    "pronunciation": "/mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "277",
    "sentence": "She was going to have to be more careful",
    "chinese": "她将不得不更加小心",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "278",
    "sentence": "Eight :",
    "chinese": "八：",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "279",
    "sentence": "She was going to have to be more careful",
    "chinese": "她得更加小心",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "280",
    "sentence": "Eight : She was going to have to be more careful",
    "chinese": "八：她以后得更加小心",
    "pronunciation": "/eɪt/ /ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "281",
    "sentence": "about taking an umbrella",
    "chinese": "关于带伞",
    "pronunciation": "/əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "282",
    "sentence": "Eight : She was going to have to be more careful about taking an umbrella",
    "chinese": "八：她以后得更加小心带伞了",
    "pronunciation": "/eɪt/ /ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "283",
    "sentence": "What was Anne going to have to be",
    "chinese": "安妮需要更加小心什么？",
    "pronunciation": "/wʌt/ /wʌz; wəz/ /æn/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/"
  },
  {
    "id": "284",
    "sentence": "more careful about",
    "chinese": "更加小心什么？",
    "pronunciation": "/mɔːr/ /ˈkerfəl/ /əˈbaʊt/"
  },
  {
    "id": "285",
    "sentence": "What was Anne going to have to be more careful about ?",
    "chinese": "安妮需要更加小心什么？",
    "pronunciation": "/wʌt/ /wʌz; wəz/ /æn/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/"
  },
  {
    "id": "286",
    "sentence": "She was going to have to be more careful",
    "chinese": "她得更加小心",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/"
  },
  {
    "id": "287",
    "sentence": "about taking an umbrella",
    "chinese": "关于带伞",
    "pronunciation": "/əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/"
  },
  {
    "id": "288",
    "sentence": "She was going to have to be more careful about taking an umbrella",
    "chinese": "她得更加小心地记得带伞",
    "pronunciation": "/ʃiː; ʃi/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /hæv/ /tuː; tə/ /biː/ /mɔːr/ /ˈkerfəl/ /əˈbaʊt/ /ˈteɪkɪŋ/ /æn; ən/ /ʌmˈbrelə/"
  },
];
