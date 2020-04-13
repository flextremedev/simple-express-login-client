import React, { useEffect, useState } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { useAuth } from "../auth/useAuth";
type ProtectedRouteProps = RouteComponentProps & {
    component: React.ComponentType;
};
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
    const [authenticatingDone, setAuthenticatingDone] = useState(false);
    const { isAuthenticated } = useAuth();
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const isAuth = async () => {
            setAuthenticatingDone(false);
            const result = await isAuthenticated();
            setAuthenticated(result);
            setAuthenticatingDone(true);
        };
        isAuth();
    }, [isAuthenticated]);
    if (!authenticatingDone) {
        return <div>Authenticating...</div>;
    }
    return authenticatingDone && authenticated ? <Component {...rest} /> : <Redirect from="" to="/login" noThrow />;
};
