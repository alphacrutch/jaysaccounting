import { reactive } from 'vue';

export const profitLossSheetData = reactive({
    companyName: "",
    yearDetails: "",
    sales: 0,
    saleOfProduct: 0,
    totalForIncome: 0,
    costOfSales: 0,
    inventoryShrinkage: 0,
    totalCostOfSales: 0,
    grossProfit: 0,
    purchases: [],
    totalExpenses: 0,
    netEarnings: 0
})
