import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import InfoModal from '@site/src/components/infoModal/infoModal';
import { ProReason, WhyUs } from '@site/src/components/whyUs/whyUs';
import Layout from '@theme/Layout';
import React, { useState } from 'react'
import PlayIcon from "../../assets/play.svg"

const proReasons: ProReason[] = [
    {
        title: "Exclusivity",
        description: "It’s impossible to allow everyone to get access to your guest list. That is why we allow you to set a specific amount that you want to sell at your preffered price point."
    },
    {
        title: "Easy setup & management",
        description: "Signing up and setting up an event is just a few clicks. Once you setup the event, quantity of guests, and price you can text the bouncers/check in people a virtual list of who is on your guest list. That way there is no extra steps needed on the clubs end to confirm your guests."
    },
    {
        title: "Easy confirmation",
        description: "Confirmation for guests to get into an event is simple. After they purchase their access they will submit their full name, and when they arrive at the event they will tell the security their full name and they’re in. It’s that easy!"
    },
    {
        title: "Resellability",
        description: "Since guest list access will be limited, fans can resell to other fans before the event starts. The best part is you earn a cut from the resales. Watch how high your guest list access resells for!"
    },
    {
        title: "Easy cashout",
        description: "Cashout the money you earned from selling guest list access the same week."
    }
]

export const Guestlists = () => {
    const { siteConfig } = useDocusaurusContext();
    const [showPricingModal, setShowPricingModal] = useState(false);
    return (
        <Layout
            title={`${siteConfig.title} DeCentral`}
            description="decentralized music streaming with NFTs">
            <div className="text--center" style={{ margin: "2rem auto ", maxWidth: "800px", textAlign: "center" }}>
                <h1>Guest list access</h1>
                <h4>Allow fans to easily buy access to your guest list.</h4>
                {/* <div className="videoContainer">
                    <PlayIcon className="playIcon centerImg" />
                </div> */}
                <div style={{ margin: "2rem 0px" }}>
                    <Link to="/" className="startButton">Get Started</Link>
                    <div>
                        <p onClick={() => setShowPricingModal(true)} className="moreInfo">View Pricing</p>
                    </div>
                </div>
                <WhyUs reasons={proReasons} />
            </div>
            {showPricingModal && <InfoModal title="Free to try!" onClose={() => setShowPricingModal(false)} content={
                <>
                    <h3>We win when you win.</h3>
                    <ul>
                        <li>
                            We take 15% of your project sales and you keep the rest! No subscriptions or upfront fees needed to get started.
                        </li>
                        <li>
                            If your project is resold, creators keep 10% of the project resale and we keep 5%. The reseller keeps 85%. (<Link to="/">Learn how resales work</Link>)
                        </li>
                    </ul>
                </>
            } />}
        </Layout>
    )
}
export default Guestlists;