import classNames from 'classnames';
import styles from './about-us.module.scss';
import AboutusPng from '../../assets/aboutus.png';

export interface AboutUsProps {
    className?: string;
}

export const AboutUs = ({ className }: AboutUsProps) => {
    return (
        <div id="about-us" className={styles.div1}>
            <div className={styles.div3}>
                <div className={styles.div2}>
                    <h1 className={classNames(styles.header1)}>About Us</h1>
                    <div className={styles.div5}>
                        <p className={styles.p2}>We’re a team of four passioned people. </p>
                        <p className={styles.p3}>
                            We’re ready to take the world by storm and let you find new travel
                            opportunities.{' '}
                        </p>
                        <p className={styles.p1}>
                            Our everyday task is to make sure that you satisfied with the services
                            and products that we provide.{' '}
                        </p>
                        <p>With 💖 from Amsterdam, Netherlands.</p>
                    </div>
                    <button className={styles.btn}>Read More About Us</button>
                </div>
                <div className={styles.div8}>
                    <img src={AboutusPng} alt="" className={classNames(styles.img1, styles.img1)} />
                </div>
            </div>
        </div>
    );
};
