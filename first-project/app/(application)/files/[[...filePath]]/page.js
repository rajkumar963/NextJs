export const metadata = {
  title: {
    absolute:"My Files"
  }
}

export default async function Files({params}) {
    const {filePath} = await params;
    console.log(await params);
    return (
        <div>
            <h1> All Files</h1>
            <p>/{filePath?.join("/")}</p>
        </div>
    );
}