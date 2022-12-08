import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="app-content">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;