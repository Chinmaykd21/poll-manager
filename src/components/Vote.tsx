interface Option {
  id: number;
  text: string;
}

interface VoteProps {
  options: Option[];
  handleVote: (optionId: number) => void;
  winnerDeclared: boolean;
}

export const Vote: React.FC<VoteProps> = ({
  options,
  handleVote,
  winnerDeclared,
}) => {
  return (
    <div className="flex justify-center mt-4">
      {options.map((option) => (
        <button
          key={option.id}
          className="btn ml-4"
          onClick={() => handleVote(option.id)}
          disabled={winnerDeclared}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
