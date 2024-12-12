import { Alert, Button, FlatList, Image, ScrollView,   Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Participantes } from "../../Components/Participantes"
import uuid from 'react-native-uuid'


export const Home = () => {

   // const participantes = [];
    
    const participantes = [
        {
            id: uuid.v4(),
            nome: "leandro"
        },
        {
            id: uuid.v4(),
            nome: "beatriz"
        },
        {
            id: uuid.v4(),
            nome: "luiza"
        },
        {
            id: uuid.v4(),
            nome: "Catarina"
        },
        {
            id: uuid.v4(),
            nome: "Mia"
        },
        {
            id: uuid.v4(),
            nome: "Zara"
        },
        {
            id: uuid.v4(),
            nome: "Lica"
        },
        {
            id: uuid.v4(),
            nome: "Kel"
        },
    ]

   

    const handleRemove = (name: string)=>{
        

        console.log(`remover ${uuid.v4()}`)
        Alert.alert(`Remover item: ${name}`,'',[{text:'Fechar'}])
    }
    return (
        <View style={styles.box}>
           
            <View style={styles.header}>
                <Text>Header</Text>
            </View>


            <View >



                <View style={{ flexDirection: "row", margin: 40 }}>
                    <TextInput style={styles.inputForm}
                        placeholder="Evento"
                        placeholderTextColor="#eee"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={styles.ButtonForm}>
                        <Text style={styles.ButtonText}>+</Text>
                    </TouchableOpacity>

                </View>


                <Image   height={128} source={{uri: "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=512&auto=format&fit=crop"}} />


                <Text style={styles.detalhes}>Sondotecnica App Off-line</Text>
                
            </View>

            {/* <ScrollView   showsVerticalScrollIndicator={false}> */}
            <FlatList 
                data={participantes}
                keyExtractor={item=> item.id}
                renderItem={({item})=>
                    <Participantes 
                        key={item.id} 
                        id={item.id}
                        name={item.nome}
                        onRemove={()=>handleRemove(item.nome)}
                />
                }
                ListEmptyComponent={()=>(
                    <Text>vazio</Text>
                )}
            />
            {/* {
                participantes.map(item=> (
                     <Participantes 
                        key={item.id} 
                        id={item.id}
                        name={item.nome}
                        onRemove={()=>handleRemove(item.nome)}
                    />
                 ))
            } */}

             


            <View>

            </View>

        </View>
    )

}

//debora ou kelly
//21276650/6651/6652
