import { configureStore } from '@reduxjs/toolkit';
import counterReducer from  './reducer/counter';
import authReducer from  './reducer/auth';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
      },
  })

export default store