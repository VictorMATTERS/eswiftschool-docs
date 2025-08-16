import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          Welcome to the eSwiftSchool Management System Guide
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/admin/intro">
           Admin Tutorial
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/parent/intro">
            Parent Tutorial
          </Link>
        </div>
      </div>
    </header>
  );
}
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`eSwiftSchool - User Documentation`}
      description="Comprehensive user guide for eSwiftSchool, a modern school management system that simplifies student enrollment, attendance tracking, grading, communication, and administration for schools of all sizes.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

