import type { ReactNode } from 'react';
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
    title: 'Effortless School Management',
    Svg: require('@site/static/img/undraw_school_management.svg').default,
    description: (
      <>
        eSwiftSchool is designed to simplify every aspect of running a school —
        from admissions to graduation — all in one intuitive platform.
      </>
    ),
  },
  {
    title: 'Focus on Teaching, Not Admin Work',
    Svg: require('@site/static/img/undraw_focus_teacher.svg').default,
    description: (
      <>
        Let eSwiftSchool handle attendance, grading, fees, and reports so you can
        dedicate more time to inspiring and educating students.
      </>
    ),
  },
  {
    title: 'Powered by Modern Technology',
    Svg: require('@site/static/img/undraw_cloud_data.svg').default,
    description: (
      <>
        Built with cutting-edge cloud infrastructure, eSwiftSchool is fast,
        secure, and accessible anytime, anywhere.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
