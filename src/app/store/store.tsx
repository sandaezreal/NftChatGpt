import { configureStore } from '@reduxjs/toolkit'
import InputNewQuestion from '../features/InputNewQuestion'
import QuestionReducer from '../features/NewQuestion'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    posts: InputNewQuestion,
    users: usersReducer,
    Questions: QuestionReducer,
  },
})
