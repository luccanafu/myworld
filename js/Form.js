class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
    this.continueButton = createButton("start")
  }

  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 200);
    this.continueButton.position(width/2-90,height/2+100)
    this.continueButton.hide();
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.continueButton.class("customButton")
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.continueButton.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.continueButton.show()
      this.input.hide();
      this.playButton.hide();
      var message = `
      Olá, ${this.input.value()}
      </br> Togun capturou sua amada 
      </br> agora você precisa dar a volta ao mundo
      </br> para encontrar a Flokina`;
      this.greeting.html(message);
    });

    this.continueButton.mousePressed(() => {
      this.hide()
      game.update(1)
    })
  }
  

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
