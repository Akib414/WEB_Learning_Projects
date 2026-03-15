document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})


const ip = document.querySelector('input');
ip.addEventListener('keydown',function(){
    console.log("keydown");
})
ip.addEventListener('keyup',function(e){
    console.log(e);
})


window.addEventListener('keydown', (e) => {
     switch(e.code){
        case 'ArrowUp' :
            console.log('UP');
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
     }
})