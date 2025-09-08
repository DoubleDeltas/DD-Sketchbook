// src/main.ts

// 모듈 이름 상수 (module.json의 "name"과 동일해야 함)
const MODULE_ID = "dd-sketchbook";

// 초기화 단계: 모듈 세팅 등록 등
Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Initializing module`);

  // 여기서 CONFIG 확장, 커스텀 PlaceableObject 등록 가능
  // 예: CONFIG.Canvas.layers["sketchbooks"] = { ... };
});

// Foundry 준비 완료: Scene/Canvas 사용 가능
Hooks.once("ready", () => {
  console.log(`${MODULE_ID} | Ready`);
  
  // 예: 사용자에게 알림
  ui.notifications?.info("Sketchbook module is ready!");
});

// 특정 훅: 예시로 새로운 씬이 로드될 때
Hooks.on("canvasReady", (canvas: Canvas) => {
  console.log(`${MODULE_ID} | Canvas ready`, canvas);
});
