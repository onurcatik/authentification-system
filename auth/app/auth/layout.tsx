const AuthLayout = ({
    children
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500
        text-white">
        {children}
      </div>
    );
  };

 
  
  export default AuthLayout;
  