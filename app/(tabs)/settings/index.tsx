import HeaderText from "@/components/HeaderText";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <HeaderText title="Settings"/>
            <Text>Hello, world ! (from the settings)</Text>
        </View>
    )
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