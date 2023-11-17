import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Button, TextField } from "@mui/material";
import Navbar from "./../../components/Navbar";
import EncabezadoLeft from "../../components/admin/EncabezadoLeft";

import BtnLog from "../../components/admin/BtnLog";
import { useForm } from "react-hook-form";
import InputNombre from '../../components/admin/InputNombre';
import InputApellido from '../../components/admin/InputApellido';
import InputUsuario from '../../components/admin/InputUsuario';
import InputPasswd from '../../components/admin/InputPasswd';

const encabezado = "Registrarse";

export default function Register() {
    const [nombre, setNombre] = useState([]);
    const [apellido, setApellido] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [password, setPassword] = useState([]);

    const [usuarios, setUsuarios] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8081/usuarios');
            setUsuarios(response.data.usuarios);
          } catch (error) {
            console.error('Error al obtener los elementos', error);
          }
        };
        fetchData();
      }, []);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const userData = {
          nombre,
          apellido,
          usuario,
          password,
        };

        const headers = {
            'Content-Type': 'application/json',
            Authorization:
              "", // Reemplaza con tu token
          };
    
        axios
          .post('http://localhost:8081/usuarios', {headers} , userData)
          .then((response) => {
            console.log(response.data.message);
            console.log('to bien')
          })
          .catch((error) => {
            console.error(error);
            console.log('NO JALO')
          });

    }
    return (
      <>
        <Navbar />
        <main>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid",
              marginTop: "20px",
              flexDirection: "column",
            }}
          >
            <EncabezadoLeft encabezado={encabezado} />
            <form onSubmit={handleSubmit}>
              <Grid item={12}>
              <InputNombre nombre={nombre} setNombre={setNombre} />
              <InputApellido apellido={apellido} setApellido={setApellido} />
         
              </Grid>
              <Grid item={12}>
              <InputUsuario usuario={usuario} setUsuario={setUsuario} />
              <InputPasswd password={password} setPassword={setPassword} />
   
              </Grid>
  
              <Grid item={12}>
                <BtnLog />
              </Grid>
            </form>
          </Grid>
        </main>
      </>
    );
}
