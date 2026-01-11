import {memo} from "react"; //PureComponent cho Function Component

const HomePage = () => {
    return <h1>HomePage</h1>;
};

export default memo(HomePage); //tránh render lại khi props không thay đổi