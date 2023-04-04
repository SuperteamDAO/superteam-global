import THREE from 'three';

export const loadTextures = () => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
        '../../assets/webgl/textures/bg.png'
    );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = 1;
    texture.repeat.set(repeats, repeats);
    return texture;
}