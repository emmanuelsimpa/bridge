import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Ordersvg({color}: {color: string}) {
  return (
    <Svg width="20" height="23" viewBox="0 0 20 23" fill="none">
      <Path
        d="M15.9355 1.52469H4.01446C2.6977 1.52469 1.63025 2.59214 1.63025 3.9089V19.4063C1.63025 20.7231 2.6977 21.7905 4.01446 21.7905H15.9355C17.2523 21.7905 18.3197 20.7231 18.3197 19.4063V3.9089C18.3197 2.59214 17.2523 1.52469 15.9355 1.52469Z"
        stroke={color}
        stroke-opacity="0.56"
        stroke-width="1.96347"
      />
      <Path
        d="M6.39847 7.48605H13.5511M6.39847 12.2545H13.5511M6.39847 17.0229H11.1669"
        stroke={color}
        stroke-opacity="0.56"
        stroke-width="1.96347"
        stroke-linecap="round"
      />
    </Svg>
  );
}
