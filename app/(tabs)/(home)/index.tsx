import HeaderText from "@/components/HeaderText";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <HeaderText title="Hello, World!"/>
      <Link href="/details">Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start',
    padding: 24,
},
});