import '../src/CSS/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/Home'
function Root(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root