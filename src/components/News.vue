<!-- News.vue -->
<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">อัปเดตข่าวสารล่าสุดในองค์กรของเรา</h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(news, index) in newsList" :key="index"
        class="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
        <h2 class="text-lg font-semibold text-green-700 mb-2">{{ news.title }}</h2>
        <p class="text-sm text-gray-600 mb-2">{{ news.date }}</p>
        <p class="text-gray-700 text-sm">{{ news.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {
          title: "ประชุมใหญ่ประจำปี 2025",
          date: "7 มิถุนายน 2025",
          content: "ขอเชิญพนักงานทุกคนเข้าร่วมประชุมใหญ่เพื่อรับฟังวิสัยทัศน์และแผนกลยุทธ์ประจำปี"
        },
        {
          title: "เปิดตัวระบบลางานใหม่",
          date: "5 มิถุนายน 2025",
          content: "ระบบใหม่ช่วยให้พนักงานสามารถยื่นลางานได้สะดวกยิ่งขึ้นผ่านระบบออนไลน์"
        },
        {
          title: "กิจกรรมวันสงกรานต์ 2568",
          date: "11 เมษายน 2025",
          content: "ขอเชิญพนักงานร่วมสนุกกับกิจกรรมวันสงกรานต์ที่จัดขึ้นบริเวณลานกิจกรรมของบริษัท"
        }
      ]
    };
  }
};
</script>