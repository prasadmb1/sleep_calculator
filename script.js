
function calculateSleepTime() {
  const wakeTime = document.getElementById('wakeTime').value;
  if (!wakeTime) {
    alert('कृपया उठण्याचा वेळ निवडा');
    return;
  }
  const [hours, minutes] = wakeTime.split(":").map(Number);
  const wakeDate = new Date();
  wakeDate.setHours(hours);
  wakeDate.setMinutes(minutes);

  let cycles = [];
  for (let i = 6; i >= 1; i--) {
    const sleepDate = new Date(wakeDate.getTime() - i * 90 * 60000);
    let h = sleepDate.getHours();
    let m = sleepDate.getMinutes();
    let ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    cycles.push(`${h}:${m} ${ampm}`);
  }

  document.getElementById("result").innerHTML = `
    <h3 class='text-xl font-semibold mb-2 text-green-700'>
      तुम्ही या वेळेला झोपायला गेलात तर तुम्ही फ्रेश उठाल:
    </h3>
    <ul class='list-disc pl-6 space-y-1'>
      ${cycles.map(c => `<li>${c}</li>`).join('')}
    </ul>`;
}
