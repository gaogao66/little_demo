window.onload=function(){
    waterfull('main','box');
}
function getclass(parent,className){
    var element=parent[0].getElementsByTagName('*');
    var arr=new Array();

    for(var i=0;i<element.length;i++){
        // console.log(element[i].className);
        if(element[i].className===className){
            arr.push(element[i]);
        }
    }
    return arr;
}
function waterfull(parent,child){
    var oparent=document.getElementsByClassName(parent);
    var arr=getclass(oparent,child);
    //列宽
    var wid=arr[0].offsetWidth;
    var sum=Math.floor(document.documentElement.clientWidth/wid);
    oparent.style = 'width:'+wid * sum +'px; margin: 0 auto';
    var arrH=[];
    for(var i=0;i<arr.length;i++){
        if(i<sum){
            arrH.push(arr[i].offsetHeight);
        }else{

            var minH=Math.min.apply(null,arrH);
            for(var j in arrH){
                if(arrH[j]==minH){
                    break;
                }
            }
            console.log(arrH,minH,arrH[j]);
            arr[i].style.position="absolute";
            arr[i].style.top=minH+"px";
            arr[i].style.left=wid*j+"px";
            arr[i].style.margin=5+"px";
            console.log(arr[i].style.margin);
            arrH[j]+=arr[i].offsetHeight;
            console.log(arr[i].offsetHeight,arrH[j]);
        }
    }
}