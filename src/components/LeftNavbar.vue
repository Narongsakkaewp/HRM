<template>
    <aside :class="[
        'bg-white shadow-xl z-40 p-4 fixed md:static top-0 left-0 h-full transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'w-64'
    ]">
        <!-- Profile -->
        <div class="text-center">
            <div class="w-36 h-36 mx-auto rounded-full mt-6 overflow-hidden border-4 border-gray-200">
                <img :src="imageUrl" alt="profile" class="object-cover w-full h-full" />
            </div>
            <div class="mt-3">
                <p class="font-bold text-gray-700">รหัสพนักงาน : 67010003</p> 
                <p><i class="fa-solid fa-gear text-gray-400"></i></p>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="mt-6 space-y-2">
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-gauge mr-3 text-green-600"></i> Dashboard
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-list mr-3 text-green-600"></i> ข้อมูลการเข้างาน
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-globe mr-3 text-green-600"></i> ข้อมูลข่าวสาร
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-book-open-reader mr-3 text-green-600"></i> การอบรม
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                 <i class="fa-solid fa-people-group mr-2 text-green-600"></i> บุคลากร
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-money-bills mr-3 text-green-600"></i> รายได้
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-clock mr-3 text-green-600"></i> การลางาน
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-chart-line mr-3 text-green-600"></i> การประเมิน
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-file-arrow-down mr-3 text-green-600"></i> ดาวน์โหลดเอกสาร
            </a>
            <a href="#"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-table mr-3 text-green-600"></i> ข้อมูลสิทธิการใช้งานระบบ
            </a>
        </nav>

        <!-- Mobile toggle -->
        <button class="absolute top-4 right-4 text-gray-500 md:hidden" @click="toggleSidebar">
            <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
    </aside>

    <!-- Hamburger for Mobile -->
    <button class="fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-full shadow md:hidden"
        @click="toggleSidebar">
        <i class="fa-solid fa-bars text-xl"></i>
    </button>
</template>

<script>
export default {
    name: "LeftNavbar",
    data() {
        return {
            isOpen: true, // ให้เปิด sidebar ทันที
            imageUrl: 'https://via.placeholder.com/150' // รูปโปรไฟล์พื้นฐาน
        };
    },
    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },
    },
    components: {
        NavItem: {
            props: ['icon', 'text'],
            template: `
        <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
          <i :class="'fa-solid ' + icon + ' mr-3 text-green-600'"></i>
          {{ text }}
        </a>
      `
        }
    }
};
</script>

<style scoped>
aside::-webkit-scrollbar {
    width: 6px;
}

aside::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}
</style>
