import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import profilePic from "../../public/images/profile/pp2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Skills from "@/components/Skills"
import Education from "@/components/Education"



const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isinView = useInView(ref, { once: true });

    useEffect(() => {
        if (isinView) {
            motionValue.set(value);
        }
    }, [isinView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])


    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>

            <Head>
                <title>Kanij Fatema Arpa | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout classname='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl
                    sm:mb-8
                    ' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2
                        md:col-span-8    
                    '>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

                            <p className='font-medium'>
                            Hi, I'm Kanij Fatema Arpa, a computer science engineer. Highly passionate about creating problem-solving,
                             functional, and user-centered digital artificial intelligent applications. As I believe there is no such 
                             thing as the best solution,  I am always looking for new and better ways to bring visions to life.
                            </p>

                            <p className='my-4 font-medium'>
                            I have a solid understanding of computer science concepts like data structures, machine learning algorithms, 
                            deep learning algorithms, data mining, and operating systems.
                            </p>

                            <p className='font-medium'>
                            I approach every project - research, presentation, article, ML/DL, website, or digital product - 
                            with a dedication to excellence. My passion and skills drive me to delve deep into the topic and produce favorable 
                            outcomes. I am willing to contribute my expertise to the next big project and learn more.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="Kanij Fatema Arpa" className='w-full h-auto rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between
                        xl:col-span-8 xl:flex-row xl:items-center md:order-3
                        '>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm
                                '>
                                    Satisfied Clients
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                xl:text-center md:text-lg sm:text-base xs:text-sm
                                '>
                                    Project Completed
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm
                                '>
                                    Years of experience
                                </h2>
                            </div>
                        </div>


                    </div>
                    <Skills />
                    <Education />
                </Layout>
            </main>

        </>
    )
}
export default about
