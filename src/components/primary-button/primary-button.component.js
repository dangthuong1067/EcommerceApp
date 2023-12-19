import { Pressable, Text } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import styles from "./primary-button.styles";
const PrimaryButton = ({
  children,
  style,
  ...props
}) => (
  <Pressable
    style={(pressed) =>
      [styles.button, { opacity: pressed ? 0.8 : 1 }, style]}
    {...props}
  >

    <LinearGradient
      colors={['#009900', '#00CC33']}
      style={styles.linearContainer}
    >
      {typeof children === 'string'
        ? <Text style={styles.buttonText}>{children}</Text>
        : children
      }
    </LinearGradient>
  </Pressable>
)

export default PrimaryButton
