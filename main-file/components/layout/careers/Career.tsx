'use client'
import React, { useState, useEffect } from 'react';
import { MdArrowForward } from 'react-icons/md';
import '@/public/styles/career.css'
import ModalComponent from './Modal';
import { jobsData } from '@/constants/jobsData';
import { careerServices } from '@/services/careerServices'; // Make sure to import careerServices
import toast from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications

// Define the interface for Career type
interface Career {
    _id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}


const Career = () => {
    const [show, setShow] = useState(false);
    const [showCompleted, setShowCompleted] = useState(false);
    const [job, setJob] = useState('');
    const [loading, setLoading] = useState(false);
    const [careers, setCareers] = useState<Career[]>([]); // Add type annotation here


    const fetchCareers = async () => {
        setLoading(true);
        try {
            const result = await careerServices.getCareers();
            
            if (result.success) {
                // console.log("Fetched careers:", result.data);
                setCareers(result.data);
            } else {
                console.error("Error fetching careers:", result.message);
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error in fetchCareers:", error);
            toast.error("Failed to fetch careers");
        } finally {
            setLoading(false);
        }
    };

    // console.log("Careers:", careers);

    useEffect(() => {
        fetchCareers();
    }, []);

    return (
        <>
            <div>
                <div className="career-header ">
                    <div className="career-title" >
                        <div className="career-title-text">
                            <h2 className="career-section-header" >
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
                        {loading ? (
                            <div>Loading...</div>
                        ) : careers.length > 0 ? (
                            careers.map((career, index) => (
                                <div key={career._id || index} className="job-card">
                                    <h1 className="job-title">{career.name}</h1>
                                    <p className="job-description">
                                        {career.description}
                                    </p>
                                    <div className="view-job-listing-wrapper">
                                        <div 
                                            className="view-job-listings" 
                                            onClick={() => {
                                                setShow(true);
                                                setJob(career.name);
                                            }}
                                        >
                                            Apply Now<MdArrowForward className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No careers available at the moment.</div>
                        )}
                    </div>
                    
                </div>
            </div>
            <ModalComponent
                show={show}
                setShow={setShow}
                job={job}
                showCompleted={showCompleted}
                setShowCompleted={setShowCompleted}
            />
        </>
    );
};

export default Career;
