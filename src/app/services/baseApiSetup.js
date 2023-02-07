import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constants } from "../utilities/constants";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${constants.BASE_URL}` }),
  tagTypes: ["Questions"],
  reducerPath: "baseApi",
  endpoints: (build) => ({
    getQuestions: build.query({
      query: () => "/questions",
      transformResponse: (questions) =>
        questions.map((question) => {
          let options = [...question.incorrectAnswers, question.correctAnswer];
          let tmpArr = [];
          options.forEach((option) => tmpArr.push({value: option, checked: false}));
          console.log("redis api", tmpArr);
          return {
            ...question,
            options: tmpArr,
            selectedAnswer: "",
          };
        }),
    }),
  }),
});
