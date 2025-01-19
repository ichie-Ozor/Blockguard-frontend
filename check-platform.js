const os = require("os");

if (os.platform() === "win32") {
    console.log("Installing Windows-specific dependencies...");
    const { execSync } = require("child_process");
    execSync("npm install @next/swc-win32-x64-msvc", { stdio: "inherit" });
} else {
    console.log("Skipping Windows-specific dependencies.");
}
