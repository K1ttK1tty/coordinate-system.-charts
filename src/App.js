import './App.css';
import React from "react";
import Canvas from "./components/Canvas/Canvas"; // Change the path according to the directory structure of your project
import './styles/canvas.css'

const canvasWidth = 1200;
const canvasHeight = 800;


const draw = (context, canvasWidth, canvasHeight) => {

    //   context.fillRect(15, 15, 50, 30);

    // context.moveTo(30,5); // переместить точку в координаты для высечения линии
    // context.lineTo(30,30); // прочертить линию к этим координатам
    // context.lineTo(70,30);
    // context.lineTo(30,5);



    // context.stroke();

    // context.stroke();

    // context.beginPath() // начало и конец цикла рисования
    // context.closePath() // начало и конец цикла рисования

    // context.font = '30px Arial' // еще разные расположения текста
    // context.fillText('test', 200,200)

    const scaleX = 220;
    const scaleY = 220;

    const stepX = Math.round(canvasHeight / scaleY / 2) * scaleY; // нахождение шага прмерно в середине и домножение номера шага на сам шаг, чтобы получить значение, находящееся примерно в середине полотна
    const stepY = Math.round(canvasWidth / scaleX / 2) * scaleX;
    console.log(stepX)
    // console.log(canvasHeight/(stepX/2))


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

    // context.fillText('YYY', stepX,0)
    context.fillText('y', canvasWidth / 2 - 15, 15)
    context.fillText('x', canvasWidth - 20, canvasHeight / 2 - 5)


    const frequency = 1;
    const A = 1;
    const phase = 0;
    const radian = phase * Math.PI / 180;

    for (let i = 0; i <= canvasWidth; i=i+0.25) {
        const x = (i - stepX) / scaleX;
        // const y = Math.pow(x,2);
        const argInSin = 2 * Math.PI * x * frequency;


        const y = Math.sin(argInSin + radian) * A;
        context.fillRect(x * scaleX + stepY-1, stepX - scaleY * y, 2, 2)

    }


}; // Example taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage



function App() {
    return (
        <div className="App">
            <Canvas className='canvas' draw={draw} height={canvasHeight} width={canvasWidth} />



        </div>
    );
}

export default App;
