// src/components/SignInSignUp/RegisterForm.tsx
'use client';

import { useState, useTransition } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { signIn } from 'next-auth/react'; // NextAuth signIn function

// Import your RegisterSchema and action
import { RegisterSchema } from '@/schemas';
import { register as registerAction } from '@/actions/register';

interface RegisterFormProps {
  onSignInClick: () => void;
}

const RegisterForm = ({ onSignInClick }: RegisterFormProps) => {
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [registerPending, startRegisterTransition] = useTransition();

  const registerForm = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof RegisterSchema>> = (values) => {
    setRegisterError('');
    setRegisterSuccess('');
    startRegisterTransition(() => {
      registerAction(values)
        .then((data) => {
          if (data?.error) {
            registerForm.reset();
            setRegisterError(data.error);
          } else if (data?.sucess) {
            registerForm.reset();
            setRegisterSuccess(data.sucess);
          }
        })
        .catch(() => {
          setRegisterError('Something went wrong');
        });
    });
  };

  // Handlers for social registration
  const handleGoogleSignUp = () => {
    // Trigger NextAuth's signIn for Google.
    signIn('google');
  };

  const handleGithubSignUp = () => {
    // Trigger NextAuth's signIn for GitHub.
    signIn('github');
  };

  return (
    <form onSubmit={registerForm.handleSubmit(onSubmit)} className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Full Name"
          {...registerForm.register('name')}
          disabled={registerPending}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          {...registerForm.register('email')}
          disabled={registerPending}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          {...registerForm.register('password')}
          disabled={registerPending}
        />
      </div>
      {registerError && <p className="error">{registerError}</p>}
      {registerSuccess && <p className="success">{registerSuccess}</p>}
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
       
       
      </div>
      <p className="text-sm text-white mt-8">
        Already have an account?{' '}
        <a
          href="#"
          onClick={onSignInClick}
          className="text-white font-semibold hover:underline ml-1"
        >
          Login here
        </a>
      </p>
    </form>
  );
};

export default RegisterForm;
