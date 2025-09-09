import { HandleEmptyObject } from "fvtt-types/utils";

/**
 * Sketchbook - a custom placeable object for FVTT
 */
export class Sketchbook extends foundry.canvas.placeables.PlaceableObject {
    override get bounds(): PIXI.Rectangle {
        throw new Error("Method not implemented.");
    }
    
    protected override async _draw(
        options: HandleEmptyObject<PlaceableObject.DrawOptions>
    )
    : Promise<void> {
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xffffff, 0.25);
        graphics.lineStyle(2, 0x000000, 1.0);
        graphics.drawRect(0, 0, 200, 200);
        graphics.endFill();
        this.addChild(graphics);
    }
}

export class SketchbookLayer extends foundry.canvas.layers.InteractionLayer {

}

declare namespace SketchbookLayer {
    
}