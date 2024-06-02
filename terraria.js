document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('.koster img');
    let fon = document.querySelector('.fons');

let poisk = document.querySelector('.sach')
// window.alert(btn.src.endsWith('.png'))
btn.addEventListener('click', function (event) {
    // window.alert("test0")
    if (btn.src.endsWith('png') ){

        btn.src = 'koster.gif';
        fon.style.backgroundImage = 'url(night_team.png)';}
    else {

        btn.src = 'костер.png';
        fon.style.backgroundImage = 'url(terraria-fon.png)';}
})
});