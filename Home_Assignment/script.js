//Add PopUp Box
window.addEventListener("load", function() {
    setTimeout(() => {
        document.querySelector(".popup").style.display = "block";
    }, 2000);
})

//Remove The PopUp Box And Adding A Log For Email Content 
closePopup = () => {
    document.querySelector(".popup").style.display = "none";
    let data = document.getElementById("emailLog");
    console.log(data.value);
}
closePopup()