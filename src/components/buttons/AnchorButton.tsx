import { Link } from "react-router-dom";

function AnchorButton({children, link}: {children: string, link: string}) {
    return (
        <Link className='btn comman-btn' to={link}>{children}</Link>
    );
}

export default AnchorButton;