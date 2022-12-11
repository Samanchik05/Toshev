// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 50,
//             sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


// /*=============== CHANGE BACKGROUND HEADER ===============*/
// function scrollHeader(){
//     const header = document.getElementById('header')
//     // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)


let countDate = new Date('december 27, 2022 00:00:00').getTime();

function CountDown() {

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}
setInterval(function () {
    CountDown();
}, 1000)