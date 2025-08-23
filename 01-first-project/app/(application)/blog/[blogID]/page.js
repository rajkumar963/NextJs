import { notFound } from "next/navigation";

export async function generateMetadata({params}) {
    const {blogID} = await params;
    return {
        title: `Blog ${blogID}`,
    }
}



export default async function Blog1({params}) {
     const {blogID} = await params;
     if(!/^\d+$/.test(blogID) ){
        notFound();
     }
    return (
        <div>
            <h1>Blog1 {blogID}</h1>
            <p>This is the blog page.</p>
        </div>
    );
}

