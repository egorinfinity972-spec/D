// QR-зображення демо-документів. Ключ має збігатися зі значенням qr у docs.
const QR_DATA = {
  "DEMO-ID-2048-7316":
    "data:image/png;base64,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",
  "DEMO-PP-7316-2048":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAAAklEQVR4AewaftIAAAdiSURBVO3BQaod2Q5FwW1xJyBQR/MfnDoCDcHf3U+Rx5BZWe/JXhE/fv4iACuZAKxlArCWCcBaJgBrmQCsZQKwlgnAWh/9hkfqTzRdesIjdTJduuKRetN06W/kkfoTTZeumACsZQKwlgnAWiYAa5kArGUCsJYJwFofPTRd+q48Ul/FI3VluvSER+q78khdmS59lenSd+WRussEYC0TgLVMANYyAVjLBGAtE4C1TADW+uhlHqm3TJfe4pE6mS6deKSueKROpktPeKTeMl26yyN1Ml36Kh6pt0yX3mICsJYJwFomAGuZAKxlArCWCcBaH+EV06W3TJfu8kidTJfeMl3Cv8sEYC0TgLVMANYyAVjLBGAtE4C1TADW+gi3eKTeMl068UidTJfu8kidTJfe4pE6mS7h/5kArGUCsJYJwFomAGuZAKxlArCWCcBaH71suvQ3mi7d5ZH6KtOlJ6ZLd02Xvsp0aSMTgLVMANYyAVjLBGAtE4C1TADWMgFY66OHPFJ/o+nSiUfqynTpienSiUfqynTpxCN1Ml068UhdmS6deKROpkt3eaT+RCYAa5kArGUCsJYJwFomAGuZAKz14+cvwj94pJ6YLl3xSJ1Ml97ikXrTdAn/HROAtUwA1jIBWMsEYC0TgLVMANYyAVjro9/wSJ1Ml048Ut/RdOlkuvSER+otHqmT6dLfyCP1HU2X3mICsJYJwFomAGuZAKxlArCWCcBaJgBrffSQR+qu6dKJR+pkunSXR+qJ6dLJdOkuj9TJdOnEI3XXdOlvNF3ayARgLROAtUwA1jIBWMsEYC0TgLVMANb66GXTpSseqTd5pO6aLp14pN4yXdrKI/WW6dJd06XvyiN1Ml26YgKwlgnAWiYAa5kArGUCsJYJwFo/fv6iBzxSJ9OluzxST0yXrniknpguvcUj9Zbp0hMeqbdMl97ikTqZLj3hkboyXXqLCcBaJgBrmQCsZQKwlgnAWiYAa5kArPXRb3ikTqZLd3mkTqZLT3ik7pounXik7pouPTFdOvFI3eWROpkunXik7vJIvWW69IRH6mS6dMUj9cR06YoJwFomAGuZAKxlArCWCcBaJgBrmQCs9dFvTJe2mi7d5ZE6mS6deKTumi79iaZLb/JIbTRdussEYC0TgLVMANYyAVjLBGAtE4C1TADW+ughj9TJdOktHqm7pksn06UTj9TJdOmKR+pkuvTEdOktHqm7PFLflUfqZLr0HZkArGUCsJYJwFomAGuZAKxlArDWR9+YR+pkunSXR+pkuvSER+rKdOmreKSemC6deKS+I4/UEx6pk+nSVzABWMsEYC0TgLVMANYyAVjLBGAtE4C1PnpouvSW6dKJR+qrTJdOPFJXPFJPTJe+ikfqZLp0xSN1Ml16i0fqienSiUfqynTpxCN1Ml26YgKwlgnAWiYAa5kArGUCsJYJwFomAGt99BseqbdMl940XbrikTrxSD0xXbrikXrCI3UyXboyXTrxSJ1Ml+6aLp14pE6mSyceqSvTpROP1BPTpa9gArCWCcBaJgBrmQCsZQKwlgnAWiYAa/34+YsOPFIn06UTj9Rd06UnPFJvmS6deKSuTJdOPFJfZbr0hEfqrunSWzxSW02XrpgArGUCsJYJwFomAGuZAKxlArDWR19ounTikTqZLp1Ml+7ySJ14pO7ySJ1Ml048UifTpbd4pO6aLj3hkTqZLl2ZLp14pE6mS9+RCcBaJgBrmQCsZQKwlgnAWiYAa5kArPXRy6ZLVzxST3ik3jJdesIj9Zbp0olH6sp06cQjdTJdOvFI3eWResIj9bcxAVjLBGAtE4C1TADWMgFYywRgLROAtT76jenSW6ZL35VH6mS6dDJdussjdTJdOpkuXfFInUyXTjxSX2W69BaP1BMeqbdMl66YAKxlArCWCcBaJgBrmQCsZQKwlgnAWh/9hkfqTzRdOpkuPeGRumu69Jbp0olH6onp0lfxSF2ZLr1punTFI/UWE4C1TADWMgFYywRgLROAtUwA1vrooenSd+WRussjdTJd+q48UndNl048Uiceqa8yXdpounSXCcBaJgBrmQCsZQKwlgnAWiYAa5kArPXRyzxSb5kubTRdetN06S6P1HflkdpouvQWE4C1TADWMgFYywRgLROAtUwA1jIBWOsj/Oc8Uk9Ml048UlemSyfTpSc8Ut/RdOnEI/UWj9TJdOkuE4C1TADWMgFYywRgLROAtUwA1jIBWOsjvGK6dMUjhX+aLp14pE6mS1c8Um/ySH0FE4C1TADWMgFYywRgLROAtUwA1vrx8xcdeKROpkvflUfqynTpCY/UXdOlE4/UE9OluzxSJ9Olt3ikTqZLJx6pK9OlE4/UdzVdumICsJYJwFomAGuZAKxlArCWCcBaJgBrffSQR+pP5JE6mS6deKTumi6deKROPFJXpktv8khdmS6dTJdOPFJvmS6deKTeMl26ywRgLROAtUwA1jIBWMsEYC0TgLVMANb68fMXAVjJBGAtE4C1TADWMgFYywRgLROAtf4H9Pws7exlOaQAAAAASUVORK5CYII=",
  "DEMO-DL-6402-1859":
    "data:image/png;base64,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",
  "DEMO-TAX-3815-6204":
    "data:image/png;base64,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",
  "DEMO-CERT-5720-1493":
    "data:image/png;base64,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",
};
// Демонстраційний QR для паспорта громадянина України.
QR_DATA["DEMO-UA-2048-7316"] = QR_DATA["DEMO-ID-2048-7316"];

// ДАНІ ДОКУМЕНТІВ: тут можна змінювати назви, типи й демо-значення карток.
const docs = [
  {
    title: "єДокумент",
    kind: "Документ громадянина",
    number: "DEMO-ID-2048-7316",
    date: "12.05.1994",
    tax: "0000000000",
    name: ["Демонстраційна", "Марія", "Демівна"],
    qr: "DEMO-ID-2048-7316",
  },
  {
    title: "Паспорт громадянина України",
    kind: "Паспорт громадянина України",
    number: "86260914",
    date: "12.05.1994",
    tax: "0000000000",
    name: ["Демонстраційна", "Марія", "Демівна"],
    qr: "DEMO-UA-2048-7316",
  },
  {
    title: "Закордонний паспорт",
    kind: "Документ для подорожей",
    number: "DEMO-PP-7316-2048",
    date: "12.05.1994",
    tax: "0000000000",
    name: ["Демонстраційна", "Марія", "Демівна"],
    qr: "DEMO-PP-7316-2048",
  },
  {
    title: "Посвідчення водія",
    kind: "Категорія B",
    number: "BX183546",
    date: "12.05.1994",
    tax: "0000000000",
    name: ["Демонстраційна", "Марія", "Демівна"],
    qr: "DEMO-DL-6402-1859",
  },
  {
    title: "Картка платника податків",
    kind: "РНОКПП",
    number: "DEMO-TAX-3815-6204",
    date: "12.05.1994",
    tax: "516406916",
    name: ["Демонстраційна", "Марія", "Демівна"],
    qr: "DEMO-TAX-3815-6204",
  },
];
function loadSavedDocuments() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("diya-demo-documents") || "null",
    );
    if (Array.isArray(saved) && saved.length) {
      const valid = saved.filter(
        (doc) =>
          doc && typeof doc.title === "string" && Array.isArray(doc.name),
      );
      if (valid.length) {
        docs.splice(0, docs.length, ...valid);
        docs.forEach((doc) => {
          if (!QR_DATA[doc.qr]) doc.qr = "DEMO-ID-2048-7316";
        });
      }
    }
  } catch {}
}
function saveDocuments() {
  try {
    localStorage.setItem("diya-demo-documents", JSON.stringify(docs));
  } catch {}
}
loadSavedDocuments();
// Міграція старих локальних даних: додати вигадану картку-макет без QR чи штрихкоду.
if (!docs.some((doc) => doc.title === "Студентська картка (демо-макет)")) {
  docs.push({
    title: "Студентська картка (демо-макет)",
    kind: "ВИГАДАНИЙ НАВЧАЛЬНИЙ ПРОФІЛЬ",
    number: "DEMO-STU-2026-001",
    studentNumber: "DEMO-STU-2026-001",
    date: "30.06.2028",
    tax: "0000000000",
    name: ["Демонстраційна", "Марія", "Демівна"],
    qr: "DEMO-ID-2048-7316",
  });
  saveDocuments();
}
const savedTaxCard = docs.find(
  (doc) => doc.title === "Картка платника податків",
);
if (savedTaxCard) {
  savedTaxCard.kind = "РНОКПП";
  if (!savedTaxCard.tax || savedTaxCard.tax === "0000000000")
    savedTaxCard.tax = "516406916";
}
const savedDriverLicense = docs.find(
  (doc) => doc.title === "Посвідчення водія",
);
if (savedDriverLicense?.number === "DEMO-DL-6402-1859")
  savedDriverLicense.number = "BX183546";
const savedUaPassport = docs.find(
  (doc) => doc.title === "Паспорт громадянина України",
);
if (savedUaPassport?.number === "DEMO-UA-2048-7316")
  savedUaPassport.number = "86260914";
// НАЗВИ ВКЛАДОК та SVG-іконки нижньої навігації.
const tabs = [
  [
    "feed",
    "Стрічка",
    '<rect x="3.5" y="3" width="13" height="17" rx="2.5"/><path d="M7 7h6M7 10h6M7 13h4"/><path d="M17 9h2.5a1.5 1.5 0 0 1 1.5 1.5V19h-4"/>',
  ],
  [
    "docs",
    "Документи",
    '<rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M8 7h8M8 10h8M8 14h5"/><path d="M8 17h3"/>',
  ],
  [
    "ai",
    "Дія.АІ",
    '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 5.5l1.6 4.9 4.9 1.6-4.9 1.6-1.6 4.9-1.6-4.9-4.9-1.6 4.9-1.6z"/>',
  ],
  [
    "services",
    "Сервіси",
    '<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M13 5.5l-4 7h3l-1 6 4-8h-3z"/>',
  ],
  [
    "menu",
    "Меню",
    '<circle cx="12" cy="8" r="3.5"/><circle cx="12" cy="12" r="9"/><path d="M5.5 19c.7-3.1 3-4.7 6.5-4.7s5.8 1.6 6.5 4.7"/>',
  ],
];
// Ініціалізація навігації та створення розмітки карток документів.
const nav = document.getElementById("nav");
nav.innerHTML = tabs
  .map(
    ([id, label, icon]) =>
      `<button data-page="${id}" class="${id === "docs" ? "active" : ""}"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg><span>${label}</span></button>`,
  )
  .join("");
