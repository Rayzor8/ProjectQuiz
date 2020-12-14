// up Animate up Score
const animate = $('.score-animate').counterUp({ delay: 10, time: 2000 });


// Countdown timer
let startingCountDown = 60
let time = startingCountDown * 60
const timerElement = document.querySelector('.timer h5 span')

function updateCountDown(){
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    // stop if setInterval seconds < 0
    if(seconds < 0){
        clearInterval(updateCountDown)
        return
    }
    // if second < 10 add string 0
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // add to DOM
    timerElement.innerHTML = `${minutes}:${seconds}`
    time --
}
setInterval(updateCountDown,1000)


// Active pagination
const paginationList = document.querySelectorAll('.pagination li a');

paginationList.forEach(item => {
    item.addEventListener('click',()=>{
        paginationList.forEach(active => {
            active.classList.remove('active-pagi')
        })

        item.classList.add('active-pagi')
    })
})