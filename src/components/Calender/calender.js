import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

let ValuePiece = Date || null;

let Value = ValuePiece || [ValuePiece, ValuePiece];

export default function MyApp() {
    const [value, setValue] = useState(new Date());


  return (
    <div>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}
