// src/components/SignInSignUp/SignInSignUp.tsx
'use client';

import { useState } from 'react';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import Panels from './panels';
import '../../styles/auth.css';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  return (
  
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Both forms are mounted; CSS controls which is visible */}
          <LoginForm />
          <RegisterForm onSignInClick={handleSignInClick} />
        </div>
      </div>
      <Panels onSignUpClick={handleSignUpClick} onSignInClick={handleSignInClick} />
    </div>
  );
};

export default SignInSignUp;
