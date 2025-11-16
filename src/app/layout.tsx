import "./globals.css";
import Link from 'next/link'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* this is will persist  */}
        <nav className="flex justify-center border-1  align-center p-4 rounded ">
          <h1 >This is the NavBar (RootLayout)</h1>
          <Link href='/'>Back to Home</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
