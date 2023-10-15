const formGenderName = document.getElementById("formGenderName");
const content = document.getElementById("content");
const loader = document.getElementById("loader");

formGenderName.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.inputName.value;
  event.target.inputName.value = "";

  loader.style.display = "block";

  fetch(`https://api.genderize.io/?name=${name}`)
    .then((res) => res.json())
    .then((data) => {
      loader.style.display = "none";
      // content.contentText = "";
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }

      const gender = document.createElement("p");
      gender.classList.add("p");

      gender.textContent = `Пол: ${data.gender}`;
      content.append(gender);
    });
});
