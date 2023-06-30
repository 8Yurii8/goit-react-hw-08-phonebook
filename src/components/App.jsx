import React, { lazy, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './Navigations';

import { PrivateRoute, PublicRoute } from 'store/privatePublic';

const Home = lazy(() => import('./Home'));
const Register = lazy(() => import('./User/Register'));
const Login = lazy(() => import('./User/Login'));
const Phonebook = lazy(() => import('./Phonebook/Phonebook'));

export const App = () => {
  return (
    <>
      <Toaster />
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
