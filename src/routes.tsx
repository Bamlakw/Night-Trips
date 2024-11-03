import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { HomePage } from './components/home-page/home-page';
import { AboutUs } from './components/about-us/about-us';
import ErrorPage from './components/error/error';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'aboutus', element: <AboutUs /> },

        ],
        errorElement: <ErrorPage />,
    },
];

