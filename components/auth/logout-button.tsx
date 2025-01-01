"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const router = useRouter();

  const onClick = async () => {
    await logout(); // Logout işlemini tamamlayın
    router.push("/auth/login"); // Ana sayfaya yönlendirin
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
