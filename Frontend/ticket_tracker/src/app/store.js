import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import viewReducer from '../features/navBar/viewSlice';
import dataListReducer from '../features/dataList/dataListSlice';
import allProjectsReducer from '../features/projectPage/allProjectsSlice';
import allTicketsReducer from '../features/ticketPage/allTicketsSlice';
import allUsersReducer from '../features/usersPage/allUsersSlice';
import thisUserReducer from '../features/usersPage/thisUserSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    view: viewReducer,
    dataList: dataListReducer,
    allProjects: allProjectsReducer,
    allTickets: allTicketsReducer,
    allUsers: allUsersReducer,
    thisUser: thisUserReducer,
  },
});
