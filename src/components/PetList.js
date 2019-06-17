import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


class PetList extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pets: props.pets,
  //     selectedPet: null
  //   }
  // }

  handleSelect = (petId) => {
    this.props.handleSelectedCallBack(petId);
  }

  handleRemove = (petId) => {
    this.props.handleRemoveCallBack(petId);
  }

  render (){

    const petList = this.props.pets.map((pet, i) => {
      return (
        <div key={i}>
          <PetCard 
            id={pet.id}
            name={pet.name}
            species={pet.species}
            about={pet.about}
            location={pet.location}
            selectCallBack={this.handleSelect}
            removeCallBack={this.handleRemove}
            />
        </div>
      );
    });

    return (
      <div className="card-group">
        {petList}
      </div>
    )
  }
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
