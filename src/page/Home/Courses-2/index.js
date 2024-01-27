import MiddleRow from "../../../component/about-row"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"
import Courses2MainBox from "../../../component/courses2MainBox"

function Courses2Page(){
    return(
        <>
            <header>
                <Header page="Courses-2"/>
            </header>
            <MiddleRow ptext="Courses-2" title="Courses-2"/>
            <Courses2MainBox />
           <Footer />
        </>
    )
}

export default Courses2Page