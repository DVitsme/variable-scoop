import IntroCTA from "../components/intro/introCTA";
import IntroAbout from "../components/intro/introAbout";
import IntroServices from "../components/intro/introServices";
import IntroProjects from "../components/intro/introProjects";
import IntroBlog from "../components/intro/introBlog";
import HeroImage from "../components/Hero/index";

import { fetchAPI } from "../components/utils/api";

export default function Home({ getServices }) {
  console.log(getServices);
  return (
    <div>
      <HeroImage />
      <IntroCTA data={getServices} />
      <IntroAbout />
      <IntroServices />
      <IntroProjects />
      <IntroBlog />
      <IntroCTA />
    </div>
  );
}

export async function getStaticProps(context) {
  const getServices = await fetchAPI("services");
  console.log(getServices);
  return {
    props: { getServices },
  };
}
