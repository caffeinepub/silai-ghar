# Specification

## Summary
**Goal:** Expand the mock tailor dataset to 200+ entries so that category and location filters return meaningful results throughout the app.

**Planned changes:**
- Expand `frontend/src/data/mockTailors.ts` to contain at least 200 tailor objects, each with a unique ID, realistic Indian name, rating (3.0–5.0), Mumbai-area address, 10-digit Indian mobile number, distance (0.3–8.0 km), price range (₹/₹₹/₹₹₹), one or more services, a location area, and portfolio image references reusing existing assets
- Distribute entries evenly across all existing location areas (minimum 10 per area) and all six service categories (minimum 20 per category)
- No other files are modified

**User-visible outcome:** Searching by any category tile or filtering by any location area chip returns 20+ or 10+ results respectively, and the Search Results screen reflects the full expanded dataset count.
