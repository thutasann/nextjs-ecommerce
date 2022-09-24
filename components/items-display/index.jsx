import React from 'react'
import { motion } from 'framer-motion'
import Carousel from 'react-elastic-carousel'
import Link from 'next/link'
import Data from '../../mock';
import Image from 'next/image';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 8 }
];

const ItemDisplays = () => {

    const categories = Data.categories;
    

    return (
        <div className='itemsWrapper'>

            {/* Categories */}
            <motion.div 
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
                className="itemsWrapper__categories"
            >
                <Carousel
                    breakPoints={breakPoints} 
                    pagination={false}
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
            </motion.div>

            {/* Items Grid */}
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
                className="itemsWrapper__items"
            >   

                {
                    categories.map((item, index) => {
                        return (
                            <div className='itemsWrapper__items__card'>
                                <Image
                                    src="/assets/klink-thumbnail.png"
                                    width="224px"
                                    height="195px"
                                    priority
                                    alt="Title"
                                />
                                <h3>
                                    Couple Shoes 2021 New One Man and One Woman Spring Korean
                                </h3>
                                <p>
                                    <span>Ks</span>
                                    <b>$3,000</b>
                                </p>
                            </div>
                        )
                    })
                }

            </motion.div>

        </div>
    )
}

export default ItemDisplays