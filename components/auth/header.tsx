import { Poppins } from "next/font/google";


import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center ">
      <h1 className={cn("text-4xl font-bold text-white", font.className)}></h1>
      <p className="text-4xl font-bold text-white">{label}</p>
    </div>
  );
};

export default Header;
