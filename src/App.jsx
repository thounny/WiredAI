// COMPONENTS
import PageTitle from "./components/PageTitle";
import TopAppBar from "./components/TopAppBar";

const App = () => {
  return (
    <>
    {/* Meta Title */}
    <PageTitle title="WiredAI - Step Into The Wired, Create the Future" />

    <div className="">
      {/* Sidebar */}

      <div className="">
        {/* Top app bar */}
        <TopAppBar />

        {/* Main content */}
        <div className="">
          <div className=""></div> 
        </div>

        {/* Prompt field */}
        <div className="">
          <p className="">
            WiredAI may display inaccurate information about people, places, or events, 
            so double-check its responses.
            <a 
            href="https://support.google.com/gemini?p=privacy_notice"
            target="_blank" 
            className=""
            >
              Your privacy and Gemini Apps
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
