import AppRouter from "./router/AppRouter";
import Layout from "./layout/Layout";

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
