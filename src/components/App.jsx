import Phonebook from './Phonebook/Phonebook';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Register } from './User/Register';
import { Login } from './User/Login';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Phonebook />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
