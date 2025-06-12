export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Sally and George would like to buy a new home",
    "chinese": "Sally和George想买一套新房子",
    "pronunciation": "/ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/ /wʊd/ /laɪk/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "2",
    "sentence": "because their two children are growing older",
    "chinese": "因为他们的两个孩子正在长大",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðer/ /tuː/ /ˈtʃɪldrən/ /ɑr/ /ˈɡroʊɪŋ/ /ˈoʊldər/"
  },
  {
    "id": "3",
    "sentence": "Sally and George would like to buy a new home because their two children are growing older",
    "chinese": "Sally和George想买一套新房子，因为他们的两个孩子正在长大",
    "pronunciation": "/ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/ /wʊd/ /laɪk/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðer/ /tuː/ /ˈtʃɪldrən/ /ɑr/ /ˈɡroʊɪŋ/ /ˈoʊldər/"
  },
  {
    "id": "4",
    "sentence": "Unfortunately",
    "chinese": "不幸的是",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/"
  },
  {
    "id": "5",
    "sentence": "it has become difficult",
    "chinese": "变得困难",
    "pronunciation": "/ɪt/ /hæz; həz/ /bɪˈkʌm/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "6",
    "sentence": "Unfortunately , it has become difficult",
    "chinese": "不幸的是，变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæz; həz/ /bɪˈkʌm/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "7",
    "sentence": "to buy a new home",
    "chinese": "购买新房",
    "pronunciation": "/tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "8",
    "sentence": "Unfortunately , it has become difficult to buy a new home",
    "chinese": "不幸的是，购买新房变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæz; həz/ /bɪˈkʌm/ /ˈdɪfɪkəlt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "9",
    "sentence": "because the cost of housing",
    "chinese": "因为房价",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðə/ /kɔːst/ /ʌv/ /ˈhaʊzɪŋ/"
  },
  {
    "id": "10",
    "sentence": "Unfortunately , it has become difficult to buy a new home because the cost of housing",
    "chinese": "不幸的是，由于房价上涨，购买新房变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæz; həz/ /bɪˈkʌm/ /ˈdɪfɪkəlt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðə/ /kɔːst/ /ʌv/ /ˈhaʊzɪŋ/"
  },
  {
    "id": "11",
    "sentence": "has risen faster",
    "chinese": "上涨得更快",
    "pronunciation": "/hæz; həz/ /ˈrɪzn/ /ˈfæstər/"
  },
  {
    "id": "12",
    "sentence": "Unfortunately , it has become difficult to buy a new home because the cost of housing has risen faster",
    "chinese": "不幸的是，由于房价上涨速度超过了人们的收入增长，购买新房变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæz; həz/ /bɪˈkʌm/ /ˈdɪfɪkəlt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðə/ /kɔːst/ /ʌv/ /ˈhaʊzɪŋ/ /hæz; həz/ /ˈrɪzn/ /ˈfæstər/"
  },
  {
    "id": "13",
    "sentence": "than people's incomes",
    "chinese": "超过人们的收入",
    "pronunciation": "/ðæn; ðən/ /ˈpiplz/ /ˈɪnkʌmz/"
  },
  {
    "id": "14",
    "sentence": "Unfortunately , it has become difficult to buy a new home because the cost of housing has risen faster than people's incomes",
    "chinese": "不幸的是，由于房价上涨速度超过了人们的收入增长，购买新房变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæz; həz/ /bɪˈkʌm/ /ˈdɪfɪkəlt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðə/ /kɔːst/ /ʌv/ /ˈhaʊzɪŋ/ /hæz; həz/ /ˈrɪzn/ /ˈfæstər/ /ðæn; ðən/ /ˈpiplz/ /ˈɪnkʌmz/"
  },
  {
    "id": "15",
    "sentence": "In order to be able to buy a new home",
    "chinese": "为了能够购买新房",
    "pronunciation": "/ɪn/ /ˈɔːrdər/ /tuː; tə/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "16",
    "sentence": "they have been saving money",
    "chinese": "他们一直在存钱",
    "pronunciation": "/ðeɪ/ /hæv/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "17",
    "sentence": "In order to be able to buy a new home , they have been saving money",
    "chinese": "为了能够购买新房，他们一直在存钱",
    "pronunciation": "/ɪn/ /ˈɔːrdər/ /tuː; tə/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /ðeɪ/ /hæv/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "18",
    "sentence": "for years",
    "chinese": "多年",
    "pronunciation": "/fɔːr; fər/ /jɪrz/"
  },
  {
    "id": "19",
    "sentence": "In order to be able to buy a new home , they have been saving money for years",
    "chinese": "为了能够购买新房，他们已经存钱多年",
    "pronunciation": "/ɪn/ /ˈɔːrdər/ /tuː; tə/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /ðeɪ/ /hæv/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/ /fɔːr; fər/ /jɪrz/"
  },
  {
    "id": "20",
    "sentence": "If they want to buy a single-family house",
    "chinese": "如果他们想买独栋住宅",
    "pronunciation": "/ɪf/ /ðeɪ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/"
  },
  {
    "id": "21",
    "sentence": "they would have to live",
    "chinese": "他们将不得不居住",
    "pronunciation": "/ðeɪ/ /wʊd/ /hæv/ /tuː; tə/ /lɪv; laɪv/"
  },
  {
    "id": "22",
    "sentence": "If they want to buy a single-family house , they would have to live",
    "chinese": "如果他们想买独栋住宅，就不得不",
    "pronunciation": "/ɪf/ /ðeɪ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/ /ðeɪ/ /wʊd/ /hæv/ /tuː; tə/ /lɪv; laɪv/"
  },
  {
    "id": "23",
    "sentence": "far from the city",
    "chinese": "远离城市的地方",
    "pronunciation": "/fɑːr/ /frʌm/ /ðə/ /ˈsɪti/"
  },
  {
    "id": "24",
    "sentence": "If they want to buy a single-family house , they would have to live far from the city",
    "chinese": "如果他们想买独栋住宅，就不得不住在远离城市的地方",
    "pronunciation": "/ɪf/ /ðeɪ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/ /ðeɪ/ /wʊd/ /hæv/ /tuː; tə/ /lɪv; laɪv/ /fɑːr/ /frʌm/ /ðə/ /ˈsɪti/"
  },
  {
    "id": "25",
    "sentence": "This would mean",
    "chinese": "这意味着",
    "pronunciation": "/ðɪs/ /wʊd/ /miːn/"
  },
  {
    "id": "26",
    "sentence": "a long commute",
    "chinese": "长时间的通勤",
    "pronunciation": "/ə; eɪ/ /lɔːŋ/ /kəˈmjuːt/"
  },
  {
    "id": "27",
    "sentence": "This would mean a long commute",
    "chinese": "这意味着长时间的通勤",
    "pronunciation": "/ðɪs/ /wʊd/ /miːn/ /ə; eɪ/ /lɔːŋ/ /kəˈmjuːt/"
  },
  {
    "id": "28",
    "sentence": "to their jobs",
    "chinese": "去上班",
    "pronunciation": "/tuː; tə/ /ðer/ /dʒɑːbz/"
  },
  {
    "id": "29",
    "sentence": "This would mean a long commute to their jobs",
    "chinese": "这意味着他们俩上班都需要长时间的通勤",
    "pronunciation": "/ðɪs/ /wʊd/ /miːn/ /ə; eɪ/ /lɔːŋ/ /kəˈmjuːt/ /tuː; tə/ /ðer/ /dʒɑːbz/"
  },
  {
    "id": "30",
    "sentence": "for both of them",
    "chinese": "对他们俩来说",
    "pronunciation": "/fɔːr; fər/ /boʊθ/ /ʌv/ /ðem; ðəm/"
  },
  {
    "id": "31",
    "sentence": "This would mean a long commute to their jobs for both of them",
    "chinese": "这意味着他们俩上班都需要长时间的通勤",
    "pronunciation": "/ðɪs/ /wʊd/ /miːn/ /ə; eɪ/ /lɔːŋ/ /kəˈmjuːt/ /tuː; tə/ /ðer/ /dʒɑːbz/ /fɔːr; fər/ /boʊθ/ /ʌv/ /ðem; ðəm/"
  },
  {
    "id": "32",
    "sentence": "They looked at apartments",
    "chinese": "他们看了一些公寓",
    "pronunciation": "/ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/"
  },
  {
    "id": "33",
    "sentence": "but these were either too small",
    "chinese": "但这些要么太小",
    "pronunciation": "/bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/"
  },
  {
    "id": "34",
    "sentence": "They looked at apartments but these were either too small",
    "chinese": "他们看了一些公寓，但这些要么太小",
    "pronunciation": "/ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/"
  },
  {
    "id": "35",
    "sentence": "or in neighborhoods",
    "chinese": "或者在社区",
    "pronunciation": "/ɔr/ /ɪn/ /ˈneɪbərhʊdz/"
  },
  {
    "id": "36",
    "sentence": "They looked at apartments but these were either too small or in neighborhoods",
    "chinese": "他们看了一些公寓，但这些要么太小，要么位于他们不喜欢的社区",
    "pronunciation": "/ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/ /ɔr/ /ɪn/ /ˈneɪbərhʊdz/"
  },
  {
    "id": "37",
    "sentence": "they didn't like",
    "chinese": "他们不喜欢的",
    "pronunciation": "/ðeɪ/ /ˈdɪd(ə)nt/ /laɪk/"
  },
  {
    "id": "38",
    "sentence": "They looked at apartments but these were either too small or in neighborhoods they didn't like",
    "chinese": "他们看了一些公寓，但这些要么太小，要么位于他们不喜欢的社区",
    "pronunciation": "/ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/ /ɔr/ /ɪn/ /ˈneɪbərhʊdz/ /ðeɪ/ /ˈdɪd(ə)nt/ /laɪk/"
  },
  {
    "id": "39",
    "sentence": "They realize",
    "chinese": "他们意识到",
    "pronunciation": "/ðeɪ/ /ˈrɪlˌaɪz/"
  },
  {
    "id": "40",
    "sentence": "that even though they both work hard",
    "chinese": "尽管两人都努力工作",
    "pronunciation": "/ðæt/ /ˈiː.vən/ /ðoʊ/ /ðeɪ/ /boʊθ/ /wɜrk/ /hɑːrd/"
  },
  {
    "id": "41",
    "sentence": "They realize that even though they both work hard",
    "chinese": "他们意识到，尽管两人都努力工作",
    "pronunciation": "/ðeɪ/ /ˈrɪlˌaɪz/ /ðæt/ /ˈiː.vən/ /ðoʊ/ /ðeɪ/ /boʊθ/ /wɜrk/ /hɑːrd/"
  },
  {
    "id": "42",
    "sentence": "and don't spend money unwisely",
    "chinese": "且不乱花钱",
    "pronunciation": "/ænd; ənd/ /doʊnt/ /spend/ /ˈmʌni/ /ˌʌnˈwaɪzli/"
  },
  {
    "id": "43",
    "sentence": "They realize that even though they both work hard and don't spend money unwisely",
    "chinese": "他们意识到，尽管两人都努力工作且不乱花钱",
    "pronunciation": "/ðeɪ/ /ˈrɪlˌaɪz/ /ðæt/ /ˈiː.vən/ /ðoʊ/ /ðeɪ/ /boʊθ/ /wɜrk/ /hɑːrd/ /ænd; ənd/ /doʊnt/ /spend/ /ˈmʌni/ /ˌʌnˈwaɪzli/"
  },
  {
    "id": "44",
    "sentence": "they still can't afford the home",
    "chinese": "他们仍然买不起那个家",
    "pronunciation": "/ðeɪ/ /stɪl/ /kænt/ /əˈfɔːrd/ /ðə/ /hoʊm/"
  },
  {
    "id": "45",
    "sentence": "They realize that even though they both work hard and don't spend money unwisely , they still can't afford the home",
    "chinese": "他们意识到，尽管两人都努力工作且不乱花钱，但仍然买不起他们想要的家",
    "pronunciation": "/ðeɪ/ /ˈrɪlˌaɪz/ /ðæt/ /ˈiː.vən/ /ðoʊ/ /ðeɪ/ /boʊθ/ /wɜrk/ /hɑːrd/ /ænd; ənd/ /doʊnt/ /spend/ /ˈmʌni/ /ˌʌnˈwaɪzli/ /ðeɪ/ /stɪl/ /kænt/ /əˈfɔːrd/ /ðə/ /hoʊm/"
  },
  {
    "id": "46",
    "sentence": "that they want",
    "chinese": "他们想要的",
    "pronunciation": "/ðæt/ /ðeɪ/ /wɑːnt/"
  },
  {
    "id": "47",
    "sentence": "They realize that even though they both work hard and don't spend money unwisely , they still can't afford the home that they want",
    "chinese": "他们意识到，尽管两人都努力工作且不乱花钱，但仍然买不起他们想要的家",
    "pronunciation": "/ðeɪ/ /ˈrɪlˌaɪz/ /ðæt/ /ˈiː.vən/ /ðoʊ/ /ðeɪ/ /boʊθ/ /wɜrk/ /hɑːrd/ /ænd; ənd/ /doʊnt/ /spend/ /ˈmʌni/ /ˌʌnˈwaɪzli/ /ðeɪ/ /stɪl/ /kænt/ /əˈfɔːrd/ /ðə/ /hoʊm/ /ðæt/ /ðeɪ/ /wɑːnt/"
  },
  {
    "id": "48",
    "sentence": "They thought",
    "chinese": "他们曾一度考虑过",
    "pronunciation": "/ðeɪ/ /θɔːt/"
  },
  {
    "id": "49",
    "sentence": "at one point",
    "chinese": "曾一度",
    "pronunciation": "/æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "50",
    "sentence": "They thought , at one point",
    "chinese": "他们曾一度考虑过",
    "pronunciation": "/ðeɪ/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "51",
    "sentence": "of renting a home",
    "chinese": "租房",
    "pronunciation": "/ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/"
  },
  {
    "id": "52",
    "sentence": "They thought , at one point , of renting a home",
    "chinese": "他们曾一度考虑过租房",
    "pronunciation": "/ðeɪ/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/ /ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/"
  },
  {
    "id": "53",
    "sentence": "but really felt",
    "chinese": "但最终还是觉得",
    "pronunciation": "/bʌt/ /ˈriːəli/ /felt/"
  },
  {
    "id": "54",
    "sentence": "They thought , at one point , of renting a home , but really felt",
    "chinese": "他们曾一度考虑过租房，但最终还是觉得",
    "pronunciation": "/ðeɪ/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/ /ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/ /bʌt/ /ˈriːəli/ /felt/"
  },
  {
    "id": "55",
    "sentence": "they wanted to own their own home",
    "chinese": "他们想要拥有自己的房子",
    "pronunciation": "/ðeɪ/ /ˈwɑːntɪd/ /tuː; tə/ /oʊn/ /ðer/ /oʊn/ /hoʊm/"
  },
  {
    "id": "56",
    "sentence": "They thought , at one point , of renting a home , but really felt they wanted to own their own home",
    "chinese": "他们曾一度考虑过租房，但最终还是觉得想要拥有自己的房子",
    "pronunciation": "/ðeɪ/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/ /ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/ /bʌt/ /ˈriːəli/ /felt/ /ðeɪ/ /ˈwɑːntɪd/ /tuː; tə/ /oʊn/ /ðer/ /oʊn/ /hoʊm/"
  },
  {
    "id": "57",
    "sentence": "Finally",
    "chinese": "最后",
    "pronunciation": "/ˈfaɪnəli/"
  },
  {
    "id": "58",
    "sentence": "they decided",
    "chinese": "他们决定",
    "pronunciation": "/ðeɪ/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "59",
    "sentence": "Finally , they decided",
    "chinese": "最后，他们决定",
    "pronunciation": "/ˈfaɪnəli/ /ðeɪ/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "60",
    "sentence": "to move",
    "chinese": "搬",
    "pronunciation": "/tuː; tə/ /muːv/"
  },
  {
    "id": "61",
    "sentence": "Finally , they decided to move",
    "chinese": "最后，他们决定搬家",
    "pronunciation": "/ˈfaɪnəli/ /ðeɪ/ /dɪˈsaɪdɪd/ /tuː; tə/ /muːv/"
  },
  {
    "id": "62",
    "sentence": "to a smaller town",
    "chinese": "到一个较小的城镇",
    "pronunciation": "/tuː; tə/ /ə; eɪ/ /ˈsmɔːlər/ /taʊn/"
  },
  {
    "id": "63",
    "sentence": "Finally , they decided to move to a smaller town",
    "chinese": "最后，他们决定搬到一个较小的城镇",
    "pronunciation": "/ˈfaɪnəli/ /ðeɪ/ /dɪˈsaɪdɪd/ /tuː; tə/ /muːv/ /tuː; tə/ /ə; eɪ/ /ˈsmɔːlər/ /taʊn/"
  },
  {
    "id": "64",
    "sentence": "They felt",
    "chinese": "他们觉得",
    "pronunciation": "/ðeɪ/ /felt/"
  },
  {
    "id": "65",
    "sentence": "they could live a simpler life there",
    "chinese": "他们可以在那里过上更简单的生活",
    "pronunciation": "/ðeɪ/ /kʊd/ /lɪv; laɪv/ /ə; eɪ/ /ˈsɪmplɚ/ /laɪf/ /ðer; ðər/"
  },
  {
    "id": "66",
    "sentence": "They felt they could live a simpler life there",
    "chinese": "他们觉得他们可以在那里过上更简单的生活",
    "pronunciation": "/ðeɪ/ /felt/ /ðeɪ/ /kʊd/ /lɪv; laɪv/ /ə; eɪ/ /ˈsɪmplɚ/ /laɪf/ /ðer; ðər/"
  },
  {
    "id": "67",
    "sentence": "and enjoy a better family life",
    "chinese": "并享受更美好的家庭生活",
    "pronunciation": "/ænd; ənd/ /ɪnˈdʒɔɪ/ /ə; eɪ/ /ˈbetər/ /ˈfæməli/ /laɪf/"
  },
  {
    "id": "68",
    "sentence": "They felt they could live a simpler life there and enjoy a better family life",
    "chinese": "他们觉得在那里可以过上更简单的生活，享受更美好的家庭生活",
    "pronunciation": "/ðeɪ/ /felt/ /ðeɪ/ /kʊd/ /lɪv; laɪv/ /ə; eɪ/ /ˈsɪmplɚ/ /laɪf/ /ðer; ðər/ /ænd; ənd/ /ɪnˈdʒɔɪ/ /ə; eɪ/ /ˈbetər/ /ˈfæməli/ /laɪf/"
  },
  {
    "id": "69",
    "sentence": "Now let's hear",
    "chinese": "现在让我们听听",
    "pronunciation": "/naʊ/ /lets/ /hɪr/"
  },
  {
    "id": "70",
    "sentence": "the same story",
    "chinese": "同一个故事",
    "pronunciation": "/ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "71",
    "sentence": "Now let's hear the same story",
    "chinese": "现在让我们听听同一个故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "72",
    "sentence": "told by George",
    "chinese": "乔治讲述的",
    "pronunciation": "/toʊld/ /baɪ/ /dʒɔːrdʒ/"
  },
  {
    "id": "73",
    "sentence": "Now let's hear the same story told by George",
    "chinese": "现在让我们听听乔治讲述的同一个故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /ðə/ /seɪm/ /ˈstɔːri/ /toʊld/ /baɪ/ /dʒɔːrdʒ/"
  },
  {
    "id": "74",
    "sentence": "We had wanted to buy a new home",
    "chinese": "我们原本想买一套新房子",
    "pronunciation": "/wiː; wi/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "75",
    "sentence": "because our two children had grown older",
    "chinese": "因为我们的两个孩子已经长大了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /aʊr/ /tuː/ /ˈtʃɪldrən/ /hæd/ /ɡroʊn/ /ˈoʊldər/"
  },
  {
    "id": "76",
    "sentence": "We had wanted to buy a new home because our two children had grown older",
    "chinese": "我们原本想买一套新房子，因为我们的两个孩子已经长大了",
    "pronunciation": "/wiː; wi/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /aʊr/ /tuː/ /ˈtʃɪldrən/ /hæd/ /ɡroʊn/ /ˈoʊldər/"
  },
  {
    "id": "77",
    "sentence": "Unfortunately",
    "chinese": "不幸的是",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/"
  },
  {
    "id": "78",
    "sentence": "it had become difficult",
    "chinese": "变得困难",
    "pronunciation": "/ɪt/ /hæd/ /bɪˈkʌm/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "79",
    "sentence": "Unfortunately , it had become difficult",
    "chinese": "不幸的是，变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæd/ /bɪˈkʌm/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "80",
    "sentence": "to buy a new home",
    "chinese": "购买新房",
    "pronunciation": "/tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "81",
    "sentence": "Unfortunately , it had become difficult to buy a new home",
    "chinese": "不幸的是，购买新房变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæd/ /bɪˈkʌm/ /ˈdɪfɪkəlt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "82",
    "sentence": "because the cost of housing",
    "chinese": "因为房价",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðə/ /kɔːst/ /ʌv/ /ˈhaʊzɪŋ/"
  },
  {
    "id": "83",
    "sentence": "Unfortunately , it had become difficult to buy a new home because the cost of housing",
    "chinese": "不幸的是，由于房价上涨，购买新房变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæd/ /bɪˈkʌm/ /ˈdɪfɪkəlt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðə/ /kɔːst/ /ʌv/ /ˈhaʊzɪŋ/"
  },
  {
    "id": "84",
    "sentence": "had risen faster",
    "chinese": "上涨得更快",
    "pronunciation": "/hæd/ /ˈrɪzn/ /ˈfæstər/"
  },
  {
    "id": "85",
    "sentence": "Unfortunately , it had become difficult to buy a new home because the cost of housing had risen faster",
    "chinese": "不幸的是，由于房价上涨速度超过了我们的收入增长，购买新房变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæd/ /bɪˈkʌm/ /ˈdɪfɪkəlt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðə/ /kɔːst/ /ʌv/ /ˈhaʊzɪŋ/ /hæd/ /ˈrɪzn/ /ˈfæstər/"
  },
  {
    "id": "86",
    "sentence": "than our incomes",
    "chinese": "超过我们的收入",
    "pronunciation": "/ðæn; ðən/ /aʊr/ /ˈɪnkʌmz/"
  },
  {
    "id": "87",
    "sentence": "Unfortunately , it had become difficult to buy a new home because the cost of housing had risen faster than our incomes",
    "chinese": "不幸的是，由于房价上涨速度超过了我们的收入增长，购买新房变得困难",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ɪt/ /hæd/ /bɪˈkʌm/ /ˈdɪfɪkəlt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðə/ /kɔːst/ /ʌv/ /ˈhaʊzɪŋ/ /hæd/ /ˈrɪzn/ /ˈfæstər/ /ðæn; ðən/ /aʊr/ /ˈɪnkʌmz/"
  },
  {
    "id": "88",
    "sentence": "In order to be able to buy a new home",
    "chinese": "为了能够购买新房子",
    "pronunciation": "/ɪn/ /ˈɔːrdər/ /tuː; tə/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "89",
    "sentence": "we had been saving money",
    "chinese": "我们已经存了多年的钱",
    "pronunciation": "/wiː; wi/ /hæd/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "90",
    "sentence": "In order to be able to buy a new home , we had been saving money",
    "chinese": "为了能够购买新房子，我们已经存了钱",
    "pronunciation": "/ɪn/ /ˈɔːrdər/ /tuː; tə/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /wiː; wi/ /hæd/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "91",
    "sentence": "for years",
    "chinese": "多年",
    "pronunciation": "/fɔːr; fər/ /jɪrz/"
  },
  {
    "id": "92",
    "sentence": "In order to be able to buy a new home , we had been saving money for years",
    "chinese": "为了能够购买新房子，我们已经存了多年的钱",
    "pronunciation": "/ɪn/ /ˈɔːrdər/ /tuː; tə/ /biː/ /ˈeɪb(ə)l/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /wiː; wi/ /hæd/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/ /fɔːr; fər/ /jɪrz/"
  },
  {
    "id": "93",
    "sentence": "If we had wanted to buy a single-family house",
    "chinese": "如果我们想买一栋独栋住宅",
    "pronunciation": "/ɪf/ /wiː; wi/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/"
  },
  {
    "id": "94",
    "sentence": "we would have had to live",
    "chinese": "我们就不得不住",
    "pronunciation": "/wiː; wi/ /wʊd/ /hæv/ /hæd/ /tuː; tə/ /lɪv; laɪv/"
  },
  {
    "id": "95",
    "sentence": "If we had wanted to buy a single-family house , we would have had to live",
    "chinese": "如果我们想买一栋独栋住宅，我们就不得不住",
    "pronunciation": "/ɪf/ /wiː; wi/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/ /wiː; wi/ /wʊd/ /hæv/ /hæd/ /tuː; tə/ /lɪv; laɪv/"
  },
  {
    "id": "96",
    "sentence": "far from the city",
    "chinese": "远离城市",
    "pronunciation": "/fɑːr/ /frʌm/ /ðə/ /ˈsɪti/"
  },
  {
    "id": "97",
    "sentence": "If we had wanted to buy a single-family house , we would have had to live far from the city",
    "chinese": "如果我们想买一栋独栋住宅，我们就不得不住在远离城市的地方",
    "pronunciation": "/ɪf/ /wiː; wi/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/ /wiː; wi/ /wʊd/ /hæv/ /hæd/ /tuː; tə/ /lɪv; laɪv/ /fɑːr/ /frʌm/ /ðə/ /ˈsɪti/"
  },
  {
    "id": "98",
    "sentence": "This would have meant",
    "chinese": "这意味着",
    "pronunciation": "/ðɪs/ /wʊd/ /hæv/ /mɛnt/"
  },
  {
    "id": "99",
    "sentence": "a long commute",
    "chinese": "长时间的通勤",
    "pronunciation": "/ə; eɪ/ /lɔːŋ/ /kəˈmjuːt/"
  },
  {
    "id": "100",
    "sentence": "This would have meant a long commute",
    "chinese": "这意味着长时间的通勤",
    "pronunciation": "/ðɪs/ /wʊd/ /hæv/ /mɛnt/ /ə; eɪ/ /lɔːŋ/ /kəˈmjuːt/"
  },
  {
    "id": "101",
    "sentence": "to our jobs",
    "chinese": "去我们的工作",
    "pronunciation": "/tuː; tə/ /aʊr/ /dʒɑːbz/"
  },
  {
    "id": "102",
    "sentence": "This would have meant a long commute to our jobs",
    "chinese": "这意味着我们俩上班都需要长时间的通勤",
    "pronunciation": "/ðɪs/ /wʊd/ /hæv/ /mɛnt/ /ə; eɪ/ /lɔːŋ/ /kəˈmjuːt/ /tuː; tə/ /aʊr/ /dʒɑːbz/"
  },
  {
    "id": "103",
    "sentence": "for both of us",
    "chinese": "对我们俩来说",
    "pronunciation": "/fɔːr; fər/ /boʊθ/ /ʌv/ /ʌs/"
  },
  {
    "id": "104",
    "sentence": "This would have meant a long commute to our jobs for both of us",
    "chinese": "这意味着我们俩上班都需要长时间的通勤",
    "pronunciation": "/ðɪs/ /wʊd/ /hæv/ /mɛnt/ /ə; eɪ/ /lɔːŋ/ /kəˈmjuːt/ /tuː; tə/ /aʊr/ /dʒɑːbz/ /fɔːr; fər/ /boʊθ/ /ʌv/ /ʌs/"
  },
  {
    "id": "105",
    "sentence": "We had looked at apartments",
    "chinese": "我们看过一些公寓",
    "pronunciation": "/wiː; wi/ /hæd/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/"
  },
  {
    "id": "106",
    "sentence": "but these were either too small",
    "chinese": "但这些要么太小",
    "pronunciation": "/bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/"
  },
  {
    "id": "107",
    "sentence": "We had looked at apartments but these were either too small",
    "chinese": "我们看过一些公寓，但这些要么太小",
    "pronunciation": "/wiː; wi/ /hæd/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/"
  },
  {
    "id": "108",
    "sentence": "or in neighborhoods",
    "chinese": "要么位于社区",
    "pronunciation": "/ɔr/ /ɪn/ /ˈneɪbərhʊdz/"
  },
  {
    "id": "109",
    "sentence": "We had looked at apartments but these were either too small or in neighborhoods",
    "chinese": "我们看过一些公寓，但这些要么太小，要么位于我们不喜欢的社区",
    "pronunciation": "/wiː; wi/ /hæd/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/ /ɔr/ /ɪn/ /ˈneɪbərhʊdz/"
  },
  {
    "id": "110",
    "sentence": "we didn't like",
    "chinese": "我们不喜欢",
    "pronunciation": "/wiː; wi/ /ˈdɪd(ə)nt/ /laɪk/"
  },
  {
    "id": "111",
    "sentence": "We had looked at apartments but these were either too small or in neighborhoods we didn't like",
    "chinese": "我们看过一些公寓，但这些要么太小，要么位于我们不喜欢的社区",
    "pronunciation": "/wiː; wi/ /hæd/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/ /ɔr/ /ɪn/ /ˈneɪbərhʊdz/ /wiː; wi/ /ˈdɪd(ə)nt/ /laɪk/"
  },
  {
    "id": "112",
    "sentence": "We realized",
    "chinese": "我们意识到",
    "pronunciation": "/wiː; wi/ /ˈriːəlaɪzd/"
  },
  {
    "id": "113",
    "sentence": "that even though we both worked hard",
    "chinese": "尽管我们都很努力工作",
    "pronunciation": "/ðæt/ /ˈiː.vən/ /ðoʊ/ /wiː; wi/ /boʊθ/ /wɜːrkt/ /hɑːrd/"
  },
  {
    "id": "114",
    "sentence": "We realized that even though we both worked hard",
    "chinese": "我们意识到，尽管我们都很努力工作",
    "pronunciation": "/wiː; wi/ /ˈriːəlaɪzd/ /ðæt/ /ˈiː.vən/ /ðoʊ/ /wiː; wi/ /boʊθ/ /wɜːrkt/ /hɑːrd/"
  },
  {
    "id": "115",
    "sentence": "and didn't spend money unwisely",
    "chinese": "并且不乱花钱",
    "pronunciation": "/ænd; ənd/ /ˈdɪd(ə)nt/ /spend/ /ˈmʌni/ /ˌʌnˈwaɪzli/"
  },
  {
    "id": "116",
    "sentence": "We realized that even though we both worked hard and didn't spend money unwisely",
    "chinese": "我们意识到，尽管我们都很努力工作并且不乱花钱",
    "pronunciation": "/wiː; wi/ /ˈriːəlaɪzd/ /ðæt/ /ˈiː.vən/ /ðoʊ/ /wiː; wi/ /boʊθ/ /wɜːrkt/ /hɑːrd/ /ænd; ənd/ /ˈdɪd(ə)nt/ /spend/ /ˈmʌni/ /ˌʌnˈwaɪzli/"
  },
  {
    "id": "117",
    "sentence": "we still couldn't afford the home",
    "chinese": "我们仍然买不起那个家",
    "pronunciation": "/wiː; wi/ /stɪl/ /ˈkʊd(ə)nt/ /əˈfɔːrd/ /ðə/ /hoʊm/"
  },
  {
    "id": "118",
    "sentence": "We realized that even though we both worked hard and didn't spend money unwisely , we still couldn't afford the home",
    "chinese": "我们意识到，尽管我们都很努力工作并且不乱花钱，我们仍然买不起我们想要的家",
    "pronunciation": "/wiː; wi/ /ˈriːəlaɪzd/ /ðæt/ /ˈiː.vən/ /ðoʊ/ /wiː; wi/ /boʊθ/ /wɜːrkt/ /hɑːrd/ /ænd; ənd/ /ˈdɪd(ə)nt/ /spend/ /ˈmʌni/ /ˌʌnˈwaɪzli/ /wiː; wi/ /stɪl/ /ˈkʊd(ə)nt/ /əˈfɔːrd/ /ðə/ /hoʊm/"
  },
  {
    "id": "119",
    "sentence": "that we wanted",
    "chinese": "我们想要的",
    "pronunciation": "/ðæt/ /wiː; wi/ /ˈwɑːntɪd/"
  },
  {
    "id": "120",
    "sentence": "We realized that even though we both worked hard and didn't spend money unwisely , we still couldn't afford the home that we wanted",
    "chinese": "我们意识到，尽管我们都很努力工作并且不乱花钱，我们仍然买不起我们想要的家",
    "pronunciation": "/wiː; wi/ /ˈriːəlaɪzd/ /ðæt/ /ˈiː.vən/ /ðoʊ/ /wiː; wi/ /boʊθ/ /wɜːrkt/ /hɑːrd/ /ænd; ənd/ /ˈdɪd(ə)nt/ /spend/ /ˈmʌni/ /ˌʌnˈwaɪzli/ /wiː; wi/ /stɪl/ /ˈkʊd(ə)nt/ /əˈfɔːrd/ /ðə/ /hoʊm/ /ðæt/ /wiː; wi/ /ˈwɑːntɪd/"
  },
  {
    "id": "121",
    "sentence": "We had thought",
    "chinese": "我们曾经考虑过",
    "pronunciation": "/wiː; wi/ /hæd/ /θɔːt/"
  },
  {
    "id": "122",
    "sentence": "at one point",
    "chinese": "曾经",
    "pronunciation": "/æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "123",
    "sentence": "We had thought , at one point",
    "chinese": "我们曾经考虑过",
    "pronunciation": "/wiː; wi/ /hæd/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "124",
    "sentence": "of renting a home",
    "chinese": "租房子",
    "pronunciation": "/ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/"
  },
  {
    "id": "125",
    "sentence": "We had thought , at one point , of renting a home",
    "chinese": "我们曾经考虑过租房子",
    "pronunciation": "/wiː; wi/ /hæd/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/ /ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/"
  },
  {
    "id": "126",
    "sentence": "but really felt",
    "chinese": "但最终还是觉得",
    "pronunciation": "/bʌt/ /ˈriːəli/ /felt/"
  },
  {
    "id": "127",
    "sentence": "We had thought , at one point , of renting a home , but really felt",
    "chinese": "我们曾经考虑过，在某一刻，租房子，但最终还是觉得",
    "pronunciation": "/wiː; wi/ /hæd/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/ /ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/ /bʌt/ /ˈriːəli/ /felt/"
  },
  {
    "id": "128",
    "sentence": "we preferred to own our own home",
    "chinese": "我们更倾向于拥有自己的房子",
    "pronunciation": "/wiː; wi/ /prɪˈfɜːrd/ /tuː; tə/ /oʊn/ /aʊr/ /oʊn/ /hoʊm/"
  },
  {
    "id": "129",
    "sentence": "We had thought , at one point , of renting a home , but really felt we preferred to own our own home",
    "chinese": "我们曾经考虑过租房子，但最终还是觉得拥有自己的房子更好",
    "pronunciation": "/wiː; wi/ /hæd/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/ /ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/ /bʌt/ /ˈriːəli/ /felt/ /wiː; wi/ /prɪˈfɜːrd/ /tuː; tə/ /oʊn/ /aʊr/ /oʊn/ /hoʊm/"
  },
  {
    "id": "130",
    "sentence": "Finally",
    "chinese": "最终",
    "pronunciation": "/ˈfaɪnəli/"
  },
  {
    "id": "131",
    "sentence": "we decided",
    "chinese": "我们决定",
    "pronunciation": "/wiː; wi/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "132",
    "sentence": "Finally we decided",
    "chinese": "最终我们决定",
    "pronunciation": "/ˈfaɪnəli/ /wiː; wi/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "133",
    "sentence": "to move",
    "chinese": "搬家",
    "pronunciation": "/tuː; tə/ /muːv/"
  },
  {
    "id": "134",
    "sentence": "Finally we decided to move",
    "chinese": "最终我们决定搬",
    "pronunciation": "/ˈfaɪnəli/ /wiː; wi/ /dɪˈsaɪdɪd/ /tuː; tə/ /muːv/"
  },
  {
    "id": "135",
    "sentence": "to a smaller town",
    "chinese": "到一个较小的城镇",
    "pronunciation": "/tuː; tə/ /ə; eɪ/ /ˈsmɔːlər/ /taʊn/"
  },
  {
    "id": "136",
    "sentence": "Finally we decided to move to a smaller town",
    "chinese": "最终我们决定搬到一个较小的城镇",
    "pronunciation": "/ˈfaɪnəli/ /wiː; wi/ /dɪˈsaɪdɪd/ /tuː; tə/ /muːv/ /tuː; tə/ /ə; eɪ/ /ˈsmɔːlər/ /taʊn/"
  },
  {
    "id": "137",
    "sentence": "We felt",
    "chinese": "我们觉得",
    "pronunciation": "/wiː; wi/ /felt/"
  },
  {
    "id": "138",
    "sentence": "we could live a simpler life there",
    "chinese": "我们可以在那里过上更简单的生活",
    "pronunciation": "/wiː; wi/ /kʊd/ /lɪv; laɪv/ /ə; eɪ/ /ˈsɪmplɚ/ /laɪf/ /ðer; ðər/"
  },
  {
    "id": "139",
    "sentence": "We felt we could live a simpler life there",
    "chinese": "我们觉得我们可以在那里过上更简单的生活",
    "pronunciation": "/wiː; wi/ /felt/ /wiː; wi/ /kʊd/ /lɪv; laɪv/ /ə; eɪ/ /ˈsɪmplɚ/ /laɪf/ /ðer; ðər/"
  },
  {
    "id": "140",
    "sentence": "and enjoy a better family life",
    "chinese": "并享受更美好的家庭生活",
    "pronunciation": "/ænd; ənd/ /ɪnˈdʒɔɪ/ /ə; eɪ/ /ˈbetər/ /ˈfæməli/ /laɪf/"
  },
  {
    "id": "141",
    "sentence": "We felt we could live a simpler life there and enjoy a better family life",
    "chinese": "我们觉得在那里可以过上更简单的生活，享受更美好的家庭生活",
    "pronunciation": "/wiː; wi/ /felt/ /wiː; wi/ /kʊd/ /lɪv; laɪv/ /ə; eɪ/ /ˈsɪmplɚ/ /laɪf/ /ðer; ðər/ /ænd; ənd/ /ɪnˈdʒɔɪ/ /ə; eɪ/ /ˈbetər/ /ˈfæməli/ /laɪf/"
  },
  {
    "id": "142",
    "sentence": "Now here are some questions",
    "chinese": "现在有一些问题",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "143",
    "sentence": "you can try to answer",
    "chinese": "你可以尝试回答",
    "pronunciation": "/juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "144",
    "sentence": "Now here are some questions , you can try to answer",
    "chinese": "现在有一些问题，你可以尝试回答",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "145",
    "sentence": "or simply wait to hear the answer",
    "chinese": "或者简单地等待听答案",
    "pronunciation": "/ɔr/ /ˈsɪmpli/ /weɪt/ /tuː; tə/ /hɪr/ /ðə/ /ˈænsər/"
  },
  {
    "id": "146",
    "sentence": "Now here are some questions , you can try to answer or simply wait to hear the answer",
    "chinese": "现在有一些问题，你可以尝试回答，或者简单地等待听答案",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/ /ɔr/ /ˈsɪmpli/ /weɪt/ /tuː; tə/ /hɪr/ /ðə/ /ˈænsər/"
  },
  {
    "id": "147",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "148",
    "sentence": "Sally and George want to buy a new home",
    "chinese": "莎莉和乔治想买一套新房子",
    "pronunciation": "/ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "149",
    "sentence": "One : Sally and George want to buy a new home",
    "chinese": "莎莉和乔治想买一套新房子",
    "pronunciation": "/wʌn/ /ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "150",
    "sentence": "because their two children are getting older",
    "chinese": "因为他们的两个孩子正在长大",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðer/ /tuː/ /ˈtʃɪldrən/ /ɑr/ /ˈɡetɪŋ/ /ˈoʊldər/"
  },
  {
    "id": "151",
    "sentence": "One : Sally and George want to buy a new home because their two children are getting older",
    "chinese": "一：莎莉和乔治想买一套新房子，因为他们的两个孩子正在长大",
    "pronunciation": "/wʌn/ /ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðer/ /tuː/ /ˈtʃɪldrən/ /ɑr/ /ˈɡetɪŋ/ /ˈoʊldər/"
  },
  {
    "id": "152",
    "sentence": "Why do Sally and George want",
    "chinese": "为什么莎莉和乔治想要",
    "pronunciation": "/waɪ/ /duː; də/ /ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/ /wɑːnt/"
  },
  {
    "id": "153",
    "sentence": "to buy a new home",
    "chinese": "买新房子",
    "pronunciation": "/tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "154",
    "sentence": "Why do Sally and George want to buy a new home ?",
    "chinese": "为什么莎莉和乔治想买新房子？",
    "pronunciation": "/waɪ/ /duː; də/ /ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "155",
    "sentence": "They want to buy a new home",
    "chinese": "他们想买一套新房子",
    "pronunciation": "/ðeɪ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "156",
    "sentence": "because their children are getting older",
    "chinese": "因为孩子们渐渐长大了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðer/ /ˈtʃɪldrən/ /ɑr/ /ˈɡetɪŋ/ /ˈoʊldər/"
  },
  {
    "id": "157",
    "sentence": "They want to buy a new home because their children are getting older",
    "chinese": "他们想买一套新房子，因为孩子们渐渐长大了",
    "pronunciation": "/ðeɪ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /ðer/ /ˈtʃɪldrən/ /ɑr/ /ˈɡetɪŋ/ /ˈoʊldər/"
  },
  {
    "id": "158",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "159",
    "sentence": "They have been saving money",
    "chinese": "他们一直在存钱",
    "pronunciation": "/ðeɪ/ /hæv/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "160",
    "sentence": "Two : They have been saving money",
    "chinese": "他们一直在存钱",
    "pronunciation": "/tuː/ /ðeɪ/ /hæv/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "161",
    "sentence": "for many years",
    "chinese": "多年",
    "pronunciation": "/fɔːr; fər/ /ˈmeni/ /jɪrz/"
  },
  {
    "id": "162",
    "sentence": "Two : They have been saving money for many years",
    "chinese": "他们已经存钱多年了",
    "pronunciation": "/tuː/ /ðeɪ/ /hæv/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/ /fɔːr; fər/ /ˈmeni/ /jɪrz/"
  },
  {
    "id": "163",
    "sentence": "How long have Sally and George",
    "chinese": "Sally和George已经存了多长时间",
    "pronunciation": "/haʊ/ /lɔːŋ/ /hæv/ /ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/"
  },
  {
    "id": "164",
    "sentence": "been saving money",
    "chinese": "一直在存钱",
    "pronunciation": "/bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "165",
    "sentence": "How long have Sally and George been saving money ?",
    "chinese": "Sally和George已经存了多长时间的钱？",
    "pronunciation": "/haʊ/ /lɔːŋ/ /hæv/ /ˈsæli/ /ænd; ənd/ /dʒɔːrdʒ/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "166",
    "sentence": "They have been saving money",
    "chinese": "他们一直在存钱",
    "pronunciation": "/ðeɪ/ /hæv/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/"
  },
  {
    "id": "167",
    "sentence": "for many years",
    "chinese": "很多年",
    "pronunciation": "/fɔːr; fər/ /ˈmeni/ /jɪrz/"
  },
  {
    "id": "168",
    "sentence": "They have been saving money for many years",
    "chinese": "他们已经存钱很多年了",
    "pronunciation": "/ðeɪ/ /hæv/ /bɪn/ /ˈseɪvɪŋ/ /ˈmʌni/ /fɔːr; fər/ /ˈmeni/ /jɪrz/"
  },
  {
    "id": "169",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "170",
    "sentence": "If they want to buy a single-family house",
    "chinese": "如果他们想购买独栋住宅",
    "pronunciation": "/ɪf/ /ðeɪ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/"
  },
  {
    "id": "171",
    "sentence": "Three : If they want to buy a single-family house",
    "chinese": "三：如果他们想购买独栋住宅",
    "pronunciation": "/θriː/ /ɪf/ /ðeɪ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/"
  },
  {
    "id": "172",
    "sentence": "they would have to live far from the city",
    "chinese": "他们将不得不居住在远离城市的地方",
    "pronunciation": "/ðeɪ/ /wʊd/ /hæv/ /tuː; tə/ /lɪv; laɪv/ /fɑːr/ /frʌm/ /ðə/ /ˈsɪti/"
  },
  {
    "id": "173",
    "sentence": "Three : If they want to buy a single-family house , they would have to live far from the city",
    "chinese": "三：如果他们想购买独栋住宅，他们将不得不居住在远离城市的地方",
    "pronunciation": "/θriː/ /ɪf/ /ðeɪ/ /wɑːnt/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/ /ðeɪ/ /wʊd/ /hæv/ /tuː; tə/ /lɪv; laɪv/ /fɑːr/ /frʌm/ /ðə/ /ˈsɪti/"
  },
  {
    "id": "174",
    "sentence": "What would happen",
    "chinese": "会发生什么？",
    "pronunciation": "/wʌt/ /wʊd/ /ˈhæpən/"
  },
  {
    "id": "175",
    "sentence": "if they were to buy",
    "chinese": "如果他们要买",
    "pronunciation": "/ɪf/ /ðeɪ/ /wɜːr; wər/ /tuː; tə/ /baɪ/"
  },
  {
    "id": "176",
    "sentence": "What would happen if they were to buy",
    "chinese": "如果他们要买",
    "pronunciation": "/wʌt/ /wʊd/ /ˈhæpən/ /ɪf/ /ðeɪ/ /wɜːr; wər/ /tuː; tə/ /baɪ/"
  },
  {
    "id": "177",
    "sentence": "a single-family house",
    "chinese": "一栋独栋住宅",
    "pronunciation": "/ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/"
  },
  {
    "id": "178",
    "sentence": "What would happen if they were to buy a single-family house ?",
    "chinese": "如果他们购买一栋独栋住宅，会发生什么？",
    "pronunciation": "/wʌt/ /wʊd/ /ˈhæpən/ /ɪf/ /ðeɪ/ /wɜːr; wər/ /tuː; tə/ /baɪ/ /ə; eɪ/ /ˈsɪŋɡl ˈfæməli/ /haʊs/"
  },
  {
    "id": "179",
    "sentence": "They would have to live",
    "chinese": "他们将不得不居住",
    "pronunciation": "/ðeɪ/ /wʊd/ /hæv/ /tuː; tə/ /lɪv; laɪv/"
  },
  {
    "id": "180",
    "sentence": "far from the city",
    "chinese": "远离城市",
    "pronunciation": "/fɑːr/ /frʌm/ /ðə/ /ˈsɪti/"
  },
  {
    "id": "181",
    "sentence": "They would have to live far from the city",
    "chinese": "他们将不得不住在远离城市的地方",
    "pronunciation": "/ðeɪ/ /wʊd/ /hæv/ /tuː; tə/ /lɪv; laɪv/ /fɑːr/ /frʌm/ /ðə/ /ˈsɪti/"
  },
  {
    "id": "182",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "183",
    "sentence": "They looked at apartments",
    "chinese": "他们看了几套公寓",
    "pronunciation": "/ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/"
  },
  {
    "id": "184",
    "sentence": "Four : They looked at apartments",
    "chinese": "他们看了几套公寓",
    "pronunciation": "/fɔr/ /ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/"
  },
  {
    "id": "185",
    "sentence": "but these were either too small",
    "chinese": "但这些要么太小",
    "pronunciation": "/bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/"
  },
  {
    "id": "186",
    "sentence": "Four : They looked at apartments but these were either too small",
    "chinese": "他们看了几套公寓，但这些要么太小",
    "pronunciation": "/fɔr/ /ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/"
  },
  {
    "id": "187",
    "sentence": "or in neighborhoods",
    "chinese": "或者位于社区",
    "pronunciation": "/ɔr/ /ɪn/ /ˈneɪbərhʊdz/"
  },
  {
    "id": "188",
    "sentence": "Four : They looked at apartments but these were either too small or in neighborhoods",
    "chinese": "他们看了几套公寓，但要么太小，要么位于他们不喜欢的社区",
    "pronunciation": "/fɔr/ /ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/ /ɔr/ /ɪn/ /ˈneɪbərhʊdz/"
  },
  {
    "id": "189",
    "sentence": "they didn't like",
    "chinese": "他们不喜欢",
    "pronunciation": "/ðeɪ/ /ˈdɪd(ə)nt/ /laɪk/"
  },
  {
    "id": "190",
    "sentence": "Four : They looked at apartments but these were either too small or in neighborhoods they didn't like",
    "chinese": "四：他们看了几套公寓，但要么太小，要么位于他们不喜欢的社区",
    "pronunciation": "/fɔr/ /ðeɪ/ /lʊkt/ /æt; ət/ /əˈpɑrtmənts/ /bʌt/ /ðiːz/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/ /ɔr/ /ɪn/ /ˈneɪbərhʊdz/ /ðeɪ/ /ˈdɪd(ə)nt/ /laɪk/"
  },
  {
    "id": "191",
    "sentence": "Why don't they like the apartments",
    "chinese": "为什么他们不喜欢那些公寓？",
    "pronunciation": "/waɪ/ /doʊnt/ /ðeɪ/ /laɪk/ /ðə/ /əˈpɑrtmənts/"
  },
  {
    "id": "192",
    "sentence": "they looked at",
    "chinese": "他们看过的",
    "pronunciation": "/ðeɪ/ /lʊkt/ /æt; ət/"
  },
  {
    "id": "193",
    "sentence": "Why don't they like the apartments they looked at ?",
    "chinese": "为什么他们不喜欢他们看过的公寓？",
    "pronunciation": "/waɪ/ /doʊnt/ /ðeɪ/ /laɪk/ /ðə/ /əˈpɑrtmənts/ /ðeɪ/ /lʊkt/ /æt; ət/"
  },
  {
    "id": "194",
    "sentence": "They don't like the apartments",
    "chinese": "他们不喜欢那些公寓",
    "pronunciation": "/ðeɪ/ /doʊnt/ /laɪk/ /ðə/ /əˈpɑrtmənts/"
  },
  {
    "id": "195",
    "sentence": "they looked at",
    "chinese": "他们看过的",
    "pronunciation": "/ðeɪ/ /lʊkt/ /æt; ət/"
  },
  {
    "id": "196",
    "sentence": "They don't like the apartments they looked at",
    "chinese": "他们不喜欢他们看过的公寓",
    "pronunciation": "/ðeɪ/ /doʊnt/ /laɪk/ /ðə/ /əˈpɑrtmənts/ /ðeɪ/ /lʊkt/ /æt; ət/"
  },
  {
    "id": "197",
    "sentence": "because they were either too small",
    "chinese": "因为它们要么太小",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/"
  },
  {
    "id": "198",
    "sentence": "They don't like the apartments they looked at because they were either too small",
    "chinese": "他们不喜欢他们看过的公寓，因为那些公寓要么太小",
    "pronunciation": "/ðeɪ/ /doʊnt/ /laɪk/ /ðə/ /əˈpɑrtmənts/ /ðeɪ/ /lʊkt/ /æt; ət/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/"
  },
  {
    "id": "199",
    "sentence": "or in neighborhoods",
    "chinese": "或者位于社区",
    "pronunciation": "/ɔr/ /ɪn/ /ˈneɪbərhʊdz/"
  },
  {
    "id": "200",
    "sentence": "They don't like the apartments they looked at because they were either too small or in neighborhoods",
    "chinese": "他们不喜欢他们看过的公寓，因为那些公寓要么太小，要么位于他们不喜欢的社区",
    "pronunciation": "/ðeɪ/ /doʊnt/ /laɪk/ /ðə/ /əˈpɑrtmənts/ /ðeɪ/ /lʊkt/ /æt; ət/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/ /ɔr/ /ɪn/ /ˈneɪbərhʊdz/"
  },
  {
    "id": "201",
    "sentence": "they didn't like",
    "chinese": "他们不喜欢",
    "pronunciation": "/ðeɪ/ /ˈdɪd(ə)nt/ /laɪk/"
  },
  {
    "id": "202",
    "sentence": "They don't like the apartments they looked at because they were either too small or in neighborhoods they didn't like",
    "chinese": "他们不喜欢他们看过的公寓，因为那些公寓要么太小，要么位于他们不喜欢的社区",
    "pronunciation": "/ðeɪ/ /doʊnt/ /laɪk/ /ðə/ /əˈpɑrtmənts/ /ðeɪ/ /lʊkt/ /æt; ət/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /wɜːr; wər/ /ˈiːðər/ /tuː/ /smɔːl/ /ɔr/ /ɪn/ /ˈneɪbərhʊdz/ /ðeɪ/ /ˈdɪd(ə)nt/ /laɪk/"
  },
  {
    "id": "203",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "204",
    "sentence": "We had wanted to buy a new home",
    "chinese": "我们原本打算购买一套新房子",
    "pronunciation": "/wiː; wi/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "205",
    "sentence": "Five : We had wanted to buy a new home",
    "chinese": "五：我们原本打算购买一套新房子",
    "pronunciation": "/faɪv/ /wiː; wi/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "206",
    "sentence": "because our two children had grown older",
    "chinese": "因为我们的两个孩子已经长大",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /aʊr/ /tuː/ /ˈtʃɪldrən/ /hæd/ /ɡroʊn/ /ˈoʊldər/"
  },
  {
    "id": "207",
    "sentence": "Five : We had wanted to buy a new home because our two children had grown older",
    "chinese": "五：我们原本打算购买一套新房子，因为我们的两个孩子已经长大",
    "pronunciation": "/faɪv/ /wiː; wi/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /aʊr/ /tuː/ /ˈtʃɪldrən/ /hæd/ /ɡroʊn/ /ˈoʊldər/"
  },
  {
    "id": "208",
    "sentence": "What had we wanted",
    "chinese": "我们原本想要",
    "pronunciation": "/wʌt/ /hæd/ /wiː; wi/ /ˈwɑːntɪd/"
  },
  {
    "id": "209",
    "sentence": "to do",
    "chinese": "做什么",
    "pronunciation": "/tuː; tə/ /duː; də/"
  },
  {
    "id": "210",
    "sentence": "What had we wanted to do ?",
    "chinese": "我们原本想做什么？",
    "pronunciation": "/wʌt/ /hæd/ /wiː; wi/ /ˈwɑːntɪd/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "211",
    "sentence": "You had wanted to buy a new home",
    "chinese": "你曾想买一套新房子",
    "pronunciation": "/juː; jʊ/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/"
  },
  {
    "id": "212",
    "sentence": "because your two children had grown older",
    "chinese": "因为你的两个孩子已经长大",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /jʊr; jər/ /tuː/ /ˈtʃɪldrən/ /hæd/ /ɡroʊn/ /ˈoʊldər/"
  },
  {
    "id": "213",
    "sentence": "You had wanted to buy a new home because your two children had grown older",
    "chinese": "你曾想买一套新房子，因为你的两个孩子已经长大",
    "pronunciation": "/juː; jʊ/ /hæd/ /ˈwɑːntɪd/ /tuː; tə/ /baɪ/ /ə; eɪ/ /nuː/ /hoʊm/ /bɪˈkəz, bɪˈkɔːz/ /jʊr; jər/ /tuː/ /ˈtʃɪldrən/ /hæd/ /ɡroʊn/ /ˈoʊldər/"
  },
  {
    "id": "214",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "215",
    "sentence": "We had thought",
    "chinese": "我们曾想过",
    "pronunciation": "/wiː; wi/ /hæd/ /θɔːt/"
  },
  {
    "id": "216",
    "sentence": "Six : We had thought",
    "chinese": "六：我们曾一度考虑过",
    "pronunciation": "/sɪks/ /wiː; wi/ /hæd/ /θɔːt/"
  },
  {
    "id": "217",
    "sentence": "at one point",
    "chinese": "在某个时候",
    "pronunciation": "/æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "218",
    "sentence": "Six : We had thought , at one point",
    "chinese": "六：我们曾一度考虑过",
    "pronunciation": "/sɪks/ /wiː; wi/ /hæd/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "219",
    "sentence": "of renting a home",
    "chinese": "租房子",
    "pronunciation": "/ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/"
  },
  {
    "id": "220",
    "sentence": "Six : We had thought , at one point , of renting a home",
    "chinese": "六：我们曾一度考虑过租房子",
    "pronunciation": "/sɪks/ /wiː; wi/ /hæd/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/ /ʌv/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/"
  },
  {
    "id": "221",
    "sentence": "What had we thought about",
    "chinese": "我们曾经想过什么？",
    "pronunciation": "/wʌt/ /hæd/ /wiː; wi/ /θɔːt/ /əˈbaʊt/"
  },
  {
    "id": "222",
    "sentence": "at one point",
    "chinese": "在某个时候",
    "pronunciation": "/æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "223",
    "sentence": "What had we thought about at one point ?",
    "chinese": "我们曾经想过什么？",
    "pronunciation": "/wʌt/ /hæd/ /wiː; wi/ /θɔːt/ /əˈbaʊt/ /æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "224",
    "sentence": "You had thought",
    "chinese": "你曾经想过",
    "pronunciation": "/juː; jʊ/ /hæd/ /θɔːt/"
  },
  {
    "id": "225",
    "sentence": "at one point",
    "chinese": "曾经一度",
    "pronunciation": "/æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "226",
    "sentence": "You had thought , at one point",
    "chinese": "你曾经一度考虑过",
    "pronunciation": "/juː; jʊ/ /hæd/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/"
  },
  {
    "id": "227",
    "sentence": "about renting a home",
    "chinese": "考虑租房",
    "pronunciation": "/əˈbaʊt/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/"
  },
  {
    "id": "228",
    "sentence": "You had thought , at one point , about renting a home",
    "chinese": "你曾经一度考虑过租房",
    "pronunciation": "/juː; jʊ/ /hæd/ /θɔːt/ /æt; ət/ /wʌn/ /pɔɪnt/ /əˈbaʊt/ /ˈrentɪŋ/ /ə; eɪ/ /hoʊm/"
  },
  {
    "id": "229",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "230",
    "sentence": "We really felt",
    "chinese": "我们真的觉得",
    "pronunciation": "/wiː; wi/ /ˈriːəli/ /felt/"
  },
  {
    "id": "231",
    "sentence": "Seven : We really felt",
    "chinese": "七：我们真的觉得",
    "pronunciation": "/ˈsev(ə)n/ /wiː; wi/ /ˈriːəli/ /felt/"
  },
  {
    "id": "232",
    "sentence": "we preferred to own our own home",
    "chinese": "我们更喜欢拥有自己的房子",
    "pronunciation": "/wiː; wi/ /prɪˈfɜːrd/ /tuː; tə/ /oʊn/ /aʊr/ /oʊn/ /hoʊm/"
  },
  {
    "id": "233",
    "sentence": "Seven : We really felt we preferred to own our own home",
    "chinese": "七：我们真的觉得我们更喜欢拥有自己的房子",
    "pronunciation": "/ˈsev(ə)n/ /wiː; wi/ /ˈriːəli/ /felt/ /wiː; wi/ /prɪˈfɜːrd/ /tuː; tə/ /oʊn/ /aʊr/ /oʊn/ /hoʊm/"
  },
  {
    "id": "234",
    "sentence": "What did we feel",
    "chinese": "我们觉得自己",
    "pronunciation": "/wʌt/ /dɪd/ /wiː; wi/ /fil/"
  },
  {
    "id": "235",
    "sentence": "we preferred",
    "chinese": "我们更喜欢",
    "pronunciation": "/wiː; wi/ /prɪˈfɜːrd/"
  },
  {
    "id": "236",
    "sentence": "What did we feel we preferred",
    "chinese": "我们觉得自己更喜欢",
    "pronunciation": "/wʌt/ /dɪd/ /wiː; wi/ /fil/ /wiː; wi/ /prɪˈfɜːrd/"
  },
  {
    "id": "237",
    "sentence": "to own",
    "chinese": "拥有",
    "pronunciation": "/tuː; tə/ /oʊn/"
  },
  {
    "id": "238",
    "sentence": "What did we feel we preferred to own ?",
    "chinese": "我们觉得自己更喜欢拥有什么？",
    "pronunciation": "/wʌt/ /dɪd/ /wiː; wi/ /fil/ /wiː; wi/ /prɪˈfɜːrd/ /tuː; tə/ /oʊn/"
  },
  {
    "id": "239",
    "sentence": "You felt",
    "chinese": "你觉得自己",
    "pronunciation": "/juː; jʊ/ /felt/"
  },
  {
    "id": "240",
    "sentence": "you preferred",
    "chinese": "你更喜欢",
    "pronunciation": "/juː; jʊ/ /prɪˈfɜːrd/"
  },
  {
    "id": "241",
    "sentence": "You felt you preferred",
    "chinese": "你觉得自己更喜欢",
    "pronunciation": "/juː; jʊ/ /felt/ /juː; jʊ/ /prɪˈfɜːrd/"
  },
  {
    "id": "242",
    "sentence": "to own your own home",
    "chinese": "拥有自己的房子",
    "pronunciation": "/tuː; tə/ /oʊn/ /jʊr; jər/ /oʊn/ /hoʊm/"
  },
  {
    "id": "243",
    "sentence": "You felt you preferred to own your own home",
    "chinese": "你觉得自己更倾向于拥有自己的房子",
    "pronunciation": "/juː; jʊ/ /felt/ /juː; jʊ/ /prɪˈfɜːrd/ /tuː; tə/ /oʊn/ /jʊr; jər/ /oʊn/ /hoʊm/"
  },
  {
    "id": "244",
    "sentence": "Eight :",
    "chinese": "八：",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "245",
    "sentence": "Finally we decided",
    "chinese": "最终我们决定",
    "pronunciation": "/ˈfaɪnəli/ /wiː; wi/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "246",
    "sentence": "Eight : Finally we decided",
    "chinese": "八：最终我们决定",
    "pronunciation": "/eɪt/ /ˈfaɪnəli/ /wiː; wi/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "247",
    "sentence": "to move",
    "chinese": "搬",
    "pronunciation": "/tuː; tə/ /muːv/"
  },
  {
    "id": "248",
    "sentence": "Eight : Finally we decided to move",
    "chinese": "八：最终我们决定搬家",
    "pronunciation": "/eɪt/ /ˈfaɪnəli/ /wiː; wi/ /dɪˈsaɪdɪd/ /tuː; tə/ /muːv/"
  },
  {
    "id": "249",
    "sentence": "to a smaller town",
    "chinese": "到一个较小的城镇",
    "pronunciation": "/tuː; tə/ /ə; eɪ/ /ˈsmɔːlər/ /taʊn/"
  },
  {
    "id": "250",
    "sentence": "Eight : Finally we decided to move to a smaller town",
    "chinese": "八：最终我们决定搬到一个小城镇",
    "pronunciation": "/eɪt/ /ˈfaɪnəli/ /wiː; wi/ /dɪˈsaɪdɪd/ /tuː; tə/ /muːv/ /tuː; tə/ /ə; eɪ/ /ˈsmɔːlər/ /taʊn/"
  },
  {
    "id": "251",
    "sentence": "What did we finally decide",
    "chinese": "我们最终决定的是什么？",
    "pronunciation": "/wʌt/ /dɪd/ /wiː; wi/ /ˈfaɪnəli/ /dɪˈsaɪd/"
  },
  {
    "id": "252",
    "sentence": "You finally decided",
    "chinese": "你最终决定",
    "pronunciation": "/juː; jʊ/ /ˈfaɪnəli/ /dɪˈsaɪdɪd/"
  },
  {
    "id": "253",
    "sentence": "to move to a smaller town",
    "chinese": "搬到一个小城镇",
    "pronunciation": "/tuː; tə/ /muːv/ /tuː; tə/ /ə; eɪ/ /ˈsmɔːlər/ /taʊn/"
  },
  {
    "id": "254",
    "sentence": "You finally decided to move to a smaller town",
    "chinese": "你最终决定搬到一个小城镇",
    "pronunciation": "/juː; jʊ/ /ˈfaɪnəli/ /dɪˈsaɪdɪd/ /tuː; tə/ /muːv/ /tuː; tə/ /ə; eɪ/ /ˈsmɔːlər/ /taʊn/"
  },
];
