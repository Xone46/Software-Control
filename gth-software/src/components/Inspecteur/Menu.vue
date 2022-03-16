<template>

      <ul>
          <li>Interventions en cours</li>
          <li>Transférer des Minutes</li>
          <li>Prévisualisation Rapports</li>
          <li>Modification Rapports</li>
          <li>Sauvegarde de Secours</li>
      </ul>


</template>

<script>
export default {
  data() {
    return {};
  },
}
</script>

<style scoped>

ul {
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 4px solid #07134a;
}

ul li {
    padding: 10px;
    font-size: 20px;
    font-weight: initial;
    cursor: pointer;
    color: #07134a;
}
ul li:hover {
    background-color: white;
    border-bottom: 3px solid #07134a;
    transition: 0.3s;
}


</style>