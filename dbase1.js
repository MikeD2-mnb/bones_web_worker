function timedCount() {
    console.log("making fetch");
    fetch('//192.168.0.52:3050/data',{mode:'no-cors'})
        .then(response => response.text())
        .then(data => {
            console.log(response);
            postMessage(data);  //send data back to the main thread
        })
        .catch(error => {
            console.log("error",error);
            console.error(error);
            postMessage("[  {  Dev: 0, Meas: 'Volt'}]"); //'Error fetching data');
        });
        //setTimeout(timedCount, 200);
}
//while (1){
timedCount();

//}
