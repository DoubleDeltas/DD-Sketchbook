import { SketchbookLayer } from "./sketchbook";

Hooks.once("init", () => {
  console.log("DD-Sketchbook | Initializing module");

  // 커스텀 PlaceableObject 등록
  CONFIG.Canvas.layers.sketchbooks = {
    layerClass: SketchbookLayer,
    group: "interface"
  };
});