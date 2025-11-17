"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Profile() {

    const router = useRouter();
    const pathName = usePathname();  // can be helpful if we want to render some component based on pathname
    const searchParams = useSearchParams();

    console.log(searchParams.get('name'));  // http://localhost:3000/profile?name=aryan
    console.log(searchParams.getAll('name'));


    const handleClick = () => {
        router.push('/adminDash');
    }

    return (
        <div>
            <h1>Profile -- Client component</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>

    );
}