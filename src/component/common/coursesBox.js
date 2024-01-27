import { NavLink } from "react-router-dom"

function CoursesBoxData(CoursesData) {
    return (
        <>
            <div class="box1">
                <img src={CoursesData.img} alt="" />
                <h3>{CoursesData.h3}</h3>
                <p>{CoursesData.p}</p>
                <NavLink to="#"  activeClassName="active">read more</NavLink>
            </div>
        </>
    )
}

export default CoursesBoxData