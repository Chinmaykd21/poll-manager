interface Option {
  id: number;
  text: string;
}

interface ResultsProps {
  options: Option[];
  votes: { [key: number]: number };
  winner: string | null;
  declareWinner: () => void;
  winnerDeclared: boolean;
}

export const Results: React.FC<ResultsProps> = ({
  options,
  votes,
  winner,
  declareWinner,
  winnerDeclared,
}) => {
  const totalVotes = Object.values(votes).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className="mt-4 text-center">
      {options.map((option) => (
        <p key={option.id}>
          {option.text} Votes: {votes[option.id]}
        </p>
      ))}
      {winner ? <p className="mt-4">{winner}</p> : null}
      <button
        className="btn mt-4"
        onClick={declareWinner}
        disabled={totalVotes === 0 || winnerDeclared}
      >
        View Winner
      </button>
    </div>
  );
};
