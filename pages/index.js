import IntroCTA from "../components/intro/introCTA";
import IntroAbout from "../components/intro/introAbout";
import IntroServices from "../components/intro/introServices";
import IntroProjects from "../components/intro/introProjects";
import IntroBlog from "../components/intro/introBlog";
import HeroImage from "../components/Hero/index";

import IntroMetrics from "../components/intro/introMetrics";

import services from "../components/data/services.json";
import about from "../components/data/about.json";
import metrics from "../components/data/metrics.json";
import areasWeServe from "../components/data/areas-we-serve.json";
import ImgWrapper from "../components/ImgWrapper/ImgWrapper";

export default function Home() {
  return (
    <div>
      <HeroImage />
      <ImgWrapper />
      <IntroCTA data={services} />
      <IntroAbout data={about} />
      <IntroMetrics data={metrics} />
      <IntroServices data={areasWeServe} />
      <IntroBlog />
    </div>
  );
}
