import {memo} from "react"; //PureComponent cho Function Component
import "./style.scss";  //import các thuộc tích của scss
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { TbBrandShopee } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <>
            <div className = "header-top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header-top-left">
                        <span className="left-text">Holine: 0838364678</span>
                    </div>
                    <div className="col-6 header-top-right">
                        <ul>
                            <li className="icon">
                                <a href = "">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li className="icon">
                                <a href = "">
                                    <GrInstagram />
                                </a>
                            </li>
                            <li id="shopeeicon">
                                <a href = "">
                                     <TbBrandShopee />
                                </a>
                            </li>
                            <ul>
                                <li id="loginicon" >
                                    <a href = "">
                                        <CgProfile />
                                    </a>
                                </li>
                                <li id="text">
                                    <a href = "">
                                        <span >Login</span>
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            </div>
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-3">
                        Logo
                    </div>
                </div>
            </div>
        </>
        
    );
        
};

export default memo(Header); //tránh render lại khi props không thay đổi