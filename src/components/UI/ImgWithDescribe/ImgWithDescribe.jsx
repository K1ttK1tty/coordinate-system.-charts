 import React from 'react';
const ImgWithDescribe = function ({img,desc}) {
    
    return (
        <div className='imgWrapper'><img className='mainSinImg' src={img} />{desc}</div>
    )
};
export default ImgWithDescribe; 