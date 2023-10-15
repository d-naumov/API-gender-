const getClientsByClick = document.getElementById("getClientsByClick");
const characterCardsContainer = document.getElementById("characterCards");

getClientsByClick.addEventListener("click", () => {
  fetch(`https://d-naumov.github.io/API-gender-contacts/contacts.json`)
    .then((response) => response.json())
    .then((data) => {
      // Очищаем содержимое контейнера перед добавлением новых данных
      while (characterCardsContainer.firstChild) {
        characterCardsContainer.removeChild(characterCardsContainer.firstChild);
      }
      // characterCardsContainer.textContent = "";

      data.forEach((client) => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");

        // Выводим информацию о клиенте, включая адрес
        characterCard.textContent = `Имя: ${client.name}, Пользователь: ${client.username}, Адрес: ${client.address.street}, ${client.address.city}, ${client.address.suite}, ${client.address.zipcode}`;

        characterCardsContainer.appendChild(characterCard);
        // console.log(client);
      });
    });
});
