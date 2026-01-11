import {memo} from "react"; //PureComponent cho Function Component
import "./style.scss";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { TbBrandShopee } from "react-icons/tb";

const Header = () => {
    return (
        <div className = "header-top">
            <div className="container">
                <div className="row">
                    <div className="col-6">Left</div>
                    <div className="col-6 header-top-right">
                        <ul>
                            <li className="icon"> <FaFacebookF /> </li>
                            <li className="icon"> <GrInstagram /> </li>
                            <li className="icon"> <TbBrandShopee /> </li>
                        </ul>
                    </div>
                </div>
            </div>;
        </div>
    );
        
};

export default memo(Header); //tránh render lại khi props không thay đổi