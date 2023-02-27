//makes the logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
const Logo = () => {
    return(
        <div className="logo">
            FCC <FontAwesomeIcon icon={ faFreeCodeCamp } Style="italic" />
        </div>
    );
}
export default Logo;