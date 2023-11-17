import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from "@mui/material";
import Navbar from "./../../components/Navbar";
import EncabezadoLeft from "../../components/admin/EncabezadoLeft";
import { useNavigate } from 'react-router-dom';

import BtnLog from "../../components/admin/BtnLog";
import { useForm } from "react-hook-form";
import InputNombre from '../../components/admin/InputNombre';
import InputApellido from '../../components/admin/InputApellido';
import InputUsuario from '../../components/admin/InputUsuario';
import InputPasswd from '../../components/admin/InputPasswd';

const encabezado = "Registrarse";

export default function Register() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            nombre,
            apellido,
            usuario,
            password,
        };

        const token = sessionStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token,
        };

        try {
            const response = await axios.post('http://localhost:8081/usuarios', userData, { headers });
            console.log(response.data.message);
            console.log('Todo bien');
        } catch (error) {
            console.error(error);
            console.log('No jala');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/usuarios');
                // No estás utilizando la respuesta, considera si realmente necesitas setUsuarios
            } catch (error) {
                console.error('Error al obtener los elementos', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('token') !== null;
        if (!isAuthenticated) {
            navigate('/IniciarSesion');
        }
    }, [navigate]);

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
