import classNames from 'classnames';
import styles from './type-face.module.scss';
import ChilladventureImagePng from '../../assets/chilladventure image.png';
import SpookyImagePng from '../../assets/spooky image.png';

export interface TypeFaceProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TypeFace = ({ className }: TypeFaceProps) => {
    return (
        <div className={styles.bigdiv}>
            <div className={styles.wrapper}>
                <h1 className={styles.header1}>Pick Your Trips </h1>
                <p className={styles.para}>
                    Our team put together some trips to you to discover, feel free to discover each
                    of them.
                </p>
            </div>
            <div className={styles.div}>
                <img src={SpookyImagePng} className={styles.img} />
                <div className={styles.column}>
                    <h1 className={styles.header2}>Chill Adventure</h1>
                    <p className={styles.para}>
                        Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices
                        curabitur. Erat id fringilla arcu condimentum fames. Aliquet dictum aliquet
                        faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque
                        neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit.
                        Feugiat quis quam consectetur lectus id quis tortor vel, mattis.
                    </p>
                    <button className={styles.btn}>SEE OUR LATEST OFFER</button>
                </div>
            </div>
        </div>
    );
};
