var count=0;
window.onload=function(){
    const time = setInterval(function () {
        let box = document.getElementsByClassName('heart');
        let div = document.createElement('div');
        let i = document.createElement('i');
        i.className = "myheart";
        div.className = "container";
        div.style.top = Math.ceil(Math.random() * 80)+ "%";
        div.style.left = Math.ceil(Math.random() * 80)+ "%";
        div.appendChild(i);
        box[0].appendChild(div);
        count ++;
        sum(time);
    }, 500);
};
function sum(time){
    if(count>10){
        clearInterval(time);
    }
}