import React, { Component } from 'react'
import Input from './component/Input';
import Button from './component/Button';
import Quizzes from './Quizzes';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      quizSet: [],
      minLimit: { ...this.createInput('Min Limit','text') },
      maxLimit: { ...this.createInput('Max Limit','text') },
      totalQuestion: { ...this.createInput('Total Question','text') },
      timer: { ...this.createInput('Time alloted','text') },
      sign:''
    }
  }

  createInput = (label,type) => {
    return {
      label,
      type,
      value:''
    }
  }

  createCheckbox = (label,type) => {
    return {
      label,
      type
    }
  }

  inputChanged = (event, input) => {
    let updatedInput = { ...this.state[input] };
    updatedInput.value = event.target.value;
    this.setState({ [input]: updatedInput});
  };

  checkChanged = (event, type) => {
    if(event.target.checked){
      this.setState({sign: this.state.sign + type})
    }
  }

  createHandler = () => {

    const newProblem = {
      minLimit: this.state.minLimit.value,
      maxLimit: this.state.maxLimit.value,
      totalQuestion: this.state.totalQuestion.value,
      timer: this.state.timer.value,
      sign:this.state.sign
    }
    this.setState({
      quizSet: [newProblem].concat(this.state.quizSet),
      minLimit: { ...this.state.minLimit, value:'' },
      maxLimit: { ...this.state.maxLimit, value:'' },
      totalQuestion: { ...this.state.totalQuestion, value:'' },
      timer: { ...this.state.timer, value:'' }
    })
  }

  render() {
    return (
      <div>
        <Input
          changed={(event) => this.inputChanged(event, 'minLimit')}
          {...this.state['minLimit']} />
        <Input
          changed={(event) => this.inputChanged(event, 'maxLimit')}
          {...this.state['maxLimit']} />
        <Input
          changed={(event) => this.inputChanged(event, 'totalQuestion')}
          {...this.state['totalQuestion']} />
        <Input
          changed={(event) => this.inputChanged(event, 'timer')}
          {...this.state['timer']} />
        <Input
          changed={(event) => this.checkChanged(event, '+')}
          {...this.createCheckbox('+','checkbox')} />
        <Input
          changed={(event) => this.checkChanged(event, '-')}
          {...this.createCheckbox('-','checkbox')} />
        <Input
          changed={(event) => this.checkChanged(event, '*')}
          {...this.createCheckbox('*','checkbox')} />
        <Input
          changed={(event) => this.checkChanged(event, '/')}
          {...this.createCheckbox('/','checkbox')} />
        <Button clicked={this.createHandler} value={'Create'}/>
        <Quizzes quizSet={this.state.quizSet}/>
      </div>
    )
  }
}

export default HomePage;
