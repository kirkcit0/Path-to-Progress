import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <img src="/heart-pixel.gif" alt="Heart Pixel" className="background-gif" />
        <h1 className="welcome-text">Welcome to your new journey...</h1>
      </div>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We are dedicated to helping individuals on their journey towards self-improvement and success.
          Our mission is to provide the tools and resources necessary for personal growth, enabling everyone to achieve their full potential.
        </p>
      </section>

      <section className="project-inspiration">
        <h2>Project Inspiration</h2>
        <p>
          This project was inspired by the desire to create a supportive and engaging platform where people can learn, grow, and connect with like-minded individuals.
          Our goal is to make a difference in the lives of our users, one step at a time.
        </p>
      </section>

      <section className="you-matter">
        <h2>You Matter</h2>
        <p>If you or someone you know is in immediate danger, please call 911.</p>
        <ul>
          <li><strong>911:</strong> For immediate emergency assistance</li>
          <li><strong>National Suicide Prevention Lifeline:</strong> 1-800-273-8255</li>
          <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          <li><strong>Substance Abuse and Mental Health Services Administration (SAMHSA):</strong> 1-800-662-4357</li>
          <li><strong>Domestic Violence Hotline:</strong> 1-800-799-7233 (SAFE)</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
