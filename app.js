const departments = ['國際暨大陸事務學系', '建築學系', '海洋與邊境管理學系', '應用英語學系', '華語文學系', '都市計畫與景觀學系', '企業管理學系', '工業工程與管理學系', '觀光管理學系', '運動與休閒學系', '電機工程學系', '資訊工程學系', '土木與工程管理學系', '食品科學系', '護理學系', '長期照護學系', '社會工作學系'];
const shortDepartments = { '資訊工程學系': '資工', '電機工程學系': '電機', '企業管理學系': '企管', '觀光管理學系': '觀光', '運動與休閒學系': '運休', '土木與工程管理學系': '土木', '國際暨大陸事務學系': '國際', '應用英語學系': '應英', '華語文學系': '華文', '食品科學系': '食科', '長期照護學系': '長照', '社會工作學系': '社工', '海洋與邊境管理學系': '海邊', '工業工程與管理學系': '工管', '都市計畫與景觀學系': '都景', '建築學系': '建築', '護理學系': '護理' };
const csFaculty = ['吳佳駿', '周祥敏', '李錫捷', '柯志亨', '潘進儒', '王建鈞', '趙于翔', '陳正德', '陳鍾誠', '馮玄明'];
const classrooms = `I101｜I101圖資電腦教室
I102｜I102圖資電腦教室
103｜楊肅斌演講廳
106｜106國際系普通教室
107｜107國際多功能研討室
108｜108兩岸關係研究中心
109｜109國際系圖書室
110｜110國際事務專業教室
111｜111大陸事務專業教室
116｜116會議室
123｜123黃木榮講堂
125｜125進修推廣部教室
127｜127何錦治講堂
128｜128電腦專業教室
129｜129運休系普通教室
130｜130樂齡服務中心
131｜131系圖書館
132｜132運休系普通教室
133｜133運休系普通教室
206｜206海邊系普通教室
207｜207博雅專業教室
208｜208邊境系普通教室
209｜209創意多功能教室
214｜214教師研究室
215｜215專題研討室
219｜219教師研究室
220｜220教師研究室
221｜221林國欽講堂
222-1｜222-1民意調查中心
222-2｜222-2專業教室
223｜223人文社會學院
224｜224多媒體教室
226｜226呂冰霖講堂
227｜227配銷系統教育中心
228｜228旅遊導覽解說教室
229｜229研究生研究室
230｜230餐旅服務室
231｜231觀光系普通教室
232｜232觀光系普通教室
239｜239調酒教室
239-1｜239-1觀光系中庭
240｜240管碩專班教室
306｜306工管系實驗教室
307｜307工管系普通教室
308｜308工管系普通教室
309｜309普通教室
314-1｜314-1專業教室
321｜321方文言講堂
322｜322學術副校長室
323｜323教學中心
324｜324企管系專業教室
329｜329企管系會議研討室
330｜330企業經營模擬教室
346｜教務長室
404｜404華文系討論室
406｜406華文系普通教室
407｜407討論室（華語文學系）
407-1｜407-1華語文中心
408｜408華文系電腦教室
409｜409華文系普通教室
414｜414閩南所研討室
421｜421方水金講堂
422｜422閩南所辦公研討室
423-1｜423-1閩南所研討室
424｜424普通教室
425｜425普通教室
426｜426陳篤漢講堂
427｜427口譯教室
428-2｜428-2教室
429｜429語言測驗教室
430｜430普通教室
436｜436多媒體教材製作室
450｜450網路教室
505｜505教師研究室
507｜507教師研究室
509｜509教師研究室
513｜513設計教室I
514｜514設計繪圖教室
515｜515專業教室
516｜516會議室
528｜528蔡金環講堂
530｜5樓中庭
533｜533方基錠講堂
534-1｜534-1建築系研討室
535｜535設計教室A
536｜536系學會暨研討室
536-2｜536-2系圖書室
5371｜5371普通教室
543｜543研究室
544｜544研究室
550｜550建築節能中心
560｜建築學系中庭
601｜陳開蓉會議廳
605｜605藝文中心（圖資5樓）
701｜操場
702｜網球場
99｜99校外實習
A104｜A104有氧教室（多功能）
B03｜B03設計教室II
B04｜B04設計教室B
B05｜B05設計教室C
B06｜B06設計教室D
B08｜B08
B09｜B09基礎醫學實驗室
B10｜B10護理系示範病房I
B11｜B11護理系示範病房II
B12｜B12社工系專業教室
B14｜B14餐飲教室
B15｜B15長照系專業教室
B16｜B16社工系普通專業教室
B316｜B316學務處活動中心
B317｜B317軍訓室門口
C101｜C101階梯教室（金沙）
C212｜C312教室（金沙校區）
C213｜C213會議室（金沙校區）
C215｜C215教室（金沙校區）
C216｜C216教室（金沙校區）
C217｜C217教室（金沙校區）
C218｜C218教室（金沙校區）
C219｜C219教室（金沙校區）
C220｜金沙校區
D102｜D102社工系普通教室
D103｜D103社工系普通教室
D105｜D105社工系普通教室
D106｜D106護理系普通教室
D201｜D201長照系普通教室
D202｜D202長照系普通教室
D203｜D203護理系普通教室
D204｜D204護理系普通教室
D301｜D301長照系普通教室
D302｜D302長照系普通教室
D304｜D304健護學院演講廳
D314｜D301-1長照系研討室
E101｜E101呂慶安演講廳
E102｜E102教室（理工大樓）
E103｜E103教室（理工大樓）
E104｜E104教室（理工大樓）
E105｜E105教室（理工大樓）
E106｜E106大成營建科技研
E112｜E112會議室
E119｜E119結構力學實驗室
E120｜E120材料實驗室
E121｜E121土壤力學實驗室
E122｜E122空間資訊教室
E123｜E123測量器材室
E201｜E201王振坤講堂
E202｜E202教室（理工大樓）
E203｜E203教室（理工大樓）
E204｜E204教室（理工大樓）
E205｜E205教室（理工大樓）
E220｜E220電子電路實驗室
E221｜E221崁入式系統與機器
E222｜E222基礎通訊實驗室
E223｜E223軟體與模擬實驗室
E304｜E304普通物理實驗室
E305｜E305化學實驗室
E306｜E306研究生教室
E318｜智慧計算實驗室
E319｜E319數位系統應用實驗
E320｜E320多媒體實驗室
E321｜E321電腦網路實驗室
E323｜E323理工會議室
E401｜E401精密實驗室
E402｜E402教室（理工大樓）
E403｜E403教室（理工大樓）
E404｜E404教室（理工大樓）
E405｜E405教室（理工大樓）
E406｜E406教室（理工大樓）
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
  overlay.style.display = 'grid';
  // 本機資料已可立即使用；AI 請求只在背景替換資料，絕不能卡住登入畫面。
  // 此保護計時器在發起任何請求前建立，即使供應商逾時或程式同步失敗也會關閉遮罩。
  const hideOverlay = () => { overlay.hidden = true; overlay.style.display = 'none'; };
  const overlayFailSafe = window.setTimeout(hideOverlay, 15000);
  Promise.resolve()
    .then(() => window.NQU_AI.generateStudentRecord(generationContext))
    .then((record) => {
      if (isUsableAiRecord(record, generationContext)) {
        generatedRecord = record;
        initializeSelections();
      }
    })
    .catch((error) => {
      console.warn('AI 模擬資料未載入，改用展示資料。', error);
    })
    .finally(() => {
      window.clearTimeout(overlayFailSafe);
      hideOverlay();
    });
});

loginForm.addEventListener('reset', () => setTimeout(() => { departmentSelect.value = '資訊工程學系'; levelSelect.value = 'bachelor'; populateGrades(); }, 0));

document.querySelectorAll('.tree-menu h2').forEach((heading) => {
  heading.addEventListener('click', () => heading.parentElement.classList.toggle('is-collapsed'));
});

document.querySelectorAll('.branch-button').forEach((button) => {
  button.addEventListener('click', () => {
    const branch = button.parentElement;
    branch.classList.toggle('is-collapsed');
    button.textContent = `${branch.classList.contains('is-collapsed') ? '▸' : '▾'} ${button.textContent.slice(2)}`;
  });
});

const contentPanel = document.getElementById('content-panel');
const homepage = contentPanel.innerHTML;
const sampleCourses = [
  ['0872', '生活科技概論', 'Introduction to Science and Technology Life', '日大學通識', '01', '2.0', '必修', '吳佳駿', 'I102圖資電腦教室', '(一)3-4'],
  ['0149', '資料庫系統管理', 'Database System and Management', '資工二', '01', '3.0', '必修', '馮玄明', 'I101圖資電腦教室', '(一)5-7'],
  ['0150', 'TCP/IP協定', 'TCP/IP Protocol Suite', '資工二', '01', '3.0', '選修', '柯志亨', 'E321電腦網路實驗室', '(三)2-4'],
  ['0152', '現代程式語言', 'Modern Programming Language', '資工二', '01', '3.0', '選修', '李錫捷', 'E320多媒體實驗室', '(二)5-7'],
  ['0153', '現代軟體工程', 'Modern Software Engineering', '資工二', '01', '3.0', '選修', '潘進儒', 'E320多媒體實驗室', '(五)2-4'],
  ['0148', '計算機結構', 'Computer Architecture', '資工二', '01', '3.0', '必修', '陳鍾誠', 'E320多媒體實驗室', '(四)2-4']
];

let generatedRecord = null;
let selectedCourseCodes = new Set();
function activeCourses() {
  if (!generatedRecord?.courses?.length) return sampleCourses;
  return generatedRecord.courses.map((course) => [course.code, course.name, course.englishName, course.className, course.group, course.credits, course.hours || course.credits, course.requiredType, course.semesterType || '學期', course.teacher, course.classroom, course.time, course.capacity || '50', course.minimum || '10', course.enrolled || '0', course.remarks || '', Boolean(course.selected)]);
}

function selectedCourses() {
  return activeCourses().filter((course) => selectedCourseCodes.has(course[0]));
}

function initializeSelections() {
  selectedCourseCodes = new Set(activeCourses().filter((course) => course[16]).map((course) => course[0]));
}

function selectedCredits() {
  return selectedCourses().reduce((total, course) => total + Number(course[5] || 0), 0);
}

function findCourse(code) {
  return activeCourses().find((course) => course[0] === code);
}

function isUsableAiRecord(record, context) {
  if (!record?.courses || record.courses.length < 54) return false;
  const selected = record.courses.filter((course) => course.selected);
  const selectedCreditTotal = selected.reduce((total, course) => total + Number(course.credits || 0), 0);
  if (selected.length < 7 || selected.length > 9 || selectedCreditTotal < 16 || selectedCreditTotal > 25) return false;
  const roomCodes = context.classrooms.map((entry) => entry.split('｜')[0]).sort((a, b) => b.length - a.length);
  return record.courses.every((course) => {
    const capacity = Number(course.capacity);
    const enrolled = Number(course.enrolled);
    const roomIsKnown = roomCodes.some((code) => String(course.classroom).includes(code));
    const csMatch = !String(course.className).includes('資工') || context.csFaculty.includes(course.teacher);
    const capacityMatch = Number.isFinite(capacity) && Number.isFinite(enrolled) && enrolled <= capacity && (enrolled !== capacity || course.remarks === '額滿');
    return roomIsKnown && csMatch && capacityMatch;
  });
}

function courseTable(mode = 'result', rows = selectedCourses()) {
  const actionLabel = mode === 'withdraw' ? '退選' : mode === 'add' ? '加選' : '';
  const actionHeader = actionLabel ? `<th>${actionLabel}</th>` : '';
  const actions = (index, row) => actionLabel ? `<td><input type="checkbox" data-course-choice="${row[0]}" aria-label="${actionLabel}第 ${index + 1} 門課" ${actionLabel === '加選' && selectedCourseCodes.has(row[0]) ? 'checked' : ''} ${actionLabel === '加選' && row[15] === '額滿' && !selectedCourseCodes.has(row[0]) ? 'disabled' : ''}></td>` : '';
  return `<div class="table-wrap"><table class="course-grid"><thead><tr>${actionHeader}<th>選課代號</th><th>科目</th><th>科目英文名</th><th>班級</th><th>分組</th><th>學分</th><th>小時</th><th>必選修</th><th>開課別</th><th>教師</th><th>教室</th><th>時間</th><th>上限人數</th><th>下限人數</th><th>實收人數</th><th>備註</th></tr></thead><tbody>${rows.map((row, index) => `<tr class="${row[15] === '額滿' ? 'is-full' : ''}">${actions(index, row)}${row.slice(0, 16).map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function renderAddCourseList(category = '一般課程', selection = '') {
  const selectedText = selection ? `<p class="selection-summary">目前查詢條件：${selection}</p>` : '';
  const rows = category === '通識課程' ? activeCourses().filter((course) => course[7] === '通識') : activeCourses().filter((course) => course[7] !== '通識');
  return `<div class="course-page"><div class="breadcrumb">首頁　&gt;　選課作業　&gt;　線上加選作業　&gt;　${category}</div><h1 class="course-title">網路選課－${category}線上加選作業</h1>${selectedText}<div class="submit-row"><span>請選擇欲加選的科目：${category === '通識課程' ? '額滿課程以紅字標示，無法勾選。' : ''}</span><span><button class="small-button" data-add-back>回上一頁</button><button class="small-button" data-commit-add>確定送出</button></span></div>${courseTable('add', rows)}<div class="submit-row"><span></span><span><button class="small-button" data-add-back>回上一頁</button><button class="small-button" data-commit-add>確定送出</button></span></div></div>`;
}

function renderResultList() {
  const credits = selectedCredits();
  return `<div class="course-page"><div class="breadcrumb">首頁　&gt;　選課作業　&gt;　選課結果查詢</div><h1 class="course-title">網路選課－選課結果查詢</h1><div class="student-line"><span>班級：${document.getElementById('student-program').textContent}　姓名：${document.getElementById('student-name').textContent}　學號：${document.getElementById('student-id').textContent}</span><span>現在時間：115/09/18</span></div><p class="total-line">總學分數（不含抵免科目及教育學程）：${credits.toFixed(1)}　　剩餘可選學分數：${Math.max(0, 25 - credits).toFixed(1)}</p><p><strong>選課結果：</strong></p>${courseTable()}</div>`;
}

function renderCoursePage(page) {
  const shell = (body) => `<div class="course-page"><div class="breadcrumb">首頁　&gt;　選課作業　&gt;　${page}</div>${body}</div>`;
  if (page === '線上加選作業') return shell(`
    <h1 class="course-title">網路選課－線上加選作業－</h1>
    <p class="course-note">請選擇要加選的課程類別：（欲查詢二技一、二年級之課程者，年級請選擇 3、4）</p>
    <table class="choice-table"><tbody>
      <tr><td>通識課程：</td><td><select><option>全部</option><option>人文藝術</option><option>社會科學</option><option>自然科學</option></select> <button class="small-button" data-view-add="通識課程">確定</button></td></tr>
      <tr><td>一般課程：</td><td><select aria-label="學制"><option>日間部學士班</option><option>日間部研究所碩士班</option><option>日間部博士班</option><option>推廣教育學分班</option></select> <select aria-label="系所">${departments.map((department) => `<option>${department}</option>`).join('')}</select>　年級：<select aria-label="年級"><option>1</option><option selected>2</option><option>3</option><option>4</option><option>5</option></select> <button class="small-button" data-view-add="一般課程">確定</button></td></tr>
      <tr><td>體育課程：</td><td><button class="small-button" data-view-add="體育課程">確定</button></td></tr>
      <tr><td>大學國文：</td><td><button class="small-button" data-view-add="大學國文">確定</button></td></tr>
      <tr><td>大學英文：</td><td><button class="small-button" data-view-add="大學英文">確定</button></td></tr>
    </tbody></table>`);
  if (page === '線上退選作業') return shell(`
    <h1 class="course-title">網路選課－線上退選作業－</h1>
    <div class="submit-row"><span>你的選課結果如下，請選擇要退選的科目：</span><button class="small-button" data-commit-withdraw>確定送出</button></div>${courseTable('withdraw')}
    <div class="submit-row"><span></span><button class="small-button" data-commit-withdraw>確定送出</button></div>`);
  if (page === '選課結果查詢') return shell(`<h1 class="course-title">網路選課－選課結果查詢</h1><p>請確認選課資料；如有疑義，請持列印之「選課結果」洽詢承辦單位更正。</p><div class="submit-row"><span></span><button class="small-button" data-view-result>確定</button></div>`);
  if (page === '停修申請') return shell('<div class="closed-page"><strong>非開放時間</strong></div>');
  if (page === '通識選課初選作業') return shell('<div class="closed-page">非志願選課時程，不得加選</div>');
  if (page === '人工加選申請') return shell(renderRulePage('人工加選申請', `
    <h2>申請規則</h2>
    <h3>日間部人工加選申請規則</h3>
    <ol><li><strong>必修換班：</strong>因重修、衝堂等情形，需改修同一學期之其他班別必修課程者。</li><li><strong>跨部選課：</strong>符合延修、轉學生或應屆畢業等特定資格，且符合學分與課程限制者，得依規定申請。</li><li><strong>限修課程：</strong>符合開課單位所訂先修、年級或其他資格，並經授課教師同意者。</li></ol>
    <h3>辦理方式</h3><ol><li>先於系統確認可申請的課程及申請資格。</li><li>列印申請表並依序完成授課教師、系（所）主管等核章。</li><li>於公告截止日前送交課務承辦單位；逾期恕不受理。</li></ol>
    <p class="rule-warning">本展示版僅呈現規則；按下確認不會產生申請或變動任何選課資料。</p>`));
  if (page === '超修學分申請') return shell(renderRulePage('超修學分申請', `
    <h2>申請規則</h2><h3>日間部超修學分申請規則</h3>
    <ol><li>前一學年學業成績優良、符合系所規定資格者，得經系（所）主管同意申請超修。</li><li>核准後之修習學分仍須符合學校當學期規定及課程先修、衝堂限制。</li><li>申請人須列印申請表，完成系所審核後，於公告期限內繳交課務承辦單位。</li></ol>
    <h3>提醒</h3><p>實際資格、可超修學分與截止日期均以當學期公告及系所審核結果為準。</p><p class="rule-warning">此為前端版型展示，確認不會送出超修申請。</p>`));
  if (page === '酌減學分申請') return shell(renderRulePage('酌減學分申請', `
    <h2>申請規則</h2><h3>日間部酌減學分申請規則</h3>
    <ol><li>應屆畢業生如已完成畢業應修科目及學分，且不申請提前畢業者，得依規定申請酌減最低修習學分。</li><li>因特殊原因需酌減學分者，應檢附資料並經導師、系（所）主管及相關會議審核。</li><li>核准後當學期仍應至少修習一門課程，並遵守各項修課規定。</li></ol>
    <h3>辦理方式</h3><p>請先確認資格，列印申請表並依公告流程送交審核；實際結果以正式核定為準。</p><p class="rule-warning">此為前端版型展示，確認不會送出酌減學分申請。</p>`));
  if (page === '學分學程資訊') return shell(`<h1 class="course-title">學分學程資訊</h1><section class="program-page"><p>為促進跨領域學習與整合校內資源，本校設有多項學分學程及微學程，學生可依規定申請修習。</p><ul><li>修畢學程規定課程及學分者，得向開設單位申請相關修習證明。</li><li>實際開設課程、申請資格及修習規範，請以各學程當學期公告為準。</li></ul><h2>跨領域學程</h2>${programTable(['智慧高齡服務學程', '企業營運資訊管理學程', '島嶼永續發展學程', '軟體系統整合應用學程'])}<h2>微學程</h2>${programTable(['資訊工程微學程', '釀酒工藝微學程', '華語文教學微學程', '國際事務微學程', '觀光遊憩微學程', '長期照護微學程', '社會工作微學程', '應用英語微學程'])}<h2>跨校學分學程</h2>${programTable(['跨校通識數位學程', '離島創新與永續學程'])}</section>`);
  if (page === '學期成績查詢') return shell(queryForm(page, '請選擇年度及學期：', selectOptions(['115學年度第1學期', '114學年度第2學期', '114學年度第1學期']), 'grades'));
  if (page === '學生期中預警查詢') return shell(noDataPage(page, '目前無學生預警資料'));
  if (page === '歷年成績查詢') return shell(queryForm(page, '請選擇查詢學制：', selectOptions(['全部學期', '日間部學士班']), 'history'));
  if (page === '選課資料查詢') return shell(queryForm(page, '請選擇年度及學期：', selectOptions(['115學年度第1學期', '114學年度第2學期']), 'courses'));
  if (page === '抵免科目查詢') return shell(noDataPage(page, '目前無抵免科目資料'));
  if (page === '課程資料查詢') return shell(queryForm(page, '請選擇開課學年期、開課系所與年級：', `${selectOptions(['115學年度第1學期', '114學年度第2學期'])}${selectOptions(['資訊工程學系', '全校課程'])}${selectOptions(['全部年級', '一年級', '二年級', '三年級', '四年級'])}`, 'courseCatalog'));
  if (page === '課程規劃表') return shell(queryForm(page, '請選擇系所及入學學年度：', `${selectOptions(['資訊工程學系', '電機工程學系', '企業管理學系'])}${selectOptions(['115學年度入學', '114學年度入學', '113學年度入學'])}`, 'plan'));
  if (page === '我的課表') return shell(scheduleResult('我的課表', '資訊工程學系二年級'));
  if (page === '教師課表查詢') return shell(queryForm(page, '請選擇開課學年期及教師：', `${selectOptions(['115學年度第1學期', '114學年度第2學期'])}${selectOptions(csFaculty)}`, 'teacher'));
  if (page === '教室課表查詢') return shell(queryForm(page, '請選擇開課學年期及教室：', `${selectOptions(['115學年度第1學期', '114學年度第2學期'])}${selectOptions(classrooms)}`, 'classroom'));
  if (page === '班級課表查詢') return shell(queryForm(page, '請選擇開課學年期及班級：', `${selectOptions(['115學年度第1學期', '114學年度第2學期'])}${selectOptions(['資訊工程學系二年級', '電機工程學系二年級'])}`, 'classSchedule'));
  if (page === '畢業應修學分課程審核結果查詢') return shell(`<h1 class="course-title">${page}</h1><section class="query-result">${simpleGrid(['審核項目','應修學分','已修學分','審核狀態'], [['校共同必修','28','22','修習中'],['系專業必修','48','21','修習中'],['系選修','24','12','修習中'],['畢業總學分','128','55','尚未達標']])}<p class="small-note">此為 AI 模擬審核結果，正式畢業資格以學校審核為準。</p></section>`);
  if (page === '教學評量教師回覆查詢作業') return shell(noDataPage(page, '目前無教師回覆資料'));
  if (page === '學生預警科目查詢') return shell(noDataPage(page, '目前無預警科目資料'));
  if (page === '離校審核查詢') return shell(`<h1 class="course-title">離校審核查詢</h1><section class="query-result">${simpleGrid(['審核單位','審核狀態','備註'], [['圖書館','未申請','畢業離校時開放'],['課務組','未申請','畢業離校時開放'],['系辦公室','未申請','畢業離校時開放']])}</section>`);
  if (page === '微學程修習結果查詢') return shell(noDataPage(page, '目前無微學程修習資料'));
  if (page === '跨領域學程修習結果查詢') return shell(noDataPage(page, '目前無跨領域學程修習資料'));
  if (page === '輔系雙主修修習結果查詢') return shell(noDataPage(page, '目前無輔系／雙主修修習資料'));
  if (page === '學生個人缺曠請假明細表') return shell(queryForm(page, '請選擇年度及學期：', selectOptions(['115學年度第1學期', '114學年度第2學期', '114學年度第1學期']), 'attendance'));
  if (page === '學生個人獎懲狀況明細表') return shell(queryForm(page, '請選擇年度及學期：', selectOptions(['115學年度第1學期', '114學年度第2學期', '114學年度第1學期']), 'awards'));
  if (page === '學生弱勢助學金資格查詢') return shell(noDataPage(page, '目前無弱勢助學金資格資料'));
  if (page === '兵役申辦查詢') return shell(noDataPage(page, '目前無兵役申辦資料'));
  if (page === '師生郵件查詢') return shell(`<h1 class="course-title">師生郵件查詢</h1><section class="query-result">${simpleGrid(['類別','電子郵件','說明'], [['學生校務信箱','ai-student@example.edu.tw','展示用帳號'],['系辦公室','cs-office@example.edu.tw','展示用聯絡資訊']])}</section>`);
  if (page === '教學評量登錄作業') return shell(`<h1 class="course-title">教學評量登錄作業</h1><section class="query-result"><p>115學年度第1學期　教學評量課程清單</p>${simpleGrid(['科目名稱','授課教師','填寫狀態','操作'], activeCourses().slice(0, 4).map((course, i) => [course[1], course[9], i === 0 ? '已完成' : '未開放', '<button class="small-button" data-demo-action>填寫</button>']))}<p class="small-note">展示版不會開啟或儲存問卷。</p></section>`);
  if (page === '問卷調查') return shell(noDataPage(page, '目前無可填寫問卷'));
  if (page === '學生基本資料表') return shell(profilePage());
  if (page === '社員登錄作業') return shell(clubPage('社員登錄作業', '目前未加入任何社團'));
  if (page === '社團資料維護作業') return shell(clubPage('社團資料維護作業', '目前無可維護的社團資料'));
  if (page === '學期預計活動登錄作業') return shell(clubPage('學期預計活動登錄作業', '目前無學期預計活動資料'));
  if (page === '活動申請登錄作業') return shell(clubPage('活動申請登錄作業', '目前無活動申請資料'));
  if (page === '科目學分抵免申請') return shell(renderRulePage(page, `<h2>申請說明</h2><ol><li>請先確認欲抵免科目及原修課程資料。</li><li>備妥成績單、課程大綱等佐證文件，依系所公告期限提出申請。</li><li>實際抵免結果以系所與教務單位審核為準。</li></ol><p class="rule-warning">展示版的確認按鈕不會建立抵免申請。</p>`));
  if (page === '休退學申請作業') return shell(renderRulePage(page, `<h2>申請說明</h2><p>休學或退學應依學校規定完成申請及審核程序，並注意註冊、學雜費與住宿等相關權益。</p><p class="rule-warning">展示版只呈現流程，不會送出休學或退學申請。</p>`));
  if (page === '復學申請作業') return shell(renderRulePage(page, `<h2>申請說明</h2><p>欲復學者應於公告期間內提出申請，並依規定檢附資料與完成審核。</p><p class="rule-warning">展示版只呈現流程，不會送出復學申請。</p>`));
  if (page === '校內宿舍申請') return shell(renderRulePage(page, `<h2>住宿申請說明</h2><ol><li>依宿舍公告時間及資格提出申請。</li><li>申請後請留意抽籤、床位分配與繳費公告。</li></ol><p class="rule-warning">展示版不會送出住宿申請。</p>`));
  if (page === '學生請假作業') return shell(renderRulePage(page, `<h2>請假說明</h2><ol><li>請依假別與校規於規定期限內提出申請。</li><li>須檢附的證明文件，請依各假別規定辦理。</li></ol><p class="rule-warning">展示版不會建立請假紀錄。</p>`));
  if (page === '弱勢助學補助申請作業') return shell(renderRulePage(page, `<h2>補助申請說明</h2><p>申請資格、所需資料與期限以學務單位當學期公告為準。</p><p class="rule-warning">展示版不會送出補助申請。</p>`));
  if (page === '學雜費減免申請作業') return shell(renderRulePage(page, `<h2>減免申請說明</h2><p>請於申請期間備妥證明文件，依規定完成線上登錄與後續審核程序。</p><p class="rule-warning">展示版不會送出學雜費減免申請。</p>`));
  return null;
}

function renderRulePage(page, body) {
  return `<h1 class="course-title">${page}</h1><section class="rules-panel">${body}<div class="rule-action"><button class="small-button" data-rule-confirm data-rule-name="${page}">確定</button></div></section>`;
}

function programTable(programs) {
  return `<table class="program-table"><thead><tr><th>學程名稱</th><th>資訊</th></tr></thead><tbody>${programs.map((program) => `<tr><td>${program}</td><td><button class="small-button" data-program-info="${program}">點擊下載</button></td></tr>`).join('')}</tbody></table>`;
}

function selectOptions(options) {
  return `<select>${options.map((option) => `<option>${option}</option>`).join('')}</select>`;
}

function queryForm(title, prompt, controls, key) {
  return `<h1 class="course-title">${title}</h1><section class="query-form"><p>${prompt}</p><div class="filter-row">${controls}<button class="small-button" data-show-query="${key}">確定送出</button></div></section>`;
}

function noDataPage(title, message = '目前無資料') {
  return `<h1 class="course-title">${title}</h1><section class="query-result empty-result"><strong>${message}</strong><p>AI 模擬學生資料服務完成後，系統將依登入條件產生對應內容。</p></section>`;
}

function queryResult(key, condition = '') {
  const title = {
    grades: '學期成績查詢', history: '歷年成績查詢', courses: '選課資料查詢', courseCatalog: '課程資料查詢',
    plan: '課程規劃表', teacher: '教師課表查詢', classroom: '教室課表查詢', classSchedule: '班級課表查詢'
  }[key] || '查詢結果';
  if (key === 'grades') { const scores = Object.fromEntries((generatedRecord?.grades || []).map((grade) => [grade.courseCode, grade.score])); return `<h1 class="course-title">${title}</h1><section class="query-result"><div class="print-line">115學年度第1學期　　列印日期：115/09/18</div><p>班級：${document.getElementById('student-program').textContent}　　學號：${document.getElementById('student-id').textContent}　　姓名：${document.getElementById('student-name').textContent}</p><p class="small-note">[＊] 表示尚未傳送成績。</p>${simpleGrid(['項次','科目名稱','學分數','授課時數','必選修','學期成績'], activeCourses().slice(0, 22).map((row, i) => [i + 1, row[1], row[5], row[6], `【${row[7]}】`, scores[row[0]] || '＊']))}<p class="summary-line">操行成績：—　　總平均：—　　班名次／班人數：—</p></section>`; }
  if (key === 'history') return `<h1 class="course-title">${title}</h1><section class="query-result"><p>AI 模擬學生　歷年成績總覽</p>${simpleGrid(['學年期','修習學分','及格學分','學期平均','備註'], [['114學年度第2學期','18','18','82.4','正常'],['115學年度第1學期','17','—','—','成績尚未公告']])}</section>`;
  if (key === 'courses') return `<h1 class="course-title">${title}</h1><section class="query-result"><p>115學年度第1學期　選課資料</p>${courseTable()}</section>`;
  if (key === 'courseCatalog') return `<h1 class="course-title">${title}</h1><section class="query-result">${simpleGrid(['開課代號','科目名稱','英文名稱','學分','開課單位','授課教師'], activeCourses().slice(0, 20).map((row) => [row[0],row[1],row[2],row[5],document.getElementById('student-program').textContent,row[9]]))}</section>`;
  if (key === 'plan') return `<h1 class="course-title">${title}</h1><section class="query-result"><p>資訊工程學系　115學年度入學　課程規劃表（展示）</p>${simpleGrid(['年級','類別','課程名稱','學分','修習狀態'], [['二','系必修','計算機結構','3','已規劃'],['二','系必修','資料庫系統管理','3','已規劃'],['二','系選修','現代程式語言','3','可選修'],['二','通識','生活科技概論','2','已規劃']])}</section>`;
  if (key === 'teacher') return scheduleResult('教師課表查詢', condition || '吳佳駿');
  if (key === 'classroom') return scheduleResult('教室課表查詢', condition || 'E320｜E320多媒體實驗室');
  if (key === 'classSchedule') return scheduleResult('班級課表查詢', condition || '資訊工程學系二年級');
  if (key === 'attendance') return `<h1 class="course-title">學生個人缺曠請假明細表</h1><section class="query-result">${simpleGrid(['日期','科目名稱','節次','類別','時數','備註'], [['115/09/09','資料庫系統管理','第 3 節','公假','1','展示資料'],['115/09/16','TCP/IP 協定','第 2 節','病假','1','展示資料']])}</section>`;
  if (key === 'awards') return `<h1 class="course-title">學生個人獎懲狀況明細表</h1><section class="query-result empty-result"><strong>目前無獎懲資料</strong><p>AI 模擬學生資料服務完成後將依條件產生資料。</p></section>`;
  return noDataPage(title);
}

function simpleGrid(headers, rows) {
  return `<div class="table-wrap"><table class="query-grid"><thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function scheduleResult(title, subject) {
  if (title === '我的課表') return studentSchedule();
  return `<h1 class="course-title">${title}</h1><section class="query-result"><p>查詢條件：${subject}</p>${simpleGrid(['節次／時間','星期一','星期二','星期三','星期四','星期五'], [['第 1 節','', '','', '',''],['第 2 節','', '現代程式語言','TCP/IP 協定','',''],['第 3 節','資料庫系統管理','現代程式語言','TCP/IP 協定','計算機結構',''],['第 4 節','資料庫系統管理','','TCP/IP 協定','計算機結構',''],['第 5 節','','','','','現代軟體工程']])}</section>`;
}

function studentSchedule() {
  const days = ['一', '二', '三', '四', '五'];
  const slots = Array.from({ length: 6 }, (_, index) => `${index * 2 + 1}-${index * 2 + 2}`);
  const grid = Object.fromEntries(days.map((day) => [day, {}]));
  selectedCourses().forEach((course) => {
    const match = /^\((.)\)(\d+)-(\d+)$/.exec(course[11]);
    if (!match || !grid[match[1]]) return;
    const label = `${course[1]}<br><small>${course[9]}／${course[10]}</small>`;
    grid[match[1]][`${match[2]}-${match[3]}`] = label;
  });
  const rows = slots.map((slot) => [`第 ${slot} 節`, ...days.map((day) => grid[day][slot] || '')]);
  return `<h1 class="course-title">我的課表</h1><section class="query-result"><p>本學期已選 ${selectedCourses().length} 門課，共 ${selectedCredits().toFixed(1)} 學分。</p>${simpleGrid(['節次／時間', ...days.map((day) => `星期${day}`)], rows)}</section>`;
}

function profilePage() {
  return `<h1 class="course-title">學生基本資料表</h1><section class="profile-card"><h2>基本資料</h2><div class="profile-grid"><label>姓名<input value="AI 模擬學生" readonly></label><label>學號<input value="AI115410001" readonly></label><label>系所<input value="資訊工程學系" readonly></label><label>年級<input value="二年級" readonly></label><label>電子郵件<input value="ai-student@example.edu.tw" readonly></label><label>聯絡電話<input value="資料服務啟用後產生" readonly></label></div><p class="small-note">本頁為展示資料；資料服務啟用後將由 AI 產生虛構且不識別個人的內容。</p></section>`;
}

function clubPage(title, message) {
  return `<h1 class="course-title">${title}</h1><section class="query-result empty-result"><strong>${message}</strong><p>展示版不會進行登錄、維護或送出活動資料。</p></section>`;
}

document.querySelectorAll('.tree-menu li button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    document.querySelectorAll('.tree-menu li').forEach((node) => node.classList.remove('active'));
    item.classList.add('active');
    const page = button.dataset.page;
    const coursePage = renderCoursePage(page);
    contentPanel.innerHTML = coursePage || `<div class="breadcrumb">首頁　&gt;　${page}</div><section class="empty-page"><h1>${page}</h1><p>此功能版型已建立。</p><p>目前尚未載入 AI 生成的學生資料，資料服務建置後將在此顯示對應內容。</p><button id="back-home" class="back-home">回到系統公告</button></section>`;
    contentPanel.querySelectorAll('[data-view-add]').forEach((control) => control.addEventListener('click', () => {
      const selection = Array.from(control.closest('tr')?.querySelectorAll('select') || []).map((select) => select.options[select.selectedIndex].text).join('／');
      contentPanel.innerHTML = renderAddCourseList(control.dataset.viewAdd, selection);
      bindCoursePreviewControls();
    }));
    contentPanel.querySelectorAll('[data-view-result]').forEach((control) => control.addEventListener('click', () => { contentPanel.innerHTML = renderResultList(); }));
    bindCoursePreviewControls();
    document.getElementById('back-home')?.addEventListener('click', () => {
      contentPanel.innerHTML = homepage;
      document.querySelectorAll('.tree-menu li').forEach((node) => node.classList.remove('active'));
    });
  });
});

