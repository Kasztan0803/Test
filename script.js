var divs = document.getElementsByClassName("javascript")
console.log(divs);

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function(){
        divs[i].innerHTML = "zmiana <br>" + i
        document.write("ojjj")
    })
}

var liczby = document.getElementById("liczby")
for (let i = -111; i < 112; i++){
liczby.innerHTML += "Liczba : " + i + "<br>"
   
}
