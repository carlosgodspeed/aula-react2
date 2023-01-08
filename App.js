import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList, 
} from 'react-native';

import Lista from './src/Lista/';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Neymar', 
          descricao: 'Perdemos o Hexa :(  desculpe brasil ', 
          imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-g-GIQB14qRDAw8Ng9dAcPL2IuW319mphKA&usqp=CAU', 
          imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStn9RKx0kvtRjAKkQGWnjXo3sUwVs8NA-IXQ&usqp=CAU',  
          likeada: true, 
          likers: 76
         },
        {
          id: '2', 
          nome: 'Gabigol', 
          descricao: 'Isso sim é ser raiz!!', 
          imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRr5M5I1Z09HiokANaT5xscuYQ1xOgqhHUJg&usqp=CAU',
          imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6bJPLXnxLlGSUI5w2j_zRQc1-oX4VleQtg&usqp=CAU', 
          likeada: false, 
          likers: 5
        },
        {
          id: '3', 
          nome: 'Vinijr', 
          descricao: 'Momentos Antes da derrota', 
          imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRI4Ufp70RAp6Cw7uOmPQAg2224YkBFiVlA&usqp=CAU',
          imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7C58HkczKa6GTVRt-Jktaeh3y2Wnbx6ndg&usqp=CAU',  
          likeada: true, 
          likers: 12
        },
        {
          id: '4', 
          nome: 'Richarlisson', 
          descricao: 'Gol +lindo da copa pra vocês', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7XPXhX2s4JO3BwkjmJWPpvm9AWaXZtkwvA&usqp=CAU', 
          likeada: true, 
          likers: 50
        },
        {
          id: '5', 
          nome: 'Messi', 
          descricao: 'Boa noite pra quem Ganhou a copa', 
          imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEtFhrlu_UwPHvKr5f4qTxJHdTxjykvnEQQ&usqp=CAU', 
          imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYndbBvxVjt_9fiWDzd7o3EhraMM6sX3PmWQ&usqp=CAU',
          likeada: true, 
          likers: 10
        }
      ]
     };
 
  }

  render() {
    return (
      <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
          source={require('./src/img/logo.png')}
          style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
          source={require('./src/img/send.png')}
          style={styles.send}
          />
        </TouchableOpacity>
      </View>

      <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={this.state.feed}
      renderItem={ ({item}) => <Lista data={item} /> }
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send:{
    width: 23,
    height: 23
  }

});

export default App;