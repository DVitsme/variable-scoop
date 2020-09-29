import IntroCTA from "../components/intro/introCTA";
import IntroAbout from "../components/intro/introAbout";
import IntroServices from "../components/intro/introServices";
import IntroProjects from "../components/intro/introProjects";
import IntroBlog from "../components/intro/introBlog";
import HeroImage from "../components/Hero/index";

import { fetchAPI } from "../components/utils/api";
import IntroMetrics from "../components/intro/introMetrics";

export default function Home({ getServices, getAbout }) {
  return (
    <div>
      <HeroImage />
      <IntroCTA data={getServices} />
      <IntroAbout data={getAbout} />
      <IntroMetrics />
      <IntroServices />
      <IntroProjects />
      <IntroBlog />
    </div>
  );
}

export async function getStaticProps(context) {
  const getServices = await fetchAPI("services");
  const getAbout = await fetchAPI("about");
  // const getAbout = await fetchAPI("about");
  return {
    props: { getAbout, getServices },
  };
}
