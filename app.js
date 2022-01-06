// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     document.getElementById("image-container").innerHTML = `
//          <img src='${data.message}' />
//         `;
//   });

// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then((response) => response.json())
//   .then((data) => {
//     document.getElementById("aps").textContent = data.activity;
//   });

document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("title").textContent = "🥷🏽CodeNinja 🥷🏽";
      document.body.classList.add("fun");
    });
});
