import axios from 'axios';

import { ADDNEW_TODO, GETALL_TODO, TOOGLE_TODO, UPDATE_TODO, DELETE_TODO, TOOGLE_TAB } from './type';

const API_URL = 'http://localhost:8000';

export const addNewToDo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });
        dispatch({ type: ADDNEW_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling addNewToDo API', error.message);
    }
}


export const getAllToDos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({ type: GETALL_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling getToDos API', error.message);
    }
}


export const toogleToDo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({ type: TOOGLE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling toogleToDo API', error.message);
    }
}


export const updateToDo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`,{data});
        dispatch({ type: UPDATE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling updateToDo API', error.message);
    }
}


export const deleteToDo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);
        dispatch({ type: DELETE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling deleteToDo API', error.message);
    }
}

export const toogleTab = (tab) => async (dispatch) => {
    dispatch({type: TOOGLE_TAB, selected: tab})
}