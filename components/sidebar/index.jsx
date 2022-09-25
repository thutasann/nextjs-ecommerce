import React from 'react'
import { AiFillCloseCircle, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../slices/cartSlice';
import Image from 'next/image';
import { AiOutlineClose } from "react-icons/ai";

const SideBar = ({ showSidebar, setShowSidebar }) => {

    const dispatch = useDispatch();

    // Cart Items From Redux Store
    const cartItems = useSelector((state) => state?.cart);
    console.log(cartItems);

    // ClearCart
    const clear = () => {
        dispatch(clearCart());
    }

    return (
        <>
            {showSidebar && (
                <motion.button
                    className="sidebarClose"
                    onClick={() => {
                        setShowSidebar(!showSidebar);
                        clear();
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

                    <div className='sideBar__wrapper__heading'>
                        <h2>Order Details</h2>
                    </div>

                    <div className="sideBar__wrapper__products">
                        {
                            cartItems?.products?.length === 0 ? (
                                <h1>No Product found</h1>
                            ): (
                                cartItems?.products?.map((item, index) => {
                                    return (
                                        <div 
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
                                                />
                                            </div>
                                            <div className="sideBar__wrapper__products__product__info">
                                                <h2>
                                                    {item?.title}
                                                </h2>
                                                <div className='sideBar__wrapper__products__product__info__btns'>
                                                    <button className='sideBar__wrapper__products__product__info__btns__minus'>
                                                        -
                                                    </button>
                                                    <input 
                                                        type="number" 
                                                        min={0}
                                                    />
                                                    <button className='sideBar__wrapper__products__product__info__btns__plus'>
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
                                                />
                                            </div>
                                        </div>
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