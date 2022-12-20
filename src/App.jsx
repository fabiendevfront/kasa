import AppRouter from "./router/AppRouter";
import Layout from "./layout/Layout";

/**
 * The App function returns a div with a className of app, which contains a Layout component, which
 * contains an AppRouter component.
 * @returns A function that returns a div with a Layout component and an AppRouter component.
 */
const App = () => {
    return (
        <div className="app">
            <Layout>
                <AppRouter />
            </Layout>
        </div>
    );
};

export default App;
