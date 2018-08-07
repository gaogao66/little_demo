// var s = 'aaa_aa_a';
// var r1 = /a+/g;
// var r2 = /a+/y;
//
//  // ["aaa"]
// // ["aaa"]
// console.log(r1.exec(s),r2.exec(s) );
//  // ["aa"]
//  // null
// console.log(r1.exec(s),r2.exec(s) );
//
//
// var regexp=new RegExp(/xyz/i);
// console.log(regexp);


//扁平化数组
function steamroller(arr) {
    // I'm a steamroller, baby
    var myarray=[];
    for(var i=0;i<arr.length;i++){
        if(String(arr[i])=="[object Object]"){
            if(Number.isNaN(Number(arr[i]))){
                myarray.push(arr.splice(i,1),i);
            }
        }
    }
    console.log(myarray);
    var str=arr.join("");
    console.log(str);
    var newarray=str.split('');
    console.log(newarray);
    var re=new RegExp(/\W/g);
    for(i=0;i<newarray.length;i++){
        if(!Number.isNaN(Number(newarray[i]))){
            newarray[i]=parseInt(newarray[i]);
        }
        if(re.exec(newarray[i])!=null)
        {
            newarray.splice(i,1);
        }
    }
    if(!Number.isNaN(Number(newarray[newarray.length-1]))){
        newarray[newarray.length-1]=parseInt(newarray[newarray.length-1]);
    }
    if(myarray&&String(myarray[0])=="[object Object]"){
        newarray.splice(myarray[1],0,myarray[0][0]);
    }
    console.log(newarray);
    return newarray;

}
steamroller([[["a"]], [["b"]]]);
