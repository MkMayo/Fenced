import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { formatTimeString } from './utils';
import { Button } from 'react-native';

class Timer extends Component {
  static propTypes = {
    start: PropTypes.bool,
    reset: PropTypes.bool,
    msecs: PropTypes.bool,
    options: PropTypes.object,
    handleFinish: PropTypes.func,
    totalDuration: PropTypes.number,
    getTime: PropTypes.func,
    getMsecs: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      started: false,
      remainingTime: 180000,
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTime = this.formatTime.bind(this);
    const width = props.msecs ? 220 : 150;
    this.defaultStyles = {
      container: {
        padding: 5,
        borderRadius: 5,
      },
      text: {
        fontSize: 60,
        color: '#FFF',
        marginLeft: 7,
        right: 60
      }
    };
  }

  componentDidMount() {
    if(this.props.start) {
      this.start();
    }
  }

  componentWillReceiveProps(newProps) {

    if(newProps.start) {
      this.start();
    } else {
      this.stop();
    }
    if(newProps.reset) {
      this.reset(newProps.totalDuration);
    }
  }

  start() {
    const handleFinish = this.props.handleFinish ? this.props.handleFinish : () => alert("Timer Finished");
    const endTime = new Date().getTime() + this.state.remainingTime;
    this.interval = setInterval(() => {
      const remaining = endTime - new Date();
      if(remaining <= 1000) {
        this.setState({remainingTime: 0});
        this.stop();
        handleFinish();
        return;
      }
      this.setState({remainingTime: remaining});
    }, 1);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset(newDuration) {
    this.setState({
      remainingTime: 180000
      });
  }

  formatTime() {
    const { getTime, getMsecs, msecs } = this.props;
    const now = this.state.remainingTime;
    const formatted = formatTimeString(now, msecs);
    if (typeof getTime === "function") {
      getTime(formatted);
    }
    if (typeof getMsecs === "function") {
      getMsecs(now)
    }
    return formatted;
  }

  render() {

    const styles = this.props.options ? this.props.options : this.defaultStyles;

    return(
      <View style={styles.container}>
        
        <Text style={styles.text}>{this.formatTime()}</Text>
        
        <View style={{right:55, width:'20%'}}>
        <Button onPress={this.start} title="Start" color={"green"} backgroundColor="black"/>
        </View>
        
        <View style={{top:-36, right:-35, width:'20%'}}>
        <Button onPress={this.stop} title="Stop" color={"red"} backgroundColor="black"/>
        </View>
        
        <View style={{top:-75, right:-120, width:'20%'}}>
        <Button onPress={this.reset} title="Reset" color={"white"} backgroundColor="black"/>
        </View>
        
        
      </View>
    );
  }
}

export default Timer;