import { Dashboard02 } from "@/components/blocks/dasbhoard-02";
import { Dashboard05 } from "@/components/blocks/dashboard-05";
import Main from "@/components/homepage/Main";
import { NewLayout } from "@/components/layouts/NewLayout";

export default function Homepage() {
  return (
    <>
      <NewLayout>
        <Main />
      </NewLayout>
      {/* <Dashboard05 /> */}
    </>
  );
}
