import {
  Canvas,
  Color,
  Group,
  LinearGradient,
  Mask,
  Paint,
  RoundedRect,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {View, ViewProps} from 'react-native';

interface Props extends React.PropsWithChildren<ViewProps> {
  shadowY?: number;
  shadowX?: number;
  shadowBlur?: number;
  shadowColor?: Color;
  shapeWidth?: number;
  shapeHeight?: number;
  rectRadius?: number;
  topTintColor?: Color;
  gradientColors?: Color[];
}

const ShadowRectangle = ({
  children,
  shadowY = 4,
  shadowX = 0,
  shadowBlur = 0,
  shadowColor = '#13374c',
  shapeWidth = 360,
  shapeHeight = 170,
  rectRadius = 12,
  topTintColor = '#00fcff',
  gradientColors = ['#03bfe1', '#02b7dd', '#019ccf', '#008cc6', '#0976b7'],
}: Props) => {
  const validatedXYPos = Math.max(shadowX, shadowY, shadowBlur);
  const validHeight = shapeHeight - 2 * (validatedXYPos + validatedXYPos);
  const validWidth = shapeWidth - 2 * (validatedXYPos + validatedXYPos);

  return (
    <View style={{height: shapeHeight, width: shapeWidth}}>
      <View style={{position: 'absolute', flex: 1}}>
        <Canvas style={{width: shapeWidth, height: shapeHeight}}>
          <RoundedRect
            x={validatedXYPos}
            y={validatedXYPos + shadowY}
            width={validWidth}
            height={validHeight + shadowY}
            r={rectRadius}
            color={shadowColor}
          />
          <RoundedRect
            x={validatedXYPos}
            y={validatedXYPos}
            width={validWidth}
            height={validHeight}
            r={rectRadius}>
            <Paint>
              <LinearGradient
                start={vec(validatedXYPos, validatedXYPos)}
                end={vec(validatedXYPos, validHeight)}
                colors={[topTintColor]}
              />
            </Paint>
          </RoundedRect>

          <Group>
            <LinearGradient
              start={vec(validatedXYPos, validatedXYPos)}
              end={vec(validatedXYPos, validHeight)}
              colors={gradientColors}
            />

            <Mask
              mask={
                <Group>
                  <LinearGradient
                    start={vec(validatedXYPos, validatedXYPos)}
                    end={vec(validatedXYPos, validHeight)}
                    positions={[0, 0.2]}
                    colors={['transparent', 'black']} // transparent is shown to 20%  height here black us unused color helps to fill rest of the height
                  />
                  <RoundedRect
                    x={validatedXYPos}
                    y={validatedXYPos}
                    width={validWidth}
                    height={validHeight}
                    r={rectRadius}
                  />
                </Group>
              }>
              <RoundedRect
                x={validatedXYPos}
                y={validatedXYPos}
                width={validWidth}
                height={validHeight}
                r={rectRadius}
              />
            </Mask>
          </Group>
        </Canvas>
      </View>

      <View
        style={{
          position: 'absolute',
          top: validatedXYPos,
          flex: 1,
          height: shapeHeight - 2 * validatedXYPos,
          width: shapeWidth - 2 * validatedXYPos,
          borderRadius: rectRadius,
          paddingLeft: validatedXYPos,
          paddingRight: validatedXYPos,
          paddingBottom: validatedXYPos + shadowY,
        }}>
        {children}
      </View>
    </View>
  );
};

export default ShadowRectangle;
