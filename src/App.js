import logo from './logo.svg';
import './App.css';
import OutlineCard from './Card'
import React from 'react';
// import FormControl from '@material-ui/core/FormControl';
// or
import { FormControl, InputLabel, Input, Button, TextField } from '@material-ui/core';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      'word': '',
      'meaning': '',
      'pronounciation': '',
      'examples': '',
      'items': JSON.parse(localStorage.getItem('word_items')) || []
    }
  }

  handleClick = (e) => {
    console.log(this.state.word);
    console.log(this.state.meaning);
    const items = this.state.items.slice()
    console.log('items before', items);
    items.unshift({
      'word': this.state.word,
      'meaning': this.state.meaning,
      'add_time': new Date().getHours(),
      'examples': ''
    })
    console.log('items after', items);
    this.setState({'items': items})
    localStorage.setItem('word_items', JSON.stringify(items))
    this.setState({
      'word': '',
      'meaning': '',
      'pronounciation': '',
      'examples': '',
    })
  } 

  handleWordChange = (e) => {
    this.setState({'word': e.target.value})
  }

  handleMeaningChange = (e) => {
    this.setState({'meaning': e.target.value})
  }

  handlePronounciationChange = (e) => {
    this.setState({'pronounciation': e.target.value})
  }

  handleExamplesChange = (e) => {
    this.setState({'examples': e.target.value})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <form>
          <TextField id="word" value={this.state.word} label='WORD' color='secondary' onChange={this.handleWordChange}/>
          <TextField id="meaning" value={this.state.meaning} label='MEANING' color='secondary' onChange={this.handleMeaningChange}/>
          <TextField id="pronounciation" value={this.state.pronounciation} label='PRONOUNCIATION'  onChange={this.handlePronounciationChange}/>
          <TextField id="examples" multiline  value={this.state.examples} label='EXAMPLES' onChange={this.handleExamplesChange}/>
          <Button variant="contained" 
          onClick={this.handleClick}
          >Submit</Button>
          </form>
          {this.state.items.map(
           (item) => <OutlineCard word={item.word} meaning={item.meaning} add_time={item.add_time}/>
          )}
        </header>
      </div>
    );
  }
  
}

export default App;
