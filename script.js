let ol = document.querySelector("ol")
let lis = document.querySelectorAll("li")
let btn = document.querySelector("button")
let inp = document.querySelector("input")


const addTask = () => {
    if (inp.value !== "") {

        inp_value = inp.value.trim();
        inp.value = ""

        let divbox = document.createElement("div")
        ol.appendChild(divbox)

        let item = document.createElement("li")
        item.innerHTML = inp_value
        divbox.appendChild(item)

        let dltbtn = document.createElement("button")
        dltbtn.innerHTML = "Delete"
        dltbtn.classList.add("deletebutton")
        dltbtn.style.margin = "5px 20px"
        divbox.appendChild(dltbtn)

        dltbtn.addEventListener("click", () => {
            divbox.removeChild(item)
            divbox.removeChild(dltbtn)

        })
    }
    else {
        alert("Input task!")
    }
}



btn.addEventListener("click", addTask)
inp.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask()
    }
})

