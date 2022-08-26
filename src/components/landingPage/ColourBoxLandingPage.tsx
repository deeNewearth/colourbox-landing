import Link from '@docusaurus/Link';
import React from 'react';
import styles from './ColourBoxLandingPage.module.css';

export default function ColourBoxLandingPage(): JSX.Element {
    return(
        <>
            <div className={styles.container_landing_page}>
                <div className="text--center">
                    <h1>Connectivity through exclusivity.</h1>
                    <p>Colourbox makes it possible for supporters to buy exclusive access to their favorite creators content, 
                        merchandise, services, community, and events. Colourbox is the place where 
                        the super fan lives and thrives.</p>
                </div>

                <div className={styles.Flex}>
                    <Link
                        className="button button--defualt button--md button-rounded"
                        to="/blog/colourbox-litepaper"
                        style={{color: "white"}}
                        >
                        Learn more
                    </Link>
                    {/* <Link
                        className="button button--default button--md button-rounded"
                        to=""
                        style={{color: "white", backgroundImage: "linear-gradient(to right, #1BAFD0,#FD636B,#FFB900, #3BE8B0)"}}
                        >
                        Get Started
                    </Link> */}
                </div>

                <div className="text--center" style={{marginTop: '3rem'}}>
                    <h1>What makes us special?</h1>
                    <p>Unlike existing creator monetization platforms, with Colourbox supporters have true ownership of the 
                        exclusive access they buy from creators.This means that the fan can choose to resell their exclusive 
                        access if there is enough demand for it, much like artwork.</p>
                </div>

                <div className="text--center" style={{marginTop: '3rem'}}>
                    <h1>What is our mission?</h1>
                    <p>Our mission is to allow creators to earn a meaningful income directly from their fanbase and supporters 
                        in a way that is also beneficial for supporters. This is important because it allows the creator to 
                        freely make the content they want to make and not have to worry about the opinions of a 3rd party.
                        It also creates more incentive for the supporter to grow with their favorite creator and stick with 
                        them through the journey.</p>
                </div>
            </div>
        </>
    )
}