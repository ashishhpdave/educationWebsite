import CoursesBoxData from "./common/coursesBox"

const boxData = [
    {
        img : "images/course-1.png",
        h3 : "web design",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
    {
        img : "images/course-2.png",
        h3 : "seo-marketing",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
    {
        img : "images/course-3.png",
        h3 : "Science & Biology",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
    {
        img : "images/course-4.png",
        h3 : "Music & Dance",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
    {
        img : "images/course-5.png",
        h3 : "Digital Marketing",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
    {
        img : "images/course-6.png",
        h3 : "Maths & Statistics",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
    {
        img : "images/course-7.png",
        h3 : "Data Analysis",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
    {
        img : "images/course-8.png",
        h3 : "Email Marketing",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
    {
        img : "images/course-9.png",
        h3 : "Graphic Design",
        p : "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Cumque, Earum."
    },
]

function CoursesBoxMain(){
    return(
        <>
            <div className="CoursesMiddle">
            <div class="boxses">
             <div class="firsrRowBox">
                {
                    boxData.map(function(item){
                        return(
                            <>
                            <CoursesBoxData img={item.img} h3={item.h3} p={item.p}/>
                            </>
                        )
                    })
                }
             </div>
             </div>
            </div>
        </>
    )
}

export default CoursesBoxMain