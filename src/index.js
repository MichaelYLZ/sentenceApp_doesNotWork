import React from 'react';
import { render } from 'react-dom';
import uuid from "uuid";
import './App.css'; 
import Create from './Create.js';
import SenContainer from './SenContainer.js';

class Names extends React.Component {
    
    state = {
        sentences: [
            {
                sentence: '我是高邮人。',
                id: 'aaaa'
            },
            {
                sentence: '今天天气很好。',
                id: 'bbbb'
            },
            {
                sentence: '马上要春节啦。。',
                id: 'cccc'
            },
            {
                sentence: '最后一句。。',
                id: 'dddd'
            }
        ]
    };

    handleEditSubmit = (attrs) => {
        this.updateSen(attrs);
    };

    updateSen = (attrs) => {
        
     this.setState({
      sentences: this.state.sentences.map((senInState)=>{
            if(senInState.id === attrs.id) {
                return Object.assign({}, senInState, {
                    sentence: attrs.sentence
                })
            } else {
                return senInState;
            }
        })
     })
        
    };
    
    render() {
        
        const {
            sentences
        } = this.state;
        
        return (
          <main>
            
          {
             sentences.map(sentenceObj => {
               return <SenContainer 
                       words={sentenceObj.sentence} 
                       key={sentenceObj.id}
                       onEditSubmit={this.handleEditSubmit}
                       />
             }) 
          }
          
          <Create />
            
          </main>
        )
    }
}

render(<Names />, document.getElementById('app'));
