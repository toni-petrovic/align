// use jsx to render html, do not modify simple.html
'use strict';

import Align from 'rc-align';
import React from 'react';
import rcUtil from 'rc-util';
import assign from 'object-assign';

var Test = React.createClass({
  getInitialState(){
    return {
      monitor:true,
      align: {
        points: ['cc', 'cc']
      }
    }
  },

  forceAlign(){
    this.setState({
      align: assign({}, this.state.align)
    });
  },

  getTarget(){
    return React.findDOMNode(this.refs.container);
  },

  toggleMonitor(){
    this.setState({
      monitor:!this.state.monitor
    })
  },

  render(){
    return (<div style={{
      margin:50
    }}>
      <p>
        <button onClick={this.forceAlign}>force align</button>
&nbsp;&nbsp;&nbsp;
        <button onClick={this.toggleMonitor}>toggle monitor</button>
      </p>
      <div
        ref="container"

        style={{
    width:'80%',
    height:500,
    border:'1px solid red'
    }}>
        <Align
          target={this.getTarget}
          monitorWindowResize={this.state.monitor}
          align={this.state.align}>
          <div style={{
      position:'absolute',
      width:50,
      height:50,
      background:'yellow'
      }}>
            source
          </div>
        </Align>
      </div>
    </div>);
  }
});

React.render(<Test />, document.getElementById('__react-content'));