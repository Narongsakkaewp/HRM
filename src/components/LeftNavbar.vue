<!-- LeftNavBar.vue -->
<template>
    <aside :class="[
        'bg-white shadow-xl z-40 p-4 fixed md:static top-0 left-0 h-full transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'w-64'
    ]">
        <!-- Profile -->
        <div class="text-center">
            <div class="w-52 h-52 mx-auto rounded-full mt-6 overflow-hidden border-4 border-gray-200">
                <img :src="imageUrl" alt="profile" class="object-cover w-full h-full" />
            </div>
            <div class="mt-3 flex items-center justify-between">
                <p class="font-bold text-gray-700">รหัสพนักงาน : 67010003</p>
                <button>
                    <p><i class="fa-solid fa-gear text-gray-400"></i></p>
                </button>

            </div>
        </div>

        <!-- Navigation -->
        <nav class="mt-6 space-y-2">
            <router-link to="/"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition cursor-pointer">
                <i class="fa-solid fa-gauge mr-3 text-green-600"></i> Dashboard
            </router-link>

            <router-link to="/WorkTime"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-list mr-3 text-green-600"></i> ข้อมูลการเข้างาน
            </router-link>

            <router-link to="/News"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-globe mr-3 text-green-600"></i> ข้อมูลข่าวสาร
            </router-link>

            <router-link to="/Training"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-book-open-reader mr-3 text-green-600"></i> การอบรม
            </router-link>

            <router-link to="/Personnel"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-people-group mr-2 text-green-600"></i> บุคลากร
            </router-link>

            <router-link to="/Salary"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-money-bills mr-3 text-green-600"></i> รายได้
            </router-link>

            <router-link to="/Leave"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-clock mr-3 text-green-600"></i> การลางาน
            </router-link>
            <router-link to="/Evaluation"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-chart-line mr-3 text-green-600"></i> การประเมิน
            </router-link>
            <router-link to="/Download"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-file-arrow-down mr-3 text-green-600"></i> ดาวน์โหลดเอกสาร
            </router-link>
            <router-link to="/Permission"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-table mr-3 text-green-600"></i> ข้อมูลสิทธิการใช้งานระบบ
            </router-link>
            <router-link to="/Setting"
                class="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 font-semibold transition">
                <i class="fa-solid fa-gear mr-3 text-green-600"></i> การตั้งค่า
            </router-link>
        </nav>

        <!-- Mobile toggle -->
        <button class="absolute top-4 right-4 text-gray-500 md:hidden" @click="toggleSidebar">
            <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
    </aside>
</template>

<script>
export default {
    name: "LeftNavbar",
    // props: {
    //     isOpen: {
    //         type: Boolean,
    //         required: true
    //     }
    // },
    data() {
        return {
            isOpen: true, // ให้เปิด sidebar ทันที
            imageUrl: 'https://www.w3schools.com/howto/img_avatar.png' // URL ของรูปโปรไฟล์
        };
    },
    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },
    },
    components: {
        NavItem: {
            props: ['icon', 'text', 'isOpen'],
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

<!-- <script>
export default {
    name: "LeftNavbar",
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
        };
    },
    methods: {
        toggleSidebar() {
            this.$emit("toggle-sidebar");
        }
    }
};
</script> -->