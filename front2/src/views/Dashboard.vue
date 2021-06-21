<template>

  <div class="dashboard">
       
      <Sidebar />
   
    
    <div class="content">
        <div class="header">
            <div id="header-item-menu" class="header_item">Dashboard</div>
            <div id="header-user-menu" class="header_item">Daniel Páramo </div>
            
        </div>
        <div class="div_btn">
            <button class="btn btn-primary" v-on:click="nuevo()">
               + Nuevo Usuario
            </button>
      </div>
        <div class="content-table">
            <h4 class="spn_users">Users</h4>
            <table class="table table-hover">
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
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      ListaUsuarios: null
    };
  },
  components: {
    Sidebar
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
    .header{
        width: 90%;
        position: relative;
        background-color: white;
        height: 80px;
        left:5%;
        margin-bottom:20px;
        vertical-align: center;
        font-size: 1.5em;
        color:gray
    }
    .header_item{
        display: inline-block;
        padding-top: 20px;
    }
    #header-item-menu{
        text-align: left;
        position: relative;
        left: 2%;
        width: 80%;
    }
    #header-user-menu{
        width: 20%;
    }
    .content{
        background-color: #e9e9e9;
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
    }
    .spn_users{
        margin-left: 2%;
        text-align: left;
        
    }
  
</style>