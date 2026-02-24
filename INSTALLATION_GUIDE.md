# Implementation Instructions - Johnson & Johnson Booth Catalog

## 📋 Quick Start Guide

Follow these steps to get the J&J Congress Booth Catalog running on your computer.

---

## Prerequisites

Before you begin, ensure you have:

1. **Node.js** (version 18 or higher)
   - Check if installed: Open terminal/command prompt and type `node --version`
   - If not installed: Download from https://nodejs.org/
   - Choose the "LTS" (Long Term Support) version

2. **Text Editor/IDE**
   - VS Code (recommended): https://code.visualstudio.com/
   - Or any code editor you prefer

3. **Terminal/Command Prompt**
   - Mac: Use Terminal app
   - Windows: Use Command Prompt or PowerShell
   - Linux: Use your preferred terminal

---

## Step-by-Step Installation

### Step 1: Extract the Project Files

1. Locate the `booth-catalog` folder you downloaded
2. Extract it to a location on your computer
   - **Recommended locations:**
     - Mac: `/Users/[your-name]/Projects/booth-catalog`
     - Windows: `C:\Users\[your-name]\Projects\booth-catalog`
     - Linux: `/home/[your-name]/projects/booth-catalog`

3. Remember this location - you'll need it!

### Step 2: Open Terminal in Project Directory

**Option A - Using VS Code (Easiest):**
1. Open VS Code
2. Click "File" → "Open Folder"
3. Navigate to and select the `booth-catalog` folder
4. Once opened, click "Terminal" → "New Terminal" in the top menu
5. You should see a terminal at the bottom of VS Code

**Option B - Using Terminal/Command Prompt:**

**On Mac:**
```bash
cd /Users/[your-name]/Projects/booth-catalog
```

**On Windows:**
```bash
cd C:\Users\[your-name]\Projects\booth-catalog
```

**On Linux:**
```bash
cd /home/[your-name]/projects/booth-catalog
```

**Verify you're in the right place:**
```bash
ls
# or on Windows:
dir
```

You should see files like: `package.json`, `next.config.js`, `README.md`, etc.

### Step 3: Install Dependencies

This downloads all the required packages (React, Next.js, Tailwind, etc.)

```bash
npm install
```

**What you'll see:**
- Lots of text scrolling
- Progress bars
- "added XXX packages" at the end
- A `node_modules` folder will be created (this is normal!)

**⏱️ Expected time:** 1-3 minutes depending on internet speed

**If you see errors:**
- Make sure you're connected to the internet
- Try: `npm cache clean --force` then `npm install` again
- Check that Node.js is installed: `node --version`

### Step 4: Start the Development Server

```bash
npm run dev
```

**What you'll see:**
```
> booth-catalog@0.1.0 dev
> next dev

   ▲ Next.js 14.2.0
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.x:3000

 ✓ Ready in 2.3s
```

**This means it's working!** ✅

### Step 5: Open in Your Browser

1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Go to: **http://localhost:3000**
3. You should see the Johnson & Johnson Booth Catalog!

**If the page doesn't load:**
- Make sure the terminal is still running (you should see "Ready" message)
- Try: http://127.0.0.1:3000 instead
- Check that nothing else is using port 3000
- Press `Ctrl+C` to stop, then run `npm run dev` again

---

## 🎯 Testing the System

### Test 1: Browse Booths

1. You should see 3 sample booths on the main page
2. Try switching between Grid and List views (top right buttons)
3. Click on a booth card to see detailed information
4. Browse through the tabs: Overview, Usage History, Components

✅ **Success**: You can navigate between booths and see details

### Test 2: Search and Filter

1. In the left sidebar, try searching for "modular"
2. Filter by status (check/uncheck boxes)
3. Adjust dimension sliders
4. Click tags to filter
5. Watch results update in real-time

✅ **Success**: Filtering works and results change

### Test 3: Request a Booth

1. Click on any booth card
2. Click "Request This Booth" button
3. Fill out the order form
4. Submit the request
5. You should see a success message

✅ **Success**: Form submits successfully

### Test 4: Congress Registration Form (NEW)

To test the new congress registration form, you'll need to integrate it. For now, it's available as a component. See "Next Steps" below for integration instructions.

