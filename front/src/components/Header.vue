<template>

<div>
       <div class="header">
            <div id="header-item-menu" class="header_item" v-on:click="ir()">
              <div id="icon_menu" class=header_item><img src="../assets/img/menu.png" alt="menu"></div>
              <div class="header_item">Dashboard</div>
              </div>
            <div id="header-user-menu" class="header_item">
                <img id="img_profile" src="../assets/img/foto.jpeg" alt="user">Daniel Páramo </div>
            
        </div>
</div>
    
</template>
<script>
export default {
  name: "Header",
  methods: {
    ir() {
      this.$router.push("/dashboard");
    }
  }
};
</script>
<style scoped>
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
        cursor: pointer;
    }
    #header-user-menu{
        width: 20%;
        cursor:default;
    }
    #icon_menu{
      margin-right: 10px;
    }
    #img_profile{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        margin-right: 10px;
    }
  
</style>