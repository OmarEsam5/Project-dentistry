let headerBar = document.getElementById("headerBar")
let ulLinks = document.getElementById("links")


headerBar.addEventListener("click", open)
// headerBar.addEventListener("click", close)

function open () {
    if (ulLinks.style.display = "none") {
        ulLinks.style.display = "flex"
    }
}

// function close() {
//     if (ulLinks.style.display = "flex") {
//         ulLinks.style.display = "none"
//     }
// }
