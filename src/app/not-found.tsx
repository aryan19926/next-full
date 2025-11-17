"use client"
import { useRouter } from "next/navigation";

export default function NotFoundPage() {

    const router = useRouter();

    return (<div>
        <h1>Page does not exist</h1>
        <button onClick={() => router.push('/')}>Go to home</button>
    </div>);
}