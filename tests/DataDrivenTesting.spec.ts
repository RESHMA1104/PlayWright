import { test, expect } from "@playwright/test";
import loginData from "../testData/loginData.json" with {type:'json'};

interface LoginData{
    testName : string;
    username : string;
    password : string;
    expectedResult : "Success" | "Failure";
    expectedMessage : string;
}

const users = loginData as LoginData[];
for (const data of users){
    test(`${data.testName} - ${data.username} || "Without username Login"`, async({page})=> {
        await page.goto("https://demoblaze.com/");
        await page.click("#login2");
        await page.fill("#loginusername", data.username);
        await page.fill("#loginpassword", data.password);
        if(data.expectedResult === "Failure"){
            page.on("dialog", async(alert)=>{
                expect(alert.message()).toBe(data.expectedMessage);
                await alert.accept();
            })
        }
        await page.click("button[onclick='logIn()']");
        if(data.expectedResult === "Success"){
            await page.waitForTimeout(2000);
            await expect(page.locator("#nameofuser")).toBeVisible({timeout : 10000});
            await expect(page.locator("#nameofuser")).toContainText(`Welcome ${data.username}`);
        }
    });
}