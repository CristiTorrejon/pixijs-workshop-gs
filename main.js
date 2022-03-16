// STEP 2: Creating the Pixi Application
/* const options = {
  width: 500,
  height: 500,
  antialias: false,
  transparent: false,
  resolution: 1,
}; */

// Aliases
const Application = PIXI.Application,
  loader = PIXI.Loader.shared,
  resources = PIXI.Loader.shared.resources,
  Sprite = PIXI.Sprite,
  TextureCache = PIXI.utils.TextureCache,
  Rectangle = PIXI.Rectangle;
const app = new PIXI.Application();

// Change the background color of the canvas:
// app.renderer.backgroundColor = 0x061639;

// If we need to change the size of the canvas:
// app.renderer.autoDensity = true;
// app.renderer.resize(900, 900);

// Make the canvas fill the entire window and adjust automatically if it is resized
// app.renderer.view.style.position = "absolute";
// app.renderer.view.style.display = "block";
// app.renderer.autoDensity = true;
// app.resizeTo = window;

// Add the canvas from Pixi to the HTML document
document.body.appendChild(app.view);

// STEP 3: Loading images into the texture cache
const firstSetup = () => {
  // Create the cat sprite
  const cat = new Sprite(resources["assets/cat.png"].texture);
  // Add the cat to the stage
  app.stage.addChild(cat);

  // Remove the cat to the stage
  // app.stage.removeChild(cat);

  // More efficient way of making sprites disappear.
  // cat.visible = false;

  // STEP 4: Positioning sprites
  cat.x = 40;
  cat.y = 480;
  // cat.width = 80;
  // cat.height = 120;

  // Scale values are numbers between 0 and 1 that represent a percentage of the sprite's size
  // cat.scale.x = 0.5;
  // cat.scale.y = 0.5;
  // cat.scale.set(2, 2);

  // Rotation
  // cat.rotation = 0.5;
  // Sprite rotated centered on its anchor point
  // cat.anchor.x = 0.5;
  // cat.anchor.y = 0.5;
  // cat.anchor.set(0.5, 0.5);
}

/* loader
  .add("assets/cat.png")
  .load(firstSetup); */


// STEP 5: Make a sprite from a tileset sub-image
const secondSetup = () => {
    // Create the `tileset` sprite from the texture
    const texture = TextureCache["assets/tileset.png"];

    // Create a rectangle object that defines the position and
    // size of the sub-image you want to extract from the texture
    const rectangle = new Rectangle(192, 128, 64, 64);

    // Tell the texture to use that rectangular section
    texture.frame = rectangle;

    //Create the sprite from the texture
    const rocket = new Sprite(texture);

    //Position the rocket and cat sprite on the canvas
    rocket.x = 32;
    rocket.y = 32;

    //Add the rocket to the stage
    app.stage.addChild(rocket);

    //Render the stage
    app.renderer.render(app.stage);
}

/* loader
  .add("assets/tileset.png")
  .load(secondSetup); */

// STEP 6: Using a texture atlas
