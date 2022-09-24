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
                <h2>Order Details</h2>
            </div>
        </>
    )
}

export default SideBar