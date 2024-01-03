function binhphuong(number){
    let result = number*number;
    return result;
}
function tinh(){
    let a = document.getElementById('1').value;
    let b = binhphuong(a);
    document.getElementById('2').innerHTML= b;
}