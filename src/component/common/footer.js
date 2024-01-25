import { NavLink } from "react-router-dom"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Footer(){
    return(
        <>
             <div class="footerStrat">
                <div class="footerMainBox">
                    <div class="FirstTextBox">
                        <div class="firstText">Explore</div>
                        <div class="mainMenuBar">
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Home </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> About </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Courses-1 </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Courses-2 </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Courses-3 </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Teacers </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Blog </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Contact </NavLink></div>
                        </div>
                    </div>

                    {/* <!-- 2nd Box --> */}

                    <div class="FirstTextBox">
                        <div class="firstText">Categories</div>
                        <div class="mainMenuBar">
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Web Designe </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Graphic
                                    Designe</NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> UI / UL Designe
                                </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> seo Marketing </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> digital Markating
                                </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Eamil Marketing
                                </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> All Courses </NavLink>
                            </div>

                        </div>
                    </div>

                    {/* <!-- 3rd Box --> */}

                    <div class="FirstTextBox">
                        <div class="firstText">Quick Links</div>
                        <div class="mainMenuBar">
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> My Account </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Feedback </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Help Center </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Certifecates </NavLink>
                            </div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class> <FaArrowRight /></i> Newsletter </NavLink>
                            </div>

                        </div>
                    </div>

                    {/* <!-- 4th Box --> */}

                    <div class="FirstTextBox">
                        <div class="firstText">Floow Us</div>
                        <div class="mainMenuBar">
                            <div class="fMenuItm"><NavLink href="/home"> <i class > <FaFacebook /></i> Facebook </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class><FaTwitter /></i>Twitter </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class><FaLinkedin /></i> Linckedin </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class><FaInstagram /></i> instagram </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class><FaPinterestP /></i> pinterest </NavLink></div>
                            <div class="fMenuItm"><NavLink href="/home"> <i class><FaGithub /></i>Github </NavLink></div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer