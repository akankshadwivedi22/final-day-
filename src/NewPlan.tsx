import React, { useEffect, useRef } from 'react';
import { BdayOldNewCard, Header, ItemsWrapper, ItemList, Section, GobackButton, Section2, GoBackWrapper } from './styles.ts';
import anime from 'animejs/lib/anime.es.js';
import { useNavigate } from 'react-router-dom';

const NewPlan = ({ option }) => {
  const navigate = useNavigate();
  const gobackButtonRef = useRef(null); // Ref to target the button

  useEffect(() => {
    // Animate h3 text with a bouncing effect
    anime({
      targets: 'h3',
      translateY: [-50, 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 1200,
      easing: 'easeOutElastic(1, 0.6)', // Bouncy easing
    });

    // Animate BdayOldNewCard: bounce and rotate in a fun way
    anime({
      targets: '.card-animation',
      scale: [0.8, 1],
      rotate: [90, 0],
      duration: 1500,
      easing: 'easeOutBack',
    });

    // Animate the Section2 with a slight zoom-in and sliding effect
    anime({
      targets: '.section2-animation',
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.95, 1],
      duration: 1200,
      delay: 500, // Delay to let the text appear before section animates
      easing: 'easeOutExpo',
    });

    // Add a slight bounce effect to all the text elements
    anime({
      targets: 'p',
      translateX: [-10, 10],
      direction: 'alternate',
      duration: 1000,
      delay: (el, index) => index * 150, // Stagger text animations
      easing: 'easeInOutSine',
      loop: true,
    });

    // Rotate the 'Go Back' button continuously for 3 seconds, then stop
    const rotationAnimation = anime({
      targets: '.goback-btn',
      rotate: [0, 360],
      duration: 800,
      easing: 'easeInOutQuad',
      loop: true,
    });

    // Stop the animation after 3 seconds
    setTimeout(() => {
      rotationAnimation.pause(); // Pauses the rotation animation after 3 seconds
    }, 800);

  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <BdayOldNewCard className="card-animation" style={{ overflow: 'hidden' }}>
        <Header style={{ marginBottom: '20px' }}>
          <h3>Bday Agenda 📅</h3>
        </Header>

        <Section2 className="section2-animation">
          <p>
            Well, this plan is better than the old one because you'll be in a different city with me 💗.<br />
            We will be celebrating your <b>eve</b> at the biggest show ever 🎫, the greatest band of all time—Coldplay! 🎶<br />
            Trust me, you'll have a night that you will remember forever, and this is your first concert ever 🌟.<br />
            Everything else will fail in front of this. Plus, we will have a cozy and a romantic day 🫂,<br />
            and we're traveling together out of Mumbai for the first time🚊—it’s our first trip together too!❤️<br />
            Trust me, you're lucky that you're witnessing this concert with me 😝😝.<br /><br />
            I have no idea what I'll do in Ahmedabad since I barely know the city, but I’ll still try my absolute best to make your day special!💖<br /><br />
            The only thing I hate is that we'll be traveling that day, so we won't be able to do much—hardly anything, honestly🥺.<br />
            But it’s okay—you’ll be 28 for a whole year anyway!🥸🥳<br /><br />
            Don’t worry, it’ll still be your second-best birthday!🩵<br />

            <br></br><br></br><b>I want a party, or you're dead..." 💀🎉</b>
          </p>
        </Section2>

        <GoBackWrapper>
          <button className="goback-btn" onClick={() => navigate('/')}>Go Back</button>
        </GoBackWrapper>

        <ItemsWrapper></ItemsWrapper>
      </BdayOldNewCard>
    </div>
  );
};

export default NewPlan;
