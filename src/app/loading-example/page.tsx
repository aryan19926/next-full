

const getData = async (delay: number) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Hey");
        }, delay);
    })
}


export default async function ApiCall() {

    const data: string = await getData(1000);

    return (
        <h1>{data}</h1>
    );
}