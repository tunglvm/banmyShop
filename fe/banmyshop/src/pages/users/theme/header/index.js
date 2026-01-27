import {memo, useState} from "react"; //PureComponent cho Function Component
import { Link } from "react-router-dom"; //Dùng để điều hướng trong SPA (không reload trang)
import { formatter } from "/banmyShop/fe/banmyshop/src/utils/formatter";
import { ROUTER } from "/banmyShop/fe/banmyshop/src/utils/router";
import "./style.scss";  //import các thuộc tích của scss

import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { TbBrandShopee } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

import logo3 from "/banmyShop/fe/banmyshop/src/assets/users/logo3.png";


const Header = () => {

    //danh sách menu / menu state
    //map các đường dẫn để gắn với thẻ Link 
    const [menus, setMenu] = useState([
        {
            name: "Trang chủ",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Khuyến mãi",
            path: ROUTER.USER.PRODUCTS,
        },
        {
            name: "Thực đơn",
            path: "",
            isShowSubMenu: false,
            child: [ //chứa các thành phần cho menu phụ drop
                {
                name: "Bánh mì",
                path: ROUTER.USER.PRODUCTS,
                },
                {
                name: "Đồ uống",
                path: ROUTER.USER.PRODUCTS,
                },
                {
                name: "Món ăn kèm",
                path: ROUTER.USER.PRODUCTS,
                },
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ]);

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
                    <div className = "col-xl-3" >
                        <div >
                            <img src = {logo3} alt = "banmy" className = "logo"></img>
                        </div>
                        
                    </div >
                    <div className = "col-xl-6">
                        <nav className = "header_menu">
                            <ul> 
                                {   // ?. là optional chaining =>> tránh lỗi undefined/null
                                    menus?.map((menu, menuKey) => (
                                            <li key={menuKey} className = {menuKey === 0 ? "active" : ""}>
                                                <Link to = {menu?.path}>
                                                    {menu?.name}
                                                </Link>
                                                {
                                                    menu.child && (
                                                        <ul className="header-menu-drop">
                                                            {
                                                                menu.child.map((childItem, childKey) => (
                                                                    <li key={`$(menuKey - $(childKey)`}>
                                                                        <Link to = {childItem.path}>{childItem.name}</Link>
                                                                    </li>
                                                                ))
                                                            }
                                                            
                                                        </ul>
                                                    )
                                                }
                                            </li>
                                    ))
                                }
                                
                            </ul>
                        </nav>
                    </div>
                    <div className = "col-xl-3">
                        <div className = "header_cart">
                            <div className = "header_cart_price">
                                <span>{formatter(1234456)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to = "#">
                                        <FaCartShopping />
                                        <span>6</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
        
};

export default memo(Header); //tránh render lại khi props không thay đổi