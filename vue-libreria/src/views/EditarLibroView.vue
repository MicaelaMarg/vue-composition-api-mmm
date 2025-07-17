<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter} from "vue-router";  

export default {
  setup() {
    
    const router = useRouter();
  
    const editarLibro = ref({
     
      titulo: "",
      autor: "",
      ISBN: "",
      genero: "",
      disponibilidad: "",
    });

    const cargarLibro = async () => {
        const libroId = useRoute().params.id;
        try {
            const response = await axios.get(`http://localhost:3000/libros/${libroId}`);
            editarLibro.value = response.data;
            console.log("Libro cargado para editar:", editarLibro.value);
        } catch (error) {
            console.error("Error al cargar el libro para editar:", error);
        }
    };

    const actualizarLibro = async () => {
      
        try{
await axios.put(`http://localhost:3000/libros/${editarLibro.value.id}`, editarLibro.value); 
setTimeout(() => {
    alert("Libro editado con exito");
},200);
router.push("/");
        }catch(error){
            console.error("Error al editar el libro:", error);
        }
    };

onMounted (() => {
  cargarLibro();
});

    return {
      editarLibro,
      actualizarLibro,
      cargarLibro
    };
  }
};
</script>
<template>
  <main class="container mt-5">
    <div class="card shadow">
      <div class="card-header bg-dark text-white">
        <h4 class="mb-0">Crear Nuevo Libro</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="actualizarLibro">
          <div class="row">
            <div class="mb-3 col-md-6">
              <label for="titulo" class="form-label">Título</label>
              <input
                id="titulo"
                v-model="editarLibro.titulo"
                type="text"
                required
                placeholder="Título del libro"
                class="form-control"
              />
            </div>

            <div class="mb-3 col-md-6">
              <label for="autor" class="form-label">Autor</label>
              <input
                id="autor"
                v-model="editarLibro.autor"
                type="text"
                required
                placeholder="Nombre del autor"
                class="form-control"
              />
            </div>

            <div class="mb-3 col-md-6">
              <label for="isbn" class="form-label">ISBN</label>
              <input
                id="isbn"
                v-model="editarLibro.ISBN"
                type="text"
                required
                placeholder="Código ISBN"
                class="form-control"
              />
            </div>

            <div class="mb-3 col-md-6">
              <label for="genero" class="form-label">Género</label>
              <input
                id="genero"
                v-model="editarLibro.genero"
                type="text"
                required
                placeholder="Ej. Ficción, Historia"
                class="form-control"
              />
            </div>

            <div class="mb-3 col-md-6">
              <label for="disponibilidad" class="form-label ">Disponibilidad</label>
              <input
                id="disponibilidad"
                v-model="editarLibro.disponibilidad"
                type="text"
                required
                placeholder="Disponible / No"
                class="form-control "
              />
            </div>
          </div>

          <div class="text-end">
            <button type="submit" class="btn btn-success bg-dark" >
              <i class="bi bi-check-circle "></i> Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style></style>
