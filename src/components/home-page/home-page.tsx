import classNames from 'classnames';
import styles from './home-page.module.scss';

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>Night Trips</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                    Discover a World Beyond the Ordinary with Night Trips
                </div>
                <div className={styles.text}>
                    Welcome to NightTrips, your ultimate guide to unforgettable nighttime
                    adventures! Whether you&apos;re seeking the thrill of vibrant city nightlife,
                    the serenity of starlit landscapes, or the excitement of nocturnal wildlife
                    experiences, NightTrips has you covered.
                </div>
            </div>
            <a href="#Pick-trip" className={classNames(styles.a1, styles.a1)}>
                <button className={styles.button}>Discover Your Next Trip</button>
            </a>
        </div>
    );
};
