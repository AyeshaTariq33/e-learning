import { ExploreSection } from './styles';
import colorPallet from '../../images/Explore/color-palette.png';
import badge from '../../images/Explore/badge.png';
import book from '../../images/Explore/Book.png';
import Card1 from '../../images/Explore/card 1.png';
import Card2 from '../../images/Explore/card 2.png';
import Card3 from '../../images/Explore/crad 3.png';
import globe from '../../images/Explore/globe.png';
import shelf from '../../images/Explore/Rectangle.png';


const Explore = () => {
    return(
        <ExploreSection>
            <div className='container'>
                <div className="SectionHeader">
                    <h2>Explore Course</h2>
                    <p>Ut sed eros finibus, placerat orci id, dapibus.</p>
                </div>

                <div className='link'>
                    <div className='info'>
                        <img src={colorPallet} alt='color pallete' />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='info'>
                        <a href='.'>SEE ALL</a> 
                        <a href='.' className='arrow'>→</a>
                    </div>
                </div>
                {/*book Rack 1*/}
                <div className="bookRack">
                    <div className="shelf">
                        <img src={shelf} alt='shelf' />
                    </div>
                    <div className="books">
                        <img src={book} alt='Courses' className='courseBooks'/> 
                        <button className='btn btn-orange'>Ut Sed Eros</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-pink'>Curabitur Egestas</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-brown'>Quisque Conseq…</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-yellow'>Cras Convallis</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-dblue'>Vestibulum fauci…</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-lblue'>Ut Sed Eros</button>
                        <img src={book} alt='Courses' className='courseBooks '/>
                        <button className='btn btn-ocean'>Vestibulum faucibu</button>
                        
                        
                        <div class="card">
                            <div class="card-image">
                                <img src={Card1} alt='Courses' />
                            </div>
                            <div class="card-content">
                                <h3>Integer id Orc Sed Ante Tincidunt</h3>
                                <p>Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.</p>
                                <div class="rating-price">
                                <div class="stars">⭐⭐⭐⭐⭐</div>
                                <span class="price">$450</span>
                                </div>
                                <button class="explore-btn">EXPLORE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='link'>
                    <div className='info'>
                    <img src={globe} alt='globe' />
                    <p>Quisque a Consequat</p>
                    </div>
                    <div className='info'>
                        <a href='.'>SEE ALL</a> 
                        <a href='.' className='arrow'>→</a>
                    </div>
                </div>

                {/*book Rack 2*/}
                <div className="bookRack">
                    <div className="shelf">
                        <img src={shelf} alt='shelf' />
                    </div>
                    <div className="books books2">
                        <img src={book} alt='Courses' className='courseBooks'/> 
                        <button className='btn btn-orange'>Ut Sed Eros</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-pink'>Curabitur Egestas</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-brown'>Quisque Conseq…</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-yellow'>Cras Convallis</button>
                        
                        
                        <div class="card">
                            <div class="card-image">
                                <img src={Card2} alt='Courses' />
                            </div>
                            <div class="card-content">
                                <h3>Integer id Orc Sed Ante Tincidunt</h3>
                                <p>Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.</p>
                                <div class="rating-price">
                                <div class="stars">⭐⭐⭐⭐⭐</div>
                                <span class="price">$450</span>
                                </div>
                                <button class="explore-btn">EXPLORE</button>
                            </div>
                        </div>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-dblue'>Vestibulum fauci…</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-lblue'>Ut Sed Eros</button>
                        <img src={book} alt='Courses' className='courseBooks '/>
                        <button className='btn btn-ocean'>Vestibulum faucibu</button>
                        
                    </div>
                </div>

                 <div className='link'>
                    <div className='info'>
                    <img src={badge} alt='badge' />
                    <p>Aenean Facilisis</p>
                    </div>
                    <div className='info'>
                        <a href='.'>SEE ALL</a> 
                        <a href='.' className='arrow'>→</a>
                    </div>
                </div>

                {/*book Rack 3*/}
                <div className="bookRack">
                    <div className="shelf">
                        <img src={shelf} alt='shelf' />
                    </div>
                    <div className="books books3">
                        <img src={book} alt='Courses' className='courseBooks'/> 
                        <button className='btn btn-orange'>Ut Sed Eros</button>
                        
                        
                        <div class="card">
                            <div class="card-image">
                                <img src={Card3} alt='Courses' />
                            </div>
                            <div class="card-content">
                                <h3>Integer id Orc Sed Ante Tincidunt</h3>
                                <p>Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.</p>
                                <div class="rating-price">
                                <div class="stars">⭐⭐⭐⭐⭐</div>
                                <span class="price">$450</span>
                                </div>
                                <button class="explore-btn">EXPLORE</button>
                            </div>
                        </div>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-pink'>Curabitur Egestas</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-brown'>Quisque Conseq…</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-yellow'>Cras Convallis</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-dblue'>Vestibulum fauci…</button>
                        <img src={book} alt='Courses' className='courseBooks'/>
                        <button className='btn btn-lblue'>Ut Sed Eros</button>
                        <img src={book} alt='Courses' className='courseBooks '/>
                        <button className='btn btn-ocean'>Vestibulum faucibu</button>
                        
                    </div>
                </div>
            </div>
        </ExploreSection>
    );
};

export default Explore;









