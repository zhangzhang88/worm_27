export interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
  pronunciation: string;
}

export const sentences: SentenceData[] = [
  {
    "id": "1",
    "sentence": "Hi , there , this is Steve Kaufmann Founder of LingQ and today I'm gonna talk about the fifth Secret to Successful Language Learning",
    "chinese": "嗨，大家好，我是LingQ的创始人Steve Kaufmann，今天我要和大家分享语言学习的第五个秘诀",
    "pronunciation": "/haɪ/ /ðer; ðər/ /ðɪs/ /ɪz/ /stiːv/ /kaʊfˈmæn/ /ˈfaʊndər/ /ʌv/ /lɪŋk/ /ænd; ənd/ /təˈdeɪ/ /aɪm/ /ˈɡənə; ˈgɔːnə/ /tɔːk/ /əˈbaʊt/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /tuː; tə/ /səkˈsesf(ə)l/ /ˈlæŋɡwɪdʒ/ /ˈlɜːrnɪŋ/"
  },
  {
    "id": "2",
    "sentence": "Again , you'll remember that so far we've discussed the need to spend a lot of time , enough time , an hour a day for quite a long period of time",
    "chinese": "再次提醒，你将记得到目前为止我们已经讨论过需要花费大量时间，足够的时间，每天一小时，持续相当长的一段时间",
    "pronunciation": "/əˈɡen/ /jʊl/ /rɪˈmembər/ /ðæt/ /soʊ/ /fɑːr/ /wɪv/ /dɪˈskʌst/ /ðə/ /niːd/ /tuː; tə/ /spend/ /ə; eɪ/ /lɑːt/ /ʌv/ /taɪm/ /ɪˈnʌf/ /taɪm/ /æn; ən/ /ˈaʊər/ /ə; eɪ/ /deɪ/ /fɔːr; fər/ /kwaɪt/ /ə; eɪ/ /lɔːŋ/ /ˈpɪriəd/ /ʌv/ /taɪm/"
  },
  {
    "id": "3",
    "sentence": "The second secret was to do things that you like to do in the language",
    "chinese": "第二个秘诀是用这种语言去做你喜欢做的事情",
    "pronunciation": "/ðə/ /ˈsɛkənd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /duː; də/ /θɪŋz/ /ðæt/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "4",
    "sentence": "The third secret was to develop the ability to notice what's happening in the language , which all good language learners have",
    "chinese": "第三个秘诀是培养观察语言中正在发生什么的能力，这是所有优秀语言学习者都具备的",
    "pronunciation": "/ðə/ /θɜrd/ /ˈsiːkrət/ /wʌz; wəz/ /tuː; tə/ /dɪˈveləp/ /ðə/ /əˈbɪləti/ /tuː; tə/ /ˈnoʊtɪs/ /wʌts/ /ˈhæpənɪŋ/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /wɪtʃ/ /ɔːl/ /ɡʊd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /hæv/"
  },
  {
    "id": "5",
    "sentence": "The fourth thing was to focus on words , vocabulary rather than grammar",
    "chinese": "第四点是注重词汇而非语法",
    "pronunciation": "/ðə/ /fɔːrθ/ /θɪŋ/ /wʌz; wəz/ /tuː; tə/ /ˈfoʊkəs/ /ɑːn/ /wɜːrdz/ /vəˈkæbjəleri/ /ˈræðər/ /ðæn; ðən/ /ˈɡræmər/"
  },
  {
    "id": "6",
    "sentence": "Now , the fifth secret is to be patient , patient",
    "chinese": "现在，第五个秘诀是要有耐心，耐心",
    "pronunciation": "/naʊ/ /ðə/ /fɪfθ/ /ˈsiːkrət/ /ɪz/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ˈpeɪʃnt/"
  },
  {
    "id": "7",
    "sentence": "I see more frustrated language learners who get upset because they forget words",
    "chinese": "我看到许多因忘记单词而感到沮丧的语言学习者",
    "pronunciation": "/aɪ/ /siː/ /mɔːr/ /ˈfrʌstreɪtɪd/ /ˈlæŋɡwɪdʒ/ /ˈlɜrnərz/ /huː/ /ɡet/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /fərˈɡet/ /wɜːrdz/"
  },
  {
    "id": "8",
    "sentence": "They get upset because they don't understand",
    "chinese": "他们感到不安，因为他们不明白",
    "pronunciation": "/ðeɪ/ /ɡet/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /ðeɪ/ /doʊnt/ /ˌʌndərˈstænd/"
  },
  {
    "id": "9",
    "sentence": "Even after listening many , many times to the same content , certain parts of it they just don't understand or they watch a movie many times and they can't understand it",
    "chinese": "即使多次反复听同一段内容，他们仍然无法理解其中的某些部分；或者他们多次观看同一部电影，却依然无法理解",
    "pronunciation": "/ˈiː.vən/ /ˈæftər/ /ˈlɪsnɪŋ/ /ˈmeni/ /ˈmeni/ /taɪmz/ /tuː; tə/ /ðə/ /seɪm/ /ˈkɑːntent/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ðeɪ/ /dʒʌst/ /doʊnt/ /ˌʌndərˈstænd/ /ɔr/ /ðeɪ/ /wɑːtʃ/ /ə; eɪ/ /ˈmuːvi/ /ˈmeni/ /taɪmz/ /ænd; ənd/ /ðeɪ/ /kænt/ /ˌʌndərˈstænd/ /ɪt/"
  },
  {
    "id": "10",
    "sentence": "Let me tell you , that is absolutely normal",
    "chinese": "让我告诉你，那绝对是正常的",
    "pronunciation": "/let/ /miː/ /tel/ /juː; jʊ/ /ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "11",
    "sentence": "You will have and continue to have times when you find it difficult to say what you want to say",
    "chinese": "你会有并且将继续会有一些时候，发现难以表达你想说的话",
    "pronunciation": "/juː; jʊ/ /wɪl/ /hæv/ /ænd; ənd/ /kənˈtɪnjuː/ /tuː; tə/ /hæv/ /taɪmz/ /wen/ /juː; jʊ/ /faɪnd/ /ɪt/ /ˈdɪfɪkəlt/ /tuː; tə/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/"
  },
  {
    "id": "12",
    "sentence": "Maybe the day before you felt you were doing very well and all of a sudden you can't say what you want to say and that is absolutely normal",
    "chinese": "也许前一天你还觉得自己做得很好，突然间却无法表达你想说的话，这完全是正常的",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /deɪ/ /bɪˈfɔr/ /juː; jʊ/ /felt/ /juː; jʊ/ /wɜːr; wər/ /ˈduːɪŋ/ /ˈveri/ /wel/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /juː; jʊ/ /kænt/ /seɪ/ /wʌt/ /juː; jʊ/ /wɑːnt/ /tuː; tə/ /seɪ/ /ænd; ənd/ /ðæt/ /ɪz/ /ˌæbsəˈluːtli/ /ˈnɔːrm(ə)l/"
  },
  {
    "id": "13",
    "sentence": "It's important to realize that the brain is constantly learning and there are a number of books that I've read about how the brain learns",
    "chinese": "重要的是要认识到，大脑一直在学习，而且我读过许多关于大脑如何学习的书籍",
    "pronunciation": "/ɪts/ /ɪmˈpɔːrt(ə)nt/ /tuː; tə/ /ˈrɪlˌaɪz/ /ðæt/ /ðə/ /breɪn/ /ɪz/ /ˈkɑːnstəntli/ /ˈlɜːrnɪŋ/ /ænd; ənd/ /ðer; ðər/ /ɑr/ /ə; eɪ/ /ˈnʌmbɚ/ /ʌv/ /bʊks/ /ðæt/ /aɪv/ /riːd/ /əˈbaʊt/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/"
  },
  {
    "id": "14",
    "sentence": "The brain will constantly learn and it's constantly changing and renewing itself",
    "chinese": "大脑会不断学习和变化，并不断自我更新",
    "pronunciation": "/ðə/ /breɪn/ /wɪl/ /ˈkɑːnstəntli/ /lɜːrn/ /ænd; ənd/ /ɪts/ /ˈkɑːnstəntli/ /ˈtʃeɪndʒɪŋ/ /ænd; ənd/ /rɪˈnuːɪŋ/ /ɪtˈself/"
  },
  {
    "id": "15",
    "sentence": "However , it does so on its own schedule , so just because you've studied something doesn't mean you're going to learn it",
    "chinese": "然而，学习是按照自己的节奏进行的，所以即使你已经学过某样东西，也不意味着你已经掌握了它",
    "pronunciation": "/haʊˈevər/ /ɪt/ /dʌz/ /soʊ/ /ɑːn/ /ɪts/ /oʊn/ /ˈskedʒuːl/ /soʊ/ /dʒʌst/ /bɪˈkəz, bɪˈkɔːz/ /juːv/ /ˈstʌdid/ /ˈsʌmθɪŋ/ /ˈdʌznt/ /miːn/ /jʊr/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /ɪt/"
  },
  {
    "id": "16",
    "sentence": "However , you have to be confident as you continue and persevere in your studies and that you're doing things you like to do , which in my case is listening and reading",
    "chinese": "然而，你必须在继续并坚持学习的过程中保持自信，并且做你喜欢做的事情，在我看来，那就是听和读",
    "pronunciation": "/haʊˈevər/ /juː; jʊ/ /hæv/ /tuː; tə/ /biː/ /ˈkɑːnfɪdənt/ /æz; əz/ /juː; jʊ/ /kənˈtɪnjuː/ /ænd; ənd/ /ˌpɜːrsəˈvɪr/ /ɪn/ /jʊr; jər/ /ˈstʌdiz/ /ænd; ənd/ /ðæt/ /jʊr/ /ˈduːɪŋ/ /θɪŋz/ /juː; jʊ/ /laɪk/ /tuː; tə/ /duː; də/ /wɪtʃ/ /ɪn/ /maɪ/ /keɪs/ /ɪz/ /ˈlɪsnɪŋ/ /ænd; ənd/ /ˈriːdɪŋ/"
  },
  {
    "id": "17",
    "sentence": "Even if I'm talking to people , of course I'm listening and I'm noticing",
    "chinese": "即使我在与人交谈，当然我也在倾听和注意",
    "pronunciation": "/ˈiː.vən/ /ɪf/ /aɪm/ /ˈtɔːkɪŋ/ /tuː; tə/ /ˈpipl/ /ʌv/ /kɔːrs/ /aɪm/ /ˈlɪsnɪŋ/ /ænd; ənd/ /aɪm/ /ˈnoʊtɪsɪŋ/"
  },
  {
    "id": "18",
    "sentence": "All of this is gradually improving my capability in the language , so you have to accept that and it's not going to be overnight",
    "chinese": "所有这些都在逐步提升我的语言能力，所以你必须接受这一点，这不会是一蹴而就的",
    "pronunciation": "/ɔːl/ /ʌv/ /ðɪs/ /ɪz/ /ˈɡrædʒuəli/ /ɪmˈpruːvɪŋ/ /maɪ/ /ˌkeɪpəˈbɪləti/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /soʊ/ /juː; jʊ/ /hæv/ /tuː; tə/ /əkˈsept/ /ðæt/ /ænd; ənd/ /ɪts/ /nɑːt/ /ˈɡoʊɪŋ/ /tuː; tə/ /biː/ /ˌoʊvərˈnaɪt/"
  },
  {
    "id": "19",
    "sentence": "It may take six months for certain things to sink in , but all of a sudden they do",
    "chinese": "某些事情可能需要六个月的时间才能真正理解，但突然间它们就会变得清晰",
    "pronunciation": "/ɪt/ /meɪ/ /teɪk/ /sɪks/ /mʌnθs/ /fɔːr; fər/ /ˈsɜːrt(ə)n/ /θɪŋz/ /tuː; tə/ /sɪŋk/ /ɪn/ /bʌt/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /ðeɪ/ /duː; də/"
  },
  {
    "id": "20",
    "sentence": "Almost without realizing it and I've had this feeling , I'll go back to a text that I struggled with two-three months , four months earlier and it seemed that I never made any progress , I could never understand certain parts of it and all of a sudden lo and behold ! it's crystal clear to me",
    "chinese": "几乎在不知不觉中（我有过这种感觉），我会回到两三个月前、四个月前让我感到困扰的文本，当时似乎我从未取得任何进展，我永远无法理解其中的某些部分，但突然间，瞧！它对我来说变得清晰透彻了",
    "pronunciation": "/ˈɔːlmoʊst/ /wɪˈðaʊt/ /ˈriːəlaɪzɪŋ/ /ɪt/ /ænd; ənd/ /aɪv/ /hæd/ /ðɪs/ /ˈfiːlɪŋ/ /aɪl/ /ɡoʊ/ /bæk/ /tuː; tə/ /ə; eɪ/ /tekst/ /ðæt/ /aɪ/ /ˈstrʌɡld/ /wɪð; wɪθ/ /tu θri/ /mʌnθs/ /fɔr/ /mʌnθs/ /ˈɜːrliər/ /ænd; ənd/ /ɪt/ /siːmd/ /ðæt/ /aɪ/ /ˈnev.ɚ/ /meɪd/ /ˈeni/ /ˈprɑːɡres/ /aɪ/ /kʊd/ /ˈnev.ɚ/ /ˌʌndərˈstænd/ /ˈsɜːrt(ə)n/ /pɑːrts/ /ʌv/ /ɪt/ /ænd; ənd/ /ɔːl/ /ʌv/ /ə; eɪ/ /ˈsʌdən/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /ɪts/ /ˈkrɪst(ə)l/ /klɪr/ /tuː; tə/ /miː/"
  },
  {
    "id": "21",
    "sentence": "Similarly , in speaking you have these moments of great triumph when you were in a discussion and lo and behold ! you were able to express your ideas just the way you wanted to or almost",
    "chinese": "同样，在说话时，你也会有这些伟大的胜利时刻，当你参与讨论时，瞧！你能够以你想要的方式或几乎以你想要的方式表达你的想法",
    "pronunciation": "/ˈsɪmələrli/ /ɪn/ /ˈspiːkɪŋ/ /juː; jʊ/ /hæv/ /ðiːz/ /ˈmoʊmənts/ /ʌv/ /ɡreɪt/ /ˈtraɪʌmf/ /wen/ /juː; jʊ/ /wɜːr; wər/ /ɪn/ /ə; eɪ/ /dɪˈskʌʃn/ /ænd; ənd/ /loʊ/ /ænd; ənd/ /bɪˈhoʊld/ /juː; jʊ/ /wɜːr; wər/ /ˈeɪb(ə)l/ /tuː; tə/ /ɪkˈspres/ /jʊr; jər/ /aɪˈdɪəz/ /dʒʌst/ /ðə/ /weɪ/ /juː; jʊ/ /ˈwɑːntɪd/ /tuː; tə/ /ɔr/ /ˈɔːlmoʊst/"
  },
  {
    "id": "22",
    "sentence": "Maybe the next day you won't be so successful , but it's a very gradual process",
    "chinese": "也许第二天你不会那么成功，但这是一个非常渐进的过程",
    "pronunciation": "/ˈmeɪbi/ /ðə/ /nekst/ /deɪ/ /juː; jʊ/ /woʊnt/ /biː/ /soʊ/ /səkˈsesf(ə)l/ /bʌt/ /ɪts/ /ə; eɪ/ /ˈveri/ /ˈɡrædʒuəl/ /ˈprɑːses/"
  },
  {
    "id": "23",
    "sentence": "It's not obvious which words or which structures in the language the brain is going to learn first or later , so you just have to be patient and you have to believe that what you're doing is going to lead to the desired result",
    "chinese": "在语言学习中，大脑会先学习哪些词汇或结构并不明显，因此你需要保持耐心，并相信你所做的努力最终会带来期望的结果",
    "pronunciation": "/ɪts/ /nɑːt/ /ˈɑːbviəs/ /wɪtʃ/ /wɜːrdz/ /ɔr/ /wɪtʃ/ /ˈstrʌktʃərz/ /ɪn/ /ðə/ /ˈlæŋɡwɪdʒ/ /ðə/ /breɪn/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /lɜːrn/ /fɜːrst/ /ɔr/ /ˈleɪtər/ /soʊ/ /juː; jʊ/ /dʒʌst/ /hæv/ /tuː; tə/ /biː/ /ˈpeɪʃnt/ /ænd; ənd/ /juː; jʊ/ /hæv/ /tuː; tə/ /bɪˈliːv/ /ðæt/ /wʌt/ /jʊr/ /ˈduːɪŋ/ /ɪz/ /ˈɡoʊɪŋ/ /tuː; tə/ /liːd/ /tuː; tə/ /ðə/ /dɪˈzɪrd/ /rɪˈzʌlt/"
  },
  {
    "id": "24",
    "sentence": "Anytime you get frustrated , upset , because you forgot something or because you don't understand something , all these negative thoughts are very damaging to the learning process",
    "chinese": "每当你因为忘记某事或不理解某事而感到沮丧、难过时，这些负面情绪都会对学习过程造成极大的损害",
    "pronunciation": "/ˈænitaɪm/ /juː; jʊ/ /ɡet/ /ˈfrʌstreɪtɪd/ /ˌʌpˈset/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /fərˈɡɑːt/ /ˈsʌmθɪŋ/ /ɔr/ /bɪˈkəz, bɪˈkɔːz/ /juː; jʊ/ /doʊnt/ /ˌʌndərˈstænd/ /ˈsʌmθɪŋ/ /ɔːl/ /ðiːz/ /ˈneɡətɪv/ /θɔːts/ /ɑr/ /ˈveri/ /ˈdæmɪdʒɪŋ/ /tuː; tə/ /ðə/ /ˈlɜːrnɪŋ/ /ˈprɑːses/"
  },
  {
    "id": "25",
    "sentence": "Again , I'm not a neuroscientist , but there is so much emotion in how the brain learns that it's very important not to get negative and to be patient",
    "chinese": "再次强调，我并非神经科学家，但大脑学习过程中的情感因素极为丰富，因此保持积极态度并保持耐心非常重要",
    "pronunciation": "/əˈɡen/ /aɪm/ /nɑːt/ /ə; eɪ/ /ˈnʊroʊsaɪəntɪst/ /bʌt/ /ðer; ðər/ /ɪz/ /soʊ/ /mʌtʃ/ /ɪˈmoʊʃ(ə)n/ /ɪn/ /haʊ/ /ðə/ /breɪn/ /lɜːrz/ /ðæt/ /ɪts/ /ˈveri/ /ɪmˈpɔːrt(ə)nt/ /nɑːt/ /tuː; tə/ /ɡet/ /ˈneɡətɪv/ /ænd; ənd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "26",
    "sentence": "Realize that it's a long road , hopefully an enjoyable road , but one that will definitely lead to fluency in that language",
    "chinese": "要明白这是一条漫长的道路，希望是一条愉快的道路，但它一定会带你走向那种语言的流利",
    "pronunciation": "/ˈrɪlˌaɪz/ /ðæt/ /ɪts/ /ə; eɪ/ /lɔːŋ/ /roʊd/ /ˈhoʊpfəli/ /æn; ən/ /ɪnˈdʒɔɪəb(ə)l/ /roʊd/ /bʌt/ /wʌn/ /ðæt/ /wɪl/ /ˈdefɪnətli/ /liːd/ /tuː; tə/ /ˈfluːənsi/ /ɪn/ /ðæt/ /ˈlæŋɡwɪdʒ/"
  },
  {
    "id": "27",
    "sentence": "Fluency need not mean perfection , so if you don't expect perfection but you do expect to constantly improve , then I think you can afford to be patient",
    "chinese": "流利并不意味着完美，所以如果你不追求完美，但确实期望不断进步，那么我认为你可以保持耐心",
    "pronunciation": "/ˈfluːənsi/ /niːd/ /nɑːt/ /miːn/ /pərˈfekʃən/ /soʊ/ /ɪf/ /juː; jʊ/ /doʊnt/ /ɪkˈspekt/ /pərˈfekʃən/ /bʌt/ /juː; jʊ/ /duː; də/ /ɪkˈspekt/ /tuː; tə/ /ˈkɑːnstəntli/ /ɪmˈpruːv/ /ðen/ /aɪ/ /θɪŋk/ /juː; jʊ/ /kæn/ /əˈfɔːrd/ /tuː; tə/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "28",
    "sentence": "So that's my fifth secret , be patient",
    "chinese": "所以，我的第五个秘诀是，保持耐心",
    "pronunciation": "/soʊ/ /ðæts/ /maɪ/ /fɪfθ/ /ˈsiːkrət/ /biː/ /ˈpeɪʃnt/"
  },
  {
    "id": "29",
    "sentence": "Thank you for listening",
    "chinese": "谢谢您的聆听",
    "pronunciation": "/θæŋk/ /juː; jʊ/ /fɔːr; fər/ /ˈlɪsnɪŋ/"
  },
];
