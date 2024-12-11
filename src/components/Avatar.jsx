// NODE MODULES
import PropTypes from "prop-types";

// CUSTOM MODULES
import { avatars } from "../lib/appwrite";

const Avatar = ({name}) => {
    return (
        <figure className="avatar">
            <img 
                src={avatars.getInitials(name, 48, 48)}
                alt={name} 
                width={48}
                height={48}
            />
        </figure>
    )
}

Avatar.propTypes = {
    name: PropTypes.string
}

export default Avatar