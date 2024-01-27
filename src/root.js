import '../src/CSS/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/Home'
import AboutPage from './page/Home/About-us'
function Root(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root