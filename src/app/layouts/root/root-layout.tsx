import { Outlet } from "react-router";
import { Suspense } from "react";

import { Footer } from "~/widgets/footer";
import { Header } from "~/widgets/header";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
