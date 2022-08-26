import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ColourBoxLandingPage from '../components/landingPage/ColourBoxLandingPage';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">Bringing power back to creators</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>

//         <div className={styles.buttons}>
        
          
//           <Link
//             className="button button--secondary button--lg"
//             to="/blog/colourbox-litepaper">
//             read the litepaper ⏱️
//           </Link>

//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} DeCentral`}
      description="decentralized music streaming with NFTs">
      <main>
        <ColourBoxLandingPage />
      </main>
    </Layout>
  );
}
