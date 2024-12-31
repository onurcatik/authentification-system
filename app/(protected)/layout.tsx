// import { Navbar } from "./_components/navbar";

// interface ProtectedLayoutProps {
//   children: React.ReactNode;
// };

// const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
//   return ( 
//     <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center  bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500">
//       <Navbar />
//       {children}
//     </div>
//    );
// }
 
// export default ProtectedLayout;

import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className=" w-full flex flex-col items-center bg-white">
      {/* bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 */}
      {/* Navbar Section */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Content Section */}
      <div className="w-full flex-1 flex flex-col gap-y-10 items-center justify-center p-4 mt-0">
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
