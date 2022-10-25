import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ColourBoxLandingPage from '../components/landingPage/ColourBoxLandingPage';
import ColourboxLargeLogo from "../assets/colourbox-lg.svg";
import Head from '@docusaurus/Head';
import { Swiper, SwiperSlide,useSwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-flip";
import {Mousewheel, EffectCreative} from "swiper";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>

      <div className="container" style={{ zIndex: 2 }}>
        <ColourboxLargeLogo />
        <h1>Empowering creators and their communities.</h1>
      </div>
      <div style={{ position: "absolute", marginTop: "-40vw" }}>
        <div className={styles.bubble} />
        <div className={styles.bubbleSmall} style={{ marginLeft: "36rem" }} />
        <div className={styles.bubbleReverse} style={{ marginTop: "26rem" }} />
        <div className={styles.bubbleSmallReverse} style={{ marginLeft: "16rem" }} />
      </div>

      <div style={{ marginLeft: "70vw", position: "absolute", marginTop: "-40vw" }}>
        <div className={styles.bubbleReverse} style={{ float: "right" }} />
        <div className={styles.bubbleReverse} style={{ float: "right", marginTop: "13rem", minWidth: "40rem", minHeight: "40rem" }} />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [isScrollableSlide,setIsScrollableSlide] = useState<boolean>();
  const swiperSlide = useSwiperSlide();
  return (
          <Layout
              title={`${siteConfig.title} DeCentral`}
              description="decentralized music streaming with NFTs">
              <Head>
                  <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=4373d697-5c9f-425e-a75a-b8c758154b53">
                  </script>
              </Head>
              <Swiper
                  effect={"creative"}
                  direction={"vertical"}
                  creativeEffect={{
                      prev: {
                          shadow: true,
                          translate: [0, 0, -400]
                      },
                      next: {
                          translate: ["100%", 0, 0]
                      }
              }}
                  
          mousewheel={true}
          modules={[EffectCreative, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomepageHeader />
        </SwiperSlide>
        <SwiperSlide>
          <ColourBoxLandingPage />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
}
