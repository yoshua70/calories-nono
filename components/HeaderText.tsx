import { StyleSheet, Text } from "react-native"

type Props = {
    title: string
}

export default function HeaderText({title}: Props) {
    return (
        <Text style={styles.text}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        fontWeight: 'bold',
    },
});