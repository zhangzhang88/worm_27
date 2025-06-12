export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hey Mark",
    "chinese": "嗨，马克",
    "pronunciation": "/heɪ/ /mɑːrk/"
  },
  {
    "id": "2",
    "sentence": "do you know",
    "chinese": "你知道",
    "pronunciation": "/duː; də/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "3",
    "sentence": "Hey Mark , do you know",
    "chinese": "嗨，马克，你知道",
    "pronunciation": "/heɪ/ /mɑːrk/ /duː; də/ /juː; jʊ/ /noʊ/"
  },
  {
    "id": "4",
    "sentence": "where I can look",
    "chinese": "我在哪里可以找到",
    "pronunciation": "/wer/ /aɪ/ /kæn/ /lʊk/"
  },
  {
    "id": "5",
    "sentence": "Hey Mark , do you know where I can look",
    "chinese": "嗨，马克，你知道我在哪里可以寻找",
    "pronunciation": "/heɪ/ /mɑːrk/ /duː; də/ /juː; jʊ/ /noʊ/ /wer/ /aɪ/ /kæn/ /lʊk/"
  },
  {
    "id": "6",
    "sentence": "for used cars",
    "chinese": "在哪里可以找到二手车",
    "pronunciation": "/fɔːr; fər/ /juzd/ /kɑrz/"
  },
  {
    "id": "7",
    "sentence": "Hey Mark , do you know where I can look for used cars ?",
    "chinese": "嗨，马克，你知道我在哪里可以找到二手车吗？",
    "pronunciation": "/heɪ/ /mɑːrk/ /duː; də/ /juː; jʊ/ /noʊ/ /wer/ /aɪ/ /kæn/ /lʊk/ /fɔːr; fər/ /juzd/ /kɑrz/"
  },
  {
    "id": "8",
    "sentence": "You can always check online",
    "chinese": "你总是可以在线查看",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈɔːlweɪz/ /tʃek/ /ˌɑːnˈlaɪn/"
  },
  {
    "id": "9",
    "sentence": "My friend bought a car",
    "chinese": "我的朋友买了一辆车",
    "pronunciation": "/maɪ/ /frend/ /bɔːt/ /ə; eɪ/ /kɑːr/"
  },
  {
    "id": "10",
    "sentence": "You can always check online , My friend bought a car",
    "chinese": "你总是可以在线查看我的朋友买了一辆汽车。",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈɔːlweɪz/ /tʃek/ /ˌɑːnˈlaɪn/ /maɪ/ /frend/ /bɔːt/ /ə; eɪ/ /kɑːr/"
  },
  {
    "id": "11",
    "sentence": "on Craigslist",
    "chinese": "克雷格列表",
    "pronunciation": "/ɑːn/ /ˈkreɪɡzlɪst/"
  },
  {
    "id": "12",
    "sentence": "You can always check online , My friend bought a car on Craigslist",
    "chinese": "你总是可以在线查看我的朋友在克雷格列表上买了一辆车。",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈɔːlweɪz/ /tʃek/ /ˌɑːnˈlaɪn/ /maɪ/ /frend/ /bɔːt/ /ə; eɪ/ /kɑːr/ /ɑːn/ /ˈkreɪɡzlɪst/"
  },
  {
    "id": "13",
    "sentence": "Yeah , but I was thinking about that",
    "chinese": "是的，但我正在考虑那件事",
    "pronunciation": "/jeə/ /bʌt/ /aɪ/ /wʌz; wəz/ /ˈθɪŋkɪŋ/ /əˈbaʊt/ /ðæt/"
  },
  {
    "id": "14",
    "sentence": "You can always check online , My friend bought a car on Craigslist , Yeah , but I was thinking about that",
    "chinese": "你总是可以在线查看我的朋友在克雷格列表上买了一辆车。嗯，但我在想这件事。你知道其他方法吗？",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈɔːlweɪz/ /tʃek/ /ˌɑːnˈlaɪn/ /maɪ/ /frend/ /bɔːt/ /ə; eɪ/ /kɑːr/ /ɑːn/ /ˈkreɪɡzlɪst/ /jeə/ /bʌt/ /aɪ/ /wʌz; wəz/ /ˈθɪŋkɪŋ/ /əˈbaʊt/ /ðæt/"
  },
  {
    "id": "15",
    "sentence": "Do you know any other way",
    "chinese": "你知道其他方法吗？",
    "pronunciation": "/duː; də/ /juː; jʊ/ /noʊ/ /ˈeni/ /ˈʌðər/ /weɪ/"
  },
  {
    "id": "16",
    "sentence": "You can always check online , My friend bought a car on Craigslist , Yeah , but I was thinking about that . Do you know any other way ?",
    "chinese": "你总是可以在线查看我的朋友在克雷格列表上买了一辆车。是的，但我正在考虑这一点。你知道其他方法吗？",
    "pronunciation": "/juː; jʊ/ /kæn/ /ˈɔːlweɪz/ /tʃek/ /ˌɑːnˈlaɪn/ /maɪ/ /frend/ /bɔːt/ /ə; eɪ/ /kɑːr/ /ɑːn/ /ˈkreɪɡzlɪst/ /jeə/ /bʌt/ /aɪ/ /wʌz; wəz/ /ˈθɪŋkɪŋ/ /əˈbaʊt/ /ðæt/ /duː; də/ /juː; jʊ/ /noʊ/ /ˈeni/ /ˈʌðər/ /weɪ/"
  },
  {
    "id": "17",
    "sentence": "There's a dealership",
    "chinese": "有一家经销商",
    "pronunciation": "/ðerz/ /ə; eɪ/ /ˈdiːlərʃɪp/"
  },
  {
    "id": "18",
    "sentence": "that sells used cars",
    "chinese": "销售二手车",
    "pronunciation": "/ðæt/ /selz/ /juzd/ /kɑrz/"
  },
  {
    "id": "19",
    "sentence": "There's a dealership that sells used cars",
    "chinese": "有一家销售二手车的经销商在亚特兰蒂克大道上",
    "pronunciation": "/ðerz/ /ə; eɪ/ /ˈdiːlərʃɪp/ /ðæt/ /selz/ /juzd/ /kɑrz/"
  },
  {
    "id": "20",
    "sentence": "on Atlantic Boulevard",
    "chinese": "在亚特兰蒂克大道上",
    "pronunciation": "/ɑːn/ /ətˈlæntɪk/ /ˌbuːləˈvɑːrd/"
  },
  {
    "id": "21",
    "sentence": "There's a dealership that sells used cars on Atlantic Boulevard",
    "chinese": "在亚特兰蒂克大道上有一家销售二手车的经销商",
    "pronunciation": "/ðerz/ /ə; eɪ/ /ˈdiːlərʃɪp/ /ðæt/ /selz/ /juzd/ /kɑrz/ /ɑːn/ /ətˈlæntɪk/ /ˌbuːləˈvɑːrd/"
  },
  {
    "id": "22",
    "sentence": "Where is it",
    "chinese": "它在哪儿？",
    "pronunciation": "/wer/ /ɪz/ /ɪt/"
  },
  {
    "id": "23",
    "sentence": "There's a dealership that sells used cars on Atlantic Boulevard , Where is it ?",
    "chinese": "在亚特兰蒂克大道上有一家二手车行它在哪儿？",
    "pronunciation": "/ðerz/ /ə; eɪ/ /ˈdiːlərʃɪp/ /ðæt/ /selz/ /juzd/ /kɑrz/ /ɑːn/ /ətˈlæntɪk/ /ˌbuːləˈvɑːrd/ /wer/ /ɪz/ /ɪt/"
  },
  {
    "id": "24",
    "sentence": "I've never seen one",
    "chinese": "我以前从没见过这样的店铺",
    "pronunciation": "/aɪv/ /ˈnev.ɚ/ /siːn/ /wʌn/"
  },
  {
    "id": "25",
    "sentence": "There's a dealership that sells used cars on Atlantic Boulevard , Where is it ? I've never seen one",
    "chinese": "在亚特兰蒂克大道上有一家二手车行它在哪儿？我以前从没见过这样的店铺。",
    "pronunciation": "/ðerz/ /ə; eɪ/ /ˈdiːlərʃɪp/ /ðæt/ /selz/ /juzd/ /kɑrz/ /ɑːn/ /ətˈlæntɪk/ /ˌbuːləˈvɑːrd/ /wer/ /ɪz/ /ɪt/ /aɪv/ /ˈnev.ɚ/ /siːn/ /wʌn/"
  },
  {
    "id": "26",
    "sentence": "It's on the corner of 7th and Atlantic",
    "chinese": "它在第七街和大西洋街的拐角处",
    "pronunciation": "/ɪts/ /ɑːn/ /ðə/ /ˈkɔːrnər/ /ʌv/ /ˈsɛvənθ/ /ænd; ənd/ /ətˈlæntɪk/"
  },
  {
    "id": "27",
    "sentence": "Oh",
    "chinese": "哦",
    "pronunciation": "/oʊ/"
  },
  {
    "id": "28",
    "sentence": "It's on the corner of 7th and Atlantic , Oh",
    "chinese": "它在第七街和大西洋街的拐角处哦",
    "pronunciation": "/ɪts/ /ɑːn/ /ðə/ /ˈkɔːrnər/ /ʌv/ /ˈsɛvənθ/ /ænd; ənd/ /ətˈlæntɪk/ /oʊ/"
  },
  {
    "id": "29",
    "sentence": "by the Burger King",
    "chinese": "在汉堡王旁边",
    "pronunciation": "/baɪ/ /ðə/ /ˈbɜːrɡər/ /kɪŋ/"
  },
  {
    "id": "30",
    "sentence": "It's on the corner of 7th and Atlantic , Oh by the Burger King",
    "chinese": "它在第七街和大西洋街的拐角处哦，就在汉堡王旁边",
    "pronunciation": "/ɪts/ /ɑːn/ /ðə/ /ˈkɔːrnər/ /ʌv/ /ˈsɛvənθ/ /ænd; ənd/ /ətˈlæntɪk/ /oʊ/ /baɪ/ /ðə/ /ˈbɜːrɡər/ /kɪŋ/"
  },
  {
    "id": "31",
    "sentence": "Yeah , they have a pretty good selection",
    "chinese": "是的，他们的选择相当不错",
    "pronunciation": "/jeə/ /ðeɪ/ /hæv/ /ə; eɪ/ /ˈprɪti/ /ɡʊd/ /sɪˈlekʃ(ə)n/"
  },
  {
    "id": "32",
    "sentence": "You should check it out",
    "chinese": "你应该去看看",
    "pronunciation": "/juː; jʊ/ /ʃʊd; ʃəd/ /tʃek/ /ɪt/ /aʊt/"
  },
  {
    "id": "33",
    "sentence": "Yeah , they have a pretty good selection , You should check it out",
    "chinese": "是的，他们的选择相当不错你应该去看看。",
    "pronunciation": "/jeə/ /ðeɪ/ /hæv/ /ə; eɪ/ /ˈprɪti/ /ɡʊd/ /sɪˈlekʃ(ə)n/ /juː; jʊ/ /ʃʊd; ʃəd/ /tʃek/ /ɪt/ /aʊt/"
  },
  {
    "id": "34",
    "sentence": "I'm down",
    "chinese": "我在",
    "pronunciation": "/aɪm/ /daʊn/"
  },
  {
    "id": "35",
    "sentence": "Yeah , they have a pretty good selection . You should check it out , I'm down",
    "chinese": "是啊，他们的选择相当不错你应该去看看。我在。你能和我一起去吗？",
    "pronunciation": "/jeə/ /ðeɪ/ /hæv/ /ə; eɪ/ /ˈprɪti/ /ɡʊd/ /sɪˈlekʃ(ə)n/ /juː; jʊ/ /ʃʊd; ʃəd/ /tʃek/ /ɪt/ /aʊt/ /aɪm/ /daʊn/"
  },
  {
    "id": "36",
    "sentence": "Can you go with me",
    "chinese": "你能和我一起去吗？",
    "pronunciation": "/kæn/ /juː; jʊ/ /ɡoʊ/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "37",
    "sentence": "Yeah , they have a pretty good selection , You should check it out , I'm down , Can you go with me ?",
    "chinese": "是的，他们的选择相当不错你应该去看看。我在。你能和我一起去吗？",
    "pronunciation": "/jeə/ /ðeɪ/ /hæv/ /ə; eɪ/ /ˈprɪti/ /ɡʊd/ /sɪˈlekʃ(ə)n/ /juː; jʊ/ /ʃʊd; ʃəd/ /tʃek/ /ɪt/ /aʊt/ /aɪm/ /daʊn/ /kæn/ /juː; jʊ/ /ɡoʊ/ /wɪð; wɪθ/ /miː/"
  },
  {
    "id": "38",
    "sentence": "Sure , I'm free tomorrow and Thursday",
    "chinese": "当然，我明天和周四都闲着",
    "pronunciation": "/ʃʊr/ /aɪm/ /friː/ /təˈmɑːroʊ/ /ænd; ənd/ /ˈθɜːrzdeɪ/"
  },
  {
    "id": "39",
    "sentence": "Shoot me a text",
    "chinese": "给我发个短信",
    "pronunciation": "/ʃuːt/ /miː/ /ə; eɪ/ /tekst/"
  },
  {
    "id": "40",
    "sentence": "Sure , I'm free tomorrow and Thursday , Shoot me a text",
    "chinese": "当然，我明天和周四都闲着给我发个短信。",
    "pronunciation": "/ʃʊr/ /aɪm/ /friː/ /təˈmɑːroʊ/ /ænd; ənd/ /ˈθɜːrzdeɪ/ /ʃuːt/ /miː/ /ə; eɪ/ /tekst/"
  },
  {
    "id": "41",
    "sentence": "Will do man",
    "chinese": "没问题，兄弟",
    "pronunciation": "/wɪl/ /duː; də/ /mæn/"
  },
  {
    "id": "42",
    "sentence": "Sure , I'm free tomorrow and Thursday , Shoot me a text , Will do man",
    "chinese": "当然，我明天和周四都闲着给我发个短信。我会做的，兄弟。谢谢。肯定没问题，兄弟。不过你欠我一个人情哦",
    "pronunciation": "/ʃʊr/ /aɪm/ /friː/ /təˈmɑːroʊ/ /ænd; ənd/ /ˈθɜːrzdeɪ/ /ʃuːt/ /miː/ /ə; eɪ/ /tekst/ /wɪl/ /duː; də/ /mæn/"
  },
  {
    "id": "43",
    "sentence": "Thanks",
    "chinese": "谢谢",
    "pronunciation": "/θæŋks/"
  },
  {
    "id": "44",
    "sentence": "Sure , I'm free tomorrow and Thursday , Shoot me a text , Will do man , Thanks",
    "chinese": "当然，我明天和周四都闲着给我发个短信。我会做的，兄弟。谢谢。肯定没问题，兄弟。不过你欠我一个人情哦",
    "pronunciation": "/ʃʊr/ /aɪm/ /friː/ /təˈmɑːroʊ/ /ænd; ənd/ /ˈθɜːrzdeɪ/ /ʃuːt/ /miː/ /ə; eɪ/ /tekst/ /wɪl/ /duː; də/ /mæn/ /θæŋks/"
  },
  {
    "id": "45",
    "sentence": "Sure thing bro",
    "chinese": "当然，兄弟",
    "pronunciation": "/ʃʊr/ /θɪŋ/ /broʊ/"
  },
  {
    "id": "46",
    "sentence": "Sure , I'm free tomorrow and Thursday , Shoot me a text , Will do man , Thanks , Sure thing bro",
    "chinese": "当然，我明天和周四都闲着给我发个短信。没问题，兄弟。谢谢。肯定没问题，兄弟。不过你欠我一个人情哦",
    "pronunciation": "/ʃʊr/ /aɪm/ /friː/ /təˈmɑːroʊ/ /ænd; ənd/ /ˈθɜːrzdeɪ/ /ʃuːt/ /miː/ /ə; eɪ/ /tekst/ /wɪl/ /duː; də/ /mæn/ /θæŋks/ /ʃʊr/ /θɪŋ/ /broʊ/"
  },
  {
    "id": "47",
    "sentence": "You owe me though",
    "chinese": "不过你欠我一个人情哦",
    "pronunciation": "/juː; jʊ/ /oʊ/ /miː/ /ðoʊ/"
  },
  {
    "id": "48",
    "sentence": "Sure , I'm free tomorrow and Thursday , Shoot me a text , Will do man , Thanks , Sure thing bro , You owe me though",
    "chinese": "当然，我明天和周四都闲着给我发个短信。没问题，兄弟。谢谢。肯定没问题，兄弟。不过你欠我一个人情哦",
    "pronunciation": "/ʃʊr/ /aɪm/ /friː/ /təˈmɑːroʊ/ /ænd; ənd/ /ˈθɜːrzdeɪ/ /ʃuːt/ /miː/ /ə; eɪ/ /tekst/ /wɪl/ /duː; də/ /mæn/ /θæŋks/ /ʃʊr/ /θɪŋ/ /broʊ/ /juː; jʊ/ /oʊ/ /miː/ /ðoʊ/"
  },
];
