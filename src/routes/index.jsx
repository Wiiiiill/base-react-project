import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const lazyLoad = (moduleName) => {
    const Module = lazy(() => {
        return import(`../pages/${moduleName}.jsx`)
    })
    return <Suspense><Module BB={Math.random()} /></Suspense>
}
const Appraisal = ({ children }) => {
    console.log('children', children)
    const token = localStorage.getItem('token')
    return token ? children : <Navigate to="/login" />;
}
export default [
    { path: "/login", element: lazyLoad("Login") },
    { path: "/about", element: <Appraisal>{lazyLoad("About")}</Appraisal> },
    {
        path: "/home",
        element: <Appraisal>{lazyLoad("Home")}</Appraisal>,
        children: [
            { path: "news", element: lazyLoad("News") },
            { path: "message", element: lazyLoad("Message"), children: [{ path: "detail", element: lazyLoad("Detail") }] },
        ],
    },
    { path: "/", element: <Navigate to="/login" /> },
];
