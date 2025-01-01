// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { Button } from "@/components/ui/button";
// import { UserButton } from "@/components/auth/user-button";

// export const Navbar = () => {
//   const pathname = usePathname();

//   return (
//     <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
//       <div className="flex gap-x-2">
//         <Button 
//           asChild
//           variant={pathname === "/server" ? "default" : "outline"}
//         >
//           <Link href="/server">
//             Server
//           </Link>
//         </Button>
//         <Button 
//           asChild
//           variant={pathname === "/client" ? "default" : "outline"}
//         >
//           <Link href="/client">
//             Client
//           </Link>
//         </Button>
//         <Button 
//           asChild
//           variant={pathname === "/admin" ? "default" : "outline"}
//         >
//           <Link href="/admin">
//             Admin
//           </Link>
//         </Button>
//         <Button 
//           asChild
//           variant={pathname === "/settings" ? "default" : "outline"}
//         >
//           <Link href="/settings">
//             Settings
//           </Link>
//         </Button>
//       </div>
//       <UserButton />
//     </nav>
//   );
// };

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-500 shadow-lg p-6 w-full mx-auto flex flex-col md:flex-row justify-end items-center gap-10 ">
      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <Button
          asChild
          variant="outline"
          className={`text-lg font-semibold ${
            pathname === "/server"
              ? "bg-white text-black shadow-md"
              : "bg-white text-black hover:bg-green-400 hover:text-black"
          }`}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className={`text-lg font-semibold ${
            pathname === "/client"
              ? "bg-white text-black shadow-md"
              : "bg-white text-black hover:bg-green-400 hover:text-black"
          }`}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className={`text-lg font-semibold ${
            pathname === "/admin"
              ? "bg-white text-blue-700 shadow-md"
              : "bg-white text-black hover:bg-green-400 hover:text-black"
          }`}
        >
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className={`text-lg font-semibold ${
            pathname === "/settings"
              ? "bg-white text-black shadow-md"
              : "bg-white text-black hover:bg-green-400 hover:text-black"
          }`}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>

      {/* User Profile Section */}
      <UserButton />
    </nav>
  );
};

