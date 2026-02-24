# Visual Walkthrough - J&J Booth Catalog Setup

This guide provides a visual walkthrough of setting up and using the Johnson & Johnson Congress Booth Catalog system.

---

## 📥 Step 1: Locate Your Files

**What you should see:**
```
📁 booth-catalog/
   📄 package.json
   📄 next.config.js
   📄 README_UPDATED.md
   📁 app/
   📁 components/
   📁 data/
   📁 types/
```

**Action:** Extract the booth-catalog folder to your computer

---

## 💻 Step 2: Open Terminal in Project Folder

### Using VS Code (Recommended):

**Screenshot description:**
- Open VS Code
- File menu → Open Folder
- Navigate to booth-catalog
- Click "Select Folder"
- Terminal appears at bottom
- Path shows: `.../booth-catalog`

### Using Terminal/Command Prompt:

**Mac Terminal:**
```
MacBook:~ username$ cd /Users/username/Projects/booth-catalog
MacBook:booth-catalog username$ 
```

**Windows Command Prompt:**
```
C:\Users\Username> cd C:\Users\Username\Projects\booth-catalog
C:\Users\Username\Projects\booth-catalog>
```

**Verify location:** Type `ls` (Mac/Linux) or `dir` (Windows)

You should see:
```
app/
components/
data/
node_modules/  (after npm install)
package.json
README_UPDATED.md
...
```

---

## 📦 Step 3: Install Dependencies

**Command:**
```bash
npm install
```

**What you'll see in terminal:**

```
npm WARN deprecated package@1.0.0: ...
npm WARN deprecated package@2.0.0: ...

added 347 packages, and audited 348 packages in 45s

128 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

**Visual indicators:**
- Progress bars moving
- Package names scrolling
- "added XXX packages" at the end
- New `node_modules/` folder appears (large folder ~200MB)

**⏱️ Duration:** 1-3 minutes

---

## 🚀 Step 4: Start Development Server

**Command:**
```bash
npm run dev
```

**What you'll see in terminal:**

```
> booth-catalog@0.1.0 dev
> next dev

   ▲ Next.js 14.2.0
   - Local:        http://localhost:3000
   - Environments: .env

 ✓ Ready in 2.1s
 ○ Compiling / ...
 ✓ Compiled / in 3.2s
```

**Visual indicators:**
- Next.js logo (▲)
- "Local: http://localhost:3000" (clickable)
- "Ready in X.Xs"
- "Compiled successfully"

**⚠️ Leave this terminal window open!** Closing it stops the server.

---

## 🌐 Step 5: Open in Browser

**Action:** Open browser and go to `http://localhost:3000`

**What you should see:**

