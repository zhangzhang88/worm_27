export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Someone broke into my house",
    "chinese": "有人闯入了我的房子",
    "pronunciation": "/ˈsʌmwʌn/ /broʊk/ /ˈɪntuː/ /maɪ/ /haʊs/"
  },
  {
    "id": "2",
    "sentence": "How do you know",
    "chinese": "你怎么知道的？",
    "pronunciation": "/haʊ/ /duː; də/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "3",
    "sentence": "The front window is broken",
    "chinese": "前窗碎了",
    "pronunciation": "/ðə/ /frʌnt/ /ˈwɪndoʊ/ /ɪz/ /ˈbroʊkən/"
  },
  {
    "id": "4",
    "sentence": "and",
    "chinese": "并且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "5",
    "sentence": "The front window is broken and",
    "chinese": "前窗碎了",
    "pronunciation": "/ðə/ /frʌnt/ /ˈwɪndoʊ/ /ɪz/ /ˈbroʊkən/ /ænd; ənd/"
  },
  {
    "id": "6",
    "sentence": "there is glass everywhere",
    "chinese": "玻璃散落一地",
    "pronunciation": "/ðer; ðər/ /ɪz/ /ɡlæs/ /ˈɛvriwɛr/"
  },
  {
    "id": "7",
    "sentence": "The front window is broken and there is glass everywhere",
    "chinese": "前窗碎了，玻璃散落一地",
    "pronunciation": "/ðə/ /frʌnt/ /ˈwɪndoʊ/ /ɪz/ /ˈbroʊkən/ /ænd; ənd/ /ðer; ðər/ /ɪz/ /ɡlæs/ /ˈɛvriwɛr/"
  },
  {
    "id": "8",
    "sentence": "You shouldn't go into the house",
    "chinese": "你不应该进入那所房子",
    "pronunciation": "/juː; jʊ/ /ˈʃudnt/ /ɡoʊ/ /ˈɪntuː/ /ðə/ /haʊs/"
  },
  {
    "id": "9",
    "sentence": "until we send an officer there",
    "chinese": "直到我们派警官去那里",
    "pronunciation": "/ʌnˈtɪl/ /wiː; wi/ /send/ /æn; ən/ /ˈɔːfɪsər/ /ðer; ðər/"
  },
  {
    "id": "10",
    "sentence": "You shouldn't go into the house until we send an officer there",
    "chinese": "在我们派警官去之前，你不应该进入那所房子",
    "pronunciation": "/juː; jʊ/ /ˈʃudnt/ /ɡoʊ/ /ˈɪntuː/ /ðə/ /haʊs/ /ʌnˈtɪl/ /wiː; wi/ /send/ /æn; ən/ /ˈɔːfɪsər/ /ðer; ðər/"
  },
  {
    "id": "11",
    "sentence": "I'm already in the house",
    "chinese": "我已经在屋里了",
    "pronunciation": "/aɪm/ /ɔːlˈredi/ /ɪn/ /ðə/ /haʊs/"
  },
  {
    "id": "12",
    "sentence": "The house is trashed",
    "chinese": "房子被搞得一团糟",
    "pronunciation": "/ðə/ /haʊs/ /ɪz/ /træʃt/"
  },
  {
    "id": "13",
    "sentence": "I'm already in the house . The house is trashed",
    "chinese": "我已经在屋里了房子被搞得一团糟。",
    "pronunciation": "/aɪm/ /ɔːlˈredi/ /ɪn/ /ðə/ /haʊs/ /ðə/ /haʊs/ /ɪz/ /træʃt/"
  },
  {
    "id": "14",
    "sentence": "Don't touch anything",
    "chinese": "不要碰任何东西",
    "pronunciation": "/doʊnt/ /tʌtʃ/ /ˈɛnɪθɪŋ/"
  },
  {
    "id": "15",
    "sentence": "until the police get there",
    "chinese": "在警察到达之前",
    "pronunciation": "/ʌnˈtɪl/ /ðə/ /pəˈliːs/ /ɡet/ /ðer; ðər/"
  },
  {
    "id": "16",
    "sentence": "Don't touch anything until the police get there",
    "chinese": "在警察到达之前，不要碰任何东西",
    "pronunciation": "/doʊnt/ /tʌtʃ/ /ˈɛnɪθɪŋ/ /ʌnˈtɪl/ /ðə/ /pəˈliːs/ /ɡet/ /ðer; ðər/"
  },
  {
    "id": "17",
    "sentence": "My new flat screen TV",
    "chinese": "我的新平板电视",
    "pronunciation": "/maɪ/ /nuː/ /flæt/ /skriːn/ /ˌtiː ˈviː/"
  },
  {
    "id": "18",
    "sentence": "is gone",
    "chinese": "不见了",
    "pronunciation": "/ɪz/ /ɡɔːn/"
  },
  {
    "id": "19",
    "sentence": "My new flat screen TV is gone",
    "chinese": "我的新平板电视不见了",
    "pronunciation": "/maɪ/ /nuː/ /flæt/ /skriːn/ /ˌtiː ˈviː/ /ɪz/ /ɡɔːn/"
  },
  {
    "id": "20",
    "sentence": "Is there anything else",
    "chinese": "还有其他什么吗？",
    "pronunciation": "/ɪz/ /ðer; ðər/ /ˈɛnɪθɪŋ/ /els/"
  },
  {
    "id": "21",
    "sentence": "that is obviously missing",
    "chinese": "明显遗漏的",
    "pronunciation": "/ðæt/ /ɪz/ /ˈɑːbviəsli/ /ˈmɪsɪŋ/"
  },
  {
    "id": "22",
    "sentence": "Is there anything else that is obviously missing ?",
    "chinese": "还有什么明显遗漏的吗？",
    "pronunciation": "/ɪz/ /ðer; ðər/ /ˈɛnɪθɪŋ/ /els/ /ðæt/ /ɪz/ /ˈɑːbviəsli/ /ˈmɪsɪŋ/"
  },
  {
    "id": "23",
    "sentence": "I can't tell",
    "chinese": "我无法判断",
    "pronunciation": "/aɪ/ /kænt/ /tel/"
  },
  {
    "id": "24",
    "sentence": "unless I go further",
    "chinese": "除非我进一步走",
    "pronunciation": "/ənˈles/ /aɪ/ /ɡoʊ/ /ˈfɜːrðər/"
  },
  {
    "id": "25",
    "sentence": "I can't tell unless I go further",
    "chinese": "我无法判断，除非我进一步走进去",
    "pronunciation": "/aɪ/ /kænt/ /tel/ /ənˈles/ /aɪ/ /ɡoʊ/ /ˈfɜːrðər/"
  },
  {
    "id": "26",
    "sentence": "into my house",
    "chinese": "进到我的房子里",
    "pronunciation": "/ˈɪntuː/ /maɪ/ /haʊs/"
  },
  {
    "id": "27",
    "sentence": "I can't tell unless I go further into my house",
    "chinese": "除非我进一步走进房子里，否则无法判断",
    "pronunciation": "/aɪ/ /kænt/ /tel/ /ənˈles/ /aɪ/ /ɡoʊ/ /ˈfɜːrðər/ /ˈɪntuː/ /maɪ/ /haʊs/"
  },
  {
    "id": "28",
    "sentence": "Please wait outside",
    "chinese": "请在外面等候",
    "pronunciation": "/pliːz/ /weɪt/ /ˌaʊtˈsaɪd/"
  },
  {
    "id": "29",
    "sentence": "in case the robber is still inside",
    "chinese": "以防劫匪还在里面",
    "pronunciation": "/ɪn/ /keɪs/ /ðə/ /ˈrɑːbər/ /ɪz/ /stɪl/ /ˌɪnˈsaɪd/"
  },
  {
    "id": "30",
    "sentence": "Please wait outside in case the robber is still inside",
    "chinese": "请在外面等候，以防劫匪还在里面",
    "pronunciation": "/pliːz/ /weɪt/ /ˌaʊtˈsaɪd/ /ɪn/ /keɪs/ /ðə/ /ˈrɑːbər/ /ɪz/ /stɪl/ /ˌɪnˈsaɪd/"
  },
  {
    "id": "31",
    "sentence": "You think",
    "chinese": "你觉得",
    "pronunciation": "/juː; jʊ/ /θɪŋk/"
  },
  {
    "id": "32",
    "sentence": "he could still be inside",
    "chinese": "他可能还在里面吗？",
    "pronunciation": "/hiː/ /kʊd/ /stɪl/ /biː/ /ˌɪnˈsaɪd/"
  },
  {
    "id": "33",
    "sentence": "You think he could still be inside ?",
    "chinese": "你觉得他可能还在里面吗？",
    "pronunciation": "/juː; jʊ/ /θɪŋk/ /hiː/ /kʊd/ /stɪl/ /biː/ /ˌɪnˈsaɪd/"
  },
  {
    "id": "34",
    "sentence": "It's a possibility",
    "chinese": "有可能",
    "pronunciation": "/ɪts/ /ə; eɪ/ /ˌpɑːsəˈbɪləti/"
  },
  {
    "id": "35",
    "sentence": "A police car will be there",
    "chinese": "警车会到那里",
    "pronunciation": "/ə; eɪ/ /pəˈliːs/ /kɑːr/ /wɪl/ /biː/ /ðer; ðər/"
  },
  {
    "id": "36",
    "sentence": "It's a possibility . A police car will be there",
    "chinese": "有可能警车会到那里",
    "pronunciation": "/ɪts/ /ə; eɪ/ /ˌpɑːsəˈbɪləti/ /ə; eɪ/ /pəˈliːs/ /kɑːr/ /wɪl/ /biː/ /ðer; ðər/"
  },
  {
    "id": "37",
    "sentence": "shortly",
    "chinese": "很快",
    "pronunciation": "/ˈʃɔːrtli/"
  },
  {
    "id": "38",
    "sentence": "It's a possibility . A police car will be there shortly",
    "chinese": "有可能警车很快就会到那里。",
    "pronunciation": "/ɪts/ /ə; eɪ/ /ˌpɑːsəˈbɪləti/ /ə; eɪ/ /pəˈliːs/ /kɑːr/ /wɪl/ /biː/ /ðer; ðər/ /ˈʃɔːrtli/"
  },
  {
    "id": "39",
    "sentence": "For more information",
    "chinese": "欲了解更多信息",
    "pronunciation": "/fɔːr; fər/ /mɔːr/ /ˌɪnfərˈmeɪʃ(ə)n/"
  },
  {
    "id": "40",
    "sentence": "visit www . FEMA . gov",
    "chinese": "访问www.FEMA.gov",
    "pronunciation": "/ˈvɪzɪt/ /ˌdʌbljuː dʌbljuː ˈdʌbljuː/ /ˈfiːmə/ /ɡʌv/"
  },
  {
    "id": "41",
    "sentence": "For more information , visit www . FEMA . gov",
    "chinese": "欲了解更多信息，请访问www.FEMA.gov",
    "pronunciation": "/fɔːr; fər/ /mɔːr/ /ˌɪnfərˈmeɪʃ(ə)n/ /ˈvɪzɪt/ /ˌdʌbljuː dʌbljuː ˈdʌbljuː/ /ˈfiːmə/ /ɡʌv/"
  },
];
