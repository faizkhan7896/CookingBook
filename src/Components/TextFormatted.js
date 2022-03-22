import _ from 'lodash';
import React from 'react';
import {Text} from 'react-native';
import {theme} from '../Utils/Constants';

function TextFormatted({children, style, fontFamily = 'Roboto', ...props}) {
  let transformedStyle = {};
  if (Array.isArray(style)) {
    _.flattenDeep(style).map(
      v => (transformedStyle = {...transformedStyle, ...(v || {})}),
    );
  } else {
    transformedStyle = style || {};
  }
  return (
    <Text
      {...props}
      style={[
        {color: theme.colors.onSurface},
        transformedStyle,
        {
          fontWeight: transformedStyle?.fontFamily
            ? transformedStyle?.fontWeight
            : null,
          fontFamily: transformedStyle?.fontFamily
            ? transformedStyle?.fontFamily
            : fontFamily +
              getFontWeightName(transformedStyle?.fontWeight) +
              (transformedStyle?.fontStyle == 'italic' ? 'Italic' : ''),
        },
      ]}>
      {children}
    </Text>
  );
}

export default TextFormatted;

const getFontWeightName = weight => {
  if (weight == 'bold') {
    weight = '700';
  }
  if (weight == 'normal') {
    weight = '400';
  }
  var numWeight = parseInt(weight);
  if (!numWeight) {
    return '-Regular';
  }

  return {
    100: '-Thin',
    200: '-Thin',
    300: '-Light',
    400: '-Regular',
    500: '-Medium',
    600: '-Medium',
    700: '-Bold',
    800: '-ExtraBold',
    900: '-ExtraBold',
  }[numWeight];
};
