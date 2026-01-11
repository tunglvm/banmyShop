import {memo} from "react"; //PureComponent cho Function Component

const Footer = () => {
    return <h1>Footer</h1>;
};

export default memo(Footer); //tránh render lại khi props không thay đổi