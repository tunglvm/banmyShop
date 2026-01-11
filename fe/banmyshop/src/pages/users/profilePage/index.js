import {memo} from "react"; //PureComponent cho Function Component

const ProfilePage = () => {
    return <h1>ProfilePage</h1>;
};

export default memo(ProfilePage); //tránh render lại khi props không thay đổi