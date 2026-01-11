import {memo} from "react"; //PureComponent cho Function Component

const Header = () => {
    return <h1>Header</h1>;
};

export default memo(Header); //tránh render lại khi props không thay đổi