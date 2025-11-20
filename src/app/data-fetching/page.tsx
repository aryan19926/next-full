'use client'

import { useEffect, useState } from "react"
import useSWR from "swr";

// useEffect fetch


interface ProductTypes {
    id: number,
    title: string,
    price: number
}

export function FetchuseEffect() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ProductTypes[]>([]);


    async function getProducts() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products?limit=5', {
                // cache : 'no-store' // never cache your response , always fetch fresh res
                // cache: 'force-cache' // very fast beacuse of this (even  the loading state is not visible)
            });
            const result = await response.json();
            if (result) {
                setLoading(false);
                setData(result.products);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    if (loading) {
        return <div>Loading data</div>
    }

    return (
        <div>
            <h1>Use Effect Expampple</h1>
            <div> {data.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            ))}</div>
        </div>
    )
}

// swr example
const fetcher = (url: string) => fetch(url).then((res) => res.json())
export default function FetchSWR() {

    const { data, error, isLoading, mutate } = useSWR('https://dummyjson.com/products?limit=5', fetcher, { revalidateOnFocus: true, errorRetryCount: 3 });
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const handleRefresh = () => {
        mutate();
    }


    return (
        <div>
            <h1>SWR Expampple</h1>
            <button onClick={handleRefresh}>Refresh data using Mutate function</button>
            {data?.products.map((item: ProductTypes) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
}


// react query example
export function FetchReactQuery() {
    return (
        <div>
            <h1>React Query Expampple</h1>
        </div>
    )
}



