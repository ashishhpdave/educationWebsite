import CoursesBoxMain from "../../../component/CoursesBox"
import MiddleRow from "../../../component/about-row"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"

function Courses1Page(){
     return(
        <>
              <header>
                <Header page="Courses"/>
            </header>
            <MiddleRow ptext="Courses-1" title="Courss-1"/>
           <CoursesBoxMain />
            <Footer />
        </>
     )
}

export default Courses1Page