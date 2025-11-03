//root layout file in inside app folder
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-amber-500 ">
          Header
          <nav className="space-x-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>
        {children}
        <footer className="bg-green-300 h-10">Footer</footer>
      </body>
    </html>
  );
}
