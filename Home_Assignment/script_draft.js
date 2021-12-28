window.addEventListener("load", function() {
    setTimeout(() => {
        document.querySelector(".popup").style.display = "block";
        console.log("in set timeout");
    }, 2000);

})

closePopup = () => {
    document.querySelector(".popup").style.display = "none";
}
closePopup()



closePopup = () => {
    document.querySelector(".popup").style.display = "none";
    console.log("in popup close Popup");
    send = () => {
        let i = 0;
        while (i < 1) {
            console.log(emailLog.value);
            document.querySelector(".popup").style.display = "none";
            break;
        }
    }
}
closePopup()

//Log The Added Email Address       
// send = async() => {
//     console.log(emailLog.value);
//     let i = 0;
//     while (i < 1) {
//         await console.log(emailLog.value);
//         closePopup()
//         break;
//     }
//     // setTimeout(() => {
//     //     document.querySelector(".popup").style.display = "none";
//     //     console.log("in popup close Popup");
//     // }, 1500);
// }
// send()

// send = () => {
//     console.log(emailLog.value);
//     addEventListener("send", function() {
//         closePopup()
//     })
// }
// send()


// closePopup = () => {
//     document.querySelector('#btn').addEventListener("click", function() {
//         document.querySelector(".popup").style.display = "none";
//         console.log("in popup closePopup");
//     })
//     document.querySelector('#exit').addEventListener("click", function() {
//         document.querySelector(".popup").style.display = "none";
//         console.log("in popup function");
//     })

// }
// closePopup()





// document.querySelector('#exit').addEventListener("click", function() {
//     document.querySelector(".popup").style.display = "none";
//     console.log("in popup function");

// })



// popMessage = () => {
//     setTimeout(() => {}, 2000);
// }
// popMessage()


// closePopup = async(popDisplay) => {
//     await popDisplay.close()
// }
// closePopup()



// let popDisplay = document.createElement('DIV')
//         popDisplay.setAttribute("id", "domDiv") && popDisplay.setAttribute("class", "active");
//         popDisplay.innerHTML = `<div id="btnExit"><button id="exit" onclick="closePopup()">&times;</button></div>`
//         popDisplay.innerHTML += `<img id="logo" src="logo.png" alt="logo"> <br>`
//         popDisplay.innerHTML += `<h3>SIGN UP TO</h3><br>`
//         popDisplay.innerHTML += `<h2>GET 10% OFF</h2><br>`
//         popDisplay.innerHTML += `<h4>YOUR ORDER</h4><br>`
//         popDisplay.innerHTML += `<input type="email" placeholder="Email Address" name="emailAddress"><br>`
//         popDisplay.innerHTML += `<button id="btn" type="submit">CONTINUE</button>`
//         root.appendChild(popDisplay)
//         return popDisplay