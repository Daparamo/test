<template>

  <div class="dashboard">
       
      <Sidebar />
    <div class="content">
      <Header />
        <div class="div_btn">
            <button class="btn btn-primary btn-lg" v-on:click="nuevo()">
               + Nuevo Usuario
            </button>
      </div>
        <div class="content-table">
            <div>
              <div class="same_line div_users"><h4>Users</h4></div>
              <div class="same_line">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
              </div>
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <!-- <th scope="col">id</th> -->
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Compañia</th>
                    <th scope="col">Opciones</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="Usuario in ListaUsuarios" :key="Usuario.id">
                    <!-- <th scope="row">{{ Usuario.id }}</th> -->
                    <td v-on:click="editar(Usuario.id)" style="cursor:pointer;">{{ Usuario.Nombre }}</td>
                    <td>{{ Usuario.Apellido }}</td>
                    <td>{{ Usuario.Email }}</td>
                    <td>{{ Usuario.Direccion }}</td>
                    <td>{{ Usuario.Compania }}</td>
                    <td><a :href="'/todos/' + Usuario.id">Ver Todos</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      ListaUsuarios: null
    };
  },
  components: {
    Sidebar,
    Header
  },
  methods: {
    editar(id) {
      this.$router.push("/editar/" + id);
    },
    nuevo() {
      this.$router.push("/nuevo");
    },
  },
  mounted: function () {
    let direccion = "http://localhost:3000";
    axios.get(direccion).then((data) => {
      this.ListaUsuarios = data.data;
    });
  },
};
</script>
<style  scoped>
body{
    overflow: hidden!important;
}
    .dashboard{
        display:grid;
        grid-template-columns: 1fr 6fr;
        background-color: white;
        block-size: max-content;
    }
   
    .content{
        background-color: #f5f6fa;
        height: 1300px;
        width: 100%;
        
    }
    .div_btn{
        margin-bottom:20px; 
        position:relative; 
        left:5%;
        text-align: left;
    }
    .content-table{
        background-color: white;
        position: relative;
        left: 5%;
        width: 90%;
        border-radius: 10px;
        padding:1%;
    }
    .div_users{
        margin-left: 2%;
        text-align: left;
        width: 92%;
        cursor:default;
    }
    .same_line{
      position:relative;
      display: inline-block;
    }
    
</style>