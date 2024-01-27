import { NavLink } from "react-router-dom"
import { FaBook } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";
function Courses2Box(courses2Data) {
    return (
        <>
            <div className="courses2Boxses1">
                <div className="image">
                    <img src={courses2Data.img} alt=""/>
                </div>
                <div className="content">
                    <span>{courses2Data.span}</span>
                    <h3>{courses2Data.h3}<br/> </h3>
                    <p>{courses2Data.p}</p>
                    <div className="courses2readmore"><NavLink href="#">read more</NavLink></div>
                    <div className="icons">
                        <div className="modules1"> <NavLink href="#"><i className=""><FaBook /></i> 12 modules </NavLink></div>
                        <div className="hours6"> <NavLink href="#"><i className=""><AiFillClockCircle /></i> 6 hours </NavLink></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses2Box