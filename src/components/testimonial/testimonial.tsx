import classNames from 'classnames';
import styles from './testimonial.module.scss';
import MaskGroupPng from '../../assets/mask group.png';

export interface TestimonialProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Testimonial = ({ className }: TestimonialProps) => {
    return (
        <div>
            <div className={styles.div1}>
                <h1 className={styles.header1}>People’s thoughts</h1>
                <p className={styles.p1}>SEE WHAT ARE OTHERS SAYING</p>
                <div className={styles.testimonialsContainer}>
                    <div className={styles.testimonialBox}>
                        <div className={styles.div5}>
                            Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl
                            adipiscing natoque diam et. Cum posuere in velit massa sagittis augue
                            egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi.
                            Maecenas lobortis tristique rutrum.
                        </div>
                        <div className={styles.div4}>
                            <img src={MaskGroupPng} alt="" className={styles.img1} />
                            <h1 className={styles.header2}>Judy ROSELESS MARKETING HEAD at ROM.</h1>
                        </div>
                    </div>
                    <div className={styles.testimonialBox}>
                        <div className={styles.div5}>
                            Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl
                            adipiscing natoque diam et. Cum posuere in velit massa sagittis augue
                            egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi.
                            Maecenas lobortis tristique rutrum.
                        </div>
                        <div className={styles.div4}>
                            <img src={MaskGroupPng} alt="" className={styles.img1} />
                            <h1 className={styles.header2}>Judy ROSELESS MARKETING HEAD at ROM.</h1>
                        </div>
                    </div>
                    <div className={styles.testimonialBox}>
                        <div className={styles.div5}>
                            Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl
                            adipiscing natoque diam et. Cum posuere in velit massa sagittis augue
                            egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi.
                            Maecenas lobortis tristique rutrum.
                        </div>
                        <div className={styles.div4}>
                            <img src={MaskGroupPng} alt="" className={styles.img1} />
                            <h1 className={styles.header2}>Judy ROSELESS MARKETING HEAD at ROM.</h1>
                        </div>
                    </div>
                    <div className={styles.testimonialBox}>
                        <div className={styles.div5}>
                            Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl
                            adipiscing natoque diam et. Cum posuere in velit massa sagittis augue
                            egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi.
                            Maecenas lobortis tristique rutrum.
                        </div>
                        <div className={styles.div4}>
                            <img src={MaskGroupPng} alt="" className={styles.img1} />
                            <h1 className={styles.header2}>Judy ROSELESS MARKETING HEAD at ROM.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
