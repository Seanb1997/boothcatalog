# Video Tutorial Script - J&J Booth Catalog Setup

This script can be used to create a screen recording tutorial or follow along step-by-step.

**Total Duration:** ~15 minutes
**Target Audience:** Non-technical users, Marketing/Events teams

---

## 🎬 Video 1: Installation & First Run (5 minutes)

### Scene 1: Introduction (30 seconds)
**SHOW:** Desktop with folder containing booth-catalog
**SAY:**
"Welcome to the Johnson & Johnson Congress Booth Catalog installation guide. In this video, I'll show you how to set up and run this system on your computer. You'll need about 5 minutes, and some basic familiarity with using a terminal or command prompt."

### Scene 2: Prerequisites Check (45 seconds)
**SHOW:** Terminal window
**TYPE:** `node --version`
**SAY:**
"First, let's verify Node.js is installed. Open your terminal and type 'node --version'. You should see version 18 or higher. If you don't have Node.js, pause this video and download it from nodejs.org."

**SHOW:** Terminal output showing version
```
v18.17.0
```

### Scene 3: Opening the Project (1 minute)
**SHOW:** VS Code opening
**SAY:**
"I'm using VS Code, but any code editor works. Go to File, Open Folder, and select the booth-catalog folder you extracted."

**SHOW:** Folder structure in sidebar
**SAY:**
"You should see folders like 'app', 'components', 'data', and files like package.json."

**SHOW:** Opening integrated terminal
**SAY:**
"Now open a terminal. In VS Code, go to Terminal menu, then New Terminal. The terminal opens at the bottom, already in your project folder."

### Scene 4: Installing Dependencies (2 minutes)
**SHOW:** Terminal
**TYPE:** `npm install`
**SAY:**
"Type 'npm install' and press Enter. This downloads all required packages. It takes 1-3 minutes depending on your internet speed."

**SHOW:** Installation progress
**SAY:**
"You'll see lots of text scrolling by - this is normal. Just wait for it to complete."

**SHOW:** Completion message
```
added 347 packages in 45s
```
**SAY:**
"Perfect! When you see 'added packages', installation is complete. A new node_modules folder appears - this contains all the code libraries we need."

### Scene 5: Starting the Server (45 seconds)
**SHOW:** Terminal
**TYPE:** `npm run dev`
**SAY:**
"Now type 'npm run dev' and press Enter. This starts the development server."

**SHOW:** Server starting
**SAY:**
"Wait for the 'Ready' message. You'll see 'Local: http://localhost:3000' - that's where we'll access the app."

### Scene 6: Opening in Browser (30 seconds)
**SHOW:** Browser opening
**TYPE IN ADDRESS:** `http://localhost:3000`
**SAY:**
"Open your browser and go to localhost:3000. And there it is! The Johnson & Johnson Congress Booth Catalog is now running."

**SHOW:** Homepage with J&J branding
**SAY:**
"Notice the Johnson & Johnson branding in the signature red color. The system is ready to use!"

---

## 🎬 Video 2: Using the Booth Catalog (5 minutes)

### Scene 1: Overview (30 seconds)
**SHOW:** Full homepage
**SAY:**
"Let's explore the booth catalog. On the left is our filter panel, and on the right are the available booths. Currently, we're in grid view showing three sample booths."

**POINT TO:** View toggle buttons
**SAY:**
"You can switch between grid and list views here."

### Scene 2: Browsing Booths (1 minute)
**CLICK:** List view button
**SHOW:** List view layout
**SAY:**
"List view shows more detail at a glance - dimensions, features, and cost all visible."

**CLICK:** Back to grid view
**SAY:**
"Grid view is better for browsing multiple options."

**SCROLL:** Through booth cards
**SAY:**
"Each booth shows an image, name, specifications, status, and estimated cost."

### Scene 3: Using Filters (1 minute 30 seconds)
**SHOW:** Filter sidebar
**SAY:**
"The filter panel lets you narrow down options."

**TYPE:** "modular" in search box
**SHOW:** Results updating
**SAY:**
"Search works across booth names, descriptions, and features. Watch how results update instantly."

**CLEAR:** Search
**CLICK:** Available status checkbox
**SHOW:** Results filtering
**SAY:**
"You can filter by status. Currently, two booths are available and one is in use."

