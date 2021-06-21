<template>
        <div class="dashboard">
           <Sidebar />
          
            <div class="content">
                <form action="" class="form-horizontal">
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
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-danger margen" v-on:click="eliminar()" >Eliminar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>
            </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:"Editar",
  components:{
    Sidebar,
    //Footer
  },
  data:function(){
    return {
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
          axios.put("http://localhost:3000/"+this.form.id,this.form)
          .then( data =>{
              console.log(data);
          }).catch( err=>{
            console.log(err)
          })
      },
      salir(){
        this.$router.push("/");
      },
      eliminar(){
        axios.delete("http://localhost:3000/"+this.form.id)
        .then( datos => {
            console.log(datos);
           this.$router.push("/");
        });

      }
  },
  mounted:function(){
      this.form.id = this.$route.params.id;
      axios.get("http://localhost:3000/"+ this.form.id)
      .then( datos => {
        console.log(datos)
        this.form.Nombre = datos.data.Nombre;
        this.form.Apellido = datos.data.Apellido;
        this.form.Email = datos.data.Email;
        this.form.Direccion = datos.data.Direccion;
        this.form.Compania = datos.data.Compania;
        console.log(this.form);

      })
     
  }  
}
</script>
<style scoped>
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
 .dashboard{
        display:grid;
        grid-template-columns: 1fr 6fr;
        background-color: white;
        height: 100hv;
        widows: 100vw;
    }
    .content{
       background-color: white;
        position: relative;
        left: 25%;
        width: 50%;
        border-radius: 10px;
    }
</style>