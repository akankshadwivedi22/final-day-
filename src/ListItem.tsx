import React, { useEffect } from 'react';
import { BdayOldNewCard, Header, ItemsWrapper, ItemList, Section, GobackButton } from './styles.ts';
import anime from 'animejs/lib/anime.es.js';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ option }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animate the h3 title - bounce in and fade in
    anime({
      targets: 'h3',
      translateY: [-50, 0], // Start from above and animate to 0
      opacity: [0, 1], // Fade in the text
      scale: [0.8, 1], // Add some bounce effect
      duration: 1500,
      easing: 'easeOutElastic(1, 0.5)', // Elastic bounce
    });

    // Animate the whole card - scale up and rotate slightly
    anime({
      targets: '.card-animation',
      scale: [0.8, 1],
      rotate: ['-5deg', '0deg'], // Slight rotation for a fun effect
      duration: 1200,
      easing: 'easeOutElastic(1, 0.5)',
    });

    // Animate Section 1 with slide up and fade-in effect
    anime({
      targets: '.section-animation',
      opacity: [0, 1], // Fade in
      translateY: [50, 0], // Slide up
      scale: [0.95, 1], // Slight zoom-in effect
      duration: 1200,
      delay: 500, // Delay for staggered effect
      easing: 'easeOutExpo',
    });

    // Animate Section 2 with a slight delay for staggered animation
    anime({
      targets: '.section2-animation',
      opacity: [0, 1], // Fade in
      translateY: [50, 0], // Slide up
      scale: [0.95, 1], // Slight zoom-in effect
      duration: 1200,
      delay: 1000, // Delay the animation to keep it flowing
      easing: 'easeOutExpo',
    });

    // Animate each Item List entry with a staggered slide-up effect
    anime({
      targets: '.item-list',
      opacity: [0, 1],
      translateY: [30, 0], // Slide up from below
      delay: anime.stagger(200), // Stagger the item entries
      duration: 1000,
      easing: 'easeOutExpo',
    });

    // Add hover effect on the Go Back button to make it bouncy
    anime({
      targets: 'button',
      scale: [1, 1.1], // Zoom in on hover
      duration: 400,
      easing: 'easeOutExpo',
      loop: true,
      direction: 'alternate',
      autoplay: false, // Trigger only on hover
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <BdayOldNewCard className="card-animation">
        <Header>
          <h3>Bday Agenda 📅</h3>
        </Header>

        <ItemsWrapper>
          <Section className="section-animation">
            <ItemList className="item-list">
              <p>
                9:30 AM - Let’s Meet!🥰<br />
                I’ll be there around 9:30 AM, to make your day even more special with my beautiful presence!<br />
                I will give you a moment to realize just <b>how lucky you are to have such a great GF</b>.😜
              </p>
            </ItemList>
            <ItemList className="item-list" style={{ backgroundColor: '#e6ffe6' }}>
              <p>
                Heading to Location 1 🚕<br />
                We’ll catch a cab because, really, who takes the train on their birthday, especially in a nice outfit? Then, we’ll head to Bandra (kyunki kabse jaana hai mujhe!).
              </p>
            </ItemList>
            <ItemList className="item-list">
              <p>
                Brunch Time ☕🥐<br />
                Okay, so we either head to SUBKO (super famous brunch/café spot, and they've got Mario game too!) or Candies (my fav café in Bandra, it’s huge, with 3-4 floors). You pick, and we’ll sit, chill, and laugh!🥳
              </p>
            </ItemList>
          </Section>

          <Section className="section2-animation">
            <ItemList className="item-list" style={{ backgroundColor: ' #ffe6ff' }}>
              <p>
                Explore Bandra 🌆<br />
                After brunch, let's take a nice walk around the peaceful lanes of Bandra. We'll stroll down Carter Road, feel the sea breeze, maybe shop locally, explore the hidden small cafes, and of course, click a bunch of cool photos along the way!📸
              </p>
            </ItemList>
            <ItemList className="item-list">
              <p>
                5:00 PM - Sunset at AER 🌅<br />
                It’s a date (but with your party, of course)! We’ll head to AER on the 40th floor in Worli to catch a stunning sunset. Enjoy some drinks, food, and wrap up the day with a<b> beautiful kiss</b>💋. A perfect ending to your birthday!🎂
              </p>
            </ItemList>
            <ItemList className="item-list" style={{ backgroundColor: ' #fff2e6' }}>
              <p>
                8:00 PM - Time to Head Home 🏠<br />
                After a day full of adventures, we’ll make our way home. Perfect time to get cozy in the cab, and hey, maybe share a little make-out session.💦 😏
              </p>
            </ItemList>

            <GobackButton>
              <button onClick={() => navigate('/')}>Go Back</button>
            </GobackButton>
          </Section>
        </ItemsWrapper>
      </BdayOldNewCard>
    </div>
  );
};

export default ListItem;
