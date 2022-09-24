import React from 'react'
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MobileNav = ({ dispatch }) => {
    return (
        <div className='mobileNav'>

            <motion.button
                initial={{
                    y: -100,
                    x:10,
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
                aria-label="Close"
                className="mobileNav__close"
                onClick={() => {
                    dispatch("off");
                }}
            >
                <AiOutlineClose/>
            </motion.button>

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
                className="mobileNav__logo"
            >
                <Image
                    src="/assets/klink-logo-white.png"
                    width={151}
                    height={35}
                    alt='KLINK Ecommerce'
                    priority
                />
            </motion.div>

            <motion.div 
                initial={{
                    x: -100,
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
                className='mobileNav__search'
            >
                <div className="mobileNav__search__container">
                    <input
                        type={'text'}
                        placeholder='Search'
                        className='mobileNav__search__container__input'
                        spellCheck={false}
                    />
                    <button
                        className='mobileNav__search__container__btn'
                    >
                        <AiOutlineSearch size={20}/>
                    </button>
                </div>
                
            </motion.div>

            <motion.div 
                initial={{
                    y: 100,
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
                className='mobileNav__ctas'
            >
                <Link 
                    href={'/signin'}
                >
                    Sign In
                </Link>
            </motion.div>
        </div>
    )
}

export default MobileNav