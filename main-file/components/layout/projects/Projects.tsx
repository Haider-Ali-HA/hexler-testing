'use client'
import React, { useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import '@/public/styles/project.css'
import Link from 'next/link';
import Image from 'next/image';

const projectsData = [
    {
        name: "Soft Swirl",
        description: "Developed xyz",
        path: "#",
        image: "/images/projects/soft-swirl.png"
    },
    {
        name: "NSTP",
        description: "Created management system.",
        path: "#",
        image: "/images/projects/nstp.png"
    },
    {
        name: "Churn Station",
        description: "Built a tool xyz",
        path: "#",
        image: "/images/projects/churn-station.png"
    },
    {
        name: "NSTP",
        description: "Created management system.",
        path: "#",
        image: "/images/projects/nstp.png"
    },
    {
        name: "Churn Station",
        description: "Built a tool xyz",
        path: "#",
        image: "/images/projects/churn-station.png"
    },
    {
        name: "Churn Station",
        description: "Built a tool xyz",
        path: "#",
        image: "/images/projects/churn-station.png"
    }
];


const Projects = () => {

    return (
        <>
            <div>
                <div className="career-header ">
                    <div className="career-title" >
                        <div className="career-title-text">
                            <h2 className=" career-heading" style={{ fontSize: '3.5rem', lineHeight: '1' }}>
                            A Glimpse Into Hexler Tech's Digital Journey
                            </h2>
                        </div>
                    </div>

                    <div className="project-listings">

                        {projectsData.map((item, index) => (
                            <Link href={item.path} target='blank' key={index} className="project-card" >

                                <img src={'https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={item.name} className="bg-image project-img" />

                                <div className="view-project-listing-wrapper">
                                    <h3 className="project-title">{item.name}</h3>
                                    <p style={{textAlign:'center'}}>{item.description}</p>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
