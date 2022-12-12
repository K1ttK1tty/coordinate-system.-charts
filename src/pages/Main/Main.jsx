import '../../App.css';
import React from "react";
import Canvas from "../../components/Canvas"; // Change the path according to the directory structure of your project
import '../../styles/canvas.css'
import { useState } from 'react';
import ImgWithDescribe from '../../components/UI/ImgWithDescribe/ImgWithDescribe';
const Main = function () {

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
        <div className="App" >
            <h2 className="title tac">Синусоидальный сигнал</h2>
            {/* <div className="article">

                <p className='subTitle'>Данная страница создана для того, чтобы визуально показать изменение синусоидального сигнала в зависимости от изменения его аргументов. Прежде всего это будет полезно новичкам и людям, которые не знакомы с данной темой.</p>
                
                <p className='mb16' >Синусоидальный сигнал - простейший сигнал, описывающийся функцией y=Asin(2<span className='symbol'>π</span>ft + <span className='symbol'>&#966;</span>), где A - амплитуда, f - частота, t - время , <span className='symbol'>&#966;</span> - фаза. Эта функция непрерывная и периодичная, то есть через некоторый промежуток времени она будет повторяться.</p>
                <ul> Теперь разберёмся с аргументами:<li>Амплитуда А - это наибольшее отклонение величины относительно оси х.</li><li>Частота f - это число полных колебаний за единицу времени. Частота обратно пропорциональна периоду Т (f = 1/T).</li><li>Период - это время одного полного колебания, на декартовой(прямоугольной) системе координат период Т - расстояние между двумя одинаковыми значениями колебяющейся величины.</li><li>Начальная фаза <span className='symbol'>&#966;</span> - это отклонение колеблющейся точки от положения равновесия,выражается в градусах или радианах.</li></ul>
                
                <ImgWithDescribe img ={require('../../components/UI/ImgWithDescribe/images/34.png')} desc={'Рисунок 1 - синусоидальный сигнал'}/>

                <p className='mb16'>Теперь давайте разбираться. Как будет менятся график функции при изменении его параметров? С амплитудой все просто, синусоида будет расти или уменьшаться по оси У. А как изменится график, если его частота увеличится в 2 раза? <p>Выберем синусоиду, у которой будем менять параметры:</p></p>

                <ImgWithDescribe img={require('../../components/UI/ImgWithDescribe/images/newSystem.png')} desc={'Рисунок 2 - синусоида для изменения'}/>
            
                <p className='mb16'>Итак, мы хотим узнать, как поменяется синусоида с изменением частоты. Вспомним теорию: частота - это число полных колебаний в единицу времени. Возьмём одно целое колебание, оно начинается в 0 и заканчивается в точке 2. Тогда, мы имеем одно полное колебание за 2 секунды, а частота f=1/2.</p>
                <p className='mb16'>Чаще всего частоту определяют через период Т.Период найдём, посчитав время одного полного колебания. В нашем случае Т=2. Частота обратно пропорциональна периоду, соответственно f=1/T=1/2.</p>

                <ImgWithDescribe img={require('../../components/UI/ImgWithDescribe/images/freeq1.png')} desc={'Рисунок 3 - увеличение частоты в 2 раза'}/>

                <p>Теперь разберёмся с фазой. Изменение фазы - это фактически сдвиг графика на величину <span className='symbol'>&Delta;</span>t, то есть при изменени фазы сдвигается по оси t.</p>



            </div> */}

            




            <div className="position">X={xyPosition[0]}</div>
            <div className="position">Y={xyPosition[1]}</div>
            <Canvas getMousePosition={getMousePosition} canvasWidth={canvasWidth} canvasHeight={canvasHeight} scaleY={scaleY} scaleX={scaleX} stepX={stepX} stepY={stepY} />

        </div>
    );
};
export default Main;