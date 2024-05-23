
const redirect = () => { //redirect from login to dashboard

    const password = document.getElementById("password").value
    if(password == "hbs"){
      window.location.href="https://marcelohsj.github.io/TrovaValori/dashboard.html";
    }
};
var clickCount = 0;

var gola = {
  id:"",
  quantita:[0],
  distanza:[0],
  larghezza:[0],
  inserto:[0],
};

var valori = {
  min:[0],
  int: [0],
  max:[0],
};

function trovaValori (distanza, inserto, larghezza) { 

  valori.min[clickCount]= parseInt(distanza) + parseInt(inserto);

  valori.int [clickCount]= parseInt(distanza) + parseInt( inserto/2 ) + parseInt(larghezza/2) ;

  valori.max [clickCount]= parseInt(distanza) + parseInt(larghezza);
}

var memArray=[];
var k = 0;
var temp;
var temp2 = 1;

const memInput = () =>{  

  gola.id = document.querySelector('#idGole').value;
  gola.quantita[clickCount] = document.querySelector('#nGole').value;
  gola.distanza[clickCount] = document.querySelector('#dGole').value;
  gola.larghezza[clickCount] = document.querySelector('#lGole').value;
  gola.inserto [clickCount]= document.querySelector('#inserto').value;

  if(gola.id != temp){
    temp = gola.id;
    memArray.push(gola.id);
    k = 1;
    temp2=1;
  }
  else{
    temp2++;
    memArray.push(gola.id+String(temp2));
  }

  if(k < gola.quantita[clickCount]){ //lock and unlock input
    document.querySelector('#idGole').readOnly=true;
    document.querySelector('#nGole').readOnly=true;
    document.querySelector('#lGole').readOnly=true;
    document.querySelector('#inserto').readOnly=true;
  }
  else{
    document.querySelector('#idGole').readOnly=false;
    document.querySelector('#nGole').readOnly=false;
    document.querySelector('#lGole').readOnly=false;
    document.querySelector('#inserto').readOnly=false;
  }

  trovaValori(gola.distanza[clickCount],gola.inserto[clickCount],gola.larghezza[clickCount]);
 
  clickCount++;
  k++;
}

const outputResult = () => {

    const console = document.querySelector(".console");

    const xhr = new XMLHttpRequest();
    
    xhr.open('get','https://marcelohsj.github.io/TrovaValori/outputResult.html');

    xhr.onload = function(){

      if(this.status == 200){
        console.innerHTML = xhr.response;

        for(let i = 0; i < memArray.length; i++){

          document.querySelector(".containerValori").innerHTML += "<h3>Dettaglio("+memArray[i]+")</h3>";

          document.querySelector(".containerValori").innerHTML += "<p>min:"+valori.min[i]+"</p>";

          document.querySelector(".containerValori").innerHTML += "<p>int:"+valori.int[i]+"</p>";

          document.querySelector(".containerValori").innerHTML += "<p>max:"+valori.max[i]+"</p>";
        }
      }
    };

    xhr.send();

};





