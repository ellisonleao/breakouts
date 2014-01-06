  enchant();
  var game = new Game(320, 416);
  game.scale = 1;

  assets = [
    'resources/bg_prerendered.png',
    'resources/logo.png',
  ]

  for(var i = 0; i < assets.length; i++ ){
    game.preload(assets[i]);
  }

  game.onload = function () {
    // Game code is written here
    var scene = new Scene();
    var bg = new Sprite(320, 416);
    var logo = new Sprite(131, 200);
    
    bg.image = game.assets['resources/bg_prerendered.png'];
    logo.image = game.assets['resources/logo.png'];
    scene.addChild(bg);
    scene.addChild(logo);
    game.pushScene(scene);
  };

  game.start();
