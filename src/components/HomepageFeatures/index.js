import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Guides",
    svg: "/img/discourse/Spot1.svg",
    href: "/docs/guides",
    description: (
      <>
        Structured tutorials and how-tos for core, theme and plugin development.
      </>
    ),
  },
  {
    title: "API Reference",
    href: "/docs/reference",
    svg: "/img/discourse/BlankSlate1.svg",
    description: (
      <>
        Technical listing of common Ruby and JavaScript APIs for Discourse core,
        theme and plugin development.
      </>
    ),
  },
  {
    title: "REST API",
    href: "/docs/rest-api/discourse-api-documentation",
    svg: "/img/discourse/Spot4.svg",
    description: (
      <>Integrate with external systems using Discourse's RESTful HTTP API.</>
    ),
  },
];

function Feature({ svg, href, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <a href={href}>
        <div className="text--center">
          <img src={svg} className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={`${styles.features} cta-grid`}>
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
