import Link from "next/link";

export default function AdminDash() {
    return (
        <>
            <h1>AdminDash</h1>
            <Link href='/adminDash/analytics'>Go to Analytics</Link>
        </>
    );
}