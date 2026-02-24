# Quick Reference Guide - J&J Booth Catalog

## 🚀 Essential Commands

### Starting the Application
```bash
# Navigate to project folder
cd booth-catalog

# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser to:
http://localhost:3000
```

### Stopping the Application
```bash
# In terminal where server is running:
Ctrl+C  (or Cmd+C on Mac)
```

### Building for Production
```bash
# Create optimized build
npm run build

# Run production server
npm start
```

---

## 📂 Key Files to Edit

| File | What It Controls | When to Edit |
|------|------------------|--------------|
| `data/mockData.ts` | Sample booths and congresses | Add your real data |
| `tailwind.config.js` | Colors and styling | Change J&J brand colors |
| `components/BoothCatalog.tsx` | Main page layout | Modify catalog view |
| `components/CongressForm.tsx` | Registration form | Adjust form fields |
| `app/layout.tsx` | Site-wide settings | Change title/metadata |

---

## 🎨 Common Customizations

### Change J&J Red Color
**File:** `tailwind.config.js`
```javascript
jnj: {
  red: '#YOUR_COLOR_HERE',
}
```

### Add a New Booth
**File:** `data/mockData.ts`
```typescript
// Add to mockBooths array:
{
  id: 'booth-new',
  name: 'New Booth Name',
  // ... copy structure from existing booths
}
```

### Add a New Congress
**File:** `data/mockData.ts`
```typescript
// Add to mockCongresses array:
{
  id: 'congress-new',
  name: 'New Congress 2025',
  location: 'City, State',
  // ... copy structure from existing congresses
}
```

### Modify Form Fields
**File:** `components/CongressForm.tsx`
- Search for `departmentOptions` to change department list
- Search for `boothSizeOptions` to change booth sizes
- Search for `goalOptions` to change selectable goals

---

## 🔍 Where Things Are

### Visual Elements
- **Header/Branding:** `components/BoothCatalog.tsx` (line ~80)
- **Colors:** `tailwind.config.js`
- **Booth Cards:** `components/BoothCard.tsx`
- **Filter Sidebar:** `components/FilterPanel.tsx`

### Business Logic
- **Search/Filter Logic:** `components/BoothCatalog.tsx` (useMemo hook)
- **Date Conflict Check:** `components/CongressForm.tsx` (validateStep function)
- **Form Validation:** `components/OrderForm.tsx` and `CongressForm.tsx`

### Data
- **Sample Booths:** `data/mockData.ts` (mockBooths)
- **Sample Congresses:** `data/mockData.ts` (mockCongresses)
- **Type Definitions:** `types/index.ts`

---

## 🐛 Quick Troubleshooting

### Problem: Site Won't Load
```bash
# Check if server is running
# You should see "Ready" in terminal

# If not running:
npm run dev

# If port 3000 is busy:
npm run dev -- -p 3001
# Then use: http://localhost:3001
```

### Problem: Changes Not Appearing
```bash
# 1. Make sure file is saved (Ctrl+S)
# 2. Check terminal for compilation errors
# 3. Hard refresh browser: Ctrl+Shift+R
# 4. If still not working, restart:
Ctrl+C
npm run dev
```

### Problem: "Module not found" Error
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Problem: TypeScript Errors
```bash
# Check for syntax errors in your edits
# Look for:
# - Missing commas
# - Unclosed brackets { }
# - Mismatched quotes " '
# - Wrong property names
```

---

## 📊 Testing Checklist

### Daily Testing
- [ ] Server starts: `npm run dev`
- [ ] Site loads at localhost:3000
- [ ] Can browse booths
- [ ] Search works
- [ ] Filters update results
- [ ] Booth details open

### Form Testing
- [ ] Booth request form opens
- [ ] All fields validate correctly
- [ ] Can submit successfully
- [ ] Success message appears

### Congress Form Testing
- [ ] Form progresses through 4 steps
- [ ] Date conflict detection works
- [ ] Required fields enforce validation
- [ ] Goals can be selected/deselected
- [ ] Submit completes successfully

---

## 🔐 Important Notes

### Do NOT Edit:
- `node_modules/` folder - auto-generated
- `.next/` folder - build output
- `package-lock.json` - unless you know what you're doing

### Safe to Edit:
- Anything in `components/`
- Anything in `data/`
- `tailwind.config.js`
- `app/` files

### Version Control (Git):
If using Git, add to `.gitignore`:
```
node_modules/
.next/
.env.local
```

---

## 📱 Browser DevTools

### Open Console (to see errors/logs)
- **Windows/Linux:** F12 or Ctrl+Shift+I
- **Mac:** Cmd+Option+I
- Click "Console" tab

### See Network Requests
- Open DevTools (F12)
- Click "Network" tab
- Reload page
- See all files being loaded

### Inspect Elements
- Right-click any element
- Click "Inspect"
- See HTML/CSS for that element

---

## 🎯 Performance Tips

### Fast Reload
- Save files frequently
- Next.js auto-reloads in 1-2 seconds
- Check terminal for "compiled successfully"

### Clear Cache
```bash
# If things seem broken after updates:
rm -rf .next
npm run dev
```

### Production Build
```bash
# Much faster than dev mode:
npm run build
npm start
```

---

## 📚 File Extensions Explained

| Extension | What It Is | Example |
|-----------|------------|---------|
| `.tsx` | TypeScript + React | Components |
| `.ts` | TypeScript | Type definitions, utilities |
| `.css` | Stylesheet | Global styles |
| `.js` | JavaScript | Config files |
| `.json` | Data format | package.json |
| `.md` | Markdown | Documentation |

---

## 🔄 Common Workflows

### Adding a New Feature
1. Create new component in `components/`
2. Import it where needed
3. Add to UI
4. Test in browser
5. Commit changes

### Fixing a Bug
1. Identify the issue (check console)
2. Find the relevant file
3. Make the fix
4. Save and test
5. Verify fix works

### Updating Data
1. Open `data/mockData.ts`
2. Find the array to update
3. Add/edit/remove entries
4. Save file
5. Check browser (auto-updates)

---

## 🎓 Learning Path

### Beginner
1. Run the app successfully ✓
2. Browse and understand what it does ✓
3. Make small changes to text
4. Add a new booth to mock data
5. Change a color in tailwind.config.js

### Intermediate
1. Modify form fields
2. Add custom validation
3. Create a new component
4. Understand the data flow
5. Customize the UI layout

### Advanced
1. Add database integration
2. Create API endpoints
3. Add authentication
4. Deploy to production
5. Add analytics/monitoring

---

## 💡 Pro Tips

1. **Keep Terminal Visible:** Always see errors immediately
2. **Use Browser Console:** Check for JavaScript errors
3. **Save Often:** Fast Refresh only works on saved files
4. **Test After Changes:** Don't make multiple changes before testing
5. **Read Error Messages:** They usually tell you exactly what's wrong
6. **Git Commit Frequently:** Save your progress
7. **Comment Your Code:** Future you will thank you

---

## 📞 Support Resources

### Documentation
- This folder: `INSTALLATION_GUIDE.md` (step-by-step setup)
- This folder: `README_UPDATED.md` (features overview)
- This folder: `CONGRESS_FORM_GUIDE.md` (form usage)
- This folder: `IMPLEMENTATION.md` (production deployment)

### Online Resources
- Next.js: https://nextjs.org/docs
- React: https://react.dev/learn
- Tailwind: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

### When Stuck
1. Check error message
2. Search error on Google
3. Check documentation
4. Ask your development team
5. Review code examples in components

---

**Keep this guide handy for quick reference!** 📌
