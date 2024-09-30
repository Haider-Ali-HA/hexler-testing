'use client'
import React, { useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import '@/public/styles/career.css'
import ModalComponent from './Modal';

const data = [
    {
        name: "Software Developer",
        description: "lklklljn knk nlkdnflkn ldfn ldnf lndlkn lkdnfn knlknnknnnkn nnnnnnnnnnnnnn nlkjijpij"
    },
    {
        name: "Frontend Developer",
        description: "lklklljn knk nlkdnflkn ldfn ldnf lndlkn lkdnfn knlknnk nnnknnnnnn nnnnnnnnnnl kjijpij"
    },
    {
        name: "Junior Software Developer",
        description: "lklklljn knk nlkdnflkn ldfn ldnf lndlkn lkdnfn knlkn nknnnknnnnnnn nnnnnnnnnlkjijpij"
    },
    {
        name: "Backend Developer",
        description: "lklklljn knk nlkdnflkn ldfn ldnf lndlkn lkdnfn knlknnknn  nknnnnnnnn nnnnnnnnlkjijpij"
    },
    {
        name: "Database Administrator",
        description: "lklklljn knk nlkdnflkn ldfn ldnf lndlkn lkdnfn knlkn nknnn knnnnnnsdfas nnnlskdnfknnnnnnnlkjijpij"
    },
    {
        name: "DevOps Engineer",
        description: "lklklljn knk nlkdnflkn ldfn ldnf lndlkn lkdnfn knlknnknnnknn nnnnnnnnnn nnnnlkjijpij"
    },
];

const Career = () => {
    const [show, setShow] = useState(false);
    const [showCompleted, setShowCompleted] = useState(false);

    return (
        <>
            <div>
                <div className="career-header ">
                    <div className="career-title" >
                        <div className="career-title-text">
                            <h2 className=" career-heading" style={{fontSize:'4rem',lineHeight:'1'}}>
                                Powering Careers <br />In Technical Fields
                            </h2>
                        </div>
                        <p className="career-description">
                            We connect skilled engineers and technicians with exciting job
                            opportunities across various industries. Our platform is designed to
                            streamline the job search process, making it easier for
                            professionals to find roles that match their expertise and career
                            goals.
                        </p>
                    </div>

                    <div className="job-listings">
                        {data.map((item, index) => (
                            <div key={index} className="job-card">
                                {/* <div className="new-listings-badge">
                                    <p className="text-yellow-500 text-sm">5 new listings</p>
                                </div> */}
                                {/* <img src={item.image} alt={item.name} className="job-image" /> */}
                                <h1 className="job-title">{item.name}</h1>
                                <p className="job-description">
                                    {item.description}
                                </p>
                                <div className="view-job-listing-wrapper">
                                 <div  className="view-job-listings" onClick={() => setShow(true)}>
                                    Apply Now<MdArrowForward className="ml-2" />
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ModalComponent 
                show={show} 
                setShow={setShow} 
                showCompleted={showCompleted} 
                setShowCompleted={setShowCompleted} 
            />
        </>
    );
};

export default Career;
