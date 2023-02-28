const time = document.getElementById("stopwatch");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const cast = document.getElementById("cast");

var stoptime = true;
var hour = 0;
var minute = 0;
var second = 0;
var milisecond = 0;

const startTimer = () => {
  if (stoptime == true) {
    stoptime = false;
    times();
  }
};

const pauseTimer = () => {
  if (stoptime == false) {
    stoptime = true;
  } else {
    startTimer();
  }
};

// const castTimer = ()=>{
    
// }

const times = () => {
  if (stoptime == false) {
    hour = parseInt(hour);
    minute = parseInt(minute);
    second = parseInt(second);
    milisecond = parseInt(milisecond);

    // milisecond+=10;
    // if (milisecond==100) {
    //   second += 1;
    //   milisecond = 0;
    // }

    second += 1
    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }
    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
      second = 0;
    }

    // if(milisecond<100)
    // {
    //     milisecond = "00" + milisecond
    //     milisecond = "0" + milisecond
    // }

    if (second < 10) {
      second = "0" + second;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }


    time.innerHTML = hour + ":" + minute + ":" + second + ":" + milisecond;
    setTimeout("times()", 1000);
  }
};

function resetTimer() {
  time.innerHTML = "00:00:00:000";
  stoptime = true;
  hour = 0;
  minute = 0;
  second = 0;
  milisecond = 0;
}
