import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setUpEnvironmentVariables() {
    if (process.env.NODE_ENV !== "production") {
        dotenv.config({ path: path.resolve(__dirname, "..", ".env") });
    }
}