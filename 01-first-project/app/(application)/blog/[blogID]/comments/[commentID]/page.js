export default async function Comment({params}) {
    const paramObj= await params;
    const {blogID,commentID} = paramObj;
    console.log(paramObj);
    return (
        <div>
            <h1>Comment No. <i>{commentID}</i> <b style={{color:"red"}}>{blogID}</b></h1>
        </div>
    );
}