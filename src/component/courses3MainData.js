import Courses3Data from "./common/courses3data"

const Courses3MianDataArray = [
    {
        video : "images/course-vid-1.mp4",
        h3 : "Introduction To Design",
        p : "By John Deo"
    },
    {
        video : "images/course-vid-2.mp4",
        h3 : "Introduction To Design",
        p : "By John Deo"
    },
    {
        video : "images/course-vid-3.mp4",
        h3 : "Introduction To Design",
        p : "By John Deo"
    },
    {
        video : "images/course-vid-4.mp4",
        h3 : "Introduction To Design",
        p : "By John Deo"
    },
    {
        video : "images/course-vid-5.mp4",
        h3 : "Introduction To Design",
        p : "By John Deo"
    },
    {
        video : "images/course-vid-6.mp4",
        h3 : "Introduction To Design",
        p : "By John Deo"
    },
]

function CoursesMainData(){
    return(
        <>
             <div class="courses3MainMiddle">
             <div class="courses3Row1">
                {
                    Courses3MianDataArray.map(function(item){
                        return(
                            <>
                        <Courses3Data video={item.video} h3={item.h3} p={item.p}/>
                            
                            </>
                        )
                    })
                }
             </div>
             </div>
        </>
    )
}

export default CoursesMainData