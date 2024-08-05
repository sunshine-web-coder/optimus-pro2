import BuildTogether from "../components/Community/buildTogether/BuildTogether";
import CommunityCulture from "../components/Community/CommunityCulture";
import CommunityInsight from "../components/Community/communityInsight/CommunityInsight";
import CommunityProgram from "../components/Community/CommunityProgram";
import Hero from "../components/Community/hero/Hero";
import JoinCommunity from "../components/Community/JoinCommunity";
import LetConnect from "../components/generalSections/LetConnect";
import ProFraction from "../components/Community/ProFraction";
import Subscribe from '../components/generalSections/Subscribe';
import InTheNews from '../components/generalSections/TheNews';

export default function Community() {
  return (
    <div className="">
      <Hero />
      <ProFraction />
      <BuildTogether />
      <CommunityProgram />
      <JoinCommunity />
      <CommunityCulture />
      <CommunityInsight />
      <InTheNews />
      <LetConnect />
      <Subscribe />
    </div>
  );
}
