import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useEffect } from "react";

const BeforeEnter = ({ routers }) => {
    //1.在路由数组中找当前页面路由的对应路由项
    const fineRouter = (routes, path) => {
        for (let val of routers) {
            if (val.path === path) return val;
            if (val.children) return fineRouter(val.children, path);
        }
        return null;
    };

    //2.路由守卫判断
    const judgeRouter = (location, navigate) => {
        const { pathname } = location;
        //2.1路由数组找路由项
        const findRoute = fineRouter(routers, pathname);
        //2.2没找到，说明没有这个路由，直接404
        if (!findRoute) {
            navigate("/404");
            return;
        }
        //2.3路由项如果有权限需求，进行逻辑验证
        if (findRoute.auth) {
            //用户未登陆，挑战登陆页面
            if (!localStorage.getItem("user")) navigate("/login");
        }
    };

    //3.基于useEffect监听页面路由改变。然后组件重新加载，又重新校验权限。
    const navigate = useNavigate();
    const location = useLocation();
    const router = useRoutes(routers);

    useEffect(() => {
        //路由守卫判断
        judgeRouter(location, navigate);
    }, [navigate, location]);

    return router;
};

export default BeforeEnter;
