import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'https://cdn.skypack.dev/three@0.132.2';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  cube.position.set(3,0,0);
  return cube;
}

export { createCube };
