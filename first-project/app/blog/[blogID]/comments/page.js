export default async function Comments({params}) {
    const paramObj= await params;
    const {blogID} = paramObj;
    console.log(blogID);
    return (
        <div>
            <h1>Comments Page <b style={{color:"red"}}>{blogID}</b></h1>
            <p>This is the comments page.</p>
        </div>
    );
}