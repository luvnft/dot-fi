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

export default function Dashboard() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Dashboard</PageHeaderHeading>
      </PageHeader>
      {/* <ExampleThemesEcommerce /> */}
      <ExampleThemesMusicApp />
    </>
  );
}
