// src/components/SignInSignUp/Panels.tsx
import { FC } from 'react';

interface PanelsProps {
  onSignUpClick: () => void;
  onSignInClick: () => void;
}

const Panels: FC<PanelsProps> = ({ onSignUpClick, onSignInClick }) => {
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>Welcome to Our Community!</h3>
          <p>
            Join us today to connect, collaborate, and grow together. Discover a world of opportunities,
            share your ideas, and be part of a vibrant community that thrives on innovation and support.
          </p>
          <button className="btn transparent" onClick={onSignUpClick}>
            Sign up
          </button>
        </div>
        <img src="/img/log.svg" className="image" alt="Log In Illustration" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>Welcome Back!</h3>
          <p>
            If you already have an account, sign in to access your personalized dashboard, manage your
            projects, and continue exploring new features tailored just for you. We're excited to see you again!
          </p>
          <button className="btn transparent" onClick={onSignInClick}>
            Sign in
          </button>
        </div>
        <img src="/img/register.svg" className="image" alt="Register Illustration" />
      </div>
    </div>
  );
};

export default Panels;
