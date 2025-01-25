import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import { CountdownComponent, GlobalStyle, TimerBox, TimeUnit, ModalCard, ButtonWrapper, ModalCardWrapper, TextWrapper, Footer } from './styles.ts';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import JSConfetti from 'js-confetti';

const targetDate = "2025-01-27T00:00:00";  // January 19th, 2025

function HomePage() {
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [buttonEnable, setButtonEnable] = useState(false);

  const today = new Date();
  const Birthday = new Date(targetDate);

  const modalRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (today.getDate() === 27) {

      console.log(today.getDate() === 27)
      setButtonEnable(true); 
      
      const jsConfetti = new JSConfetti();  
    jsConfetti.addConfetti();
    jsConfetti.addConfetti({
      confettiColors: [
        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
      ],   
    });
    }
  }, []); 
  const handleYesClick = () => {
    // if (!buttonEnable) {
    //   alert("This button is disabled. You can't click it right now.");
    //   return;
    // }
    const jsConfetti = new JSConfetti();  
    jsConfetti.addConfetti(); 

    setShowSecondModal(true);
    jsConfetti.addConfetti({
      emojis: ['💋'],         
      emojiSize: 50,         
      confettiNumber: 30,    
    });
  };

  const handleOldPlan = (option: string) => {
    navigate('/old-plan'); 

    const jsConfetti = new JSConfetti();  
    jsConfetti.addConfetti();
    jsConfetti.addConfetti({
      emojis: ['🧁'],        
      emojiSize: 50,         
      confettiNumber: 30,   
    });
  };

  const handleNewPlan = (option: string) => {
    navigate('/new-plan'); 
    const jsConfetti = new JSConfetti();  
    jsConfetti.addConfetti();
    jsConfetti.addConfetti({
      emojis: ['🧁'],         
      emojiSize: 50,        
      confettiNumber: 30,   
    });
  };

  const handleNoClick = () => {
    // if (!buttonEnable) {
    //   alert("This button is disabled. You can't click it right now.");
    //   return;
    // }

    alert("🚫 You can't say NO to your girlfriend, don't you know it? 😜");
  };

  useEffect(() => {
    if (showSecondModal) {
      anime({
        targets: modalRef.current,
        translateY: [50, 0],  // Starts from below and moves up
        opacity: [0, 1],  // Fades in
        easing: 'easeOutCubic',
        duration: 800,
      });
    }
  }, [showSecondModal]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <GlobalStyle />
        <CountdownComponent>
          <h2>Countdown to January 27, 2025!🪩</h2>
          <TimerBox>
            <Countdown
              date={new Date(targetDate).getTime()}
              renderer={({ days, hours, minutes, seconds }) => (
                <div>
                  <p>
                    <TimeUnit>{days} Days</TimeUnit>
                    <TimeUnit>{hours} Hours</TimeUnit>
                    <TimeUnit>{minutes} Minutes</TimeUnit>
                    <TimeUnit>{seconds} Seconds</TimeUnit>
                  </p>
                </div>
              )}
            />
          </TimerBox>
        </CountdownComponent>

        {/* First Modal - This will show after clicking 'Yes' */}
        {showSecondModal ? (
          <ModalCardWrapper ref={modalRef}>
            <ModalCard>
              <TextWrapper>
                <p><b>Your Choice: Mumbai or Ahmedabad?</b><br />
                  Old: Mumbai Plan 🚗<br />
                  New: Ahmedabad Plan 🚅<br /></p>
              </TextWrapper>
              <ButtonWrapper>
                <button onClick={handleOldPlan}>Old Plan</button>
                <button onClick={handleNewPlan}>New Plan</button>
              </ButtonWrapper>
            </ModalCard>
          </ModalCardWrapper>
        ) : (
          // Initial Modal
          <ModalCardWrapper>
            <ModalCard>
              <TextWrapper>
                <p><b>The clock is ticking, time to see the plan,⏰</b> <br />
                  28 years, but let's make it clear,<br />
                  We're partying like you're turning 18 this year!🍾
                </p>
              </TextWrapper>
              <ButtonWrapper>
                <button onClick={handleYesClick} >Yes</button>
                <button onClick={handleNoClick} >No</button>
              </ButtonWrapper>
            </ModalCard>
          </ModalCardWrapper>
        )}

        <Footer>
          <p>Made just for you!❤️ </p>
        </Footer>
      </div>
    </>
  );
}

export default HomePage;
