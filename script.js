const checkbox = document.querySelector(".checkbox")
const textfields = document.querySelectorAll(".textfield")
const button = document.getElementById("remove")
const outputDiv = document.getElementById("div2")

function eavesdroppingBastard1(e) {
    console.log(e.target)
    let name = e.target.getAttribute("name")
    if (name === "content")
        outputDiv.innerHTML = e.target.value
}

textfields.forEach(function(i) {
    i.addEventListener("input", eavesdroppingBastard1)
    i.addEventListener("blur", eavesdroppingBastard1)
});

checkbox.addEventListener("change", function () {
    let colorField = textfields.item(0)
    let color = colorField.value
    outputDiv.style.backgroundColor = color
})

button.addEventListener("click", function () {
    outputDiv.remove()
})