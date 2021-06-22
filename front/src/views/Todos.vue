<template>
        <div class="dashboard">
            <Sidebar />

            <div class="content">
                <Header />
                 <!-- <div class="header">
                    <div id="header-item-menu" class="header_item">
                    <div id="icon_menu" class=header_item><img src="../assets/img/menu.png" alt="menu"></div>
                    <div class="header_item">Dashboard</div>
                    </div>
                    <div id="header-user-menu" class="header_item">Daniel Páramo </div>
                    
                </div> -->
                <div class="content-table">
                    <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">userId</th>
                            <th scope="col">title</th>
                            <th scope="col">completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="todo in ListTodos" :key="todo.id">
                            <th scope="row">{{ todo.id}}</th>
                            <td >{{ todo.userId }}</td>
                            <td>{{ todo.title }}</td>
                            <td>{{ todo.completed }}</td>
                        </tr>
                
                    </tbody>
                    </table>
                </div>
            </div>
    </div>
    
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

import axios from 'axios';
export default {
    name:"Todos",
    data(){
        return {
            ListTodos:null
        }
    },
    components:{
        Sidebar,
        Header
    },
    methods:{
    },
    mounted:function(){
        console.log(this.$route.params.id,"id_____");
        let direccion = "https://jsonplaceholder.typicode.com/todos?userId=" + this.$route.params.id;
        console.log(direccion);
        axios.get(direccion).then(data =>{
            console.log(data);
            this.ListTodos = data.data;
        });
    }
}
</script>
<style scoped>
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
        padding-top: 10px;
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
    .spn_users{
        margin-left: 2%;
        text-align: left;
        
    }
    #icon_menu{
      margin-right: 10px;
    }
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
</style>