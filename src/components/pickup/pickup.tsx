import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import styles from './pickup.module.scss';
import ChilllastonePng from '../../assets/chilllastone.png';
import SpookyImagePng from '../../assets/spooky image.png';
import { Link } from 'react-router-dom';

const Pickup = () => {
  return (
    <div id="Pick-trip" className={styles.bigdiv}>
        <div className={styles.wrapper}>
                <h1 className={styles.header1}>Pick Your Trips </h1>
                <p className={styles.para}>
                    Our team put together some trips to you to discover, feel free to discover each
                    of them.
                </p>
            </div>

      <Tabs defaultActiveKey="chill" id="uncontrolled-tab-example" className={styles.omg}>

        <Tab eventKey="chill" title="Chill Adventure">
            <div className={styles.div}>
            <img src={ChilllastonePng} className={styles.img} />
                <div className={styles.column}>
                    <h1 className={styles.header2}>Chill Adventure</h1>
                    <p className={styles.para}>
                        Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices
                        curabitur. Erat id fringilla arcu condimentum fames. Aliquet dictum aliquet
                        faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque
                        neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit.
                        Feugiat quis quam consectetur lectus id quis tortor vel, mattis.
                    </p>
                    <Link to="/chilladventure">
                    <button className={styles.btn}>SEE OUR LATEST OFFER</button>
                    </Link>
                    
                </div>
            </div>
        </Tab>

        <Tab eventKey="spooky" title="Spooky Times">
            <div className={styles.div}>
            <img src={SpookyImagePng} className={styles.img} />
                <div className={styles.column}>
                    <h1 className={styles.header2}>Spooky Times</h1>
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
        </Tab>

        <Tab eventKey="Desert" title="Desert Madness">
            <div className={styles.div}>
            <img src={ChilllastonePng} className={styles.img} />
                <div className={styles.column}>
                    <h1 className={styles.header2}>Desert Madness</h1>
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
        </Tab>

        <Tab eventKey="Out Of the Wild" title="Out Of the Wild">
            <div className={styles.div}>
            <img src={ChilllastonePng} className={styles.img} />
                <div className={styles.column}>
                    <h1 className={styles.header2}>Out Of the Wild</h1>
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
        </Tab>

      </Tabs>
    </div>
  );
};

export default Pickup;
