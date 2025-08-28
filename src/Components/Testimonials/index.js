import React, { useState } from "react";
import { 
    Section,
    Container,
    ContentWrapper,
    LeftContent,
    RightContent,
    Badge,
    Title,
    Description,
    AssessmentText,
    WriteButton,
    ArrowIcon,
    ImageWrapper,
    TestimonialCard,
    TestimonialText,
    AuthorName,
    RatingWrapper,
    Star,
    ReviewCount,
    NavigationButton
} from './styles';

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
    const testimonials = [
        {
            text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
            author: "Gloria Rose",
            rating: 5,
            reviews: "12 reviews at Yelp"
        }
        // Add more testimonials here
    ];

    return (
        <Section>
            <Container>
                <ContentWrapper>
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
                        <WriteButton>
                            <span>Write your assessment</span>
                            <ArrowIcon>→</ArrowIcon>
                        </WriteButton>
                    </LeftContent>
                    
                    <RightContent>
                        <ImageWrapper>
                            <img src="/api/placeholder/400/500" alt="Student with books" />
                        </ImageWrapper>
                        <TestimonialCard>
                            <TestimonialText>
                                "{testimonials[currentTestimonial].text}"
                            </TestimonialText>
                            <AuthorName>{testimonials[currentTestimonial].author}</AuthorName>
                            <RatingWrapper>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} filled={i < testimonials[currentTestimonial].rating}>
                                        ★
                                    </Star>
                                ))}
                                <ReviewCount>{testimonials[currentTestimonial].reviews}</ReviewCount>
                            </RatingWrapper>
                        </TestimonialCard>
                        <NavigationButton>
                            ❯
                        </NavigationButton>
                    </RightContent>
                </ContentWrapper>
            </Container>
        </Section>
    );
};

export default Testimonial;