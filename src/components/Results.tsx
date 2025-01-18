interface Option {
  id: number;
  text: string;
  votes: number;
}

interface ResultsProps {
  options: Option[];
  winner: string | null;
  declareWinner: () => void;
  winnerDeclared: boolean;
}

export const Results: React.FC<ResultsProps> = ({
  options,
  winner,
  declareWinner,
  winnerDeclared,
}) => {
  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="mt-4 text-center">
      {options.map((option) => (
        <p key={option.id}>
          {option.text} Votes: {option.votes}
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
