"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Header from "@/components/auth/header";
import Social from "../../components/auth/social";
import BackButton from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter className="relative left-6">
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;

// "use client";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardFooter,
// } from "@/components/ui/card";
// import Header from "@/components/auth/header";
// import Social from "../../components/auth/social";
// import BackButton from "@/components/auth/back-button";

// interface CardWrapperProps {
//   children: React.ReactNode;
//   headerLabel: string;
//   backButtonLabel: string;
//   backButtonHref: string;
//   showSocial?: boolean;
// }

// const CardWrapper = ({
//   children,
//   headerLabel,
//   backButtonLabel,
//   backButtonHref,
//   showSocial,
// }: CardWrapperProps) => {
//   return (
//     <Card className="w-full max-w-screen-lg sm:max-w-screen-xl mx-auto shadow-md bg-[#0C172C]">
//       <CardHeader>
//         <Header label={headerLabel} />
//       </CardHeader>
//       <CardContent>{children}</CardContent>
//       <CardFooter className="flex flex-col sm:flex-row justify-between items-center sm:left-0 sm:bottom-0 sm:absolute sm:space-x-4">
//         {showSocial && <Social />}
//         <BackButton label={backButtonLabel} href={backButtonHref} />
//       </CardFooter>
//     </Card>
//   );
// };

// export default CardWrapper;


// "use client";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardFooter,
// } from "@/components/ui/card";
// import Header from "@/components/auth/header";
// import Social from "../../components/auth/social";
// import BackButton from "@/components/auth/back-button";

// interface CardWrapperProps {
//   children: React.ReactNode;
//   headerLabel: string;
//   backButtonLabel: string;
//   backButtonHref: string;
//   showSocial?: boolean;
// }

// const CardWrapper = ({
//   children,
//   headerLabel,
//   backButtonLabel,
//   backButtonHref,
//   showSocial,
// }: CardWrapperProps) => {
//   return (
//     <Card className="w-full max-w-screen-lg lg:max-w-screen-xl mx-auto shadow-md bg-[#0C172C]">
//       <CardHeader className="text-white">
//         <Header  label={headerLabel} />
//       </CardHeader>
//       <CardContent>{children}</CardContent>
//       <CardFooter className="relative left-[550px] bottom-[130px]  ">
//         {showSocial && <Social />}
       
    
//         <BackButton label={backButtonLabel} href={backButtonHref} />
//       </CardFooter>
//     </Card>
//   );
// };

// export default CardWrapper;


