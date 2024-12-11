// NODE MODULES
import { Link, useNavigation, useNavigate, useLoaderData } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// CUSTOM MODULES
import logout from "../utils/logout";

// CUSTOM HOOKS
import { useToggle } from "../hooks/useToggle";

// COMPONENTS
import { IconBtn } from "./Button";
import Avatar from "./Avatar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

// ASSETS
import {logoLight, logoDark} from "../assets/assets";

const TopAppBar = () => {

    //  PROVIDES NAVIGATION STATE (LOADING/SUBMITTING)
    const navigation = useNavigation();

    // FUNCTION TO NAVIGATE BETWEEN PAGES
    const navigate = useNavigate();

    // USER DATA FOR TOP APP BAR
    const { user } = useLoaderData();    

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
            />

            <Link 
            to="/" 
            className="min-w-max max-w-max h-[24px] lg:hidden"
            >
                <img 
                src={logoLight} 
                width={133} 
                height={24} 
                alt="WiredAI logo" 
                className="dark:hidden" 
                />

                <img 
                src={logoDark} 
                width={133} 
                height={24} 
                alt="WiredAI logo" 
                className="hidden dark:block" 
                />
            </Link>
        </div>

        <div className="menu-wrapper">
            <IconBtn onClick={setShowMenu}>
                <Avatar name={user.name}/>
            </IconBtn>

            <Menu classes={showMenu ? "active" : ""}>
                <MenuItem labelText="Log out" onClick={() => {
                    logout(navigate);
                }}/>
            </Menu>
        </div>

        <AnimatePresence>{isNormalLoad && <LinearProgress />}
        </AnimatePresence>
    </header>
    );
};

export default TopAppBar