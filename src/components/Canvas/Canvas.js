import React from 'react';

const Canvas = function ({ getMousePosition, canvasWidth, canvasHeight, scaleY, scaleX, stepX, stepY }) {
    const canvas = React.useRef();

    const draw = (context, canvasWidth, canvasHeight) => {
        // линии координат
        context.beginPath();
        context.font = `${scaleX / 4}px Arial` // еще разные расположения текста
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
        for (let i = -canvasWidth / 5; i <= canvasWidth; i = i + 0.01) {
            const x = (i - stepX) / scaleX;
            // const y = Math.pow(x,1000);
            // const y = Math.pow(x, 2);
            const argInSin = 2 * Math.PI * x * frequency;

            const y = A * Math.sin(argInSin + radian);
            context.fillStyle = "blue";
            context.fillRect(x * scaleX + stepY - 1, stepX - scaleY * y, 2, 2)

        }
    }

    React.useEffect(() => {
        const context = canvas.current.getContext("2d");
        const canvasWidth = 800;
        const canvasHeight = 480;
        draw(context, canvasWidth, canvasHeight);
    });

    // Canvas.propTypes = {
    //     draw: PropTypes.func.isRequired,
    // };


    return <canvas onMouseMove={getMousePosition} className='canvas' ref={canvas} height={canvasHeight} width={canvasWidth} />
};
export default Canvas;
