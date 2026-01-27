import {memo, useState} from "react"; //PureComponent cho Function Component
import { Link } from "react-router-dom"; //Dùng để điều hướng trong SPA (không reload trang)
import "./style.scss";  //import các thuộc tích của scss


import { FaFacebookF } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import banmyLogo from "/banmyShop/fe/banmyshop/src/assets/users/banmyLogo.png";

const Footer = () => {
    return (
    <div>
        <div class="line"></div>
        <footer className = "footer">
            <div className = "container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer_about">
                            <div className="logo_img">
                                <img src = {banmyLogo} alt = "banmy" className = "logo"></img>
                            </div>
                            <ul>
                                <li>Địa chỉ: 65 Hàng Bún, Ba Đình</li>
                                <li>Phone: 0838364678</li>
                                <li>Email: dotunglam2k5@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer_widget">
                            <h6>Cửa Hàng</h6>
                            <ul>
                                <li>
                                    <Link to = "">Blog</Link>
                                </li>
                                <li>
                                    <Link to = "">Tuyển dụng</Link>
                                </li>
                                <li>
                                    <Link to = "">Chính sách</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to = "">Giỏ hàng</Link>
                                </li>
                                <li>
                                    <Link to = "">Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link to = "">Thông tin về chúng tôi</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="footer_widget">
                            <h6>Khuyến Mãi Và Ưu Đãi</h6>
                            <p>Đăng ký nhận thông tin tại đây</p>
                            <form action = "#">
                                <div className="input_group">
                                    <input type="text" placeholder="Nhập email"/>
                                    <button type="Summit" className="button-summit">
                                        Đăng ký
                                    </button>
                                </div>
                                <div className="footer_widget_social">
                                    <div><FaFacebookF /></div>
                                    <div><FaSquareInstagram /></div>
                                    <div><FaSnapchatSquare /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default memo(Footer); //tránh render lại khi props không thay đổi