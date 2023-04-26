let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop;
        let height = sec.offsetHeight - 150;
        let id = sec.getAttribute("id");

        if (top >= offSet && top < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");

            });
    
        }
    });

}

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
        },300);
        const intervalJavascript = setInterval(function(){
            fillBar(javascript, 6, 1, intervalJavascript);
        },400);
        const intervalJava = setInterval(function(){
            fillBar(java, 8, 2, intervalJava);
        },300);
        const intervalGit = setInterval(function(){
            fillBar(git, 8, 3, intervalGit);
        },300);
        const intervalSql = setInterval(function(){
            fillBar(sql, 8, 4, intervalSql);
        },300);
        const intervalNode = setInterval(function(){
            fillBar(node, 7, 5, intervalNode);
        },400);
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
        counter[indx] = -1;
        let elements = id_bar.getElementsByClassName("e");
        for(i=0;i<quantity;i++){
            elements[i].style.backgroundColor = "";
        }
    }
}
//detecting the scrolling of the mouse to aply the animation
window.onscroll = function(){
    skillEfect();
}