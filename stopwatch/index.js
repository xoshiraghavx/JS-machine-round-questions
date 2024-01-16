const time = document.querySelector('.time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const text = document.querySelector('.text');

let seconds = 0;
let interval = null;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function timer(){
    seconds++;

    let hr = Math.floor(seconds/3600);
    let min = Math.floor((seconds-(hr*3600))/60)
    let sec = seconds%60;

    if(sec<10) sec= '0' + sec;
    if(min<10) min= '0' + min;
    if(hr<10) hr= '0' + hr;

    time.innerText = `${hr}:${min}:${sec}`;
}

function start(){
    interval = setInterval(timer, 1000);
    text.innerHTML = `<p>stopwatch started</p>`;
}

function stop(){
    clearInterval(interval);
    interval = null;
    text.innerHTML = `<p>stopwatch stopped</p>`;
}
function reset(){
    stop();
    seconds = 0;
    time.innerText = '00:00:00';
    text.innerHTML = `<p>stopwatch reset</p>`;
}






// //global variable
// const time_el = document.querySelector('.watch .time');
// const start_btn = document.getElementById("start");
// const stop_btn = document.getElementById("stop");
// const reset_btn = document.getElementById("reset");
// const text = document.querySelector(".text");

// let seconds = 0;
// let interval = null;

// //event listeners
// start_btn.addEventListener("click", start);
// stop_btn.addEventListener("click", stop);
// reset_btn.addEventListener("click", reset);
// //update the timer
// function timer(){
//     seconds++;

//     //format our time
//     let hrs = math.floor(seconds / 3600);
//     let mins = math.floor((seconds - (hrs * 3600)) / 60);
//     let secs = seconds % 60;

//     if (secs < 10) secs = '0' + secs;
//     if (mins < 10) mins = "0" + mins;
//     if (hrs < 10) hrs = "0" + hrs;

//     time_el.innerText =  `${hrs}:${mins}:${secs}`;
// }
// function start(){
//     interval = setInterval(timer, 1000);
//     text.innerHTML=`
//     <p>Counter Started</p>
//     `;
// }
// function stop(){
//     clearInterval(interval);
//     interval = null;
//     text.innerHTML=`
//     <p>Counter Stopped</p>
//     `;
// }
// function reset(){
//     stop();
//     seconds = 0;
//     time_el.innerText = '00:00:00';
//     text.innerHTML=`
//     <p>Counter Reset</p>
//     `;
// }