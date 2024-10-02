import React from 'react';
import { BookOpen, Brain, Activity, Globe } from 'lucide-react';
import './hero.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-section__title">
        Meet bookiebear: Your AI Learning Assistant
      </h1>
      <p className="hero-section__description">
        Powered by Google's Gemini AI, supporting your learning journey 24/7
      </p>

      <div className="feature-cards">
        <FeatureCard
          icon={<BookOpen className="feature-card__icon" />}
          title="Personalized Learning"
          description="Get real-time support for homework across various subjects"
        />
        <FeatureCard
          icon={<Brain className="feature-card__icon" />}
          title="Interactive Practice"
          description="Engage with practice questions and study suggestions"
        />
        <FeatureCard
          icon={<Activity className="feature-card__icon" />}
          title="Progress Tracking"
          description="Receive feedback and track your learning progress"
        />
        <FeatureCard
          icon={<Globe className="feature-card__icon" />}
          title="Global Accessibility"
          description="Access learning support anytime, anywhere in the world"
        />
      </div>

      <button className="hero-section__button">Start Learning Now</button>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      {icon}
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
};

export default HeroSection;