function portrait() {
  return `<svg viewBox="0 0 140 190" aria-label="Ілюстрація профілю"><rect width="140" height="190" fill="#e8eeeb"/><path d="M17 190c2-42 20-61 53-61s52 20 54 61" fill="#253338"/><path d="M48 123l22 20 22-20-5-22H53z" fill="#d7a17f"/><ellipse cx="70" cy="73" rx="38" ry="48" fill="#d9ad91"/><path d="M32 66c-3-36 19-54 40-54 27 0 42 20 37 56l-7-19c-15 1-39-5-54-16-4 14-9 25-16 33" fill="#493b36"/><path d="M48 73h11m22 0h11" stroke="#42332e" stroke-width="3" stroke-linecap="round"/><path d="M60 100q10 7 20 0" fill="none" stroke="#805b4d" stroke-width="2"/><path d="M48 86q22 20 44 0" fill="#513a35"/><path d="M60 103h20" stroke="#f0f0e9" stroke-width="4"/></svg>`;
}
function ean(index) {
  let n = String(200000000000 + index * 1937).slice(0, 12);
  let sum = [...n].reduce((a, c, i) => a + Number(c) * (i % 2 ? 3 : 1), 0);
  let code = n + ((10 - (sum % 10)) % 10);
  let seed = code.split("").map(Number);
  let bits = "101";
  const L = [
      "0001101",
      "0011001",
      "0010011",
      "0111101",
      "0100011",
      "0110001",
      "0101111",
      "0111011",
      "0110111",
      "0001011",
    ],
    G = [
      "0100111",
      "0110011",
      "0011011",
      "0100001",
      "0011101",
      "0111001",
      "0000101",
      "0010001",
      "0001001",
      "0010111",
    ],
    R = [
      "1110010",
      "1100110",
      "1101100",
      "1000010",
      "1011100",
      "1001110",
      "1010000",
      "1000100",
      "1001000",
      "1110100",
    ],
    P = [
      "LLLLLL",
      "LLGLGG",
      "LLGGLG",
      "LLGGGL",
      "LGLLGG",
      "LGGLLG",
      "LGGGLL",
      "LGLGLG",
      "LGLGGL",
      "LGGLGL",
    ][seed[0]];
  for (let i = 1; i <= 6; i++) bits += (P[i - 1] === "L" ? L : G)[seed[i]];
  bits += "01010";
  for (let i = 7; i <= 12; i++) bits += R[seed[i]];
  bits += "101";
  let rect = "";
  for (let i = 0; i < bits.length; i++)
    if (bits[i] === "1")
      rect += `<rect x="${i}" y="0" width="1" height="${i < 3 || i >= 92 ? 38 : 31}"/>`;
  return {
    code,
    svg: `<svg viewBox="0 0 ${bits.length} 38" preserveAspectRatio="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="${bits.length}" height="38" fill="white"/>${rect}</svg>`,
  };
}
const carousel = document.getElementById("carousel");
const dots = document.getElementById("dots");
let activeDoc = 0;
let savedSignatureData = "";
// Автоматичний час ленти: локальний час відкриття застосунку мінус 2 год 20 хв.
const applicationOpenedAt = new Date();
const defaultDocumentUpdateTime = (() => {
  const adjusted = new Date(applicationOpenedAt.getTime() - 140 * 60 * 1000);
  return `${String(adjusted.getHours()).padStart(2, "0")}:${String(adjusted.getMinutes()).padStart(2, "0")}`;
})();
const defaultDocumentUpdateDate = (() => {
  const date = new Date(applicationOpenedAt);
  date.setDate(date.getDate() - 4);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
})();
const DOCUMENT_UPDATE_TIME_KEY = "diya-demo-document-update-time";
const DOCUMENT_UPDATE_DATE_KEY = "diya-demo-document-update-date";
let documentUpdatedTime = defaultDocumentUpdateTime;
let documentUpdatedDateValue = defaultDocumentUpdateDate;
function formatDocumentUpdatedLabel(
  time = documentUpdatedTime,
  dateValue = documentUpdatedDateValue,
) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const selectedDate = new Date(year, month - 1, day);
  const date = new Intl.DateTimeFormat("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(selectedDate);
  return `Документ оновлено о ${time} | ${date}`;
}
let documentUpdatedLabel = formatDocumentUpdatedLabel();
const slideCount = () => docs.length + 1;
function renderCarousel() {
  const documentSlides = docs
    .map((doc, index) => {
      const barcode = ean(index + 1);
      const isTaxCard = doc.title === "Картка платника податків";
      const isDriverLicense = doc.title === "Посвідчення водія";
      const isUaPassport = doc.title === "Паспорт громадянина України";
      const isForeignPassport = doc.title === "Закордонний паспорт";
      const isStudentDemo = doc.title === "Студентська картка (демо-макет)";
      const frontFace = isStudentDemo
        ? `<div class="face front student-demo-front">
            
            <div class="doc-title">Студентський квиток</div>
            
            <div class="doc-main student-demo-main">
              <div class="portrait student-demo-portrait" data-portrait>${portrait()}</div>
              <div class="facts student-demo-facts">
                <label>Номер:</label><strong class="student-card-number">${doc.studentNumber || doc.number}</strong>
                <label class="tax">Дійсний до:</label><strong>30.06.2028</strong>
                <label class="tax">Форма навчання:</label><strong>Денна</strong>
              </div>
            </div>
            <div class="ticker student-demo-ticker"><span>Документ дійсний · Дані оновлено · Статус студента активний · Документ дійсний · Дані оновлено · Статус студента активний ·</span></div>
            <div class="person student-demo-person">${doc.name.map((name) => `<span>${name}</span>`).join("")}</div>
            <button type="button" class="more student-demo-more" aria-label="Дії з демо-макетом">•••</button>
          </div>`
        : isTaxCard
          ? `<div class="face front tax-card-front">
            
            <div class="doc-title">${doc.title.replace(" платника ", " платника<br>")}</div>
            <div class="doc-kind">${doc.kind.toLocaleUpperCase("uk")}</div>
            <div class="tax-card-info">
              <div class="tax-card-person">${doc.name.map((name) => `<span>${name}</span>`).join("")}</div>
              <div class="tax-card-field tax-card-birth"><span>Дата народження:</span><strong>${doc.date}</strong></div>
            </div>
            <div class="ticker tax-card-ticker"><span class="document-updated-ticker">${documentUpdatedLabel} · Демо-картка · ${documentUpdatedLabel} · Демо-картка ·</span></div>
            <div class="tax-card-footer">
              <strong class="tax-card-number">${doc.tax}</strong>
              <button type="button" class="tax-card-copy" data-tax-copy aria-label="Скопіювати РНОКПП">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="7" width="12" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2"/></svg>
              </button>
            </div>
            <button type="button" class="more tax-card-more" aria-label="Дії з карткою">•••</button>
          </div>`
          : isDriverLicense
            ? `<div class="face front driver-license-front">
              <div class="doc-title">${doc.title}</div>
              <div class="driver-license-content">
                <div class="portrait driver-license-portrait" data-portrait data-default-photo="assets/driver-license-portrait.jpg">
                  <img src="assets/driver-license-portrait.jpg" alt="Демонстраційне фото водія">
                </div>
                <div class="driver-license-facts">
                  <div class="driver-license-field"><span>Дата народження:</span><strong class="driver-license-birth">${doc.date}</strong></div>
                  <div class="driver-license-field"><span>Категорія:</span><strong>${doc.kind.replace(/^Категорія\s*/i, "")}</strong></div>
                  <div class="driver-license-field"><span>Номер документа:</span><strong class="driver-license-number">${doc.number}</strong></div>
                </div>
              </div>
              <div class="ticker driver-license-ticker"><span class="document-updated-ticker">${documentUpdatedLabel} · Демонстраційний документ · ${documentUpdatedLabel} · Демонстраційний документ ·</span></div>
              <div class="person driver-license-person">${doc.name.map((name) => `<span>${name}</span>`).join("")}</div>
              <button type="button" class="more driver-license-more" aria-label="Дії з посвідченням">•••</button>
            </div>`
            : isForeignPassport
              ? `<div class="face front ua-passport-front foreign-passport-front">
                
                <div class="doc-title">Закордонний<br>паспорт</div>
                <div class="ua-passport-front-content">
                  <div class="portrait ua-passport-portrait" data-portrait data-default-photo="assets/driver-license-portrait.jpg">
                    <img src="assets/driver-license-portrait.jpg" alt="Демонстраційне фото закордонного паспорта">
                  </div>
                  <div class="ua-passport-facts">
                    <div class="ua-passport-field"><span>Дата<br>народження:</span><strong class="ua-passport-birth">${doc.date}</strong></div>
                    <div class="ua-passport-field"><span>Номер:</span><strong class="foreign-passport-number">${doc.number}</strong></div>
                    <div class="ua-passport-signature" aria-label="Демонстраційний підпис">
                      <img class="ua-passport-signature-img" alt="Графічний підпис у демо-макеті" hidden>
                      <span class="ua-passport-signature-empty">Додайте підпис у меню</span>
                    </div>
                  </div>
                </div>
                <div class="ticker ua-passport-ticker"><span class="document-updated-ticker">${documentUpdatedLabel} · Демонстраційний документ · не підтверджує особу · ${doc.number} · ${documentUpdatedLabel} · Демонстраційний документ · не підтверджує особу · ${doc.number} ·</span></div>
                <div class="person ua-passport-person">${doc.name.map((name) => `<span>${name}</span>`).join("")}</div>
                <button type="button" class="more ua-passport-more" aria-label="Дії з демо-закордонним паспортом">•••</button>
              </div>`
              : isUaPassport
                ? `<div class="face front ua-passport-front">
                
                <div class="doc-title">Паспорт громадянина<br>України</div>
                <div class="ua-passport-front-content">
                  <div class="portrait ua-passport-portrait" data-portrait data-default-photo="assets/driver-license-portrait.jpg">
                    <img src="assets/driver-license-portrait.jpg" alt="Демонстраційне фото профілю">
                  </div>
                  <div class="ua-passport-facts">
                    <div class="ua-passport-field"><span>Дата<br>народження:</span><strong class="ua-passport-birth">${doc.date}</strong></div>
                    <div class="ua-passport-field"><span>Номер:</span><strong class="ua-passport-number">${doc.number}</strong></div>
                    <div class="ua-passport-signature" aria-label="Демонстраційний підпис">
                      <img class="ua-passport-signature-img" alt="Графічний підпис у демо-макеті" hidden>
                      <span class="ua-passport-signature-empty">Додайте підпис у меню</span>
                    </div>
                  </div>
                </div>
                
                <div class="ticker ua-passport-ticker"><span class="document-updated-ticker">${documentUpdatedLabel} · Демонстраційний документ · не підтверджує особу · ${doc.number} · ${documentUpdatedLabel} · Демонстраційний документ · не підтверджує особу · ${doc.number} ·</span></div>
                <div class="person ua-passport-person">${doc.name.map((name) => `<span>${name}</span>`).join("")}</div>
                
                <button type="button" class="more ua-passport-more" aria-label="Дії з демо-паспортом">•••</button>
              </div>`
                : `<div class="face front"><div class="doc-title">${doc.title}</div><div class="doc-kind">${doc.kind.toLocaleUpperCase("uk")}</div><div class="doc-main"><div class="portrait" data-portrait>${portrait()}</div><div class="facts"><label>Дата народження:</label><strong>${doc.date}</strong><label class="tax">РНОКПП:</label><strong>${doc.tax}</strong></div></div><div class="ticker"><span class="document-updated-ticker">${documentUpdatedLabel} · Демонстраційний документ · ${doc.number} · ${documentUpdatedLabel} · Демонстраційний документ · ${doc.number} ·</span></div><div class="person">${doc.name.map((name) => `<span>${name}</span>`).join("")}</div><div class="more">•••</div></div>`;
      const backContent = isStudentDemo
        ? `<div class="student-demo-back"><span class="student-demo-back-icon">✦</span><span class="flip-hint">ТОРКНІТЬСЯ, ЩОБ ПОВЕРНУТИСЯ</span></div>`
        : doc.title === "єДокумент"
          ? `<img class="qr" src="${QR_DATA[doc.qr]}" alt="Демонстраційний QR-код єДокумента">`
          : doc.title === "Паспорт громадянина України"
            ? `<div class="ua-passport-back"><div class="ua-code-timer">Код діятиме ще <span id="passportTimer">3:00</span></div><img class="ua-qr-display" src="${QR_DATA[doc.qr]}" alt="Демонстраційний QR-код паспорта"><div class="ua-barcode-display">${barcode.svg}<div class="ua-barcode-number">${barcode.code}</div></div><div class="sheet-codes ua-passport-controls"><button type="button" class="sheet-code passport-code-toggle" data-code="qr" aria-pressed="true"><span class="code-circle"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM19 14v2M14 19h2M19 18v3M17 21h2"/></svg></span><span>QR-код</span></button><button type="button" class="sheet-code passport-code-toggle" data-code="barcode" aria-pressed="false"><span class="code-circle"><svg viewBox="0 0 24 24"><path d="M5 5v14M9 5v14M12 5v14M16 5v14M19 5v14"/></svg></span><span>Штрихкод</span></button></div></div>`
            : [
                  "Закордонний паспорт",
                  "Посвідчення водія",
                  "Картка платника податків",
                ].includes(doc.title)
              ? `<div class="ua-passport-back demo-qr-back"><img class="ua-qr-display" src="${QR_DATA[doc.qr]}" alt="Демонстраційний QR-код документа"><div class="flip-hint">ТОРКНІТЬСЯ, ЩОБ ПОВЕРНУТИСЯ</div></div>`
              : `<div class="back-head"><h2>Коди документа</h2><span class="tag"></span></div><div class="back-sub">${doc.title} · запис</div><img class="qr" src="${QR_DATA[doc.qr]}" alt="Демонстраційний QR-код"><div class="barcode">${barcode.svg}</div><div class="bar-num">${barcode.code}</div><div class="warning">Коди створені лише для демонстрації та не підтверджують особу.</div><div class="flip-hint">ТОРКНІТЬСЯ, ЩОБ ПОВЕРНУТИСЯ</div>`;
      const backClass = doc.title === "єДокумент" ? " e-doc-qr-only" : "";
      return `<div class="doc-wrap"><article class="doc-card" data-index="${index}">${frontFace}<div class="face back${backClass}">${backContent}</div></article></div>`;
    })
    .join("");
  const actionSlide = `<div class="doc-wrap utility-wrap"><section class="utility-slide" aria-label="Дії з документами"><button type="button" class="utility-action-card" data-carousel-action="add"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13"/><path d="M16 9v14M9 16h14"/></svg><span>Додати документ</span></button><button type="button" class="utility-action-card" data-carousel-action="reorder"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 11h21l-6-6M27 21H6l6 6"/></svg><span>Змінити порядок<br>документів</span></button></section></div>`;
  carousel.innerHTML = documentSlides + actionSlide;
  renderPassportSignature();
  dots.innerHTML = Array.from(
    { length: slideCount() },
    (_, index) =>
      `<button aria-label="${index === docs.length ? "Додати або впорядкувати документи" : `Документ ${index + 1}`}" data-index="${index}" class="${index === activeDoc ? "active" : ""}"></button>`,
  ).join("");
  document.getElementById("cardCount").textContent =
    `0${activeDoc + 1} / ${String(slideCount()).padStart(2, "0")}`;
}
renderCarousel();
function setDoc(i) {
  activeDoc = Math.max(0, Math.min(slideCount() - 1, i));
  const card = carousel.querySelectorAll(".doc-wrap")[activeDoc];
  if (card) {
    const left =
      card.offsetLeft -
      (carousel.clientWidth - card.getBoundingClientRect().width) / 2;
    carousel.scrollTo({ left, behavior: "smooth" });
  }
  dots
    .querySelectorAll("button")
    .forEach((button, index) =>
      button.classList.toggle("active", index === activeDoc),
    );
  document.getElementById("cardCount").textContent =
    `0${activeDoc + 1} / ${String(slideCount()).padStart(2, "0")}`;
}
dots.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) setDoc(+b.dataset.index);
});
carousel.addEventListener("scroll", () => {
  const items = [...carousel.querySelectorAll(".doc-wrap")];
  if (!items.length) return;
  const center =
    carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
  let i = 0,
    best = Infinity;
  items.forEach((item, index) => {
    const r = item.getBoundingClientRect();
    const d = Math.abs(r.left + r.width / 2 - center);
    if (d < best) {
      best = d;
      i = index;
    }
  });
  if (i !== activeDoc) {
    activeDoc = i;
    dots
      .querySelectorAll("button")
      .forEach((b, j) => b.classList.toggle("active", j === i));
    document.getElementById("cardCount").textContent =
      `0${i + 1} / ${String(slideCount()).padStart(2, "0")}`;
  }
});
window.addEventListener("resize", () => {
  const card = carousel.querySelectorAll(".doc-wrap")[activeDoc];
  if (card) {
    carousel.scrollLeft =
      card.offsetLeft -
      (carousel.clientWidth - card.getBoundingClientRect().width) / 2;
  }
});
// Перемикання між екранами застосунку.
const pageIds = {
  docs: "page-docs",
  feed: "page-feed",
  ai: "page-ai",
  services: "page-services",
  menu: "page-menu",
};
function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.toggle("active", p.id === pageIds[id]));
  nav
    .querySelectorAll("button")
    .forEach((b) => b.classList.toggle("active", b.dataset.page === id));
  if (id === "ai") aiChatArea.scrollTop = 0;
}
nav.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) showPage(b.dataset.page);
});
// Стрічка: свайп-карусель, швидкі дії та локальний QR-сканер.
const feedStoryCarousel = document.getElementById("feedStoryCarousel");
const feedStoryCards = [
  ...feedStoryCarousel.querySelectorAll(".feed-story-card"),
];
const feedStoryDots = document.getElementById("feedStoryDots");
const feedNewsCount = document.getElementById("feedNewsCount");
let activeFeedStory = 0;
feedStoryDots.innerHTML = feedStoryCards
  .map(
    (_, index) =>
      `<button type="button" aria-label="Новина ${index + 1}" data-index="${index}" class="${index === 0 ? "active" : ""}"></button>`,
  )
  .join("");
