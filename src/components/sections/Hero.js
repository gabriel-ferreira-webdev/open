import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    style={{position:"relative",overflow:"hidden",background:"rgb(0,0,0,.22)",background: "rgba(0, 0, 0, 0) linear-gradient(180deg, rgba(0, 0, 0, .80) 0%, rgba(0, 0, 0, .22) 80px) repeat scroll 0% 0%",}}>
      <video autoPlay loop muted style={{
        
        position:"absolute",
      width:"100%",
      left:"50%",
      top: "50%",
      height:"100%",
      objectFit:"cover",
      transform:"translate(-50%, -50%)",
      zIndex:"-1",}}>
        <source src={require('./../../assets/videos/bg.mp4')} type="video/mp4"></source>
      </video>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content"> 
          <image className="hero-image" 
          src={require('./../../assets/images/horizontal.png')}
          ></image>
         
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
               web solutions for you!{/* <span className="text-color-primary">startups</span> */}
            </h1>
            <div className="container-xs">
              
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                development & design
                </p>
              {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Contact
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    Portfolio
                    </Button>
                </ButtonGroup>
              </div> */}
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;