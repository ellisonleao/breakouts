enchant();
window.onload = function(){
  var stageWidth = 320;
  var stageHeight = 416;

  var game = new Game(stageWidth, stageHeight);
  game.scale = 1;

  assets = [
    'resources/bg_prerendered.png',
    'resources/logo.png',
  ]

  for(var i = 0; i < assets.length; i++ ){
    game.preload(assets[i]);
  }

  // bind keyboard
  game.keybind(65, 'left');
  game.keybind(68, 'right');

  game.onload = function () {
    // Menu Scene 
    var menuScene = new MenuScene();
    game.pushScene(menuScene);
  };

  game.start();
  // Menu Scene
  var MenuScene = Class.create(Scene, {
    initialize: function() {
      var game;
      var label1;
      var label2;
      var logo;
      var bg;
   
      Scene.apply(this);
      game = Game.instance;

      bg = new Sprite(320, 416);
      bg.image = game.assets['resources/bg_prerendered.png'];
      logo = new Sprite(131, 200);
      logo.image = game.assets['resources/logo.png'];
      logo.x = bg.image.width/2 - logo.image.width + 65;
      logo.y = 50;

      label1 = new Label("click to start");
      label1.x = stageWidth / 2 - 70;
      label1.y = stageHeight / 2 + 50;
      label1.color = "black";
      label1.font = "25px Arial";

      label2 = new Label("during the game: use L/R arrow \n\n keys to skip levels");
      label2.x = 20;
      label2.y = stageHeight / 2 + 100;
      label2.color = "black";
      label2.font = "20px Arial";
      label2.textAlign = "center";
     
      this.addChild(bg);
      this.addChild(logo);
      this.addChild(label1);
      this.addChild(label2);
      this.addEventListener('touchend', function(e){
        game.pushScene(new GameOverScene());
      });
    }
  });

  //Game Over Scene
  var GameOverScene = Class.create(Scene, {
    initialize: function() {
      var game;
      var label;
      var logo;
      var bg;

      Scene.apply(this);
      game = Game.instance;

      bg = new Sprite(320, 416);
      bg.image = game.assets['resources/bg_prerendered.png'];
      logo = new Sprite(131, 200);
      logo.image = game.assets['resources/logo.png'];
      logo.x = bg.image.width/2 - logo.image.width + 65;
      logo.y = 50;

      label = new Label("GAME OVER");
      label.x = stageWidth / 2 - 120;
      label.y = stageHeight / 2 + 50;
      label.color = "black";
      label.font = "40px Arial";

      this.addChild(bg);
      this.addChild(logo);
      this.addChild(label);
      this.addEventListener('touchend', function(e){
        game.pushScene(new MenuScene());
      });
    }
  });
}
