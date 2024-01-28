import '../src/CSS/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/Home'
import AboutPage from './page/Home/About-us'
import Courses1Page from './page/Home/courses-1'
import Courses2Page from './page/Home/Courses-2'
import Courses3Page from './page/Home/courses-3'
function Root(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/Courses-1" element={<Courses1Page />}/>
                    <Route path="/Courses-2" element={<Courses2Page />}/>
                    <Route path="/Courses-3" element={<Courses3Page />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root