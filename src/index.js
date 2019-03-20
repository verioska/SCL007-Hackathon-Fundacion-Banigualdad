// CHAT 

const buttonChatBack = document.getElementById("buttonChatBack");
const nav = document.getElementById("mainMenu")

buttonChat.addEventListener("click", function () {
  mainMenu.innerHTML = `
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12" id="menumain">
          <img class="back" src="images/back.png">
          <p class="name">Martina Carvajal</p>
          <img class="add" src="images/add.png">
        </div>
      </div>
    </div>
  </header>
  <body>
  <div class="firstMessage">
  <p class="pMessage">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
  <div class="secondMessage">
  <p class="pMessage">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  <div class="firstMessage">
  <p class="pMessage">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="secondMessage">
  <p class="pMessage">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </div>
  </body>
  <footer>
  <div class="container">
      <div class="row">
        <div class="col-12" id="footer">
        <img class="image" src="images/imagen.png">
        <img class="archivo" src="images/archivo.png">
        <input placeholder="Type your message">
        <img class="arrowRight" src="images/arrow-right.png">
        </div>
      </div>
    </div>
  </footer>
    `
})

