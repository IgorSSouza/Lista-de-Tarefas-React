import React, { Component } from 'react';
import {FaPlus} from 'react-icons/fa';
import {FaEdit, FaWindowClose} from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleEdit = (e, index)=> {

  }

  handleDelete = (e, index)=> {
    const {tarefas} = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const {tarefas} = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas:[...novasTarefas, novaTarefa],
    });
  }

  inputMudar = (e) => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  render() {
    const { novaTerefa, tarefas } = this.state;
    
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action='#' className='form'>
            <input 
            onChange={this.inputMudar} 
            type = "text" 
            value={novaTerefa}
            />
            <button type='submit'>
              <FaPlus/>
            </button>
        </form>

        <ul className='tarefas'>
          {tarefas.map((tarefa , index) =>(
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit onClick={(e) => this.handleEdit(e,index)} className='edit' />
                <FaWindowClose onClick={(e) => this.handleDelete(e,index)} className='delete'/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}