import { Charts01 } from "@/components/blocks/charts-01";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Empty() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Empty Page</PageHeaderHeading>
      </PageHeader>
      <Charts01 />
    </>
  );
}
