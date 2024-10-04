import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogDetails from "@/components/containers/blog/BlogDetails";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import {blogsData} from "@/constants/blogsData";

const page = ({params}) => {
  const blogId= params.blogId;
  const blog = blogsData.find((blog) => blog.id === parseInt(blogId));
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="Blog Details" />
      <BlogDetails blog={blog}/>
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
