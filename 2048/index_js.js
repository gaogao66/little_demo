var td,grade=0;
var flag=[0,0],count=0;
window.onload=function(){
    putTwo();
};
function putTwo(){
    td=document.querySelectorAll('td');
    var first,second;
    while(1){
        first=Math.floor(Math.random()*15);
        second=Math.floor(Math.random()*15);
        if(first!==second){
            td[first].innerText=2;
            td[second].innerText=2;
            break;
        }
    }
}

function produceTwo(){
    while(1){
        var Two=Math.floor(Math.random()*16);
        if(!td[Two].innerText){
            td[Two].innerText=2;
            break;
        }
    }
}
function getcount(){
    count=0;
    for(var i=0;i<td.length;i++){
        if(td[i].innerText!=""){
            count+=1;
            // console.log(td[i].innerText);
        }
    }
}
document.onkeydown=function(event){
    console.log(flag);
    if((count<td.length/2&&(!flag[0]&&!flag[1]))||count<td.length){
        produceTwo();
    }
    if(event.keyCode==37){//left
        handle_left();
        getcount();
    }
    if(event.keyCode==38){//up
        handle_up();
        getcount();
    }
    if(event.keyCode==39){//right
        handle_right();
        getcount();
    }
    if(event.keyCode==40){//down
        handle_down();
        getcount();
    }
    score();
}
function handle_left() {
    for (var i = 0; i < td.length;) {
        var arrnull = [];
        for (var j = i; j < i + 4; j++) {
            if (td[j].innerText&&Number(td[j].innerText)) {
                arrnull.push(j);
            }
        }
        if (arrnull) {
            flag[0]=0;
            for (var k = 0, j = i; j < i + 4; k++, j++) {
                if (k < arrnull.length) {
                    td[j].innerText = td[arrnull[k]].innerText;
                    // console.log(td[arrnull[k]].innerText);
                } else {
                    td[j].innerText = "";
                }
            }
            if (arrnull.length === 2) {
                j = i;
                if (td[j].innerText === td[j + 1].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j + 1].innerText = "";
                    grade+=Number(td[j].innerText);
                }
            }
            if (arrnull.length === 3) {
                j = i;
                if (td[j].innerText === td[j + 1].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j + 1].innerText = td[j + 2].innerText;
                    td[j + 2].innerText = "";
                    grade+=Number(td[j].innerText);
                }
                if (td[j].innerText !== td[j + 1].innerText && td[j + 1].innerText === td[j + 2].innerText) {
                    td[j + 1].innerText =Number(td[j+1].innerText)*2;
                    td[j + 2].innerText = "";
                    grade+=Number(td[j+1].innerText);
                }
            }
            if (arrnull.length === 4) {
                j = i;
                if (td[j].innerText === td[j + 1].innerText && td[j + 2].innerText === td[j + 3].innerText) {
                    td[j].innerText =Number(td[j].innerText) * 2;
                    td[j + 1].innerText = Number(td[j + 2].innerText) * 2;
                    td[j + 2].innerText = "";
                    td[j + 3].innerText = "";
                    grade+=Number(td[j].innerText);
                    grade+=Number(td[j+1].innerText);
                }
                if (td[j].innerText === td[j + 1].innerText && td[j + 2].innerText !== td[j + 3].innerText) {
                    td[j].innerText =Number(td[j].innerText) * 2;
                    td[j + 1].innerText = td[j + 2].innerText;
                    td[j + 2].innerText = td[j + 3].innerText;
                    td[j + 3].innerText = "";
                    grade+=Number(td[j].innerText);
                }
                if (td[j].innerText !== td[j + 1].innerText && td[j + 1].innerText === td[j + 2].innerText) {
                    td[j + 1].innerText =Number(td[j+1].innerText) * 2;
                    td[j + 2].innerText =td[j+3].innerText;
                    td[j+3].innerText="";
                    grade+=Number(td[j+1].innerText);
                }
                if (td[j].innerText !== td[j + 1].innerText && td[j + 1].innerText !== td[j + 2].innerText) {
                    if(td[j+2].innerText===td[j+3].innerText){
                        td[j + 2].innerText =Number(td[j+2].innerText) * 2;
                        td[j + 3].innerText = "";
                        grade+=Number(td[j+2].innerText);
                    }
                    else{
                        flag[0]=1;
                    }
                }
            }
        }
        i += 4;
    }
}
function handle_up(){
    for(var i=0;i<4;i++) {
        var arrnull = [];
        for (var j = i; j < td.length;) {
            if (td[j].innerText) {
                arrnull.push(j);
            }
            j += 4;
        }
        if (arrnull) {
            flag[1]=0;
            for (var k = 0, j = i; j < td.length; k++) {
                if (k < arrnull.length) {
                    td[j].innerText = td[arrnull[k]].innerText;
                } else {
                    td[j].innerText = "";
                }
                j += 4;
            }
            if (arrnull.length === 2) {
                j = i;
                if (td[j].innerText === td[j + 4].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j + 4].innerText = "";
                    grade+=Number(td[j].innerText);
                }
            }
            if (arrnull.length === 3) {
                j = i;
                if (td[j].innerText === td[j + 4].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j + 4].innerText = td[j + 8].innerText;
                    td[j + 8].innerText = "";
                    grade+=Number(td[j].innerText);
                }
                if (td[j].innerText !== td[j + 4].innerText && td[j + 4].innerText === td[j + 8].innerText) {
                    td[j + 4].innerText = Number(td[j + 4].innerText) * 2;
                    td[j + 8].innerText = "";
                    grade+=Number(td[j+4].innerText);
                }
            }
            if (arrnull.length === 4) {
                j = i;
                if (td[j].innerText === td[j + 4].innerText && td[j + 2 * 4].innerText === td[j + 3 * 4].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j + 1 * 4].innerText = Number(td[j + 2 * 4].innerText) * 2;
                    td[j + 2 * 4].innerText = "";
                    td[j + 3 * 4].innerText = "";
                    grade+=Number(td[j].innerText);
                    grade+=Number(td[j + 1 * 4].innerText);
                }
                if (td[j].innerText === td[j + 1 * 4].innerText && td[j + 2 * 4].innerText !== td[j + 3 * 4].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j + 1 * 4].innerText = td[j + 2 * 4].innerText;
                    td[j + 2 * 4].innerText = td[j + 3 * 4].innerText;
                    td[j + 3 * 4].innerText = "";
                    grade+=Number(td[j].innerText);
                }
                if (td[j].innerText !== td[j + 1*4].innerText && td[j + 1*4].innerText === td[j + 2*4].innerText) {
                    td[j + 1*4].innerText =Number(td[j+1*4].innerText) * 2;
                    td[j + 2*4].innerText =td[j+3*4].innerText;
                    td[j+3*4].innerText="";
                    grade+=Number(td[j + 1 * 4].innerText);
                }
                if (td[j].innerText !== td[j + 1*4].innerText && td[j + 1*4].innerText !== td[j + 2*4].innerText) {
                    if(td[j+2*4].innerText===td[j+3*4].innerText){
                        td[j + 2*4].innerText =Number(td[j+2*4].innerText) * 2;
                        td[j + 3*4].innerText = "";
                        grade+=Number(td[j + 2 * 4].innerText);
                    }
                    else{
                        flag[1]=1;
                    }
                }
            }
        }
    }
}
function handle_right(){
    for (var i = td.length-1; i>-1;) {
        var arrnull = [];
        for (var j = i; j> i - 4; j--) {
            if (td[j].innerText) {
                arrnull.push(j);
            }
        }
        if (arrnull) {
            for (var k = 0, j = i; j > i - 4; k++, j--) {
                if (k < arrnull.length) {
                    td[j].innerText = td[arrnull[k]].innerText;
                    // console.log(td[arrnull[k]].innerText);
                } else {
                    td[j].innerText = "";
                }
            }
            if (arrnull.length === 2) {
                j = i;
                if (td[j].innerText === td[j - 1].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j - 1].innerText = "";
                    grade+=Number(td[j].innerText);
                }
            }
            if (arrnull.length === 3) {
                j = i;
                if (td[j].innerText === td[j - 1].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j - 1].innerText = td[j - 2].innerText;
                    td[j - 2].innerText = "";
                    grade+=Number(td[j].innerText);
                }
                if (td[j].innerText !== td[j - 1].innerText && td[j - 1].innerText === td[j - 2].innerText) {
                    td[j - 1].innerText =Number(td[j-1].innerText)*2;
                    td[j - 2].innerText = "";
                    grade+=Number(td[j-1].innerText);
                }
            }
            if (arrnull.length === 4) {
                j = i;
                if (td[j].innerText === td[j - 1].innerText && td[j - 2].innerText === td[j - 3].innerText) {
                    td[j].innerText =Number(td[j].innerText) * 2;
                    td[j - 1].innerText = Number(td[j - 2].innerText) * 2;
                    td[j - 2].innerText = "";
                    td[j - 3].innerText = "";
                    grade+=Number(td[j].innerText);
                    grade+=Number(td[j-1].innerText);
                }
                if (td[j].innerText === td[j - 1].innerText && td[j - 2].innerText !== td[j - 3].innerText) {
                    td[j].innerText =Number(td[j].innerText) * 2;
                    td[j - 1].innerText = td[j - 2].innerText;
                    td[j - 2].innerText = td[j - 3].innerText;
                    td[j - 3].innerText = "";
                    grade+=Number(td[j].innerText);
                }
                if (td[j].innerText !== td[j - 1].innerText && td[j - 1].innerText === td[j - 2].innerText) {
                    td[j - 1].innerText =Number(td[j-1].innerText) * 2;
                    td[j - 2].innerText =td[j-3].innerText;
                    td[j-3].innerText="";
                    grade+=Number(td[j-1].innerText);
                }
                if (td[j].innerText !== td[j - 1].innerText && td[j - 1].innerText !== td[j - 2].innerText) {
                    if(td[j-2].innerText===td[j-3].innerText){
                        td[j - 2].innerText =Number(td[j-2].innerText) * 2;
                        td[j - 3].innerText = "";
                        grade+=Number(td[j-2].innerText);
                    }
                }
            }
        }
        i -= 4;
    }
}
function handle_down(){
    for(var i=td.length-1;i>11;i--) {
        var arrnull = [];
        for (var j = i; j >-1;) {
            if (td[j].innerText) {
                arrnull.push(j);
            }
            j -= 4;
        }
        if (arrnull) {
            for (var k = 0, j = i; j >-1; k++) {
                if (k < arrnull.length) {
                    td[j].innerText = td[arrnull[k]].innerText;
                } else {
                    td[j].innerText = "";
                }
                j -= 4;
            }
            if (arrnull.length === 2) {
                j = i;
                if (td[j].innerText === td[j - 4].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j - 4].innerText = "";
                    grade+=Number(td[j].innerText);
                }
            }
            if (arrnull.length === 3) {
                j = i;
                if (td[j].innerText === td[j - 4].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j - 4].innerText = td[j - 8].innerText;
                    td[j - 8].innerText = "";
                    grade+=Number(td[j].innerText);
                }
                if (td[j].innerText !== td[j - 4].innerText && td[j - 4].innerText === td[j - 8].innerText) {
                    td[j - 4].innerText = Number(td[j - 4].innerText) * 2;
                    td[j - 8].innerText = "";
                    grade+=Number(td[j-4].innerText);
                }
            }
            if (arrnull.length === 4) {
                j = i;
                if (td[j].innerText === td[j - 4].innerText && td[j - 2 * 4].innerText === td[j - 3 * 4].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j - 1 * 4].innerText = Number(td[j - 2 * 4].innerText) * 2;
                    td[j - 2 * 4].innerText = "";
                    td[j - 3 * 4].innerText = "";
                    grade+=Number(td[j].innerText);
                    grade+=Number(td[j - 1 * 4].innerText);
                }
                if (td[j].innerText === td[j - 1 * 4].innerText && td[j - 2 * 4].innerText !== td[j - 3 * 4].innerText) {
                    td[j].innerText = Number(td[j].innerText) * 2;
                    td[j - 1 * 4].innerText = td[j - 2 * 4].innerText;
                    td[j - 2 * 4].innerText = td[j - 3 * 4].innerText;
                    td[j - 3 * 4].innerText = "";
                    grade+=Number(td[j].innerText);
                }
                if (td[j].innerText !== td[j - 1*4].innerText && td[j - 1*4].innerText === td[j - 2*4].innerText) {
                    td[j - 1*4].innerText =Number(td[j-1*4].innerText) * 2;
                    td[j - 2*4].innerText =td[j-3*4].innerText;
                    td[j-3*4].innerText="";
                    grade+=Number(td[j - 1 * 4].innerText);
                }
                if (td[j].innerText !== td[j - 1*4].innerText && td[j - 1*4].innerText !== td[j - 2*4].innerText) {
                    if(td[j-2*4].innerText===td[j-3*4].innerText){
                        td[j - 2*4].innerText =Number(td[j-2*4].innerText) * 2;
                        td[j - 3*4].innerText = "";
                        grade+=Number(td[j - 2 * 4].innerText);
                    }
                }
            }
        }
    }
}
function newgame(){
    for(var i=0;i<td.length;i++){
        td[i].innerText="";
    }
    putTwo();
}
function score(){
    var myscore=document.getElementById('myscore');
    myscore.innerText=grade;
    var result=document.getElementsByClassName("result");
    if(grade==2048){
        gamedone(result);
    }else{
        gameover(result);
    }
}
function gamedone(result){
    var p=document.getElementById("endshow");
    result[0].style.display="block";
    p.innerText="Congratulations you win!";
}
function gameover(result){
    if(flag[0]&&flag[1]&&count==16){
        var p=document.getElementById("endshow");
        result[0].style.display="block";
        p.innerText="Game over!";
    }
}