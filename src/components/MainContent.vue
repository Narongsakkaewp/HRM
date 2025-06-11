<template>
  <section class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold font-Prompt mb-4 border-b pb-2">ข้อมูลส่วนตัว</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div><strong>ชื่อ - นามสกุล:</strong> เต้ย</div>
      <div><strong>วันที่เริ่มงาน:</strong> 25-03-2024</div>
      <div><strong>อายุงาน:</strong> 1 ปี 3 เดือน 15 วัน</div>
      <div><strong>เบอร์โทร:</strong> (061) xxx xxxx</div>
      <div class="md:col-span-2">
        <strong>ที่อยู่:</strong> 1 อาคารเอ็มไพร์ทาวเวอร์
      </div>
      <!-- เพิ่มข้อมูลอื่น ๆ -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style scoped>
.content {
  padding: 1rem;
  flex: 1;
}
</style>