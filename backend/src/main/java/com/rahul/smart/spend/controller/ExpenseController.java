package com.rahul.smart.spend.controller;

import com.rahul.smart.spend.model.Expense;
import com.rahul.smart.spend.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }

    // Get all expenses
    @GetMapping
    public List<Expense> getAll() {
        return service.getAllExpenses();
    }

    // Add a new expense
    @PostMapping
    public Expense add(@RequestBody Expense expense) {
        return service.addExpense(expense);
    }

    // Update an expense
    @PutMapping("/{id}")
    public Expense update(@PathVariable Long id, @RequestBody Expense newExpense) {
        return service.updateExpense(id, newExpense);
    }


    // Delete an expense
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteExpense(id);
    }
}
