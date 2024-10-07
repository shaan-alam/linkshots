"use client";

import { SignOutButton } from "@clerk/nextjs";
import { Tab, Tabs } from "@nextui-org/react";

import BackgroundSettings from "../frame-settings/background";

const Sidebar = () => {
  return (
    <aside className="h-screen w-[15%] border border-r bg-white p-4">
      <Tabs className="w-full">
        <Tab key="tools" title="Tools" className="w-full"></Tab>
        <Tab key="frame" title="Frame" className="w-full">
          <BackgroundSettings />
        </Tab>
      </Tabs>
      <SignOutButton redirectUrl="/" />
    </aside>
  );
};

export default Sidebar;
