import { test, expect } from "@playwright/test";
test.describe("E-commerce", () => {
    test.describe("Authentication", () => {
        test("Login", async({page}) => {
            console.log("Authentication Completed");
        });
        test("Log out", async({page}) => {
            console.log("Log out Completed");
        });
    });
    test.describe("Shopping", () => {
        test("Search", async({page}) => {
            console.log("Shopping Completed");
        });
        test("Cart", async({page}) => {
            console.log("Cart Completed");
        });
    });
})