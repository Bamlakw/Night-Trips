import classNames from 'classnames';
import styles from './scrollable.module.scss';

export interface ScrollableProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Scrollable = ({ className }: ScrollableProps) => {
    return (
        <div className={styles['iphone-frame']}>
            <div>
                <div>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div />
            <div />
        </div>
    );
};