// NODE MODULES
import { useRouteError, Link, useNavigation } from "react-router-dom";

// COMPONENTS
import { LinearProgress } from "@mui/material";

const RootError = () => {
    // RETRIEVE ERROR FROM CUSTOM HOOK
    const error = useRouteError();

    // ACCESS NAVIGATION STATE
    const navigation = useNavigation();

    return (
        <>
            <div className="h-dvh flex flex-col items-center justify-center text-center px-4">
                <p className="text-displayLarge">
                    {error.status}
                </p>

                <p className="text-light-onSurfaceVariant 
                dark:text-dark-onSurfaceVariant mt-1 mb-4">
                    We couldn&apos;t find the page you&apos;re looking for.
                </p>

                <Link
                    className="btn filled primary"
                    to="/"
                >
                    Back to Home
                    <div className="state-layer"></div>
                </Link>
            </div>

            {navigation.state === "loading" && 
            ( <LinearProgress classes="fixed top-0 left-0 right-0" /> )}
        </>
    );
};

export default RootError;
