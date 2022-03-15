<template>
  <div class="auth">
    <img alt="gthconsult logo" src="../assets/logo.png" />
    <h3>Authetification</h3>
    <FormulateForm  v-model="auth">
      <FormulateInput label="Email" name="email"/>
      <FormulateInput label="Mot de Passe" name="password"/>
      <FormulateInput type="submit" name="Connexion" @click="authetfication()" />
    </FormulateForm>
  </div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
         
         auth : {
           email : null,
           password : null,
         }
       
      }
    },
    methods : {
      authetfication() {
        if(this.auth.email == "eng.jamal@gthconsult.ma" && this.auth.password == "gthconsult2022")
        {
          return this.$router.push('/about')
        }
      }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auth {
  width: 350px;
}
.auth img {
  width: 300px;
  padding: 10px;
}
</style>
