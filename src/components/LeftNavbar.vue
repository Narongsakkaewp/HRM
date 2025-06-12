<template>
    <aside class="w-72 bg-white shadow-lg p-4 overflow-y-auto">
        <div class="text-center" @dragover.prevent="dragActive = true" @dragleave.prevent="dragActive = false"
            @drop.prevent="handleDrop">
            <label for="">
                <input type="file" accept="image/*" class="hidden" @change="onFileChange" ref="fileInput" />
                <div class="w-36 h-36 mx-auto rounded-full border flex items-center justify-center overflow-hidden cursor-pointer transition"
                    :class="dragActive ? 'right-4 ring-green-400' : ''" @click="triggerFileInput">
                    <img v-if="imageUrl" :src="imageUrl" class="object-cover w-full h-full" alt="profile" />
                    <span v-else class="text-gray-400">รูปภาพ</span>
                </div>
            </label>
            <div>
                <p class="mt-2 font-bold">ID : 67010003</p>
                <p><i class="fa-solid fa-gear"></i></p>
            </div>
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
            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-people-group mr-2"></i>บุคลากร
            </a>
            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-money-bills mr-2"></i> รายได้
            </a>
            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-clock mr-2"></i> การลางาน
            </a>
            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-chart-line mr-2"></i> การประเมิน
            </a>
            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-file-arrow-down mr-2"></i> ดาวน์โหลดเอกสาร
            </a>
            <a href="#" class="flex items-center p-2 rounded hover:bg-gray-100">
                <i class="fa-solid fa-table mr-2"></i> ข้อมูลสิทธิการใช้งานระบบ
            </a>
        </nav>
    </aside>
</template>

<script>
export default {
    name: "LeftNavbar"
}
</script>
