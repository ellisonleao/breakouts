  enchant();
  var game = new Game(320, 320);

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
    var sprite = new Sprite(320, 320);
    console.log(game.assets);
    sprite.image = game.assets['resources/bg_prerendered.png'];
    scene.addChild(sprite);
    game.pushScene(scene);
  };

  game.start();
