<template>
    <aside class="w-64 bg-white shadow-lg p-4 overflow-y-auto">
        <div class="text-center">
            <img class="w-24 h-24 mx-auto rounded-full border" src="#" alt="profile" />
            <p class="mt-2 font-bold">ID : 67010002</p>
        </div>

        <nav class="mt-4 space-y-2">
            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fas fa-home mr-2"></i> Dashboard
            </a>
            <!-- เพิ่มเมนูอื่น ๆ ต่อได้ -->
        </nav>
    </aside>
</template>

<script>
export default {
    name: "LeftNavbar"
}
</script>

<style scoped>
.left-navbar {
    background: #eee;
    padding: 1rem;
    width: 200px;
}
</style>