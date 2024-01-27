import { NavLink } from "react-router-dom"

function MiddleRow(item) {
    const {title} = item
    const {ptext} = item
    return (
        <>
            <div className="aboutHeadRow">
                <h1>{title}</h1>
                <div className="hometext"> <NavLink to="/"> Home  </NavLink> <p>{ptext}</p></div>
            </div>
        </>
    )
}

export default MiddleRow