  enchant();
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
  // game scene
  var gameScene = new Scene();

  game.onload = function () {
    // Menu Scene 
    var bg = new Sprite(320, 416);
    bg.image = game.assets['resources/bg_prerendered.png'];
   

    var logo = new Sprite(131, 200);
    logo.image = game.assets['resources/logo.png'];
    logo.x = bg.image.width/2 - logo.image.width + 65;
    logo.y = 50;

    var label = new Label("click to start");
    label.x = stageWidth / 2 - 70;
    label.y = stageHeight / 2 + 50;
    label.color = "black";
    label.font = "25px Arial";

    var label2 = new Label("during the game: use L/R arrow \n\n keys to skip levels");
    label2.x = 20;
    label2.y = stageHeight / 2 + 100;
    label2.color = "black";
    label2.font = "20px Arial";
    label2.textAlign = "center";

    game.rootScene.addChild(bg);
    game.rootScene.addChild(logo);
    game.rootScene.addChild(label);
    game.rootScene.addChild(label2);
    game.rootScene.addEventListener('touchend', function(e){
      //call game scene
      //TODO:
    });
  };

  game.start();
