import { SketchbookLayer } from "./sketchbook"

export {};	// to make module 

declare global {
  namespace CONFIG {
    namespace Canvas {
      interface Layers {
				sketchbooks: LayerDefinition<typeof SketchbookLayer, "interface">;
      }
    }
  }
}