function setFeedStory(index) {
  activeFeedStory = Math.max(0, Math.min(feedStoryCards.length - 1, index));
  const story = feedStoryCards[activeFeedStory];
  const containerRect = feedStoryCarousel.getBoundingClientRect();
  const storyRect = story.getBoundingClientRect();
  const left =
    feedStoryCarousel.scrollLeft + storyRect.left - containerRect.left;
  feedStoryCarousel.scrollTo({ left, behavior: "smooth" });
  [...feedStoryDots.querySelectorAll("button")].forEach((dot, dotIndex) =>
    dot.classList.toggle("active", dotIndex === activeFeedStory),
  );
  feedNewsCount.textContent = `${String(activeFeedStory + 1).padStart(2, "0")} / ${String(feedStoryCards.length).padStart(2, "0")}`;
}
feedStoryDots.addEventListener("click", (event) => {
  const dot = event.target.closest("button[data-index]");
  if (dot) setFeedStory(Number(dot.dataset.index));
});
let feedScrollFrame = 0;
feedStoryCarousel.addEventListener("scroll", () => {
  cancelAnimationFrame(feedScrollFrame);
  feedScrollFrame = requestAnimationFrame(() => {
    const center =
      feedStoryCarousel.getBoundingClientRect().left +
      feedStoryCarousel.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;
    feedStoryCards.forEach((story, index) => {
      const rect = story.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    activeFeedStory = closestIndex;
    feedStoryDots
      .querySelectorAll("button")
      .forEach((dot, index) =>
        dot.classList.toggle("active", index === activeFeedStory),
      );
    feedNewsCount.textContent = `${String(activeFeedStory + 1).padStart(2, "0")} / ${String(feedStoryCards.length).padStart(2, "0")}`;
  });
});
document
  .getElementById("feedSeeAll")
  .addEventListener("click", () => showPage("services"));
const feedModalBackdrop = document.getElementById("feedModalBackdrop");
const feedModalTitle = document.getElementById("feedModalTitle");
const feedModalBody = document.getElementById("feedModalBody");
const feedModalPrimary = document.getElementById("feedModalPrimary");
const feedModalSecondary = document.getElementById("feedModalSecondary");
const scannerVideo = document.getElementById("scannerVideo");
const scannerCanvas = document.getElementById("scannerCanvas");
const scannerStatus = document.getElementById("scannerStatus");
const scannerImageInput = document.getElementById("scannerImageInput");
let feedActionType = "";
let feedMediaStream = null;
let scannerFrame = 0;
let scannerLastFrameAt = 0;
let scannerFound = false;
function stopFeedScanner() {
  cancelAnimationFrame(scannerFrame);
  scannerFrame = 0;
  if (feedMediaStream) {
    feedMediaStream.getTracks().forEach((track) => track.stop());
    feedMediaStream = null;
  }
  scannerVideo.pause();
  scannerVideo.srcObject = null;
  scannerVideo.hidden = true;
}
function closeFeedModal() {
  stopFeedScanner();
  feedModalBackdrop.classList.remove("open");
  feedModalBackdrop.setAttribute("aria-hidden", "true");
  setTimeout(() => (feedModalBackdrop.hidden = true), 230);
  feedActionType = "";
}
function openFeedModal(type, title, html, primary = "Зрозуміло") {
  stopFeedScanner();
  feedActionType = type;
  feedModalTitle.textContent = title;
  feedModalBody.innerHTML = html;
  feedModalBody.hidden = false;
  scannerStatus.hidden = true;
  scannerStatus.textContent = "";
  feedModalPrimary.textContent = primary;
  feedModalSecondary.hidden = type !== "scanner";
  if (type === "scanner") {
    feedModalSecondary.textContent = "Завантажити фото";
    feedModalBody.innerHTML =
      '<p>Наведіть камеру на QR-код. Розпізнавання виконується тільки на цьому пристрої.</p><p class="feed-modal-note">Не пересилайте незнайомі QR-коди. Їхній вміст може бути посиланням або персональними даними.</p>';
  }
  feedModalBackdrop.hidden = false;
  feedModalBackdrop.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => feedModalBackdrop.classList.add("open"));
}
function setScannerStatus(message, resultText = "") {
  scannerStatus.replaceChildren();
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  scannerStatus.append(paragraph);
  if (resultText) {
    const code = document.createElement("code");
    code.textContent = resultText.slice(0, 500);
    scannerStatus.append(code);
  }
  scannerStatus.hidden = false;
}
function onQrDetected(text) {
  scannerFound = true;
  stopFeedScanner();
  scannerVideo.hidden = true;
  setScannerStatus("QR-код успішно розпізнано на цьому пристрої:", text);
  feedModalPrimary.textContent = "Сканувати ще раз";
}
async function startFeedScanner() {
  scannerFound = false;
  if (!navigator.mediaDevices?.getUserMedia) {
    setScannerStatus(
      "Браузер не надає доступ до камери. Виберіть фото з QR-кодом, щоб сканувати його на пристрої.",
    );
    return;
  }
  setScannerStatus("Очікуємо дозвіл на камеру…");
  try {
    feedMediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
      audio: false,
    });
    scannerVideo.srcObject = feedMediaStream;
    scannerVideo.hidden = false;
    await scannerVideo.play();
    setScannerStatus("Наведіть QR-код у вікно камери.");
    scannerLastFrameAt = 0;
    const scanFrame = (timestamp) => {
      if (!feedMediaStream) return;
      scannerFrame = requestAnimationFrame(scanFrame);
      if (timestamp - scannerLastFrameAt < 120 || scannerVideo.readyState < 2)
        return;
      scannerLastFrameAt = timestamp;
      const width = scannerVideo.videoWidth;
      const height = scannerVideo.videoHeight;
      if (!width || !height) return;
      scannerCanvas.width = width;
      scannerCanvas.height = height;
      const context = scannerCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      context.drawImage(scannerVideo, 0, 0, width, height);
      const image = context.getImageData(0, 0, width, height);
      const result = window.jsQR?.(image.data, width, height, {
        inversionAttempts: "attemptBoth",
      });
      if (result?.data) onQrDetected(result.data);
    };
    scannerFrame = requestAnimationFrame(scanFrame);
  } catch (error) {
    stopFeedScanner();
    const message =
      error?.name === "NotAllowedError"
        ? "Доступ до камери не надано. Дозвольте камеру в налаштуваннях браузера або виберіть фото з QR-кодом."
        : "Не вдалося запустити камеру. Спробуйте вибрати зображення QR-коду з пристрою.";
    setScannerStatus(message);
  }
}
function scanQrImage(file) {
  if (!file) return;
  const imageUrl = URL.createObjectURL(file);
  const image = new Image();
  image.onload = () => {
    const maxSide = 1800;
    const scale = Math.min(
      1,
      maxSide / Math.max(image.naturalWidth, image.naturalHeight),
    );
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    scannerCanvas.width = width;
    scannerCanvas.height = height;
    const context = scannerCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    context.drawImage(image, 0, 0, width, height);
    const pixels = context.getImageData(0, 0, width, height);
    const result = window.jsQR?.(pixels.data, width, height, {
      inversionAttempts: "attemptBoth",
    });
    URL.revokeObjectURL(imageUrl);
    if (result?.data) onQrDetected(result.data);
    else
      setScannerStatus(
        "QR-код не знайдено на зображенні. Спробуйте чіткіше фото з кодом у центрі.",
      );
  };
  image.onerror = () => {
    URL.revokeObjectURL(imageUrl);
    setScannerStatus("Не вдалося відкрити це зображення.");
  };
  image.src = imageUrl;
}
scannerImageInput.addEventListener("change", () => {
  scanQrImage(scannerImageInput.files?.[0]);
  scannerImageInput.value = "";
});
document
  .getElementById("feedModalClose")
  .addEventListener("click", closeFeedModal);
