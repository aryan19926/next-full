// React 19 introduces the use() function, 
// a new feature that reads the value of a resource like a promise or context,
// but it's a function, not a hook, 
// which means it doesn't need to follow the rules of hooks (like being called at the top level).
// It works seamlessly with Suspense to handle loading states 
// for promises and integrates with error boundaries for rejected promises
'use client'
import { Suspense, use } from "react";




interface ProductTypes {
    id: number,
    title: string,
    price: number
}

interface ResponseType {
    products: ProductTypes[]
}


function getProducts(): Promise<ResponseType> {
    return fetch('https://dummyjson.com/products?limit=5').then((res) => res.json());
}


export default function UseHook() {

    const data = getProducts();
    // await waits for the Promise to resolve
    // After await, data is ResponseType (the object { products: [...] })
    // data is not a Promise anymore
    return (
        <Suspense fallback={
            <div>Loading....</div>
        }>
            <ProductList productList={data} />
        </Suspense>
    );
}

const ProductList = ({ productList }: { productList: Promise<ResponseType> }) => {

    const data = use(productList);

    return (<div>
        {data.products.map((item) => (
            <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        ))}
    </div>);
}