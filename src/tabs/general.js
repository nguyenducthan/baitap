import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { getArticles } from '../service/news';
import { Alert, View, ActivityIndicator} from 'react-native'
import DataItem from '../component/dataltem'
import Modal from '../component/modal';

export default class Tab1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null,
            setModalVisible: false,
            modalArticleData: {}
        }
    }
   
  componentDidMount() {
    getArticles('general').then(data => {
        this.setState({
            isLoading: false,
            data: data
        })
    }), error => {
        Alert.alert('Error', 'Error');
    } 
  }  

  componentDidCatch() {
    console.log("dif Catch");
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }


  render() {
      let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text children="Please Wait.." />
        </View>
      ) : (
        <List
          dataArray={this.state.data}
          renderRow={(item) => {
              return (
                <DataItem onPress={this.handleItemDataOnPress} data={item} />
              )
          }} />
      )


    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}