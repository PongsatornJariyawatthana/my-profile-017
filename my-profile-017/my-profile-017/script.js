const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

const visitorName = prompt('กรุณากรอกชื่อของคุณ');
const displayName = visitorName && visitorName.trim()
  ? visitorName.trim()
  : 'ผู้เยี่ยมชม';
greetingMessage.textContent = `ยินดีต้อนรับคุณ ${displayName} เข้าสู่เว็บไซต์ Portfolio ของฉัน`;

const pageCountInput = prompt('ต้องการให้พัฒนาเว็บไซต์จำนวนกี่หน้า?');
const pageCount = Number(pageCountInput);
const estimateMessage = document.getElementById('estimateMessage');

if (pageCountInput === null) {
  estimateMessage.textContent = 'ยกเลิกการประมาณราคา';
} else if (!Number.isInteger(pageCount) || pageCount < 1) {
  estimateMessage.textContent = 'กรุณาระบุจำนวนหน้าเป็นจำนวนเต็มตั้งแต่ 1 หน้าขึ้นไป';
} else {
  const totalCost = pageCount * 500;
  estimateMessage.textContent =
    `จำนวน ${pageCount.toLocaleString('th-TH')} หน้า รวมค่าบริการ ${totalCost.toLocaleString('th-TH')} บาท`;
}

greetButton.addEventListener('click', function() {
  greetingMessage.textContent = "สวัสดีครับ! ยินดีที่ได้รู้จักครับ";
});