function bindCoursePreviewControls() {
  contentPanel.querySelectorAll('[data-add-back]').forEach((control) => control.addEventListener('click', () => { contentPanel.innerHTML = renderCoursePage('線上加選作業'); bindCoursePreviewControls(); }));
  contentPanel.querySelectorAll('[data-demo-action]').forEach((control) => control.addEventListener('click', () => alert('展示版不會送出、加選或退選任何課程。')));
  contentPanel.querySelectorAll('[data-commit-add]').forEach((control) => control.addEventListener('click', () => {
    const codes = Array.from(contentPanel.querySelectorAll('[data-course-choice]:checked')).map((input) => input.dataset.courseChoice);
    const messages = [];
    codes.forEach((code) => {
      const course = findCourse(code);
      if (!course || selectedCourseCodes.has(code)) return;
      if (course[15] === '額滿') { messages.push(`${course[1]}：額滿，無法加選`); return; }
      const conflict = selectedCourses().find((selected) => selected[11] === course[11]);
      if (conflict) { messages.push(`${course[1]}：與「${conflict[1]}」時間衝堂`); return; }
      if (selectedCredits() + Number(course[5]) > 25) { messages.push(`${course[1]}：加選後超過 25 學分上限`); return; }
      selectedCourseCodes.add(code);
      messages.push(`${course[1]}：已加選`);
    });
    const title = contentPanel.querySelector('.course-title')?.textContent || '';
    const category = title.includes('通識') ? '通識課程' : title.includes('體育') ? '體育課程' : title.includes('國文') ? '大學國文' : title.includes('英文') ? '大學英文' : '一般課程';
    alert(messages.length ? messages.join('\n') : '未選擇任何可加選課程。');
    contentPanel.innerHTML = renderAddCourseList(category);
    bindCoursePreviewControls();
  }));
  contentPanel.querySelectorAll('[data-commit-withdraw]').forEach((control) => control.addEventListener('click', () => {
    const codes = Array.from(contentPanel.querySelectorAll('[data-course-choice]:checked')).map((input) => input.dataset.courseChoice);
    if (!codes.length) { alert('請先勾選要退選的課程。'); return; }
    codes.forEach((code) => selectedCourseCodes.delete(code));
    alert(`已退選 ${codes.length} 門課程；選課結果與我的課表已同步更新。`);
    contentPanel.innerHTML = renderCoursePage('線上退選作業');
    bindCoursePreviewControls();
  }));
  contentPanel.querySelectorAll('[data-rule-confirm]').forEach((control) => control.addEventListener('click', () => {
    const page = control.dataset.ruleName;
    contentPanel.innerHTML = `<div class="course-page"><div class="breadcrumb">首頁　&gt;　選課作業　&gt;　${page}</div><h1 class="course-title">${page}</h1><div class="rule-status"><strong>目前尚無可申請資料</strong><p>此展示版尚未串接 AI 模擬學生資料；按下確認不會建立任何申請。</p><button class="small-button" data-rule-back="${page}">回申請規則</button></div></div>`;
    bindCoursePreviewControls();
  }));
  contentPanel.querySelectorAll('[data-rule-back]').forEach((control) => control.addEventListener('click', () => {
    contentPanel.innerHTML = renderCoursePage(control.dataset.ruleBack);
    bindCoursePreviewControls();
  }));
  contentPanel.querySelectorAll('[data-program-info]').forEach((control) => control.addEventListener('click', () => alert(`「${control.dataset.programInfo}」的展示文件尚未載入。`)));
  contentPanel.querySelectorAll('[data-show-query]').forEach((control) => control.addEventListener('click', () => {
    const condition = Array.from(control.parentElement.querySelectorAll('select')).map((select) => select.options[select.selectedIndex].text).join('／');
    contentPanel.innerHTML = `<div class="course-page"><div class="breadcrumb">首頁　&gt;　查詢　&gt;　查詢結果</div>${queryResult(control.dataset.showQuery, condition)}</div>`;
    bindCoursePreviewControls();
  }));
}

