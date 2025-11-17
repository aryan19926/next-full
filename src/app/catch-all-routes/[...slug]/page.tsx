export default async function ProductFilter({ params }: { params: Promise<{ slug: string[] }> }) {

    const { slug } = await params;
    console.log(slug);


    // slug is mandotory

    return (
        <div>
            <h1>Product Filter</h1>
            <p>{slug}</p>
        </div>
    );
}