
export default async function ProductDetails({ params }: { params: Promise<{ slug: Number }> }) {

    const { slug } = await params;

    return (
        <div>
            <h1>Product Details page</h1>
            <h2>{slug.toString()}</h2>
        </div>
    );
}