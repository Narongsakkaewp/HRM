<template>
  <section class="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
    <!-- Section: Personal Information -->
    <h2 class="text-xl md:text-2xl font-bold font-Prompt mb-6 border-b pb-3 text-gray-800">
      <i class="fa-solid fa-user mr-2 text-green-600"></i> ข้อมูลส่วนตัว
    </h2>

    <div class="grid grid-cols-1 gap-4 text-sm md:text-base text-gray-700 mb-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <InfoRow label="ชื่อ - นามสกุล" value="John D" />
        <InfoRow label="วันที่เริ่มงาน" value="01 Jan 1972" />
        <InfoRow label="อายุงาน" value="53 years, 5 months, 11 days" />
        <InfoRow label="เบอร์โทรติดต่อ" value="092-xxx-xxxx" />
        <InfoRow label="วันเกิด" value="11 May 1950" />
        <InfoRow label="อายุ" value="75 years 1 month(s) 1 day(s)" />
        <InfoRow label="แผนก" value="Information Technology (IT)" />
        <InfoRow label="ตำแหน่ง" value="Frontend Developer" />

        <div class="md:col-span-2">
          <span class="font-semibold text-gray-800">ที่อยู่:</span>
          <p class="mt-1 text-gray-600">
            <i class="fa-solid fa-map-pin text-amber-600 mr-1"></i>
            เลขที่ 1 ชั้น 47 อาคารเอ็มไพร์ ทาวเวอร์ บริษัท วี บียอนด์ ดีเวลอปเม้นท์ จำกัด (มหาชน)
          </p>
        </div>

        <InfoRow label="หน้าที่รับผิดชอบ" value='<i class="fa-solid fa-file-circle-question text-gray-400"></i> ไม่มีข้อมูลไฟล์' isHtml />
        <div>
          <span class="font-semibold text-gray-800">สถานะ:</span>
          <div class="mt-1">
            <button class="bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow">
              พนักงาน
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section: Permissions -->
    <h2 class="text-xl md:text-2xl font-bold font-Prompt mb-4 border-b pb-2 text-gray-800">
      <i class="fa-solid fa-key mr-2 text-green-600"></i> สิทธิการเข้าใช้ระบบ
    </h2>
    <!-- ส่วนนี้สามารถเพิ่มรายการสิทธิ์เข้าใช้งานต่อได้ -->
  </section>
</template>

<script>
import InfoRow from './InfoRow.vue'

export default {
  name: 'MainContent',
  components: {
    InfoRow
  }
}
</script>
