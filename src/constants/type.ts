declare namespace MbtiApi {
  type QuestionItem = {
    answer1: string;
    answer2: string;
    id: number;
    question: string;
    type1: string;
    type2: string;
  };
  type SubmitParams = {
    tsDeviceId: string;
    choice: string[];
    productId: number;
  };
  type SubmitResponse = {
    name: string;
    orderId: string;
  };
  type ResultResponse = {
    mark: number;
    type: string;
    dimensionScore: Record<string, string>;
    name: string;
    alias: string;
    enName: string;
    proportion: string;
    disposition: string;
    personality: string;
    similar: string;
    merit: string;
    weakness: string;
    emotion: string;
    work: string;
    career: string;
  };
}
