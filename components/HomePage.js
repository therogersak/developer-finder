import Search from "./Search";
import User from "./User";

function HomePage({ data }) {
  return (
    <>
      <div className="max-w-2xl flex items-center justify-center flex-col min-h-screen mx-auto space-y-5">
        <Search />
        <User data={data} />
      </div>
    </>
  );
}

export default HomePage;
