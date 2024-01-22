var inp = document.getElementById('war')
var but = document.getElementById('war-but')
but.onclick = function () {
if (inp.value == "trp200 осел") {
    inp.value = "Сам ты осел!"
}else {
    inp.value = "Не жалуйся!"
}
    
}