feedModalBackdrop.addEventListener("click", (event) => {
  if (event.target === feedModalBackdrop) closeFeedModal();
});
feedModalPrimary.addEventListener("click", () => {
  if (feedActionType === "scanner") {
    if (scannerFound) startFeedScanner();
    else startFeedScanner();
    return;
  }
  if (feedActionType === "offline") {
    const status = document.getElementById("feedConnectionStatus");
    if (status)
      status.textContent = navigator.onLine
        ? "Зараз є підключення до інтернету."
        : "Інтернет-з’єднання зараз відсутнє.";
    return;
  }
  closeFeedModal();
});
feedModalSecondary.addEventListener("click", () => {
  if (feedActionType === "scanner") scannerImageInput.click();
  else closeFeedModal();
});
const feedActionContent = {
  resilience: [
    "Незламність",
    `<p>Місця підтримки та допомоги можуть бути поруч. У повній Дії перевірте мапу укриттів і пунктів незламності.</p><p class="feed-modal-note">У цій демонстрації кнопка показує інформаційну картку без доступу до геолокації.</p>`,
  ],
  bonds: [
    "Військові облігації",
    `<p>Умови, доступні випуски та дохідність змінюються. Переглядайте їх тільки в офіційному сервісі Дії.</p><p class="feed-modal-note">Ця картка — демонстраційна й не приймає платежів чи заявок.</p>`,
  ],
  campaign: [
    "Лінія дронів",
    `<p>Підтримайте проєкти, що допомагають змінювати хід подій.</p><p class="feed-modal-note">Кнопка в цьому макеті не проводить оплату й не передає дані.</p>`,
  ],
  cashback: [
    "Національний кешбек",
    `<p>21.15 грн — демонстраційне значення з прикладу інтерфейсу.</p><p class="feed-modal-note">Фактичний баланс і доступність програми перевіряйте у своєму офіційному застосунку.</p>`,
  ],
};
const feedServiceContent = {
  poll: [
    "Опитування",
    "Долучайтеся до опитувань і діліться думкою щодо державних сервісів. Це демонстраційна картка без надсилання відповіді.",
  ],
  military: [
    "Заміна військового посвідчення",
    "Перегляньте вимоги та доступність послуги в офіційному застосунку або на сайті Дії. У цьому макеті заявка не формується.",
  ],
  tax: [
    "Податки ФОП",
    "Перевіряйте актуальні податкові строки та послуги в офіційних джерелах. Ця демонстраційна картка не подає звітність.",
  ],
};
const feedStoryContent = {
  grants: [
    "Грантові можливості",
    "Перевірте актуальні програми підтримки та строки подання заявок у відповідному офіційному сервісі.",
  ],
  poll: [
    "Опитування",
    "Діліться думкою в офіційних опитуваннях, якщо вони доступні у вашому застосунку.",
  ],
  offline: [
    "Підготовка до відсутності зв’язку",
    "Заздалегідь завантажте важливі документи, зарядіть пристрій і збережіть потрібні контакти.",
  ],
};
document.getElementById("page-feed").addEventListener("click", (event) => {
  const allServices = event.target.closest("#feedSeeAll");
  if (allServices) return;
  const actionButton = event.target.closest("[data-feed-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.feedAction;
  if (action === "scanner") {
    openFeedModal("scanner", "Дія Сканер", "", "Увімкнути камеру");
    setScannerStatus(
      "Камера ввімкнеться після вашого натискання. Також можна завантажити фото з QR-кодом.",
    );
    return;
  }
  if (action === "offline") {
    openFeedModal(
      "offline",
      "Відсутній зв’язок",
      `<p id="feedConnectionStatus">${navigator.onLine ? "Зараз є підключення до інтернету." : "Інтернет-з’єднання зараз відсутнє."}</p><p>Заздалегідь відкрийте потрібні документи й збережіть важливу інформацію на пристрої.</p>`,
      "Перевірити зв’язок",
    );
    return;
  }
  if (action === "service") {
    const [title, content] = feedServiceContent[
      actionButton.dataset.service
    ] || ["Послуга", "Демо-інформація."];
    openFeedModal("info", title, `<p>${content}</p>`, "Зрозуміло");
    return;
  }
  if (action === "story") {
    const [title, content] = feedStoryContent[actionButton.dataset.story] || [
      "Матеріал",
      "Демо-інформація.",
    ];
    openFeedModal("info", title, `<p>${content}</p>`, "Зрозуміло");
    return;
  }
  const [title, content] = feedActionContent[action] || [
    "Інформація",
    "Демонстраційна картка.",
  ];
  openFeedModal("info", title, content, "Зрозуміло");
});
window.addEventListener("online", () => {
  const status = document.getElementById("feedConnectionStatus");
  if (status) status.textContent = "Зараз є підключення до інтернету.";
});
window.addEventListener("offline", () => {
  const status = document.getElementById("feedConnectionStatus");
  if (status) status.textContent = "Інтернет-з’єднання зараз відсутнє.";
});

// Локальна демо-логіка чату Дія.АІ. Повідомлення не надсилаються на сервер.
const aiMessages = document.getElementById("aiMessages");
const aiInput = document.getElementById("aiInput");
const aiChatArea = document.getElementById("aiChatArea");
const aiToast = document.getElementById("aiToast");
let aiToastTimer;
function showAiToast(message) {
  aiToast.textContent = message;
  aiToast.classList.add("show");
  clearTimeout(aiToastTimer);
  aiToastTimer = setTimeout(() => aiToast.classList.remove("show"), 2200);
}
function addAiUserMessage(text) {
  const item = document.createElement("div");
  item.className = "ai-message-item ai-user-item";
  item.dataset.aiMessage = "";
  const bubble = document.createElement("span");
  bubble.textContent = text;
  item.append(bubble);
  aiMessages.append(item);
}
function addAiAssistantMessage(text) {
  const item = document.createElement("article");
  item.className = "ai-message-item ai-assistant-item ai-followup-item";
  item.dataset.aiMessage = "";
  const star = document.createElement("span");
  star.className = "ai-message-star";
  star.textContent = "✦";
  star.setAttribute("aria-hidden", "true");
  const content = document.createElement("div");
  content.className = "ai-message-content";
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  content.append(paragraph);
  item.append(star, content);
  aiMessages.append(item);
}
function aiDemoReply(question) {
  if (/облігац|інвест|дохід|прибут/i.test(question)) {
    return "Це тестовий режим. Щоб переглянути актуальні випуски, умови й дохідність, відкрийте офіційний розділ «Військові облігації» в Дії. Умови можуть змінюватися.";
  }
  if (/сервіс|послуг|документ/i.test(question)) {
    return "Опишіть, що саме потрібно зробити, і я підкажу напрямок. У цьому демо відповіді локальні; актуальні послуги перевіряйте в офіційному застосунку Дія.";
  }
  return "Я працюю в тестовому режимі й не підключений до реальних сервісів. Можу показати загальні підказки — важливу інформацію перевіряйте на офіційних ресурсах.";
}
function sendAiMessage(value = aiInput.value) {
  const question = value.trim();
  if (!question) return;
  addAiUserMessage(question);
  aiInput.value = "";
  document.querySelector(".ai-composer").classList.remove("has-text");
  document.getElementById("aiQuickPrompts").hidden = true;
  aiMessages.querySelectorAll("[data-ai-message]").forEach((message) => {
    message.hidden = false;
  });
  setTimeout(() => {
    addAiAssistantMessage(aiDemoReply(question));
    aiChatArea.scrollTo({ top: aiChatArea.scrollHeight, behavior: "smooth" });
  }, 320);
}
document
  .getElementById("aiSubmit")
  .addEventListener("click", () => sendAiMessage());
aiInput.addEventListener("input", () => {
  document
    .querySelector(".ai-composer")
    .classList.toggle("has-text", Boolean(aiInput.value.trim()));
});
aiInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendAiMessage();
  }
});
document
  .getElementById("aiExplain")
  .addEventListener("click", () => sendAiMessage("Так, цікаво"));
