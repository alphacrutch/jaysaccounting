import * as XLSX from "xlsx";

export function createMergedSheet() {
    // Step 1: Create worksheet data (only one top-left value per merge)
    const data = [
        ["Profit And Loss", ""],  // A1, B1
        ["Merged A2-B2", ""],  // A2, B2
    ];

    // Step 2: Create worksheet from array
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Step 3: Define the merge ranges
    ws["!merges"] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }, // A1:B1
        { s: { r: 1, c: 0 }, e: { r: 1, c: 1 } }, // A2:B2
    ];

    // Step 4: Create workbook and append the sheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Merged Sheet");

    // Step 5: Write to file
    XLSX.writeFile(wb, "MergedCells.xlsx");
}
