import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useAnswerStore = create(
  persist<{
    answers: string[];
    increasePopulation: (answers: string[]) => void;
  }>(
    (set) => ({
      answers: [],
      increasePopulation: (list) =>
        set((state) => {
          return {
            answers: list,
          };
        }),
    }),
    { name: 'ANSWERS_MBTI' },
  ),
);
export default useAnswerStore;
