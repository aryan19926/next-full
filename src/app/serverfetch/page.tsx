
interface ProductTypes {
    id: number,
    title: string,
    price: number
}

interface ResponseType {
    products: ProductTypes[]
}


async function getProducts(): Promise<ResponseType> {

    const response = await fetch('https://dummyjson.com/products?limit=5');
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