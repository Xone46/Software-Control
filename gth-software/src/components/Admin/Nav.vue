<template>
  <div class="nav" id="nav">
    <img src="../../assets/logo.png" alt="logo gth Consult" />
    <ul>
      <li>{{ 'Monsieur, '+prenom+' '+nom }}</li>
    </ul>
    <ul>
      <li @click="deconnexion()">Deconnexion</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: null,
      prenom: null,
    };
  },
  methods: {
    deconnexion() {
      sessionStorage.removeItem("adminId");
      sessionStorage.removeItem("nom");
      sessionStorage.removeItem("prenom");
      return this.$router.push("/");
    },
  },
  created() {
    // Get Auth
    this.nom = sessionStorage.getItem("nom");
    this.prenom = sessionStorage.getItem("prenom");
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav img {
  width: 100px;
}

.nav ul li {
  font-size: 20px;
  font-weight: initial;
  cursor: pointer;
  color: #07134a;
}
</style>
