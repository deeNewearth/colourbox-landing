import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { useState } from 'react';
import PlayIcon from "../../assets/play.svg"
import styles from './ColourBoxLandingPage.module.css';

const features = [
    {
        imgUrl: "/img/icons/folder.png",
        title: "Create a project",
        description: "Sell fans exclusive access to services, content, merchandise, events, and community."
    },
    {
        imgUrl: "/img/icons/qrcode.png",
        title: "Generate a link/QR code",
        description: "Fans can easily scan your QR code or click a link (in your social media bio) to purchase your project. No app download required."
    },
    {
        imgUrl: "/img/icons/coins-send.png",
        title: "Receive your payment",
        description: "Have the money you earned in your account the same day."
    }
]
export default function ColourBoxLandingPage(): JSX.Element {
    return (

        <div className={styles.container_landing_page}>

            <div className="text--center">
                <div style={{ margin: "2rem 0px" }}>
                    <h1>Tools for the creator economy.</h1>
                    <h4>We build solutions that help improve the lives of creators.</h4>
                    <div className="videoContainer">
                        <PlayIcon className="playIcon centerImg" />
                    </div>

                    <h1 style={{ margin: "3rem 0px" }}>How it works</h1>
                    {features.map((feat, i) => (
                        <div className={styles.card} key={i}>
                            <img src={feat.imgUrl} />
                            <h3>{feat.title}</h3>
                            <p>{feat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}