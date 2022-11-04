import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react'
import PlayIcon from "../../assets/play.svg"
import { ProReason, WhyUs } from '@site/src/components/whyUs/whyUs';
import Link from '@docusaurus/Link';

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
        description: "We understand that it’s unrealistic to allow everyone at an event request a song. That is why you can set a specific amount of song requests that can be sold at your preffered price point."
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
    return (
        <Layout
            title={`${siteConfig.title} DeCentral`}
            description="decentralized music streaming with NFTs">
            <div className="text--center" style={{ margin: "2rem auto ", maxWidth: "800px", textAlign: "center" }}>
                <h1>Song request access</h1>
                <h4>Allow fans to easily buy access to request a song.</h4>
                <div className="videoContainer">
                    <PlayIcon className="playIcon centerImg" />
                </div>
                <div style={{ margin: "2rem 0px" }}>
                    <Link to="/" className="startButton">Get Started</Link>
                    <div>
                        <Link to="/" className="moreInfo">View Pricing</Link>
                    </div>
                </div>
                <WhyUs reasons={proReasons} />
            </div>
        </Layout>
    )
}

export default SongRequests