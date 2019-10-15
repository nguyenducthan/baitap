import React, { Component } from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
import TimeAgo from './timeago';

export default class DataItem extends Component {

    constructor(props) {
        super(props)
        this.data = props.data; 
    }

    handlePress = () => {
        const {url, title} = this.data;
        this.props.onPress({url, title});
      }

    render() {
        return (
            <ListItem thumbnail>
            <Left>
            <Thumbnail square source={{ uri: this.data.urlToImage != null ?  this.data.urlToImage : 'https://www.remove.bg/images/samples/combined/s1.jpg'}} />
            </Left>
            <Body>
            <Text numberOfLines={1}>{this.data.title}</Text>
            <Text note numberOfLines={2}>{this.data.description}</Text>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 8}}>
                <Text note style={{fontSize: 10, marginRight: 5}}>{this.data.source.name}</Text>
                <TimeAgo time={this.data.publishedAt}/>
            </View>
            </Body>
            <Right>
            <Button transparent onPress={this.handlePress}>
                <Text>Xem</Text>
            </Button>
            </Right>
        </ListItem>
        )
    }

}