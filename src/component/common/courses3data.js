import { FaPlay } from "react-icons/fa";
function Courses3Data(courses3videoData) {
    return (
        <>
            <div class="courses3mainBox1">
                <div class="courses3box1">
                    <div class="video">
                        <i class=""><FaPlay /></i>
                        <video src={courses3videoData.video}></video>
                    </div>
                </div>
                <div class="content">
                    <h3>{courses3videoData.h3}</h3>
                    <p>{courses3videoData.p}</p>
                </div>
            </div>

        </>
    )
}

export default Courses3Data