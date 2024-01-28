import MiddleRow from "../../../component/about-row"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"
import CoursesMainData from "../../../component/courses3MainData"

function Courses3Page(){
    return(
        <>
            <header>
                <Header page="Courses-3"/>
            </header>
            <MiddleRow ptext="Courses-3" title="Courses-3"/>
            <CoursesMainData />
            <Footer />
        </>
    )
}

export default Courses3Page