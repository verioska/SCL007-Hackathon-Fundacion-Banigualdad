// CHAT 

const buttonChat = document.getElementById("buttonChat");
const root = document.getElementById("root");
const rootNav = document.getElementById("rootNav");
const buttonChatBack = document.getElementById("buttonChatBack");

buttonChat.addEventListener("click", function () {
    rootNav.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-12 " id="menumain">
          <button id="buttonChatBack">Atrás<button>
        </div>
      </div>
    </div>
    `
})

