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

let sent = document.querySelector('.sent')
var color_btn = document.querySelector('.color_btn')
var color = document.querySelectorAll('.color')
var ear = document.querySelectorAll('.ear')
var tail = document.querySelectorAll('tail')
var collar = document.querySelectorAll('collar')
var other = document.querySelectorAll('other')
var nowcolor;
for(let x of color){
    x.addEventListener('click',function (){
        nowcolor = x.value;
        color_btn.textContent = nowcolor;
    })
}

console.log(nowcolor)