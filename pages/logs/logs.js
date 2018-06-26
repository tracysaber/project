//logs.js
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    userInfo:{},
    hasUserInfo:false,
    index:1,
    scores:0,
    ten:[],
    titles: ["中国共产党第十九次全国代表大会，是在全面建成小康社会决胜阶段、中国特色社会主义进入_____的关键时期召开的一次十分重要的大会。", 
    "十九大的主题是：不忘初心，____，高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。", 
    "中国共产党人的初心和使命，就是为中国人民____ ，为中华民族____。这个初心和使命是激励中国共产党人不断前进的根本动力。", 
    "五年来，我们统筹推进“____”总体布局、协调推进“____”战略布局，“十二五”规划胜利完成，“十三五”规划顺利实施，党和国家事业全面开创新局面。", 
    "过去五年，经济保持中高速增长，在世界主要国家中名列前茅，国内生产总值从五十四万亿元增长到____万亿元，稳居世界第二，对世界经济增长贡献率超过百分之三十。", 
    "脱贫攻坚战取得决定性进展，____贫困人口稳定脱贫，贫困发生率从百分之十点二下降到百分之四以下。", 
    "实施共建“一带一路”倡议，发起创办亚洲基础设施投资银行，设立丝路基金，举办首届“一带一路”国际合作高峰论坛、亚太经合组织领导人非正式会议、二十国集团领导人____峰会、金砖国家领导人____会晤、亚信峰会。", 
    "经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的____。", 
    "中国特色社会主义进入新时代，我国社会主要矛盾已经转化为人民日益增长的____需要和____的发展之间的矛盾。",
      "_____是实现社会主义现代化、创造人民美好生活的必由之路。","_____是指导党和人民实现中华民族伟大复兴的正确理论。",
      "新时代中国特色社会主义思想，明确坚持和发展中国特色社会主义，总任务是实现社会主义现代化和中华民族伟大复兴，在全面建成小康社会的基础上，分____在本世纪中叶建成富强民主文明和谐美丽的社会主义现代化强国。",
      "新时代中国特色社会主义思想，明确中国特色社会主义最本质的特征是____。",
      "发展是解决我国一切问题的基础和关键，发展必须是科学发展，必须坚定不移贯彻____的发展理念。",
      "____是中国特色社会主义的本质要求和重要保障。",
      "____是一个国家、一个民族发展中更基本、更深沉、更持久的力量。",
      "必须统筹国内国际两个大局，始终不渝走和平发展道路、奉行____的开放战略。",
      "从____到____，是“两个一百年”奋斗目标的历史交汇期。",
      "实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦，不断提高人民生活水平，必须坚定不移把_____作为党执政兴国的第一要务。",
      "我国经济已由______阶段转向______阶段，正处在转变发展方式、优化经济结构、转换增长动力的攻关期，建设现代化经济体系是跨越关口的迫切要求和我国发展的战略目标。"],
    choices: [
    "新时期#新时代", 
    "牢记使命#砥砺前行", 
    "谋幸福，谋未来#谋幸福，谋复兴", 
    "五位一体四个全面#四位一体五个全面",
    "八十#九十", 
    "六千多万#七千多万", 
    "杭州 厦门#厦门 杭州", 
    "未来方位#历史方位", 
    "幸福生活不平衡不充分#美好生活不平衡不充分", 
    "中国特色社会主义道路#中国特色社会主义制度",
    "中国特色社会主义道路#中国特色社会主义理论体系",
    "两步走#三步走",
    "人民利益为根本出发点#中国共产党领导",
    "创新、协调、绿色、开放、共享#创造、协调、生态、开放、共享",
    "全面依法治国#全面可持续发展",
    "道路自信#文化自信",
    "互利共赢#开放共赢",
    "二〇二〇年  二〇三五年#十九大 二十大",
    "创新#发展",
    "高速增长高水平发展#高速增长高质量发展"],
    answers:['2','1','2','1','1','1','1','1','2','1','2','1','2','1','1','2','2','2','2','2'],
  },
  buttonClick: function (event) {
    this.data.index++;
    if(this.data.index<=10){
      //console.log(this.data.subjects[this.data.index-1]);
      // console.log(event.currentTarget.id);
      // console.log(this.data.answers[this.data.index - 1]);
      if (event.currentTarget.id == this.data.answers[this.data.ten[this.data.index-1]]){
        this.data.scores++;
        console.log(this.data.scores);
      }
      var choices = this.data.choices[this.data.ten[this.data.index - 1]].split("#");
      this.setData({
        subject: this.data.titles[this.data.ten[this.data.index - 1]],
        index:this.data.index,
        choice1:choices[0],
        choice2:choices[1],
        scores:this.data.scores
      })
    }
    else{
      wx.navigateTo({
        url: '../score/score?scores='+this.data.scores
      })
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else{
      this.setData({
        userInfo: { nickName: "同志", avatarUrl:""}
      })
    }
    for(var i=0;i<10;i++){
      this.data.ten[i] = Math.floor(Math.random() * 20 );
    }
    console.log(this.data.ten);
    var choices  = this.data.choices[this.data.ten[0]].split("#");
    this.setData({
      subject: this.data.titles[this.data.ten[0]],
      index:this.data.index,
      choice1:choices[0],
      choice2:choices[1]
    })
   
  }
})
