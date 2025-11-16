import Link from "next/link";
export default function () {

    const products = [
        { id: 1, name: "Airpods", price: "499" },
        { id: 2, name: "Iphone", price: "599" },
        { id: 3, name: "Mac", price: "699" }
    ]

    return (
        <div className="flex items-center  justify-center">
            <h1>Prodcuts: </h1>
            {products.map((item) => (
                <div key={item.id} className="border p-4 rounded">
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <Link href={`/products/${item.id}`}>View Details</Link>
                </div>
            )
            )
            }
        </div>
    );
}