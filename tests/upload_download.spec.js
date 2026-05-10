const exceljs = require('exceljs');
const {test,expect} = require("@playwright/test");
async function write_excel(search_value,replace_value,change_value,file_path)
{
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(file_path);
    const worksheet = workbook.getWorksheet("Sheet1");
    const output = await read_excel(worksheet,search_value,change_value);
    const cell = worksheet.getCell(output.row,output.col+change_value.col_change);
    cell.value = replace_value;
    await workbook.xlsx.writeFile(file_path);
}
async function read_excel(worksheet, search_value)
{
    let output = {row:-1,col:-1};
    worksheet.eachRow((row,row_num)=>{
        row.eachCell((cell,col_num)=>{
            if(cell.value === search_value)
            {
                output.row = row_num;
                output.col = col_num;
            }
        });
    });
    return output;
}
//write_excel("Samsung",350,{row_change:0,col_change:2},"/Users/L053981/Excel_Demo/practice1.xlsx");
test("Upload and Download Excel Verification",async({browser})=>{
    const search_text = "Mango";
    const update_value = 350;
    const context = await browser.newContext({
        acceptDownloads: true,
    });
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const download_promise = page.waitForEvent("download");
    await page.getByRole("button",{name:"Download"}).click();
    const download = await download_promise;
    await download.saveAs("/Users/L053981/Downloads/download.xlsx");
    write_excel(search_text,update_value,{row_change:0,col_change:2},"/Users/L053981/Downloads/download.xlsx");
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("/Users/L053981/Downloads/download.xlsx");
    const text = await page.getByText(search_text);
    const row = await page.getByRole("row").filter({has: text});
    await expect(row.locator("#cell-4-undefined")).toContainText(update_value.toString());
    await page.pause();
});