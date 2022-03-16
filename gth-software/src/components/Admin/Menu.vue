<template>

      <ul>
          <li @click="flagInspecteurs = !flagInspecteurs"> Les Inspecteurs
              <ul v-if="flagInspecteurs">
                  <li @click="creationInspecteur()">Création un Inspecteur</li>
                  <li>Gestion Les Inspecteurs</li>
              </ul>
          </li>
          <li @click="flagInterventions = !flagInterventions">Interventions en cours
               <ul v-if="flagInterventions">
                  <li>Création un Intervention</li>
                  <li>Gestion Les Interventions</li>
              </ul>
          </li>
          <li>Transférer des Minutes</li>
          <li>Prévisualisation Rapports</li>
          <li>Modification Rapports</li>
          <li>Sauvegarde de Secours</li>
      </ul>


</template>

<script>
export default {
  data() {
    return {
        flagInspecteurs: false,
        flagInterventions: false,
    };
  },
  methods : {
      creationInspecteur() {
           this.$emit('clicked', 'creationInspecteur')      }
  }
    

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

.menu ul li ul {

    border: 0px;

} 
.menu ul li ul li {
    border: 0px;
}

.menu ul li ul li:hover {
    background-color: #07134a;
    color: white;
    transition: 0.3s;
}

</style>