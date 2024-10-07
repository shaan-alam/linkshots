import { Tab, Tabs } from "@nextui-org/react";
import "react-color-palette/css";

import GradientPicker from "@/components/shared/gradient-picker";
import ImageBackgroundSetter from "@/components/shared/image-backgroun-setter";
import SolidColorPicker from "@/components/shared/solid-color-picker";

const BackgroundSettings = () => {
  return (
    <div>
      <h1 className="my-4 text-lg font-medium">Backgrounds</h1>
      <Tabs>
        <Tab key="solid" title="Solid" className="w-full">
          <SolidColorPicker />
        </Tab>
        <Tab key="gradient" title="Gradient" className="w-full">
          <GradientPicker />
        </Tab>
        <Tab key="image" title="Image" className="w-full">
          <ImageBackgroundSetter />
        </Tab>
      </Tabs>
    </div>
  );
};

export default BackgroundSettings;
