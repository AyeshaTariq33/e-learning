import React from 'react';
import laptop from '../../images/News/Laptop.png';
import pressRelease from '../../images/News/press-release.png';
import news2 from '../../images/News/news2.png';
import news from '../../images/News/news.png';
import { NewsSection } from './styles';

const News = () => {
  return (
    <NewsSection>
      <div className="Container">
        <div className="Header">
          <h2>Latest News and Resources</h2>
          <div className="Subtitle">
            See the developments that have occurred to TOTC in the world
          </div>
        </div>
        
        <div className="NewsGrid">
          <div className="MainCard">
            <div className="imageContainer">
              <img src={laptop} alt="Main news" />
            </div>
            
              <div className="badge-news">NEWS</div>
            <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <a href= ".">Read more</a>
          </div>
          
          <div className="SideCards">
            <div className="SideCard">
              <div className="cardImage">
                <img src={news} alt="News" />
                <div className="badge press-release">PRESS RELEASE</div>
              </div>
              <div className="cardContent">
                <h4>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h4>
                <p>Class Technologies Inc., the company that created Class,...</p>
              </div>
            </div>
            
            <div className="SideCard">
              <div className="cardImage">
                <img src={news2} alt="News" />
                <div className="badge news">NEWS</div>
              </div>
              <div className="cardContent">
                <h4>Zoom's earliest investors are betting millions on a better Zoom for schools</h4>
                <p>Zoom was never created to be a consumer product. Nonetheless, the...</p>
              </div>
            </div>
            
            <div className="SideCard">
              <div className="cardImage">
                <img src={pressRelease} alt="News" />
                <div className="badge news">NEWS</div>
              </div>
              <div className="cardContent">
                <h4>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h4>
                <p>This year, investors have reaped big financial returns from betting on Zoom...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NewsSection>
  );
};

export default News;