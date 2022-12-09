import './App.css';
import React from "react";
import Canvas from "./components/Canvas/Canvas"; // Change the path according to the directory structure of your project
import './styles/canvas.css'
import { useState } from 'react';
const App = function () {
    const canvasWidth = 800;
    const canvasHeight = 480;
    const [xyPosition, setXYPosition] = useState([0, 0]);
    const scaleY = 80;
    const scaleX = 80;
    const stepX = Math.round(canvasHeight / scaleY / 2) * scaleY; // нахождение шага прмерно в середине и домножение номера шага на сам шаг, чтобы получить значение, находящееся примерно в середине полотна
    const stepY = Math.round(canvasWidth / scaleX / 2) * scaleX;

    function getMousePosition(e) {
        const positions = e.target.getBoundingClientRect();
        const xPosition800 = Math.round((e.clientX - positions.left - canvasWidth / 2) * 1000 / canvasWidth) - 1;
        const yPosition800 = Math.round((-e.clientY + positions.top + canvasHeight / 2) * 1.25);
        setXYPosition([xPosition800, yPosition800])
    }

    

    return (
        <div className="App">
            <div className="position">X={xyPosition[0]}</div>
            <div className="position">Y={xyPosition[1]}</div>
            <Canvas getMousePosition={getMousePosition} canvasWidth={canvasWidth} canvasHeight={canvasHeight} scaleY={scaleY} scaleX={scaleX} stepX={stepX} stepY={stepY} />

        </div>
    );
};
export default App;