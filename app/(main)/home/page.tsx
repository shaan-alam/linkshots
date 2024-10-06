import Editor from "@/components/editor";
import Sidebar from "@/components/sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[85%] p-12">
        <Editor />
      </div>
    </div>
  );
};

export default Home;
