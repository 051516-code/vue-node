import moongosse from "mongoose";

try {
  await moongosse.connect(process.env.URI_MONGO);
  console.log("DB connect ok 😘");
} catch (error) {
  console.log("Error de conexion a mongo DB:" + error);
}
