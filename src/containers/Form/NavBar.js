import React, {useState, useRef} from 'react'
import useViewport from '../../hooks/useViewprot'
import useScroll from '../../hooks/useScroll'
import useOutsideClick from '../../hooks/useOutSideClick'
import { motion } from "framer-motion";
import {navbarFadeInVariants} from '../../hooks/motionUtils'
import { FaCaretDown  } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./style/Navbar.scss"

const NavBar = () => {
    const { width } = useViewport();
    const isScrolled = useScroll(70);
    const [genresNav, setGenresNav] = useState(false);
    const genresNavRef = useRef();
    const profileNavRef = useRef();
    
    // const currentUser = useSelector(selectorC)

    const dispatch = useDispatch();

    useOutsideClick(genresNavRef, () => {
        if (genresNav) setGenresNav(false);
    })
    useOutsideClick(profileNavRef, () => {
        // if (profileNav) setProfileNav(false);
    })


    return (
        <>
          <motion.nav
             className={`Navbar ${isScrolled && "Navbar__fixed"}`}
             variants={navbarFadeInVariants}
             initial="hidden"
             animate="visible"
             exit="hidden"
          >
              <Link to="/">
                {width >= 1024 ? (
                    <ul className="Navbar__primarynav Navbar__navlinks">
                        <li className="Navbar__navlinks--link">
                        <NavLink to="/browse" activeClassName="activeNavLink">
                            홈
                        </NavLink>
                        </li>
                        <li className="Navbar__navlinks--link">
							<NavLink to="/tvseries" activeClassName="activeNavLink">
								TV Series
							</NavLink>
						</li>
						<li className="Navbar__navlinks--link">
							<NavLink to="/movies" activeClassName="activeNavLink">
								Movies
							</NavLink>
						</li>
						<li className="Navbar__navlinks--link">
							<NavLink to="/popular" activeClassName="activeNavLink">
								New & Popular
							</NavLink>
						</li>
						<li className="Navbar__navlinks--link">
							<NavLink to="/mylist" activeClassName="activeNavLink">
								My list
							</NavLink>
						</li>
					</ul>
                ) : (
                    <div></div>
                )}
             </Link>
           </motion.nav>
        </>
    )
}

export default NavBar
