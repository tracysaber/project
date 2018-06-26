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
      "_____是实现社会主义现代化、创造人民美好生活的必由之路。","_____是指导党和人民实现中华民族伟大复兴的正确理论。"],
    choices: [
    "新时期#新时代", 
    "牢记使命#砥砺前行", 
    "谋幸福，谋未来#谋幸福，谋复兴", 
    "五位一体四个全面#四位一体五个全面",
    "八十#九十", 
    "六千多万#七千多万", 
    "杭州厦门#厦门杭州", 
    "未来方位#历史方位", 
    "幸福生活不平衡不充分#美好生活不平衡不充分", 
    "中国特色社会主义道路#中国特色社会主义制度",
    "中国特色社会主义道路#中国特色社会主义理论体系"],
    answers:['2','1','2','1','1','1','1','1','2','1','2'],
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
      this.data.ten[i] = Math.floor(Math.random() * 10 );
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
