import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
  
 
        const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        }

        return children;
        
        
}
