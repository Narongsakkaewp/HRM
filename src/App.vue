<template>
  <div class="flex h-screen flex-col">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <LeftNavbar />
      <main class="flex-1 overflow-y-auto p-6 bg-gray-100">
        <MainContent />
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftNavbar from './components/LeftNavbar.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: "App",
  components: {
    Header,
    LeftNavbar,
    MainContent
  }
}
</script>