document
  .getElementById("aiCollapseToggle")
  .addEventListener("click", (event) => {
    const button = event.currentTarget;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.setAttribute(
      "aria-label",
      expanded ? "Розгорнути повідомлення" : "Згорнути повідомлення",
    );
    aiMessages.hidden = expanded;
  });
document.querySelectorAll("[data-feedback]").forEach((button) =>
  button.addEventListener("click", () => {
    const row = button.closest(".ai-feedback-row");
    row.querySelectorAll("[data-feedback]").forEach((other) => {
      const selected =
        other === button && other.getAttribute("aria-pressed") !== "true";
      other.setAttribute("aria-pressed", String(selected));
      other.classList.toggle("selected", selected);
    });
    showAiToast(
      button.getAttribute("aria-pressed") === "true"
        ? "Дякую за відгук!"
        : "Відгук скасовано.",
    );
  }),
);
document.getElementById("aiCopyAnswer").addEventListener("click", async () => {
  const text = [
    ...document.querySelectorAll(".ai-assistant-item .ai-message-content p"),
  ]
    .map((paragraph) => paragraph.textContent)
    .join("\n\n");
  try {
    await navigator.clipboard.writeText(text);
    showAiToast("Відповідь скопійовано.");
  } catch {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = text;
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.append(temporaryInput);
    temporaryInput.select();
    const copied = document.execCommand("copy");
    temporaryInput.remove();
    showAiToast(
      copied ? "Відповідь скопійовано." : "Не вдалося скопіювати відповідь.",
    );
  }
});
const aiMenuButton = document.getElementById("aiMenuButton");
const aiMenuPopover = document.getElementById("aiMenuPopover");
aiMenuButton.addEventListener("click", () => {
  aiMenuPopover.hidden = !aiMenuPopover.hidden;
  aiMenuButton.setAttribute("aria-expanded", String(!aiMenuPopover.hidden));
});
document.getElementById("aiNewChat").addEventListener("click", () => {
  aiMessages.replaceChildren();
  addAiAssistantMessage(
    "Вітаю! Чим можу допомогти? Я працюю в тестовому режимі.",
  );
  aiMenuPopover.hidden = true;
  aiMenuButton.setAttribute("aria-expanded", "false");
  document
    .getElementById("aiCollapseToggle")
    .setAttribute("aria-expanded", "true");
  aiMessages.hidden = false;
  showAiToast("Розпочато нову розмову.");
});
document.getElementById("aiAbout").addEventListener("click", () => {
  aiMenuPopover.hidden = true;
  aiMenuButton.setAttribute("aria-expanded", "false");
  showAiToast("Це демонстраційний чат. Запити залишаються у вашому браузері.");
});
const aiSearchWrap = document.getElementById("aiSearchWrap");
const aiSearchButton = document.getElementById("aiSearchButton");
const aiSearchInput = document.getElementById("aiSearchInput");
function filterAiMessages() {
  const query = aiSearchInput.value.trim().toLocaleLowerCase("uk");
  aiMessages.querySelectorAll("[data-ai-message]").forEach((message) => {
    message.hidden =
      Boolean(query) &&
      !message.textContent.toLocaleLowerCase("uk").includes(query);
  });
}
aiSearchButton.addEventListener("click", () => {
  aiSearchWrap.hidden = !aiSearchWrap.hidden;
  aiSearchButton.setAttribute("aria-expanded", String(!aiSearchWrap.hidden));
  if (!aiSearchWrap.hidden) aiSearchInput.focus();
  else {
    aiSearchInput.value = "";
    filterAiMessages();
  }
});
aiSearchInput.addEventListener("input", filterAiMessages);
document.getElementById("aiSearchClose").addEventListener("click", () => {
  aiSearchWrap.hidden = true;
  aiSearchInput.value = "";
  aiSearchButton.setAttribute("aria-expanded", "false");
  filterAiMessages();
});
const aiQuickPrompts = document.getElementById("aiQuickPrompts");
document.getElementById("aiSparkButton").addEventListener("click", () => {
  aiQuickPrompts.hidden = !aiQuickPrompts.hidden;
});
aiQuickPrompts.addEventListener("click", (event) => {
  const prompt = event.target.closest("[data-ai-prompt]");
  if (prompt) sendAiMessage(prompt.dataset.aiPrompt);
});

document.getElementById("serviceSearch").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLocaleLowerCase("uk");
  let visible = 0;
  document.querySelectorAll(".service-tile").forEach((tile) => {
    const show = (tile.dataset.search + " " + tile.textContent)
      .toLocaleLowerCase("uk")
      .includes(q);
    tile.hidden = !show;
    if (show) visible++;
  });
  document.getElementById("serviceEmpty").hidden = visible > 0;
});

// Фото та профіль зберігаються локально у браузері.
const PHOTO_KEY = "diya-demo-profile-photo";
function readProfilePhoto() {
  try {
    return localStorage.getItem(PHOTO_KEY) || "";
  } catch {
    return "";
  }
}
function renderProfilePhoto() {
  const photo = readProfilePhoto();
  const preview = document.getElementById("photoPreview");
  const avatar = document.getElementById("profileAvatar");
  if (photo) {
    preview.innerHTML = `<img src="${photo}" alt="Попередній перегляд фото">`;
    avatar.innerHTML = `<img src="${photo}" alt="Фото профілю">`;
    document.querySelectorAll("[data-portrait]").forEach((el) => {
      el.innerHTML = `<img src="${photo}" alt="Фото в демонстраційному документі">`;
    });
    document.getElementById("photoMsg").textContent =
      "Фото збережено на цьому пристрої.";
  } else {
    preview.textContent = "♙";
    avatar.textContent = "♜";
    document.querySelectorAll("[data-portrait]").forEach((el) => {
      const defaultPhoto = el.dataset.defaultPhoto;
      el.innerHTML = defaultPhoto
        ? `<img src="${defaultPhoto}" alt="Демонстраційне фото водія">`
        : portrait();
    });
    document.getElementById("photoMsg").textContent = "Фото ще не вибрано.";
  }
}
document
  .getElementById("profilePhotoInput")
  .addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      document.getElementById("photoMsg").textContent =
        "Будь ласка, вибери файл зображення.";
      return;
    }
    try {
      // Resize large images so browser storage is less likely to fill up.
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("read"));
        reader.onload = () => {
          const img = new Image();
          img.onerror = () => reject(new Error("image"));
          img.onload = () => {
            const max = 900,
              scale = Math.min(1, max / Math.max(img.width, img.height));
            const canvas = document.createElement("canvas");
            canvas.width = Math.max(1, Math.round(img.width * scale));
            canvas.height = Math.max(1, Math.round(img.height * scale));
            canvas
              .getContext("2d")
              .drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", 0.84));
          };
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      });
      localStorage.setItem(PHOTO_KEY, dataUrl);
      renderProfilePhoto();
    } catch (err) {
      document.getElementById("photoMsg").textContent =
        "Не вдалося зберегти фото. Спробуй менше зображення.";
    }
    e.target.value = "";
  });
document.getElementById("removeProfilePhoto").addEventListener("click", () => {
  localStorage.removeItem(PHOTO_KEY);
  renderProfilePhoto();
});

