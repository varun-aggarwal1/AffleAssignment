import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ChoiceChip from "./Chip";
import "./style.css";

const Form = () => {
  const [roomType, setRoomType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pickedDate, setPickedDate] = useState("");
  const [actualDate, setActualDate] = useState("");
  const [slot, SetPreferredSlot] = useState("");
  const [isDisabled, setDisabled] = useState("disabled");

  const onChange = (value) => {
    setPickedDate(value);
    var date = new Date(value),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);

    setActualDate([date.getFullYear(), mnth, day].join("-"));
    setDisabled("");
  };

  return (
    <form className="form">
      <div className="input-box">
        <label>Meeting Room</label>

        <select
          name="RoomType"
          className="room-type"
          id="Room"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
        >
          <option value="Training Room">Training Room</option>
        </select>
      </div>
      <div className="input-box">
        <label>Name:</label>
        <input
          name="name"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-box">
        <label>Meeting Description</label>
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Meeting Description"
          required
        />
      </div>

      <div className="calendar">
        <Calendar onClickDay={onChange} value={pickedDate} required />
      </div>

      {actualDate}
      <div style={{ width: "70%" }} className={isDisabled}>
        <h3>Please select your preferred slot </h3>
        <ChoiceChip SetPreferredSlot={SetPreferredSlot} />
      </div>

      <div>
        <button className="button">Book Appointment</button>
      </div>
    </form>
  );
};
export default Form;
