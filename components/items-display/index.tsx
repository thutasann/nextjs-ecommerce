import React from 'react'
import { motion } from 'framer-motion'
import Carousel from 'react-elastic-carousel'
import Link from 'next/link'
import Data from '../../mock';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 8 }
];

const ItemDisplays = () => {

    const categories = Data.categories;
    

    return (
        <motion.div 
            initial={{
                y: 100,
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
            className='itemsWrapper'
        >

            <div className="itemsWrapper__categories">
                <Carousel
                    breakPoints={breakPoints} pagination={false}
                >
                    {
                        categories.map((cate, index) => (
                            <div
                                key={index}
                                className="itemsWrapper__categories__category"
                            >
                                <span>{cate.category}</span>
                            </div>
                        ))
                    }
                </Carousel>
            </div>

        </motion.div>
    )
}

export default ItemDisplays