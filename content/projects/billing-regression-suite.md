---
title: "Billing Regression Suite"
description: "A tiered Selenium + Postman framework that replaced a folder of ad-hoc test scripts, cutting release sign-off from 1.5 days to under 3 hours."
tags: ["Selenium", "Postman", "CI/CD", "Python"]
github: "https://github.com/ss4616/billing-regression-suite"
---

Rebuilt the regression process for a subscription-billing product from the
ground up: a smoke tier that runs on every commit, a full regression tier
gated to release branches, and a Postman collection covering the payments
API's edge cases (proration, failed retries, currency rounding). Wired into
the CI pipeline so a failing tier blocks the merge instead of surfacing in
staging two days later.
