import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Handle the boring stuff',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Grindcord is designed to assist in all the bureaucracy of running a leaderboard
          so that you can get right back to the fun part of engaging in competition.
      </>
    ),
  },
  {
    title: 'Easy, Simple, and Extensible',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Grindcord is accessible to anyone from competitors, to server admins, to TOs,
          whether or not they have technical experience, and especially supports those with
          experience to use Grindcord to its full potential.
      </>
    ),
  },
  {
    title: 'Open-source, self-hostable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Grindcord is created by competitors, for competitors. We invite anyone,
          regardless of experience, to use Grindcord for their own purposes.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
