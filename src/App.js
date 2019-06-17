import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: null,
    };
  }

  handleSelected = (petId) => {
    let currentPet;
    this.state.petList.forEach((pet, i) => {
      if (pet.id === petId){
        currentPet = pet;
      }
    });

    this.setState({
      currentPet,
    });
  }

  handleRemoved = (petId) => {
    const pets = this.state.petList;
    let index = 0
    pets.forEach((pet, i) => {
      if (pet.id === petId) {
        index = i;
      }
    });
    pets.splice(index,1);
    this.setState({
      petList: pets,
    });
  }

  

  render() {

    const { currentPet } = this.state;

    console.log(currentPet);
    let petDetails;
    let petCard;
    if (currentPet) {
      petDetails = <PetDetails 
      currentPet={currentPet}
    />
      
     petCard = <PetCard
      {...currentPet}
      selectCallback={this.handleSelected}
      />
    }
    
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          { /* Wave 2:  Where Pet Details should appear */ }
          {petDetails}
          
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          <PetList 
            handleSelectedCallBack={this.handleSelected}
            handleRemoveCallBack={this.handleRemoved}
            pets={pets}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;
