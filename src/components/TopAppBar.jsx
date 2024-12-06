// NODE MODULES
import { Link, useNavigation } from "react-router-dom";

// COMPONENTS
import { IconBtn } from "./Button";
import Avatar from "./Avatar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

// ASSETS
import {logoLight, logoDark} from "../assets/assets";

const TopAppBar = () => {

    const navigation = useNavigation();

    // CHECK IF PAGE IS LOADING
    const isNormalLoad = navigation.state === "loading" && !navigation.formData;

    return (
    <header className="">
        <div className="">
            <IconBtn 
            icon="menu" 
            title="Menu"
            />

            <Link 
            to="/" 
            className=""
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
            <IconBtn>
                <Avatar name="Thounny"/>
            </IconBtn>

            <Menu>
                <MenuItem labelText="Log out"/>
            </Menu>
        </div>
    </header>
    );
};

export default TopAppBar