import { NavLink } from "react-router-dom"

function Header(page) {
    return(
        <>
            <div class="head">
                <div class="edulogo"> <NavLink href="#"> <i class='fas fa-graduation-cap'></i></NavLink>Educa
                </div>
                <div class="menu">
                    <div class="menuitem"> <NavLink href="#">Home</NavLink></div>
                    <div class="menuitem"> <NavLink href="#">About</NavLink></div>
                    <div class="menuitem"> <NavLink href="">Courses +</NavLink>
                        <div class="sublistMain">
                            <div class="subList"> <NavLink href="#"> Courses-1 </NavLink></div>
                            <div class="subList"><NavLink href="#"> Courses-2 </NavLink></div>
                            <div class="subList"><NavLink href="#"> Courses-3 </NavLink></div>
                        </div>

                    </div>

                    <div class="menuitem"> <NavLink href="#">Contact</NavLink></div>
                </div>
            </div>
        </>
    )
}

export default Header