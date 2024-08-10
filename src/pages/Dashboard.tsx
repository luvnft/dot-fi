import { ExampleThemesEcommerce } from "@/components/radix-website/ExampleThemesEcommerce";
// import { ExampleThemesEcommerce } from "@/components/radix-website/ExampleThemesEcommerce";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { ThemesHeroLayout } from "@/components/radix-website/ThemesHeroLayout";
import { ExampleThemesMusicApp } from "@/components/radix-website/ExampleThemesMusicApp";
import { Container, Section, Separator } from "@radix-ui/themes";
import { CommunitySection } from "@/components/radix-website/marketing/CommunitySection";
import { FancyBackground } from "@/components/radix-website/marketing/FancyBackground";
import { PrimitivesHero } from "@/components/radix-website/marketing/PrimitivesHero";
import { Footer } from "@/components/radix-website/Footer";

export default function Dashboard() {
  return (
    <>
      {/* <FancyBackground> */}
      <div className="z-10">
        <PrimitivesHero />
      </div>
      {/* </FancyBackground> */}

      {/* <ExampleThemesEcommerce /> */}
      {/* games- only */}
      {/* games- only */}

      {/* why sections, save time, RWA faster, more */}
      {/* <Box overflow="hidden">
        <BenefitsSection />
        <StatsSection />
      </Box> */}

      {/* accessibility : just create video tutorial basic */}
      <ExampleThemesMusicApp />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <CommunitySection />
        </Container>
      </Section>
      <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
        <Separator size="2" />
        <Section size={{ initial: "2", md: "4" }} pb="0">
          <Footer />
        </Section>
      </Container>
    </>
  );
}
