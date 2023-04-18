import { Outlet } from "react-router-dom";

import MainNavigaion from "../layouts/MainNavigaion";

function RootPage() {
  return (
    <>
      <MainNavigaion />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootPage;
