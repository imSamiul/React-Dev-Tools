import React from "react";
import Card from "./Card";
import { contacts } from "../contacts";
import Avatar from "./Avatar";

function App() {
  const app = [];
  for (let index = 0; index < contacts.length; index++) {
    app.push(<Card name={contacts[index].name}
      image={contacts[index].imgURL}
      number={contacts[index].phone}
      email={contacts[index].email} />
    );

  }
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://scontent.fcla1-1.fna.fbcdn.net/v/t1.0-9/134697854_1166668157081169_5248873879493149847_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeH3NHBNU6Lbplvp4Rs-odrEg7KO34dBUs2Dso7fh0FSzd-I61p7SqPFvCH-NvM8bpDWZEFfIHHCbsYKtiOBYGRT&_nc_ohc=YcI4grqvIdUAX-rrAPg&_nc_ht=scontent.fcla1-1.fna&oh=e70b82a173a2ab6ea427f07755e08ca5&oe=601C8A10" />
      {/* using for loop */}
      {app}

      {/* using map */}
      {contacts.map((element) => {
        return <Card name={element.name}
          image={element.imgURL}
          number={element.phone}
          email={element.email} />

      })}

      {contacts.forEach(element => {
        return <Card name={element.name}
          image={element.imgURL}
          number={element.phone}
          email={element.email} />
      })}
    </div>
  );
}

export default App;
