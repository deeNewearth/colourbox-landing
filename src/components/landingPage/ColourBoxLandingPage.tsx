import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { useState } from 'react';
import useMediaQuery from "../../utils/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import PlayIcon from "../../assets/play.svg";
import { EffectFlip, Pagination, Navigation } from "swiper";
import styles from './ColourBoxLandingPage.module.css';
const offeredServices = [
    {
        title: "Song request access",
        desc: "Make it easy for fans to buy the exclusive access to request songs from you",
        img: "/img/people.png",
        link: "/",
        avalaible: false,
        variant: styles.alertBtn
    },
    {
        title: "Guest list access",
        desc: "Make it easy for fans to buy the exclusive access to be on your guest list.",
        img: "/img/people.png",
        link: "/",
        avalaible: true,
        variant: styles.warningBtn
    }
]
export default function ColourBoxLandingPage(): JSX.Element {
    const [kind, selectKind] = useState<string>();
    const showMobSlide = useMediaQuery('(max-width: 768px)')
    const renderServices = () => {
        return offeredServices.map(offService => (
            <div className={clsx(styles.Flex, styles.container)}>
                <div style={{ position: "relative", width: "100%" }}>
                    <img src={offService.img} alt=""
                        className={styles.imgCard}
                        style={{ maxWidth: "400px", opacity: offService.avalaible ? "100%" : "50%" }}
                    />
                    {!offService.avalaible ? (
                        <h3 className={styles.centerImg}>
                            FEATURE COMING SOON
                        </h3>
                    ) : (
                        <div className={styles.centerImg}>
                            <PlayIcon className={styles.roundFillIcon} />
                        </div>
                    )}
                </div>

                <div className="text--center" style={{ marginTop: '3rem' }}>
                    <h1><u>{offService.title}</u></h1>
                    <p>{offService.desc}</p>
                    <Link to="/" className={clsx(styles.button, offService.variant)}>Learn more</Link>
                </div>
            </div>
        ))
    }
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
                {kind === "dj" && (
                    <>
                        <div className="text--center">
                            <h1>
                                Services we offer
                            </h1>
                        </div>
                        {showMobSlide ? (
                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {offeredServices.map(offService => (
                                    <SwiperSlide>
                                        <div className={clsx(styles.Flex, styles.container)}>
                                            <div style={{ position: "relative", width: "100%" }}>
                                                <img src={offService.img} alt=""
                                                    className={styles.imgCard}
                                                    style={{ maxWidth: "400px", opacity: offService.avalaible ? "100%" : "50%" }}
                                                />
                                                {!offService.avalaible ? (
                                                    <h3 className={styles.centerImg}>
                                                        FEATURE COMING SOON
                                                    </h3>
                                                ) : (
                                                    <div className={styles.centerImg}>
                                                        <PlayIcon className={styles.roundFillIcon} />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="text--center" style={{ marginTop: '3rem' }}>
                                                <h1><u>{offService.title}</u></h1>
                                                <p>{offService.desc}</p>
                                                <Link to="/" className={clsx(styles.button, offService.variant)}>Learn more</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>))}
                            </Swiper>
                        )
                            : offeredServices.map(offService => (
                                <div className={clsx(styles.Flex, styles.container)}>
                                    <div style={{ position: "relative", width: "100%" }}>
                                        <img src={offService.img} alt=""
                                            className={styles.imgCard}
                                            style={{ maxWidth: "400px", opacity: offService.avalaible ? "100%" : "50%" }}
                                        />
                                        {!offService.avalaible ? (
                                            <h3 className={styles.centerImg}>
                                                FEATURE COMING SOON
                                            </h3>
                                        ) : (
                                            <div className={styles.centerImg}>
                                                <PlayIcon className={styles.roundFillIcon} />
                                            </div>
                                        )}
                                    </div>

                                    <div className="text--center" style={{ marginTop: '3rem' }}>
                                        <h1><u>{offService.title}</u></h1>
                                        <p>{offService.desc}</p>
                                        <Link to="/" className={clsx(styles.button, offService.variant)}>Learn more</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
                }
            </div>
        </>)
}