export default async function Blog1({params}) {
     const {blogID} = await params;

    return (
        <div>
            <h1>Blog1 {blogID}</h1>
            <p>This is the blog page.</p>
        </div>
    );
}

