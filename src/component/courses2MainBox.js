import Courses2Box from "./common/courses2Box"

const Courses2BoxData = [
    {
        img : "images/main-course-1.png",
        span :"business",
        h3 : "learning is what makes you perfect",
        p : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quos, Quam."
    },
    {
        img : "images/main-course-2.png",
        span :"business",
        h3 : "learning is what makes you perfect",
        p : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quos, Quam."
    },
    {
        img : "images/main-course-3.png",
        span :"business",
        h3 : "learning is what makes you perfect",
        p : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quos, Quam."
    },
    {
        img : "images/main-course-4.png",
        span :"business",
        h3 : "learning is what makes you perfect",
        p : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quos, Quam."
    },
    {
        img : "images/main-course-5.png",
        span :"business",
        h3 : "learning is what makes you perfect",
        p : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quos, Quam."
    },
    {
        img : "images/main-course-6.png",
        span :"business",
        h3 : "learning is what makes you perfect",
        p : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quos, Quam."
    },
]

function Courses2MainBox(){
    return(
        <>
             <div class="bigBoxses">
             <div class="bigBoxsesRow1">
                    {
                        Courses2BoxData.map(function(item){
                            return(
                                <>
                                    <Courses2Box img={item.img} span={item.span} h3={item.h3} p={item.h3}/>
                                </>
                            )
                        })

                    }
             </div>
             </div>
        </>
    )
}

export default Courses2MainBox