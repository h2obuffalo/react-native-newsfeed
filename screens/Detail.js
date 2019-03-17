import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button, Linking } from 'react-native';
import Image from 'react-native-image-progress';
import {FontAwesome} from '@expo/vector-icons';
import {WebBrowser} from 'expo';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            story: null,
            result: null,
        }
    }
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('news').item.source.name
    })

    handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('');
    this.setState({ result });
    };

render() {
        const story = this.props.navigation.getParam('news');
        const {title, urlToImage, url, description, content } = story.item;
        console.log(urlToImage);
    return(
        <View style={styles.container} >
        <Image source={{uri: `${urlToImage}`}} style={{width:'100%', height:'45%', marginBottom:10}} />
        <Text style={styles.headline}>
            {title} {"\n"}
        </Text>
        <ScrollView style={styles.story} ><Text style={styles.text}>{description} {"\n"} {content}</Text></ScrollView>
        <TouchableOpacity
          style={styles.ieIcon}
          onPress={ () => WebBrowser.openBrowserAsync(`${url}`)}
        >
            <FontAwesome name="internet-explorer" size={32} style={styles.ieIcon}/>
            <Text style={{fontSize:22, fontWeight:'bold', color:'blue'}} >
            Click here for Article</Text>
        </TouchableOpacity>
        </View>
        )
}
}


const styles = {
    image:{
        justifyContent:'center',
    },
    story: {
        flex:2,
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:18,
        margin:5,
    },
    ieIcon: {
        textAlign:'center',
        marginBottom:5,
    },
    headline: {
        fontSize:22,
        margin:5,
    }
};



export default Detail;
