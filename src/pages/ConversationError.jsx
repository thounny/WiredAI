// NODE MODULES
import { useRouteError, Link } from "react-router-dom";

const ConversationError = () => {
    // RETRIEVE ERROR FROM CUSTOM HOOK
    const error = useRouteError();

  return (
    <div className="grid grid-cols-1 justify-items-center content-center h-full">
        <p className="text-displayMedium font-semibold">
            {error.code}
        </p>

        <p className="text-light-onSurface dark:text-dark-onSurfaceVariant
        mt-2 mb-4">
            {error.message}
        </p>

        <Link
         className="btn filled primary"
         to="/">
        Create new chat
            <div className="state-layer"></div>
        </Link>
    </div>
  ); 
}

export default ConversationError