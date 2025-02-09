"use client"

import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  const handleSignInClick = () => {
    console.log("Navigating to sign-in page...");
    // Add navigation logic here (e.g., router.push("/login"))
  };

  return <RegisterForm onSignInClick={handleSignInClick} />;
};

export default RegisterPage;
