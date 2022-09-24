import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from 'framer-motion';

const SideBar = ({ showSidebar, setShowSidebar }) => {



    return (
        <>
            {showSidebar && (
                <motion.button
                    className="sidebarClose"
                    onClick={() => setShowSidebar(!showSidebar)}
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
                        duration: 0.5
                    }}
                >
                    <AiFillCloseCircle size={40}/>
                </motion.button>
            )}
            <div 
                className={`sideBar ${
                    showSidebar ? "translate-x-0 transition-all delay-150 " : "translate-x-full"
                }`}
            >
                <div className='sideBar__wrapper'>

                    <div className='sideBar__wrapper__heading'>
                        <h2>Order Details</h2>
                    </div>

                </div>

                <motion.div 
                    initial={{
                        x: 100,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    className='sideBar__footer'
                >
                    <div className='sideBar__footer__Subtotal sideBar__footer__grid'>
                        <div>Subtotal</div>
                        <div className='sideBar__footer__grid__right'>Ks 9000</div>
                    </div>

                    <div className='sideBar__footer__Tax sideBar__footer__grid'>
                        <div>Tax (5%)</div>
                        <div className='sideBar__footer__grid__right'>Ks 450</div>
                    </div>

                    <hr className='sideBar__footer__Divider'  />

                    <div className='sideBar__footer__Total sideBar__footer__grid'>
                        <div>Total</div>
                        <div className='sideBar__footer__grid__right'>Ks 9450</div>
                    </div>

                    <div className='sideBar__footer__PayNow sideBar__footer__grid'>
                        <button
                            type='submit'
                        >
                            Pay Now
                        </button>
                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default SideBar