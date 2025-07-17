<script>
import axios from "axios";

import { ref, onMounted, computed } from "vue";

export default {
  setup() {

    onMounted(() => {
      listarLibros();
    });

    const libros = ref([]);
    const filtro = ref("");

    const listarLibros = async () => {
      try {
        const response = await axios.get("http://localhost:3000/libros");
        libros.value = response.data;
        console.log(libros.value);
      } catch (error) {
        console.log("error al listar libros", error);
      }
    };
    const eliminarLibro = async (id, titulo) => {
      const confirmDelete = window.confirm(
        `¿Estas seguro de eliminar el libro ? ${titulo}`
      );
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:3000/libros/${id}`);
          listarLibros();
        } catch (error) {
          console.log("error al eliminar libro", error);
        }
      }
    };

     const librosFiltrados = computed(() => {
      if (!filtro.value) return libros.value;
      return libros.value.filter((libro) =>
        (libro.titulo + " " + libro.autor)
          .toLowerCase()
          .includes(filtro.value.toLowerCase())
      );
    });

   

    return {
      libros,
      filtro,
      librosFiltrados,
      listarLibros,
      eliminarLibro
    };
  },
};
</script>

<template>

   <div class="container mt-5">
   <h3 class="mb-4 text-center">Listado de Libros</h3>

    <!-- Filtro -->
    <div class="mb-3">
      <input
        v-model="filtro"
        type="text"
        class="form-control"
        placeholder="Buscar por título o autor..."
      />
    </div>

  
    

    <table class="table table-striped table-bordered shadow rounded">
      <thead class="table-dark text-center">
        <tr>
          <th>Título</th>
          <th>ISBN</th>
          <th>Género</th>
          <th>Precio</th>
          <th>Disponibilidad</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="libro in librosFiltrados" :key="libro.id">
          <td>{{ libro.titulo }}</td>
          <td>{{ libro.ISBN }}</td>
          <td>{{ libro.genero }}</td>
          <td>${{ libro.precio }}</td>
          <td>{{ libro.disponibilidad }}</td>
          <td class="text-center">
            <button class="btn btn-danger btn-sm" @click="eliminarLibro(libro.id, libro.titulo)">
              <i class="bi bi-trash"></i> Eliminar
            </button>

            <RouterLink
              :to="{ path: 'editarLibro/' + libro.id }"
              class="btn btn-primary btn-sm ms-2"
            >
              <i class="bi bi-pencil-square"></i> Editar
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>


<style></style>
