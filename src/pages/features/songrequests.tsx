import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useState } from 'react'
import PlayIcon from "../../assets/play.svg"
import { ProReason, WhyUs } from '@site/src/components/whyUs/whyUs';
import Link from '@docusaurus/Link';
import InfoModal from '@site/src/components/infoModal/infoModal';

const proReasons: ProReason[] = [
    {
        title: "Easy setup & easy execution",
        description: "From sign up to setup there is literally only a few clicks and a few fields of information that need to be entered. Once your event is live, you will receive SMS notifications when a song request is received so you can operate hands free."
    },
    {
        title: "Easy access for fans",
        description: "All fans have to do to submit a song request is click your link/scan your QR code, double tap to pay (if they have apple pay/google pay), type in their song, and submit. It’s that simple."
    },
    {
        title: "Exclusivity",
        description: "We understand that it’s unrealistic to allow everyone at an event to request a song. That is why you can set a specific amount of song requests that can be sold at your preffered price point."
    },
    {
        title: "Resellability",
        description: "Since song requests will be limited, fans can resell to other fans if they haven’t used the song request (before the event ends). The best part is you earn a cut from the resales."
    },
    {
        title: "Easy cashout",
        description: "Cashout the money you earned from song requests the same day."
    }
]
const SongRequests = () => {
    const { siteConfig } = useDocusaurusContext();
    const [showPricingModal, setShowPricingModal] = useState(false);
    return (
        <Layout
            title={`${siteConfig.title} DeCentral`}
            description="decentralized music streaming with NFTs">
            <div className="text--center" style={{ margin: "2rem auto ", maxWidth: "800px", textAlign: "center" }}>
                <h1>Song request access</h1>
                <h4>Allow fans to easily buy access to request a song.</h4>
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
                            If your project is resold, creators keep 10% of the project resale and we keep 5%. The reseller keeps 85%.
                            (<Link to="/">Learn how resales work</Link>)
                        </li>
                    </ul>
                </>
            } />}
        </Layout>
    )
}

export default SongRequests