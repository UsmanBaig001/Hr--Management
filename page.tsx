import Dashboard from "@/components/dashboard/Dashboard";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import ProtectedRootLayout from "./(root)/layout";

export default function Home() {
  return (
    <DefaultLayout heading={"Hello Lucifer"} description={"Welcome"}>
      <ProtectedRootLayout>
        <Dashboard />
      </ProtectedRootLayout>
    </DefaultLayout>
  );
}