document.getElementById('toggle-menu').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('hidden-menu');
});

document.getElementById('change-password').addEventListener('click', () => {
  contentPanel.innerHTML = `<div class="course-page password-page"><h1 class="course-title">修改密碼作業</h1><section class="password-panel"><label>新密碼：<input type="password" placeholder="展示版不會保存"></label><label>確認密碼：<input type="password" placeholder="再次輸入新密碼"></label><p>密碼需包含大小寫英文、數字與標點至少三項，長度最多 10 碼。</p><div><button class="small-button" data-demo-action>確定送出</button><button class="small-button" data-password-clear>清除重填</button></div></section></div>`;
  bindCoursePreviewControls();
  contentPanel.querySelector('[data-password-clear]')?.addEventListener('click', () => contentPanel.querySelectorAll('input').forEach((input) => { input.value = ''; }));
});
document.getElementById('logout').addEventListener('click', () => {
  appShell.hidden = true;
  loginScreen.hidden = false;
  document.getElementById('login-password').value = '';
  loginForm.querySelector('#login-id').focus();
});

// 獨立於資料產生流程的最後保護：任何登入載入遮罩最多只顯示 15 秒。
const loadingOverlay = document.getElementById('generation-overlay');
new MutationObserver(() => {
  if (!loadingOverlay.hidden) window.setTimeout(() => { loadingOverlay.hidden = true; loadingOverlay.style.display = 'none'; }, 15000);
}).observe(loadingOverlay, { attributes: true, attributeFilter: ['hidden'] });
