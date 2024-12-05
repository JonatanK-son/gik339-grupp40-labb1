const checkbox = document.querySelector(".checkbox");
const textfields = document.querySelectorAll(".textfield");
const button = document.getElementById("remove");
const outputDiv = document.getElementById("div2")

function eavesdroppingBastard1(e) {
    console.log(e.target)
    let name = e.target.getAttribute("name")
    console.log(name)
}

textfields.forEach(function(i) {
    i.addEventListener("input", eavesdroppingBastard1)
    i.addEventListener("blur", eavesdroppingBastard1)
});

checkbox.addEventListener("input", eavesdroppingBastard1)

console.log(checkbox)
console.log(textfields)
console.log(button)
console.log(outputDiv)