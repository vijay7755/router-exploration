import { configureStore } from '@reduxjs/toolkit';
import counterReducer from  './reducer/counter';

const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
  })

export default store