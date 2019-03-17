import React, {Component} from 'react';
import { TouchableHighlight, Stylesheet, View, Text, FlatList, Image, RefreshControl } from 'react-native';
import axios from 'axios';
import { FontAwesome, IonIcons} from '@expo/vector-icons';

class List extends Component {
    constructor(props){
        super(props);

        this.state= {
            news: null,
            refreshing: false,
        };

        this.onPress = this.onPress.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.componentDidMount =this.componentDidMount.bind(this);
    }

    static navigationOptions = {
        headerTitleStyle:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'center',
        },
        title:"f",
        headerTintColor:'white'
    }

    keyExtractor(item, index) {
        return `${index}`;
    }

    renderSeparator(){
        return (
          <View
          style={styles.separator}
          />
          );
    }

    onPress(item) {
        this.props.navigation.navigate('Detail', {
            news: item,
        })
    }

    componentDidMount(){
     this.refreshData();
 }

 refreshData() {
    const API_URL = "https://newsapi.org/v2/top-headlines?sources=new-scientist&apiKey=10e85943fabf4ebc903bb199fc5e7399";
    this.setState({refreshing: true})
    axios.get(API_URL).then(({data}) =>{
        this.setState({news: data.articles, refreshing: false});
  });
}

renderItem({item}) {
    return(
        <View style={styles.stories}>
        <TouchableHighlight
        style={styles.touch}
        onPress={() => this.onPress({item})}
        underlayColor='#e4e4e4'
        >
        <Text style={styles.story}>
        {item.title}
        </Text>
        </TouchableHighlight>
        </View>
        )
}

render() {
    // console.log(this.state.news)
    return(
        <FlatList
        style={styles.flatlist}
        data={this.state.news}
        renderItem={this.renderItem}
        refreshControl={
          <RefreshControl
            onRefesh={this.refreshData}
            refreshing={this.state.refreshing}
          />
        }
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
        />
        )
}
}

const styles = {
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    storyies:{
        padding: 10,
        height:100,
        justifyContent:'center',
    },
    separator: {
      height: 1,
      width: "100%",
      backgroundColor: "#ddd",
      color:'#ddd',
      marginLeft:10,
    },
      touch: {
        backgroundColor:"#fff",
        height:70,
        marginLeft:5,
        marginRight:5,
    },
    story: {
        flex:1,
        fontSize:18,
        paddingTop:10,
    },
    flatlist: {
        view:'flex',
    }
};



export default List;