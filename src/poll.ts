export interface Poll {
  id: number;
  question: string;
  options: { id: number; text: string }[];
}

export const poll: Poll = {
  id: 1,
  question: "Who is your favorite superhero?",
  options: [
    { id: 1, text: "Superman" },
    { id: 2, text: "Batman" },
  ],
};
