import React from 'react'
import Link from '@docusaurus/Link';
import PlayOutlined from "../../assets/play-outlined.svg"
export type ProReason = {
    title: string;
    description: string;
    showcaseLink?: string;
}
export const WhyUs = ({ reasons }: { reasons: ProReason[] }) => {
    return (
        <div style={{ margin: "4rem 0px" }}>
            <h1>
                Why Colourbox is better
            </h1>
            {reasons.map((reason, i) => (
                <div style={{ margin: "3rem auto", maxWidth: "650px", }}>
                    <h2>{reason.title}</h2>
                    <p>{reason.description}</p>
                    <Link className="button" style={{ display: "flex", margin: "auto", padding: "6px 2rem" }} to={reason.showcaseLink ?? "/"}>
                        <PlayOutlined />
                        <span style={{ margin: "auto 0.4rem" }}>View Example</span>
                    </Link>
                </div>
            ))}
        </div>
    )
}
