<template>
  <div class="nav" id="nav">
      <img src="../../assets/logo.png" alt="logo gth Consult">
      <ul>
          <li>Inspecteur Nom Prenom</li>
      </ul>
      <ul>
          <li>Deconnexion</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
}
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
