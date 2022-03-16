<template>
  <div class="admin">
    <div class="container">
      <div class="header">
        <Nav />
      </div>
      <div class="menu-content">
        <div class="menu">
          <Menu @clicked="creationInspecteur()" />
        </div>
        <div class="content">
          <CreationInspecteur v-if="flagCreationInspecteur" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Admin/Menu.vue";
import Nav from "@/components/Admin/Nav.vue";
import CreationInspecteur from "@/components/Admin/content/CreationInspecteur.vue";

export default {
  name: "admin",
  data() {
    return {
      flagCreationInspecteur: false,
    };
  },
  components: {
    Menu,
    Nav,
    CreationInspecteur,
  },
  methods: {
    creationInspecteur() {
      if (this.flagCreationInspecteur == true) {
        this.flagCreationInspecteur = false;
      } else {
        this.flagCreationInspecteur = true;
      }
    },
  },
};
</script>

<style scoped>
.admin {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.admin .container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.admin .container .header {
  width: 100%;
  height: 80px;
  padding: 0px;
  margin: 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.admin .container .menu-content {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.admin .container .menu-content menu {
  width: 300px;
  height: 100%;
  padding: 5px 5px 0px 5px;
  margin-right: 20px;
}
.admin .container .menu-content .content {
  width: 700px;
  height: 100%;
}

.admin .container .menu-content {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

</style>