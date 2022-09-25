import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from '../../slices/cartSlice';
import Image from 'next/image';
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCartXFill } from 'react-icons/bs';

interface state{
    cart: any
}

const SideBar = ({ showSidebar, setShowSidebar }) => {

    const dispatch = useDispatch();

    // Cart Items From Redux Store
    const cart = useSelector((state : state) => state?.cart);

    // ClearCart
    const clear = () => {
        dispatch(clearCart());
    }

    const [ inputQty, setInputQty ] = useState<number>(cart?.quantity);

    const getSubTotalPrice = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item?.quantity * item?.price, 0
        )
    }


    return (
        <>
            {showSidebar && (
                <motion.button
                    className="sidebarClose"
                    onClick={() => {
                        setShowSidebar(!showSidebar);
                    }}
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
                            duration: 0.5
                        }}
                        className='sideBar__wrapper__heading'
                    >
                        <h2>Order Details</h2>
                    </motion.div>

                    {   
                        cart?.length > 0 && (
                            <div className='sideBar__wrapper__clearCart'>
                                <motion.button
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
                                    onClick={() => {
                                        clear();
                                    }}  
                                >
                                    <span>Clear</span> 
                                    <BsFillCartXFill size={18}/>
                                </motion.button>
                            </div>
                        )
                    }   
                    

                    <div className="sideBar__wrapper__products">
                        {
                            cart?.length === 0 ? (
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
                                        duration: 0.5
                                    }}
                                    className='sideBar__wrapper__products__empty'
                                >
                                    <h3>Your cart is currently Empty</h3>
                                    <Image
                                        src="/assets/klink-empty-cart.png"
                                        width={500}
                                        height={500}
                                        placeholder="blur"
                                        blurDataURL='/assets/klink-empty-cart.png'
                                        alt="KLINK ECommerce Empty Cart"
                                    />
                                </motion.div>
                            ): (
                                cart?.map((item: any, index: number) => {
                                    return (
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
                                                duration: 0.5
                                            }}
                                            key={index}
                                            className='sideBar__wrapper__products__product'
                                        >
                                            <div className="sideBar__wrapper__products__product__img">
                                                <Image
                                                    src="/assets/klink-thumbnail.png"
                                                    width="117px"
                                                    height="117px"
                                                    priority
                                                    alt="Cart Item"
                                                    placeholder='blur'
                                                    blurDataURL='/assets/klink-thumbnail.png'
                                                />
                                            </div>
                                            <div className="sideBar__wrapper__products__product__info">
                                                <h2>
                                                    {item?.title} 
                                                </h2>
                                                <div className='sideBar__wrapper__products__product__info__btns'>
                                                    <button 
                                                        onClick={() => dispatch(decrementQuantity(item?._id))}
                                                        className='sideBar__wrapper__products__product__info__btns__minus'
                                                    >
                                                        -
                                                    </button>
                                                    <input 
                                                        type="number" 
                                                        min={0}
                                                        value={item?.quantity}
                                                        onChange={(e: any) => setInputQty(e.target.value)}
                                                    />
                                                    <button 
                                                        onClick={() => dispatch(incrementQuantity(item?._id))}
                                                        className='sideBar__wrapper__products__product__info__btns__plus'>
                                                        +
                                                    </button>

                                                    <p>
                                                        Ks {item?.price}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sideBar__wrapper__products__product__closeBtn">
                                                <AiOutlineClose 
                                                    size={29}
                                                    onClick={
                                                        () => dispatch(removeFromCart(item?._id))
                                                    }
                                                />
                                            </div>
                                        </motion.div>
                                    )
                                })
                            )
                        }
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
                        <div className='sideBar__footer__grid__right'>Ks {getSubTotalPrice()}</div>
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