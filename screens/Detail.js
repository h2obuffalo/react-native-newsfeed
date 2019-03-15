import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Image from 'react-native-image-progress';
// import ProgressBar from 'react-native-progress/Bar';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            story: null,
        }
    }
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('news').title
    })


render() {
        const contact = this.props.navigation.getParam('Contact');
    return(
        <View style={styles.container} >

        </View>
        )
}
}


const styles = {
    image:{
        flex:1,
        justifyContent:'center',
    },
    profile: {
        flex:2,
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
    },
    text: {
        fontSize:18,
        margin:5,

    }
};



export default Detail;
