import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTER } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";

const renderUserRouter = () => {
    const userRouter = [ //mảng các phần tử
        {
            path: ROUTER.USER.HOME, // gọi trong "./utils/router"
            component: <HomePage />
        },
        {
            path: ROUTER.USER.PROFILE, // gọi trong "./utils/router"
            component: <ProfilePage />
        },
    ]

    return(
        <MasterLayout>
            <Routes>
                {
                    //Dùng map để lặp lại từng phần tử trong mảng 'userRouter'
                    //ClipboardItem = 1 object route bao gồm path và component
                    //key dùng để tối ưu render
                    userRouter.map((ClipboardItem, key) => ( 
                        <Route key = {key} path = {ClipboardItem.path} element = {ClipboardItem.component} />
                    ))
                }
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;