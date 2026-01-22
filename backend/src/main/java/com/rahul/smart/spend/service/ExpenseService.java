package com.rahul.smart.spend.service;

import com.rahul.smart.spend.model.Expense;
import com.rahul.smart.spend.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository repo;

    public ExpenseService(ExpenseRepository repo) {
        this.repo = repo;
    }

    public List<Expense> getAllExpenses() {
        return repo.findAll();
    }

    public Expense addExpense(Expense expense) {
        return repo.save(expense);
    }

    public void deleteExpense(Long id) {
        repo.deleteById(id);
    }

    // 🔥 UPDATE EXPENSE — FULL CODE
    public Expense updateExpense(Long id, Expense newExp) {
        Expense old = repo.findById(id).orElseThrow();
        old.setTitle(newExp.getTitle());
        old.setAmount(newExp.getAmount());
        old.setCategory(newExp.getCategory());
        return repo.save(old);
    }
}
