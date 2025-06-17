<!-- WorkTime.vue -->
<template>
    <section class="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 border-b pb-3 mb-6">
            <i class="fa-solid fa-clock mr-2 text-green-600"></i> ประวัติการเข้างาน
        </h2>

        <div class="overflow-x-auto">
            <table class="min-w-full">
                <thead class="bg-green-100 text-green-800">
                    <tr>
                        <th class="px-4 py-2 text-left">วันที่</th>
                        <th class="px-4 py-2 text-left">เวลาเข้า</th>
                        <th class="px-4 py-2 text-left">เวลาออก</th>
                        <th class="px-4 py-2 text-left">สถานะ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(entry, index) in workRecords" :key="index" class="hover:bg-gray-50 border-b">
                        <td class="px-4 py-2">{{ entry.date }}</td>
                        <td class="px-4 py-2">{{ entry.checkIn }}</td>
                        <td class="px-4 py-2">{{ entry.checkOut }}</td>
                        <td class="px-4 py-2">
                            <span :class="[
                                'px-3 py-1 rounded-full text-sm font-medium',
                                entry.status === 'ขาดงาน'
                                    ? 'bg-red-100 text-red-600'
                                    : entry.status === 'สาย'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : entry.status === 'ลางาน'
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'bg-green-100 text-green-700'
                            ]">
                                {{ entry.status }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-4">
                <p class="text-sm text-gray-500">ข้อมูลการเข้างานล่าสุด 30 วัน</p>
            </div>
            <div class="mt-6 bg-gray-50 p-4 rounded-lg flex flex-wrap gap-6 justify-between">
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
                    <span>มาทำงานปกติ:
                        <strong>
                            {{workRecords.filter(e => e.status === 'ปกติ').length}}
                        </strong> วัน
                    </span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                    <span>สาย:
                        <strong>
                            {{workRecords.filter(e => e.status === 'สาย').length}}
                        </strong> วัน
                    </span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                    <span>ขาดงาน:
                        <strong>
                            {{workRecords.filter(e => e.status === 'ขาดงาน').length}}
                        </strong> วัน
                    </span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>
                    <span>ลางาน:
                        <strong>
                            {{workRecords.filter(e => e.status === 'ลางาน').length}}
                        </strong> วัน
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "WorkTime",
    data() {
        return {
            workRecords: [
                { date: "02 มิ.ย. 2025", checkIn: "09:35", checkOut: "17:05", status: "สาย" },
                { date: "03 มิ.ย. 2025", checkIn: "-", checkOut: "-", status: "ขาดงาน" },
                { date: "04 มิ.ย. 2025", checkIn: "08:59", checkOut: "17:00", status: "ปกติ" },
                { date: "05 มิ.ย. 2025", checkIn: "08:50", checkOut: "17:10", status: "ปกติ" },
                { date: "06 มิ.ย. 2025", checkIn: "08:30", checkOut: "17:05", status: "ปกติ" },
                { date: "09 มิ.ย. 2025", checkIn: "08:55", checkOut: "-", status: "ปกติ" },
                { date: "10 มิ.ย. 2025", checkIn: "08:30", checkOut: "18:05", status: "ปกติ" },
                { date: "11 มิ.ย. 2025", checkIn: "08:30", checkOut: "17:00", status: "ปกติ" },
                { date: "12 มิ.ย. 2025", checkIn: "08:30", checkOut: "17:07", status: "ปกติ" },
                { date: "13 มิ.ย. 2025", checkIn: "08:30", checkOut: "17:01", status: "ปกติ" },
                { date: "16 มิ.ย. 2025", checkIn: "-", checkOut: "-", status: "ลางาน" },
                { date: "17 มิ.ย. 2025", checkIn: "09:11", checkOut: "16:20", status: "สาย" },
            ]
        };
    }
};
</script>
