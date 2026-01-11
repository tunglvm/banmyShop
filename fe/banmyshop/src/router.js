import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTER } from "./utils/router";

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME, // gọi trong "./utils/router"
            component: <HomePage />
        },
    ]

    return(
        <Routes>
            {
                userRouter.map((ClipboardItem, key) => (
                    <Route key = {key} path = {ClipboardItem.path} element = {ClipboardItem.component} />
                ))
            }
        </Routes>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;