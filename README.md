# Credit Card Checkout UI

A multi-step credit card checkout flow built with vanilla JavaScript and Tailwind CSS v4 — no frameworks, no libraries. Based on the "Credit Card Checkout — Daily UI #002" design concept.

**[Live Demo](https://shalizsharafi.github.io/creditCardUserInterface/)**


<table>
   <tr>
    <td align="center"><strong>Demo</strong></td>
  </tr>

   <tr>
    <td>
      <img width="800" alt="github demo " src="https://github.com/user-attachments/assets/497292c7-5fbe-4d44-8e19-37a47c940029" />
</td>
  </tr>
</table>


## Features

### Checkout flow
- Three-step flow (Products → Checkout → New Card) with an animated progress indicator and a contextual back button
- Live cart with quantity controls (+/-) that recalculate subtotal, VAT, and total in real time

### Saved cards
- Horizontally scrollable card carousel with a masked card number (`****-****-****-1234`) and a paginated dot indicator that highlights based on scroll position
- Tap-to-select a card, with a clear visual selected state
- **Add a new card** through a dedicated form with live input formatting:
  - Auto-advancing, digit-only card number inputs
  - Letters-and-spaces-only name validation
  - A live preview card at the top of the form that updates as you type
- **Save your card information** checkbox — only cards the user explicitly opts into saving persist across page reloads (via `localStorage`); everything else is session-only
- A hard cap of 5 saved cards, enforced on save
- **Press-and-hold to delete** a card, with a confirmation prompt before removal

### Extras
- A styled "redirecting to your bank" modal with a live countdown timer, triggered from the payment method selection
- Defensive rendering — malformed or incomplete card data is skipped rather than crashing the page

## Tech stack

- HTML5
- Tailwind CSS v4 (custom `@theme` color tokens)
- Vanilla JavaScript (no build tools beyond the Tailwind CLI)

## Project structure

```
├── index.html
├── stylesheet/
│   └── out.css          # Compiled Tailwind output
├── js/
│   └── script.js         # All application logic
└── images/                # Icons and photos
```

## Running locally

1. Clone the repo
2. Make sure Tailwind CSS v4 is set up to watch/build `stylesheet/out.css`
3. Open `index.html` in a browser — no server or build step required beyond the CSS

## What I learned

This project was built step by step as a way to practice core vanilla JS concepts without reaching for a framework:
- DOM manipulation and dynamic rendering from a single source-of-truth data array
- Event delegation for elements created and destroyed at runtime
- State management with plain variables and objects
- Working with `localStorage` for persistence, including validating and filtering data on both read and write
- Regex for input formatting and validation
- Timers (`setTimeout` / `setInterval`) for interaction patterns like press-and-hold and countdowns

## Author

**Shaliz Sharafi** — Frontend Developer

- GitHub: [github.com/shalizsharafi](https://github.com/shalizsharafi)
- LinkedIn: [linkedin.com/in/shalizsharafi](https://linkedin.com/in/shalizsharafi)
- Instagram: [@shalizcodes](https://instagram.com/shalizcodes)