**CLICK:** Large tag
**SHOW:** Only large booths
**SAY:**
"Tags let you filter by size and category."

**CLICK:** Clear all filters
**SAY:**
"And you can reset everything with one click."

### Scene 4: Viewing Booth Details (1 minute)
**CLICK:** Modular Summit Pro booth
**SHOW:** Detail modal opening
**SAY:**
"Clicking any booth opens detailed information. The Overview tab shows specifications, features, and image gallery."

**CLICK:** Usage History tab
**SHOW:** Congress history
**SAY:**
"Usage History shows where this booth was used before - which congresses, what it cost, how it performed, and any customizations made."

**CLICK:** Components tab
**SHOW:** Component list
**SAY:**
"The Components tab lists every physical piece - wall panels, screens, furniture - along with their condition."

### Scene 5: Requesting a Booth (1 minute)
**CLICK:** Request This Booth button
**SHOW:** Order form
**SAY:**
"When you find the right booth, click 'Request This Booth'. This opens the order form."

**SELECT:** Congress from dropdown
**SHOW:** Dates auto-filling
**SAY:**
"Select the congress you're attending. Notice how the dates automatically fill in."

**TYPE:** Name in Requested By field
**TYPE:** Custom requests
**SHOW:** Cost summary
**SAY:**
"Add your name, any customization needs, and review the estimated cost."

**CLICK:** Submit
**SHOW:** Success message
**SAY:**
"Submit, and you're done! A success message confirms your request."

---

## 🎬 Video 3: Congress Registration Form (5 minutes)

### Scene 1: Introduction (30 seconds)
**SHOW:** Congress form button location
**SAY:**
"The Congress Registration Form is a comprehensive tool for planning your booth participation. It's a 4-step process that captures everything from client details to budget. Let me walk you through it."

### Scene 2: Step 1 - Client Information (1 minute)
**SHOW:** Step 1 screen
**SAY:**
"Step 1 collects your contact information. Notice the progress bar at the top showing we're 25% through."

**TYPE:** Name: "Sarah Johnson"
**TYPE:** Email: "sarah.johnson@jnj.com"
**SELECT:** Department: "Marketing"
**SAY:**
"Fill in your name, J&J email address, and department. Red asterisks mark required fields."

**CLICK:** Next
**SHOW:** Validation if incomplete
**SAY:**
"The Next button only works when all required fields are complete."

### Scene 3: Step 2 - Show Information (1 minute 30 seconds)
**SHOW:** Step 2 screen
**SAY:**
"Step 2 is where you define the congress details. This is also where double-booking prevention happens."

**TYPE:** Show name: "ASCO 2025"
**TYPE:** Location: "Chicago, IL"
**TYPE:** Venue: "McCormick Place"
**SAY:**
"Enter the full congress name, city, and venue."

**SELECT:** Start date: June 1, 2025
**SELECT:** End date: June 4, 2025
**SHOW:** Dates validating
**SAY:**
"Here's the important part - as you enter dates, the system checks for conflicts."

**CHANGE:** Dates to June 14-16
**SHOW:** Error message appearing
**SAY:**
"See the red error? These dates overlap with an existing congress. The system prevents double-booking automatically."

**CHANGE:** Back to June 1-4
**SHOW:** Error clearing
**SAY:**
"When we use non-conflicting dates, the error clears and we can proceed."

### Scene 4: Step 3 - Booth Details (1 minute)
**SHOW:** Step 3 screen
**SAY:**
"Step 3 focuses on booth requirements and objectives."

**SELECT:** Booth size: "6m x 6m (36 sqm)"
**TYPE:** Brief description: "Product launch booth for new oncology treatment"
**TYPE:** Objectives: "Launch Drug X to 500+ oncologists, generate 200 qualified leads"
**TYPE:** Target audience: "Oncologists, Oncology nurses"
**SAY:**
"Select your booth size, describe your concept, outline specific objectives, and identify your target audience. Be specific - these details help with booth design."

**TYPE:** Special requirements: "20amp power for video wall"
**SAY:**
"Add any special needs in the requirements field."

### Scene 5: Step 4 - Goals & Budget (1 minute)
**SHOW:** Step 4 screen
**SAY:**
"The final step covers goals and budget."

