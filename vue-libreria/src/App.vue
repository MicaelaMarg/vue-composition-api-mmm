<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
 
      <nav class="navbar"> 
        <RouterLink class="link--navbar" to="/">Libros</RouterLink>
        <RouterLink class="link--navbar" to="/nuevoLibro">Nuevo Libro</RouterLink>
        
      </nav>
       <div class="descripcion-app mt-3 text-center">
        <p>
          Bienvenido/a al gestor de libros. Desde aquí podés ver los libros existentes, agregar nuevos o eliminarlos. Usá el botón "Nuevo Libro" para cargar tus títulos.
        </p>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>.navbar {
  background-color: #f8f9fa;
  margin: 10px auto;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 50px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.link--navbar {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 20px;
  transition: background-color 0.3s;
}

.link--navbar:hover {
  background-color: #e0e0e0;
}

.descripcion-app {
  max-width: 600px;
  margin: 0 auto;
  font-size: 0.95rem;
  color: #333;
}
.navbar {
  background-color: #343a40;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.link--navbar {
  text-decoration: none;
  padding: 10px 20px;
  color: white;
}
.link--navbar:hover {
  color: #020100;
}



</style>
