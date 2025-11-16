export default function AdminDashLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {/* this is will persist  */}
            <nav className="flex justify-center border-1  align-center p-4 rounded">
                <h1 >This is the NavBar (AdminDashLayout)</h1>
            </nav>
            {children}
        </div>
    );
}
