import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRouts, publicRouts } from "../routs/routs";
import { AuthContext } from "../context/context";

function AppRouter() {
    const { isAuth } = useContext(AuthContext);
    return (
        isAuth
            ?
            <Routes>
                {privateRouts.map(route =>
                    <Route key={route.path}
                        path={route.path}
                        element={route.component}
                    />
                )}
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
            :
            <Routes>
                {publicRouts.map(route =>
                    <Route key={route.path}
                        path={route.path}
                        element={route.component}
                    />
                )}
                <Route path="*" element={<Navigate to={'/login'} />} />
            </Routes>
    )
}

export default AppRouter