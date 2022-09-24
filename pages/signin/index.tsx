import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { AiFillStar } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { Formik, Form } from 'formik'; // Form validation
import * as Yup from 'yup'; // Form validation
import Link from 'next/link';
import { InputBox } from '../../components/inputbox/';
import Meta from '../../components/meta';
import Image from 'next/image';
import { login } from '../../slices/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';


const SignIn = () => {

    let meta = {
        title: "Sign In | KLINK Ecommerce",
        description:"GWe are a leading System Integration Provider in Myanmar.We are setting the industry standard by providing clients with exceptional levels of service, support and high-quality IT System, security & data solutions throughout Myanmar.",
        keywords: "KLINK, KINK ECOMMERCE, klinkecommerce, klink enterprise, klink, klinkenterprise, KLINK products, KLINK ENTERPRISE, klink enterprise",
        url: "https://klink-ecommerce.vercel.app/signin/",
        image: "/assets/klink-fav.webp",
        ogimage: "/assets/klink-meta-img.webp"
    };


    // User From Redux Store
    const user = useSelector((state) => state?.user?.currentUser);
    
    
    const router = useRouter();
    const stars = [1,2,3,4,5];
    const [ show, setShow ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user){
            router.push("/")
        } 
    }, [user]);


    // validations
    const validate = Yup.object({
        username: Yup.string()
            .required('UserName is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
    });

    // SIGN IN
    const signIn = async (values) => {
        const username = values.username;
        const password = values.password;
        login(
            dispatch, 
            {username, password}
        );
    }

    return (
        <div className='loginWrapper'>
            <Meta meta={meta} />

            {/* Welcome Text */}
            <div 
                className='loginWrapper__welcomeText'
            >

                {/* Header */}
                <motion.div
                    className="loginWrapper__welcomeText__header"
                    initial={{
                        x: -500,
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
                >
                    <Link href={'/'} >
                        <Image
                            src="/assets/klink-logo-white.png"
                            alt="KLINK Ecommerce"
                            width={151}
                            height={35}
                            priority
                            className="cursor-pointer"
                        />
                    </Link>
                </motion.div>

                {/* Middle Content */}
                <motion.div 
                    initial={{
                        y: -100,
                        opacity: 0,
                    }}
                    transition= {{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    className='loginWrapper__welcomeText__content'>
                    <div className='loginWrapper__welcomeText__content__ratings'>
                        {
                            stars.map((index) => (
                                <AiFillStar
                                    key={index}
                                    size={20}
                                />
                            ))
                        }
                    </div>
                    <h1 className="loginWrapper__welcomeText__content__heading">
                        KLink has saved us thousands of hours of work. We’re able to spin up projects and features much faster.
                    </h1>
                    <div className='loginWrapper__welcomeText__content__avatar'>
                        <Image
                            src="/assets/klink-login-avatar.png"
                            alt='KLINK Ecommerce Login Avatar'
                            width={64}
                            height={64}
                            priority
                        />
                        <h3>Lori Bryson</h3>
                        <p>Product Designer, Sisyphus</p>
                    </div>
                </motion.div>
                
                {/* Footer */}
                <motion.div 
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    transition= {{
                        duration: 0.5
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    className="loginWrapper__welcomeText__footer"
                >
                    <div>
                        <a 
                            href="https://klinkenterprise.com/" 
                            target="_blank"
                            rel='noopener'
                        >
                            © klinkenterprise.com
                        </a>
                    </div>
                    <div className='loginWrapper__welcomeText__footer__mailto'>
                        <BsFillEnvelopeFill/>
                        <a href='mailto:help@klinkenterprise.com'>
                            help@klinkenterprise.com
                        </a>
                    </div>
                </motion.div>

            </div>

            {/* Login Form */}
            <div className='loginWrapper__form'>
                <div className="loginWrapper__form__wrapper">
                    <motion.div 
                        initial={{
                            y: -100,
                            opacity: 0,
                        }}
                        transition= {{
                            duration: 0.5
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}
                        className="loginWrapper__form__wrapper__header">
                        <Link href={'/'}>
                            <img
                                src="/assets/klink-logo.webp"
                                alt="KLINK Ecommerce"
                                width={151}
                                height={35}
                                className="block md:hidden"
                            />
                        </Link>

                        <h1>Login</h1>
                        <p>Welcome back! Please enter your details.</p>
                    </motion.div>

                    <motion.div 
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        transition= {{
                            duration: 0.5
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}
                        className="loginWrapper__form__wrapper__formContainer"
                    >
                        <Formik
                            initialValues={{
                                username: "",
                                password: ""
                            }}
                            validationSchema={validate}
                            onSubmit={signIn}
                        >
                            {
                                formik => (
                                    <Form>
                                        <div className='loginWrapper__form__wrapper__formContainer__formGroup'>
                                            <InputBox
                                                label="User Name"
                                                name="username"
                                                type="text"
                                                placeholder="Enter your username"
                                                className="loginWrapper__form__wrapper__formContainer__formGroup__input"
                                            />
                                        </div>
                                        <div className='loginWrapper__form__wrapper__formContainer__formGroup'>
                                            <InputBox
                                                label="Password"
                                                name="password"
                                                type={show ? "text" : "password"}
                                                placeholder="Enter your Password"
                                                className="loginWrapper__form__wrapper__formContainer__formGroup__input"
                                            />
                                            <span 
                                                onClick={() => setShow(!show)}
                                                className='loginWrapper__form__wrapper__formContainer__formGroup__eyeIcon'
                                            >
                                                    
                                                {
                                                    show ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="loginWrapper__form__wrapper__formContainer__formGroup__eyeIcon__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="loginWrapper__form__wrapper__formContainer__formGroup__eyeIcon__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    )
                                                }
                                            </span>
                                        </div>

                                        <div className="loginWrapper__form__wrapper__formContainer__button">
                                            <button
                                                type='submit'
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </Form>
                                )
                            }
                        </Formik>
                    </motion.div>
                </div>
            </div>
            
        </div>
    )
}

export default SignIn