// ПОЧАТКОВІ ДЕМО-ДАНІ ПРОФІЛЮ: змінюйте значення за замовчуванням тут.
const defaults = {
  surname: "Демонстраційна",
  given: "Марія",
  middle: "Демівна",
  birth: "1994-05-12",
  birthCity: "Дніпро",
  documentIssueDate: "2022-10-28",
  documentExpiryDate: "2028-12-15",
  documentAuthority: "262",
  taxNumber: "516406916",
  passportNumber: "86260914",
  foreignPassportNumber: "DEMO-PP-7316-2048",
  driverLicenseNumber: "BX183546",
  studentTicketNumber: "DEMO-STU-2026-001",
};
function loadProfile() {
  try {
    let p = JSON.parse(localStorage.getItem("diya-demo-profile") || "null");
    if (p)
      for (let k in defaults)
        document.getElementById(k).value = p[k] || defaults[k];
  } catch {}
  const savedUpdateTime = localStorage.getItem(DOCUMENT_UPDATE_TIME_KEY);
  documentUpdatedTime = /^\d{2}:\d{2}$/.test(savedUpdateTime || "")
    ? savedUpdateTime
    : defaultDocumentUpdateTime;
  const savedUpdateDate = localStorage.getItem(DOCUMENT_UPDATE_DATE_KEY);
  documentUpdatedDateValue = /^\d{4}-\d{2}-\d{2}$/.test(savedUpdateDate || "")
    ? savedUpdateDate
    : defaultDocumentUpdateDate;
  document.getElementById("documentUpdateTime").value = documentUpdatedTime;
  document.getElementById("documentUpdateDate").value =
    documentUpdatedDateValue;
  documentUpdatedLabel = formatDocumentUpdatedLabel();
  updateName();
  updateDocumentProfile();
}
function updateName() {
  document.getElementById("feedGreetingName").textContent =
    document.getElementById("given").value.trim() || "друже";
  document.getElementById("profileName").textContent =
    `${document.getElementById("given").value} ${document.getElementById("surname").value}`;
}
function formatProfileBirthDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
}
function updateDocumentProfile() {
  const profileName = [
    document.getElementById("surname").value.trim(),
    document.getElementById("given").value.trim(),
    document.getElementById("middle").value.trim(),
  ];
  const birthDate = formatProfileBirthDate(
    document.getElementById("birth").value,
  );
  const birthCity = document.getElementById("birthCity").value.trim();
  const issueDate = formatProfileBirthDate(
    document.getElementById("documentIssueDate").value,
  );
  const expiryDate = formatProfileBirthDate(
    document.getElementById("documentExpiryDate").value,
  );
  const authority = document.getElementById("documentAuthority").value.trim();
  const taxNumber = document.getElementById("taxNumber").value.trim();
  const passportNumber =
    document.getElementById("passportNumber").value.trim() ||
    defaults.passportNumber;
  const foreignPassportNumber =
    document.getElementById("foreignPassportNumber").value.trim() ||
    defaults.foreignPassportNumber;
  const driverLicenseNumber =
    document.getElementById("driverLicenseNumber").value.trim() ||
    defaults.driverLicenseNumber;
  const studentTicketNumber =
    document.getElementById("studentTicketNumber").value.trim() ||
    defaults.studentTicketNumber;

  docs.forEach((doc, index) => {
    doc.name = profileName;
    doc.date = birthDate;
    doc.birthCity = birthCity;
    doc.issueDate = issueDate;
    doc.expiryDate = expiryDate;
    doc.authority = authority;
    doc.tax = taxNumber;
    if (doc.title === "Паспорт громадянина України") {
      doc.number = passportNumber;
    }
    if (doc.title === "Закордонний паспорт") {
      doc.number = foreignPassportNumber;
    }
    if (doc.title === "Посвідчення водія") {
      doc.number = driverLicenseNumber;
    }
    if (doc.title === "Студентська картка (демо-макет)") {
      doc.studentNumber = studentTicketNumber;
      doc.number = studentTicketNumber;
    }
    const card = carousel.querySelector(`.doc-card[data-index="${index}"]`);
    if (!card) return;

    const person = card.querySelector(".person");
    if (person) {
      person.innerHTML = profileName
        .map((name) => `<span>${name}</span>`)
        .join("");
    }

    const isStudentDemo = doc.title === "Студентська картка (демо-макет)";
    const birthValue = isStudentDemo
      ? null
      : card.querySelector(".facts label:first-child + strong");
    if (birthValue) birthValue.textContent = birthDate;
    const driverLicenseBirth = card.querySelector(".driver-license-birth");
    if (driverLicenseBirth) driverLicenseBirth.textContent = birthDate;
    const driverLicenseNumberValue = card.querySelector(
      ".driver-license-number",
    );
    if (driverLicenseNumberValue)
      driverLicenseNumberValue.textContent = driverLicenseNumber;
    const uaPassportBirth = card.querySelector(".ua-passport-birth");
    if (uaPassportBirth) uaPassportBirth.textContent = birthDate;
    const uaPassportNumber = card.querySelector(".ua-passport-number");
    if (uaPassportNumber) uaPassportNumber.textContent = passportNumber;
    const foreignNumber = card.querySelector(".foreign-passport-number");
    if (foreignNumber) foreignNumber.textContent = foreignPassportNumber;
    const updatedTicker = card.querySelector(".document-updated-ticker");
    if (updatedTicker) {
      const note = [
        "Паспорт громадянина України",
        "Закордонний паспорт",
      ].includes(doc.title)
        ? `Дані оновлено ·  Підтверджина особа · ${doc.number}`
        : doc.title === "Картка платника податків"
          ? "Дані оновлено"
          : "Дані оновлено";
      updatedTicker.textContent = `${documentUpdatedLabel} · ${note} · ${documentUpdatedLabel} · ${note} ·`;
    }
    const taxValue = isStudentDemo
      ? null
      : card.querySelector(".facts label.tax + strong");
    if (taxValue) taxValue.textContent = taxNumber;
    const taxCardNumber = card.querySelector(".tax-card-number");
    if (taxCardNumber) taxCardNumber.textContent = taxNumber;
    const studentCardNumber = card.querySelector(".student-card-number");
    if (studentCardNumber) studentCardNumber.textContent = studentTicketNumber;

    const taxCardNames = card.querySelectorAll(".tax-card-person span");
    if (taxCardNames.length) {
      profileName.forEach((name, nameIndex) => {
        const value = taxCardNames[nameIndex];
        if (value) value.textContent = name;
      });
      const taxCardBirth = card.querySelector(".tax-card-birth strong");
      if (taxCardBirth) taxCardBirth.textContent = birthDate;
    }
  });
}
loadProfile();
renderProfilePhoto();
document
  .getElementById("documentUpdateTime")
  .addEventListener("input", (event) => {
    const value = event.currentTarget.value;
    if (!/^\d{2}:\d{2}$/.test(value)) return;
    documentUpdatedTime = value;
    documentUpdatedLabel = formatDocumentUpdatedLabel();
    updateDocumentProfile();
  });
document
  .getElementById("documentUpdateDate")
  .addEventListener("input", (event) => {
    const value = event.currentTarget.value;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return;
    documentUpdatedDateValue = value;
    documentUpdatedLabel = formatDocumentUpdatedLabel();
    updateDocumentProfile();
  });
[
  "surname",
  "given",
  "middle",
  "birth",
  "birthCity",
  "documentIssueDate",
  "documentExpiryDate",
  "documentAuthority",
  "taxNumber",
  "passportNumber",
  "foreignPassportNumber",
  "driverLicenseNumber",
  "studentTicketNumber",
].forEach((fieldId) => {
  document.getElementById(fieldId).addEventListener("input", () => {
    if (fieldId === "taxNumber") {
      const taxInput = document.getElementById("taxNumber");
      taxInput.value = taxInput.value.replace(/\D/g, "").slice(0, 10);
    }
    if (fieldId === "studentTicketNumber") {
      const numberInput = document.getElementById("studentTicketNumber");
      numberInput.value = numberInput.value
        .toLocaleUpperCase("uk-UA")
        .replace(/[^\p{L}0-9-]/gu, "")
        .slice(0, 24);
    }
    if (fieldId === "passportNumber") {
      const passportInput = document.getElementById("passportNumber");
      passportInput.value = passportInput.value
        .toLocaleUpperCase("uk-UA")
        .replace(/[^\p{L}0-9-]/gu, "")
        .slice(0, 18);
    }
    if (fieldId === "foreignPassportNumber") {
      const foreignInput = document.getElementById("foreignPassportNumber");
      foreignInput.value = foreignInput.value
        .toLocaleUpperCase("uk-UA")
        .replace(/[^\p{L}0-9-]/gu, "")
        .slice(0, 24);
    }
    if (fieldId === "driverLicenseNumber") {
      const licenseInput = document.getElementById("driverLicenseNumber");
      licenseInput.value = licenseInput.value
        .toLocaleUpperCase("uk-UA")
        .replace(/[^\p{L}0-9-]/gu, "")
        .slice(0, 24);
    }
    updateName();
    updateDocumentProfile();
  });
});
document.getElementById("saveProfile").onclick = () => {
  let p = {};
  for (let k in defaults) p[k] = document.getElementById(k).value.trim();
  if (Object.values(p).some((v) => !v)) {
    document.getElementById("saveMsg").textContent =
      "Будь ласка, заповніть усі поля.";
    return;
  }
  const updateTime = document.getElementById("documentUpdateTime").value;
  const updateDate = document.getElementById("documentUpdateDate").value;
  if (!/^\d{2}:\d{2}$/.test(updateTime)) {
    document.getElementById("saveMsg").textContent =
      "Будь ласка, вкажіть час оновлення документа.";
    return;
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(updateDate)) {
    document.getElementById("saveMsg").textContent =
      "Будь ласка, вкажіть дату оновлення документа.";
    return;
  }
  documentUpdatedTime = updateTime;
  documentUpdatedDateValue = updateDate;
  documentUpdatedLabel = formatDocumentUpdatedLabel();
  localStorage.setItem(DOCUMENT_UPDATE_TIME_KEY, documentUpdatedTime);
  localStorage.setItem(DOCUMENT_UPDATE_DATE_KEY, documentUpdatedDateValue);
  localStorage.setItem("diya-demo-profile", JSON.stringify(p));
  updateName();
  updateDocumentProfile();
  document.getElementById("saveMsg").textContent =
    "Зміни збережено на цьому пристрої.";
};
document.getElementById("resetProfile").onclick = () => {
  for (let k in defaults) document.getElementById(k).value = defaults[k];
  localStorage.removeItem("diya-demo-profile");
  localStorage.removeItem(DOCUMENT_UPDATE_TIME_KEY);
  localStorage.removeItem(DOCUMENT_UPDATE_DATE_KEY);
  documentUpdatedTime = defaultDocumentUpdateTime;
  documentUpdatedDateValue = defaultDocumentUpdateDate;
  document.getElementById("documentUpdateTime").value = documentUpdatedTime;
  document.getElementById("documentUpdateDate").value =
    documentUpdatedDateValue;
  documentUpdatedLabel = formatDocumentUpdatedLabel();
  updateName();
  updateDocumentProfile();
  document.getElementById("saveMsg").textContent =
    "Початкові дані профілю відновлено.";
};

const SIGNATURE_KEY = "diya-demo-profile-signature";
const signatureCanvas = document.getElementById("signatureCanvas");
const signatureContext = signatureCanvas.getContext("2d");
let signatureHasInk = false;
let signatureIsDrawing = false;
function renderPassportSignature(data = savedSignatureData) {
  const images = carousel.querySelectorAll(".ua-passport-signature-img");
  const emptyLabels = carousel.querySelectorAll(".ua-passport-signature-empty");
  images.forEach((image) => {
    if (data) {
      image.src = data;
      image.hidden = false;
    } else {
      image.removeAttribute("src");
      image.hidden = true;
    }
  });
  emptyLabels.forEach((empty) => (empty.hidden = Boolean(data)));
}
function configureSignatureCanvas(preserve = true) {
  const rect = signatureCanvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const previous =
    preserve && signatureHasInk ? signatureCanvas.toDataURL("image/png") : "";
  const scale = Math.max(1, window.devicePixelRatio || 1);
  signatureCanvas.width = Math.round(rect.width * scale);
  signatureCanvas.height = Math.round(rect.height * scale);
  signatureContext.setTransform(scale, 0, 0, scale, 0, 0);
  signatureContext.lineWidth = 2.4;
  signatureContext.lineCap = "round";
  signatureContext.lineJoin = "round";
  signatureContext.strokeStyle = "#111820";
  signatureContext.fillStyle = "#111820";
  const imageData = previous || (!preserve ? savedSignatureData : "");
  if (imageData) {
    const image = new Image();
    image.onload = () =>
      signatureContext.drawImage(image, 0, 0, rect.width, rect.height);
    image.src = imageData;
  }
}
function signaturePoint(event) {
  const rect = signatureCanvas.getBoundingClientRect();
  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}
