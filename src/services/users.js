
import axios from 'axios';
import Cookie from 'js-cookie';

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
export const createUser = async (nombre_usuario, apellido_usuario, correo_usuario, contrasena_usuario) => {
  try {
    const response = await axios.post(`${API_URL}/usuario/create`, 
      {
        nombre_usuario,
        apellido_usuario,
        correo_usuario,
        contrasena_usuario
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

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
