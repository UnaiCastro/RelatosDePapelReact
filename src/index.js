import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import theme from './theme';
import {ThemeProvider} from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
  </React.StrictMode>
);

