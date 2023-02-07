import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
    state: 'idle'
};

export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        setSelectedOption: (state, action) => {
            state.questions[action.payload.index].selectedAnswer = action.payload.selectedAnswer;
            state.questions[action.payload.index].options[action.payload.optionIndex].checked = action.payload.checked
        },
    },
});

export const { setQuestions, setSelectedOption } = questionSlice.actions;

export default questionSlice.reducer;
