import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Body, Right, Title, ScrollableTab } from 'native-base';
import Top from './tabs/top';
import General from './tabs/general';
import Business from './tabs/business';
import Technology from './tabs/technology';
import Entertainment from './tabs/entertainment';
import Health from './tabs/health';
import Science from './tabs/science';
import Sports from './tabs/sports';



export default class TabScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
        };
      }


  render() {
      console.log(this.state.refreshing);
    return (
      <Container>
        <Header hasTabs>
          <Left/>
          <Body>
            <Title>Tin Nhanh</Title>
          </Body>
          <Right />
          </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
        <Tab heading="Đọc Nhiều">
            <Top />
          </Tab>
          <Tab heading="Tin Chính">
            <General />
          </Tab>
          <Tab heading="Kinh Doanh">
            <Business />
          </Tab>
          <Tab heading="Công Nghệ Thông Tin">
            <Technology />
          </Tab>
          <Tab heading="Giải trí">
            <Entertainment />
          </Tab>
          <Tab heading="Sức Khỏe">
            <Health />
          </Tab>
          <Tab heading="Khoa Học">
            <Science />
          </Tab>
          <Tab heading="Thể Thao">
            <Sports />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}