<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";


export default {
  setup() {
    const router = useRouter();

    const nuevoLibro = ref({
      titulo: "",
      autor: "",
      ISBN: "",
      genero: "",
      disponibilidad: "",
    });

      const limpiarFormulario = () => {
      nuevoLibro.value = {
        titulo: "",
        autor: "",
        ISBN: "",
        genero: "",
        disponibilidad: "",
      };
    };
    
const guardarLibro = async (finalizar) => {
  // Validación: verificar que todos los campos estén completos
  const { titulo, autor, ISBN, genero, disponibilidad } = nuevoLibro.value;

  if (
    !titulo.trim() ||
    !autor.trim() ||
    !ISBN.trim() ||
    !genero.trim() ||
    !disponibilidad.trim()
  ) {
    alert("Por favor, completá todos los campos antes de guardar.");
    return; // no sigue si hay campos vacíos
  }

  try {
    await axios.post("http://localhost:3000/libros", nuevoLibro.value);
    alert("Libro guardado exitosamente");

    if (finalizar) {
      router.push("/");
    } else {
      limpiarFormulario();
    }
  } catch (error) {
    console.error("Error al guardar libro:", error);
    alert("No se pudo guardar el libro");
  }
};


    const cancelar = () => {
      router.push("/");
    };

    

    return {
      nuevoLibro,
      guardarLibro,
      cancelar
    };
  },
};
</script>

<template>
  <main class="container mt-5">
    <form @submit.prevent="CrearLibro" class="container mt-4">

      <div class="card shadow-lg">
        <div class="card-header bg-dark text-white">
          <h4 class="mb-0">Crear Nuevo Libro</h4>
        </div>
        <div class="card-body"> 
          <div class="mb-4"> 
            <label class="form-label fw-bold mb-2" for="titulo">Título</label>
            <input
              name="titulo"
              v-model="nuevoLibro.titulo"
              type="text"
              required
              placeholder="Título del libro"
              class="form-control" 
            />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold mb-2" for="autor">Autor</label>
            <input
              name="autor"
              v-model="nuevoLibro.autor"
              type="text"
              required
              placeholder="Nombre del autor"
              class="form-control"
            />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold mb-2" for="isbn">ISBN</label>
            <input
              name="isbn"
              v-model="nuevoLibro.ISBN"
              type="text"
              required
              placeholder="Código ISBN"
              class="form-control"
            />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold mb-2" for="genero">Género</label>
            <input
              name="genero"
              v-model="nuevoLibro.genero"
              type="text"
              required
              placeholder="Ej. Ficción, Historia"
              class="form-control"
            />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold mb-2" for="disponibilidad">Disponibilidad</label>
            <input
              name="disponibilidad"
              v-model="nuevoLibro.disponibilidad"
              type="text"
              required
              placeholder="Disponible/No disponible"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4 gap-3"> 
         <button class="btn btn-dark btn-sm rounded-pill px-3" @click="guardarLibro(true)">
        Guardar y finalizar
      </button>
        <button class="btn btn-dark btn-sm rounded-pill px-3" @click="guardarLibro(false)">
        Guardar y agregar otro libro
      </button>
        <button class="btn btn-dark btn-sm rounded-pill px-3" @click="cancelar">
    Cancelar
  </button>
      </div>
    </form>
  </main>
</template>

<style>

.form-label {
  margin-bottom: 0.5rem;
}
</style>
<style></style>
