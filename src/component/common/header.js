import { NavLink } from "react-router-dom"

function Header(page) {
    return(
        <>
            <div className="head">
                <div className="edulogo"> <NavLink href="#"> <i className='fas fa-graduation-cap'></i></NavLink>Educa
                </div>
                <div className="menu">
                    <div className={page === 'Home' ? 'menuitem' : 'menuitem'}> 
                    <NavLink className="" to="/">Home</NavLink></div>
                    <div className={page === 'Home' ? 'menuitem' : 'menuitem'}> 
                    <NavLink className="" to="/about">About</NavLink></div>
                    <div className="menuitem"> <NavLink href="">Courses +</NavLink>
                        <div className="sublistMain">
                            <div className="subList"> <NavLink href="#"> Courses-1 </NavLink></div>
                            <div className="subList"><NavLink href="#"> Courses-2 </NavLink></div>
                            <div className="subList"><NavLink href="#"> Courses-3 </NavLink></div>
                        </div>

                    </div>

                    <div className="menuitem"> <NavLink href="#">Contact</NavLink></div>
                </div>
            </div>
        </>
    )
}

export default Header