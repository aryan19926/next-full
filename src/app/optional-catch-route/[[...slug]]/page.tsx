export default async function OptionalProductFilter({ params }: { params: Promise<{ slug: string[] }> }) {

    const { slug } = await params;
    console.log(slug);


    // when we go to /optional-catch-route --> we do not get 404 (slug is optional)

    return (
        <div>
            <h1>Optional Product Filter</h1>
            <p>{slug}</p>
        </div>
    );
}