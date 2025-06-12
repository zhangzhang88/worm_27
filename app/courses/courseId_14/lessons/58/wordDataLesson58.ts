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
    "sentence": "this is Sam Jones",
    "chinese": "我是萨姆·琼斯",
    "pronunciation": "/ðɪs/ /ɪz/ /sæm/ /dʒoʊnz/"
  },
  {
    "id": "3",
    "sentence": "Hello , this is Sam Jones",
    "chinese": "你好，我是萨姆·琼斯",
    "pronunciation": "/həˈloʊ/ /ðɪs/ /ɪz/ /sæm/ /dʒoʊnz/"
  },
  {
    "id": "4",
    "sentence": "Good morning , Mr Jones",
    "chinese": "早上好，琼斯先生",
    "pronunciation": "/ɡʊd/ /ˈmɔːrnɪŋ/ /ˈmɪstər/ /dʒoʊnz/"
  },
  {
    "id": "5",
    "sentence": "How can I help you",
    "chinese": "我能为您做些什么",
    "pronunciation": "/haʊ/ /kæn/ /aɪ/ /help/ /juː; jʊ/"
  },
  {
    "id": "6",
    "sentence": "Good morning , Mr Jones . How can I help you ?",
    "chinese": "早上好，琼斯先生有什么可以帮您的吗？",
    "pronunciation": "/ɡʊd/ /ˈmɔːrnɪŋ/ /ˈmɪstər/ /dʒoʊnz/ /haʊ/ /kæn/ /aɪ/ /help/ /juː; jʊ/"
  },
  {
    "id": "7",
    "sentence": "I've been working with one of your realtors",
    "chinese": "我一直在与你们的一位房地产经纪人合作",
    "pronunciation": "/aɪv/ /bɪn/ /ˈwɜrkɪŋ/ /wɪð; wɪθ/ /wʌn/ /ʌv/ /jʊr; jər/ /ˈriːəltərz/"
  },
  {
    "id": "8",
    "sentence": "and",
    "chinese": "并且",
    "pronunciation": "/ænd; ənd/"
  },
  {
    "id": "9",
    "sentence": "I've been working with one of your realtors and",
    "chinese": "我一直在与你们的一位房地产经纪人合作",
    "pronunciation": "/aɪv/ /bɪn/ /ˈwɜrkɪŋ/ /wɪð; wɪθ/ /wʌn/ /ʌv/ /jʊr; jər/ /ˈriːəltərz/ /ænd; ənd/"
  },
  {
    "id": "10",
    "sentence": "I'd like to view some homes now",
    "chinese": "我想现在看一些房子",
    "pronunciation": "/aɪd/ /laɪk/ /tuː; tə/ /vjuː/ /sʌm; səm/ /hoʊmz/ /naʊ/"
  },
  {
    "id": "11",
    "sentence": "I've been working with one of your realtors and I'd like to view some homes now",
    "chinese": "我一直在与你们的一位房地产经纪人合作，现在我想看一些房子",
    "pronunciation": "/aɪv/ /bɪn/ /ˈwɜrkɪŋ/ /wɪð; wɪθ/ /wʌn/ /ʌv/ /jʊr; jər/ /ˈriːəltərz/ /ænd; ənd/ /aɪd/ /laɪk/ /tuː; tə/ /vjuː/ /sʌm; səm/ /hoʊmz/ /naʊ/"
  },
  {
    "id": "12",
    "sentence": "Okay",
    "chinese": "好的",
    "pronunciation": "/oʊˈkeɪ/"
  },
  {
    "id": "13",
    "sentence": "Who have you been working with",
    "chinese": "你一直在和谁合作",
    "pronunciation": "/huː/ /hæv/ /juː; jʊ/ /bɪn/ /ˈwɜrkɪŋ/ /wɪð; wɪθ/"
  },
  {
    "id": "14",
    "sentence": "Okay . Who have you been working with ?",
    "chinese": "好的你一直在和谁合作？",
    "pronunciation": "/oʊˈkeɪ/ /huː/ /hæv/ /juː; jʊ/ /bɪn/ /ˈwɜrkɪŋ/ /wɪð; wɪθ/"
  },
  {
    "id": "15",
    "sentence": "I've been working",
    "chinese": "我一直在工作",
    "pronunciation": "/aɪv/ /bɪn/ /ˈwɜrkɪŋ/"
  },
  {
    "id": "16",
    "sentence": "with Ms Thomas",
    "chinese": "与托马斯女士",
    "pronunciation": "/wɪð; wɪθ/ /mɪz/ /ˈtɑːməs/"
  },
  {
    "id": "17",
    "sentence": "I've been working with Ms . Thomas",
    "chinese": "我一直在和Thomas女士合作",
    "pronunciation": "/aɪv/ /bɪn/ /ˈwɜrkɪŋ/ /wɪð; wɪθ/ /mɪz/ /ˈtɑːməs/"
  },
  {
    "id": "18",
    "sentence": "Oh",
    "chinese": "哦",
    "pronunciation": "/oʊ/"
  },
  {
    "id": "19",
    "sentence": "she's an excellent realtor",
    "chinese": "她是一位非常出色的房产经纪人",
    "pronunciation": "/ʃiːz/ /æn; ən/ /ˈeksələnt/ /ˈrɪəltɔ/"
  },
  {
    "id": "20",
    "sentence": "Oh , she's an excellent realtor",
    "chinese": "哦，她是一位非常出色的房产经纪人",
    "pronunciation": "/oʊ/ /ʃiːz/ /æn; ən/ /ˈeksələnt/ /ˈrɪəltɔ/"
  },
  {
    "id": "21",
    "sentence": "I'll check her calendar",
    "chinese": "我会查看她的日程安排",
    "pronunciation": "/aɪl/ /tʃek/ /hɚ/ /ˈkælɪndər/"
  },
  {
    "id": "22",
    "sentence": "Oh , she's an excellent realtor . I'll check her calendar",
    "chinese": "哦，她是一位非常出色的房产经纪人我来查查她的日程安排。",
    "pronunciation": "/oʊ/ /ʃiːz/ /æn; ən/ /ˈeksələnt/ /ˈrɪəltɔ/ /aɪl/ /tʃek/ /hɚ/ /ˈkælɪndər/"
  },
  {
    "id": "23",
    "sentence": "Thank you",
    "chinese": "谢谢",
    "pronunciation": "/θæŋk/ /juː; jʊ/"
  },
  {
    "id": "24",
    "sentence": "I'm very anxious",
    "chinese": "我非常焦虑",
    "pronunciation": "/aɪm/ /ˈveri/ /ˈæŋkʃəs/"
  },
  {
    "id": "25",
    "sentence": "Thank you . I'm very anxious",
    "chinese": "谢谢我非常急切",
    "pronunciation": "/θæŋk/ /juː; jʊ/ /aɪm/ /ˈveri/ /ˈæŋkʃəs/"
  },
  {
    "id": "26",
    "sentence": "to get started",
    "chinese": "开始",
    "pronunciation": "/tuː; tə/ /ɡet/ /ˈstɑːrtɪd/"
  },
  {
    "id": "27",
    "sentence": "Thank you . I'm very anxious to get started",
    "chinese": "谢谢我迫不及待想要开始了。",
    "pronunciation": "/θæŋk/ /juː; jʊ/ /aɪm/ /ˈveri/ /ˈæŋkʃəs/ /tuː; tə/ /ɡet/ /ˈstɑːrtɪd/"
  },
  {
    "id": "28",
    "sentence": "Are you free",
    "chinese": "你有空吗",
    "pronunciation": "/ɑr/ /juː; jʊ/ /friː/"
  },
  {
    "id": "29",
    "sentence": "this Saturday",
    "chinese": "这周六",
    "pronunciation": "/ðɪs/ /ˈsætərdeɪ/"
  },
  {
    "id": "30",
    "sentence": "Are you free this Saturday ?",
    "chinese": "这周六你有空吗？",
    "pronunciation": "/ɑr/ /juː; jʊ/ /friː/ /ðɪs/ /ˈsætərdeɪ/"
  },
  {
    "id": "31",
    "sentence": "I think so",
    "chinese": "我也这么认为",
    "pronunciation": "/aɪ/ /θɪŋk/ /soʊ/"
  },
  {
    "id": "32",
    "sentence": "What time",
    "chinese": "什么时候？",
    "pronunciation": "/wʌt/ /taɪm/"
  },
  {
    "id": "33",
    "sentence": "I think so . What time ?",
    "chinese": "我也这么认为什么时候？",
    "pronunciation": "/aɪ/ /θɪŋk/ /soʊ/ /wʌt/ /taɪm/"
  },
  {
    "id": "34",
    "sentence": "She has time",
    "chinese": "她有时间",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /taɪm/"
  },
  {
    "id": "35",
    "sentence": "between 1 and 3 p . m",
    "chinese": "下午1点到3点之间",
    "pronunciation": "/bɪˈtwin/ /wʌn/ /ænd; ənd/ /θriː/ /piː/ /ɛm/"
  },
  {
    "id": "36",
    "sentence": "She has time between 1 and 3 p . m",
    "chinese": "她在下午1点到3点有空",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /taɪm/ /bɪˈtwin/ /wʌn/ /ænd; ənd/ /θriː/ /piː/ /ɛm/"
  },
  {
    "id": "37",
    "sentence": "this Saturday , the 12th",
    "chinese": "本周六，12号",
    "pronunciation": "/ðɪs/ /ˈsætərdeɪ/ /ðə/ /twɛlfθ/"
  },
  {
    "id": "38",
    "sentence": "She has time between 1 and 3 p . m . this Saturday , the 12th",
    "chinese": "她本周六，也就是12号，下午1点到3点有空",
    "pronunciation": "/ʃiː; ʃi/ /hæz; həz/ /taɪm/ /bɪˈtwin/ /wʌn/ /ænd; ənd/ /θriː/ /piː/ /ɛm/ /ðɪs/ /ˈsætərdeɪ/ /ðə/ /twɛlfθ/"
  },
  {
    "id": "39",
    "sentence": "I think",
    "chinese": "我认为",
    "pronunciation": "/aɪ/ /θɪŋk/"
  },
  {
    "id": "40",
    "sentence": "that will work",
    "chinese": "这行得通",
    "pronunciation": "/ðæt/ /wɪl/ /wɜrk/"
  },
  {
    "id": "41",
    "sentence": "I think that will work",
    "chinese": "我觉得这行得通",
    "pronunciation": "/aɪ/ /θɪŋk/ /ðæt/ /wɪl/ /wɜrk/"
  },
  {
    "id": "42",
    "sentence": "Let's do it",
    "chinese": "我们开始吧",
    "pronunciation": "/lets/ /duː; də/ /ɪt/"
  },
  {
    "id": "43",
    "sentence": "I think that will work . Let's do it",
    "chinese": "我觉得这行得通我们开始吧。",
    "pronunciation": "/aɪ/ /θɪŋk/ /ðæt/ /wɪl/ /wɜrk/ /lets/ /duː; də/ /ɪt/"
  },
  {
    "id": "44",
    "sentence": "I'll be sure to confirm with both of you",
    "chinese": "我会确保与你们两位确认",
    "pronunciation": "/aɪl/ /biː/ /ʃʊr/ /tuː; tə/ /kənˈfɜːrm/ /wɪð; wɪθ/ /boʊθ/ /ʌv/ /juː; jʊ/"
  },
  {
    "id": "45",
    "sentence": "on Friday",
    "chinese": "在周五",
    "pronunciation": "/ɑːn/ /ˈfraɪdeɪ/"
  },
  {
    "id": "46",
    "sentence": "I'll be sure to confirm with both of you on Friday",
    "chinese": "我会在周五与你们两位确认。",
    "pronunciation": "/aɪl/ /biː/ /ʃʊr/ /tuː; tə/ /kənˈfɜːrm/ /wɪð; wɪθ/ /boʊθ/ /ʌv/ /juː; jʊ/ /ɑːn/ /ˈfraɪdeɪ/"
  },
  {
    "id": "47",
    "sentence": "Have a good day",
    "chinese": "祝你有愉快的一天",
    "pronunciation": "/hæv/ /ə; eɪ/ /ɡʊd/ /deɪ/"
  },
  {
    "id": "48",
    "sentence": "I'll be sure to confirm with both of you on Friday . Have a good day",
    "chinese": "我会在周五与你们两位确认祝你们有愉快的一天。",
    "pronunciation": "/aɪl/ /biː/ /ʃʊr/ /tuː; tə/ /kənˈfɜːrm/ /wɪð; wɪθ/ /boʊθ/ /ʌv/ /juː; jʊ/ /ɑːn/ /ˈfraɪdeɪ/ /hæv/ /ə; eɪ/ /ɡʊd/ /deɪ/"
  },
];
