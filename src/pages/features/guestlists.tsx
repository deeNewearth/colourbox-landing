import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ProReason, WhyUs } from '@site/src/components/whyUs/whyUs';
import Layout from '@theme/Layout';
import React from 'react'
import PlayIcon from "../../assets/play.svg"

const proReasons: ProReason[] = [
    {
        title: "Subscription or one-time purchase",
        description: "You can allow a limited amount of people to subscribe and pay a monthly fee to have access to your guest list. Or you can allow people to pay a one-time fee per event."
    },
    {
        title: "Easy setup & management",
        description: "Signing up and setting up an event is just a few clicks. Once you setup the event you can customize what information you require from your guests, how many you want to allow, and even set a cut off time for purchases so fans don’t buy access to the guest list an hour before the event starts."
    },
    {
        title: "Easy confirmation",
        description: "You can confirm attendees by scanning a QR code on their phone, setting a unique image that only they have access to that you will require them to show in order to enter, or put their names on a list."
    },
    {
        title: "Resellability",
        description: "Since guest list access will be limited, fans can resell to other fans before the event starts. The best part is you earn a cut from the resales. Watch how high your guest list access resells for!"
    },
    {
        title: "Easy cashout",
        description: "Cashout the money you earned from guest list access the same day."
    }
]

export const Guestlists = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} DeCentral`}
            description="decentralized music streaming with NFTs">
            <div className="text--center" style={{ margin: "2rem auto ", maxWidth: "800px", textAlign: "center" }}>
                <h1>Guest list access</h1>
                <h4>Allow fans to easily buy access to your guest list.</h4>
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
export default Guestlists;