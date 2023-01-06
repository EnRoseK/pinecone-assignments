import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import '../styles/HeroSection.css';

export const HeroSection = () => {
    return (
        <div className='heroSection'>
            <div className='heroContent'>
                <h1 className='heroTitle'>Blog Posts</h1>
                <div>
                    <h1 className='heroBlogTitle'>I think so, this is it. </h1>
                    <p>
                        Design begins after I begin to think about how to present an experience most successfully,
                        whether a button I put in can solve a problem. The only point in design is not ui design, if the
                        user does not have a good experience at the end of the product, the design will be considered
                        unsuccessful in my opinion.
                    </p>
                    <div className='socialLogos'>
                        <div className='logoBtn twitter'>
                            <FaTwitter style={{ color: 'white', fontSize: 18 }} />
                            <span>Twitter</span>
                        </div>
                        <div className='logoBtn linkedin'>
                            <FaLinkedinIn style={{ color: 'white', fontSize: 18 }} />
                            <span>Linkedin</span>
                        </div>
                        <div className='logoBtn medium'>
                            <BsMedium style={{ color: 'white', fontSize: 18 }} />
                            <span>Medium</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='heroImage'>
                <img src='/img/illustration.png' alt='' />
            </div>
        </div>
    );
};
