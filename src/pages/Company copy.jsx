import Hero from "../components/Company/Hero";
import Story from "../components/Company/Story";
import CoreValues from "../components/Company/CoreValues";
import Moonshot from "../components/Company/Moonshot";
import Subscribe from '../components/generalSections/Subscribe';
import TheNews from '../components/generalSections/TheNews';
import BuildFuture from "../components/Company/BuildFuture";

export default function Company() {
  return (
    <div className="">
      <Hero />
      <Story />
      <CoreValues />
      <Moonshot />
      <BuildFuture />
      <TheNews />
      <Subscribe />
    </div>
  );
}
