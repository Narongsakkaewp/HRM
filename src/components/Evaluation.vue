<!-- Evalution.vue -->
<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">รายงานระบบประเมิน</h2>

    <div class="overflow-x-auto bg-white shadow-md rounded-lg p-4">
      <table class="min-w-full table-auto border">
        <thead class="bg-gray-100">
          <tr class="text-left text-gray-700">
            <th class="px-4 py-2 border">ลำดับ</th>
            <th class="px-4 py-2 border">หัวข้อการประเมิน</th>
            <th class="px-4 py-2 border">คะแนนที่ได้</th>
            <th class="px-4 py-2 border">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in evaluations" :key="index" class="hover:bg-gray-50">
            <td class="px-4 py-2 border">{{ index + 1 }}</td>
            <td class="px-4 py-2 border">{{ item.topic }}</td>
            <td class="px-4 py-2 border">{{ item.score }}</td>
            <td class="px-4 py-2 border">
              <span :class="[
                'px-2 py-1 rounded-full text-sm font-medium',
                item.score >= 80
                  ? 'bg-green-100 text-green-700'
                  : item.score >= 60
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-600'
              ]">
                {{
                  item.score >= 80
                    ? 'ดีเยี่ยม'
                    : item.score >= 60
                    ? 'พอใช้'
                    : 'ควรปรับปรุง'
                }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Evaluation",
  data() {
    return {
      evaluations: [
        { topic: "ความรับผิดชอบ", score: 85 },
        { topic: "การทำงานเป็นทีม", score: 78 },
        { topic: "การสื่อสาร", score: 65 },
        { topic: "ความตรงต่อเวลา", score: 55 },
      ]
    };
  }
};
</script>
