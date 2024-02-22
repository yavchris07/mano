import BannerShort from "../components/BannerShot"
import NavBar from "../components/NavBar";
import { useState } from "react";
import IPost from "../types/Post";
import Posts from "../types/post-data";
import { useParams } from 'react-router-dom';



const Blog = () => {

  const {id} = useParams<string>();
  const vl = parseInt(id!)
  const [blogs] = useState<IPost[]>(Posts);
  let blog = blogs[vl];
  console.log('blog : ',blog);

  return (
    < > 
      <NavBar />
      <BannerShort title={blog.title}/>

       <div className="blog-container">
         
        </div>
    </>
  )
}

export default Blog

