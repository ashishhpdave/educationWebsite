import DesignearName from "../../component/common/designerName"
import Footer from "../../component/common/footer"
import Header from "../../component/common/header"
import Hero from "../../component/common/hero"
import ImagesRow from "../../component/imagesRow"
function HomePage(){
    return(
        <>
            <header>
                <Header page="home"/>
            </header>
            <Hero />
            <ImagesRow />
            <Footer />
            <DesignearName />
        </>
    )
}

export default HomePage