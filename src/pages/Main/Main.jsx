import '../../App.css';
import React from "react";
import Canvas from "../../components/Canvas"; // Change the path according to the directory structure of your project
import '../../styles/canvas.css'
import { useState } from 'react';
import Content from '../../components/UI/Content/Content';
import ParamsChange from '../../components/UI/ParamsChange/ParamsChange';
const Main = function () {
    const canvasWidth = 800;
    const canvasHeight = 480;
    const [xyPosition, setXYPosition] = useState([0, 0]);
    const scaleY = 80;
    const scaleX = 80;
    const stepX = Math.round(canvasHeight / scaleY / 2) * scaleY; // нахождение шага прмерно в середине и домножение номера шага на сам шаг, чтобы получить значение, находящееся примерно в середине полотна
    const stepY = Math.round(canvasWidth / scaleX / 2) * scaleX;
    const [args, setArgs] = useState({ frequency: 0.5, A: 1, phase: 0 });

    return (
        <div className="App" >
            <h2 className="title tac">Синусоидальный сигнал</h2>
            <div className="article">
                <Content />
                <ParamsChange args={args} setArgs={setArgs} />
                <Canvas args={args} canvasWidth={canvasWidth} canvasHeight={canvasHeight} scaleY={scaleY} scaleX={scaleX} stepX={stepX} stepY={stepY} />
            </div>
        </div>
    );
};
export default Main;