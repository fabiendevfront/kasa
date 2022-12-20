import Header from "./Header";
import Footer from "./Footer";

/**
 * The Layout component
 * @param {React.ReactNode} [props.children]
 * @returns A React component
 */
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;