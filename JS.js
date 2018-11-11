data = [
    {
        "name": "小不點",
        "color": "黑色",
        "body": "壯碩",
        "ear": "立耳",
        "tail": "直尾",
        "collar": "黑",
        "other": ""
    },
    {
        "name": "大不點",
        "color": "黑色",
        "body": "一般",
        "ear": "立耳",
        "tail": "直尾",
        "collar": "藍",
        "other": "胸前有白毛"
    },
    {
        "name": "小碳",
        "color": "黑色",
        "body": "纖細",
        "ear": "半立耳",
        "tail": "捲尾",
        "collar": "吉樂帶",
        "other": "身上有小搓雜白毛"
    },
    {
        "name": "長尾",
        "color": "黑色",
        "body": "壯碩",
        "ear": "垂耳",
        "tail": "直尾",
        "collar": "藍",
        "other": ""
    },
    {
        "name": "歐歐",
        "color": "黑色",
        "body": "一般",
        "ear": "立耳",
        "tail": "直尾",
        "collar": "紅",
        "other": ""
    },
    {
        "name": "冒失鬼",
        "color": "黑色",
        "body": "一般",
        "ear": "立耳",
        "tail": "直尾",
        "collar": "紅",
        "other": "毛帶紅棕色"
    },
    {
        "name": "黑妹",
        "color": "黑色",
        "body": "一般",
        "ear": "立耳",
        "tail": "直尾",
        "collar": "藍",
        "other": ""
    }
]

let sent = document.querySelector('.sent')   //最後確認要篩選條件

var color_btn = document.querySelector('.color_btn')
var color = document.querySelectorAll('.color li')
let nowcolor
for(let x of color){
    x.addEventListener('click',function(){
        nowcolor = x.textContent;
        color_btn.textContent = nowcolor;
        console.log(nowcolor);
    })
}

var ear = document.querySelectorAll('.ear li')
var ear_btn = document.querySelector('.ear_btn')
let nowear
for(let y of ear){
    y.addEventListener('click',function(){
        nowear = y.textContent;
        ear_btn.textContent = nowear;
        console.log(nowear)
    })
}

var tail = document.querySelectorAll('.tail li')
var tail_btn = document.querySelector('.tail_btn')
let nowtail
for(let y of tail){
    y.addEventListener('click',function(){
        nowtail = y.textContent;
        tail_btn.textContent = nowtail;
        console.log(nowtail)
    })
}


var collar = document.querySelectorAll('.collar li')
var collar_btn = document.querySelector('.collar_btn')
let nowcollar
for(let x of collar){
    x.addEventListener('click',function(){
        nowcollar = x.textContent;
        collar_btn.textContent = nowcollar;
    })
}

var other = document.querySelectorAll('.other li')
var other_btn = document.querySelector('.other_btn')
let nowother
for(let x of other){
    x.addEventListener('click',function(){
        nowother = x.textContent;
        other_btn.textContent = nowother;
    })
}
