import { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {

    title: 'My Blog',
    description: 'Static Metadata example',
}


export default function () {
    return (<div>
        <h1>This is Metadata example</h1>
        <div className="border-1 mt-10 w-100 p-4">
            <ol>
                <li><Link href={`/metadata/${1}`}>1</Link></li>
                <li> <Link href={`/metadata/2`}>2</Link></li>
                <li> <Link href={`/metadata/3`}>3</Link></li>

            </ol>
        </div>
    </div>)
}