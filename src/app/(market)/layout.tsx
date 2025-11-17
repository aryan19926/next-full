export default function ({ children }: { children: React.ReactNode }) {


    return (<div>
        <nav>This is market Nav</nav>
        <main>{children}</main>
    </div>);
}