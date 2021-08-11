import {
  ColorValue,
  requireNativeComponent,
  StyleSheet,
  ViewProps,
} from 'react-native';
import {FC} from 'react';

/**
 * Composes `View`.
 *
 * - src: string
 * - borderRadius: number
 * - resizeMode: 'cover' | 'contain' | 'stretch'
 */
type ShadowProps =
  | {
      shadowColor?: ColorValue | undefined;
      shadowOffset?: {
        width?: number;
        height?: number;
      };
      shadowOpacity?: number;
      shadowRadius?: number;
    }
  | undefined;

const ShadowComponent = requireNativeComponent<{
  shadowProps: ShadowProps;
}>('ShadowView');

type Props = ViewProps;

export const ShadowView: FC<Props> = ({style, ...otherProps}) => {
  const flattenStyles = StyleSheet.flatten(style);
  const shadowStyle: ShadowProps = {
    shadowColor: flattenStyles.shadowColor,
    shadowOffset: flattenStyles.shadowOffset,
    shadowOpacity: flattenStyles.shadowOpacity,
    shadowRadius: flattenStyles.shadowRadius,
  };
  return <ShadowComponent {...otherProps} shadowProps={shadowStyle} />;
};
