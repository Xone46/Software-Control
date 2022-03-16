<template>
  <div class="auth">
    <img src="../../assets/logo.png" alt="Logo GTHCONSULT" />
    <h3>Authetification</h3>
    <FormulateForm v-model="auth">
      <FormulateInput label="Email" name="email" />
      <FormulateInput label="Mot de Passe" name="password" type="password" />
      <FormulateInput
        type="submit"
        name="Connexion"
        @click="authetfication()"
      />
    </FormulateForm>
    <h1>Bienvenue à GTHCONSULT Maroc</h1>
    <p>
      Bienvenu, nous vous informer que ce logiciel privée pour à la société
      GTHCONSULT , et chaque utilisation illégale peut conduire à un problème
      juridique .
    </p>
  </div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      auth: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    authetfication() {
      // start Session pour Auth
      if (this.auth.email == "eng.jamal@gthconsult.ma" && this.auth.password == "gthconsult2022") {
        // set Session
        sessionStorage.setItem('adminId', 'admin')
        sessionStorage.setItem('nom', 'ETTARIQI ')
        sessionStorage.setItem('prenom', 'jamal')
        
        return this.$router.push("/admin");
      }
      if (this.auth.email == "eng.tarik@gthconsult.ma" && this.auth.password == "gthconsult2022") {
         
        sessionStorage.setItem('adminId', 'admin')
        sessionStorage.setItem('nom', 'ADDIOUI ')
        sessionStorage.setItem('prenom', 'tarik')

        return this.$router.push("/admin");
      }
    },
  },
};
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

.auth h1 {
  font-size: 22px;
}
.auth p {
  font-size: 14px;
}
</style>
