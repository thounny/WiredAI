// NODE MODULES
import { motion } from "framer-motion";

// COMPONENTS
import PageTitle from "./components/PageTitle";
import TopAppBar from "./components/TopAppBar";
import Sidebar from "./components/Sidebar";
import Greetings from "./pages/Greetings";
import PromptField from "./components/PromptField";

// CUSTOM HOOKS
import { useToggle } from "./hooks/useToggle";

const App = () => {

  // TOGGLE SIDEBAR
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <>
    {/* Meta Title */}
    <PageTitle title="WiredAI - Step Into The Wired, Create the Future" />

    <div className="lg:grid lg:grid-cols-[320px,1fr]">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>

      <div className="h-dvh grid grid-rows-[max-content,minmax(0,1fr)]">
        {/* Top app bar */}
        <TopAppBar toggleSidebar={toggleSidebar} />

        {/* Main content */}
        <div className="px-5 pb-5 flex-col overflow-y-auto">
          <div className="max-w-[840px] w-full mx-auto grow">
            <Greetings />
            </div> 
        </div>

        {/* Prompt field */}
        <div className="bg-light-background dark:bg-dark-background">
          <div className="max-w-[870px] px-5 w-full mx-auto">
          <PromptField />

          <motion.p 
          initial={{ opacity: 0, translateY: "-4px" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.2, delay: 0.8, ease: "easeOut" }}
          className="text-bodySmall text-center text-light-onSurfaceVariant
           dark:text-dark-onSurfaceVariant p-3"
           >
            WiredAI may display inaccurate information about people, places, or events, 
            so double-check its responses.
            <a 
            href="https://support.google.com/gemini?p=privacy_notice"
            target="_blank" 
            className="inline underline ms-1"
            >
              Your privacy and Gemini Apps
            </a>
          </motion.p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
