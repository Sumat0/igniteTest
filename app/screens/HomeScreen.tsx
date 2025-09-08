import { FC } from "react"
import { ViewStyle, View, TextStyle } from "react-native"
import type { AppStackScreenProps } from "@/navigators/AppNavigator"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { Card } from "@/components/Card" 
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"
import type { ThemedStyle } from "@/theme/types"
// import { useNavigation } from "@react-navigation/native"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = () => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  const { themed } = useAppTheme()
  return (
    <Screen style={$root} preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$styles.flex1}>
      
      <View style={themed($styles.container)}>
      <View style={themed($headerRow)}>
        <Text text="welcome to" style={themed($welcomeText)} />
        <Text text="taeao" style={themed($taeaoText)} />
        
      </View>
      <View style={[$styles.container, $styles.row, $topCards]}>
        <Card style={themed($topCard)} preset="default" verticalAlignment="force-footer-bottom" FooterComponent={
        <View>
        <Text style={themed($sectionText)} text="Parent" /> 
        <Text style={themed($sectionText)} text="Hub" />
        </View>} />
        <Card style={themed($topCard)} preset="default" verticalAlignment="force-footer-bottom" FooterComponent={
        <View>
        <Text style={themed($sectionText)} text="Student" /> 
        <Text style={themed($sectionText)} text="Hub" />
        </View>} />
      </View>
      <Card style={themed($bottomCard)} preset="default" verticalAlignment="force-footer-bottom" FooterComponent={
        <View>
        <Text style={themed($sectionText)} text="General" /> 
        <Text style={themed($sectionText)} text="Guide" />
        </View>}/>
    </View>
  </Screen>
  )
}

// #region Styles
const $root: ViewStyle = {
  flex: 1,
}
const $headerRow: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  alignItems: "center",
  marginBottom: spacing.xl,
})
const $welcomeText: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  fontSize: 24,
  fontWeight: "bold",
  color: "#65719C",
  textAlign: "right",
})
const $taeaoText: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  fontSize: 118,
  fontWeight: "bold",
  color: "#65719C",
  textAlign: "center",
  marginTop: spacing.xs,
  letterSpacing:-8,
})
const $ContentContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingHorizontal: spacing.lg,
  paddingBottom: spacing.lg,
})
const $sectionText: ThemedStyle<TextStyle> = ({ colors, spacing, typography }) => ({
  fontSize: 18,
  color: "#FFFFFF",
  fontFamily: typography.primary.semiBold,
})
const $topCards: ViewStyle = {
  justifyContent: "center",
  marginHorizontal: 10,

}
const $topCard: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  paddingHorizontal: spacing.sm,
  backgroundColor: "#65719C",
  margin: spacing.sm,
  width: "55%",
})
const $bottomCard: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  marginVertical: 10,
  paddingHorizontal: spacing.sm,
  paddingBottom: spacing.sm,
  height: 207,
  backgroundColor: "#65719C",
  width: "98%",
})
// #endregion