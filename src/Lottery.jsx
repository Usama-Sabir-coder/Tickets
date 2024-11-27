import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyhandler = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyhandler}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulation, you Won!"}</h3>
    </div>
  );
}
