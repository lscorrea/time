import { Button, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"


interface ParticipanteProps{
    id: string
    name: string
    onRemove: ()=>void
}
export const Participantes = ({id, name,onRemove}: ParticipanteProps) => {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>

            <TouchableOpacity onPress={onRemove}>
                <Text style={styles.ButtonForm}> - </Text>
            </TouchableOpacity>

        </View>

    )

}