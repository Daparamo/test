<template>
  <div>
    <div class="dashboard">
      <Sidebar />

      <div class="content">
        <Header />
        <div class="content-table">
          <form action="" class="form-horizontal">
            <div class="form-group left">
              <label for="" class="control-label col-sm-2">Nombre</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="Nombre"
                  id="Nombre"
                  v-model="form.Nombre"
                />
              </div>
            </div>
            <div class="form-group left row">
              <div class="col">
                <label for="" class="control-label col-sm-3">Apellido</label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control"
                    name="Apellido"
                    id="Apellido"
                    v-model="form.Apellido"
                  />
                </div>
              </div>
              <div class="col">
                <label for="" class="control-label col-sm-5">Email</label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control"
                    name="Email"
                    id="Email"
                    v-model="form.Email"
                  />
                </div>
              </div>
            </div>
            <div class="form-group left row">
              <div class="col">
                <label for="" class="control-label col-sm-3">Direccion</label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control"
                    name="Direccion"
                    id="Direccion"
                    v-model="form.Direccion"
                  />
                </div>
              </div>
              <div class="col">
                <label for="" class="control-label col-sm-5">Compañia</label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control"
                    name="Compañia"
                    id="Compañia"
                    v-model="form.Compania"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <button
                type="button"
                class="btn btn-primary mr-5"
                v-on:click="guardar()"
              >
                Guardar
              </button>
              <button
                type="button"
                class="btn btn-dark margen mr-5"
                v-on:click="salir()"
              >
                Salir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

import axios from "axios";
export default {
  name: "Nuevo",
  data: function () {
    return {
      form: {
        Nombre: "",
        Apellido: "",
        Email: "",
        Direccion: "",
        Compañia: "",
      },
    };
  },
  components: {
    Sidebar,
    Header,
  },
  methods: {
    guardar() {
      if(this.form){
        axios
          .post("http://localhost:3000/", this.form)
          .then((data) => {
            console.log(data);
            this.makeToast("Hecho", "Usuario creado", "success");
            //this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            this.makeToast("Error", "Error al guardar", "error");
          });
       }
       else{
         console.log("debes llenar el formulario")
       }
    },
    salir() {
      this.$router.push("/");
    },
    makeToast(titulo, texto, tipo) {
      this.toastCount++;
      this.$bvToast.toast(texto, {
        title: titulo,
        variant: tipo,
        autoHideDelay: 5000,
        appendToast: true,
      });
    },
  },
};
</script>
<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 6fr;
  background-color: white;
  block-size: max-content;
}
.content {
  background-color: #f5f6fa;
  height: 1300px;
  width: 100%;
}
.content-table {
  background-color: white;
  position: relative;
  left: 5%;
  width: 90%;
  border-radius: 10px;
  padding: 1%;
}
.left {
  text-align: left;
}
</style>