<template>
    <aside class="w-64 bg-white shadow-lg p-4 overflow-y-auto">
        <div class="text-center" @dragover.prevent="dragActive = true" @dragleave.prevent="dragActive = false"
            @drop.prevent="handleDrop">
            <label for="">
                <input type="file" accept="image/*" class="hidden" @change="onFileChange" ref="fileInput" />
                <div class="w-36 h-36 mx-auto rounded-full border flex items-center justify-center overflow-hidden cursor-pointer transition"
                    :class="dragActive ? 'right-4 ring-green-400' : ''" @click="triggerFileInput">
                    <img v-if="imageUrl" :src="imageUrl" class="object-cover w-full h-full" alt="profile" />
                    <span v-else class="text-gray-400">เลือกรูปภาพ</span>
                </div>
            </label>
            <p class="mt-2 font-bold">ID : 67010002</p>
        </div>

        <nav class="mt-4 space-y-2">
            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-gauge mr-2"></i> Dashboard
            </a>

            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-list mr-2"></i> ข้อมูลการเข้างาน
            </a>

            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-globe mr-2"></i> ข่าวสารอัพเดท
            </a>

            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-book-open-reader mr-2"></i> การอบรม
            </a>
        </nav>
    </aside>
</template>

<script>
export default {
    name: "LeftNavbar"
}
</script>

<script setup>
import { ref } from 'vue'

const imageUrl = ref('')
const dragActive = ref(false)
const fileInput = ref(null)

function onFileChange(event) {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
        imageUrl.value = URL.createObjectURL(file)
    }
}

function handleDrop(event) {
    dragActive.value = false
    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
        imageUrl.value = URL.createObjectURL(file)
    }
}

function triggerFileInput() {
    fileInput.value.click()
}
</script>