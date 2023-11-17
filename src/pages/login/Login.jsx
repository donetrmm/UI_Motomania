import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import Navbar from "./../../components/Navbar";
import EncabezadoLeft from "../../components/admin/EncabezadoLeft";
import { useForm } from "react-hook-form";
import InputUsuario from "../../components/admin/InputUsuario";
import InputPasswd from "../../components/admin/InputPasswd";
import axios from "axios";

const encabezado = "Iniciar Sesion";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit } = useForm();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8081/auth/login", {
        usuario,
        password,
      });

      const token = response.data.token;
      if (token) {
        sessionStorage.setItem("token", token);
        window.location.assign('/HomeAdmin');
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

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
          <form onSubmit={handleSubmit(handleLogin)}>
            <Grid item={12}>
              <InputUsuario
                usuario={usuario}
                setUsuario={setUsuario}
                {...register("usuario")}
              />
              <InputPasswd
                password={password}
                setPassword={setPassword}
                {...register("password")}
              />
            </Grid>

            <Grid item={12}>
              <Button variant="outlined" type="submit" sx={{ m: "20px" }}>
                Iniciar Sesión
              </Button>
            </Grid>
          </form>
        </Grid>
      </main>
    </>
  );
}
