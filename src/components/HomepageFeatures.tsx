import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Artists - with ColourBox you are in control of your music',
    image: '/img/ulabel.jpg',
    description: (
      <>
        <div className='text--left'>
          <li>Sign up with your phone number, email, or crypto wallet</li>
          <li>Upload your music</li>
          <li>Tell your friends and fans to stream it from ColourBox.That way you keep "ALL" of your streaming earnings.</li>
          <li>Use our "distribution" tools to PUSH your music to all major outlets like Spotify, Google Play</li>
          <li>NFTize your track-- Slice your track into 1/10 sec.segments and put some (or all) of it for sale..You can use the funds to finish your mastering project, pay for that tour or just let your <span className='text--primary'>fans share your success</span></li>
        </div>
      </>
    ),
  },
  {
    title: 'Built by musicians for musicians',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        ColourBox is brought to you by a group of practising musicians. We are looking forward to playing in a venue near you.
      </>
    ),
  },
  /*{
    title: 'Powered by React',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/
];

function FeatureStyle2({ title, image, description }: FeatureItem) {
  return (
    <div className='text--center'>

      
        <div className="padding-horiz--md">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      

    </div>
  );
}


function FeatureStyle1({ title, image, description }: FeatureItem) {
  return (
    <div className='row'>

      <div className={clsx('col col--4')}>
        <div className="text--center">
          <img className={styles.featureSvg} alt={title} src={image} />
        </div>
      </div>

      <div className={clsx('col col--8')}>
        <div className="padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        
          <FeatureStyle1 {...FeatureList[0]}/>

          <hr/>

          <FeatureStyle2 {...FeatureList[1]}/>
        
      </div>
    </section>
  );
}
