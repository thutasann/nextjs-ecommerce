import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from 'react-elastic-carousel'
import Link from 'next/link'
import Data from '../../mock';
import Image from 'next/image';
import { list } from 'postcss';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 8 }
];


const ItemDisplays = () => {

    const [ products, setProducts ] = useState([]);

    const categories = Data.categories;

    useEffect(() => {
        const res = fetch("https://nodejs-ecom-api.herokuapp.com/klink-ecom/api/v1/products/list")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }, []);

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
                    products.length === 0 ? (
                        <div className="spinner-container">
                            <div className="loading-spinner">
                            </div>
                        </div>
                    ) :
                    products.map((item, index) => {
                        return (
                            <div 
                                key={index}
                                className='itemsWrapper__items__card'
                            >
                                <Image
                                    src="/assets/klink-thumbnail.png"
                                    width="224px"
                                    height="195px"
                                    priority
                                    alt="Title"
                                />
                                <h3>
                                    {item?.title}
                                </h3>
                                <p>
                                    <span>Ks</span>
                                    <b>$ {item?.price}</b>
                                </p>
                            </div>
                        )
                    })
                }

            </motion.div>

        </div>
    )
}

export default ItemDisplays;