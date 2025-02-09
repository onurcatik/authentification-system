// src/components/SignInSignUp/LoginForm.tsx
'use client';

import { useState, useTransition } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
// import { signIn } from 'next-auth/react'; 
// 1) REMOVE the FontAwesome imports since you're no longer using them

// 2) Import your new Social component
import Social from "./social";

// Import your LoginSchema and action
import { LoginSchema } from '@/schemas';
import { login } from '@/actions/login';

const LoginForm = () => {
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [loginPending, startLoginTransition] = useTransition();

  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      code: '', // two-factor code (if needed)
    },
  });

  // 3) We no longer need handleGoogleLogin or handleGithubLogin,
  //    as those are now handled in the <Social /> component
  //
  // const handleGoogleLogin = () => { signIn('google'); };
  // const handleGithubLogin = () => { signIn('github'); };

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = (values) => {
    setLoginError('');
    setLoginSuccess('');
    startLoginTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            loginForm.reset();
            setLoginError(data.error);
          }
          if (data?.success) {
            loginForm.reset();
            setLoginSuccess(data.success);
          }
          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setLoginError('Something went wrong'));
    });
  };

  return (
    <form onSubmit={loginForm.handleSubmit(onSubmit)} className="sign-in-form">
      <h2 className="title">Sign in</h2>

      {showTwoFactor ? (
        <div className="input-field">
          <i className="fas fa-key"></i>
          <input
            type="text"
            placeholder="Two Factor Code"
            {...loginForm.register('code')}
            disabled={loginPending}
          />
        </div>
      ) : (
        <>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              {...loginForm.register('email')}
              disabled={loginPending}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              {...loginForm.register('password')}
              disabled={loginPending}
            />
          </div>
          <Link href="/auth/reset" className="forgot-password">
            Forgot password?
          </Link>
        </>
      )}

      {loginError && <p className="error">{loginError}</p>}
      {loginSuccess && <p className="success">{loginSuccess}</p>}

      <input
        type="submit"
        value={showTwoFactor ? 'Confirm' : 'Login'}
        className="btn solid"
      />

      {/* 4) Use the Social component below */}
      <p className="social-text">Or sign in with social platforms</p>
      <Social />
    </form>
  );
};

export default LoginForm;