### Test 5: Double-Booking Prevention

1. Open `data/mockData.ts` in your editor
2. Note the dates of existing congresses
3. Try to create a booth request with overlapping dates
4. System should show error: "These dates conflict with an existing congress booking"

✅ **Success**: Conflict detection working

---

## 📁 Understanding the Project Structure

```
booth-catalog/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Main layout (J&J branding here)
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── BoothCatalog.tsx        # Main catalog page
│   ├── BoothCard.tsx           # Individual booth cards
│   ├── BoothDetail.tsx         # Booth detail modal
│   ├── FilterPanel.tsx         # Search/filter sidebar
│   ├── OrderForm.tsx           # Booth ordering form
│   └── CongressForm.tsx        # 🆕 Congress registration form
│
├── types/                       # TypeScript definitions
│   └── index.ts                # All data types
│
├── data/                        # Mock data
│   └── mockData.ts             # Sample booths and congresses
│
├── node_modules/                # Installed packages (don't edit!)
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS (J&J colors here)
├── next.config.js              # Next.js configuration
└── README_UPDATED.md           # Documentation
```

---

## 🔧 Common Issues and Solutions

### Issue: "npm: command not found"
**Solution:** Node.js is not installed or not in PATH
- Reinstall Node.js from https://nodejs.org/
- Restart your terminal after installation

### Issue: "Port 3000 is already in use"
**Solution:** Something else is using port 3000
```bash
# Stop the current process (Ctrl+C)
# Then run on a different port:
npm run dev -- -p 3001
# Now open http://localhost:3001
```

### Issue: "Module not found" errors
**Solution:** Dependencies not installed correctly
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# On Windows: rmdir /s node_modules & del package-lock.json

# Reinstall
npm install
```

### Issue: Blank white page
**Solution:** 
1. Check browser console (F12) for errors
2. Check terminal for error messages
3. Make sure you're at http://localhost:3000 exactly
4. Try hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)

### Issue: Changes not showing up
**Solution:**
1. Save your file (Ctrl+S / Cmd+S)
2. Next.js should auto-reload (check terminal for "compiled successfully")
3. Refresh browser if needed
4. If still not working, stop server (Ctrl+C) and restart (`npm run dev`)

---

## 🎨 Customizing the System

### Changing Mock Data

**Location:** `data/mockData.ts`

**To add a new booth:**
```typescript
{
  id: 'booth-004',
  name: 'Your New Booth Name',
  description: 'Description of the booth...',
  dimensions: {
    width: 6,
    depth: 6,
    height: 3,
    unit: 'meters'
  },
  capacity: 20,
  features: ['LED Display', 'Meeting Room'],
  components: [
    { 
      id: 'c1', 
      name: 'Wall Panels', 
      type: 'wall', 
      quantity: 10, 
      condition: 'excellent' 
    }
  ],
  images: [
    { 
      id: 'img1', 
      url: '/booths/booth-004-main.jpg', 
      isPrimary: true 
    }
  ],
  status: 'available',
  estimatedSetupTime: 8,
  estimatedCost: 15000,
  tags: ['medium', 'versatile'],
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
}
```

**To add a new congress:**
```typescript
{
  id: 'congress-004',
  name: 'Your Congress Name 2025',
  location: 'New York, NY',
  venue: 'Jacob Javits Center',
  startDate: new Date('2025-09-15'),
  endDate: new Date('2025-09-18'),
  totalCost: 0,
  boothsUsed: []
}
```

### Changing J&J Colors

**Location:** `tailwind.config.js`

```javascript
jnj: {
  red: '#cc0000',        // Change this to your preferred red
  'red-dark': '#991f1f',
  'red-light': '#dc2626',
}
```

After changing, restart the dev server:
```bash
# Press Ctrl+C to stop
npm run dev
```

---

## 🚀 Integrating the Congress Registration Form

The CongressForm component is ready but needs to be integrated into the main app flow.

### Option 1: Add a "Register New Congress" Button

**Edit:** `components/BoothCatalog.tsx`

**Add button in header:**
```typescript
<div className="flex gap-2">
  <button
    onClick={() => setShowCongressForm(true)}
    className="px-4 py-2 bg-white text-red-700 rounded-md font-medium"
  >
    + Register New Congress
  </button>
  <button onClick={() => setViewMode('grid')}>Grid</button>
  <button onClick={() => setViewMode('list')}>List</button>
