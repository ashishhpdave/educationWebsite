import MiddleRow from "../../../component/about-row"
import AboutMiddleImg from "../../../component/aboutMiddleImg"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"

function AboutPage(){
    return(
        <>
               <header>
                <Header page="home"/>
            </header>
            <MiddleRow ptext="About" title="About"/>
            <AboutMiddleImg />
            <Footer />
        </>
    )
}

export default AboutPage