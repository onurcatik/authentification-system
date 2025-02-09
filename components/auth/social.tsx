// "use client";

// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// import { signIn } from "next-auth/react";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { useSearchParams } from "next/navigation";

// export const Social = () => {
 

//   return (
//     <div className="flex items-center w-full gap-x-2">
//       <Button
//         size="lg"
//         className="w-full"
//         variant="outline"
//         onClick={() => ("google")}
//       >
//         <FcGoogle className="h-5 w-5" />
//       </Button>
//       <Button
//         size="lg"
//         className="w-full"
//         variant="outline"
//         onClick={() => ("github")}
//       >
//         <FaGithub className="h-5 w-5" />
//       </Button>
//     </div>
//   );
// };

// export default Social


"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2 relative right-12  ">
      <Button
        size="lg"
        className="w-[40%] relative left-24"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-[40%] relative left-24"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;

