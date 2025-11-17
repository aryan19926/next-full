const getData = async (delay: number) => {

    const guess = Math.random();

    if (guess > 0.5)
        throw new Error("Custom Error");

    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Hey");
        }, delay);
    })
}



export default async function ApiCall() {

    const data: string = await getData(1000);

    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
}