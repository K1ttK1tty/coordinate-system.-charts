import React from 'react';
import PropTypes from "prop-types";
import { useRef } from 'react';
const Canvas = function ({ draw, height, width, getMousePosition}) {
    const canvas = React.useRef();
    React.useEffect(() => {
        const context = canvas.current.getContext("2d");
        const canvasWidth = width;
        const canvasHeight = height;
        draw(context, canvasWidth, canvasHeight);
    });

    Canvas.propTypes = {
        draw: PropTypes.func.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    };

    return <canvas onMouseMove={getMousePosition} ref={canvas} height={height} width={width} />;
};
export default Canvas;
