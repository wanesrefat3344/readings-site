document.addEventListener('DOMContentLoaded', () => {
    const barcodeInput = document.getElementById('barcode-input');
    const submitButton = document.getElementById('submit-button');
    const attendanceTableBody = document.querySelector('#attendance-table tbody');

    // بيانات وهمية للطلاب
    const students = {
        '123456': 'أحمد علي',
        '654321': 'سارة محمد'
    };

    submitButton.addEventListener('click', () => {
        const barcode = barcodeInput.value.trim();
        if (barcode) {
            const studentName = students[barcode];
            if (studentName) {
                const now = new Date();
                const date = now.toLocaleDateString('ar-EG');
                const time = now.toLocaleTimeString('ar-EG');

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${barcode}</td>
                    <td>${studentName}</td>
                    <td>${date}</td>
                    <td>${time}</td>
                `;
                attendanceTableBody.appendChild(row);

                // مسح الحقل بعد التسجيل
                barcodeInput.value = '';
                barcodeInput.focus();
            } else {
                alert('رقم الباركود غير صحيح!');
            }
        } else {
            alert('يرجى إدخال رقم الباركود!');
        }
    });
});
