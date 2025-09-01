import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: #252641;
  color: #ffffff;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 350px;
  justify-content: center;

  
.Container{
    max-width: 1200px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.LogoSection{
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
}

.Logo{
    max-width: 70px;
    height: auto;
    padding: 0 5px 0 0;
    border-right: 1px solid;
}

.LogoText{
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #ffffff;
  }
}

.NewsletterSection{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
}



.NewsletterTitle{
    font-size: 16px;
    font-weight: 200;
    color: #b8b8c7;
    text-align: center;
    margin: 0;
}

.EmailForm{
  display: flex;
  gap: 15px;
  align-items: center;
}

.EmailInput{
    background: transparent;
    border: 1px solid #525270;
    border-radius: 50px;
    padding: 10px 18px;
    font-size: 14px;
    color: #ffffff;
    width: 250px;
    outline: none;
  
  &::placeholder {
    color: #8b8ba7;
  }
}

.SubscribeButton{
  background-color: #49BBBD;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3aa8ab;
    transform: translateY(-2px);
  }
}

.LinksSection{
    margin-bottom: 10px;

}

.FooterLinks{
  display: flex;
  gap: 40px;
  align-items: center;
}

.FooterLink{
  color: #b8b8c7;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #49BBBD;
  }
  
  &::after {
    content: '|';
    margin-left: 20px;
    color: #525270;
  }
  
  &:last-child::after {
    display: none;
  }
}

.Copyright{
  color: #8b8ba7;
  font-size: 14px;
  text-align: center;
}
`;
