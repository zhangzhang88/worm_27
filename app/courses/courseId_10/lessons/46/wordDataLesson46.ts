export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "This is a story",
    "chinese": "这是一个故事",
    "pronunciation": "/ðɪs/ /ɪz/ /ə; eɪ/ /ˈstɔːri/"
  },
  {
    "id": "2",
    "sentence": "about Lin",
    "chinese": "关于林",
    "pronunciation": "/əˈbaʊt/ /lɪn/"
  },
  {
    "id": "3",
    "sentence": "This is a story about Lin",
    "chinese": "这是一个关于林的故事",
    "pronunciation": "/ðɪs/ /ɪz/ /ə; eɪ/ /ˈstɔːri/ /əˈbaʊt/ /lɪn/"
  },
  {
    "id": "4",
    "sentence": "who is going on an airplane",
    "chinese": "正在乘坐飞机",
    "pronunciation": "/huː/ /ɪz/ /ˈɡoʊɪŋ/ /ɑːn/ /æn; ən/ /ˈer.pleɪn/"
  },
  {
    "id": "5",
    "sentence": "This is a story about Lin who is going on an airplane",
    "chinese": "这是一个关于林乘坐飞机的故事",
    "pronunciation": "/ðɪs/ /ɪz/ /ə; eɪ/ /ˈstɔːri/ /əˈbaʊt/ /lɪn/ /huː/ /ɪz/ /ˈɡoʊɪŋ/ /ɑːn/ /æn; ən/ /ˈer.pleɪn/"
  },
  {
    "id": "6",
    "sentence": "Lin will be catching a flight",
    "chinese": "林将搭乘航班",
    "pronunciation": "/lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/"
  },
  {
    "id": "7",
    "sentence": "to LA",
    "chinese": "飞往洛杉矶",
    "pronunciation": "/tuː; tə/ /lɑ/"
  },
  {
    "id": "8",
    "sentence": "Lin will be catching a flight to LA",
    "chinese": "林将搭乘飞往洛杉矶的航班",
    "pronunciation": "/lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/ /tuː; tə/ /lɑ/"
  },
  {
    "id": "9",
    "sentence": "tonight",
    "chinese": "今晚",
    "pronunciation": "/təˈnaɪt/"
  },
  {
    "id": "10",
    "sentence": "Lin will be catching a flight to LA tonight",
    "chinese": "林今晚将搭乘飞往洛杉矶的航班",
    "pronunciation": "/lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/ /tuː; tə/ /lɑ/ /təˈnaɪt/"
  },
  {
    "id": "11",
    "sentence": "She has an important sales presentation",
    "chinese": "她有一个重要的销售演示",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/"
  },
  {
    "id": "12",
    "sentence": "to give there",
    "chinese": "要在那里做",
    "pronunciation": "/tuː; tə/ /ɡɪv/ /ðer; ðər/"
  },
  {
    "id": "13",
    "sentence": "She has an important sales presentation to give there",
    "chinese": "她要在那里做一个重要的销售演示",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/ /tuː; tə/ /ɡɪv/ /ðer; ðər/"
  },
  {
    "id": "14",
    "sentence": "She is very nervous about it",
    "chinese": "她对此非常紧张",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/"
  },
  {
    "id": "15",
    "sentence": "since this will be her first time",
    "chinese": "因为这将是她第一次",
    "pronunciation": "/sɪns/ /ðɪs/ /wɪl/ /biː/ /hɚ/ /fɜːrst/ /taɪm/"
  },
  {
    "id": "16",
    "sentence": "She is very nervous about it , since this will be her first time",
    "chinese": "她对此非常紧张，因为这将是她第一次",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/ /sɪns/ /ðɪs/ /wɪl/ /biː/ /hɚ/ /fɜːrst/ /taɪm/"
  },
  {
    "id": "17",
    "sentence": "speaking in front of a large audience",
    "chinese": "在众多观众面前演讲",
    "pronunciation": "/ˈspiːkɪŋ/ /ɪn/ /frʌnt/ /ʌv/ /ə; eɪ/ /lɑːrdʒ/ /ˈɔːdiəns/"
  },
  {
    "id": "18",
    "sentence": "She is very nervous about it , since this will be her first time speaking in front of a large audience",
    "chinese": "她对此非常紧张，因为这将是她第一次在众多观众面前演讲",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/ /sɪns/ /ðɪs/ /wɪl/ /biː/ /hɚ/ /fɜːrst/ /taɪm/ /ˈspiːkɪŋ/ /ɪn/ /frʌnt/ /ʌv/ /ə; eɪ/ /lɑːrdʒ/ /ˈɔːdiəns/"
  },
  {
    "id": "19",
    "sentence": "Her boss told her",
    "chinese": "她的老板告诉她",
    "pronunciation": "/hɚ/ /bɔːs/ /toʊld/ /hɚ/"
  },
  {
    "id": "20",
    "sentence": "it was very important",
    "chinese": "非常重要",
    "pronunciation": "/ɪt/ /wʌz; wəz/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "21",
    "sentence": "Her boss told her it was very important",
    "chinese": "她的老板告诉她这非常重要",
    "pronunciation": "/hɚ/ /bɔːs/ /toʊld/ /hɚ/ /ɪt/ /wʌz; wəz/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "22",
    "sentence": "that she do a good job",
    "chinese": "她做好工作",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /duː; də/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "23",
    "sentence": "Her boss told her it was very important that she do a good job",
    "chinese": "她的老板告诉她，做好工作非常重要",
    "pronunciation": "/hɚ/ /bɔːs/ /toʊld/ /hɚ/ /ɪt/ /wʌz; wəz/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /ðæt/ /ʃiː; ʃi/ /duː; də/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "24",
    "sentence": "He said",
    "chinese": "他说",
    "pronunciation": "/hiː/ /sed/"
  },
  {
    "id": "25",
    "sentence": "that the success of the new product",
    "chinese": "新产品的成功",
    "pronunciation": "/ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/"
  },
  {
    "id": "26",
    "sentence": "He said that the success of the new product",
    "chinese": "他说新产品的成功",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/"
  },
  {
    "id": "27",
    "sentence": "depended on her",
    "chinese": "取决于她",
    "pronunciation": "/dɪˈpendɪd/ /ɑːn/ /hɚ/"
  },
  {
    "id": "28",
    "sentence": "He said that the success of the new product depended on her",
    "chinese": "他说新产品的成功取决于她",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/ /dɪˈpendɪd/ /ɑːn/ /hɚ/"
  },
  {
    "id": "29",
    "sentence": "Lin doesn't like",
    "chinese": "林不喜欢",
    "pronunciation": "/lɪn/ /ˈdʌznt/ /laɪk/"
  },
  {
    "id": "30",
    "sentence": "this kind of pressure",
    "chinese": "这种压力",
    "pronunciation": "/ðɪs/ /kaɪnd/ /ʌv/ /ˈpreʃər/"
  },
  {
    "id": "31",
    "sentence": "Lin doesn't like this kind of pressure",
    "chinese": "林不喜欢这种压力",
    "pronunciation": "/lɪn/ /ˈdʌznt/ /laɪk/ /ðɪs/ /kaɪnd/ /ʌv/ /ˈpreʃər/"
  },
  {
    "id": "32",
    "sentence": "She's worried",
    "chinese": "她担心",
    "pronunciation": "/ʃiːz/ /ˈwɜːrid/"
  },
  {
    "id": "33",
    "sentence": "that she will get fired",
    "chinese": "她会被解雇",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /wɪl/ /ɡet/ /ˈfaɪərd/"
  },
  {
    "id": "34",
    "sentence": "She's worried that she will get fired",
    "chinese": "她担心会被解雇",
    "pronunciation": "/ʃiːz/ /ˈwɜːrid/ /ðæt/ /ʃiː; ʃi/ /wɪl/ /ɡet/ /ˈfaɪərd/"
  },
  {
    "id": "35",
    "sentence": "if she makes a mistake",
    "chinese": "如果她犯错",
    "pronunciation": "/ɪf/ /ʃiː; ʃi/ /meɪks/ /ə; eɪ/ /mɪˈsteɪk/"
  },
  {
    "id": "36",
    "sentence": "She's worried that she will get fired if she makes a mistake",
    "chinese": "她担心如果犯错会被解雇",
    "pronunciation": "/ʃiːz/ /ˈwɜːrid/ /ðæt/ /ʃiː; ʃi/ /wɪl/ /ɡet/ /ˈfaɪərd/ /ɪf/ /ʃiː; ʃi/ /meɪks/ /ə; eɪ/ /mɪˈsteɪk/"
  },
  {
    "id": "37",
    "sentence": "Nevertheless",
    "chinese": "尽管如此",
    "pronunciation": "/ˌnevərðəˈles/"
  },
  {
    "id": "38",
    "sentence": "she's trying to think",
    "chinese": "她正在努力思考",
    "pronunciation": "/ʃiːz/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "39",
    "sentence": "Nevertheless , she's trying to think",
    "chinese": "尽管如此，她正在努力思考",
    "pronunciation": "/ˌnevərðəˈles/ /ʃiːz/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "40",
    "sentence": "positively",
    "chinese": "积极地",
    "pronunciation": "/ˈpɑːzətɪvli/"
  },
  {
    "id": "41",
    "sentence": "Nevertheless , she's trying to think positively",
    "chinese": "尽管如此，她仍在努力保持积极的心态",
    "pronunciation": "/ˌnevərðəˈles/ /ʃiːz/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/ /ˈpɑːzətɪvli/"
  },
  {
    "id": "42",
    "sentence": "Maybe",
    "chinese": "也许",
    "pronunciation": "/ˈmeɪbi/"
  },
  {
    "id": "43",
    "sentence": "if she does well",
    "chinese": "如果她表现得好",
    "pronunciation": "/ɪf/ /ʃiː; ʃi/ /dʌz/ /wel/"
  },
  {
    "id": "44",
    "sentence": "Maybe if she does well",
    "chinese": "如果她表现得好",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /ʃiː; ʃi/ /dʌz/ /wel/"
  },
  {
    "id": "45",
    "sentence": "she will get promoted",
    "chinese": "她会得到晋升",
    "pronunciation": "/ʃiː; ʃi/ /wɪl/ /ɡet/ /prəˈmoʊtɪd/"
  },
  {
    "id": "46",
    "sentence": "Maybe if she does well , she will get promoted",
    "chinese": "如果她表现得好，也许她会得到晋升",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /ʃiː; ʃi/ /dʌz/ /wel/ /ʃiː; ʃi/ /wɪl/ /ɡet/ /prəˈmoʊtɪd/"
  },
  {
    "id": "47",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "48",
    "sentence": "Maybe if she does well , she will get promoted instead",
    "chinese": "如果她表现得好，也许她会得到晋升",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /ʃiː; ʃi/ /dʌz/ /wel/ /ʃiː; ʃi/ /wɪl/ /ɡet/ /prəˈmoʊtɪd/ /ɪnˈsted/"
  },
  {
    "id": "49",
    "sentence": "Now Lin tells the story",
    "chinese": "现在，林讲述这个故事",
    "pronunciation": "/naʊ/ /lɪn/ /telz/ /ðə/ /ˈstɔːri/"
  },
  {
    "id": "50",
    "sentence": "I am catching a flight",
    "chinese": "我要赶飞机",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/"
  },
  {
    "id": "51",
    "sentence": "to LA",
    "chinese": "去洛杉矶",
    "pronunciation": "/tuː; tə/ /lɑ/"
  },
  {
    "id": "52",
    "sentence": "I am catching a flight to LA",
    "chinese": "我今晚要飞往洛杉矶",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/ /tuː; tə/ /lɑ/"
  },
  {
    "id": "53",
    "sentence": "tonight",
    "chinese": "今晚",
    "pronunciation": "/təˈnaɪt/"
  },
  {
    "id": "54",
    "sentence": "I am catching a flight to LA tonight",
    "chinese": "我今晚要飞往洛杉矶",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/ /tuː; tə/ /lɑ/ /təˈnaɪt/"
  },
  {
    "id": "55",
    "sentence": "I have an important sales presentation",
    "chinese": "我有一个重要的销售演示",
    "pronunciation": "/aɪ/ /hæv/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/"
  },
  {
    "id": "56",
    "sentence": "to give there",
    "chinese": "在那里进行",
    "pronunciation": "/tuː; tə/ /ɡɪv/ /ðer; ðər/"
  },
  {
    "id": "57",
    "sentence": "I have an important sales presentation to give there",
    "chinese": "我有一个重要的销售演示要在那里进行",
    "pronunciation": "/aɪ/ /hæv/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/ /tuː; tə/ /ɡɪv/ /ðer; ðər/"
  },
  {
    "id": "58",
    "sentence": "I am very nervous about it",
    "chinese": "我对此感到非常紧张",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/"
  },
  {
    "id": "59",
    "sentence": "since this is going to be my first time",
    "chinese": "因为这将是我第一次",
    "pronunciation": "/sɪns/ /ðɪs/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /maɪ/ /fɜːrst/ /taɪm/"
  },
  {
    "id": "60",
    "sentence": "I am very nervous about it , since this is going to be my first time",
    "chinese": "我对此感到非常紧张，因为这将是我第一次",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/ /sɪns/ /ðɪs/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /maɪ/ /fɜːrst/ /taɪm/"
  },
  {
    "id": "61",
    "sentence": "speaking in front of a large audience",
    "chinese": "在众多观众面前演讲",
    "pronunciation": "/ˈspiːkɪŋ/ /ɪn/ /frʌnt/ /ʌv/ /ə; eɪ/ /lɑːrdʒ/ /ˈɔːdiəns/"
  },
  {
    "id": "62",
    "sentence": "I am very nervous about it , since this is going to be my first time speaking in front of a large audience",
    "chinese": "我对此感到非常紧张，因为这将是我第一次在众多观众面前演讲",
    "pronunciation": "/aɪ/ /æm; əm/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/ /sɪns/ /ðɪs/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /maɪ/ /fɜːrst/ /taɪm/ /ˈspiːkɪŋ/ /ɪn/ /frʌnt/ /ʌv/ /ə; eɪ/ /lɑːrdʒ/ /ˈɔːdiəns/"
  },
  {
    "id": "63",
    "sentence": "My boss told me",
    "chinese": "我的老板告诉我",
    "pronunciation": "/maɪ/ /bɔːs/ /toʊld/ /miː/"
  },
  {
    "id": "64",
    "sentence": "it's very important",
    "chinese": "非常重要",
    "pronunciation": "/ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "65",
    "sentence": "My boss told me it's very important",
    "chinese": "我的老板告诉我，这非常重要",
    "pronunciation": "/maɪ/ /bɔːs/ /toʊld/ /miː/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "66",
    "sentence": "that I do a good job",
    "chinese": "我做好工作",
    "pronunciation": "/ðæt/ /aɪ/ /duː; də/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "67",
    "sentence": "My boss told me it's very important that I do a good job",
    "chinese": "我的老板告诉我，做好工作非常重要",
    "pronunciation": "/maɪ/ /bɔːs/ /toʊld/ /miː/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /ðæt/ /aɪ/ /duː; də/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "68",
    "sentence": "He said",
    "chinese": "他说",
    "pronunciation": "/hiː/ /sed/"
  },
  {
    "id": "69",
    "sentence": "that the success of the new product",
    "chinese": "新产品的成功",
    "pronunciation": "/ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/"
  },
  {
    "id": "70",
    "sentence": "He said that the success of the new product",
    "chinese": "他说新产品的成功",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/"
  },
  {
    "id": "71",
    "sentence": "depends on me",
    "chinese": "取决于我",
    "pronunciation": "/dɪˈpendz/ /ɑːn/ /miː/"
  },
  {
    "id": "72",
    "sentence": "He said that the success of the new product depends on me",
    "chinese": "他说新产品的成功取决于我",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/ /dɪˈpendz/ /ɑːn/ /miː/"
  },
  {
    "id": "73",
    "sentence": "I don't like",
    "chinese": "我不喜欢",
    "pronunciation": "/aɪ/ /doʊnt/ /laɪk/"
  },
  {
    "id": "74",
    "sentence": "this kind of pressure",
    "chinese": "这种压力",
    "pronunciation": "/ðɪs/ /kaɪnd/ /ʌv/ /ˈpreʃər/"
  },
  {
    "id": "75",
    "sentence": "I don't like this kind of pressure",
    "chinese": "我不喜欢这种压力",
    "pronunciation": "/aɪ/ /doʊnt/ /laɪk/ /ðɪs/ /kaɪnd/ /ʌv/ /ˈpreʃər/"
  },
  {
    "id": "76",
    "sentence": "I'm worried",
    "chinese": "我担心",
    "pronunciation": "/aɪm/ /ˈwɜːrid/"
  },
  {
    "id": "77",
    "sentence": "I'll get fired",
    "chinese": "我会被解雇",
    "pronunciation": "/aɪl/ /ɡet/ /ˈfaɪərd/"
  },
  {
    "id": "78",
    "sentence": "I'm worried I'll get fired",
    "chinese": "我担心会被解雇",
    "pronunciation": "/aɪm/ /ˈwɜːrid/ /aɪl/ /ɡet/ /ˈfaɪərd/"
  },
  {
    "id": "79",
    "sentence": "if I make a mistake",
    "chinese": "如果我犯错",
    "pronunciation": "/ɪf/ /aɪ/ /meɪk/ /ə; eɪ/ /mɪˈsteɪk/"
  },
  {
    "id": "80",
    "sentence": "I'm worried I'll get fired if I make a mistake",
    "chinese": "我担心如果犯错会被解雇",
    "pronunciation": "/aɪm/ /ˈwɜːrid/ /aɪl/ /ɡet/ /ˈfaɪərd/ /ɪf/ /aɪ/ /meɪk/ /ə; eɪ/ /mɪˈsteɪk/"
  },
  {
    "id": "81",
    "sentence": "Nevertheless",
    "chinese": "不过",
    "pronunciation": "/ˌnevərðəˈles/"
  },
  {
    "id": "82",
    "sentence": "I'm trying to think",
    "chinese": "我正在努力思考",
    "pronunciation": "/aɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "83",
    "sentence": "Nevertheless , I'm trying to think",
    "chinese": "不过，我正在努力思考",
    "pronunciation": "/ˌnevərðəˈles/ /aɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "84",
    "sentence": "positively",
    "chinese": "积极地",
    "pronunciation": "/ˈpɑːzətɪvli/"
  },
  {
    "id": "85",
    "sentence": "Nevertheless , I'm trying to think positively",
    "chinese": "不过，我正在努力保持积极的心态",
    "pronunciation": "/ˌnevərðəˈles/ /aɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/ /ˈpɑːzətɪvli/"
  },
  {
    "id": "86",
    "sentence": "Maybe",
    "chinese": "也许",
    "pronunciation": "/ˈmeɪbi/"
  },
  {
    "id": "87",
    "sentence": "if I do well",
    "chinese": "如果我表现得好",
    "pronunciation": "/ɪf/ /aɪ/ /duː; də/ /wel/"
  },
  {
    "id": "88",
    "sentence": "Maybe if I do well",
    "chinese": "也许如果我表现得好",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/"
  },
  {
    "id": "89",
    "sentence": "I'll get promoted",
    "chinese": "我会得到晋升",
    "pronunciation": "/aɪl/ /ɡet/ /prəˈmoʊtɪd/"
  },
  {
    "id": "90",
    "sentence": "Maybe if I do well , I'll get promoted",
    "chinese": "也许如果我表现得好，我会得到晋升",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/ /aɪl/ /ɡet/ /prəˈmoʊtɪd/"
  },
  {
    "id": "91",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "92",
    "sentence": "Maybe if I do well , I'll get promoted instead",
    "chinese": "也许如果我表现得好，我会得到晋升",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/ /aɪl/ /ɡet/ /prəˈmoʊtɪd/ /ɪnˈsted/"
  },
  {
    "id": "93",
    "sentence": "Here are some questions",
    "chinese": "以下是一些问题",
    "pronunciation": "/hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "94",
    "sentence": "about Lin's story",
    "chinese": "关于林的故事",
    "pronunciation": "/əˈbaʊt/ /lɪnz/ /ˈstɔːri/"
  },
  {
    "id": "95",
    "sentence": "Here are some questions about Lin's story",
    "chinese": "以下是关于林的故事的一些问题",
    "pronunciation": "/hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/ /əˈbaʊt/ /lɪnz/ /ˈstɔːri/"
  },
  {
    "id": "96",
    "sentence": "Answer with me",
    "chinese": "和我一起回答",
    "pronunciation": "/ˈænsər/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "97",
    "sentence": "if you like",
    "chinese": "如果你愿意",
    "pronunciation": "/ɪf/ /juː; jʊ/ /laɪk/"
  },
  {
    "id": "98",
    "sentence": "Answer with me if you like",
    "chinese": "如果你愿意，请和我一起回答",
    "pronunciation": "/ˈænsər/ /wɪð; wɪθ/ /miː/ /ɪf/ /juː; jʊ/ /laɪk/"
  },
  {
    "id": "99",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "100",
    "sentence": "Lin will be catching a flight",
    "chinese": "林将搭乘航班",
    "pronunciation": "/lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/"
  },
  {
    "id": "101",
    "sentence": "One : Lin will be catching a flight",
    "chinese": "林将搭乘航班",
    "pronunciation": "/wʌn/ /lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/"
  },
  {
    "id": "102",
    "sentence": "to LA",
    "chinese": "去洛杉矶",
    "pronunciation": "/tuː; tə/ /lɑ/"
  },
  {
    "id": "103",
    "sentence": "One : Lin will be catching a flight to LA",
    "chinese": "林将搭乘飞往洛杉矶的航班",
    "pronunciation": "/wʌn/ /lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/ /tuː; tə/ /lɑ/"
  },
  {
    "id": "104",
    "sentence": "tonight",
    "chinese": "今晚",
    "pronunciation": "/təˈnaɪt/"
  },
  {
    "id": "105",
    "sentence": "One : Lin will be catching a flight to LA tonight",
    "chinese": "林今晚将搭乘飞往洛杉矶的航班",
    "pronunciation": "/wʌn/ /lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/ /tuː; tə/ /lɑ/ /təˈnaɪt/"
  },
  {
    "id": "106",
    "sentence": "When will Lin",
    "chinese": "林什么时候",
    "pronunciation": "/wen/ /wɪl/ /lɪn/"
  },
  {
    "id": "107",
    "sentence": "be catching a flight",
    "chinese": "会搭乘飞机",
    "pronunciation": "/biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/"
  },
  {
    "id": "108",
    "sentence": "When will Lin be catching a flight ?",
    "chinese": "林什么时候会搭乘飞机？",
    "pronunciation": "/wen/ /wɪl/ /lɪn/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/"
  },
  {
    "id": "109",
    "sentence": "Lin will be catching a flight",
    "chinese": "林将搭乘航班",
    "pronunciation": "/lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/"
  },
  {
    "id": "110",
    "sentence": "to LA",
    "chinese": "去洛杉矶",
    "pronunciation": "/tuː; tə/ /lɑ/"
  },
  {
    "id": "111",
    "sentence": "Lin will be catching a flight to LA",
    "chinese": "林将搭乘飞往洛杉矶的航班",
    "pronunciation": "/lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/ /tuː; tə/ /lɑ/"
  },
  {
    "id": "112",
    "sentence": "tonight",
    "chinese": "今晚",
    "pronunciation": "/təˈnaɪt/"
  },
  {
    "id": "113",
    "sentence": "Lin will be catching a flight to LA tonight",
    "chinese": "林今晚将搭乘飞往洛杉矶的航班",
    "pronunciation": "/lɪn/ /wɪl/ /biː/ /ˈkætʃɪŋ; ˈketʃɪŋ/ /ə; eɪ/ /flaɪt/ /tuː; tə/ /lɑ/ /təˈnaɪt/"
  },
  {
    "id": "114",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "115",
    "sentence": "She has an important sales presentation",
    "chinese": "她有一个重要的销售演示",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/"
  },
  {
    "id": "116",
    "sentence": "Two : She has an important sales presentation",
    "chinese": "她有一个重要的销售演示",
    "pronunciation": "/tuː/ /ʃiː; ʃi/ /hæz; həz/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/"
  },
  {
    "id": "117",
    "sentence": "to give there",
    "chinese": "在那里做",
    "pronunciation": "/tuː; tə/ /ɡɪv/ /ðer; ðər/"
  },
  {
    "id": "118",
    "sentence": "Two : She has an important sales presentation to give there",
    "chinese": "她要在那里做一个重要的销售演示",
    "pronunciation": "/tuː/ /ʃiː; ʃi/ /hæz; həz/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/ /tuː; tə/ /ɡɪv/ /ðer; ðər/"
  },
  {
    "id": "119",
    "sentence": "What will she be doing",
    "chinese": "她会在那里做什么？",
    "pronunciation": "/wʌt/ /wɪl/ /ʃiː; ʃi/ /biː/ /ˈduːɪŋ/"
  },
  {
    "id": "120",
    "sentence": "there",
    "chinese": "那里",
    "pronunciation": "/ðer; ðər/"
  },
  {
    "id": "121",
    "sentence": "What will she be doing there ?",
    "chinese": "她在那里会做什么？",
    "pronunciation": "/wʌt/ /wɪl/ /ʃiː; ʃi/ /biː/ /ˈduːɪŋ/ /ðer; ðər/"
  },
  {
    "id": "122",
    "sentence": "She has an important sales presentation",
    "chinese": "她有一个重要的销售演示",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/"
  },
  {
    "id": "123",
    "sentence": "to give there",
    "chinese": "在那里做",
    "pronunciation": "/tuː; tə/ /ɡɪv/ /ðer; ðər/"
  },
  {
    "id": "124",
    "sentence": "She has an important sales presentation to give there",
    "chinese": "她要在那里做一个重要的销售演示",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /æn; ən/ /ɪmˈpɔːrt(ə)nt/ /seɪlz/ /ˌpriːz(ə)nˈteɪʃ(ə)n/ /tuː; tə/ /ɡɪv/ /ðer; ðər/"
  },
  {
    "id": "125",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "126",
    "sentence": "She is very nervous about it",
    "chinese": "她对此非常紧张",
    "pronunciation": "/ʃiː; ʃi/ /ɪz/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/"
  },
  {
    "id": "127",
    "sentence": "Three : She is very nervous about it",
    "chinese": "三：她对此非常紧张",
    "pronunciation": "/θriː/ /ʃiː; ʃi/ /ɪz/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/"
  },
  {
    "id": "128",
    "sentence": "since this will be her first time",
    "chinese": "因为这将是她第一次",
    "pronunciation": "/sɪns/ /ðɪs/ /wɪl/ /biː/ /hɚ/ /fɜːrst/ /taɪm/"
  },
  {
    "id": "129",
    "sentence": "Three : She is very nervous about it , since this will be her first time",
    "chinese": "三：她对此非常紧张，因为这将是她第一次",
    "pronunciation": "/θriː/ /ʃiː; ʃi/ /ɪz/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/ /sɪns/ /ðɪs/ /wɪl/ /biː/ /hɚ/ /fɜːrst/ /taɪm/"
  },
  {
    "id": "130",
    "sentence": "speaking in front of a large audience",
    "chinese": "在众多观众面前演讲",
    "pronunciation": "/ˈspiːkɪŋ/ /ɪn/ /frʌnt/ /ʌv/ /ə; eɪ/ /lɑːrdʒ/ /ˈɔːdiəns/"
  },
  {
    "id": "131",
    "sentence": "Three : She is very nervous about it , since this will be her first time speaking in front of a large audience",
    "chinese": "三：她对此非常紧张，因为这将是她第一次在众多观众面前演讲",
    "pronunciation": "/θriː/ /ʃiː; ʃi/ /ɪz/ /ˈveri/ /ˈnɜːrvəs/ /əˈbaʊt/ /ɪt/ /sɪns/ /ðɪs/ /wɪl/ /biː/ /hɚ/ /fɜːrst/ /taɪm/ /ˈspiːkɪŋ/ /ɪn/ /frʌnt/ /ʌv/ /ə; eɪ/ /lɑːrdʒ/ /ˈɔːdiəns/"
  },
  {
    "id": "132",
    "sentence": "Why is she",
    "chinese": "她为什么",
    "pronunciation": "/waɪ/ /ɪz/ /ʃiː; ʃi/"
  },
  {
    "id": "133",
    "sentence": "very nervous",
    "chinese": "非常紧张",
    "pronunciation": "/ˈveri/ /ˈnɜːrvəs/"
  },
  {
    "id": "134",
    "sentence": "Why is she very nervous ?",
    "chinese": "她为什么非常紧张？",
    "pronunciation": "/waɪ/ /ɪz/ /ʃiː; ʃi/ /ˈveri/ /ˈnɜːrvəs/"
  },
  {
    "id": "135",
    "sentence": "Because this will be her first time",
    "chinese": "因为这将是她的第一次",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðɪs/ /wɪl/ /biː/ /hɚ/ /fɜːrst/ /taɪm/"
  },
  {
    "id": "136",
    "sentence": "speaking in front of a large audience",
    "chinese": "在众多观众面前演讲",
    "pronunciation": "/ˈspiːkɪŋ/ /ɪn/ /frʌnt/ /ʌv/ /ə; eɪ/ /lɑːrdʒ/ /ˈɔːdiəns/"
  },
  {
    "id": "137",
    "sentence": "Because this will be her first time speaking in front of a large audience",
    "chinese": "因为这是她第一次在众多观众面前演讲",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðɪs/ /wɪl/ /biː/ /hɚ/ /fɜːrst/ /taɪm/ /ˈspiːkɪŋ/ /ɪn/ /frʌnt/ /ʌv/ /ə; eɪ/ /lɑːrdʒ/ /ˈɔːdiəns/"
  },
  {
    "id": "138",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "139",
    "sentence": "Her boss told her",
    "chinese": "她的老板告诉她",
    "pronunciation": "/hɚ/ /bɔːs/ /toʊld/ /hɚ/"
  },
  {
    "id": "140",
    "sentence": "Four : Her boss told her",
    "chinese": "四：她的老板告诉她",
    "pronunciation": "/fɔr/ /hɚ/ /bɔːs/ /toʊld/ /hɚ/"
  },
  {
    "id": "141",
    "sentence": "it's very important",
    "chinese": "非常重要",
    "pronunciation": "/ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "142",
    "sentence": "Four : Her boss told her it's very important",
    "chinese": "四：她的老板告诉她，这非常重要",
    "pronunciation": "/fɔr/ /hɚ/ /bɔːs/ /toʊld/ /hɚ/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "143",
    "sentence": "that she do a good job",
    "chinese": "她做好工作",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /duː; də/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "144",
    "sentence": "Four : Her boss told her it's very important that she do a good job",
    "chinese": "四：她的老板告诉她，做好工作非常重要",
    "pronunciation": "/fɔr/ /hɚ/ /bɔːs/ /toʊld/ /hɚ/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /ðæt/ /ʃiː; ʃi/ /duː; də/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "145",
    "sentence": "What did her boss",
    "chinese": "她的老板告诉她什么？",
    "pronunciation": "/wʌt/ /dɪd/ /hɚ/ /bɔːs/"
  },
  {
    "id": "146",
    "sentence": "tell her",
    "chinese": "告诉她",
    "pronunciation": "/tel/ /hɚ/"
  },
  {
    "id": "147",
    "sentence": "What did her boss tell her ?",
    "chinese": "她的老板告诉她什么？",
    "pronunciation": "/wʌt/ /dɪd/ /hɚ/ /bɔːs/ /tel/ /hɚ/"
  },
  {
    "id": "148",
    "sentence": "Her boss told her",
    "chinese": "她的老板告诉她",
    "pronunciation": "/hɚ/ /bɔːs/ /toʊld/ /hɚ/"
  },
  {
    "id": "149",
    "sentence": "it's very important",
    "chinese": "非常重要",
    "pronunciation": "/ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "150",
    "sentence": "Her boss told her it's very important",
    "chinese": "她的老板告诉她，这非常重要",
    "pronunciation": "/hɚ/ /bɔːs/ /toʊld/ /hɚ/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "151",
    "sentence": "that she do a good job",
    "chinese": "她做好工作",
    "pronunciation": "/ðæt/ /ʃiː; ʃi/ /duː; də/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "152",
    "sentence": "Her boss told her it's very important that she do a good job",
    "chinese": "她的老板告诉她，做好工作非常重要",
    "pronunciation": "/hɚ/ /bɔːs/ /toʊld/ /hɚ/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /ðæt/ /ʃiː; ʃi/ /duː; də/ /ə; eɪ/ /ɡʊd/ /dʒɑːb/"
  },
  {
    "id": "153",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "154",
    "sentence": "He said",
    "chinese": "他说",
    "pronunciation": "/hiː/ /sed/"
  },
  {
    "id": "155",
    "sentence": "Five : He said",
    "chinese": "他说",
    "pronunciation": "/faɪv/ /hiː/ /sed/"
  },
  {
    "id": "156",
    "sentence": "that the success of the new product",
    "chinese": "新产品的成功",
    "pronunciation": "/ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/"
  },
  {
    "id": "157",
    "sentence": "Five : He said that the success of the new product",
    "chinese": "他说新产品的成功",
    "pronunciation": "/faɪv/ /hiː/ /sed/ /ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/"
  },
  {
    "id": "158",
    "sentence": "depends on me",
    "chinese": "取决于我",
    "pronunciation": "/dɪˈpendz/ /ɑːn/ /miː/"
  },
  {
    "id": "159",
    "sentence": "Five : He said that the success of the new product depends on me",
    "chinese": "他说新产品的成功取决于我",
    "pronunciation": "/faɪv/ /hiː/ /sed/ /ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/ /dɪˈpendz/ /ɑːn/ /miː/"
  },
  {
    "id": "160",
    "sentence": "What did he say",
    "chinese": "他说了什么？",
    "pronunciation": "/wʌt/ /dɪd/ /hiː/ /seɪ/"
  },
  {
    "id": "161",
    "sentence": "He said",
    "chinese": "他说",
    "pronunciation": "/hiː/ /sed/"
  },
  {
    "id": "162",
    "sentence": "that the success of the new product",
    "chinese": "新产品的成功",
    "pronunciation": "/ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/"
  },
  {
    "id": "163",
    "sentence": "He said that the success of the new product",
    "chinese": "他说新产品的成功",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/"
  },
  {
    "id": "164",
    "sentence": "depends on me",
    "chinese": "取决于我",
    "pronunciation": "/dɪˈpendz/ /ɑːn/ /miː/"
  },
  {
    "id": "165",
    "sentence": "He said that the success of the new product depends on me",
    "chinese": "他说新产品的成功取决于我",
    "pronunciation": "/hiː/ /sed/ /ðæt/ /ðə/ /səkˈses/ /ʌv/ /ðə/ /nuː/ /ˈprɑːdʌkt/ /dɪˈpendz/ /ɑːn/ /miː/"
  },
  {
    "id": "166",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "167",
    "sentence": "I'm worried",
    "chinese": "我担心",
    "pronunciation": "/aɪm/ /ˈwɜːrid/"
  },
  {
    "id": "168",
    "sentence": "Six : I'm worried",
    "chinese": "六：我担心",
    "pronunciation": "/sɪks/ /aɪm/ /ˈwɜːrid/"
  },
  {
    "id": "169",
    "sentence": "I'll get fired",
    "chinese": "我会被解雇",
    "pronunciation": "/aɪl/ /ɡet/ /ˈfaɪərd/"
  },
  {
    "id": "170",
    "sentence": "Six : I'm worried I'll get fired",
    "chinese": "六：我担心会被解雇",
    "pronunciation": "/sɪks/ /aɪm/ /ˈwɜːrid/ /aɪl/ /ɡet/ /ˈfaɪərd/"
  },
  {
    "id": "171",
    "sentence": "if I make a mistake",
    "chinese": "如果我犯错",
    "pronunciation": "/ɪf/ /aɪ/ /meɪk/ /ə; eɪ/ /mɪˈsteɪk/"
  },
  {
    "id": "172",
    "sentence": "Six : I'm worried I'll get fired if I make a mistake",
    "chinese": "六：我担心如果我犯错会被解雇",
    "pronunciation": "/sɪks/ /aɪm/ /ˈwɜːrid/ /aɪl/ /ɡet/ /ˈfaɪərd/ /ɪf/ /aɪ/ /meɪk/ /ə; eɪ/ /mɪˈsteɪk/"
  },
  {
    "id": "173",
    "sentence": "What am I worried about",
    "chinese": "我在担心什么？",
    "pronunciation": "/wʌt/ /æm; əm/ /aɪ/ /ˈwɜːrid/ /əˈbaʊt/"
  },
  {
    "id": "174",
    "sentence": "I'm worried",
    "chinese": "我担心",
    "pronunciation": "/aɪm/ /ˈwɜːrid/"
  },
  {
    "id": "175",
    "sentence": "I'll get fired",
    "chinese": "我会被解雇",
    "pronunciation": "/aɪl/ /ɡet/ /ˈfaɪərd/"
  },
  {
    "id": "176",
    "sentence": "I'm worried I'll get fired",
    "chinese": "我担心会被解雇",
    "pronunciation": "/aɪm/ /ˈwɜːrid/ /aɪl/ /ɡet/ /ˈfaɪərd/"
  },
  {
    "id": "177",
    "sentence": "if I make a mistake",
    "chinese": "如果我犯错",
    "pronunciation": "/ɪf/ /aɪ/ /meɪk/ /ə; eɪ/ /mɪˈsteɪk/"
  },
  {
    "id": "178",
    "sentence": "I'm worried I'll get fired if I make a mistake",
    "chinese": "我担心如果犯错会被解雇",
    "pronunciation": "/aɪm/ /ˈwɜːrid/ /aɪl/ /ɡet/ /ˈfaɪərd/ /ɪf/ /aɪ/ /meɪk/ /ə; eɪ/ /mɪˈsteɪk/"
  },
  {
    "id": "179",
    "sentence": "Seven :",
    "chinese": "七",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "180",
    "sentence": "Nevertheless",
    "chinese": "尽管如此",
    "pronunciation": "/ˌnevərðəˈles/"
  },
  {
    "id": "181",
    "sentence": "Seven : Nevertheless",
    "chinese": "尽管如此",
    "pronunciation": "/ˈsev(ə)n/ /ˌnevərðəˈles/"
  },
  {
    "id": "182",
    "sentence": "I'm trying to think",
    "chinese": "我正在努力思考",
    "pronunciation": "/aɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "183",
    "sentence": "Seven : Nevertheless , I'm trying to think",
    "chinese": "尽管如此，我仍在努力思考",
    "pronunciation": "/ˈsev(ə)n/ /ˌnevərðəˈles/ /aɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "184",
    "sentence": "positively",
    "chinese": "积极地",
    "pronunciation": "/ˈpɑːzətɪvli/"
  },
  {
    "id": "185",
    "sentence": "Seven : Nevertheless , I'm trying to think positively",
    "chinese": "尽管如此，我仍在努力保持积极的心态",
    "pronunciation": "/ˈsev(ə)n/ /ˌnevərðəˈles/ /aɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/ /ˈpɑːzətɪvli/"
  },
  {
    "id": "186",
    "sentence": "How am I trying",
    "chinese": "我正在如何尝试",
    "pronunciation": "/haʊ/ /æm; əm/ /aɪ/ /ˈtraɪɪŋ/"
  },
  {
    "id": "187",
    "sentence": "to think",
    "chinese": "思考",
    "pronunciation": "/tuː; tə/ /θɪŋk/"
  },
  {
    "id": "188",
    "sentence": "How am I trying to think ?",
    "chinese": "我正在如何思考？",
    "pronunciation": "/haʊ/ /æm; əm/ /aɪ/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "189",
    "sentence": "I'm trying to think",
    "chinese": "我正在努力思考",
    "pronunciation": "/aɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/"
  },
  {
    "id": "190",
    "sentence": "positively",
    "chinese": "积极地",
    "pronunciation": "/ˈpɑːzətɪvli/"
  },
  {
    "id": "191",
    "sentence": "I'm trying to think positively",
    "chinese": "我正在努力保持积极的心态",
    "pronunciation": "/aɪm/ /ˈtraɪɪŋ/ /tuː; tə/ /θɪŋk/ /ˈpɑːzətɪvli/"
  },
  {
    "id": "192",
    "sentence": "Eight : Maybe",
    "chinese": "八：也许",
    "pronunciation": "/eɪt/ /ˈmeɪbi/"
  },
  {
    "id": "193",
    "sentence": "if I do well",
    "chinese": "如果我表现得好",
    "pronunciation": "/ɪf/ /aɪ/ /duː; də/ /wel/"
  },
  {
    "id": "194",
    "sentence": "Eight : Maybe if I do well",
    "chinese": "八：如果我表现得好",
    "pronunciation": "/eɪt/ /ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/"
  },
  {
    "id": "195",
    "sentence": "I'll get promoted",
    "chinese": "我会被提拔",
    "pronunciation": "/aɪl/ /ɡet/ /prəˈmoʊtɪd/"
  },
  {
    "id": "196",
    "sentence": "Eight : Maybe if I do well , I'll get promoted",
    "chinese": "如果我表现得好，也许我会被提拔",
    "pronunciation": "/eɪt/ /ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/ /aɪl/ /ɡet/ /prəˈmoʊtɪd/"
  },
  {
    "id": "197",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "198",
    "sentence": "Eight : Maybe if I do well , I'll get promoted instead",
    "chinese": "八：如果我表现得好，也许我会被提拔",
    "pronunciation": "/eɪt/ /ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/ /aɪl/ /ɡet/ /prəˈmoʊtɪd/ /ɪnˈsted/"
  },
  {
    "id": "199",
    "sentence": "What might happen",
    "chinese": "可能会发生什么？",
    "pronunciation": "/wʌt/ /maɪt/ /ˈhæpən/"
  },
  {
    "id": "200",
    "sentence": "if I do well",
    "chinese": "如果我做得好",
    "pronunciation": "/ɪf/ /aɪ/ /duː; də/ /wel/"
  },
  {
    "id": "201",
    "sentence": "What might happen if I do well ?",
    "chinese": "如果我做得好，可能会发生什么？",
    "pronunciation": "/wʌt/ /maɪt/ /ˈhæpən/ /ɪf/ /aɪ/ /duː; də/ /wel/"
  },
  {
    "id": "202",
    "sentence": "Maybe if I do well",
    "chinese": "也许如果我表现得好",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/"
  },
  {
    "id": "203",
    "sentence": "I'll get promoted",
    "chinese": "我会得到晋升",
    "pronunciation": "/aɪl/ /ɡet/ /prəˈmoʊtɪd/"
  },
  {
    "id": "204",
    "sentence": "Maybe if I do well , I'll get promoted",
    "chinese": "也许如果我表现得好，我会得到晋升",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/ /aɪl/ /ɡet/ /prəˈmoʊtɪd/"
  },
  {
    "id": "205",
    "sentence": "instead",
    "chinese": "而是",
    "pronunciation": "/ɪnˈsted/"
  },
  {
    "id": "206",
    "sentence": "Maybe if I do well , I'll get promoted instead",
    "chinese": "也许如果我表现得好，我会得到晋升",
    "pronunciation": "/ˈmeɪbi/ /ɪf/ /aɪ/ /duː; də/ /wel/ /aɪl/ /ɡet/ /prəˈmoʊtɪd/ /ɪnˈsted/"
  },
];
