import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Test from '../pages/Test/Test';
const AppRouter = function () {

    return (
        <Routes >
            <Route path='/main' element={<Main/>}></Route>
            <Route path='/test' element={<Test />}></Route>
            <Route path='*' element={<Main/>} />
        </Routes>
    )
};
export default AppRouter;