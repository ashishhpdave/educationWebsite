import { NavLink } from "react-router-dom"

function AboutRow(item) {
    const {title} = item
    return (
        <>
            <div className="aboutHeadRow">
                <h1>{title}</h1>
                <div className="hometext"> <NavLink to="/"> Home  </NavLink> About</div>
            </div>
        </>
    )
}

export default AboutRow