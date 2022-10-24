import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './ColourBoxLandingPage.module.css';

export default function ColourBoxLandingPage(): JSX.Element {
    const [kind, selectKind] = useState<string>();
    return (
        <>
            <div className={styles.container_landing_page}>
                <div className="text--center">
                    <div style={{ margin: "2rem 0px" }}>
                        <h2>What kind of creator are you?</h2>
                        <div className={styles.Flex}>
                            <h3>I am a</h3>
                            <select className={styles.select} onChange={(e) => selectKind(e.target.value)}>
                                <option></option>
                                <option value="dj">DJ</option>
                            </select>
                        </div>
                    </div>

                </div>

                {kind && (
                    <>
                        <div className="text--center">
                            <h1>
                                Services we offer
                            </h1>
                        </div>
                        <div className={clsx(styles.Flex, styles.container)}>
                            <img src="/img/people.png" style={{ maxWidth: "400px" }} />

                            <div className="text--center" style={{ marginTop: '3rem' }}>
                                <h1><u>Song request access</u></h1>
                                <p>Make it easy for fans to buy the exclusive access to request songs from you.</p>
                                <Link to="/" className={clsx(styles.button, styles.alertBtn)}>Learn more</Link>
                            </div>
                        </div>
                        <div className={clsx(styles.Flex, styles.container)}>
                            <img src="/img/people.png" style={{ maxWidth: "400px" }} />

                            <div className="text--center" style={{ marginTop: '3rem' }}>
                                <h1><u>Guest list access</u></h1>
                                <p>Make it easy for fans to buy the exclusive access to be on your guest list.</p>
                                <Link to="/" className={clsx(styles.button, styles.warningBtn)}>Learn more</Link>
                            </div>
                        </div></>
                )}
            </div>
        </>
    )
}