
interface ProductTypes {
    id: number,
    title: string,
    price: number
}

interface ResponseType {
    products: ProductTypes[]
}


// Cache options---

// auto no cache (default): Next.js fetches the resource from the remote server on every request in development, but will fetch once during next build because the route will be statically prerendered. If Dynamic APIs are detected on the route, Next.js will fetch the resource on every request.
// no-store: Next.js fetches the resource from the remote server on every request, even if Dynamic APIs are not detected on the route.
// force-cache: Next.js looks for a matching request in its Data Cache.
// If there is a match and it is fresh, it will be returned from the cache.
// If there is no match or a stale match, Next.js will fetch the resource from the remote server and update the cache with the downloaded resource.
// reload -- fetch fresh res and updates the cache


async function getProducts(): Promise<ResponseType> {

    const response = await fetch('https://dummyjson.com/products?limit=5', {
        // cache : 'no-store' // never cache your response , always fetch fresh res
        cache: 'force-cache'
    });
    if (!response.ok) {
        throw new Error("Api failed");
    }

    return response.json();
}


export default async function ServerFetch() {

    const data = await getProducts();

    return (<div>
        {data.products.map((item) => (
            <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        ))}
    </div>);

}