import './blogID.css'
import styles from './hi.module.css'


const Blog = async ({ params }) => {
  const { blogID } = await params;

  // const randomNumber = Math.random();
  // console.log(randomNumber);
  
  // if (randomNumber > 0.5) {
  //   throw new Error("Error occurred");
  // }

  return (
    <>
      <div className='blogID'>
        <h1 className='title' >Welcome to Our Blog {blogID}</h1>
        <p className={styles.para}>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;