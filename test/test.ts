import fs from "fs";
import { whois, whoisParser } from "index";
import path from "path";

const domains = JSON.parse(
  fs.readFileSync(path.resolve(path.join(__dirname, "url-list.json")), "utf-8")
)["domains"];

describe("Function", () => {
  it("whois test", async () => {
    for (const domain of domains) {
      const result = whoisParser(await whois(domain));
    }
  }).timeout(10000);
});
