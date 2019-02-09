import React, { Component } from 'react';
import api from '../services/api';

import './Timeline.css';
import twitterLogo from '../twitter.svg';


export default class Timeline extends Component {

  state = {
    newTweet: ""
  };

  handleNewTweet = async e => {

    if (e.keyCode !== 13) return;

        const content = this.state.newTweet;
        const author  = localStorage.getItem('@GoTwitter:username');
        console.log(content, author,e.keyCode);
        
        await api.post('tweets',{author,content});
        this.setState({newTweet:""});
  };


  handLeInputChange = e => {
     this.setState({newTweet: e.target.value});
  };

     render(){
         return (
             <div className="timeline-wrapper">
                <img height={24} src={twitterLogo} alt="GoTwitter"/>  
                    
                 <form>
                    <textarea 
                           value={this.state.newTweet} 
                           onChange={this.handLeInputChange}
                           onKeyDown={this.handleNewTweet}
                           placeholder="O que está acontecendo?" />
                    
                </form>

  
             </div>

         );
     }
}