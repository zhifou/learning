import { VFC, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Welcome = lazy(() => import("@/modules/Welcome"));
const Babylon = lazy(() => import("@/modules/Babylon"));

const App: VFC = () => {
    return (
        <Suspense fallback={null}>
            <Switch>
                <Route path="/welcome" component={Welcome} />
                <Route path="/babylon" component={Babylon} />
                <Redirect to="/welcome" />
            </Switch>
        </Suspense>
    );
};

export default App;
