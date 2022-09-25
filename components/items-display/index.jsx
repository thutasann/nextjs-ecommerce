import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from 'react-elastic-carousel'
import Link from 'next/link'
import Data from '../../mock';
import Image from 'next/image';
import { MagnifyingGlass } from 'react-loader-spinner'
import SideBar from '../sidebar';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../slices/cartSlice';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 8 }
];


const ItemDisplays = () => {

    const categories = Data.categories;
    const [ products, setProducts ] = useState([]);
    const [ showSidebar, setShowSidebar ] = useState(false);
    const dispatch = useDispatch();

    // Fetching Products
    useEffect(() => {
        const res = fetch("https://nodejs-ecom-api.herokuapp.com/klink-ecom/api/v1/products/list")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }, []);

    // ADD TO CART
    const addToCart = (product) => {
        console.log("Add to cart product", product);
        dispatch(addProduct(product))
    }


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
                className="itemsWrapper__items"
            >   

                {
                    products.length === 0 ? (
                        <MagnifyingGlass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="MagnifyingGlass-loading"
                            wrapperStyle={{}}
                            wrapperClass="MagnifyingGlass-wrapper"
                            glassColor = '#efefef'
                            color = '#1726BD'
                        />
                    ) :
                    products.map((item, index) => {
                        return (
                            <div 
                                onClick={() => {
                                    setShowSidebar(true);
                                    addToCart(item)
                                }}
                                key={index}
                                className='itemsWrapper__items__card'
                            >
                                <Image
                                    src="/assets/klink-thumbnail.png"
                                    width="224px"
                                    height="195px"
                                    placeholder='blur'
                                    blurDataURL='/assets/klink-thumbnail.png'
                                    loading='lazy'
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

            {/* Sidebar */}
            <SideBar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

        </div>
    )
}

export default ItemDisplays;