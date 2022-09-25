import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import useToggle from '../../hook';
import MobileNav from '../mobile-nav';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logout } from '../../slices/userSlice';
import { BsFillCartFill } from "react-icons/bs";

interface state{
    user: any
}

const NavBar = () => {

    const { state, dispatch } = useToggle();
    const router = useRouter();
    const dispatchRedux = useDispatch();

    // User From Redux Store
    const user = useSelector((state: state) => state?.user?.currentUser);

    useEffect(() => {
        if(user){
            router.push("/")
        } 
    }, [user]);

    const logoutSubmit = () => {
        dispatchRedux(logout());
    }

    return (
        <div className='navbarWrapper'>

            {state === "on" && <MobileNav dispatch={dispatch} />}


            {
                state === "off" && (
                    <motion.div 
                        initial={{
                            x: -100,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 1
                        }}
                        className="navbarWrapper__logo"
                    >
                        <Image
                            src="/assets/klink-logo.webp"
                            width={151}
                            height={35}
                            alt='KLINK Ecommerce'
                            priority
                        />
                    </motion.div>
                )
            }
            

            <motion.button
                initial={{
                    y: -100,
                    x: 10,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    y:0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                name="Hamburger"
                aria-label="Hamburger"
                className="hamburger"
                onClick={() => dispatch("on")}
            >
                <AiOutlineMenu/>
            </motion.button>


            <motion.div 
                initial={{
                    y: -100,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    y:0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='navbarWrapper__search'
            >
                <div className="navbarWrapper__search__container">
                    <input
                        type={'text'}
                        placeholder='Search'
                        className='navbarWrapper__search__container__input'
                        spellCheck={false}
                    />
                    <button
                        className='navbarWrapper__search__container__btn'
                    >
                        <AiOutlineSearch size={20}/>
                    </button>
                </div>
                
            </motion.div>

            <motion.div 
                initial={{
                    x: 100,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='navbarWrapper__ctas'
            >
                {
                    user ? (
                        <>
                            <span>{user?.email}</span>
                            <button
                                onClick={logoutSubmit}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link 
                            href={'/signin/'}
                        >
                            Sign In
                        </Link>
                    )
                }
            </motion.div>
        </div>
    )
}

export default NavBar