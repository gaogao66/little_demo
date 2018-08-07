// //二进制字符串转换为英文字符串
// function binaryAgent(str) {
//     var arr=str.split(" ");
//     arr.forEach(function(item,index){
//
//         arr[index]=String.fromCharCode(parseInt(item,2));
//
//     });
//
//     str=arr.join('');
//     console.log(str);
//     return str;
// }
//
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


function every(collection, pre) {
    // Is everyone being true?
    collection.forEach(function(item,index){
        if(!item[pre])
        {
            console.log(item.user);
            console.log(false) ;
        }
    });
    // console.log(true) ;
}
every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") ;