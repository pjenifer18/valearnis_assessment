import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from '../features/questions/questionsSlice';
import { api } from './services/baseApiSetup';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    questions: questionsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(api.middleware),
});
