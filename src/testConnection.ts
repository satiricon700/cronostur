import { supabase } from './services/supabaseClient';

export async function probarConexion() {
  console.log("Iniciando prueba de conexión...");
  
  try {
    const { data, error } = await supabase
      .from('items_reservables') // Asegúrate de que esta tabla exista en tu panel de Supabase
      .select('*')
      .limit(1);

    if (error) {
      console.error("❌ Error de conexión:", error.message);
    } else {
      console.log("✅ ¡Conexión exitosa! Datos recibidos:", data);
    }
  } catch (err) {
    console.error("❌ Error inesperado:", err);
  }
}