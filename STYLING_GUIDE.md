# MonoChat Styling Guide

## Design Philosophy
MonoChat follows a modern, dark-mode-first design with light green accents. The interface is clean, minimal, and optimized for mobile chat experiences.

## Color Palette

### Primary Colors
- **Background (Dark)**: `#1A1A1A` or `#0F0F0F` - Main app background
- **Surface (Dark Gray)**: `#2A2A2A` or `#1F1F1F` - Cards, message bubbles (received)
- **Accent Green**: `#4ADE80` or `#10B981` - Primary accent color for:
  - User's own message bubbles
  - Selected items (checkmarks)
  - Active states
  - Interactive elements
  - Send buttons

### Text Colors
- **Primary Text**: `#FFFFFF` - Main text on dark backgrounds
- **Secondary Text**: `#A0A0A0` or `#9CA3AF` - Timestamps, status text
- **Tertiary Text**: `#6B7280` - Placeholder text, inactive states

### Message Bubbles
- **Sent Messages (User)**: Light green accent (`#4ADE80` or `#10B981`) with white text
- **Received Messages**: Dark gray surface (`#2A2A2A`) with white text

### Status Indicators
- **Online Status**: Light green accent color
- **Offline/Inactive**: Gray (`#6B7280`)

## Typography

### Font Family
- **Primary Font**: Poppins (already configured)
- **Weights Available**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Font Sizes
- **H1 (Page Headers)**: 24px - 28px, Weight: 600-700
- **H2 (Section Headers)**: 20px - 22px, Weight: 600
- **Body Text**: 14px - 16px, Weight: 400
- **Small Text (Timestamps, Status)**: 12px - 13px, Weight: 400
- **Button Text**: 14px - 16px, Weight: 500-600

## Spacing & Layout

### Padding & Margins
- **Container Padding**: 16px - 20px
- **Message Bubble Padding**: 12px - 16px (horizontal), 10px - 14px (vertical)
- **Card Padding**: 16px
- **Section Spacing**: 24px - 32px between major sections

### Border Radius
- **Message Bubbles**: 12px - 16px
- **Cards/Buttons**: 12px - 16px
- **Input Fields**: 12px
- **Small Elements**: 8px

### Grid & Layout
- **Image Grid**: 3 columns with equal spacing
- **Chat List Items**: Full width with consistent padding
- **Bottom Navigation**: Fixed height ~60px - 70px

## Component Styles

### Header
- **Height**: 44px - 56px
- **Background**: Dark background color
- **Text**: White, Weight: 600
- **Status Bar**: System default (time, network, battery at top)

### Message Bubbles
- **Sent (User)**: 
  - Background: Light green accent
  - Text: White
  - Alignment: Right
  - Max width: 75% - 80% of container
- **Received**: 
  - Background: Dark gray surface
  - Text: White
  - Alignment: Left
  - Max width: 75% - 80% of container

### Input Area
- **Height**: 48px - 56px
- **Background**: Dark surface color
- **Border**: None or subtle border
- **Placeholder**: Gray text color
- **Icons**: 24px - 28px size, gray or accent color

### Buttons
- **Primary Button**: 
  - Background: Light green accent
  - Text: White, Weight: 600
  - Padding: 12px - 16px vertical, 24px - 32px horizontal
  - Border radius: 12px
- **Secondary Button**: 
  - Background: Dark gray surface
  - Text: White, Weight: 500
  - Border: Optional subtle border

### Cards/List Items
- **Background**: Dark gray surface
- **Padding**: 16px
- **Border Radius**: 12px
- **Spacing**: 8px - 12px between items

### Icons
- **Size**: 24px - 28px for standard icons
- **Color**: 
  - Active: Light green accent
  - Inactive: Gray (`#6B7280`)
  - Default: White or light gray

## Interactive States

### Hover (Desktop)
- **Opacity**: 0.8 - 0.9
- **Scale**: Slight scale (1.02) for buttons

### Active/Pressed
- **Opacity**: 0.7
- **Scale**: 0.98

### Selected
- **Indicator**: Green circle with white checkmark
- **Background**: Subtle green tint

### Disabled
- **Opacity**: 0.5
- **Cursor**: not-allowed

## Special Components

### File Attachment Menu
- **Category Buttons**: Large, dark gray rectangles with icons
- **File List Items**: Dark background with file icons and metadata
- **AI Features**: Large colored square buttons (pink, purple) with icons

### Image Grid
- **Grid Layout**: 3 columns, equal spacing
- **Image Aspect Ratio**: Square (1:1)
- **Selection Indicator**: Green circle with checkmark in top-right corner
- **Camera Icon**: First position in grid for taking new photos

### Voice Message
- **Waveform**: Visual representation with play button
- **Duration**: Displayed next to waveform
- **Background**: Dark surface or accent color

## Responsive Design

### Mobile First
- **Primary Breakpoint**: Mobile (320px - 768px)
- **Tablet**: 768px - 1024px (optional)
- **Desktop**: 1024px+ (optional, chat apps are primarily mobile)

### Touch Targets
- **Minimum Size**: 44px x 44px for all interactive elements
- **Spacing**: At least 8px between touch targets

## Accessibility

### Contrast Ratios
- **Text on Dark Background**: Minimum 4.5:1 (WCAG AA)
- **Text on Accent Green**: Ensure sufficient contrast
- **Interactive Elements**: Clear visual feedback

### Focus States
- **Outline**: 2px solid accent green
- **Offset**: 2px from element

## Implementation Notes

### CSS Variables (Recommended)
```css
:root {
  --bg-primary: #1A1A1A;
  --bg-surface: #2A2A2A;
  --accent-green: #4ADE80;
  --text-primary: #FFFFFF;
  --text-secondary: #A0A0A0;
  --text-tertiary: #6B7280;
  --border-radius: 12px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}
```

### Tailwind Configuration
If using Tailwind, extend the theme with these colors and spacing values.

## Consistency Rules

1. **Always use the dark theme** - No light mode variants
2. **Accent green is for user actions** - Sent messages, selected items, primary buttons
3. **Dark gray for received content** - Received messages, cards, surfaces
4. **Consistent spacing** - Use the spacing scale (8px, 16px, 24px, 32px)
5. **Rounded corners** - All interactive elements should have 12px border radius
6. **Poppins font** - Use throughout the application
7. **Icon consistency** - Same size (24px-28px) and style throughout

