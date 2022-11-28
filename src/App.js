import './App.css';
import React from "react";
import Canvas from "./components/Canvas/Canvas"; // Change the path according to the directory structure of your project
import './styles/canvas.css'
import { useState } from 'react';
const App = function () {
    const canvasWidth = 1000;
    const canvasHeight = 1000;
    const [xyPosition, setXYPosition] = useState([0, 0]);

    const scaleY = 100;
    const scaleX = 100;

    const stepX = Math.round(canvasHeight / scaleY / 2) * scaleY; // нахождение шага прмерно в середине и домножение номера шага на сам шаг, чтобы получить значение, находящееся примерно в середине полотна
    const stepY = Math.round(canvasWidth / scaleX / 2) * scaleX;
    const draw = (context, canvasWidth, canvasHeight) => {



        const aa = canvasWidth / scaleY
        // console.log(aa)

        // линии координат
        context.beginPath();
        context.font = `${scaleX / 3}px Arial` // еще разные расположения текста
        context.fillStyle = "#000";
        context.strokeStyle = 'rgba(0, 0, 0, 0.23)';
        for (let i = 0; i <= canvasWidth; i = i + scaleY) {
            context.moveTo(i, 0);
            context.lineTo(i, canvasHeight);

            context.fillText(i / scaleY - Math.round(canvasWidth / scaleY / 2), i + 2, stepX + 13)
        }
        context.stroke();
        for (let i = 0; i <= canvasHeight; i = i + scaleX) {
            context.moveTo(0, i);
            context.lineTo(canvasWidth, i);

            context.fillText(0 - (i / scaleX - Math.round(canvasHeight / scaleX / 2)), stepY + 2, i + 13)
        }
        context.stroke();
        context.closePath();


        // оси
        context.beginPath();
        context.strokeStyle = 'rgba(0, 0, 0, 1)';
        context.moveTo(stepY, 0);
        context.lineTo(stepY, canvasHeight);
        context.moveTo(0, stepX);
        context.lineTo(canvasWidth, stepX);
        context.stroke();
        context.closePath();

        context.fillText('y', canvasWidth / 2 - 15, 15)
        context.fillText('x', canvasWidth - 20, canvasHeight / 2 - 5)


        const frequency = 1;
        const A = 1;
        const phase = 0;
        const radian = phase * Math.PI / 180;

        for (let i = -canvasWidth / 5.9; i <= canvasWidth; i = i + 0.05) {
            const x = (i - stepX) / scaleX;
            // const y = Math.pow(x,1000);
            // const y = Math.pow(x, 2);
            const argInSin = 2 * Math.PI * x * frequency;

            const y = A * Math.sin(argInSin + radian);
            // context.fillRect(x * scaleX + stepY - 1, stepX - scaleY * y, 2, 2)
            context.fillStyle = "blue";
            context.fillRect(x * scaleX + stepY - 1, stepX - scaleY * y, 2, 2)

        }
    }
    function getMousePosition(e) {
        // setXYPosition([e.clientX - 793,0-e.clientY + 438])
        const positions = e.target.getBoundingClientRect();
        const Xposition = Math.round(e.clientX - positions.left - canvasWidth / 2)-1;
        const Yposition = Math.round(-e.clientY + positions.top + canvasHeight / 2);

        setXYPosition([Xposition, Yposition])
        console.log(e.target.getBoundingClientRect())

    }
    return (
        <div className="App">
            <div className="position">X={xyPosition[0]}</div>
            <div className="position">Y={xyPosition[1]}</div>
            <Canvas getMousePosition={getMousePosition} className='canvas' draw={draw} height={canvasHeight} width={canvasWidth} />

        </div>
    );
};
export default App;