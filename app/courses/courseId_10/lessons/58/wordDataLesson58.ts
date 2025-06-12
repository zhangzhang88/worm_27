export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Sam and Betty enjoy",
    "chinese": "山姆和贝蒂喜欢",
    "pronunciation": "/sæm/ /ænd; ənd/ /ˈbeti/ /ɪnˈdʒɔɪ/"
  },
  {
    "id": "2",
    "sentence": "going out for dinner",
    "chinese": "出去吃饭",
    "pronunciation": "/ˈɡoʊɪŋ/ /aʊt/ /fɔːr; fər/ /ˈdɪnər/"
  },
  {
    "id": "3",
    "sentence": "Sam and Betty enjoy going out for dinner",
    "chinese": "山姆和贝蒂喜欢出去吃饭",
    "pronunciation": "/sæm/ /ænd; ənd/ /ˈbeti/ /ɪnˈdʒɔɪ/ /ˈɡoʊɪŋ/ /aʊt/ /fɔːr; fər/ /ˈdɪnər/"
  },
  {
    "id": "4",
    "sentence": "with friends",
    "chinese": "和朋友一起",
    "pronunciation": "/wɪð; wɪθ/ /frendz/"
  },
  {
    "id": "5",
    "sentence": "Sam and Betty enjoy going out for dinner with friends",
    "chinese": "山姆和贝蒂喜欢和朋友一起出去吃饭",
    "pronunciation": "/sæm/ /ænd; ənd/ /ˈbeti/ /ɪnˈdʒɔɪ/ /ˈɡoʊɪŋ/ /aʊt/ /fɔːr; fər/ /ˈdɪnər/ /wɪð; wɪθ/ /frendz/"
  },
  {
    "id": "6",
    "sentence": "They enjoy having a glass or two of wine",
    "chinese": "他们喜欢喝一两杯葡萄酒",
    "pronunciation": "/ðeɪ/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/"
  },
  {
    "id": "7",
    "sentence": "with their meal",
    "chinese": "与他们的餐食一起",
    "pronunciation": "/wɪð; wɪθ/ /ðer/ /miːl/"
  },
  {
    "id": "8",
    "sentence": "They enjoy having a glass or two of wine with their meal",
    "chinese": "他们喜欢在用餐时喝一两杯葡萄酒",
    "pronunciation": "/ðeɪ/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/ /wɪð; wɪθ/ /ðer/ /miːl/"
  },
  {
    "id": "9",
    "sentence": "when they eat out",
    "chinese": "当他们外出就餐时",
    "pronunciation": "/wen/ /ðeɪ/ /iːt/ /aʊt/"
  },
  {
    "id": "10",
    "sentence": "They enjoy having a glass or two of wine with their meal when they eat out",
    "chinese": "他们外出就餐时喜欢喝一两杯葡萄酒",
    "pronunciation": "/ðeɪ/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/ /wɪð; wɪθ/ /ðer/ /miːl/ /wen/ /ðeɪ/ /iːt/ /aʊt/"
  },
  {
    "id": "11",
    "sentence": "For that reason",
    "chinese": "因此",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/"
  },
  {
    "id": "12",
    "sentence": "it is important for them",
    "chinese": "对他们来说很重要",
    "pronunciation": "/ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/"
  },
  {
    "id": "13",
    "sentence": "For that reason , it is important for them",
    "chinese": "因此，对他们来说很重要",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/"
  },
  {
    "id": "14",
    "sentence": "to think about",
    "chinese": "考虑",
    "pronunciation": "/tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "15",
    "sentence": "For that reason , it is important for them to think about",
    "chinese": "因此，对他们来说，考虑如何",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "16",
    "sentence": "how they are going to get home",
    "chinese": "他们打算怎么回家",
    "pronunciation": "/haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/"
  },
  {
    "id": "17",
    "sentence": "For that reason , it is important for them to think about how they are going to get home",
    "chinese": "因此，对他们来说，考虑晚餐后如何回家是很重要的",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/ /haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/"
  },
  {
    "id": "18",
    "sentence": "after dinner",
    "chinese": "晚餐后",
    "pronunciation": "/ˈæftər/ /ˈdɪnər/"
  },
  {
    "id": "19",
    "sentence": "For that reason , it is important for them to think about how they are going to get home after dinner",
    "chinese": "因此，他们需要考虑晚餐后如何回家",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/ /haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/ /ˈæftər/ /ˈdɪnər/"
  },
  {
    "id": "20",
    "sentence": "They usually drive their car",
    "chinese": "他们通常开车",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/"
  },
  {
    "id": "21",
    "sentence": "to the restaurant",
    "chinese": "去餐厅",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈrestrɑːnt/"
  },
  {
    "id": "22",
    "sentence": "They usually drive their car to the restaurant",
    "chinese": "他们通常开车去餐厅",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/"
  },
  {
    "id": "23",
    "sentence": "or to their friends' place",
    "chinese": "或者去朋友家",
    "pronunciation": "/ɔr/ /tuː; tə/ /ðer/ /frendz/ /pleɪs/"
  },
  {
    "id": "24",
    "sentence": "They usually drive their car to the restaurant , or to their friends' place",
    "chinese": "他们通常开车去餐厅，或者去朋友家",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /ðer/ /frendz/ /pleɪs/"
  },
  {
    "id": "25",
    "sentence": "because it is too expensive",
    "chinese": "因为太贵了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ɪt/ /ɪz/ /tuː/ /ɪkˈspensɪv/"
  },
  {
    "id": "26",
    "sentence": "They usually drive their car to the restaurant , or to their friends' place , because it is too expensive",
    "chinese": "他们通常开车去餐厅，或者去朋友家，因为打车太贵",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /ðer/ /frendz/ /pleɪs/ /bɪˈkəz, bɪˈkɔːz/ /ɪt/ /ɪz/ /tuː/ /ɪkˈspensɪv/"
  },
  {
    "id": "27",
    "sentence": "to take a taxi",
    "chinese": "打车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "28",
    "sentence": "They usually drive their car to the restaurant , or to their friends' place , because it is too expensive to take a taxi",
    "chinese": "他们通常开车去餐厅，或者去朋友家，因为打车太贵了",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /ðer/ /frendz/ /pleɪs/ /bɪˈkəz, bɪˈkɔːz/ /ɪt/ /ɪz/ /tuː/ /ɪkˈspensɪv/ /tuː; tə/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "29",
    "sentence": "They usually decide ahead of time",
    "chinese": "他们通常会提前决定",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/"
  },
  {
    "id": "30",
    "sentence": "who is going to drive home",
    "chinese": "谁要开车回家",
    "pronunciation": "/huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/"
  },
  {
    "id": "31",
    "sentence": "They usually decide ahead of time who is going to drive home",
    "chinese": "他们通常会提前决定谁开车回家",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/"
  },
  {
    "id": "32",
    "sentence": "since the person",
    "chinese": "因为那个人",
    "pronunciation": "/sɪns/ /ðə/ /ˈpɜːr.sən/"
  },
  {
    "id": "33",
    "sentence": "They usually decide ahead of time who is going to drive home , since the person",
    "chinese": "他们通常会提前决定谁开车回家，因为",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/ /sɪns/ /ðə/ /ˈpɜːr.sən/"
  },
  {
    "id": "34",
    "sentence": "who drives home",
    "chinese": "谁开车回家",
    "pronunciation": "/huː/ /drʌɪvz/ /hoʊm/"
  },
  {
    "id": "35",
    "sentence": "They usually decide ahead of time who is going to drive home , since the person who drives home",
    "chinese": "他们通常会提前决定谁开车回家，因为开车回家的人",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/ /sɪns/ /ðə/ /ˈpɜːr.sən/ /huː/ /drʌɪvz/ /hoʊm/"
  },
  {
    "id": "36",
    "sentence": "can't have had any wine",
    "chinese": "不能喝任何酒",
    "pronunciation": "/kænt/ /hæv/ /hæd/ /ˈeni/ /waɪn/"
  },
  {
    "id": "37",
    "sentence": "They usually decide ahead of time who is going to drive home , since the person who drives home can't have had any wine",
    "chinese": "他们通常会提前决定谁开车回家，因为开车回家的人不能喝任何酒",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/ /sɪns/ /ðə/ /ˈpɜːr.sən/ /huː/ /drʌɪvz/ /hoʊm/ /kænt/ /hæv/ /hæd/ /ˈeni/ /waɪn/"
  },
  {
    "id": "38",
    "sentence": "Sometimes they know",
    "chinese": "有时候他们知道",
    "pronunciation": "/ˈsʌmtaɪmz/ /ðeɪ/ /noʊ/"
  },
  {
    "id": "39",
    "sentence": "that it will be difficult",
    "chinese": "知道会很难",
    "pronunciation": "/ðæt/ /ɪt/ /wɪl/ /biː/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "40",
    "sentence": "Sometimes they know that it will be difficult",
    "chinese": "有时候他们知道这将会很难",
    "pronunciation": "/ˈsʌmtaɪmz/ /ðeɪ/ /noʊ/ /ðæt/ /ɪt/ /wɪl/ /biː/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "41",
    "sentence": "to refuse to drink",
    "chinese": "拒绝喝酒",
    "pronunciation": "/tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "42",
    "sentence": "Sometimes they know that it will be difficult to refuse to drink",
    "chinese": "有时候他们知道很难拒绝喝酒",
    "pronunciation": "/ˈsʌmtaɪmz/ /ðeɪ/ /noʊ/ /ðæt/ /ɪt/ /wɪl/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "43",
    "sentence": "with the other guests",
    "chinese": "与其他客人一起",
    "pronunciation": "/wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "44",
    "sentence": "Sometimes they know that it will be difficult to refuse to drink with the other guests",
    "chinese": "有时候他们知道很难拒绝与其他客人一起喝酒",
    "pronunciation": "/ˈsʌmtaɪmz/ /ðeɪ/ /noʊ/ /ðæt/ /ɪt/ /wɪl/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "45",
    "sentence": "for example",
    "chinese": "例如",
    "pronunciation": "/fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "46",
    "sentence": "Sometimes they know that it will be difficult to refuse to drink with the other guests , for example",
    "chinese": "有时候他们知道很难拒绝与其他客人一起喝酒，例如",
    "pronunciation": "/ˈsʌmtaɪmz/ /ðeɪ/ /noʊ/ /ðæt/ /ɪt/ /wɪl/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "47",
    "sentence": "if friends are celebrating",
    "chinese": "如果朋友们在庆祝",
    "pronunciation": "/ɪf/ /frendz/ /ɑr/ /ˈselɪbreɪtɪŋ/"
  },
  {
    "id": "48",
    "sentence": "Sometimes they know that it will be difficult to refuse to drink with the other guests , for example if friends are celebrating",
    "chinese": "有时候他们知道很难拒绝与其他客人一起喝酒，例如当朋友们在庆祝",
    "pronunciation": "/ˈsʌmtaɪmz/ /ðeɪ/ /noʊ/ /ðæt/ /ɪt/ /wɪl/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ɪf/ /frendz/ /ɑr/ /ˈselɪbreɪtɪŋ/"
  },
  {
    "id": "49",
    "sentence": "an event like a birthday",
    "chinese": "像生日这样的事件",
    "pronunciation": "/æn; ən/ /ɪˈvent/ /laɪk/ /ə; eɪ/ /ˈbɜːrθdeɪ/"
  },
  {
    "id": "50",
    "sentence": "Sometimes they know that it will be difficult to refuse to drink with the other guests , for example if friends are celebrating an event like a birthday",
    "chinese": "有时候他们知道很难拒绝与其他客人一起喝酒，例如当朋友们在庆祝生日等事件时",
    "pronunciation": "/ˈsʌmtaɪmz/ /ðeɪ/ /noʊ/ /ðæt/ /ɪt/ /wɪl/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ɪf/ /frendz/ /ɑr/ /ˈselɪbreɪtɪŋ/ /æn; ən/ /ɪˈvent/ /laɪk/ /ə; eɪ/ /ˈbɜːrθdeɪ/"
  },
  {
    "id": "51",
    "sentence": "In those cases",
    "chinese": "在这些情况下",
    "pronunciation": "/ɪn/ /ðoʊz/ /ˈkeɪsɪz/"
  },
  {
    "id": "52",
    "sentence": "they have to make other arrangements",
    "chinese": "他们必须做出其他安排",
    "pronunciation": "/ðeɪ/ /hæv/ /tuː; tə/ /meɪk/ /ˈʌðər/ /əˈreɪndʒmənts/"
  },
  {
    "id": "53",
    "sentence": "In those cases , they have to make other arrangements",
    "chinese": "在这些情况下，他们必须做出其他安排",
    "pronunciation": "/ɪn/ /ðoʊz/ /ˈkeɪsɪz/ /ðeɪ/ /hæv/ /tuː; tə/ /meɪk/ /ˈʌðər/ /əˈreɪndʒmənts/"
  },
  {
    "id": "54",
    "sentence": "One solution is",
    "chinese": "一个解决方案是",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /ɪz/"
  },
  {
    "id": "55",
    "sentence": "to go together with other friends",
    "chinese": "与朋友们一起去",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/"
  },
  {
    "id": "56",
    "sentence": "One solution is to go together with other friends",
    "chinese": "一个解决方案是与其他朋友一起去",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /ɪz/ /tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/"
  },
  {
    "id": "57",
    "sentence": "who live near by",
    "chinese": "住在附近的朋友",
    "pronunciation": "/huː/ /lɪv; laɪv/ /nɪr/ /baɪ/"
  },
  {
    "id": "58",
    "sentence": "One solution is to go together with other friends who live near by",
    "chinese": "一个解决方案是与住在附近的朋友一起去",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /ɪz/ /tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/ /huː/ /lɪv; laɪv/ /nɪr/ /baɪ/"
  },
  {
    "id": "59",
    "sentence": "one of whom will have to agree",
    "chinese": "其中一位必须同意",
    "pronunciation": "/wʌn/ /ʌv/ /huːm/ /wɪl/ /hæv/ /tuː; tə/ /əˈɡriː/"
  },
  {
    "id": "60",
    "sentence": "One solution is to go together with other friends who live near by , one of whom will have to agree",
    "chinese": "一个解决方案是与住在附近的朋友一起去，其中一位朋友必须同意",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /ɪz/ /tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/ /huː/ /lɪv; laɪv/ /nɪr/ /baɪ/ /wʌn/ /ʌv/ /huːm/ /wɪl/ /hæv/ /tuː; tə/ /əˈɡriː/"
  },
  {
    "id": "61",
    "sentence": "not to drink",
    "chinese": "不喝酒",
    "pronunciation": "/nɑːt/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "62",
    "sentence": "One solution is to go together with other friends who live near by , one of whom will have to agree not to drink",
    "chinese": "一个解决方案是与住在附近的朋友一起去，其中一位朋友必须同意不喝酒",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /ɪz/ /tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/ /huː/ /lɪv; laɪv/ /nɪr/ /baɪ/ /wʌn/ /ʌv/ /huːm/ /wɪl/ /hæv/ /tuː; tə/ /əˈɡriː/ /nɑːt/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "63",
    "sentence": "It is always useful",
    "chinese": "总是很有用",
    "pronunciation": "/ɪt/ /ɪz/ /ˈɔːlweɪz/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "64",
    "sentence": "to have friends",
    "chinese": "拥有朋友",
    "pronunciation": "/tuː; tə/ /hæv/ /frendz/"
  },
  {
    "id": "65",
    "sentence": "It is always useful to have friends",
    "chinese": "拥有朋友总是有用的",
    "pronunciation": "/ɪt/ /ɪz/ /ˈɔːlweɪz/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/ /frendz/"
  },
  {
    "id": "66",
    "sentence": "who simply do not drink at all",
    "chinese": "完全不喝酒的",
    "pronunciation": "/huː/ /ˈsɪmpli/ /duː; də/ /nɑːt/ /drɪŋk/ /æt; ət/ /ɔːl/"
  },
  {
    "id": "67",
    "sentence": "It is always useful to have friends who simply do not drink at all",
    "chinese": "拥有完全不喝酒的朋友总是很有用的",
    "pronunciation": "/ɪt/ /ɪz/ /ˈɔːlweɪz/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/ /frendz/ /huː/ /ˈsɪmpli/ /duː; də/ /nɑːt/ /drɪŋk/ /æt; ət/ /ɔːl/"
  },
  {
    "id": "68",
    "sentence": "Such people are always in demand",
    "chinese": "这类人总是被需要",
    "pronunciation": "/sʌtʃ/ /ˈpipl/ /ɑr/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/"
  },
  {
    "id": "69",
    "sentence": "as designated drivers",
    "chinese": "作为指定的司机",
    "pronunciation": "/æz; əz/ /ˈdezɪɡneɪtɪd/ /ˈdraɪvər/"
  },
  {
    "id": "70",
    "sentence": "Such people are always in demand as designated drivers",
    "chinese": "这类人总是被需要作为指定的司机",
    "pronunciation": "/sʌtʃ/ /ˈpipl/ /ɑr/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/ /æz; əz/ /ˈdezɪɡneɪtɪd/ /ˈdraɪvər/"
  },
  {
    "id": "71",
    "sentence": "The best situation of all is",
    "chinese": "最理想的情况是",
    "pronunciation": "/ðə/ /best/ /ˌsɪtʃuˈeɪʃ(ə)n/ /ʌv/ /ɔːl/ /ɪz/"
  },
  {
    "id": "72",
    "sentence": "when the dinner party is",
    "chinese": "当晚宴地点是",
    "pronunciation": "/wen/ /ðə/ /ˈdɪnər/ /ˈpɑːrti/ /ɪz/"
  },
  {
    "id": "73",
    "sentence": "The best situation of all is when the dinner party is",
    "chinese": "最理想的情况是晚宴地点",
    "pronunciation": "/ðə/ /best/ /ˌsɪtʃuˈeɪʃ(ə)n/ /ʌv/ /ɔːl/ /ɪz/ /wen/ /ðə/ /ˈdɪnər/ /ˈpɑːrti/ /ɪz/"
  },
  {
    "id": "74",
    "sentence": "within walking distance",
    "chinese": "在步行距离之内",
    "pronunciation": "/wɪˈðɪn/ /ˈwɔːkɪŋ/ /ˈdɪstəns/"
  },
  {
    "id": "75",
    "sentence": "The best situation of all is when the dinner party is within walking distance",
    "chinese": "最理想的情况是晚宴地点就在步行距离之内",
    "pronunciation": "/ðə/ /best/ /ˌsɪtʃuˈeɪʃ(ə)n/ /ʌv/ /ɔːl/ /ɪz/ /wen/ /ðə/ /ˈdɪnər/ /ˈpɑːrti/ /ɪz/ /wɪˈðɪn/ /ˈwɔːkɪŋ/ /ˈdɪstəns/"
  },
  {
    "id": "76",
    "sentence": "Unfortunately",
    "chinese": "不幸的是",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/"
  },
  {
    "id": "77",
    "sentence": "that is not often the case",
    "chinese": "这种情况并不常见",
    "pronunciation": "/ðæt/ /ɪz/ /nɑːt/ /ˈɔːf(ə)n/ /ðə/ /keɪs/"
  },
  {
    "id": "78",
    "sentence": "Unfortunately , that is not often the case",
    "chinese": "不幸的是，这种情况并不常见",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ðæt/ /ɪz/ /nɑːt/ /ˈɔːf(ə)n/ /ðə/ /keɪs/"
  },
  {
    "id": "79",
    "sentence": "in large cities",
    "chinese": "在大城市中",
    "pronunciation": "/ɪn/ /lɑːrdʒ/ /ˈsɪtiz/"
  },
  {
    "id": "80",
    "sentence": "Unfortunately , that is not often the case in large cities",
    "chinese": "不幸的是，在大城市中这种情况并不常见",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ðæt/ /ɪz/ /nɑːt/ /ˈɔːf(ə)n/ /ðə/ /keɪs/ /ɪn/ /lɑːrdʒ/ /ˈsɪtiz/"
  },
  {
    "id": "81",
    "sentence": "Now let's hear",
    "chinese": "现在让我们听听",
    "pronunciation": "/naʊ/ /lets/ /hɪr/"
  },
  {
    "id": "82",
    "sentence": "Sam tell",
    "chinese": "山姆讲述",
    "pronunciation": "/sæm/ /tel/"
  },
  {
    "id": "83",
    "sentence": "Now let's hear Sam tell",
    "chinese": "现在让我们听听山姆讲述",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /sæm/ /tel/"
  },
  {
    "id": "84",
    "sentence": "the same story",
    "chinese": "同样的故事",
    "pronunciation": "/ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "85",
    "sentence": "Now let's hear Sam tell the same story",
    "chinese": "现在让我们听听山姆讲述同样的故事",
    "pronunciation": "/naʊ/ /lets/ /hɪr/ /sæm/ /tel/ /ðə/ /seɪm/ /ˈstɔːri/"
  },
  {
    "id": "86",
    "sentence": "We used to enjoy going out",
    "chinese": "我们过去常常喜欢出去",
    "pronunciation": "/wiː; wi/ /juzd/ /tuː; tə/ /ɪnˈdʒɔɪ/ /ˈɡoʊɪŋ/ /aʊt/"
  },
  {
    "id": "87",
    "sentence": "for dinner",
    "chinese": "去吃饭",
    "pronunciation": "/fɔːr; fər/ /ˈdɪnər/"
  },
  {
    "id": "88",
    "sentence": "We used to enjoy going out for dinner",
    "chinese": "我们以前常常喜欢和朋友出去吃饭",
    "pronunciation": "/wiː; wi/ /juzd/ /tuː; tə/ /ɪnˈdʒɔɪ/ /ˈɡoʊɪŋ/ /aʊt/ /fɔːr; fər/ /ˈdɪnər/"
  },
  {
    "id": "89",
    "sentence": "with friends",
    "chinese": "和朋友",
    "pronunciation": "/wɪð; wɪθ/ /frendz/"
  },
  {
    "id": "90",
    "sentence": "We used to enjoy going out for dinner with friends",
    "chinese": "我们以前喜欢和朋友出去吃饭",
    "pronunciation": "/wiː; wi/ /juzd/ /tuː; tə/ /ɪnˈdʒɔɪ/ /ˈɡoʊɪŋ/ /aʊt/ /fɔːr; fər/ /ˈdɪnər/ /wɪð; wɪθ/ /frendz/"
  },
  {
    "id": "91",
    "sentence": "when we lived in the big city",
    "chinese": "当我们住在大城市时",
    "pronunciation": "/wen/ /wiː; wi/ /lɪvd/ /ɪn/ /ðə/ /bɪɡ/ /ˈsɪti/"
  },
  {
    "id": "92",
    "sentence": "We used to enjoy going out for dinner with friends when we lived in the big city",
    "chinese": "我们以前住在大城市时，常常喜欢和朋友出去吃饭",
    "pronunciation": "/wiː; wi/ /juzd/ /tuː; tə/ /ɪnˈdʒɔɪ/ /ˈɡoʊɪŋ/ /aʊt/ /fɔːr; fər/ /ˈdɪnər/ /wɪð; wɪθ/ /frendz/ /wen/ /wiː; wi/ /lɪvd/ /ɪn/ /ðə/ /bɪɡ/ /ˈsɪti/"
  },
  {
    "id": "93",
    "sentence": "We enjoyed having a glass or two of wine",
    "chinese": "我们喜欢在吃饭时喝一两杯酒",
    "pronunciation": "/wiː; wi/ /ɪnˈdʒɔɪd/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/"
  },
  {
    "id": "94",
    "sentence": "with our meal",
    "chinese": "和我们的餐食一起",
    "pronunciation": "/wɪð; wɪθ/ /aʊr/ /miːl/"
  },
  {
    "id": "95",
    "sentence": "We enjoyed having a glass or two of wine with our meal",
    "chinese": "我们喜欢在吃饭时喝一两杯酒",
    "pronunciation": "/wiː; wi/ /ɪnˈdʒɔɪd/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/ /wɪð; wɪθ/ /aʊr/ /miːl/"
  },
  {
    "id": "96",
    "sentence": "when we ate out",
    "chinese": "当我们出去吃饭时",
    "pronunciation": "/wen/ /wiː; wi/ /eɪt/ /aʊt/"
  },
  {
    "id": "97",
    "sentence": "We enjoyed having a glass or two of wine with our meal when we ate out",
    "chinese": "我们在外面吃饭时喜欢喝一两杯酒",
    "pronunciation": "/wiː; wi/ /ɪnˈdʒɔɪd/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/ /wɪð; wɪθ/ /aʊr/ /miːl/ /wen/ /wiː; wi/ /eɪt/ /aʊt/"
  },
  {
    "id": "98",
    "sentence": "For that reason",
    "chinese": "因此",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/"
  },
  {
    "id": "99",
    "sentence": "we had to think about",
    "chinese": "我们不得不考虑",
    "pronunciation": "/wiː; wi/ /hæd/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "100",
    "sentence": "For that reason , we had to think about",
    "chinese": "因此，我们不得不考虑",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /wiː; wi/ /hæd/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "101",
    "sentence": "how we were going to get home",
    "chinese": "我们打算怎么回家",
    "pronunciation": "/haʊ/ /wiː; wi/ /wɜːr; wər/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/"
  },
  {
    "id": "102",
    "sentence": "For that reason , we had to think about how we were going to get home",
    "chinese": "因此，我们不得不考虑如何回家",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /wiː; wi/ /hæd/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/ /haʊ/ /wiː; wi/ /wɜːr; wər/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/"
  },
  {
    "id": "103",
    "sentence": "after dinner",
    "chinese": "晚餐后",
    "pronunciation": "/ˈæftər/ /ˈdɪnər/"
  },
  {
    "id": "104",
    "sentence": "For that reason , we had to think about how we were going to get home after dinner",
    "chinese": "因此，我们不得不考虑晚餐后如何回家",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /wiː; wi/ /hæd/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/ /haʊ/ /wiː; wi/ /wɜːr; wər/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/ /ˈæftər/ /ˈdɪnər/"
  },
  {
    "id": "105",
    "sentence": "We usually drove our car",
    "chinese": "我们通常开车",
    "pronunciation": "/wiː; wi/ /ˈjuːʒuəli; ˈjuːʒəli/ /droʊv/ /aʊr/ /kɑːr/"
  },
  {
    "id": "106",
    "sentence": "to the restaurant",
    "chinese": "去餐厅",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈrestrɑːnt/"
  },
  {
    "id": "107",
    "sentence": "We usually drove our car to the restaurant",
    "chinese": "我们通常开车去餐厅",
    "pronunciation": "/wiː; wi/ /ˈjuːʒuəli; ˈjuːʒəli/ /droʊv/ /aʊr/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/"
  },
  {
    "id": "108",
    "sentence": "or to our friends' place",
    "chinese": "或者去朋友家",
    "pronunciation": "/ɔr/ /tuː; tə/ /aʊr/ /frendz/ /pleɪs/"
  },
  {
    "id": "109",
    "sentence": "We usually drove our car to the restaurant , or to our friends' place",
    "chinese": "我们通常开车去餐厅，或者去朋友家",
    "pronunciation": "/wiː; wi/ /ˈjuːʒuəli; ˈjuːʒəli/ /droʊv/ /aʊr/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /aʊr/ /frendz/ /pleɪs/"
  },
  {
    "id": "110",
    "sentence": "because it was too expensive",
    "chinese": "因为打车太贵了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ɪt/ /wʌz; wəz/ /tuː/ /ɪkˈspensɪv/"
  },
  {
    "id": "111",
    "sentence": "We usually drove our car to the restaurant , or to our friends' place , because it was too expensive",
    "chinese": "我们通常开车去餐厅，或者去朋友家，因为打车太贵",
    "pronunciation": "/wiː; wi/ /ˈjuːʒuəli; ˈjuːʒəli/ /droʊv/ /aʊr/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /aʊr/ /frendz/ /pleɪs/ /bɪˈkəz, bɪˈkɔːz/ /ɪt/ /wʌz; wəz/ /tuː/ /ɪkˈspensɪv/"
  },
  {
    "id": "112",
    "sentence": "to take a taxi",
    "chinese": "打车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "113",
    "sentence": "We usually drove our car to the restaurant , or to our friends' place , because it was too expensive to take a taxi",
    "chinese": "我们通常开车去餐厅，或者去朋友家，因为打车太贵了",
    "pronunciation": "/wiː; wi/ /ˈjuːʒuəli; ˈjuːʒəli/ /droʊv/ /aʊr/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /aʊr/ /frendz/ /pleɪs/ /bɪˈkəz, bɪˈkɔːz/ /ɪt/ /wʌz; wəz/ /tuː/ /ɪkˈspensɪv/ /tuː; tə/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "114",
    "sentence": "We always decided ahead of time",
    "chinese": "我们总是提前决定",
    "pronunciation": "/wiː; wi/ /ˈɔːlweɪz/ /dɪˈsaɪdɪd/ /əˈhɛd/ /ʌv/ /taɪm/"
  },
  {
    "id": "115",
    "sentence": "who was going to drive home",
    "chinese": "谁要开车回家",
    "pronunciation": "/huː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/"
  },
  {
    "id": "116",
    "sentence": "We always decided ahead of time who was going to drive home",
    "chinese": "我们总是提前决定好谁开车回家",
    "pronunciation": "/wiː; wi/ /ˈɔːlweɪz/ /dɪˈsaɪdɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/"
  },
  {
    "id": "117",
    "sentence": "since the person",
    "chinese": "因为那个人",
    "pronunciation": "/sɪns/ /ðə/ /ˈpɜːr.sən/"
  },
  {
    "id": "118",
    "sentence": "We always decided ahead of time who was going to drive home , since the person",
    "chinese": "我们总是提前决定好谁开车回家，因为",
    "pronunciation": "/wiː; wi/ /ˈɔːlweɪz/ /dɪˈsaɪdɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/ /sɪns/ /ðə/ /ˈpɜːr.sən/"
  },
  {
    "id": "119",
    "sentence": "who drove home",
    "chinese": "开车回家的人",
    "pronunciation": "/huː/ /droʊv/ /hoʊm/"
  },
  {
    "id": "120",
    "sentence": "We always decided ahead of time who was going to drive home , since the person who drove home",
    "chinese": "我们总是提前决定好谁开车回家，因为开车回家的人",
    "pronunciation": "/wiː; wi/ /ˈɔːlweɪz/ /dɪˈsaɪdɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/ /sɪns/ /ðə/ /ˈpɜːr.sən/ /huː/ /droʊv/ /hoʊm/"
  },
  {
    "id": "121",
    "sentence": "couldn't have any wine",
    "chinese": "不能喝酒",
    "pronunciation": "/ˈkʊd(ə)nt/ /hæv/ /ˈeni/ /waɪn/"
  },
  {
    "id": "122",
    "sentence": "We always decided ahead of time who was going to drive home , since the person who drove home couldn't have any wine",
    "chinese": "我们总是提前决定好谁开车回家，因为开车回家的人不能喝酒",
    "pronunciation": "/wiː; wi/ /ˈɔːlweɪz/ /dɪˈsaɪdɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /wʌz; wəz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/ /sɪns/ /ðə/ /ˈpɜːr.sən/ /huː/ /droʊv/ /hoʊm/ /ˈkʊd(ə)nt/ /hæv/ /ˈeni/ /waɪn/"
  },
  {
    "id": "123",
    "sentence": "Sometimes we knew",
    "chinese": "有时我们知道",
    "pronunciation": "/ˈsʌmtaɪmz/ /wiː; wi/ /nuː/"
  },
  {
    "id": "124",
    "sentence": "that it would be difficult",
    "chinese": "那会很难",
    "pronunciation": "/ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "125",
    "sentence": "Sometimes we knew that it would be difficult",
    "chinese": "有时我们知道这会很难",
    "pronunciation": "/ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "126",
    "sentence": "to refuse to drink",
    "chinese": "拒绝喝酒",
    "pronunciation": "/tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "127",
    "sentence": "Sometimes we knew that it would be difficult to refuse to drink",
    "chinese": "有时我们知道很难拒绝喝酒",
    "pronunciation": "/ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "128",
    "sentence": "with the other guests",
    "chinese": "与其他客人一起",
    "pronunciation": "/wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "129",
    "sentence": "Sometimes we knew that it would be difficult to refuse to drink with the other guests",
    "chinese": "有时我们知道很难拒绝与其他客人一起喝酒",
    "pronunciation": "/ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "130",
    "sentence": "for example",
    "chinese": "例如",
    "pronunciation": "/fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "131",
    "sentence": "Sometimes we knew that it would be difficult to refuse to drink with the other guests , for example",
    "chinese": "有时我们知道很难拒绝与其他客人一起喝酒，例如",
    "pronunciation": "/ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/"
  },
  {
    "id": "132",
    "sentence": "if friends were celebrating",
    "chinese": "如果朋友们在庆祝",
    "pronunciation": "/ɪf/ /frendz/ /wɜːr; wər/ /ˈselɪbreɪtɪŋ/"
  },
  {
    "id": "133",
    "sentence": "Sometimes we knew that it would be difficult to refuse to drink with the other guests , for example if friends were celebrating",
    "chinese": "有时我们知道很难拒绝与其他客人一起喝酒，例如当朋友们在庆祝",
    "pronunciation": "/ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ɪf/ /frendz/ /wɜːr; wər/ /ˈselɪbreɪtɪŋ/"
  },
  {
    "id": "134",
    "sentence": "an event like a birthday",
    "chinese": "像生日这样的事件",
    "pronunciation": "/æn; ən/ /ɪˈvent/ /laɪk/ /ə; eɪ/ /ˈbɜːrθdeɪ/"
  },
  {
    "id": "135",
    "sentence": "Sometimes we knew that it would be difficult to refuse to drink with the other guests , for example if friends were celebrating an event like a birthday",
    "chinese": "有时我们知道很难拒绝与其他客人一起喝酒，例如当朋友们在庆祝生日等事件时",
    "pronunciation": "/ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/ /fɔːr; fər/ /ɪɡˈzæmp(ə)l/ /ɪf/ /frendz/ /wɜːr; wər/ /ˈselɪbreɪtɪŋ/ /æn; ən/ /ɪˈvent/ /laɪk/ /ə; eɪ/ /ˈbɜːrθdeɪ/"
  },
  {
    "id": "136",
    "sentence": "In those cases",
    "chinese": "在这种情况下",
    "pronunciation": "/ɪn/ /ðoʊz/ /ˈkeɪsɪz/"
  },
  {
    "id": "137",
    "sentence": "we had to make other arrangements",
    "chinese": "我们不得不做出其他安排",
    "pronunciation": "/wiː; wi/ /hæd/ /tuː; tə/ /meɪk/ /ˈʌðər/ /əˈreɪndʒmənts/"
  },
  {
    "id": "138",
    "sentence": "In those cases , we had to make other arrangements",
    "chinese": "在这种情况下，我们不得不做出其他安排",
    "pronunciation": "/ɪn/ /ðoʊz/ /ˈkeɪsɪz/ /wiː; wi/ /hæd/ /tuː; tə/ /meɪk/ /ˈʌðər/ /əˈreɪndʒmənts/"
  },
  {
    "id": "139",
    "sentence": "One solution was",
    "chinese": "一个解决方案是",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /wʌz; wəz/"
  },
  {
    "id": "140",
    "sentence": "to go together with other friends",
    "chinese": "与其他朋友一起去",
    "pronunciation": "/tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/"
  },
  {
    "id": "141",
    "sentence": "One solution was to go together with other friends",
    "chinese": "一个解决方案是与其他朋友一起去",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /wʌz; wəz/ /tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/"
  },
  {
    "id": "142",
    "sentence": "who lived near by",
    "chinese": "住在附近的朋友",
    "pronunciation": "/huː/ /lɪvd/ /nɪr/ /baɪ/"
  },
  {
    "id": "143",
    "sentence": "One solution was to go together with other friends who lived near by",
    "chinese": "一个解决方案是与其他住在附近的朋友一起去",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /wʌz; wəz/ /tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/ /huː/ /lɪvd/ /nɪr/ /baɪ/"
  },
  {
    "id": "144",
    "sentence": "one of whom would have to agree",
    "chinese": "其中一个人必须同意",
    "pronunciation": "/wʌn/ /ʌv/ /huːm/ /wʊd/ /hæv/ /tuː; tə/ /əˈɡriː/"
  },
  {
    "id": "145",
    "sentence": "One solution was to go together with other friends who lived near by , one of whom would have to agree",
    "chinese": "一个解决方案是与其他住在附近的朋友一起去，其中一个人必须同意",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /wʌz; wəz/ /tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/ /huː/ /lɪvd/ /nɪr/ /baɪ/ /wʌn/ /ʌv/ /huːm/ /wʊd/ /hæv/ /tuː; tə/ /əˈɡriː/"
  },
  {
    "id": "146",
    "sentence": "not to drink",
    "chinese": "不喝酒",
    "pronunciation": "/nɑːt/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "147",
    "sentence": "One solution was to go together with other friends who lived near by , one of whom would have to agree not to drink",
    "chinese": "一个解决方案是与其他住在附近的朋友一起去，其中一个人必须同意不喝酒",
    "pronunciation": "/wʌn/ /səˈluːʃ(ə)n/ /wʌz; wəz/ /tuː; tə/ /ɡoʊ/ /təˈɡeðər/ /wɪð; wɪθ/ /ˈʌðər/ /frendz/ /huː/ /lɪvd/ /nɪr/ /baɪ/ /wʌn/ /ʌv/ /huːm/ /wʊd/ /hæv/ /tuː; tə/ /əˈɡriː/ /nɑːt/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "148",
    "sentence": "I found it useful",
    "chinese": "我发现它很有用",
    "pronunciation": "/aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "149",
    "sentence": "to have friends",
    "chinese": "有一些朋友",
    "pronunciation": "/tuː; tə/ /hæv/ /frendz/"
  },
  {
    "id": "150",
    "sentence": "I found it useful to have friends",
    "chinese": "我发现有朋友很有用",
    "pronunciation": "/aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/ /frendz/"
  },
  {
    "id": "151",
    "sentence": "who didn't drink at all",
    "chinese": "完全不喝酒的",
    "pronunciation": "/huː/ /ˈdɪd(ə)nt/ /drɪŋk/ /æt; ət/ /ɔːl/"
  },
  {
    "id": "152",
    "sentence": "I found it useful to have friends who didn't drink at all",
    "chinese": "我发现有一些完全不喝酒的朋友很有用",
    "pronunciation": "/aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/ /frendz/ /huː/ /ˈdɪd(ə)nt/ /drɪŋk/ /æt; ət/ /ɔːl/"
  },
  {
    "id": "153",
    "sentence": "Such people were always in demand",
    "chinese": "这类人总是很受欢迎",
    "pronunciation": "/sʌtʃ/ /ˈpipl/ /wɜːr; wər/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/"
  },
  {
    "id": "154",
    "sentence": "as designated drivers",
    "chinese": "作为指定司机",
    "pronunciation": "/æz; əz/ /ˈdezɪɡneɪtɪd/ /ˈdraɪvər/"
  },
  {
    "id": "155",
    "sentence": "Such people were always in demand as designated drivers",
    "chinese": "这类人总是很受欢迎，被指定为司机",
    "pronunciation": "/sʌtʃ/ /ˈpipl/ /wɜːr; wər/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/ /æz; əz/ /ˈdezɪɡneɪtɪd/ /ˈdraɪvər/"
  },
  {
    "id": "156",
    "sentence": "The best situation of all",
    "chinese": "最理想的情况",
    "pronunciation": "/ðə/ /best/ /ˌsɪtʃuˈeɪʃ(ə)n/ /ʌv/ /ɔːl/"
  },
  {
    "id": "157",
    "sentence": "was when the dinner party",
    "chinese": "是当晚餐聚会",
    "pronunciation": "/wʌz; wəz/ /wen/ /ðə/ /ˈdɪnər/ /ˈpɑːrti/"
  },
  {
    "id": "158",
    "sentence": "The best situation of all was when the dinner party",
    "chinese": "最理想的情况是晚宴",
    "pronunciation": "/ðə/ /best/ /ˌsɪtʃuˈeɪʃ(ə)n/ /ʌv/ /ɔːl/ /wʌz; wəz/ /wen/ /ðə/ /ˈdɪnər/ /ˈpɑːrti/"
  },
  {
    "id": "159",
    "sentence": "was within walking distance",
    "chinese": "在步行距离之内",
    "pronunciation": "/wʌz; wəz/ /wɪˈðɪn/ /ˈwɔːkɪŋ/ /ˈdɪstəns/"
  },
  {
    "id": "160",
    "sentence": "The best situation of all was when the dinner party was within walking distance",
    "chinese": "最理想的情况是晚宴地点就在步行距离之内",
    "pronunciation": "/ðə/ /best/ /ˌsɪtʃuˈeɪʃ(ə)n/ /ʌv/ /ɔːl/ /wʌz; wəz/ /wen/ /ðə/ /ˈdɪnər/ /ˈpɑːrti/ /wʌz; wəz/ /wɪˈðɪn/ /ˈwɔːkɪŋ/ /ˈdɪstəns/"
  },
  {
    "id": "161",
    "sentence": "Unfortunately",
    "chinese": "不幸的是",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/"
  },
  {
    "id": "162",
    "sentence": "that was not often the case",
    "chinese": "这种情况并不常见",
    "pronunciation": "/ðæt/ /wʌz; wəz/ /nɑːt/ /ˈɔːf(ə)n/ /ðə/ /keɪs/"
  },
  {
    "id": "163",
    "sentence": "Unfortunately , that was not often the case",
    "chinese": "不幸的是，这种情况并不常见",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ðæt/ /wʌz; wəz/ /nɑːt/ /ˈɔːf(ə)n/ /ðə/ /keɪs/"
  },
  {
    "id": "164",
    "sentence": "in large cities",
    "chinese": "在大城市中",
    "pronunciation": "/ɪn/ /lɑːrdʒ/ /ˈsɪtiz/"
  },
  {
    "id": "165",
    "sentence": "Unfortunately , that was not often the case in large cities",
    "chinese": "不幸的是，在大城市中这种情况并不常见",
    "pronunciation": "/ʌnˈfɔːrtʃənətli/ /ðæt/ /wʌz; wəz/ /nɑːt/ /ˈɔːf(ə)n/ /ðə/ /keɪs/ /ɪn/ /lɑːrdʒ/ /ˈsɪtiz/"
  },
  {
    "id": "166",
    "sentence": "So we moved to a small town",
    "chinese": "于是我们搬到了一个小镇",
    "pronunciation": "/soʊ/ /wiː; wi/ /muːvd/ /tuː; tə/ /ə; eɪ/ /smɔːl/ /taʊn/"
  },
  {
    "id": "167",
    "sentence": "and spend more time with our neighbours",
    "chinese": "并与邻居们花更多时间相处",
    "pronunciation": "/ænd; ənd/ /spend/ /mɔːr/ /taɪm/ /wɪð; wɪθ/ /aʊr/ /ˈneɪbərz/"
  },
  {
    "id": "168",
    "sentence": "So we moved to a small town and spend more time with our neighbours",
    "chinese": "于是我们搬到了一个小镇，花更多时间与邻居相处",
    "pronunciation": "/soʊ/ /wiː; wi/ /muːvd/ /tuː; tə/ /ə; eɪ/ /smɔːl/ /taʊn/ /ænd; ənd/ /spend/ /mɔːr/ /taɪm/ /wɪð; wɪθ/ /aʊr/ /ˈneɪbərz/"
  },
  {
    "id": "169",
    "sentence": "Now here are some questions",
    "chinese": "现在有一些问题",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/"
  },
  {
    "id": "170",
    "sentence": "you can try to answer",
    "chinese": "你可以尝试回答",
    "pronunciation": "/juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "171",
    "sentence": "Now here are some questions , you can try to answer",
    "chinese": "现在有一些问题，你可以尝试回答",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/"
  },
  {
    "id": "172",
    "sentence": "or simply listen to the answer",
    "chinese": "或者简单地听一下答案",
    "pronunciation": "/ɔr/ /ˈsɪmpli/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈænsər/"
  },
  {
    "id": "173",
    "sentence": "Now here are some questions , you can try to answer or simply listen to the answer",
    "chinese": "现在有一些问题，你可以尝试回答，或者简单地听一下答案",
    "pronunciation": "/naʊ/ /hɪr/ /ɑr/ /sʌm; səm/ /ˈkwestʃənz/ /juː; jʊ/ /kæn/ /traɪ/ /tuː; tə/ /ˈænsər/ /ɔr/ /ˈsɪmpli/ /ˈlɪs(ə)n/ /tuː; tə/ /ðə/ /ˈænsər/"
  },
  {
    "id": "174",
    "sentence": "One :",
    "chinese": "一：",
    "pronunciation": "/wʌn/"
  },
  {
    "id": "175",
    "sentence": "Sam and Betty enjoy having a glass or two of wine",
    "chinese": "山姆和贝蒂喜欢在用餐时喝一两杯葡萄酒",
    "pronunciation": "/sæm/ /ænd; ənd/ /ˈbeti/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/"
  },
  {
    "id": "176",
    "sentence": "One : Sam and Betty enjoy having a glass or two of wine",
    "chinese": "一：山姆和贝蒂喜欢在用餐时喝一两杯葡萄酒",
    "pronunciation": "/wʌn/ /sæm/ /ænd; ənd/ /ˈbeti/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/"
  },
  {
    "id": "177",
    "sentence": "with their meal",
    "chinese": "与他们的餐食一起",
    "pronunciation": "/wɪð; wɪθ/ /ðer/ /miːl/"
  },
  {
    "id": "178",
    "sentence": "One : Sam and Betty enjoy having a glass or two of wine with their meal",
    "chinese": "山姆和贝蒂喜欢在用餐时喝一两杯葡萄酒",
    "pronunciation": "/wʌn/ /sæm/ /ænd; ənd/ /ˈbeti/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/ /wɪð; wɪθ/ /ðer/ /miːl/"
  },
  {
    "id": "179",
    "sentence": "when they eat out",
    "chinese": "当他们外出就餐时",
    "pronunciation": "/wen/ /ðeɪ/ /iːt/ /aʊt/"
  },
  {
    "id": "180",
    "sentence": "One : Sam and Betty enjoy having a glass or two of wine with their meal when they eat out",
    "chinese": "一：山姆和贝蒂在外就餐时喜欢喝一两杯葡萄酒",
    "pronunciation": "/wʌn/ /sæm/ /ænd; ənd/ /ˈbeti/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/ /wɪð; wɪθ/ /ðer/ /miːl/ /wen/ /ðeɪ/ /iːt/ /aʊt/"
  },
  {
    "id": "181",
    "sentence": "How many glasses of wine",
    "chinese": "多少杯葡萄酒",
    "pronunciation": "/haʊ/ /ˈmeni/ /ˈɡlæsɪz/ /ʌv/ /waɪn/"
  },
  {
    "id": "182",
    "sentence": "do they enjoy",
    "chinese": "他们享用",
    "pronunciation": "/duː; də/ /ðeɪ/ /ɪnˈdʒɔɪ/"
  },
  {
    "id": "183",
    "sentence": "How many glasses of wine do they enjoy",
    "chinese": "他们享用多少杯葡萄酒",
    "pronunciation": "/haʊ/ /ˈmeni/ /ˈɡlæsɪz/ /ʌv/ /waɪn/ /duː; də/ /ðeɪ/ /ɪnˈdʒɔɪ/"
  },
  {
    "id": "184",
    "sentence": "with their meal",
    "chinese": "与他们的餐食一起",
    "pronunciation": "/wɪð; wɪθ/ /ðer/ /miːl/"
  },
  {
    "id": "185",
    "sentence": "How many glasses of wine do they enjoy with their meal",
    "chinese": "他们一顿饭会享用多少杯葡萄酒？",
    "pronunciation": "/haʊ/ /ˈmeni/ /ˈɡlæsɪz/ /ʌv/ /waɪn/ /duː; də/ /ðeɪ/ /ɪnˈdʒɔɪ/ /wɪð; wɪθ/ /ðer/ /miːl/"
  },
  {
    "id": "186",
    "sentence": "when they eat out",
    "chinese": "他们外出就餐时",
    "pronunciation": "/wen/ /ðeɪ/ /iːt/ /aʊt/"
  },
  {
    "id": "187",
    "sentence": "How many glasses of wine do they enjoy with their meal when they eat out ?",
    "chinese": "他们外出就餐时，一顿饭会享用多少杯葡萄酒？",
    "pronunciation": "/haʊ/ /ˈmeni/ /ˈɡlæsɪz/ /ʌv/ /waɪn/ /duː; də/ /ðeɪ/ /ɪnˈdʒɔɪ/ /wɪð; wɪθ/ /ðer/ /miːl/ /wen/ /ðeɪ/ /iːt/ /aʊt/"
  },
  {
    "id": "188",
    "sentence": "They enjoy having a glass or two of wine",
    "chinese": "他们喜欢喝一两杯葡萄酒",
    "pronunciation": "/ðeɪ/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/"
  },
  {
    "id": "189",
    "sentence": "with their meal",
    "chinese": "与他们的餐食一起",
    "pronunciation": "/wɪð; wɪθ/ /ðer/ /miːl/"
  },
  {
    "id": "190",
    "sentence": "They enjoy having a glass or two of wine with their meal",
    "chinese": "他们喜欢在用餐时喝一两杯葡萄酒",
    "pronunciation": "/ðeɪ/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/ /wɪð; wɪθ/ /ðer/ /miːl/"
  },
  {
    "id": "191",
    "sentence": "when they eat out",
    "chinese": "当他们外出就餐时",
    "pronunciation": "/wen/ /ðeɪ/ /iːt/ /aʊt/"
  },
  {
    "id": "192",
    "sentence": "They enjoy having a glass or two of wine with their meal when they eat out",
    "chinese": "他们在外出就餐时喜欢喝一两杯葡萄酒",
    "pronunciation": "/ðeɪ/ /ɪnˈdʒɔɪ/ /ˈhævɪŋ/ /ə; eɪ/ /ɡlæs/ /ɔr/ /tuː/ /ʌv/ /waɪn/ /wɪð; wɪθ/ /ðer/ /miːl/ /wen/ /ðeɪ/ /iːt/ /aʊt/"
  },
  {
    "id": "193",
    "sentence": "Two :",
    "chinese": "二：",
    "pronunciation": "/tuː/"
  },
  {
    "id": "194",
    "sentence": "For that reason",
    "chinese": "因此",
    "pronunciation": "/fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/"
  },
  {
    "id": "195",
    "sentence": "Two : For that reason",
    "chinese": "二：因此",
    "pronunciation": "/tuː/ /fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/"
  },
  {
    "id": "196",
    "sentence": "it is important for them",
    "chinese": "对他们来说很重要",
    "pronunciation": "/ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/"
  },
  {
    "id": "197",
    "sentence": "Two : For that reason , it is important for them",
    "chinese": "二：因此，对他们来说重要的是",
    "pronunciation": "/tuː/ /fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/"
  },
  {
    "id": "198",
    "sentence": "to think about",
    "chinese": "考虑",
    "pronunciation": "/tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "199",
    "sentence": "Two : For that reason , it is important for them to think about",
    "chinese": "二：因此，对他们来说，考虑如何回家是很重要的",
    "pronunciation": "/tuː/ /fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "200",
    "sentence": "how they are going to get home",
    "chinese": "他们打算怎么回家",
    "pronunciation": "/haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/"
  },
  {
    "id": "201",
    "sentence": "Two : For that reason , it is important for them to think about how they are going to get home",
    "chinese": "二：因此，对他们来说，考虑晚餐后如何回家是很重要的",
    "pronunciation": "/tuː/ /fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/ /haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/"
  },
  {
    "id": "202",
    "sentence": "after dinner",
    "chinese": "晚餐后",
    "pronunciation": "/ˈæftər/ /ˈdɪnər/"
  },
  {
    "id": "203",
    "sentence": "Two : For that reason , it is important for them to think about how they are going to get home after dinner",
    "chinese": "二：因此，他们需要考虑晚餐后如何回家的问题",
    "pronunciation": "/tuː/ /fɔːr; fər/ /ðæt/ /ˈriːz(ə)n/ /ɪt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/ /haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/ /ˈæftər/ /ˈdɪnər/"
  },
  {
    "id": "204",
    "sentence": "What is important",
    "chinese": "什么是最重要的",
    "pronunciation": "/wʌt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "205",
    "sentence": "for Sam and Betty",
    "chinese": "对于山姆和贝蒂来说",
    "pronunciation": "/fɔːr; fər/ /sæm/ /ænd; ənd/ /ˈbeti/"
  },
  {
    "id": "206",
    "sentence": "What is important for Sam and Betty",
    "chinese": "对于山姆和贝蒂来说，什么是最重要的",
    "pronunciation": "/wʌt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /sæm/ /ænd; ənd/ /ˈbeti/"
  },
  {
    "id": "207",
    "sentence": "to think about",
    "chinese": "需要考虑",
    "pronunciation": "/tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "208",
    "sentence": "What is important for Sam and Betty to think about ?",
    "chinese": "对于山姆和贝蒂来说，什么是最重要的需要考虑的事情？",
    "pronunciation": "/wʌt/ /ɪz/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /sæm/ /ænd; ənd/ /ˈbeti/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "209",
    "sentence": "It's important",
    "chinese": "这很重要",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/"
  },
  {
    "id": "210",
    "sentence": "for them to think about",
    "chinese": "他们需要考虑",
    "pronunciation": "/fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "211",
    "sentence": "It's important for them to think about",
    "chinese": "对他们来说，考虑一下很重要",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/"
  },
  {
    "id": "212",
    "sentence": "how they are going to get home",
    "chinese": "他们打算怎么回家",
    "pronunciation": "/haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/"
  },
  {
    "id": "213",
    "sentence": "It's important for them to think about how they are going to get home",
    "chinese": "对他们来说，考虑晚餐后如何回家很重要",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/ /haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/"
  },
  {
    "id": "214",
    "sentence": "after dinner",
    "chinese": "晚餐后",
    "pronunciation": "/ˈæftər/ /ˈdɪnər/"
  },
  {
    "id": "215",
    "sentence": "It's important for them to think about how they are going to get home after dinner",
    "chinese": "他们需要考虑晚餐后如何回家",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /fɔːr; fər/ /ðem; ðəm/ /tuː; tə/ /θɪŋk/ /əˈbaʊt/ /haʊ/ /ðeɪ/ /ɑr/ /ˈɡoʊɪŋ/ /tuː; tə/ /ɡet/ /hoʊm/ /ˈæftər/ /ˈdɪnər/"
  },
  {
    "id": "216",
    "sentence": "Three :",
    "chinese": "三：",
    "pronunciation": "/θriː/"
  },
  {
    "id": "217",
    "sentence": "They usually drive their car",
    "chinese": "他们通常开车",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/"
  },
  {
    "id": "218",
    "sentence": "Three : They usually drive their car",
    "chinese": "他们通常开车",
    "pronunciation": "/θriː/ /ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/"
  },
  {
    "id": "219",
    "sentence": "to the restaurant",
    "chinese": "去餐厅",
    "pronunciation": "/tuː; tə/ /ðə/ /ˈrestrɑːnt/"
  },
  {
    "id": "220",
    "sentence": "Three : They usually drive their car to the restaurant",
    "chinese": "他们通常开车去餐厅",
    "pronunciation": "/θriː/ /ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/"
  },
  {
    "id": "221",
    "sentence": "or to their friends' place",
    "chinese": "或者去朋友家",
    "pronunciation": "/ɔr/ /tuː; tə/ /ðer/ /frendz/ /pleɪs/"
  },
  {
    "id": "222",
    "sentence": "Three : They usually drive their car to the restaurant , or to their friends' place",
    "chinese": "他们通常开车去餐厅，或者去朋友家",
    "pronunciation": "/θriː/ /ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /ðer/ /frendz/ /pleɪs/"
  },
  {
    "id": "223",
    "sentence": "because it is too expensive",
    "chinese": "因为太贵了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ɪt/ /ɪz/ /tuː/ /ɪkˈspensɪv/"
  },
  {
    "id": "224",
    "sentence": "Three : They usually drive their car to the restaurant , or to their friends' place , because it is too expensive",
    "chinese": "他们通常开车去餐厅，或者去朋友家，因为打车太贵",
    "pronunciation": "/θriː/ /ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /ðer/ /frendz/ /pleɪs/ /bɪˈkəz, bɪˈkɔːz/ /ɪt/ /ɪz/ /tuː/ /ɪkˈspensɪv/"
  },
  {
    "id": "225",
    "sentence": "to take a taxi",
    "chinese": "打车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "226",
    "sentence": "Three : They usually drive their car to the restaurant , or to their friends' place , because it is too expensive to take a taxi",
    "chinese": "他们通常开车去餐厅，或者去朋友家，因为打车太贵了",
    "pronunciation": "/θriː/ /ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /draɪv/ /ðer/ /kɑːr/ /tuː; tə/ /ðə/ /ˈrestrɑːnt/ /ɔr/ /tuː; tə/ /ðer/ /frendz/ /pleɪs/ /bɪˈkəz, bɪˈkɔːz/ /ɪt/ /ɪz/ /tuː/ /ɪkˈspensɪv/ /tuː; tə/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "227",
    "sentence": "Why don't they take a taxi",
    "chinese": "他们为什么不坐出租车？",
    "pronunciation": "/waɪ/ /doʊnt/ /ðeɪ/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "228",
    "sentence": "Because it's too expensive",
    "chinese": "因为太贵了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ɪts/ /tuː/ /ɪkˈspensɪv/"
  },
  {
    "id": "229",
    "sentence": "to take a taxi",
    "chinese": "打车",
    "pronunciation": "/tuː; tə/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "230",
    "sentence": "Because it's too expensive to take a taxi",
    "chinese": "因为打车太贵了",
    "pronunciation": "/bɪˈkəz, bɪˈkɔːz/ /ɪts/ /tuː/ /ɪkˈspensɪv/ /tuː; tə/ /teɪk/ /ə; eɪ/ /ˈtæksi/"
  },
  {
    "id": "231",
    "sentence": "Four :",
    "chinese": "四：",
    "pronunciation": "/fɔr/"
  },
  {
    "id": "232",
    "sentence": "They usually decide",
    "chinese": "他们通常决定",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/"
  },
  {
    "id": "233",
    "sentence": "Four : They usually decide",
    "chinese": "四：他们通常决定",
    "pronunciation": "/fɔr/ /ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/"
  },
  {
    "id": "234",
    "sentence": "ahead of time",
    "chinese": "提前",
    "pronunciation": "/əˈhɛd/ /ʌv/ /taɪm/"
  },
  {
    "id": "235",
    "sentence": "Four : They usually decide ahead of time",
    "chinese": "四：他们通常会提前决定",
    "pronunciation": "/fɔr/ /ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/"
  },
  {
    "id": "236",
    "sentence": "who is going to drive home",
    "chinese": "谁要开车回家",
    "pronunciation": "/huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/"
  },
  {
    "id": "237",
    "sentence": "Four : They usually decide ahead of time who is going to drive home",
    "chinese": "四：他们通常会提前决定谁开车回家",
    "pronunciation": "/fɔr/ /ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/"
  },
  {
    "id": "238",
    "sentence": "What do they decide",
    "chinese": "他们决定什么？",
    "pronunciation": "/wʌt/ /duː; də/ /ðeɪ/ /dɪˈsaɪd/"
  },
  {
    "id": "239",
    "sentence": "ahead of time",
    "chinese": "事先",
    "pronunciation": "/əˈhɛd/ /ʌv/ /taɪm/"
  },
  {
    "id": "240",
    "sentence": "What do they decide ahead of time ?",
    "chinese": "他们事先决定什么？",
    "pronunciation": "/wʌt/ /duː; də/ /ðeɪ/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/"
  },
  {
    "id": "241",
    "sentence": "They usually decide",
    "chinese": "他们通常决定",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/"
  },
  {
    "id": "242",
    "sentence": "ahead of time",
    "chinese": "提前",
    "pronunciation": "/əˈhɛd/ /ʌv/ /taɪm/"
  },
  {
    "id": "243",
    "sentence": "They usually decide ahead of time",
    "chinese": "他们通常会提前决定",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/"
  },
  {
    "id": "244",
    "sentence": "who is going to drive home",
    "chinese": "谁要开车回家",
    "pronunciation": "/huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/"
  },
  {
    "id": "245",
    "sentence": "They usually decide ahead of time who is going to drive home",
    "chinese": "他们通常会提前决定谁开车回家",
    "pronunciation": "/ðeɪ/ /ˈjuːʒuəli; ˈjuːʒəli/ /dɪˈsaɪd/ /əˈhɛd/ /ʌv/ /taɪm/ /huː/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /draɪv/ /hoʊm/"
  },
  {
    "id": "246",
    "sentence": "Five :",
    "chinese": "五：",
    "pronunciation": "/faɪv/"
  },
  {
    "id": "247",
    "sentence": "Sometimes we knew",
    "chinese": "有时候我们知道",
    "pronunciation": "/ˈsʌmtaɪmz/ /wiː; wi/ /nuː/"
  },
  {
    "id": "248",
    "sentence": "Five : Sometimes we knew",
    "chinese": "五：有时候我们知道",
    "pronunciation": "/faɪv/ /ˈsʌmtaɪmz/ /wiː; wi/ /nuː/"
  },
  {
    "id": "249",
    "sentence": "that it would be difficult",
    "chinese": "这会很难",
    "pronunciation": "/ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "250",
    "sentence": "Five : Sometimes we knew that it would be difficult",
    "chinese": "五：有时候我们知道很难",
    "pronunciation": "/faɪv/ /ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "251",
    "sentence": "to refuse to drink",
    "chinese": "拒绝喝酒",
    "pronunciation": "/tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "252",
    "sentence": "Five : Sometimes we knew that it would be difficult to refuse to drink",
    "chinese": "五：有时候我们知道很难拒绝与其他客人一起喝酒",
    "pronunciation": "/faɪv/ /ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "253",
    "sentence": "with the other guests",
    "chinese": "与其他客人一起",
    "pronunciation": "/wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "254",
    "sentence": "Five : Sometimes we knew that it would be difficult to refuse to drink with the other guests",
    "chinese": "五：有时候我们知道很难拒绝与其他客人一起喝酒",
    "pronunciation": "/faɪv/ /ˈsʌmtaɪmz/ /wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "255",
    "sentence": "Did we think",
    "chinese": "我们认为吗？",
    "pronunciation": "/dɪd/ /wiː; wi/ /θɪŋk/"
  },
  {
    "id": "256",
    "sentence": "it would be easy or difficult",
    "chinese": "会是容易还是困难",
    "pronunciation": "/ɪt/ /wʊd/ /biː/ /ˈiːzi/ /ɔr/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "257",
    "sentence": "Did we think it would be easy or difficult",
    "chinese": "我们认为它会容易还是困难",
    "pronunciation": "/dɪd/ /wiː; wi/ /θɪŋk/ /ɪt/ /wʊd/ /biː/ /ˈiːzi/ /ɔr/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "258",
    "sentence": "to refuse to drink",
    "chinese": "拒绝喝酒",
    "pronunciation": "/tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "259",
    "sentence": "Did we think it would be easy or difficult to refuse to drink",
    "chinese": "我们认为拒绝喝酒是容易还是困难吗？",
    "pronunciation": "/dɪd/ /wiː; wi/ /θɪŋk/ /ɪt/ /wʊd/ /biː/ /ˈiːzi/ /ɔr/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "260",
    "sentence": "with the other guests",
    "chinese": "与其他客人一起",
    "pronunciation": "/wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "261",
    "sentence": "Did we think it would be easy or difficult to refuse to drink with the other guests ?",
    "chinese": "我们认为拒绝与其他客人一起喝酒是容易还是困难？",
    "pronunciation": "/dɪd/ /wiː; wi/ /θɪŋk/ /ɪt/ /wʊd/ /biː/ /ˈiːzi/ /ɔr/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "262",
    "sentence": "We knew",
    "chinese": "我们知道",
    "pronunciation": "/wiː; wi/ /nuː/"
  },
  {
    "id": "263",
    "sentence": "that it would be difficult",
    "chinese": "这会很困难",
    "pronunciation": "/ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "264",
    "sentence": "We knew that it would be difficult",
    "chinese": "我们知道这会很困难",
    "pronunciation": "/wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/"
  },
  {
    "id": "265",
    "sentence": "to refuse to drink",
    "chinese": "拒绝喝酒",
    "pronunciation": "/tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "266",
    "sentence": "We knew that it would be difficult to refuse to drink",
    "chinese": "我们知道很难拒绝喝酒",
    "pronunciation": "/wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/"
  },
  {
    "id": "267",
    "sentence": "with the other guests",
    "chinese": "与其他客人一起",
    "pronunciation": "/wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "268",
    "sentence": "We knew that it would be difficult to refuse to drink with the other guests",
    "chinese": "我们知道很难拒绝与其他客人一起喝酒",
    "pronunciation": "/wiː; wi/ /nuː/ /ðæt/ /ɪt/ /wʊd/ /biː/ /ˈdɪfɪkəlt/ /tuː; tə/ /rɪˈfjuːz/ /tuː; tə/ /drɪŋk/ /wɪð; wɪθ/ /ðə/ /ˈʌðər/ /ɡests/"
  },
  {
    "id": "269",
    "sentence": "Six :",
    "chinese": "六：",
    "pronunciation": "/sɪks/"
  },
  {
    "id": "270",
    "sentence": "In those cases",
    "chinese": "在这些情况下",
    "pronunciation": "/ɪn/ /ðoʊz/ /ˈkeɪsɪz/"
  },
  {
    "id": "271",
    "sentence": "Six : In those cases",
    "chinese": "在这些情况下",
    "pronunciation": "/sɪks/ /ɪn/ /ðoʊz/ /ˈkeɪsɪz/"
  },
  {
    "id": "272",
    "sentence": "we had to make other arrangements",
    "chinese": "我们不得不做出其他安排",
    "pronunciation": "/wiː; wi/ /hæd/ /tuː; tə/ /meɪk/ /ˈʌðər/ /əˈreɪndʒmənts/"
  },
  {
    "id": "273",
    "sentence": "Six : In those cases , we had to make other arrangements",
    "chinese": "在这些情况下，我们不得不做出其他安排",
    "pronunciation": "/sɪks/ /ɪn/ /ðoʊz/ /ˈkeɪsɪz/ /wiː; wi/ /hæd/ /tuː; tə/ /meɪk/ /ˈʌðər/ /əˈreɪndʒmənts/"
  },
  {
    "id": "274",
    "sentence": "What did we have to do",
    "chinese": "我们该做什么",
    "pronunciation": "/wʌt/ /dɪd/ /wiː; wi/ /hæv/ /tuː; tə/ /duː; də/"
  },
  {
    "id": "275",
    "sentence": "in those cases",
    "chinese": "在那些情况下",
    "pronunciation": "/ɪn/ /ðoʊz/ /ˈkeɪsɪz/"
  },
  {
    "id": "276",
    "sentence": "What did we have to do in those cases ?",
    "chinese": "在那些情况下，我们该怎么做？",
    "pronunciation": "/wʌt/ /dɪd/ /wiː; wi/ /hæv/ /tuː; tə/ /duː; də/ /ɪn/ /ðoʊz/ /ˈkeɪsɪz/"
  },
  {
    "id": "277",
    "sentence": "We had to make other arrangements",
    "chinese": "我们不得不做出其他安排",
    "pronunciation": "/wiː; wi/ /hæd/ /tuː; tə/ /meɪk/ /ˈʌðər/ /əˈreɪndʒmənts/"
  },
  {
    "id": "278",
    "sentence": "in those cases",
    "chinese": "在这些情况下",
    "pronunciation": "/ɪn/ /ðoʊz/ /ˈkeɪsɪz/"
  },
  {
    "id": "279",
    "sentence": "We had to make other arrangements in those cases",
    "chinese": "在这些情况下，我们不得不做出其他安排",
    "pronunciation": "/wiː; wi/ /hæd/ /tuː; tə/ /meɪk/ /ˈʌðər/ /əˈreɪndʒmənts/ /ɪn/ /ðoʊz/ /ˈkeɪsɪz/"
  },
  {
    "id": "280",
    "sentence": "Seven :",
    "chinese": "七：",
    "pronunciation": "/ˈsev(ə)n/"
  },
  {
    "id": "281",
    "sentence": "I found it useful",
    "chinese": "我发现它很有用",
    "pronunciation": "/aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "282",
    "sentence": "Seven : I found it useful",
    "chinese": "我发现它很有用",
    "pronunciation": "/ˈsev(ə)n/ /aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "283",
    "sentence": "to have friends",
    "chinese": "有一些朋友",
    "pronunciation": "/tuː; tə/ /hæv/ /frendz/"
  },
  {
    "id": "284",
    "sentence": "Seven : I found it useful to have friends",
    "chinese": "我发现有朋友",
    "pronunciation": "/ˈsev(ə)n/ /aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/ /frendz/"
  },
  {
    "id": "285",
    "sentence": "who didn't drink at all",
    "chinese": "完全不喝酒的",
    "pronunciation": "/huː/ /ˈdɪd(ə)nt/ /drɪŋk/ /æt; ət/ /ɔːl/"
  },
  {
    "id": "286",
    "sentence": "Seven : I found it useful to have friends who didn't drink at all",
    "chinese": "七：我发现有一些完全不喝酒的朋友很有帮助",
    "pronunciation": "/ˈsev(ə)n/ /aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/ /frendz/ /huː/ /ˈdɪd(ə)nt/ /drɪŋk/ /æt; ət/ /ɔːl/"
  },
  {
    "id": "287",
    "sentence": "What kinds of friends",
    "chinese": "什么样的朋友",
    "pronunciation": "/wʌt/ /kaɪndz/ /ʌv/ /frendz/"
  },
  {
    "id": "288",
    "sentence": "did I find it useful",
    "chinese": "我发现它有用吗？",
    "pronunciation": "/dɪd/ /aɪ/ /faɪnd/ /ɪt/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "289",
    "sentence": "What kinds of friends did I find it useful",
    "chinese": "我发现什么样的朋友是有用的",
    "pronunciation": "/wʌt/ /kaɪndz/ /ʌv/ /frendz/ /dɪd/ /aɪ/ /faɪnd/ /ɪt/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "290",
    "sentence": "to have",
    "chinese": "拥有",
    "pronunciation": "/tuː; tə/ /hæv/"
  },
  {
    "id": "291",
    "sentence": "What kinds of friends did I find it useful to have ?",
    "chinese": "我发现拥有什么样的朋友是有益的？",
    "pronunciation": "/wʌt/ /kaɪndz/ /ʌv/ /frendz/ /dɪd/ /aɪ/ /faɪnd/ /ɪt/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/"
  },
  {
    "id": "292",
    "sentence": "I found it useful",
    "chinese": "我发现它很有用",
    "pronunciation": "/aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/"
  },
  {
    "id": "293",
    "sentence": "to have friends",
    "chinese": "有一些朋友",
    "pronunciation": "/tuː; tə/ /hæv/ /frendz/"
  },
  {
    "id": "294",
    "sentence": "I found it useful to have friends",
    "chinese": "我发现有朋友很有帮助",
    "pronunciation": "/aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/ /frendz/"
  },
  {
    "id": "295",
    "sentence": "who didn't drink at all",
    "chinese": "完全不喝酒的",
    "pronunciation": "/huː/ /ˈdɪd(ə)nt/ /drɪŋk/ /æt; ət/ /ɔːl/"
  },
  {
    "id": "296",
    "sentence": "I found it useful to have friends who didn't drink at all",
    "chinese": "我发现有一些完全不喝酒的朋友很有帮助",
    "pronunciation": "/aɪ/ /faʊnd/ /ɪt/ /ˈjuːsf(ə)l/ /tuː; tə/ /hæv/ /frendz/ /huː/ /ˈdɪd(ə)nt/ /drɪŋk/ /æt; ət/ /ɔːl/"
  },
  {
    "id": "297",
    "sentence": "Eight :",
    "chinese": "八：",
    "pronunciation": "/eɪt/"
  },
  {
    "id": "298",
    "sentence": "Such people were always in demand",
    "chinese": "这类人总是很抢手",
    "pronunciation": "/sʌtʃ/ /ˈpipl/ /wɜːr; wər/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/"
  },
  {
    "id": "299",
    "sentence": "Eight : Such people were always in demand",
    "chinese": "八：这类人总是很抢手",
    "pronunciation": "/eɪt/ /sʌtʃ/ /ˈpipl/ /wɜːr; wər/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/"
  },
  {
    "id": "300",
    "sentence": "as designated drivers",
    "chinese": "作为指定司机",
    "pronunciation": "/æz; əz/ /ˈdezɪɡneɪtɪd/ /ˈdraɪvər/"
  },
  {
    "id": "301",
    "sentence": "Eight : Such people were always in demand as designated drivers",
    "chinese": "八：这类人总是很抢手，因为他们可以担任指定司机",
    "pronunciation": "/eɪt/ /sʌtʃ/ /ˈpipl/ /wɜːr; wər/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/ /æz; əz/ /ˈdezɪɡneɪtɪd/ /ˈdraɪvər/"
  },
  {
    "id": "302",
    "sentence": "What were such people",
    "chinese": "这些人是什么",
    "pronunciation": "/wʌt/ /wɜːr; wər/ /sʌtʃ/ /ˈpipl/"
  },
  {
    "id": "303",
    "sentence": "always in demand",
    "chinese": "总是被需要",
    "pronunciation": "/ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/"
  },
  {
    "id": "304",
    "sentence": "What were such people always in demand",
    "chinese": "这些人总是被需要做什么？",
    "pronunciation": "/wʌt/ /wɜːr; wər/ /sʌtʃ/ /ˈpipl/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/"
  },
  {
    "id": "305",
    "sentence": "as",
    "chinese": "作为",
    "pronunciation": "/æz; əz/"
  },
  {
    "id": "306",
    "sentence": "What were such people always in demand as ?",
    "chinese": "这些人总是被需要做什么？",
    "pronunciation": "/wʌt/ /wɜːr; wər/ /sʌtʃ/ /ˈpipl/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/ /æz; əz/"
  },
  {
    "id": "307",
    "sentence": "Such people were always in demand",
    "chinese": "这类人总是很抢手",
    "pronunciation": "/sʌtʃ/ /ˈpipl/ /wɜːr; wər/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/"
  },
  {
    "id": "308",
    "sentence": "as designated drivers",
    "chinese": "作为指定司机",
    "pronunciation": "/æz; əz/ /ˈdezɪɡneɪtɪd/ /ˈdraɪvər/"
  },
  {
    "id": "309",
    "sentence": "Such people were always in demand as designated drivers",
    "chinese": "这类人总是很抢手，常被指定为代驾司机",
    "pronunciation": "/sʌtʃ/ /ˈpipl/ /wɜːr; wər/ /ˈɔːlweɪz/ /ɪn/ /dɪˈmænd/ /æz; əz/ /ˈdezɪɡneɪtɪd/ /ˈdraɪvər/"
  },
];
