<template>
    <div class="siidebar">
        <div class="title" style="cursor: default;">
            System
        </div>
        <div class="menu-items" style="cursor:pointer;"  v-on:click="ir()">
                <div class="Link-container">
                    <img id="icon_users" src="../assets/img/customer.png" alt="users"> Users
                </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Sidebar",
  methods: {
    ir() {
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style scoped>
    .title{
        font-size: 2.2em;
        text-align: left;
        font-weight: bold;
        margin:10%
    }
    .menu-items{
        text-decoration: none;
        font-weight: bold;
        text-align: left;
        margin:10%;
    }
    #icon_users{
        margin-right: 10px;
    }
</style>