import React from 'react';
import cl from './ParamsChange.module.css'
import { useState } from 'react';
const ParamsChange = function ({ args, setArgs}) {

    function submit(e) {
        // console.log('частота ' + frequency)
        // console.log(typeof phase)
        // console.log('амплитуда ' + amplitude)

        e.preventDefault();

    }
    return (
        <div className={cl.wrap}>
            <p className={cl.title}>Параметры</p>

            <div className={cl.params}>
                <form onSubmit={submit} className='formParams'>
                    <ul className={cl.listAmpl}>
                        <span className={cl.titleA}>Амплитуда:</span>
                        <li><label htmlFor="apl1">1</label><input onChange={e => setArgs({...args,A: e.target.value})} id='apl1' type="radio" value={1} name='val' /></li>
                        <li><label htmlFor="apl2">2</label><input onChange={e => setArgs({...args,A: e.target.value})} id='apl2' type="radio" value={2} name='val' /></li>
                        <li><label htmlFor="apl3">3</label><input onChange={e => setArgs({...args,A: e.target.value})} id='apl3' type="radio" value={3} name='val' /></li>
                    </ul>
                    <div className="frequency"><span className='labelFreq'>Частота: </span> <input onChange={e => setArgs({...args,frequency: e.target.value})} value={args.frequency} type="text" /></div>
                    <div className="phase"><span className='labelPhase'>Начальная фаза: </span> <input onChange={e => setArgs({...args,phase: e.target.value})} value={args.phase} type="text" /></div>
                    <input type="submit" value={"Изменить"} />
                </form>
            </div>



        </div>
    )
};
export default ParamsChange;