<template>
  <div class="inspecteur">
    <div class="container">
        <div class="header">
                  <Nav />
        </div>
        <div class="menu-content">
            <div class="menu">
                  <Menu />
            </div>
            <div class="content">
                <h1>content</h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Inspecteur/Menu.vue";
import Nav from "@/components/Inspecteur/Nav.vue";

export default {
  name: "inspecteur",
  components: {
    Menu,
    Nav,
  },
};
</script>

<style scoped>
.inspecteur {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inspecteur .container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.inspecteur .container .header{

    width: 100%;
    height: 80px;
    padding: 0px;
    margin: 0px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}
.inspecteur .container .menu-content{

    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.inspecteur .container .menu-content menu {

    width: 250px;
    height: 100%;
    padding: 5px 5px 0px 5px;
}

</style>