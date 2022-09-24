import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from 'framer-motion';

const SideBar = ({ showSidebar, setShowSidebar }) => {



    return (
        <>
            {showSidebar && (
                <button
                    className="sidebarClose"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <AiFillCloseCircle size={40}/>
                </button>
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