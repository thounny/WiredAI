// COMPONENTS
import PageTitle from "./components/PageTitle";
import TopAppBar from "./components/TopAppBar";
import Sidebar from "./components/Sidebar";

// CUSTOM HOOKS
import { useToggle } from "./hooks/useToggle";

const App = () => {

  // TOGGLE SIDEBAR
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <>
    {/* Meta Title */}
    <PageTitle title="WiredAI - Step Into The Wired, Create the Future" />

    <div className="">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>

      <div className="">
        {/* Top app bar */}
        <TopAppBar toggleSidebar={toggleSidebar}/>

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
