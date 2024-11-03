import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const router = useMemo(() => createBrowserRouter(routes), []);

    return <RouterProvider router={router} />;
}

export default App;
