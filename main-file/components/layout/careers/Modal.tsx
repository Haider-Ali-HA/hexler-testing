import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import '@/public/styles/career.css';

interface ModalComponentProps {
    show: boolean;
    setShow: (show: boolean) => void;
    showCompleted: boolean;
    setShowCompleted: (showCompleted: boolean) => void;
}

interface FormData {
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    experience: string;
    education: string;
    linkedin: string;
    github: string;
    resume: File | null;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ show, setShow, showCompleted, setShowCompleted }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        experience: '',
        education: '',
        linkedin: '',
        github: '',
        resume: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, resume: null });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Checking for required fields
        for (const key in formData) {
            if (formData[key as keyof FormData] === '') {
                alert(`${key} is required`);
                return;
            }
        }
        console.log("Submitted Data:", formData);
        setFormData({
            firstName: '',
            lastName: '',
            gender: '',
            dob: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            experience: '',
            education: '',
            linkedin: '',
            github: '',
            resume: null,
        });
            
        setShowCompleted(true);
        setShow(false);
    };

    return (
        <>
            {show && <div className="overlay" onClick={() => setShow(false)}></div>}
            {showCompleted && <div className="overlay" onClick={() => setShowCompleted(false)}></div>}

            <div className={`modal ${show ? 'showBlock' : 'showHidden'}`}>
                <div className="modal-header">
                    <h2>Apply for Truck Operator</h2>
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
                            <input
                                type="text"
                                name="gender"
                                className="input"
                                placeholder="Enter Gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            />
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
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
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
                        <div className="input-column">
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
                        <div className="input-column">
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
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-column">
                            <label>LinkedIn</label>
                            <input
                                type="text"
                                name="linkedin"
                                className="input"
                                placeholder="Enter your LinkedIn"
                                value={formData.linkedin}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-column">
                            <label>GitHub</label>
                            <input
                                type="text"
                                name="github"
                                className="input"
                                placeholder="Enter your GitHub"
                                value={formData.github}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

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
                    </div>

                    <div className="modal-footer">
                        <button type="submit" className="submit-button">
                            SUBMIT
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
                            <pre>{JSON.stringify(formData, null, 2)}</pre>
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
