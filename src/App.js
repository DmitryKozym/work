import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
     constructor(props) {
      super(props);
      
      this.state = {
         data:"",
         datatext:"",
         result: ""
      }

this.updateState = this.updateState.bind(this);
this.handleFormSubmit = this.handleFormSubmit.bind(this);
this.handleOptionChange = this.handleOptionChange.bind(this);
this.updateStateText = this.updateStateText.bind(this);
this.show = this.show.bind(this);
   };
    updateState(e) {
      this.setState({data: e.target.value});}

      updateStateText(e) {
      this.setState({datatext: e.target.value});}

      handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

       handleFormSubmit (formSubmitEvent) {
  formSubmitEvent.preventDefault();

  console.log('You have selected:', this.state.selectedOption);
};
show (e){
  this.setState ({ result:this.state.data+" "+this.state.datatext+" "+this.state.selectedOption})
 
};
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Привет</h2>
        </div>
        <p className="App-intro">
          Список дел
        </p>
        <input id="task" placeholder="Название" type="text" size="80" value = {this.state.data} onChange = {this.updateState}></input>
        <input id="task" placeholder="Описание" type="text" size="80" style={{height:40}} value = {this.state.datatext} onChange = {this.updateStateText}></input>
      
          <form>
    <div className="radio">
      <label>
        <input type="radio" value="normal" 
                      checked={this.state.selectedOption === 'normal'} 
                      onChange={this.handleOptionChange} />
        Обычная
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="important" 
                      checked={this.state.selectedOption === 'important'} 
                      onChange={this.handleOptionChange} />
        Важная
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="very important" 
                      checked={this.state.selectedOption === 'very important'} 
                      onChange={this.handleOptionChange} />
        Очень важная
      </label>
    </div>
  </form>
            
       
 
        <input type="button" value="Добавить" name="a" OnClick={this.show.bind(this)} ></input>

        <input id="task" type="text" size="80" value = {this.state.result} onChange={this.show}></input>  {/*onChange={this.show}*/}
       
      </div>
    );
  }

}

export default App;
