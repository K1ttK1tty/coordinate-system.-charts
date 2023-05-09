import React, { useState, memo } from "react";
// components
import Canvas from "../../components/Canvas";
import Content from '../../components/UI/Content/Content';
import ParamsChange from '../../components/UI/ParamsChange/ParamsChange';
// styles
import '../../App.css';
import '../../styles/canvas.css'
const Main = memo(function () {
    const canvasWidth = 800;
    const canvasHeight = 480;
    const scaleY = 80;
    const scaleX = 80;
    const [xyPosition, setXYPosition] = useState([0, 0]);
    const stepX = Math.round(canvasHeight / scaleY / 2) * scaleY; // нахождение шага прмерно в середине и домножение номера шага на сам шаг, чтобы получить значение, находящееся примерно в середине полотна
    const stepY = Math.round(canvasWidth / scaleX / 2) * scaleX;
    const [args, setArgs] = useState({ frequency: 0.5, A: 1, phase: 0, start: -5, end: 5 });

    function getMousePosition(e) {
        const positions = e.target.getBoundingClientRect();
        const widthScale = 1000 / positions.width; // 1.25
        const heightScale = 600 / positions.height;
        const xPosition800 = Math.round((e.clientX - positions.left) * widthScale - 500);
        const yPosition800 = Math.round((-e.clientY + positions.top + positions.height / 2) * heightScale);
        setXYPosition([xPosition800, yPosition800]);
    }

    return (
        <div className="App" >
            <h2 className="title tac">Синусоидальный сигнал</h2>
            <div className="article">
                <Content />
                <ParamsChange args={args} setArgs={setArgs} />
                <div className="position">X={xyPosition[0]}</div>
                <div className="position">Y={xyPosition[1]}</div>
                <Canvas
                    getMousePosition={getMousePosition}
                    args={args}
                    canvasWidth={canvasWidth}
                    canvasHeight={canvasHeight}
                    scaleY={scaleY} scaleX={scaleX}
                    stepX={stepX}
                    stepY={stepY}
                />
            </div>
        </div>
    );
});
export default Main;