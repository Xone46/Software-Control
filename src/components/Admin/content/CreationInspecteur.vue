<template>
  <div class="creationInspecteur">
    <h3>Création un compte Inspecteur</h3>
    <div class="formCreation">
      <FormulateForm v-model="registre">
        <FormulateInput label="Identité Inspecteur" name="identite" />
        <FormulateInput
          name="metier"
          :options="{
            first: 'Appareil et accessoir de levage',
            second: 'Engin de chantier',
            third: 'Machine',
            fourth: 'Ascenseurs et Montes Charges accompagnés',
            fifth: 'SSI-DF-GC',
          }"
          type="select"
          placeholder="Métier"
          label="Métier"
        />
        <FormulateInput label="Nom" name="Nom" />
        <FormulateInput label="Prénom" name="Prénom" />
        <FormulateInput label="Téléphone" name="Telephone" />
        <FormulateInput label="E-mail" name="email" />
        <FormulateInput label="Mot de Passe" name="password" type="password" />
        <FormulateInput
          label="Répéter Mot de Pass"
          name="repeter-password"
          type="password"
        />
        <FormulateInput
          type="date"
          name="date"
          label="Date de naissance"
          placeholder="Date de naissance"
          validation="required"
          error-behavior="live"
        />
        <FormulateInput label="Adresse" name="adresse" />
        <FormulateInput label="Ville" name="ville" />
        <FormulateInput label="Pays" name="pays" />
        <FormulateInput label="Code Postal" name="code-postal" />
        <FormulateInput
          type="submit"
          name="Créer un compte"
          @click="create()"
        />
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import Inspecteurs from '../../../database/inspecteurs'
export default {
  data() {
    return {
      registre: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    create() {
      Inspecteurs.info(function (err, info) {
        if (err) {
          return console.log(err);
        } else {
          console.log(info);
        }
      });
    },
  },
};
</script>

<style scoped>
.creationInspecteur {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-left: 40px;
  margin: 0px;
}

.formulate-input {
  margin-bottom: 0.5em;
  margin-right: 4px;
  width: 40%;
}

.formulate-input:nth-child(14) {
  margin-top: 25px;
  margin-left: 50px;
}

.formulate-form {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>