import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { LatestPosts } from "@/components/home/LatestPosts";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsPreview />
      <LatestPosts />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
