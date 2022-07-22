const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble);
console.log(bubble);

// console.log(Math.random() * 200 + 100);
const size = Math.random() * 200 + 100 + "px";
// console.log(size);

bubble.style.height = size;
bubble.style.width = size;
