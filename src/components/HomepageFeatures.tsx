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
    title: 'Sell fans exclusive access to content, merchandise, services, communities, and events',
    image: '/img/ulabel.jpg',
    description: (
      <>
        <div className='text--left'>
          <li>Content = music, audio files, photos, gifs, and videos</li>
          <li>Merchandise = shirts, hoodies, hats, discounts, access to pre-sales, etc.</li>
          <li>Services = Consulting, shoutouts, features, mixing and mastering, DJing, etc.</li>
          <li>Communities = group chats, one on one chats with creators, etc.</li>
          <li>Events = concerts, meet n greets, virtual, in-person, etc.</li>
        </div>
      </>
    ),
  },
  {
    title: 'Built by creators for creators',
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
