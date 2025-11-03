"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section>
      <nav className="space-x-3">
        <Link
          className={`link ${pathname === "/login" ? "text-red-500" : ""}`}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={`link ${pathname === "/register" ? "text-red-500" : ""}`}
          href="/register"
        >
          Register
        </Link>
      </nav>
      {children}
    </section>
  );
}
