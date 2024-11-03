import classNames from 'classnames';
import styles from './site-wrapper.module.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Outlet, useLocation } from 'react-router-dom';
import { AboutUs } from '../about-us/about-us';
import { Testimonial } from '../testimonial/testimonial';
import Pickup from '../pickup/pickup';

export interface SiteWrapperProps {
    className?: string;
}

export const SiteWrapper = ({ className }: SiteWrapperProps) => {

    return (
        <div className={classNames(styles.root)}>
            <div className={styles.heroContainer}>
                <Header />
                <div className={styles.pageContent}>
                    <Outlet />
                </div> 
            </div>
            <Pickup />
            <AboutUs />
            <Testimonial />
            <Footer />
        </div>
    );
};
