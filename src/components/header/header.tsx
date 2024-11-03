import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/" className={styles.link}>
                NT
            </a>
            <div className={styles.menu}>
                <a href="#about-us">
                    <button className={styles.btn}>About Us</button>
                </a>
            </div>
        </div>
    );
};
