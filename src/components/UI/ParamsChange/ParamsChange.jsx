import React from 'react';
import cl from './ParamsChange.module.css'
const ParamsChange = function ({ args, setArgs }) {

    return (
        <div className={cl.wrap}>
            <p className={cl.title}>Параметры</p>
            <div className={cl.params}>
                <ul className={cl.listAmpl}>
                    <span className={cl.titleA}>Амплитуда:</span>
                    <li><label htmlFor="apl1">1</label><input onChange={e => setArgs({ ...args, A: e.target.value })} id='apl1' type="radio" value={1} name='val' defaultChecked={true} /></li>
                    <li><label htmlFor="apl2">2</label><input onChange={e => setArgs({ ...args, A: e.target.value })} id='apl2' type="radio" value={2} name='val' /></li>
                    <li><label htmlFor="apl3">3</label><input onChange={e => setArgs({ ...args, A: e.target.value })} id='apl3' type="radio" value={3} name='val' /></li>
                </ul>
                <div className="frequency"><span className='labelFreq'>Частота: </span> <input onChange={e => setArgs({ ...args, frequency: e.target.value })} value={args.frequency} type="text" /></div>
                <div className="phase"><span className='labelPhase'>Начальная фаза: </span> <input onChange={e => setArgs({ ...args, phase: e.target.value })} value={args.phase} type="text" /></div>
            </div>

        </div>
    )
};
export default ParamsChange;