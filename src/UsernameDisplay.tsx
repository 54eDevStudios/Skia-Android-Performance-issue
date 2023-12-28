import {
  BlurMask,
  Canvas,
  Mask,
  Rect,
  Text,
  useFont,
} from "@shopify/react-native-skia";
import React, { useEffect } from "react";
import {
  cancelAnimation,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const Font = require("../src/font.otf");
const UsernameDisplay = ({ username }: { username: string }) => {
  const font = useFont(Font, 20);

  const colorSlide = useSharedValue(-150);
  useEffect(() => {
    colorSlide.value = withRepeat(withTiming(200, { duration: 3000 }), 0);
    return () => cancelAnimation(colorSlide);
  }, []);

  return (
    <Canvas style={{ width: 150, height: 25 }}>
      <Mask mask={<Text x={0} y={25} text={username} font={font} />}>
        <Rect x={0} y={0} width={150} height={25} color={"white"} />
        <Rect x={colorSlide} y={0} width={25} height={25} color={"blue"}>
          <BlurMask blur={10} style="normal" />
        </Rect>
      </Mask>
    </Canvas>
  );
};

export default UsernameDisplay;
