import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import { Text } from "@/components/Text"
import { Card, CardProps } from "@/components/Card"

export interface HomeCardProps extends CardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const HomeCard = (props: HomeCardProps) => {
  const { style } = props
  const $styles = [$container, style, ]
  const { themed } = useAppTheme();

  return (
    <Card style={$styles} />
  )
}

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
})

const $homeCard: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  marginVertical: 10,
  flexDirection: "row",
})