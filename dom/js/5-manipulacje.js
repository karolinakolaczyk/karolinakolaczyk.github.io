const mainHeader = document.getElementById("main-header");
const mainHeaderInner = mainHeader.innerHTML;


document.querySelectorAll(".superlink")[0].innerText = "Aaaaaaaaaaaaaaaa";
console.log(mainHeaderInner.outerHTML);
console.log(mainHeaderInner);



window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop >= (2 * window.innerHeight) ) {
        console.log(mainHeader.dataset.category);
        mainHeader.style.fontSize = "40px";
        document.body.classList.add("scroll-2");
        document.body.classList.remove("scroll");
    
    } else if(document.documentElement.scrollTop >= window.innerHeight) {
        console.log(mainHeader.dataset.category);
        mainHeader.style.fontSize = "13px";
        document.body.classList.add("scroll");
        document.body.classList.remove("scroll-2");
    } else {
        console.log(mainHeader.dataset.category);
        mainHeader.style.fontSize = "initial";
        document.body.classList.remove("scroll", "scroll-2");
    }
})