</div>
```

**Add state:**
```typescript
const [showCongressForm, setShowCongressForm] = useState(false);
```

**Add CongressForm import:**
```typescript
import CongressForm from './CongressForm';
```

**Add form rendering:**
```typescript
{showCongressForm && (
  <CongressForm
    onClose={() => setShowCongressForm(false)}
    onSubmit={(data) => {
      console.log('Congress registered:', data);
      setShowCongressForm(false);
      // Show success message
    }}
    existingCongresses={mockCongresses}
  />
)}
```

### Option 2: Separate Page for Congress Management

Create a new page at `app/congresses/page.tsx` - see detailed instructions in IMPLEMENTATION.md

---

## 📊 Viewing the Data

All data is currently stored in memory (mock data). To see what's being captured:

### Open Browser Console
1. Press F12 in your browser
2. Click "Console" tab
3. Submit a form or request a booth
4. You'll see the data logged in the console

**Example console output:**
```javascript
Order submitted: {
  id: "order-1234567890",
  boothId: "booth-001",
  congressId: "congress-003",
  requestedBy: "John Smith - Marketing Director",
  ...
}
```

---

## 🔄 Making Changes and Seeing Updates

Next.js has **Fast Refresh** - your changes appear automatically!

1. Open any file in `components/` or `app/`
2. Make a change (e.g., change text, colors)
3. Save the file (Ctrl+S / Cmd+S)
4. Browser automatically updates (usually within 1-2 seconds)

**Example:** Try changing the header text:

**File:** `components/BoothCatalog.tsx`
```typescript
<h1 className="text-2xl font-bold text-white">
  Congress Booth Catalog  // Change this text
</h1>
```

Save → Browser updates automatically! ✨

---

## 🛑 Stopping the Development Server

When you're done working:

1. Go to your terminal
2. Press `Ctrl+C` (or `Cmd+C` on Mac)
3. You'll see the process stop
4. The website at localhost:3000 will no longer be accessible

To start again:
```bash
npm run dev
```

---

## 📦 Building for Production

When ready to deploy to a real server:

```bash
# Create optimized production build
npm run build

# This creates a .next folder with optimized files
# Takes 30-60 seconds

# Test the production build locally
npm start

# Open http://localhost:3000
```

---

## 🎓 Learning More

### Understanding the Code

**React Basics:**
- Components are in `components/` folder
- Each component is a reusable piece of UI
- Props pass data between components
- State manages data that changes

**Next.js Basics:**
- `app/` folder defines pages and layouts
- File-based routing (each folder = page)
- Server and client components

**Tailwind CSS:**
- Utility classes in className (e.g., `bg-red-700`)
- Responsive design with `md:` and `lg:` prefixes
- Custom colors in `tailwind.config.js`

### Helpful Resources

- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

## ✅ Success Checklist

After following these instructions, you should be able to:

- [ ] Run `npm install` successfully
- [ ] Start the dev server with `npm run dev`
- [ ] View the site at http://localhost:3000
- [ ] See Johnson & Johnson branding (red colors)
- [ ] Browse 3 sample booths
- [ ] Filter and search booths
- [ ] View booth details in modal
- [ ] Submit a booth request
- [ ] See date conflict detection working
- [ ] Make changes to code and see them update
- [ ] Stop the server with Ctrl+C

---

## 🆘 Getting Help

If you're stuck:

1. **Check the error message** in terminal or browser console (F12)
2. **Search the error** on Google/Stack Overflow
3. **Review this guide** - the solution might be in "Common Issues"
4. **Check the README files** for more information
5. **Contact support** - your J&J IT team or development contact

---

## 🎯 Next Steps

Once everything is running:

1. **Customize the mock data** with your real booth inventory
2. **Integrate the Congress form** into the main navigation
3. **Test thoroughly** with your team
4. **Plan backend integration** (database, API)
5. **Deploy to production** (Vercel, AWS, Azure, etc.)

See `IMPLEMENTATION.md` for detailed production deployment instructions.

---

**Congratulations!** 🎉 You now have a working Johnson & Johnson Congress Booth Catalog system!
