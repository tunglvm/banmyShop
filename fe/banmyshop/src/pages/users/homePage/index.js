import {memo} from "react"; //PureComponent cho Function Component

const HomePage = () => {
    return (
        <>
            <h1>Header</h1>
            <h1>Body</h1>
            <h1>Footer</h1>
        </>
    );
};

export default memo(HomePage); //tránh render lại khi props không thay đổi