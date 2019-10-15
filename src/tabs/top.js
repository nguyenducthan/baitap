import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { getArticles } from '../service/news';
import { Alert, View, ActivityIndicator, RefreshControl, ScrollView} from 'react-native'
import DataItem from '../component/dataltem'
import Modal from '../component/modal';

export default class Top extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null,
            setModalVisible: false,
            modalArticleData: {},
            refreshing: false
        }
    }
    _onRefresh = () => {
      this.setState({refreshing: true});
      getArticles('top').then(data => {
        this.setState({
            isLoading: false,
            data: data,
            refreshing: false
        })
      }), error => {
          Alert.alert('Error', 'Error');
      } 
    }
   
  componentDidMount() {
    getArticles('top').then(data => {
        this.setState({
            isLoading: false,
            data: data
        })
    }), error => {
        Alert.alert('Error', 'Error');
    } 
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
      console.log('here',this.state.data);

      let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 50, justifyContent: 'center' }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text children="Please Wait.." />
        </View>
      ) : (
        <List refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
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