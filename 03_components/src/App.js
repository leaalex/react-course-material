import React, {Component} from 'react';
import './App.css';
// component
import Card from "./components/Card";

const hi = 'Привет, мир!!!'
const Upper = (text) => text.toUpperCase()



class App extends Component {
  render() {
    return (
      <div>
        <h1>{ Upper(hi + ' Меня зовут Алексей!') }</h1>
        <Card title={'Прочитать про React'} completed={true}/>
        <Card title={'Сходить за хлебом'} completed={false}/>
        <Card title={'Помыть машину'} completed={true}>
          <br/>
          <span>Адрес мойки: Мира 19</span>
          <span>Адрес мойки: Мира 19</span>
        </Card>
      </div>
    )
  }
}

export default App;
