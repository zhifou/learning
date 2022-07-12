import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./box";

function Fiber(props) {
    return (
        <Canvas>
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    );
}

export default Fiber;
