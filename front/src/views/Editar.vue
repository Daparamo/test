<template>
        <div class="dashboard">
           <Sidebar />
          
            <div class="content">
                <Header />
                <div class="content-table">
                  <form action="" class="form-horizontal" @submit="checkForm">
                      <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Nombre</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.Nombre">
                        </div>
                      </div>
                      <div class="form-group left row">
                        <div class="col">
                              <label for="" class="control-label col-sm-3">Apellido</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="Apellido" id="Apellido" v-model="form.Apellido">
                              </div>
                          </div>
                          <div class="col">
                            <label for="" class="control-label col-sm-5">Email</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="Email" id="Email" v-model="form.Email">
                            </div>
                          </div> 
                      </div>
                      <div class="form-group left row">
                          <div class="col">
                              <label for="" class="control-label col-sm-2">Direccion</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="Direccion" id="Direccion" v-model="form.Direccion">
                              </div>
                            </div>
                            <div class="col">
                                <label for="" class="control-label col-sm-2">Compañia</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="Compañia" id="Compañia" v-model="form.Compania">
                                </div>
                          </div>
                      </div>
                      


                      <div class="form-group">
                        <button type="button" class="btn btn-primary mr-5" v-on:click="editar()" >Editar</button>
                        <button type="button" class="btn btn-danger margen mr-5" v-on:click="eliminar()" >Eliminar</button>
                        <button type="button" class="btn btn-dark margen mr-5" v-on:click="salir()"  >Salir</button>
                      </div> 
                  </form>
                </div>
            </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
  name:"Editar",
  components:{
    Sidebar,
    Header
  },
  data:function(){
    return {
      errors:[],
        form:{
          "id":"",
          "Nombre" : "",
          "Apellido": "", 
          "Email" : "",
          "Direccion":"",
          "Compañia" :""
        }
    }
  },
  methods:{
      editar(){
        if(this.checkForm()){
         
          axios.put("http://localhost:3000/"+this.form.id,this.form)
          .then( data =>{
              console.log(data);
              this.makeToast("Hecho", "Usuario Guardado", "success");
              setTimeout(() => {
                this.$router.push("/dashboard");
              }, 1000);
              //
          }).catch( err=>{
            console.log(err)
          })
          
        }
        else{
          for(let error in this.errors){
            this.makeToast("Ö Ups! ", this.errors[error], "danger");
          }
        }
      },
      salir(){
        this.$router.push("/dashboard");
      },
      eliminar(){
        axios.delete("http://localhost:3000/" + this.form.id)
        .then( datos => {
            console.log(datos);
           this.$router.push("/dashboard");
        });

      },

      checkForm:function(){
        this.errors = [];
        if (!this.form.Nombre) {
          this.errors.push("El Nombre es obligatorio.");
        }
        if (!this.form.Apellido) {
          this.errors.push("El Apellido es obligatorio.");
        }
        if (!this.form.Email) {
          this.errors.push('El correo electrónico es obligatorio.');
        } else if (!this.validEmail(this.form.Email)) {
          this.errors.push('El correo electrónico debe ser válido.');
        }
        if (!this.form.Direccion) {
          this.errors.push("La Direccion es obligatoria.");
        }
        if (!this.form.Compania) {
          this.errors.push("La Compañia es obligatoria.");
        }
        if (!this.errors.length) {
          return true;
        }
        else{
          return false
        }
      },
      validEmail: function (email) {
       let re = /^\S+@\S+\.\S+$/;
       return re.test(email);
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
  
  mounted:function(){
      this.form.id = this.$route.params.id;
      axios.get("http://localhost:3000/"+ this.form.id)
      .then( datos => {
        //console.log(datos)
        this.form.Nombre = datos.data.Nombre;
        this.form.Apellido = datos.data.Apellido;
        this.form.Email = datos.data.Email;
        this.form.Direccion = datos.data.Direccion;
        this.form.Compania = datos.data.Compania;
        //console.log(this.form);
      })
  }  
}
</script>
<style scoped>
.left {
  text-align: left;
}
.margen {
  margin-left: 15px;
  margin-right: 15px;
}
.dashboard {
  display: grid;
  grid-template-columns: 1fr 6fr;
  background-color: white;
  height: 100hv;
  widows: 100vw;
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
</style>