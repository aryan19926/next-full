import type { Metadata } from "next";

const Sampledata = {
    1: {
        title: "One"
    },
    2: {
        title: "Two"
    },
    3: {
        title: "Three"
    }
}


export async function generateMetadata({ params }: { params: Promise<{ slug: number }> }): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: Sampledata[slug as keyof typeof Sampledata].title,
        description: Sampledata[slug as keyof typeof Sampledata].title
    }
}


export default async function DynamicMetaData({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    return (<div>
        <h1>Dynamic Metadata</h1>
    </div>);

}