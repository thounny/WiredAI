// NODE MODULES
import { 
    useNavigation, 
    useNavigate, 
    useLoaderData, 
    useParams ,
    useSubmit,
} from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";


// CUSTOM MODULES
import logout from "../utils/logout";
import deleteConversation from "../utils/deleteConversation";

// CUSTOM HOOKS
import { useToggle } from "../hooks/useToggle";

// COMPONENTS
import { IconBtn } from "./Button";
import Avatar from "./Avatar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import LinearProgress from "@mui/material/LinearProgress"; // Ensure correct import

const TopAppBar = ({ toggleSidebar }) => {
    // PROVIDES NAVIGATION STATE (LOADING/SUBMITTING)
    const navigation = useNavigation();

    // FUNCTION TO NAVIGATE BETWEEN PAGES
    const navigate = useNavigate();

    // USER DATA FOR TOP APP BAR
    const { conversations,user } = useLoaderData();

    // GET URL PARAMETERS
    const params = useParams();

    // GET SUBMIT FUNCTION
    const submit = useSubmit();

    // TOGGLE MENU
    const [showMenu, setShowMenu] = useToggle();

    // CHECK IF PAGE IS LOADING
    const isNormalLoad = navigation.state === "loading" && !navigation.formData;

    return (
        <header className="relative flex justify-between items-center h-16 px-4">
            <div className="flex items-center gap-1">
                <IconBtn 
                    icon="menu" 
                    title="Menu"
                    classes="lg:hidden"
                    onClick={toggleSidebar}
                />

                <Logo classes="lg:hidden" />
            </div>

            {params.conversationId && (
                <IconBtn 
                    icon="delete"
                    classes="ms-auto me-1 lg:hidden"
                    onClick={() => {
                        // FIND CURRENT CONVERSATION TITLE
                        const { title } = conversations.documents.find(
                            ({ $id }) => params.conversationId === $id,
                        );

                        deleteConversation({
                            id: params.conversationId,
                            title,
                            submit, 
                        });
                    }}
                />
                
            )}

            <div className="menu-wrapper">
                <IconBtn onClick={setShowMenu}>
                    <Avatar name={user.name} />
                </IconBtn>

                <Menu classes={showMenu ? "active" : ""}>
                    <MenuItem 
                        labelText="Log out" 
                        onClick={() => logout(navigate)}
                    />
                </Menu>
            </div>

            {/* Show LinearProgress when page is loading */}
            {isNormalLoad && (
                <motion.div 
                    className="absolute top-full left-0
                right-0 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <LinearProgress />
                </motion.div>
            )}

            {/* <AnimatePresence>
                {isNormalLoad && 
                <LinearProgress classes="absolute top-full left-0
                right-0 z-10" />}
            </AnimatePresence> */}
        </header>
    );
};

TopAppBar.propTypes = {
    toggleSidebar: PropTypes.func,
};

export default TopAppBar;
