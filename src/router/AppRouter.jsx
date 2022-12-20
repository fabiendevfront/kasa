import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Lodging from "../pages/Lodging";
import Error404 from "../pages/Error404";

/**
 * The AppRouter function returns a Routes component that contains a Route component for each page of
 * the app.
 * @returns The return statement is returning a Routes component with a Route component nested inside.
 */
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lodging/:id" element={<Lodging />} />
            {/* path="*" if the path does not correspond to any route declared above */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRouter;