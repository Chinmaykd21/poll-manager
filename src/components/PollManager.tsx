import React, { useState } from "react";
import { Vote } from "./Vote";
import { Results } from "./Results";
import { poll as pollData } from "../poll";

export const PollManager: React.FC = () => {
  const [poll, setPoll] = useState(pollData);
  const [winner, setWinner] = useState<string | null>(null);

  const handleVote = (optionId: number) => {
    setPoll((prev) => ({
      ...prev,
      options: prev.options.map((option) =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      ),
    }));
  };

  const declareWinner = () => {
    const sortedOptions = [...poll.options].sort((a, b) => b.votes - a.votes);
    if (sortedOptions[0].votes === sortedOptions[1].votes) {
      setWinner("It's a tie!");
    } else {
      setWinner(
        `${sortedOptions[0].text} wins by ${
          sortedOptions[0].votes - sortedOptions[1].votes
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
        winner={winner}
        declareWinner={declareWinner}
        winnerDeclared={winnerDeclared}
      />
    </div>
  );
};
