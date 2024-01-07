import { useCallback, useEffect, useState } from 'react';
import apis from '@/apis';
import { MBTI_URL } from '@/constants/global';
export type AnswersKey = 'nature' | 'emotion' | 'workplace';
type answersParams = {
  title: string;
  from: number;
  length: number;
  cardImgSrc: string;
  figureImgSrc: string;
  prev?: AnswersKey;
  next?: AnswersKey;
};
export const answersSection: Record<AnswersKey, answersParams> = {
  nature: {
    title: '性格测试',
    from: 0,
    length: 27,
    cardImgSrc: `${MBTI_URL}images/answersV2/mbtity2/card_love.png`,
    figureImgSrc: `${MBTI_URL}images/answersV2/mbtity2/cartoon_figure_part_one.png`,
    next: 'emotion',
  },
  emotion: {
    title: '恋爱测试',
    from: 27,
    length: 32,
    cardImgSrc: `${MBTI_URL}images/answersV2/mbtity2/card_career.png`,
    figureImgSrc: `${MBTI_URL}images/answersV2/mbtity2/cartoon_figure_part_two.png`,
    prev: 'nature',
    next: 'workplace',
  },
  workplace: {
    title: '职业测试',
    from: 59,
    length: 34,
    cardImgSrc: `${MBTI_URL}images/answersV2/mbtity2/card_character.png`,
    figureImgSrc: `${MBTI_URL}images/answersV2/mbtity2/cartoon_figure_part_three.png`,

    prev: 'emotion',
  },
};
const useQuestionConfig = () => {
  const [questionConfig, setQuestionConfig] = useState<MbtiApi.QuestionItem[]>([]);
  const init = async () => {
    try {
      const res = await apis.mbtiApi.getQuestions();
      setQuestionConfig(res);
      // alert(JSON.stringify(res));
    } catch (e) {
      // alert(JSON.stringify(e));
    }
  };
  const getConfig = useCallback(
    (key: AnswersKey) => {
      const { from, length, ...rest } = answersSection[key];
      return {
        list: [...questionConfig].splice(from, length),
        length,
        from,
        ...rest,
      };
    },
    [questionConfig],
  );

  const getLists = () => {
    return questionConfig;
  };
  useEffect(() => {
    init();
  }, []);
  return {
    getConfig,
    getLists,
  };
};
export default useQuestionConfig;
