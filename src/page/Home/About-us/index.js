import AboutRow from "../../../component/about-row"
import AboutMiddleImg from "../../../component/aboutMiddleImg"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"

function AboutPage(){
    return(
        <>
               <header>
                <Header page="home"/>
            </header>
            <AboutRow title="About"/>
            <AboutMiddleImg />
            <Footer />
        </>
    )
}

export default AboutPage