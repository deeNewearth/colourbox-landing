import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ColourBoxLandingPage from '../components/landingPage/ColourBoxLandingPage';
import Head from '@docusaurus/Head';
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { EffectFlip, Navigation, Pagination } from "swiper";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header style={{ background: "#101010" }}>
            <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img style={{ zIndex: 3 }} src="/img/dj-playing.png" />
                    <div className={styles.centerImg}>
                        <h1>
                            Song request access
                        </h1>
                        <p>Allow fans to easily buy song request access.</p>
                        <Link to="/" className={styles.button}>Learn more</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ zIndex: 3 }}>
                    <img style={{ zIndex: 3 }} src="/img/people.png" />
                    <div className={styles.centerImg}>
                        <h1>
                            Guest list access
                        </h1>
                        <p>Allow fans to buy/subscribe to get access to your guest list</p>
                        <Link to="/" className={styles.button}>Learn more</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const swiperSlide = useSwiperSlide();
    return (
        <Layout
            title={`${siteConfig.title} DeCentral`}
            description="decentralized music streaming with NFTs">
            <Head>
                <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=4373d697-5c9f-425e-a75a-b8c758154b53">
                </script>
            </Head>
            <HomepageHeader />
            <ColourBoxLandingPage />
            <div className={styles.box}>
                <div className={clsx(styles.wave)}></div>
                <div className={clsx(styles.wave, styles.waveTwo)}></div>
                <div className={clsx(styles.wave, styles.waveThree)}></div>
                <div className={clsx(styles.wave, styles.waveFour)}></div>
                <div className={clsx(styles.wave)}></div>
            </div>

        </Layout>
    );
}
