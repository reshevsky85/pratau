const toggleButton1 = document.getElementById("toggleButton1");
const myDiv1 = document.getElementById("myDiv1");

const toggleButton2 = document.getElementById("toggleButton2");
const myDiv2 = document.getElementById("myDiv2");

toggleButton1.addEventListener("click", () => {
	myDiv1.classList.toggle("hidden");
});

// Add event listener for the second button
toggleButton2.addEventListener("click", () => {
	myDiv2.classList.toggle("hidden");
});
