import {memo} from "react"; //PureComponent cho Function Component
import "./style.scss";

const Header = () => {
    return (
        <div className = "header-top">
            <div className="container" >Header</div>;
        </div>
    );
        
};

export default memo(Header); //tránh render lại khi props không thay đổi