**CLICK:** Product Launch button
**CLICK:** Lead Generation button
**SHOW:** Goals being selected
**SAY:**
"Click to select your key goals. You can choose multiple."

**TYPE:** Custom goal: "FDA Approval Announcement"
**CLICK:** Add
**SHOW:** Custom goal added
**SAY:**
"Or add custom goals specific to your needs."

**TYPE:** Budget: 50000
**SHOW:** Summary populating
**SAY:**
"Enter your total budget. The summary at bottom shows everything you've entered - review it before submitting."

**CLICK:** Submit Registration
**SHOW:** Success state
**SAY:**
"Submit, and your congress is registered! All the information is captured for planning."

---

## 🎬 Video 4: Making Changes (Bonus - 3 minutes)

### Scene 1: Understanding the Code (30 seconds)
**SHOW:** VS Code with folder structure
**SAY:**
"Let's make a simple customization. The components folder contains all the UI pieces. The data folder has our sample information."

### Scene 2: Adding a Booth (1 minute)
**OPEN:** data/mockData.ts
**SCROLL TO:** mockBooths array
**SAY:**
"Here are our three sample booths. Let's add a fourth."

**COPY:** Existing booth object
**PASTE:** Below
**EDIT:** ID, name, description
**SAY:**
"Copy an existing booth structure, change the ID and details. Keep the same structure - just update the values."

**SAVE:** File
**SHOW:** Browser auto-reloading
**SHOW:** New booth appearing
**SAY:**
"Save, and Next.js automatically reloads. Our new booth appears immediately!"

### Scene 3: Changing Colors (1 minute)
**OPEN:** tailwind.config.js
**SHOW:** jnj colors section
**SAY:**
"The J&J brand colors are defined here."

**CHANGE:** red: '#cc0000' to '#0066cc' (hypothetically)
**SAVE:** File
**SHOW:** Colors updating in browser
**SAY:**
"Change the color code, save, and watch the entire theme update. Of course, we'll keep it J&J red!"

**UNDO:** Change back to red
**SAY:**
"I'll change it back to the official J&J red."

### Scene 4: Stopping the Server (30 seconds)
**SHOW:** Terminal
**SAY:**
"When you're done working, go to your terminal and press Control-C to stop the server."

**PRESS:** Ctrl+C
**SHOW:** Server stopping
**SAY:**
"The server stops, and localhost:3000 is no longer accessible."

**SAY:**
"To start again, just run 'npm run dev'. That's it!"

---

## 📝 Closing (30 seconds)

**SHOW:** Final running application
**SAY:**
"You now have a fully functional Johnson & Johnson Congress Booth Catalog system. You can browse booths, track usage history, prevent double-bookings, and manage congress registrations - all with the official J&J branding. For detailed documentation, check the README files included in your project. Thanks for watching!"

---

## 🎥 Recording Tips

### Setup:
- **Resolution:** 1920x1080 minimum
- **Browser Zoom:** 100% (no zoom)
- **Window Size:** Maximize or large enough to see clearly
- **Font Size:** Increase terminal font for visibility
- **Cursor:** Use software to highlight mouse clicks

### Pacing:
- **Speak clearly** and not too fast
- **Pause 2-3 seconds** after clicks for viewer comprehension
- **Show results** of every action
- **Repeat important points**

### Common Mistakes to Avoid:
- ❌ Going too fast
- ❌ Not showing terminal output fully
- ❌ Skipping error states
- ❌ Not explaining what you're clicking
- ❌ Assuming knowledge

### Production Quality:
- ✅ Clear audio (use good microphone)
- ✅ Stable screen recording (no lag)
- ✅ Consistent lighting
- ✅ Edit out mistakes
- ✅ Add captions/subtitles

---

## 📹 Recommended Software

### Screen Recording:
- **Windows:** OBS Studio (free), Camtasia
- **Mac:** QuickTime, ScreenFlow, Camtasia
- **Cross-platform:** OBS Studio, Loom

### Video Editing:
- **Beginner:** iMovie (Mac), Windows Video Editor
- **Advanced:** DaVinci Resolve (free), Premiere Pro

### Audio:
- Use a quality USB microphone
- Record in quiet environment
- Use Audacity for cleanup if needed

---

**Use this script to create your own tutorial video or follow along for hands-on learning!**
