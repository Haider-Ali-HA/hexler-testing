
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import '@/public/styles/career.css';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';


interface ModalComponentProps {
    show: boolean;
    setShow: (show: boolean) => void;
    showCompleted: boolean;
    setShowCompleted: (showCompleted: boolean) => void;
    job: string;
}

interface FormData {
    jobTitle: string;
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    projectLinks: string;
    linkedin: string;
    github: string;
    resume: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ show, setShow, showCompleted, setShowCompleted , job}) => {
    const [formData, setFormData] = useState<FormData>({
        jobTitle: '',
        firstName: '',
        lastName: '',
        gender: 'male',
        dob: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        projectLinks: '',
        linkedin: '',
        github: '',
        resume: '',
    });
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isLinkedInValid, setIsLinkedInValid] = useState<boolean>(true);
    const [isGitHubValid, setIsGitHubValid] = useState<boolean>(true);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        // Validate based on the field being changed
        switch (name) {
            case 'email':
                setIsEmailValid(validateEmail(value));
                break;
            case 'linkedin':
                setIsLinkedInValid(validateLinkedIn(value));
                break;
            case 'github':
                setIsGitHubValid(validateGitHub(value));
                break;
            default:
                break;
        }
    };

    
    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData({ ...formData, gender: value });
    };

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = e.target.files;
    //     if (files && files.length > 0) {
    //         setFormData({ ...formData, resume: files[0] });
    //     } else {
    //         setFormData({ ...formData, resume: null });
    //     }
    // };


    const validateEmail = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validateLinkedIn = (url: string) => {
        const linkedInPattern = /^(https?:\/\/)?(www\.)?(linkedin\.com\/in\/)[a-zA-Z0-9_-]+/;
        return linkedInPattern.test(url);
    };

    const validateGitHub = (url: string) => {
        const githubPattern = /^(https?:\/\/)?(www\.)?(github\.com\/)[a-zA-Z0-9_-]+/;
        return githubPattern.test(url);
    };





    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Checking for required fields
        for (const key in formData) {
            if(key!='projectLinks' && key!='jobTitle' && key!='resume'){
            if (formData[key as keyof FormData] === '') {
                alert(`${key} is required`);
                return;
            }
        }
        }

        formData.jobTitle = job;

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

        try {
            console.log(1)
            //@ts-ignore
            // const res = await emailjs.send(serviceID!, templateID!, formData, options);
            console.log(2)
            // console.log(res)
            // if (res.status === 200 ) {
              toast.success('Form submitted successfully!');
              setFormData({
                jobTitle: '',
                firstName: '',
                lastName: '',
                gender: 'male',
                dob: '',
                phone: '',
                email: '',
                address: '',
                city: '',
                projectLinks: '',
                linkedin: '',
                github: '',
                resume: '',
            });
            // };
          } catch (error) {
            toast.error("Some Error Occured...");
          };

        console.log("Submitted Data:", formData);
       

        setShowCompleted(true);
        setShow(false);
    };

    return (
        <>
            {show && <div className="overlay" onClick={() => setShow(false)}></div>}
            {showCompleted && <div className="overlay" onClick={() => setShowCompleted(false)}></div>}

            <div className={`modal ${show ? 'showBlock' : 'showHidden'}`}>
                <div className="modal-header">
                    <h2>Apply Here!</h2>
                    <AiOutlineClose onClick={() => setShow(false)} />
                </div>
                <form className="modal-body" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-column">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="input"
                                placeholder="Enter first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-column">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="input"
                                placeholder="Enter last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-column">
                            <label>Gender</label>
                            <select
                                name="gender"
                                className="input" // Added className for consistency
                                value={formData.gender}
                                onChange={handleChangeGender}
                                required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="input-column">
                            <label>DOB</label>
                            <input
                                type="date"
                                name="dob"
                                className="input"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-column">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                className="input"
                                placeholder="Enter Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-column">
                            <div className="input-column">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`input ${!isEmailValid ? 'input-error' : ''}`} // Add error class
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {!isEmailValid && <p className="error-message">Invalid email format.</p>} {/* Error message */}
                            </div>

                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-column">
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                className="input"
                                placeholder="Enter Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-column">
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                className="input"
                                placeholder="Enter City"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        {/* <div className="input-column">
                            <label>Experience</label>
                            <input
                                type="text"
                                name="experience"
                                className="input"
                                placeholder="Enter Experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* <div className="input-column"> */}
                        <div className="input-column">
                            <label>Project Links</label>
                            <textarea
                                name="projectLinks"
                                style={{ width: '100%', color: 'black' }}
                                placeholder="Enter Experience"
                                value={formData.projectLinks}
                                onChange={handleChangeTextArea}
                            />
                        </div>
                        {/* <div className="input-column">
                            <label>Education</label>
                            <input
                                type="text"
                                name="education"
                                className="input"
                                placeholder="Enter Education"
                                value={formData.education}
                                onChange={handleChange}
                                required
                            />
                        </div> */}
                    </div>
                    <div className="input-group">
                        <div className="input-column">
                            <label>LinkedIn Profile</label>
                            <input
                                type="text"
                                name="linkedin"
                                className={`input ${!isLinkedInValid ? 'input-error' : ''}`} // Add error class
                                placeholder="Enter your LinkedIn"
                                value={formData.linkedin}
                                onChange={handleChange}
                                required
                            />
                            {!isLinkedInValid && <p className="error-message">Invalid LinkedIn URL.</p>} {/* Error message */}
                        </div>
                        <div className="input-column">
                            <label>GitHub Profile</label>
                            <input
                                type="text"
                                name="github"
                                className={`input ${!isGitHubValid ? 'input-error' : ''}`} // Add error class
                                placeholder="Enter your GitHub"
                                value={formData.github}
                                onChange={handleChange}
                                required
                            />
                            {!isGitHubValid && <p className="error-message">Invalid GitHub URL.</p>} {/* Error message */}
                        </div>
                    </div>
{/* 
                    <div className="input-group">
                        <div className="input-column">
                            <label>Resume</label>
                            <input
                                type="file"
                                className="file-input"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                    </div> */}
                      <div className="input-group">
                        <div className="input-column">
                            <label>Resume</label>
                            <input
                                type="text"
                                name="resume"
                                className="input"
                                placeholder="Enter Resume"
                                value={formData.resume}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="submit" className="submit-button">
                            SUBMIT APPLICATION
                        </button>
                    </div>
                </form>
            </div>

            <div className={`modal completed-modal ${showCompleted ? 'showBlock' : 'showHidden'}`}>
                <div className="modal-header">
                    <AiOutlineClose onClick={() => setShowCompleted(false)} />
                </div>
                <div className="modal-body">
                    <div className="flex flex-col items-center w-full gap-10 mt-5">
                        <div className="flex flex-col">
                            <h1 className="completed-title">Application Submitted Successfully</h1>
                            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="submit-button" onClick={() => setShowCompleted(false)}>
                        CLOSE
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModalComponent;
