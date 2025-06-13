<template>
  <div class="flex h-screen flex-col">
    <Header @toggle-sidebar="toggleSidebar" />
    <div class="flex flex-1 overflow-hidden">
      <LeftNavbar :isOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
      <main class="flex-1 overflow-y-auto p-6 bg-gray-100">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftNavbar from './components/LeftNavbar.vue'

export default {
  name: "App",
  components: {
    Header,
    LeftNavbar
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>
