import {memo} from "react"; //PureComponent cho Function Component
import Header from "../header";
import Footer from "../footer";


const MasterLayout = ({ children, ...props}) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout); //tránh render lại khi props không thay đổi