function isprime(n){
    for (var i=2; i<n;i++){
    if(n%i==0){
        return false;
    }
};
    return true;
}
function prime(x,y){
    for (var j=x; j<y;j++)
    if(isprime(j)){
        console.log(j)
    }
}
prime(3,15)

