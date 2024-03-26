import { SuprSend } from "./index";

describe("supr-send-typescript-sdk", () => {
    it("initialize client", async () => {
        const suprsend = new SuprSend({
            apiKey: "API_KEY",
        });
    });
});
