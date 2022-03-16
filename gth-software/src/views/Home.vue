<template>
  <div class="home">
    <div class="container">
      <Authetfication />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Authetfication from "@/components/Home/Authetfication.vue";

export default {
  name: "Home",
  components: {
    Authetfication,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home .container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  flex-direction: column;
}

</style>
