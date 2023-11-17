import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import Navbar from "./../../components/Navbar";
import EncabezadoLeft from "../../components/admin/EncabezadoLeft";


import { useForm } from "react-hook-form";
import InputNombre from "../../components/admin/InputNombre";
import InputApellido from "../../components/admin/InputApellido";
import InputUsuario from "../../components/admin/InputUsuario";
import InputPasswd from "../../components/admin/InputPasswd";

const encabezado = "Iniciar Sesion";

export default function Login() {
  const [nombre, setNombre] = useState([]);
  const [apellido, setApellido] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [password, setPassword] = useState([]);
  const { register, handleSubmit } = useForm();
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
          <form
     
          >
            <Grid item={12}>
              <InputUsuario usuario={usuario} setUsuario={setUsuario} />
              <InputPasswd password={password} setPassword={setPassword} />
            </Grid>

            <Grid item={12}>
              <Button variant="outlined" type="submit" sx={{ m: "20px" }}>
                Iniciar Sesion
              </Button>
            </Grid>
          </form>
        </Grid>
      </main>
    </>
  );
}
