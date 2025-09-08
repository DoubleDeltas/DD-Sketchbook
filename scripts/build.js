import fs, {promises as fsp} from "fs";
import archiver from "archiver";

const BUILD_NAME = "dd-sketchbook";

(async () => {
    await fsp.rm("build/", {recursive: true});
    await fsp.mkdir("build/");

    await fsp.cp("dist/", `build/${BUILD_NAME}/dist/`, {recursive: true});
    await fsp.cp("resources/", `build/${BUILD_NAME}/resources/`, {recursive: true});
    await fsp.cp("module.json", `build/${BUILD_NAME}/module.json`);

    const output = fs.createWriteStream(`build/${BUILD_NAME}.zip`);
    const archive = archiver("zip", { zlib: { level: 9 } });
    archive.pipe(output);
    archive
        .directory("dist/", "dist")
        .directory("resources/", "resources")
        .file("module.json", { name: "module.json" });
    await archive.finalize();
})();
