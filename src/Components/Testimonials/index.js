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

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
    const testimonials = [
        {
            text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
            author: "Gloria Rose",
            rating: 5,
            reviews: "12 reviews at Yelp"
        }
    ];

    return (
        <Section>
            <Container>
                <LeftContent>
                    <Badge>TESTIMONIAL</Badge>
                    <Title>What They Say?</Title>
                    <Description>
                        TOTC has got more than 100k positive ratings from our users around the world.
                    </Description>
                    <Description>
                        Some of the students and teachers were greatly helped by the Skilline.
                    </Description>
                    <AssessmentText>
                        Are you too? Please give your assessment
                    </AssessmentText>
                    <Button>
                        <span>Write your assessment</span>
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
                    <NavigationButton>
                        ❯
                    </NavigationButton>
                </RightContent>
            </Container>
        </Section>
    );
};

export default Testimonial;