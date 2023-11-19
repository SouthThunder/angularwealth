
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Replace with your localhost URL

// Function to make a GET request
export const getToken = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    return response.data?.token;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Function to make a POST request
export const createUser = async (nombre_usuario, apellido_usuario, correo_usuario, contrasena_usuario) => {
  try {
    const response = await axios.post(`${API_URL}//usuario/create`, 
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
