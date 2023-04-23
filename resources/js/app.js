function bar(id_bar){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_bar.appendChild(div);
    }
}

//creating the bar 
function createBar(id_bar){
    for(i=0;i<=10;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_bar.appendChild(div);
    }
}
//select the bars
let html = document.getElementById("html");
createBar(html);
let javascript = document.getElementById("javascript");
createBar(javascript);
let java = document.getElementById("java");
createBar(java);
let git = document.getElementById("git");
createBar(git);
let sql = document.getElementById("sql");
createBar(sql);
let node = document.getElementById("node");
createBar(node);

let counter = [-1,-1,-1,-1,-1,-1];
//this variable is used as a flag to see if it works
let whole = false;

//appling animations
function skillEfect(){
    var skill = document.getElementById("skill");
    var distance_skill = window.innerHeight - skill.getBoundingClientRect().top;
    if(distance_skill>=300 && whole==false){
        whole = true;
        const intervalHtml = setInterval(function(){
            fillBar(html, 8, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            fillBar(javascript, 6, 1, intervalJavascript);
        },100);
        const intervalJava = setInterval(function(){
            fillBar(java, 8, 2, intervalJava);
        },100);
        const intervalGit = setInterval(function(){
            fillBar(git, 8, 3, intervalGit);
        },100);
        const intervalSql = setInterval(function(){
            fillBar(sql, 8, 4, intervalSql);
        },100);
        const intervalNode = setInterval(function(){
            fillBar(node, 7, 5, intervalNode);
        },100);
    }
}

//filling uo the bars
function fillBar(id_bar, quantity, indx, interval){
    counter[indx]++;
    x = counter[indx];
    if(x < quantity){
        let elements = id_bar.getElementsByClassName("e");
        elements[x].style.backgroundColor = "#3df505e1";
    }else{
        clearInterval(interval)
    }
}

//detecting the scrolling of the mouse to aply the animation
window.onscroll = function(){
    skillEfect();
}