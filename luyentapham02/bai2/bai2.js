function dientich(bankinh){
    let result = Math.PI* bankinh*bankinh;
    return result;
}
function chuvi(bankinh){
    let result = Math.PI* 2*bankinh;
    return result;
}
function tinh(){
    let a = document.getElementById('1').value;
    let b = chuvi(a);
    let c = dientich(a);
    document.getElementById('2').innerHTML= b;
    document.getElementById('3').innerHTML= c;

}