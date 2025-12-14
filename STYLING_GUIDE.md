# MonoChat Styling Guide

This document outlines the design system and styling guidelines for MonoChat, ensuring consistency across the application.

## Design Philosophy

MonoChat follows a **dark mode-first** design with **light green accents** for a modern, clean mobile chat experience.

## Color System

### Background Colors
- **Primary Background**: `#000000` - Main app background
- **Secondary Background**: `#1F1F1F` - Panels, cards, input fields
- **Tertiary Background**: `#2A2A2A` - Other user's chat bubbles
- **Panel Background**: `#1A1A1A` - Modal backgrounds, side panels

### Accent Colors (Light Green)
- **Primary Accent**: `#00FF88` - Primary buttons, user chat bubbles, selected items
- **Secondary Accent**: `#00CC6F` - Hover states
- **Active Accent**: `#00B85C` - Active/pressed states

### Text Colors
- **Primary Text**: `#FFFFFF` - Main content text
- **Secondary Text**: `#CCCCCC` - Subtitles, metadata
- **Tertiary Text**: `#999999` - Timestamps, less important info
- **Muted Text**: `#666666` - Placeholders, disabled text

### Chat Bubbles
- **User (Me)**: `#00FF88` background with `#000000` text
- **Other User**: `#2A2A2A` background with `#FFFFFF` text

### Status Indicators
- **Online**: `#00FF88`
- **Offline**: `#666666`

## Typography

### Font Family
- **Primary**: Poppins (Google Fonts)
- Weights: 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold)

### Font Sizes
- **xs**: 12px - Labels, captions
- **sm**: 14px - Secondary text, metadata
- **base**: 16px - Body text (default)
- **lg**: 18px - Subheadings
- **xl**: 20px - Headings
- **2xl**: 24px - Page titles
- **3xl**: 30px - Large headings
- **4xl**: 36px - Hero text

### Line Heights
- **Tight**: 1.25 - Headings
- **Normal**: 1.5 - Body text (default)
- **Relaxed**: 1.75 - Long-form content

## Spacing Scale

Use consistent spacing values:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px (base unit)
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

## Border Radius

- **sm**: 6px - Small elements
- **md**: 8px - Buttons, inputs
- **lg**: 12px - Cards, panels
- **xl**: 16px - Large cards
- **2xl**: 24px - Chat bubbles
- **full**: 9999px - Pills, avatars

## Shadows

- **sm**: Subtle elevation
- **md**: Cards, dropdowns
- **lg**: Modals, popovers
- **xl**: Large overlays

## Component Guidelines

### Buttons

**Primary Button**
- Background: `#00FF88`
- Text: `#000000`
- Hover: `#00E67A`
- Border radius: `8px`
- Padding: `12px 24px`
- Font weight: `500`

**Secondary Button**
- Background: `#2A2A2A`
- Text: `#FFFFFF`
- Hover: `#333333`
- Border radius: `8px`
- Padding: `12px 24px`

### Input Fields

- Background: `#1F1F1F`
- Border: `#333333`
- Focus border: `#00FF88`
- Text: `#FFFFFF`
- Placeholder: `#666666`
- Border radius: `8px`
- Padding: `12px 16px`

### Chat Bubbles

**User (Me)**
- Background: `#00FF88`
- Text: `#000000`
- Border radius: `16px 16px 4px 16px` (rounded except bottom-left)
- Max width: `75%`
- Padding: `12px 16px`

**Other User**
- Background: `#2A2A2A`
- Text: `#FFFFFF`
- Border radius: `16px 16px 16px 4px` (rounded except bottom-right)
- Max width: `75%`
- Padding: `12px 16px`

### Cards/Panels

- Background: `#1F1F1F` or `#1A1A1A`
- Border: `#333333` (optional)
- Border radius: `12px`
- Padding: `16px`
- Shadow: `md` (if elevated)

## Usage in Code

### CSS Variables

Always use CSS variables from `design-tokens.css`:

```css
.my-component {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
}
```

### Tailwind Classes

When using Tailwind, prefer semantic color names:

```tsx
<div className="bg-bg-secondary text-text-primary p-md rounded-lg">
  Content
</div>
```

## Responsive Design

- **Mobile First**: Design for mobile (320px+) first
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## Accessibility

- Maintain sufficient color contrast (WCAG AA minimum)
- Use semantic HTML elements
- Ensure interactive elements are at least 44x44px for touch targets
- Provide focus indicators using accent color

## Animation & Transitions

- **Fast**: 150ms - Hover states, small interactions
- **Base**: 200ms - Default transitions
- **Slow**: 300ms - Complex animations

Use `ease-in-out` timing function for smooth transitions.

## Best Practices

1. **Consistency**: Always use design tokens, never hardcode colors or spacing
2. **Dark Mode Only**: This app is dark mode only - no light mode variants
3. **Mobile First**: Design components for mobile, enhance for larger screens
4. **Touch Targets**: Minimum 44x44px for all interactive elements
5. **Readability**: Maintain high contrast between text and backgrounds
6. **Spacing**: Use the spacing scale consistently - avoid arbitrary values

## File Structure

```
src/
├── styles/
│   └── design-tokens.css  # All design tokens
├── components/            # Reusable components
└── pages/                # Page components
```

## Questions?

Refer to `src/styles/design-tokens.css` for the complete list of available tokens.

