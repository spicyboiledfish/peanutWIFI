import React, { Component } from 'react';
import {  View, Text, Modal } from 'react-native';

export default class HSModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  render() {
    return (
      <Modal 
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>       
      </Modal>
    );
  }
}
