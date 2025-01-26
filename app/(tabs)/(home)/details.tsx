import HeaderText from "@/components/HeaderText";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <HeaderText title="Details"/>
            <Text>Some, details</Text>
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