import React, { useState } from "react";
import { 
    Section,
    Container,
    LeftContent,
    RightContent,
    Badge,
    Title,
    Description,
    AssessmentText,
    Button,
    ArrowIcon,
    ImageWrapper,
    TestimonialCard,
    TestimonialText,
    AuthorName,
    RatingWrapper,
    Star,
    ReviewCount,
    NavigationButton,
    Flag,
    Wrapper
} from './styles';

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
            <Container>
                <LeftContent>
                    <Badge>{badgeText}</Badge>
                    <Title>{title}</Title>
                    <Description>
                        {description1}
                    </Description>
                    <Description>
                        {description2}
                    </Description>
                    <AssessmentText>
                        {assessmentText}
                    </AssessmentText>
                    <Button onClick={handleWriteAssessment} disabled={isSubmittingAssessment}>
                        <span>{isSubmittingAssessment ? 'Submitting...' : buttonText}</span>
                        <ArrowIcon>
                            →
                        </ArrowIcon>
                    </Button>
                </LeftContent>
                
                <RightContent>
                    <ImageWrapper>
                        <img src={student} alt="Student with books" />
                    </ImageWrapper>
                    <TestimonialCard>
                        <TestimonialText>
                            "{testimonials[currentTestimonial].text}"
                        </TestimonialText>
                        <Wrapper>
                            <AuthorName>{testimonials[currentTestimonial].author}</AuthorName>
                            <Flag>
                                <RatingWrapper>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} filled={i < testimonials[currentTestimonial].rating}>
                                            ★
                                        </Star>
                                    ))}
                                    <ReviewCount>{testimonials[currentTestimonial].reviews}</ReviewCount>
                                </RatingWrapper>
                            </Flag>
                        </Wrapper>
                    </TestimonialCard>
                    <NavigationButton onClick={handleNavigation}>
                        ▷
                    </NavigationButton>
                </RightContent>
            </Container>
        </Section>
    );
};

export default Testimonial;