try {
  savedSignatureData = localStorage.getItem(SIGNATURE_KEY) || "";
} catch {
  savedSignatureData = "";
}
signatureHasInk = Boolean(savedSignatureData);
configureSignatureCanvas(false);
renderPassportSignature(savedSignatureData);
signatureCanvas.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  signatureIsDrawing = true;
  signatureCanvas.setPointerCapture(event.pointerId);
  const point = signaturePoint(event);
  signatureContext.beginPath();
  signatureContext.arc(point.x, point.y, 1.15, 0, Math.PI * 2);
  signatureContext.fill();
  signatureContext.beginPath();
  signatureContext.moveTo(point.x, point.y);
  signatureHasInk = true;
});
signatureCanvas.addEventListener("pointermove", (event) => {
  if (!signatureIsDrawing) return;
  const point = signaturePoint(event);
  signatureContext.lineTo(point.x, point.y);
  signatureContext.stroke();
});
function endSignatureStroke() {
  signatureIsDrawing = false;
  signatureContext.closePath();
}
signatureCanvas.addEventListener("pointerup", endSignatureStroke);
signatureCanvas.addEventListener("pointercancel", endSignatureStroke);
window.addEventListener("resize", () => configureSignatureCanvas(true));
document.getElementById("clearSignature").addEventListener("click", () => {
  signatureContext.clearRect(
    0,
    0,
    signatureCanvas.clientWidth,
    signatureCanvas.clientHeight,
  );
  signatureHasInk = false;
  savedSignatureData = "";
  localStorage.removeItem(SIGNATURE_KEY);
  renderPassportSignature("");
  document.getElementById("signatureMsg").textContent = "Поле очищено.";
});
document.getElementById("saveSignature").addEventListener("click", () => {
  const message = document.getElementById("signatureMsg");
  if (!signatureHasInk) {
    message.textContent = "Спочатку намалюйте підпис у полі вище.";
    return;
  }
  const imageData = signatureCanvas.toDataURL("image/png");
  try {
    localStorage.setItem(SIGNATURE_KEY, imageData);
    savedSignatureData = imageData;
    renderPassportSignature(imageData);
    message.textContent = "Підпис збережено на цьому пристрої для демо-макета.";
  } catch {
    message.textContent =
      "Не вдалося зберегти підпис. Очистіть дані браузера й спробуйте ще раз.";
  }
});

requestAnimationFrame(() => {
  const first = carousel.querySelector(".doc-wrap");
  if (first)
    carousel.scrollLeft =
      first.offsetLeft -
      (carousel.clientWidth - first.getBoundingClientRect().width) / 2;
});

// Меню дій картки документа та повідомлення після вибору пункту.
const docMenuBackdrop = document.getElementById("docMenuBackdrop");
const docActionToast = document.getElementById("docActionToast");
const utilityModalBackdrop = document.getElementById("utilityModalBackdrop");
const utilityModalTitle = document.getElementById("utilityModalTitle");
const utilityModalBody = document.getElementById("utilityModalBody");
const utilityModalMessage = document.getElementById("utilityModalMessage");
const utilityModalPrimary = document.getElementById("utilityModalPrimary");
const documentDetailsSheet = document.getElementById("documentDetailsSheet");
const documentDetailsContent = document.getElementById(
  "documentDetailsContent",
);
let selectedDocIndex = 0;
let toastTimer;
let detailsCloseTimer;
let detailsQrTimer;
function openDocMenu() {
  docMenuBackdrop.classList.add("open");
  docMenuBackdrop.setAttribute("aria-hidden", "false");
}
function closeDocMenu() {
  docMenuBackdrop.classList.remove("open", "details-open", "details-closing");
  docMenuBackdrop.setAttribute("aria-hidden", "true");
  documentDetailsSheet.setAttribute("aria-hidden", "true");
  clearInterval(detailsQrTimer);
}
function escapeDetailsText(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}
function transliterateName(value) {
  const map = {
    а: "a",
    б: "b",
    в: "v",
    г: "h",
    ґ: "g",
    д: "d",
    е: "e",
    є: "ye",
    ж: "zh",
    з: "z",
    и: "y",
    і: "i",
    ї: "yi",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ю: "yu",
    я: "ya",
    ь: "",
    "’": "",
    "'": "",
    "-": "-",
  };
  return value
    .toLocaleLowerCase("uk")
    .split("")
    .map((char) => map[char] ?? char)
    .join("")
    .toLocaleUpperCase("en");
}
function formatInfoDate(date = new Date()) {
  return date.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
function renderDocumentDetails(index) {
  const doc = docs[index];
  if (!doc) return;
  const fullName = doc.name.join(" ");
  const nameLatin = doc.name.map(transliterateName).join(" ");
  const escaped = {
    title: escapeDetailsText(doc.title),
    surname: escapeDetailsText(doc.name[0]),
    givenNames: escapeDetailsText(`${doc.name[1]} ${doc.name[2]}`),
    fullName: escapeDetailsText(fullName),
    latinName: escapeDetailsText(nameLatin),
    date: escapeDetailsText(doc.date),
    birthCity: escapeDetailsText(doc.birthCity || defaults.birthCity),
    issueDate: escapeDetailsText(
      doc.issueDate || formatProfileBirthDate(defaults.documentIssueDate),
    ),
    expiryDate: escapeDetailsText(
      doc.expiryDate || formatProfileBirthDate(defaults.documentExpiryDate),
    ),
    authority: escapeDetailsText(doc.authority || defaults.documentAuthority),
    number: escapeDetailsText(doc.number),
  };
  const photo = readProfilePhoto();
  const portraitMarkup = photo
    ? `<img src="${photo}" alt="Фото профілю">`
    : portrait();
  if (doc.title === "Студентська картка (демо-макет)") {
    const studentNumber = escapeDetailsText(doc.studentNumber || doc.number);
    const studentRows = [
      ["1.", "Навчальний заклад:", "Вінницький Національний Аграрний Університет"],
      ["2.", "Факультет:", "Факультет Інженерно-технологічний"],
      ["3.", "Виданий:", "01.09.2025 "],
      ["4.", "Макет до:", "30.06.2028 "],
      ["5.", "Форма навчання:", "Денна "],
    ];
    const studentRowMarkup = (row) =>
      `<div class="details-row"><span class="details-row-number">${row[0]}</span><div class="details-row-label">${row[1]}</div><strong>${row[2]}</strong></div>`;
    documentDetailsContent.innerHTML = `<div class="details-title">Студентський квиток</div><article class="details-identity-card student-details-identity"><div class="student-details-summary"><div class="student-details-name-number"><h2>${escaped.fullName}</h2><strong class="student-details-number">${studentNumber}</strong></div><div class="details-portrait">${portraitMarkup}</div></div><p class="student-details-request">Запит на перегляд: демо-режим · Ініціатор: локальний макет · ID: DEMO-REQ-0001</p></article><section class="details-data-card">${studentRows.map(studentRowMarkup).join("")}</section>`;
    return;
  }
  const isPassport = [
    "Паспорт громадянина України",
    "Закордонний паспорт",
  ].includes(doc.title);
  const signatureMarkup = savedSignatureData
    ? `<img class="details-signature details-signature-image" src="${savedSignatureData}" alt="Графічний підпис із меню">`
    : isPassport
      ? `<span class="details-signature-empty">Демо-підпис не задано</span>`
      : `<svg class="details-signature" viewBox="0 0 90 70" aria-label="Демонстраційна позначка"><path d="M7 51c13-13 13-25 17-24 5 2-3 18-1 21 2 3 9-13 13-12 4 0-2 12 1 14 4 2 13-18 17-17 4 1-4 17 0 18 5 2 10-11 15-12 3 0 3 5 1 8M6 60 82 8"/></svg>`;
  const rows = [
    ["1.", "Прізвище:", "Surname", escaped.surname],
    ["2.", "Ім’я та по батькові:", "Given names", escaped.givenNames],
    [
      "3.",
      "Дата та місце народження:",
      "Date and place of birth",
      `${escaped.date}, м. ${escaped.birthCity}`,
    ],
    ["4.", "Дата видачі:", "Date of issue", escaped.issueDate],
    ["5.", "Дійсний до:", "Date of expiry", escaped.expiryDate],
    ["6.", "Орган що видав:", "Authority", escaped.authority],
    ["7.", "Номер документа:", "Document number", escaped.number],
  ];
  const rowMarkup = (row) =>
    `<div class="details-row"><span class="details-row-number">${row[0]}</span><div class="details-row-label">${row[1]}<small>${row[2]}</small></div><strong>${row[3]}</strong></div>`;
  documentDetailsContent.innerHTML = `<div class="details-title">${escaped.title}</div><div class="details-update-ticker"><span>${documentUpdatedLabel}　•　${documentUpdatedLabel}　•　</span></div><article class="details-identity-card">${isPassport ? '' : ""}<h2>${escaped.fullName}</h2><div class="details-latin-name">${escaped.latinName}</div><div class="details-identity-body"><div class="details-portrait">${portraitMarkup}</div><div class="details-identity-facts"><div class="details-fact-label">Дата народження:</div><div class="details-fact-english">Date of birth</div><strong>${escaped.date}</strong>${signatureMarkup}</div></div></article><section class="details-data-card">${rows.slice(0, 3).map(rowMarkup).join("")}</section><section class="details-data-card">${rows.slice(3, 6).map(rowMarkup).join("")}</section><section class="details-data-card details-number-card">${rowMarkup(rows[6])}</section><section class="details-qr-card"><div class="details-qr-timer">Код діятиме ще <span id="fullInfoQrTimer">3:00</span></div><img src="${QR_DATA[doc.qr]}" alt="Демонстраційний QR-код документа"></section>`;
}
function startDetailsQrTimer() {
  clearInterval(detailsQrTimer);
  let seconds = 180;
  const display = document.getElementById("fullInfoQrTimer");
  const update = () => {
    if (!display) return;
    display.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  };
  update();
  detailsQrTimer = setInterval(() => {
    seconds = Math.max(0, seconds - 1);
    update();
    if (!seconds) clearInterval(detailsQrTimer);
  }, 1000);
}
function openDocumentDetails(index) {
  renderDocumentDetails(index);
  documentDetailsSheet.scrollTop = 0;
  documentDetailsSheet.style.removeProperty("--drag-y");
  documentDetailsSheet.classList.remove("dragging");
  docMenuBackdrop.classList.add("open", "details-open");
  docMenuBackdrop.classList.remove("details-closing");
  docMenuBackdrop.setAttribute("aria-hidden", "false");
  documentDetailsSheet.setAttribute("aria-hidden", "false");
  startDetailsQrTimer();
}
function closeDocumentDetails() {
  clearInterval(detailsQrTimer);
  docMenuBackdrop.classList.add("details-closing");
  documentDetailsSheet.style.removeProperty("--drag-y");
  documentDetailsSheet.classList.remove("dragging");
  clearTimeout(detailsCloseTimer);
  detailsCloseTimer = setTimeout(() => {
    closeDocMenu();
  }, 340);
}
function showDocAction(message) {
  docActionToast.textContent = message;
  docActionToast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => docActionToast.classList.remove("show"), 2600);
}
let utilityMode = "";
let reorderOriginal = null;
function renderReorderList() {
  utilityModalBody.innerHTML = `<div class="reorder-list">${docs.map((doc, index) => `<div class="reorder-row"><span class="reorder-position">${index + 1}</span><span class="reorder-title">${escapeDetailsText(doc.title)}</span><span class="reorder-buttons"><button type="button" data-reorder-move="up" data-index="${index}" aria-label="Перемістити вгору" ${index === 0 ? "disabled" : ""}>↑</button><button type="button" data-reorder-move="down" data-index="${index}" aria-label="Перемістити вниз" ${index === docs.length - 1 ? "disabled" : ""}>↓</button></span></div>`).join("")}</div>`;
}
function openUtilityDialog(mode) {
  utilityMode = mode;
  utilityModalMessage.textContent = "";
  if (mode === "add") {
    utilityModalTitle.textContent = "Додати документ";
    utilityModalBody.innerHTML = `<label class="utility-form-field"><span>Назва документа</span><input id="newDocumentTitle" maxlength="42" placeholder="Наприклад, посвідчення" autocomplete="off"></label><label class="utility-form-field"><span>Номер документа <small>(необов’язково)</small></span><input id="newDocumentNumber" maxlength="32" placeholder="DEMO-NEW-001" autocomplete="off"></label><p class="utility-form-hint">Додасться локальна демонстраційна картка. Це не державний сервіс.</p>`;
    utilityModalPrimary.textContent = "Додати";
  } else {
    reorderOriginal = [...docs];
    utilityModalTitle.textContent = "Змінити порядок документів";
    renderReorderList();
    utilityModalPrimary.textContent = "Зберегти порядок";
  }
  utilityModalBackdrop.hidden = false;
  utilityModalBackdrop.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => utilityModalBackdrop.classList.add("open"));
}
function closeUtilityDialog(restoreOrder = true) {
  if (utilityMode === "reorder" && restoreOrder && reorderOriginal) {
    docs.splice(0, docs.length, ...reorderOriginal);
    renderCarousel();
    updateDocumentProfile();
    renderProfilePhoto();
  }
  utilityModalBackdrop.classList.remove("open");
  utilityModalBackdrop.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    utilityModalBackdrop.hidden = true;
  }, 250);
  utilityMode = "";
  reorderOriginal = null;
}
utilityModalBody.addEventListener("click", (event) => {
  const moveButton = event.target.closest("[data-reorder-move]");
  if (!moveButton || utilityMode !== "reorder") return;
  const from = Number(moveButton.dataset.index);
  const to = from + (moveButton.dataset.reorderMove === "up" ? -1 : 1);
  if (to < 0 || to >= docs.length) return;
  const [moved] = docs.splice(from, 1);
  docs.splice(to, 0, moved);
  renderReorderList();
});
document
  .getElementById("utilityModalCancel")
  .addEventListener("click", () => closeUtilityDialog(true));