### Header Area:
```
┌─────────────────────────────────────────────────┐
│  Johnson & Johnson                              │
│  Congress Booth Catalog                  [Grid] │
│  Browse and order from our inventory    [List]  │
└─────────────────────────────────────────────────┘
```
**Colors:** Red gradient background (#cc0000), white text

### Main Layout:
```
┌─────────┬──────────────────────────────────────┐
│ FILTERS │          BOOTH CARDS                 │
│         │                                       │
│ Search  │  ┌───────┐ ┌───────┐ ┌───────┐      │
│ [    ]  │  │Modular│ │Compact│ │Interact│      │
│         │  │Summit │ │Engage │ │Experie │      │
│ Status  │  │Pro    │ │       │ │Hub     │      │
│ □ Avail │  │       │ │       │ │        │      │
│ □ Reser │  │$15,000│ │$6,000 │ │$35,000 │      │
│ □ In-Us │  │[View] │ │[View] │ │[View]  │      │
│         │  └───────┘ └───────┘ └───────┘      │
└─────────┴──────────────────────────────────────┘
```

**Visual elements:**
- Red/white J&J branding in header
- Gray sidebar with filters
- 3 booth cards (in grid view)
- Each card shows image placeholder, name, price
- "View Details & Order" buttons in red

---

## 🔍 Step 6: Test Filtering

### Using Search:

**Action:** Type "modular" in search box

**Result:**
```
Showing 1 of 3 booths

┌───────┐
│Modular│  ← Only this booth visible
│Summit │
│Pro    │
└───────┘
```

### Using Status Filter:

**Action:** Check "available" box

**Result:** Only available booths show (booth in-use is hidden)

### Using Tags:

**Action:** Click "large" tag

**Result:** Only large booths show

---

## 🎯 Step 7: View Booth Details

**Action:** Click on "Modular Summit Pro" card

**What you see:**

### Modal Window Opens:
```
┌─────────────────────────────────────────────────┐
│  Modular Summit Pro                         [X] │
│  Large modular booth perfect for...             │
│  ┌─────────────────────────────────────────┐   │
│  │ Overview │ Usage History │ Components   │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  Specifications                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  │ Dimens │ │Capacity│ │ Setup  │ │  Cost  │  │
│  │ 6x6x3.5│ │25 ppl  │ │ 8 hrs  │ │$15,000 │  │
│  └────────┘ └────────┘ └────────┘ └────────┘  │
│                                                  │
│  Features                                        │
│  [LED Display] [Meeting Room] [Storage]         │
│                                                  │
│  [Close]              [Request This Booth]      │
└─────────────────────────────────────────────────┘
```

**Key visual elements:**
- Large modal overlay (dims background)
- Three tabs at top
- Specification cards in grid
- Feature tags in red
- Red "Request This Booth" button

---

## 📝 Step 8: Test Order Form

**Action:** Click "Request This Booth"

**What you see:**

### Order Form Modal:
```
┌─────────────────────────────────────────────────┐
│  Request Booth                              [X] │
│  Modular Summit Pro                             │
├─────────────────────────────────────────────────┤
│  Congress / Event *                             │
│  [Select a congress...               ▼]        │
│                                                  │
│  Requested By *                                 │
│  [e.g., John Smith - Marketing Manager]        │
│                                                  │
│  Start Date *        End Date *                 │
│  [MM/DD/YYYY]       [MM/DD/YYYY]               │
│                                                  │
│  Customization Requests                         │
│  [Describe any specific branding...]           │
│  ┌─────────────────────────────────────────┐   │
│  │ Estimated Base Cost      $15,000        │   │
│  │ Final cost subject to customizations    │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  [Cancel]              [Submit Request]         │
└─────────────────────────────────────────────────┘
```

**Validation:**
- Red asterisks (*) show required fields
- Error messages appear in red if validation fails
- Submit button only works when form is valid

---

## 🆕 Step 9: Congress Registration Form

**To test the new Congress form:** (requires integration - see instructions below)

### Step 1 - Client Information:
```
┌─────────────────────────────────────────────────┐
│  New Congress Registration              [X]     │
│  Step 1 of 4                                    │
│  ██████░░░░░░░░ 25%                            │
├─────────────────────────────────────────────────┤
│  Client Information                             │
│                                                  │
│  Full Name *                                    │
│  [e.g., John Smith]                            │
│                                                  │
│  Email Address *                                │
│  [john.smith@jnj.com]                          │
│                                                  │
│  Department *                                   │
│  [Select department...           ▼]            │
│                                                  │
│  [Cancel]                        [Next]         │
└─────────────────────────────────────────────────┘
```

### Step 2 - Show Information:
```
│  Step 2 of 4                                    │
│  ████████████░░ 50%                            │
├─────────────────────────────────────────────────┤
│  Show/Congress Name *                           │
│  [e.g., ASCO 2025]                             │
│                                                  │
│  Location *          Venue *                    │
│  [Chicago, IL]      [McCormick Place]          │
│                                                  │
│  Start Date *        End Date *                 │
│  [MM/DD/YYYY]       [MM/DD/YYYY]               │
│                                                  │
│  ⚠️ Date conflict detection active             │
│                                                  │
│  [Back]                         [Next]          │
```

**If dates conflict:**
```
│  Start Date *        End Date *                 │
│  [06/14/2025]       [06/16/2025]               │
│  🔴 These dates conflict with an existing       │
│     congress booking                            │
```

### Step 3 - Booth Details:
```
│  Step 3 of 4                                    │
│  ████████████████░░ 75%                        │
├─────────────────────────────────────────────────┤
│  Booth Size Booked *                            │
│  [Select booth size...           ▼]            │
│                                                  │
│  Brief Description *                            │
│  [Provide a brief overview of your booth       │
│   concept and purpose...]                       │
│                                                  │
│  Booth Objectives *                             │
│  [What are the primary objectives...]          │
│                                                  │
│  [Back]                         [Next]          │
```

### Step 4 - Goals & Budget:
```
│  Step 4 of 4                                    │
│  ████████████████████ 100%                     │
├─────────────────────────────────────────────────┤
│  Key Goals *                                    │
│  [Product Launch] [Brand Awareness]            │
│  [Lead Generation] [Customer Education]        │
│  ... (click to select)                          │
│                                                  │
│  Selected: [Product Launch ×] [Lead Gen ×]     │
│                                                  │
│  Total Budget (USD) *                           │
│  $ [0]                                          │
│                                                  │
│  ┌─────────────────────────────────────────┐   │
│  │ Summary                                  │   │
│  │ Show: ASCO 2025                         │   │
│  │ Dates: 06/01/2025 to 06/04/2025       │   │
│  │ Budget: $50,000                         │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  [Back]                    [Submit Registration]│
```

---

## ✅ Step 10: Verify Success

**After submitting:**

### Success Message:
```
┌─────────────────────────────────────┐
│  ✓ Order request submitted          │
│    successfully!                     │
└─────────────────────────────────────┘
```

**Location:** Top-right corner, green background, white text

**Behavior:** 
- Appears for 5 seconds
- Auto-dismisses
- Can be shown multiple times

### In Browser Console:

**Press F12 → Console tab:**
```javascript
Order submitted: {
  id: "order-1707654321000",
  boothId: "booth-001",
  congressId: "congress-003",
  requestedBy: "John Smith - Marketing Director",
  requestDate: "2025-02-11T...",
  status: "pending",
  ...
}
```

---

## 🎨 Visual Design Elements

### Color Scheme:
- **Primary Red:** #cc0000 (J&J red)
- **Header Gradient:** Red-700 to Red-600
- **Hover States:** Red-800
- **Focus Rings:** Red-600
- **Background:** Gray-50
- **Cards:** White with shadow

### Typography:
- **Headers:** Bold, sans-serif
- **Body:** Regular, sans-serif
- **Buttons:** Medium weight
- **Form Labels:** Small, medium weight

### Interactive Elements:
- **Buttons:** Red background, white text, rounded corners
- **Inputs:** Border on focus, red focus ring
- **Cards:** Hover shadow effect
- **Tags:** Red background when selected

---

## 🔄 Making Your First Change

### Change the Header Text:

1. **Open file:** `components/BoothCatalog.tsx`

2. **Find line ~88:**
```typescript
<h1 className="text-2xl font-bold text-white">
  Congress Booth Catalog  ← Change this!
</h1>
```

3. **Change to:**
```typescript
<h1 className="text-2xl font-bold text-white">
  My Custom Booth Catalog
</h1>
```

4. **Save file:** Ctrl+S (Cmd+S on Mac)

5. **See change in browser:** Auto-updates in 1-2 seconds!

**Before:**
```
┌─────────────────────────────────────┐
│  Johnson & Johnson                  │
│  Congress Booth Catalog             │
└─────────────────────────────────────┘
```

**After:**
```
┌─────────────────────────────────────┐
│  Johnson & Johnson                  │
│  My Custom Booth Catalog            │
└─────────────────────────────────────┘
```

---

## 📊 Terminal States

### ✅ Healthy Server:
```
▲ Next.js 14.2.0
- Local:  http://localhost:3000

✓ Ready in 2.1s
✓ Compiled / in 350ms
```

### 🔄 Compiling Changes:
```
○ Compiling /components/BoothCatalog ...
✓ Compiled in 145ms
```

### ❌ Error State:
```
✗ Failed to compile
./components/BoothCatalog.tsx:88:5
Syntax error: Unexpected token

  86 |   return (
  87 |     <div className="min-h-screen">
> 88 |       <header className=
     |                         ^
```

**Action:** Fix the syntax error, save, it will auto-recompile

---

## 🎯 Success Indicators

### Everything Working:
✅ Terminal shows "Ready" and "Compiled successfully"
✅ Browser loads at localhost:3000
✅ J&J branding visible (red header)
✅ 3 booths displayed
✅ Search filters results
✅ Clicking booth opens details
✅ Forms submit successfully
✅ Changes auto-reload

### Something Wrong:
❌ Terminal shows error messages
❌ Browser shows blank page or error
❌ Cannot connect to localhost:3000
❌ Changes don't appear after saving
❌ Console (F12) shows red errors

---

## 📱 Responsive Design

The system works on different screen sizes:

### Desktop (>1024px):
- Full sidebar visible
- 3 booth cards in grid view
- Spacious layout

### Tablet (768px - 1024px):
- 2 booth cards in grid view
- Sidebar still visible
- Slightly tighter spacing

### Mobile (<768px):
- 1 booth card in grid view
- Sidebar may collapse (needs implementation)
- Stacked layout

---

**Next:** Review `QUICK_REFERENCE.md` for command reference or `INSTALLATION_GUIDE.md` for detailed setup instructions!
