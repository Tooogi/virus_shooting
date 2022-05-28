document.addEventListener("click", spawnVirus);

function spawnVirus(event){
	var virus = document.createElement("img");
    virus.src = "virus.gif";
    document.body.appendChild(virus);
    virus.style.position = "absolute";
    virus.style.top = document.body.clientHeight*Math.random()-100;
    virus.style.left = -200;
        

    virus.style.filter += "brightness("+Math.random()+")";

    viruses.push(virus);

    virus.addEventListener("mousedown", disappear);
}

function disappear(event){
    var virus = event.target;
    document.body.removeChild(virus);
    viruses.splice(viruses.indexOf(virus), 1);
        
}

function move(){
    for(var i = 0; i < viruses.length; i++){
        viruses[i].style.left = parseInt(viruses[i].style.left) + 3;
        if (parseInt(viruses[i].style.left) > document.body.clientWidth) {
            document.body.removeChild(viruses[i]);
            viruses.splice(i, 1);
        }
    }
}

setInterval(move, 10);
setInterval(spawnVirus, 400);
var viruses = [];