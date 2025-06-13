<!-- Header.vue -->
<template>
  <header class="bg-gray-700 text-white p-2 flex justify-between items-center">
    <div class="flex items-center gap-2">
      <!-- Hamburger Button -->
      <button class="md:hidden p-2 bg-green-600 rounded-full" @click="$emit('toggle-sidebar')">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
      <h1 class="text-lg font-bold">VBEYOND</h1>
    </div>
    <div>
      <button class="bg-red-600 hover:bg-red-700 w-10 h-10 rounded">
        <i class="fa-solid fa-right-from-bracket"></i>
      </button>
    </div>
  </header>
</template>
