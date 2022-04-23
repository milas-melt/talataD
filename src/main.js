import { World } from './World/World.js';

function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  return world.render();
  /*
  to use a button to enable render:

  const render_button = document.querySelector("#render_button")
  render_button.onclick = function(){
    return world.render();
  };
  */
  
}

main();
