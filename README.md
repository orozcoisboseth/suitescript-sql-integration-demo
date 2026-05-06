# SuiteScript SQL Integration Demo

Demo project that illustrates how to integrate NetSuite transactions
with an external API and a SQL Server–based system using SuiteScript 2.x.

This repository focuses on **architecture, integration patterns,
and clean separation of concerns**, rather than on production logic.

---

## Purpose

The purpose of this project is to demonstrate how to design
a NetSuite enterprise integration that:

- Starts from a transaction (Purchase Order or Sales Order)
- Uses SuiteScript User Events, Client Scripts, and Suitelets
- Delegates external communication to a service and adapter layer
- Calls an external API (simulated)
- Persists data into a SQL-based system (simulated)
- Updates NetSuite with the response from the external system

This is **demo-only code**, rewritten from scratch.

---

## Functional Flow

NetSuite Transaction (PO / SO)
↓
User Event Script
(adds action button)
↓
Client Script
(redirects to Suitelet)
↓
Suitelet
(orchestrates integration request)
↓
Integration Service
(business logic)
↓
External API Adapter (mock)
↓
SQL Server (simulated persistence)
↓
Response returned to NetSuite

---

## Scope

Included:
- NetSuite-side flow (UE → Client → Suitelet)
- Service and adapter pattern
- Simulated external API
- Simulated SQL persistence
- Idempotent-style external response handling

Not included:
- Real API endpoints
- Real SQL Server connections
- Real credentials or authentication
- Production business rules

---

## Disclaimer

All code in this repository is **for demonstration purposes only**.

- No production logic
- No real NetSuite account data
- No real database structure
- No proprietary or employer-owned code

This project was created exclusively to showcase integration design
and technical decision-making.
