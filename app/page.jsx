import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share{` `}
        <span className="orange_gradient pb-4 max-sm:inline block text-center">
          AI-Powered Propmts
        </span>
      </h1>
      <p className="desc text-center">
        Promptadise is an open-source AI-prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