utilityModalBackdrop.addEventListener("click", (event) => {
  if (event.target === utilityModalBackdrop) closeUtilityDialog(true);
});
utilityModalPrimary.addEventListener("click", () => {
  if (utilityMode === "add") {
    const title = document
      .getElementById("newDocumentTitle")
      .value.trim()
      .replace(/[<>]/g, "")
      .slice(0, 42);
    const numberInput = document.getElementById("newDocumentNumber");
    const number = numberInput.value.trim().replace(/[<>]/g, "").slice(0, 32);
    if (!title) {
      utilityModalMessage.textContent = "Вкажіть назву документа.";
      return;
    }
    const name = [
      document.getElementById("surname").value.trim(),
      document.getElementById("given").value.trim(),
      document.getElementById("middle").value.trim(),
    ];
    const birth = formatProfileBirthDate(
      document.getElementById("birth").value,
    );
    docs.push({
      title,
      kind: "Демо-документ",
      number: number || `DEMO-NEW-${String(docs.length + 1).padStart(3, "0")}`,
      date: birth,
      tax: "0000000000",
      name,
      qr: "DEMO-ID-2048-7316",
    });
    saveDocuments();
    activeDoc = docs.length;
    renderCarousel();
    updateDocumentProfile();
    renderProfilePhoto();
    closeUtilityDialog(false);
    requestAnimationFrame(() => setDoc(activeDoc));
    return;
  }
  if (utilityMode === "reorder") {
    saveDocuments();
    activeDoc = docs.length;
    renderCarousel();
    updateDocumentProfile();
    renderProfilePhoto();
    closeUtilityDialog(false);
    requestAnimationFrame(() => setDoc(activeDoc));
  }
});
let passportTimerInterval;
let passportSecondsRemaining = 180;
function updatePassportTimer() {
  const timer = document.getElementById("passportTimer");
  if (!timer) return;
  const minutes = Math.floor(passportSecondsRemaining / 60);
  const seconds = String(passportSecondsRemaining % 60).padStart(2, "0");
  timer.textContent = `${minutes}:${seconds}`;
}
function startPassportTimer() {
  clearInterval(passportTimerInterval);
  passportSecondsRemaining = 180;
  updatePassportTimer();
  passportTimerInterval = setInterval(() => {
    passportSecondsRemaining = Math.max(0, passportSecondsRemaining - 1);
    updatePassportTimer();
    if (passportSecondsRemaining === 0) clearInterval(passportTimerInterval);
  }, 1000);
}
function setPassportCodeView(codeType) {
  const passportBack = carousel.querySelector(".ua-passport-back");
  if (!passportBack) return;
  passportBack.classList.toggle("show-barcode", codeType === "barcode");
  passportBack.querySelectorAll(".passport-code-toggle").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.code === codeType),
    );
  });
}
async function copyTaxNumber(value) {
  try {
    if (!navigator.clipboard?.writeText)
      throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(value);
    showDocAction("РНОКПП скопійовано.");
  } catch {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = value;
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.append(temporaryInput);
    temporaryInput.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {}
    temporaryInput.remove();
    showDocAction(
      copied ? "РНОКПП скопійовано." : "Не вдалося скопіювати РНОКПП.",
    );
  }
}

carousel.addEventListener("click", (e) => {
  const utilityAction = e.target.closest("[data-carousel-action]");
  if (utilityAction) {
    e.preventDefault();
    openUtilityDialog(utilityAction.dataset.carouselAction);
    return;
  }
  const codeToggle = e.target.closest(".passport-code-toggle");
  if (codeToggle) {
    e.preventDefault();
    e.stopPropagation();
    setPassportCodeView(codeToggle.dataset.code);
    return;
  }
  const taxCopy = e.target.closest("[data-tax-copy]");
  if (taxCopy) {
    const card = taxCopy.closest(".doc-card");
    const doc = card && docs[Number(card.dataset.index)];
    e.preventDefault();
    e.stopPropagation();
    if (doc) copyTaxNumber(doc.tax);
    return;
  }
  const more = e.target.closest(".more");
  if (more) {
    const card = more.closest(".doc-card");
    if (card) selectedDocIndex = Number(card.dataset.index) || 0;
    e.preventDefault();
    e.stopPropagation();
    openDocMenu();
    return;
  }
  const card = e.target.closest(".doc-card");
  if (card) {
    card.classList.toggle("flipped");
    if (card.dataset.index === "1") {
      if (card.classList.contains("flipped")) startPassportTimer();
      else clearInterval(passportTimerInterval);
    }
  }
});
document.getElementById("closeDocMenu").addEventListener("click", closeDocMenu);
docMenuBackdrop.addEventListener("click", (e) => {
  if (e.target === docMenuBackdrop) {
    if (docMenuBackdrop.classList.contains("details-open"))
      closeDocumentDetails();
    else closeDocMenu();
  }
});
docMenuBackdrop.querySelectorAll("[data-doc-action]").forEach((button) =>
  button.addEventListener("click", () => {
    const action = button.dataset.docAction;
    if (action === "details") {
      openDocumentDetails(selectedDocIndex);
      return;
    }
    if (action === "reorder") {
      closeDocMenu();
      openUtilityDialog("reorder");
      return;
    }
    const messages = {
      residence:
        "Витяг про місце проживання: ця дія доступна лише в офіційному сервісі.",
      rate: "Дякуємо! Оцінювання документа в цьому макеті.",
      faq: "Питання та відповіді щодо документа.",
      qr: "QR-код цього макета не є засобом підтвердження особи.",
      barcode: "Штрихкод цього макета не є офіційним.",
    };
    closeDocMenu();
    showDocAction(messages[action] || "Дія недоступна в цьому макеті.");
  }),
);
let detailsTouchStartY = null;
documentDetailsSheet.addEventListener(
  "touchstart",
  (event) => {
    if (event.touches.length === 1)
      detailsTouchStartY = event.touches[0].clientY;
  },
  { passive: true },
);
documentDetailsSheet.addEventListener(
  "touchmove",
  (event) => {
    if (detailsTouchStartY === null || event.touches.length !== 1) return;
    const delta = event.touches[0].clientY - detailsTouchStartY;
    if (delta > 0 && documentDetailsSheet.scrollTop <= 0) {
      event.preventDefault();
      documentDetailsSheet.classList.add("dragging");
      documentDetailsSheet.style.setProperty("--drag-y", `${delta}px`);
    }
  },
  { passive: false },
);
documentDetailsSheet.addEventListener("touchend", (event) => {
  if (detailsTouchStartY === null) return;
  const endY = event.changedTouches[0]?.clientY ?? detailsTouchStartY;
  const delta = endY - detailsTouchStartY;
  detailsTouchStartY = null;
  if (documentDetailsSheet.classList.contains("dragging")) {
    if (delta > 110) closeDocumentDetails();
    else {
      documentDetailsSheet.classList.remove("dragging");
      documentDetailsSheet.style.removeProperty("--drag-y");
    }
  }
});
document
  .getElementById("detailsGrabArea")
  .addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") return;
    detailsTouchStartY = event.clientY;
    documentDetailsSheet.classList.add("dragging");
    event.currentTarget.setPointerCapture?.(event.pointerId);
  });
document
  .getElementById("detailsGrabArea")
  .addEventListener("pointermove", (event) => {
    if (detailsTouchStartY === null || event.pointerType === "touch") return;
    const delta = Math.max(0, event.clientY - detailsTouchStartY);
    documentDetailsSheet.style.setProperty("--drag-y", `${delta}px`);
  });
document
  .getElementById("detailsGrabArea")
  .addEventListener("pointerup", (event) => {
    if (detailsTouchStartY === null || event.pointerType === "touch") return;
    const delta = event.clientY - detailsTouchStartY;
    detailsTouchStartY = null;
    if (delta > 110) closeDocumentDetails();
    else {
      documentDetailsSheet.classList.remove("dragging");
      documentDetailsSheet.style.removeProperty("--drag-y");
    }
  });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!feedModalBackdrop.hidden) closeFeedModal();
    else if (!utilityModalBackdrop.hidden) closeUtilityDialog(true);
    else if (docMenuBackdrop.classList.contains("details-open"))
      closeDocumentDetails();
    else closeDocMenu();
  }
});
