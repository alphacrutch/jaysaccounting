<template lang="html">
    <div id="StatementOfOps">
        <form action="">
            <label for=""> Company Name</label>
            <input type="text" placeholder="CompanyName">

        </form>
    </div>
</template>
<script setup>
import { profitLossSheetData } from '@/composables/formTypes'



function grossProfit() {
    const income = profitLossSheetData.totalForIncome();
    const sales = profitLossSheetData.totalCostOfSales();
    return income - sales;
}
function totalCostOfSales() { return profitLossSheetData.costOfSales + profitLossSheetData.inventoryShrinkage }
function totalForIncome() { return profitLossSheetData.sales + profitLossSheetData.saleOfProduct }
function totalExpenses() {
    let total = 0;
    profitLossSheetData.purchases.forEach((purchase) => {
        total += purchase;
    })
    return total;
}
function netEarnings() {
    const profit = profitLossSheetData.grossProfit();
    const expenses = profitLossSheetData.totalExpenses();
    return profit - expenses;
}

</script>
<style lang="scss">
form {
    height: 100%;
    width: 100%;
}
</style>