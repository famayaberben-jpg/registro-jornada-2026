import React, { createContext, useContext, useState, useEffect } from 'react';
import * as db from '../services/DatabaseService';

const JornadaContext = createContext();

export const JornadaProvider = ({ children }) => {
  const [jornadas, setJornadas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inicializar y cargar jornadas
  useEffect(() => {
    const initAndLoad = async () => {
      try {
        setLoading(true);
        await db.initDatabase();
        const data = await db.getAllJornadas();
        setJornadas(data || []);
      } catch (error) {
        console.error('Error inicializando:', error);
      } finally {
        setLoading(false);
      }
    };

    initAndLoad();
  }, []);

  const addJornada = async (fecha, horasTrabajadas) => {
    try {
      await db.insertJornada(fecha, horasTrabajadas);
      const data = await db.getAllJornadas();
      setJornadas(data || []);
    } catch (error) {
      console.error('Error agregando jornada:', error);
      throw error;
    }
  };

  const updateJornada = async (id, fecha, horasTrabajadas) => {
    try {
      await db.updateJornada(id, fecha, horasTrabajadas);
      const data = await db.getAllJornadas();
      setJornadas(data || []);
    } catch (error) {
      console.error('Error actualizando jornada:', error);
      throw error;
    }
  };

  const deleteJornada = async (id) => {
    try {
      await db.deleteJornada(id);
      const data = await db.getAllJornadas();
      setJornadas(data || []);
    } catch (error) {
      console.error('Error eliminando jornada:', error);
      throw error;
    }
  };

  return (
    <JornadaContext.Provider
      value={{
        jornadas,
        loading,
        addJornada,
        updateJornada,
        deleteJornada,
      }}
    >
      {children}
    </JornadaContext.Provider>
  );
};

export const useJornada = () => {
  const context = useContext(JornadaContext);
  if (!context) {
    throw new Error('useJornada debe usarse dentro de JornadaProvider');
  }
  return context;
};
