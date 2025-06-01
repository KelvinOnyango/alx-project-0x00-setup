# Airbnb Clone Setup

## Components Documentation

### Card Component

- Displays property cards with:
  - Image
  - Title and location
  - Rating
  - Amenities
  - Price

### Pill Component

- Reusable tag component
- Props:
  - `title: string` (required)

### Button Component

- Configurable button with multiple variants
- Props:
  - `title: string` (required)
  - `size?: 'small' | 'medium' | 'large'` (default: 'medium')
  - `shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'` (default: 'rounded-md')
  - `className?: string` (additional classes)

## Running the Project

```bash
npm run dev -- -p 3000
```
