/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ImagePicker, DatePicker, List } from 'antd-mobile-rn';
import { View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [{
        url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
        id: '2121',
      }]
    }
  }
  render() {
    return (<View style={{padding: 10, marginTop: 0 }}>
      <List style={{marginBottom: 20}}>
        <DatePicker mode="datetime">
          <List.Item arrow="horizontal">
            选择时间
          </List.Item>
        </DatePicker>
      </List>
      <ImagePicker
        style={{marginTop: 20}}
          onChange={this.handleFileChange}
          files={this.state.files}
        />
    </View>);
  }
  handleFileChange = (files) => {
    this.setState({
      files,
    });
  }

}
