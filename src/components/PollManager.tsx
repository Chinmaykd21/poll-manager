import React, { useState } from "react";
import { Vote } from "./Vote";
import { Results } from "./Results";
import { poll } from "../poll";

export const PollManager: React.FC = () => {
  const [votes, setVotes] = useState({
    [poll.options[0].id]: 0,
    [poll.options[1].id]: 0,
  });
  const [winner, setWinner] = useState<string | null>(null);

  const handleVote = (optionId: number) => {
    setVotes((prev) => ({ ...prev, [optionId]: prev[optionId] + 1 }));
  };

  const declareWinner = () => {
    const votesArray = Object.entries(votes);
    const option1Votes = votesArray[0][1];
    const option2Votes = votesArray[1][1];

    if (option1Votes === option2Votes) {
      setWinner("It's a tie!");
    } else if (option1Votes > option2Votes) {
      setWinner(
        `${poll.options[0].text} wins by ${
          option1Votes - option2Votes
        } vote(s)!`
      );
    } else {
      setWinner(
        `${poll.options[1].text} wins by ${
          option2Votes - option1Votes
        } vote(s)!`
      );
    }
  };

  const winnerDeclared = winner !== null;

  return (
    <div className="card">
      <h1 className="title text-center">{poll.question}</h1>
      <Vote
        options={poll.options}
        handleVote={handleVote}
        winnerDeclared={winnerDeclared}
      />
      <Results
        options={poll.options}
        votes={votes}
        winner={winner}
        declareWinner={declareWinner}
        winnerDeclared={winnerDeclared}
      />
    </div>
  );
};
