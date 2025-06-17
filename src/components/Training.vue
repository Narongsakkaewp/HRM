<!-- Training.vue -->
<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">หลักสูตรการฝึกอบรม | Training Center</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(course, index) in trainingCourses" :key="index"
                class="bg-white rounded-xl shadow-md overflow-hidden">
                <img :src="course.image" alt="Training" class="h-48 w-full object-cover" />
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ course.title }}</h3>
                    <p class="text-sm text-gray-600 mb-4">{{ course.description }}</p>
                    <router-link :to="course.link">
                        <button
                            class="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition">
                            เข้าอบรม
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Training",
    data() {
        return {
            trainingCourses: [
                {
                    title: "การใช้งานระบบ HR",
                    description: "เรียนรู้การใช้งานระบบทรัพยากรบุคคลอย่างถูกต้องและมีประสิทธิภาพ",
                    image: "https://source.unsplash.com/600x400/?office,work",
                    link: "/training/hr-system"
                },
                {
                    title: "การพัฒนาทักษะการสื่อสาร",
                    description: "เพิ่มศักยภาพในการสื่อสารในที่ทำงาน",
                    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.mindmanager.com%2Fteam-communication%2F&psig=AOvVaw0J0D6jrJS_A0qQBLUS_cfI&ust=1750232691405000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjpoff6940DFQAAAAAdAAAAABAE",
                    link: "/training/communication"
                },
                {
                    title: "ความปลอดภัยในการทำงาน",
                    description: "อบรมเรื่องความปลอดภัยและการป้องกันอุบัติเหตุในองค์กร",
                    image: "https://source.unsplash.com/600x400/?safety,workplace",
                    link: "/training/safety"
                }
            ]
        };
    }
};
</script>
