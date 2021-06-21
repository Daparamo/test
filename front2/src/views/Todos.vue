<template>
        <div>
        <Header/>
            <div class="container izquierda">
                <table class="table table-hover">
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
    
</template>
<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
    name:"Todos",
    data(){
        return {
            ListTodos:null
        }
    },
    components:{
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
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
</style>