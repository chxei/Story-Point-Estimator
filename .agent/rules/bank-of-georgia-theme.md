# Design Theme

When building or modifying the User Interface (UI) for this project, you MUST strictly adhere to the Bank of Georgia (BOG) theme:

### Color Palette
The app supports both Light and Dark themes, managed centrally via `body.dark-theme` CSS variables:
- **Primary Accent:** Bank of Georgia Orange (`#FC671A`) - Use universally for buttons, active states, and primary highlights.
- **Hover States:** Darker Orange (`#E5550D`)
- **Light Theme Details:** Minimalist Light Grey backgrounds (`#F4F5F7`), Pure White cards (`#FFFFFF`), Navy/Slate headings (`#091A2B`), and Light Grey borders (`#E2E8F0`).
- **Dark Theme Details:** Neutral Charcoal/Graphite backgrounds (`#121212`), Dark Grey cards (`#1C1C1C`), Pure White headings (`#FFFFFF`), and Mid-Grey borders (`#333333`).
- **Text:** Dark Grey/Black primary and Slate Grey secondary in light mode; Soft White Primary (`#F5F5F5`) and Mid-Grey secondary (`#A3A3A3`) in dark mode.

### Component Guidelines
- Avoid using range sliders for discrete choices. Prefer segmented controls (radio buttons wrapped as custom UI) for selections like "Easy / Medium / Hard".
- Use subtle drop shadows for depth and avoid flat, lifeless designs. (e.g. `0 8px 24px rgba(0, 0, 0, 0.08)`)
- Ensure ample whitespace and padding within cards.
