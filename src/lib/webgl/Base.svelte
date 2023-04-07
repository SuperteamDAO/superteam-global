<script>
    import { OrbitControls, PerspectiveCamera, Canvas, useTexture, T, DirectionalLight } from '@threlte/core'

    export let size = { width: 0, height: 0 }
    const factor = 5

</script>


<T.Group>
    <PerspectiveCamera
        fov={50}
        position={{ z: 100 }}
    >
        <OrbitControls />
    </PerspectiveCamera>
    <!-- <DirectionalLight position={{ z: 100 }} color="white" /> -->
    <T.AmbientLight />
    <T.Mesh position={[0, 0, 0]} receiveShadow castShadow>
        <T.PlaneGeometry args={[size.width / factor, size.height / factor]} />
        <T.MeshStandardMaterial color="rgb(4, 5, 7)" vertexColors={true} roughness={0.4} />
    </T.Mesh>
</T.Group>
