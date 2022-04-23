import { TorusGeometry, Mesh, MeshBasicMaterial } from 'https://cdn.skypack.dev/three@0.132.2';

function createTorus() {
    
    // create a geometry
    const geometry = new TorusGeometry( 1, 0.3, 16, 100 );

    // create a default (white) Basic material
    const material = new MeshBasicMaterial( { color: 0xffff00 } );
    
    // create a Mesh containing the geometry and material
    const torus = new Mesh( geometry, material );

  return torus;
}

export { createTorus };
