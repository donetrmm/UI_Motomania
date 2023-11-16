import React from "react";
import { Grid, Button, TextField } from "@mui/material";
import Navbar from "./../../components/Navbar";
import EncabezadoLeft from "../../components/admin/EncabezadoLeft";
import InputLog from "../../components/admin/InputLog";
import BtnLog from "../../components/admin/BtnLog";
import { useForm } from "react-hook-form";

const encabezado = "Iniciar Sesion";
const inputNomApe = [
  { label: "Nombre", type: "text" },
  { label: "Apellido", type: "text" },
];
const inputUserpass = [
  { label: "Usuario", type: "text" },
  { label: "Password", type: "password" },
];
export default function Login() {
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
            onSubmit={handleSubmit((values) => {
              console.log(values);
            })}
          >
            <Grid item={12}>
              <TextField
                label="Nombre"
                type="text"
                {...register("username", { required: true })}
                sx={{m:'10px'}}
              />

              <TextField
                label="apellido"
                type="text"
                {...register("userapellido", { required: true })}
                sx={{m:'10px'}}
              />
            </Grid>
            <Grid item={12}>
            <TextField
                label="Usuario"
                type="text"
                {...register("useruser", { required: true })}
                sx={{m:'10px'}}
              />

              <TextField
                label="Contraseña"
                type="password"
                {...register("userpasswd", { required: true })}
                sx={{m:'10px'}}
              />
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
