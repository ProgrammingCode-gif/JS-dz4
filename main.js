var a = prompt('Введите первое число');
var b = prompt('Введите второе число');
var c = prompt('Введите третье число');

if(a>b && b>c || c>b && b>a){
    alert(b + ' - среднее число')
}else if(b>a && a>c || c>a && a>b){
    alert(a + ' - среднее число')
}else if(a>c && c>b || b>c && c>a){
    alert(c + ' - среднее число')
}else{
    alert('Все числа равны')
}