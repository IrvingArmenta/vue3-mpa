<template>
  <div class="themeDiv" :data-theme="theme">
    <h2>Home</h2>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <a href="/about">Go to about page</a>
    <button @click="store.increment()">Increment</button>
    <button @click="store.asyncIncrement()">Async Increment</button>
    <button @click="newUser">Add User</button>
    <button @click="toggleTheme">Toggle Theme</button>
    {{ s.count }}
    {{ s.double }}
    {{ usersArr }}
    {{ theme }}
    <ul>
      <li v-for="user in usersArr" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";
import { ThemeNames, useStore } from "@/store";
import HelloWorld from "@/components/HelloWorld.vue";

/**========================================================================
 *                           store
 *========================================================================**/
const store = useStore;
const s = reactive(useStore);
const doubleCount = computed(() => store.double);
const count = computed(() => store.count);
const usersArr = computed(() => store.addArr);
const theme = computed(() => store.theme);

/**========================================================================
 *                           methods
 *========================================================================**/
function newUser() {
  store.addUser({ id: 1029302, name: "test" });
}

function toggleTheme() {
  store.setTheme(
    store.theme === ThemeNames.LIGHT_THEME
      ? ThemeNames.DARK_THEME
      : ThemeNames.LIGHT_THEME
  );
}
</script>

<style lang="scss" scoped>
@use "theme-colors";
.themeDiv {
  background-color: var(--app-background-color);
  color: var(--dynamic-title-color);
  padding: 32px;
  transition: background-color 200ms ease-in-out;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
