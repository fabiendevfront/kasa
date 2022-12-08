import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Lodging from "../pages/Lodging";
import Error404 from "../pages/Error404";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/lodgings/:id" element={<Lodging />} />
                    {/* path="*" si le path ne correspond à aucune route déclarée ci-dessus */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;