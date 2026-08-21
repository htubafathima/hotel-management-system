# Hotel Management System

A front-end Hotel Management System built as a BCA major project. It simulates a full room-booking and billing flow — browse rooms, book one, add food to the order, review the bill, and confirm the booking — all handled client-side with `localStorage`.

## Live pages

- `index.html` — Home
- `rooms.html` — Browse rooms and submit a booking (guest name, dates, room type)
- `food.html` — In-room dining menu with quantity selectors
- `cart.html` — Review room + food charges, confirm checkout or clear the cart
- `reports.html` — Analytics dashboard (bookings, revenue, bar chart) built from booking history

## Tech stack

- HTML5, CSS3, vanilla JavaScript (no frameworks, no build step)
- Browser `localStorage` for state — no backend/database

## How data flows

| localStorage key | Set by | Used by | Cleared by |
|---|---|---|---|
| `bookingData` | rooms.html | cart.html | cart.html (on checkout or clear) |
| `foodCart` | food.html | cart.html | cart.html (on checkout or clear) |
| `bookingHistory` | cart.html (on checkout) | reports.html | — (persists as booking log) |

## Running locally

No build tools required. Either:

1. Open `index.html` directly in a browser, or
2. Serve the folder locally, e.g. `python3 -m http.server 8000`, then visit `http://localhost:8000`

## Project structure

```
hms/
├── index.html
├── rooms.html
├── food.html
├── cart.html
├── reports.html
├── css/
│   └── style.css
└── js/
    └── storage.js
```

## Notes

This is a front-end simulation built for academic submission — it does not persist data beyond the browser's local storage and has no server-side validation or authentication.
