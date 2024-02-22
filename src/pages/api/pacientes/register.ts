import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();

  const nombres = formData.get("nombre")?.toString();
  const apellido_paterno = formData.get("apellido_paterno")?.toString();
  const apellido_materno = formData.get("apellido_materno")?.toString();
  const rut = formData.get("rut");
  const telefono = formData.get("telefono");
  const correo = formData.get("correo")?.toString();
  const nacimiento = formData.get("nacimiento");
  const sexo = formData.get("sexo")?.toString();

  if (!nombres || !apellido_paterno || !apellido_materno || !rut || !telefono || !correo || !nacimiento || !sexo) {
    return new Response("Todos los campos son obligatorios", { status: 400 });
  }

  
const { data, error } = await supabase
.from('pacientes')
.insert([
  { 
    nombres: nombres,
    apellido_paterno: apellido_paterno,
    apellido_materno: apellido_materno,
    rut: rut,
    telefono: telefono,
    correo: correo,
    nacimiento: nacimiento,
    sexo: sexo
  },
])
.select()

  console.log(data);

  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return redirect("/");
};

          