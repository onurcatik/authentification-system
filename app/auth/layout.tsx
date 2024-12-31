const AuthLayout = ({
    children
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div className="h-full flex items-center justify-center  to-blue-500
        text-white">
        {children}
      </div>
    );
  };

 
  
  export default AuthLayout;
  