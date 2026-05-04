document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// 1. 우클릭 방지
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// 2. 드래그 방지
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

// 3. 복사 및 개발자 도구 단축키 방지
document.onkeydown = function(e) {
  // F12 방지
  if (e.keyCode == 123) return false;

  // Ctrl + Shift + I / J (개발자 도구) 방지
  if (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) return false;

  // Ctrl + U (소스 보기) 방지
  if (e.ctrlKey && e.keyCode == 85) return false;

  // Ctrl + C (복사) 방지
  if (e.ctrlKey && e.keyCode == 67) return false;

  // Ctrl + S (페이지 저장) 방지
  if (e.ctrlKey && e.keyCode == 83) return false;
};
