import React, { Component } from 'react';
import ImgMediaCard2 from './card2';
import './style.css';
import { Link } from 'react-router-dom';
import { getDetails } from './cardDetails';
import TextField from '@material-ui/core/TextField';

class Cards extends Component {
  state = {
    cards: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({ cards: getDetails() });
  }

  getData = (e) => {
    console.log(e.target.value);
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter, cards } = this.state;

    return (
      <React.Fragment>
        <div className="d-flex justify-content-end Cards">
          <TextField
            id="standard-basic"
            label="Search"
            color="secondary"
            onChange={this.getData}
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center Cards p-lg-5">
          {cards
            .filter(
              (card) =>
                card.title.toLowerCase().includes(filter.toLowerCase()) ||
                card.description.toLowerCase().includes(filter.toLowerCase())
            )
            .filter(
              (card) =>
                card.title !== 'N Queen' && card.title !== 'Turing Machine'&& card.title !== "15 Puzzle" && card.title !== "Prime Numbers"
            ) 
            .map((card) => (
              <div key={card.id}>
                <ImgMediaCard2 className="d-flex flex-wrap" card={card} />
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
