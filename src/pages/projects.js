import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/components/icons'
import {motion} from "framer-motion";
import project1 from "../../public/images/projects/crime.png";
import project2 from "../../public/images/projects/weapon12.png";
import project3 from "../../public/images/projects/senti.png";
import project4 from "../../public/images/projects/faceRecog.jpg";
import project5 from "../../public/images/projects/auc.jpg";
import project6 from "../../public/images/projects/xy.png";
import project7 from "../../public/images/projects/lpg.jpg";


const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark
        dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
             bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
             '/>
                    
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>

            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

            <div className='mt-2 flex items-center'>
            <Link href={github} target="_blank" className='w-10'>{" "} <GithubIcon />{" "} </Link>
            <Link href={link} target="_blank"
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark sm:px-4 sm:text-base'
            
            > Visit Project </Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
             '/>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
            
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target="_blank"
            className='text-lg font-semibold underline md:text-base'
            > Visit </Link>

            <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /> </Link>
            
            </div>
            </div>
        </article>

    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Kanij Fatema Arpa | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout classname='pt-16'>
                    <AnimatedText text=" The best way to predict the future is to invent it!"
                    className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />
                        <div className='grid grid-cols-12 gap-24 gap-y-32 
                        xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                            <div className='col-span-12'>
                                <FeaturedProject 
                                title="Criminal Activity Detection"
                                img={project1}
                                summary="A Deep Learning model that can detect criminal activities like explosions,
                                 stealing, robbery, assault, fighting, road accidents, and burglary through surveillance 
                                 cameras and alert authorities to take necessary action. To detect criminal activities, 
                                 build an LRCN model using Tensorflow. The LRCN model combines the deep learning algorithm 
                                 Convolutional Neural Network (CNN) and a deep learning architecture Long Short-Term Memory (LSTM)."
                                link="/"
                                github="/"
                                type="Featured Project"
                                />
                            </div>

                            <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Weapon Detection"
                                img={project2}
                                summary="This model is based on machine learning and computer vision techniques for detecting weapons 
                                in video surveillance cameras in real-time."
                                link="/"
                                github="/"
                                type="Featured Project"
                                />
                            </div>

                            <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="LPG Leakage Detector using Arduino with notification Alert and Sound Alarm"
                                img={project7}
                                summary="Sentiment analysis, often known as opinion mining, is a technique for assessing the emotional 
                                tone of a body of text using natural language processing (NLP)."
                                link="/"
                                github="/"
                                type="Featured Project"
                                />
                            </div>

                            <div className='col-span-12 '>
                            <FeaturedProject 
                                title="Face Recognition"
                                img={project4}
                                summary="Face recognition is the process of recognizing a person's face through a vision system. 
                                Built utilizing the most advanced facial recognition technology available from dlib's state-of-the-art 
                                model with deep learning algorithms. From the model, we use the Histogram of Oriented Gradients (HOG)+Linear SVM 
                                face detector technique."
                                link="/"
                                github="/"
                                type="Featured Project"
                                />
                            </div>

                            <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Auction Management System"
                                img={project5}
                                summary="Face recognition is the process of recognizing a person's face through a vision system. 
                                Built utilizing the most advanced facial recognition technology available from dlib's state-of-the-art 
                                model with deep learning algorithms. From the model, we use the Histogram of Oriented Gradients (HOG)+Linear SVM 
                                face detector technique."
                                link="/"
                                github="/"
                                type="Featured Project"
                                />
                            </div>

                            <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Interpreter"
                                img={project6}
                                summary="Written in C language to interpret assembly language based on some basic instructions 
                                for a machine having three registers."
                                link="/"
                                github="/"
                                type="Featured Project"
                                />
                            </div>

                            <div className='col-span-12'>
                            <FeaturedProject
                                title="Sentiment Analysis"
                                img={project3}
                                summary="Sentiment analysis, often known as opinion mining, is a technique for assessing the emotional 
                                tone of a body of text using natural language processing (NLP)."
                                link="/"
                                github="/"
                                type="Featured Project"
                                />
                            </div>

                            

                        </div>


                </Layout>
            </main>
        
        </>
    )
}

export default projects