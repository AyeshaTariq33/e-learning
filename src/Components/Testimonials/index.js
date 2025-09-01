import React, { useState } from "react";
import {Section} from './styles';

import student from '../../images/Testimonials/student.png';

const Testimonial = ({
    badgeText = "TESTIMONIAL",
    title = "What They Say?",
    description1 = "TOTC has got more than 100k positive ratings from our users around the world.",
    description2 = "Some of the students and teachers were greatly helped by the Skilline.",
    assessmentText = "Are you too? Please give your assessment",
    buttonText = "Write your assessment",
    testimonialData = [
        {
            text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
            author: "Gloria Rose",
            rating: 5,
            reviews: "12 reviews at Yelp"
        }
    ],
    onWriteAssessment,
    onNavigateTestimonial
}) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isSubmittingAssessment, setIsSubmittingAssessment] = useState(false);

    const testimonials = testimonialData;

    const handleWriteAssessment = () => {
        setIsSubmittingAssessment(true);
        if (onWriteAssessment) {
            onWriteAssessment();
        }
        setTimeout(() => setIsSubmittingAssessment(false), 2000);
    };

    const handleNavigation = () => {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        setCurrentTestimonial(nextIndex);
        if (onNavigateTestimonial) {
            onNavigateTestimonial(nextIndex);
        }
    };

    return (
        <Section>
            <div className="Container">
                <div className="LeftContent">
                    <div className="Badge">
                        {badgeText}
                    </div>
                    <div className="Title">
                        {title}
                    </div>
                    <div className="Description">
                        {description1}
                    </div>
                    <div className="Description">
                        {description2}
                    </div>
                    <div className="AssessmentText">
                        {assessmentText}
                    </div>
                    <div className="Button" onClick={handleWriteAssessment} disabled={isSubmittingAssessment}>
                        <span>{isSubmittingAssessment ? 'Submitting...' : buttonText}</span>
                        <div className="ArrowIcon">
                            →
                        </div>
                    </div>
                </div>
                
                <div className="RightContent">
                    <div className="ImageWrapper">
                        <img src={student} alt="Student with books" />
                    </div>
                    <div className="TestimonialCard">
                        <div className="TestimonialText">
                            "{testimonials[currentTestimonial].text}"
                        </div>
                        <div className="Wrapper">
                            <div className="AuthorName">
                                {testimonials[currentTestimonial].author}
                            </div>
                        <div className="Flag">
                                <div className="RatingWrapper">
                                    {[...Array(5)].map((_, i) => (
                                        <div className="Star" key={i} filled={i < testimonials[currentTestimonial].rating}>
                                            ★
                                        </div>
                                    ))}
                                    <div className="ReviewCount">
                                        {testimonials[currentTestimonial].reviews}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="NavigationButton" onClick={handleNavigation}>
                        ▷
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Testimonial;