import {it, expect} from "@playwright/test";

it("should search for playwright on bing.com", async({ page }) => {
  await page.goto("http://bing.com");
  await page.keyboard.type("playwright");
  await page.keyboard.press("Enter");
  await page.waitForSelector('text=Results');
  const title = await page.title();
  expect(title).toBe("playwright - Bing");
})