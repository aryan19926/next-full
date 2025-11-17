'use client'

import { useEffect } from "react"

// reset
// The cause of an error can sometimes be temporary. In these cases, trying again might resolve the issue.
// An error component can use the reset() function to prompt the user to attempt to recover from the error. 
// When executed, the function will try to re-render the error boundary's contents. 
// If successful, the fallback error component is replaced with the result of the re-render.

// digest --An automatically generated hash of the error thrown. It can be used to match the corresponding error in server-side logs.

export default function Error({ error, reset }: { error: Error & { digest: string }, reset: () => void }) {   // error boundaries must be a client component
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])


    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )

}