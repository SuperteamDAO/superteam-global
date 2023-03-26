import { Canvas } from '@react-three/fiber'
import React from 'react'

const Layout = ({ children }:{
    children: React.ReactNode
}) => {
    <main>
        <Canvas>
            {children}
        </Canvas>
    </main>
}

export default Layout