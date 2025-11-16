// server component by default
// we can fetch data inside a server component
// access backend resources directly
// keep sensitive info in the server side not to be exposed on client side


// every folder should have page.tsx 

// import { useState } from "react";

// you cannot use any hooks in server component
// cannot add event and also cannot use browserApis
// Error -- You're importing a component that needs `useState`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive.


export default function Home() {

  // const [value, setValue] = useState(0);

  return (
    <div className="flex items-center justify-center">
      <h1>Aryan</h1>
    </div>
  );
}
