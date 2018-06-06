import React, { Component } from 'react';
import {  View, Text, StatusBar, StyleSheet} from 'react-native';
import {Color} from 'LocalReference';
import NavItem from '../../navigators/NavItem';
import InstrumentBoard from 'react-native-instrument-board';

export default class Speed extends Component {
    static navigationOptions = ({navigation})=>{
        return{
            headerTitle:'网络测速',
            headerBackTitle: null,
            headerTintColor:Color.HSSix6Color,
            headerLeft: <NavItem onPress={()=>navigation.goBack()}
                                 leftUri = "news_back_normal"
                                 isImage = {true}/>,
        }
    }

    constructor(props){
        super(props);
        this.state={
            percentage: 0,
        }
    }


    handlePress = () => {
    if (this.state.percentage === 100) {
        this.setState({percentage: 0});
    } if (this.state.percentage + 10.5 >= 100) {
        this.setState({percentage: 100});
    }else {
        this.setState({percentage: this.state.percentage + 10.5});
    }
    };

    render() {
     return (
       <View style={styles.container}>
          <StatusBar
            backgroundColor={Color.HSHeaderBgColor}
            barStyle="default"
          />
        <InstrumentBoard 
            percentage={this.state.percentage}
            degreeTexts={['0KB', '64KB', '128KB', '256KB', '512KB', '1MB', '2MB','4MB','10MB']} 
            contentTexts={['', '', '', '','', '', '', '','']}
            degreeTextStartOffset={['2%','0','0','0','0','0','0','0','0']}
            startAngle={50}
            progressRadius={130}
            degreeTextRadius={145}
            radius={170}
            contentStrokeColors={[Color.HSSixEColor, Color.HSSixEColor, Color.HSSixEColor, Color.HSSixEColor,Color.HSSixEColor, Color.HSSixEColor, Color.HSSixEColor, Color.HSSixEColor, Color.HSSixEColor]}
            centerSpotRadius={12}
            progressColor={Color.HSHeaderBgColor}
            strokeWidth={2}
            />
        <Text onPress={this.handlePress}>增加</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
