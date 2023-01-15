const clock = document.querySelector("h2#clock");

function getClock () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");  
    const seconds = String(date.getSeconds()).padStart(2, "0");  
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock () 
setInterval(getClock, 1000);
// getClock () 은 페이지를 여는 순간 즉시호출을 하는거고, 밑에줄은 1초가 지난순간부타 매초 실행하게함