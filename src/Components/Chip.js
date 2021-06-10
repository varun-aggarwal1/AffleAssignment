import React, { Component } from "react";
import { ChipSet, Chip } from "@material/react-chips";
import "@material/react-chips/dist/chips.css";

export default class ChoiceChip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChip: "",
      options: [
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:00 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
        "05:30 PM",
        "06:00 PM",
        "06:30 PM",
        "07:00 PM",
      ],
    };
  }

  handleSelect = (id) => {
    this.setState({
      selectedChip: id,
    });
    this.props.SetPreferredSlot(id);
  };

  render() {
    return (
      <ChipSet choice handleSelect={(id) => this.handleSelect(id)}>
        {this.state.options.map((time) => {
          return <Chip id={time} label={time} />;
        })}
      </ChipSet>
    );
  }
}
