import React, { Component } from 'react';
import axios from "axios";
import "./bootstrap.min.css"
import "./bootstraptheme.css"

class Pokemon extends Component {

  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => {

        this.setState({

          pokemons: response.data.results.map((data, id) => {
            let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`
            return <tr className="table-active"><td>{data.name}</td><td><img src={picture} /></td></tr>
          })
        })
        console.log(this.state.pokemons)
      })

  }



  render() {

    return (
      <div>
        <div className="alert alert-dismissible alert-danger">
          
          <strong>Kanto Pokedex</strong> By Cesar
</div>

        <table className="table-success table table-hover">
          <th>Pokemon Name</th>
          {this.state.pokemons}
        </table>

      </div>


    );

  }
}


export default Pokemon; 