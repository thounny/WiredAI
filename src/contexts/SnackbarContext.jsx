// NODE MODULES
import { createContext, useState, useRef, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

// COMPONENTS
import Snackbar from "../components/Snackbar";

const initialCtxValue = {
    snackbar: {
        open: false,
        message: "",
        type: "info"
    },
    showSnackbar: ({message, type = "info", timeOut = 5000}) => {},
    hideSnackbar: () => {},
}

export const SnackbarContext = createContext(initialCtxValue);

const SnackbarProvider = ({children}) => {
    const [snackbar, setSnackbar] = useState({
        open: false,
        messsage: "",
        type: "info"
    });

    const timeoutRef = useRef();

    // SHOW SNACKBAR
    const showSnackbar = useCallback(({ message,type = "info", timeOut = 5000 }) => {
        // CLEAR PREVIOUS TIMEOUT
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        // SET THE SNACKBAR MESSAGE + TYPE
        setSnackbar({ open: true, message, type });
        // AUTO HIDE SNACKBAR AFTER 5 SECONDS
        timeoutRef.current = setTimeout(() => {
            setSnackbar((prev) => {
                return {...prev, open: false};
            });
        }, timeOut);
    },[]);

    // HIDE SNACKBAR (IF NECESSARY)
    const hideSnackbar = useCallback(() => {
        // CLEAR PREVIOUS TIMEOUT
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setSnackbar({open: false, message: "", type: "info"});
    }, []);

    // MEMORIZE CONTEXT VALUE TO AVOID UNNECESSARY RE-RENDER
    const contextValue = useMemo(() => {
        return {showSnackbar, hideSnackbar};
    }, [showSnackbar, hideSnackbar]);
    return (
        <SnackbarContext.Provider value={contextValue}>
        {children}

        <Snackbar snackbar={snackbar} />
        </SnackbarContext.Provider>
    )
}



SnackbarProvider.proptypes = {
    children: PropTypes.any,
};

export default SnackbarProvider;