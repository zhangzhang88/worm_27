export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Good day , Thomas",
    "chinese": "你好，Thomas",
    "pronunciation": "/ɡʊd/ /deɪ/ /ˈtɑːməs/"
  },
  {
    "id": "2",
    "sentence": "We have an offer",
    "chinese": "我们收到了报价",
    "pronunciation": "/wiː; wi/ /hæv/ /æn; ən/ /ˈɔːfər/"
  },
  {
    "id": "3",
    "sentence": "Good day , Thomas . We have an offer",
    "chinese": "你好，Thomas我们有一个报价",
    "pronunciation": "/ɡʊd/ /deɪ/ /ˈtɑːməs/ /wiː; wi/ /hæv/ /æn; ən/ /ˈɔːfər/"
  },
  {
    "id": "4",
    "sentence": "on your house",
    "chinese": "关于你房子的",
    "pronunciation": "/ɑːn/ /jʊr; jər/ /haʊs/"
  },
  {
    "id": "5",
    "sentence": "Good day , Thomas . We have an offer on your house",
    "chinese": "你好，Thomas我们收到了关于你房子的报价。",
    "pronunciation": "/ɡʊd/ /deɪ/ /ˈtɑːməs/ /wiː; wi/ /hæv/ /æn; ən/ /ˈɔːfər/ /ɑːn/ /jʊr; jər/ /haʊs/"
  },
  {
    "id": "6",
    "sentence": "That's good",
    "chinese": "那很好",
    "pronunciation": "/ðæts/ /ɡʊd/"
  },
  {
    "id": "7",
    "sentence": "I hope",
    "chinese": "我希望",
    "pronunciation": "/aɪ/ /hoʊp/"
  },
  {
    "id": "8",
    "sentence": "That's good . I hope",
    "chinese": "那很好我希望",
    "pronunciation": "/ðæts/ /ɡʊd/ /aɪ/ /hoʊp/"
  },
  {
    "id": "9",
    "sentence": "it's better than the last one",
    "chinese": "这次比上次更好",
    "pronunciation": "/ɪts/ /ˈbetər/ /ðæn; ðən/ /ðə/ /læst/ /wʌn/"
  },
  {
    "id": "10",
    "sentence": "That's good . I hope it's better than the last one",
    "chinese": "那很好我希望这次比上次更好。",
    "pronunciation": "/ðæts/ /ɡʊd/ /aɪ/ /hoʊp/ /ɪts/ /ˈbetər/ /ðæn; ðən/ /ðə/ /læst/ /wʌn/"
  },
  {
    "id": "11",
    "sentence": "It is",
    "chinese": "是的",
    "pronunciation": "/ɪt/ /ɪz/"
  },
  {
    "id": "12",
    "sentence": "Thomas",
    "chinese": "Thomas",
    "pronunciation": "/ˈtɑːməs/"
  },
  {
    "id": "13",
    "sentence": "It is , Thomas",
    "chinese": "是的，Thomas",
    "pronunciation": "/ɪt/ /ɪz/ /ˈtɑːməs/"
  },
  {
    "id": "14",
    "sentence": "Okay",
    "chinese": "好吧",
    "pronunciation": "/oʊˈkeɪ/"
  },
  {
    "id": "15",
    "sentence": "let's hear it",
    "chinese": "让我们听听看",
    "pronunciation": "/lets/ /hɪr/ /ɪt/"
  },
  {
    "id": "16",
    "sentence": "Okay , let's hear it",
    "chinese": "好吧，让我们听听看",
    "pronunciation": "/oʊˈkeɪ/ /lets/ /hɪr/ /ɪt/"
  },
  {
    "id": "17",
    "sentence": "The offer is",
    "chinese": "报价是",
    "pronunciation": "/ðə/ /ˈɔːfər/ /ɪz/"
  },
  {
    "id": "18",
    "sentence": "$275,000",
    "chinese": "27万5千美元",
    "pronunciation": "/tuː ˈsɛvən tiː faɪv/ /θuː θuː θuː/"
  },
  {
    "id": "19",
    "sentence": "The offer is $275,000",
    "chinese": "报价是27万5千美元",
    "pronunciation": "/ðə/ /ˈɔːfər/ /ɪz/ /tuː ˈsɛvən tiː faɪv/ /θuː θuː θuː/"
  },
  {
    "id": "20",
    "sentence": "$275,000",
    "chinese": "27.5万美元",
    "pronunciation": "/tuː ˈsɛvən tiː faɪv/ /θuː θuː θuː/"
  },
  {
    "id": "21",
    "sentence": "That's $35,000 under the listing",
    "chinese": "这比挂牌价低了3.5万美元",
    "pronunciation": "/ðæts/ /θɹiː.faɪv/ /θuː θuː θuː/ /ˈʌndər/ /ðə/ /ˈlɪstɪŋ/"
  },
  {
    "id": "22",
    "sentence": "$275,000 ? That's $35,000 under the listing",
    "chinese": "27.5万美元？这比挂牌价低了3.5万美元",
    "pronunciation": "/tuː ˈsɛvən tiː faɪv/ /θuː θuː θuː/ /ðæts/ /θɹiː.faɪv/ /θuː θuː θuː/ /ˈʌndər/ /ðə/ /ˈlɪstɪŋ/"
  },
  {
    "id": "23",
    "sentence": "I know , Thomas",
    "chinese": "我知道，Thomas",
    "pronunciation": "/aɪ/ /noʊ/ /ˈtɑːməs/"
  },
  {
    "id": "24",
    "sentence": "but I think",
    "chinese": "但我觉得",
    "pronunciation": "/bʌt/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "25",
    "sentence": "I know , Thomas , but I think",
    "chinese": "我知道，Thomas，但我觉得",
    "pronunciation": "/aɪ/ /noʊ/ /ˈtɑːməs/ /bʌt/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "26",
    "sentence": "we should consider it",
    "chinese": "我们应该考虑一下",
    "pronunciation": "/wiː; wi/ /ʃʊd; ʃəd/ /kənˈsɪdər/ /ɪt/"
  },
  {
    "id": "27",
    "sentence": "I know , Thomas , but I think we should consider it",
    "chinese": "我知道，Thomas，但我觉得我们应该考虑一下",
    "pronunciation": "/aɪ/ /noʊ/ /ˈtɑːməs/ /bʌt/ /aɪ/ /θɪŋk/ /wiː; wi/ /ʃʊd; ʃəd/ /kənˈsɪdər/ /ɪt/"
  },
  {
    "id": "28",
    "sentence": "Why would I consider this price",
    "chinese": "我为什么要考虑这个价格？",
    "pronunciation": "/waɪ/ /wʊd/ /aɪ/ /kənˈsɪdər/ /ðɪs/ /praɪs/"
  },
  {
    "id": "29",
    "sentence": "We should counter-offer",
    "chinese": "我们应该还价",
    "pronunciation": "/wiː; wi/ /ʃʊd; ʃəd/ /ˈkaʊntər ˌɔːfər/"
  },
  {
    "id": "30",
    "sentence": "I think",
    "chinese": "我认为",
    "pronunciation": "/aɪ/ /θɪŋk/"
  },
  {
    "id": "31",
    "sentence": "We should counter-offer . I think",
    "chinese": "我们应该还价我认为",
    "pronunciation": "/wiː; wi/ /ʃʊd; ʃəd/ /ˈkaʊntər ˌɔːfər/ /aɪ/ /θɪŋk/"
  },
  {
    "id": "32",
    "sentence": "we can work with this buyer",
    "chinese": "我们可以和这位买家合作",
    "pronunciation": "/wiː; wi/ /kæn/ /wɜrk/ /wɪð; wɪθ/ /ðɪs/ /ˈbaɪər/"
  },
  {
    "id": "33",
    "sentence": "We should counter-offer . I think we can work with this buyer",
    "chinese": "我们应该还价我认为我们可以和这位买家合作。",
    "pronunciation": "/wiː; wi/ /ʃʊd; ʃəd/ /ˈkaʊntər ˌɔːfər/ /aɪ/ /θɪŋk/ /wiː; wi/ /kæn/ /wɜrk/ /wɪð; wɪθ/ /ðɪs/ /ˈbaɪər/"
  },
  {
    "id": "34",
    "sentence": "I won't take less than $300,000",
    "chinese": "少于30万美元我是不会接受的",
    "pronunciation": "/aɪ/ /woʊnt/ /teɪk/ /lɛs/ /ðæn; ðən/ /θriː ˈhʌndrəd/ /θuː θuː θuː/"
  },
  {
    "id": "35",
    "sentence": "You know that",
    "chinese": "这你是知道的",
    "pronunciation": "/juː; jʊ/ /noʊ/ /ðæt/"
  },
  {
    "id": "36",
    "sentence": "I won't take less than $300,000 . You know that",
    "chinese": "少于30万美元我是不会接受的，这你是知道的",
    "pronunciation": "/aɪ/ /woʊnt/ /teɪk/ /lɛs/ /ðæn; ðən/ /θriː ˈhʌndrəd/ /θuː θuː θuː/ /juː; jʊ/ /noʊ/ /ðæt/"
  },
  {
    "id": "37",
    "sentence": "Let's consider the counter-offer",
    "chinese": "让我们考虑一下还价",
    "pronunciation": "/lets/ /kənˈsɪdər/ /ðə/ /ˈkaʊntər ˌɔːfər/"
  },
  {
    "id": "38",
    "sentence": "The house has issues",
    "chinese": "这房子有些问题",
    "pronunciation": "/ðə/ /haʊs/ /hæz; həz/ /ˈɪʃuːz/"
  },
  {
    "id": "39",
    "sentence": "Let's consider the counter-offer . The house has issues",
    "chinese": "让我们考虑一下还价这房子有些问题。",
    "pronunciation": "/lets/ /kənˈsɪdər/ /ðə/ /ˈkaʊntər ˌɔːfər/ /ðə/ /haʊs/ /hæz; həz/ /ˈɪʃuːz/"
  },
  {
    "id": "40",
    "sentence": "Okay",
    "chinese": "好的",
    "pronunciation": "/oʊˈkeɪ/"
  },
  {
    "id": "41",
    "sentence": "I listen to you",
    "chinese": "我听你的",
    "pronunciation": "/aɪ/ /ˈlɪs(ə)n/ /tuː; tə/ /juː; jʊ/"
  },
  {
    "id": "42",
    "sentence": "Okay , I listen to you",
    "chinese": "好的，我听你的",
    "pronunciation": "/oʊˈkeɪ/ /aɪ/ /ˈlɪs(ə)n/ /tuː; tə/ /juː; jʊ/"
  },
];
