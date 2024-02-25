"use client";
import React, {useTransition, useState, } from 'react'
import Image from "next/image";
import TabButton from './TabButton';
import AnimeLetter from './AnimeLetter';


const TAB_DATA= [
    {
    title: "Skills",
    id: "skills",
    content: (
        <ul className='list-disc pl-2'>
            <li>HTML & CSS</li>
            <li>Javascript - React.js, Next.js</li>
            <li>Node.js - Express.js</li>
            <li>Python - Flask</li>
            <li>C# - Unity</li>
            <li>Oracle SQL</li>
        </ul>
    )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Centennial College - Software Engineering Technitian</li>
            </ul>
        )
    },

    {
        title: "Certificate",
        id: "certificate",
        content: (
            <ul className='list-disc pl-2'>
                <li>Driver Licence</li>
                <li>Brushcutter</li>

            </ul>

        )
    }

]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }



  return (
<section className='text-white' id="about" >
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-8 xl:gap-16 sm:py-16 xl:px-16' >
        <Image src="/images/windows-v94mlgvsza4-unsplash.jpg" width={500} height={350} />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>

        <div className="ml-6 relative font-extrabold text-3xl ">
            <div className="text-wrapper relative inline-block pt-1 pr-0.5 pb-0.1 overflow-hidden">
                <span className="letter inline-block leading-none ">
                    <h2>About Me</h2>

                </span>
            </div>
        </div>

            <p className='text-base lg:text-lg'>Hello! I am Mao, a passionate and aspiring software engineering student. 
        Currently immersed in the world of code, algorithms, and problem-solving, I find joy in crafting innovative solutions to real-world challenges. 
        My journey into the realm of software engineering began with a fascination for technology and its transformative potential. As a dedicated student, I have been honing my skills in various programming languages, data structures, and software development methodologies. 
        With a keen interest in creating efficient and scalable software, I thrive on the challenges that come with designing elegant solutions. From building web applications to delving into mobile development, I am committed to staying abreast of the latest technologies and industry best practices.</p>
        <div className='flex flex-row justify-start mt-8'>
            <TabButton 
            selectTab={() => handleTabChange("skills")} 
            active={tab === "skills"}
            >
                {" "}
                Skills{" "}
            </TabButton>

            <TabButton 
            selectTab={() => handleTabChange("education")} 
            active={tab === "education"}
            >
                {" "}
                Education{" "}
            </TabButton>

            <TabButton 
            selectTab={() => handleTabChange("certificate")} 
            active={tab === "certificate"}
            >
                {" "}
                Certificate{" "}
            </TabButton>

        </div>
        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div>
</section>
  )
}

export default AboutSection