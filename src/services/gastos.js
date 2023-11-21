
import axios from 'axios';
import Cookie from 'js-cookie';
import Gasto from '../models/Gasto';

const API_URL = 'http://localhost:8000/api'; // Replace with your localhost URL

// Function to make a GET request
export const getToken = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    return error.response
  }
};

export const authToken = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/auth`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  }
  catch (error) {
    Cookie.remove('token');
    console.error('Error:', error);
  }
};

// Function to make a POST request
export const createGasto = async (fecha_gasto, id_usuario , data) => {
  try {
    const response = await axios.post(`${API_URL}/gasto/add`, 
      {
        
        id_usuario,
        ...data,
        fecha_gasto,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getSumOfGastosByMonthAndUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/gasto/sum/month/${userId}`);
    const gastosData = response.data[0];
    const gastos = new Gasto(gastosData.total_monto, gastosData.month);
    return gastos;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export const getFijoGastosByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/gasto/fijos/${userId}`);
    const gastosData = response.data;
    const gastos = gastosData.map((gasto) => new Gasto(gasto.monto_gasto, gasto.fecha_gasto, gasto.tipo_gasto, gasto.descripcion_gasto, gasto.id_gasto));
    return gastos;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to make a PUT request
export const putData = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/endpoint/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Function to make a DELETE request
export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/endpoint/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
