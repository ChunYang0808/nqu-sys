E407｜E407教室（理工大樓）
E408｜E408教室（理工大樓）
E409｜E409實驗室
E413｜E413儀器分析實驗室
E414｜E414化學實驗室
E415｜E415微生物實驗室
E416｜E416食品工程實驗室
E500｜E500會議室（理工大樓）
I103｜I103-1圖資電腦教室
KM28｜KM28外二甲
T1｜T1食品創業工作坊（中山）
km01｜km01食一甲`.split('\n');
const loginScreen = document.getElementById('login-screen');
const appShell = document.getElementById('app-shell');
const loginForm = document.getElementById('login-form');
const departmentSelect = document.getElementById('login-department');
const levelSelect = document.getElementById('login-level');
const gradeSelect = document.getElementById('login-grade');


departmentSelect.innerHTML = departments.map((department) => `<option>${department}</option>`).join('');
departmentSelect.value = '資訊工程學系';


function populateGrades() {
  const level = levelSelect.value;
  const labels = level === 'bachelor' ? ['一年級', '二年級', '三年級', '四年級', '五年級'] : level === 'master' ? ['碩士一年級', '碩士二年級', '碩士三年級', '碩士四年級'] : ['博士一年級', '博士二年級', '博士三年級', '博士四年級', '博士五年級', '博士六年級'];
  gradeSelect.innerHTML = labels.map((label, index) => `<option value="${index + 1}" ${level === 'bachelor' && index === 1 ? 'selected' : ''}>${label}</option>`).join('');
}


populateGrades();
levelSelect.addEventListener('change', populateGrades);


loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const studentId = document.getElementById('login-id').value.trim() || 'AI115410001';
  const studentName = document.getElementById('login-name').value.trim() || 'AI 模擬學生';
  const department = departmentSelect.value;
  const gradeText = gradeSelect.options[gradeSelect.selectedIndex].text;
  const program = `${shortDepartments[department] || department}${gradeText.replace('一年級', '一').replace('二年級', '二').replace('三年級', '三').replace('四年級', '四').replace('五年級', '五').replace('六年級', '六')}`;
  document.getElementById('student-program').textContent = program;
  document.getElementById('student-id').textContent = studentId;
  document.getElementById('student-name').textContent = studentName;
  loginScreen.hidden = true;
  appShell.hidden = false;
  const generationContext = { studentId, studentName, department, grade: gradeText, level: levelSelect.value, departments, csFaculty, classrooms };
  generatedRecord = window.NQU_LOCAL.generateStudentRecord(generationContext);
  initializeSelections();
  const overlay = document.getElementById('generation-overlay');
  overlay.hidden = false;
  // 網路或 AI 供應商偶發未結束的請求不可阻塞網站；先以本機展示資料開啟，
  // AI 完成後再無縫置換成生成資料。
  // Promise.resolve 將可能的同步載入錯誤也轉為可處理的非同步錯誤，
  // 以確保下方的 15 秒保護計時器一定會建立。
  const aiTask = Promise.resolve().then(() => window.NQU_AI.generateStudentRecord(generationContext)).then((record) => {
    if (isUsableAiRecord(record, generationContext)) {
      generatedRecord = record;
      initializeSelections();
    }
  }).catch((error) => {
    console.warn('AI 模擬資料未載入，改用展示資料。', error);
  });
  let releaseOverlay;
  const displayTimeout = new Promise((resolve) => {
    releaseOverlay = resolve;
  });
  const displayTimer = window.setTimeout(releaseOverlay, 15000);
  await Promise.race([aiTask, displayTimeout]);
  window.clearTimeout(displayTimer);
  overlay.hidden = true;
});


loginForm.addEventListener('reset', () => setTimeout(() => { departmentSelect.value = '資訊工程學系'; levelSelect.value = 'bachelor'; populateGrades(); }, 0));


document.querySelectorAll('.tree-menu h2').forEach((heading) => {
  heading.addEventListener('click', () => heading.parentElement.classList.toggle('is-collapsed'));
});


document.querySelectorAll('.branch-button').forEach((button) => {
