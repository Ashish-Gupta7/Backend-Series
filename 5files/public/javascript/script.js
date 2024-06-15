const inpFile = document.querySelector(".page1 form #text");
const inpTxtArea = document.querySelector(".page1 form #textarea");
const submit = document.querySelector(".page1 form #submit");
const form = document.querySelector(".page1 form");

inpFile.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    inpTxtArea.focus();
  };
});

form.addEventListener("submit", (event) => {
  if (inpFile.value.length === 0) {
    event.preventDefault();
    alert("Please fill some name of file.");
  };
});