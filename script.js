var divs = document.getElementsByClassName("javascript")
console.log(divs);

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function(){
        divs[i].innerText = "ty chuju " + i
    })
}