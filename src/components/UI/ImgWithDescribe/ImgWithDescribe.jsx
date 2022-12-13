import React from 'react';
const ImgWithDescribe = function ({ img, desc, children }) {
    return (
        <div className='imgWrapper'><img className='mainSinImg' src={img} />{desc}{children ? children : ''}</div>
    )
};
export default ImgWithDescribe; 