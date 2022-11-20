// fibo = [0,1]
// for(var i=2;i<=10;i++)
// {
//     fibo[i]=fibo[i-1]+fibo[i-2]
// }

// console.log(fibo)

var fibo=[]
function f(n){
    if(n==0)return 0;
    if(n==1)return 1;
    
    var t= f(n-1)+f(n-2);
    fibo.push(t);

}

console.log(fibo)