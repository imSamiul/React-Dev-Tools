import React from "react";
import Card from "./Card";
import { contacts } from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://scontent.fcla1-1.fna.fbcdn.net/v/t1.0-9/134697854_1166668157081169_5248873879493149847_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeH3NHBNU6Lbplvp4Rs-odrEg7KO34dBUs2Dso7fh0FSzd-I61p7SqPFvCH-NvM8bpDWZEFfIHHCbsYKtiOBYGRT&_nc_ohc=YcI4grqvIdUAX-rrAPg&_nc_ht=scontent.fcla1-1.fna&oh=e70b82a173a2ab6ea427f07755e08ca5&oe=601C8A10" />
      <Card
        name={contacts[0].name}
        image={contacts[0].imgURL}
        number={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        number={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        number={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
