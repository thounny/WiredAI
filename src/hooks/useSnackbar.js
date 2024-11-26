// NODE MODULES
import { useContext } from "react";

// CONTEXT
import { SnackbarContext } from "../contexts/SnackbarContext";

export const useSnackbar = () => useContext(SnackbarContext);