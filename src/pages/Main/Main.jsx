import '../../App.css';
import React from "react";
import Canvas from "../../components/Canvas"; // Change the path according to the directory structure of your project
import '../../styles/canvas.css'
import { useState } from 'react';
import ImgWithDescribe from '../../components/UI/ImgWithDescribe/ImgWithDescribe';
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
    const [args, setArgs] = useState({ frequency: 1, A: 1, phase: 0 });

    function getMousePosition(e) {
        const positions = e.target.getBoundingClientRect();
        const xPosition800 = Math.round((e.clientX - positions.left - canvasWidth / 2) * 1000 / canvasWidth) - 1;
        const yPosition800 = Math.round((-e.clientY + positions.top + canvasHeight / 2) * 1.25);
        setXYPosition([xPosition800, yPosition800]);
    }

    console.log( typeof args.phase)

    return (
        <div className="App" >
            <h2 className="title tac">Синусоидальный сигнал</h2>
            <div className="article">
                <Content />
                <ParamsChange args={args} setArgs={setArgs} />
                <Canvas args={args} canvasWidth={canvasWidth} canvasHeight={canvasHeight} scaleY={scaleY} scaleX={scaleX} stepX={stepX} stepY={stepY} />
            </div>


            {/* getMousePosition={getMousePosition} */}
            {/* <div className="position">X={xyPosition[0]}</div>
            <div className="position">Y={xyPosition[1]}</div> */}
        </div>
    );
};
export default Main;