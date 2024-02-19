const time = document.getElementById('time');

setInterval(function() {
    let now = new Date();
    console.log(now.getTime());
    time.innerHTML = now.toLocaleTimeString();
},1000);