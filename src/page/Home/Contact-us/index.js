import MiddleRow from "../../../component/about-row"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"
import ConatctUS from "../../../component/contact-us"

function ContactUsPage(){
    return(
        <>
            <header>
                <Header page="Contact"/>
            </header>
            <MiddleRow ptext="Contact" title="Contact-Us"/>
            <ConatctUS />
            <Footer />
        </>
    )
}

export default ContactUsPage