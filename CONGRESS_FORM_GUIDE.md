# Congress Registration Form - User Guide

## Overview

The Congress Registration Form is a comprehensive 4-step process for registering new congress/show participation for Johnson & Johnson. It captures all necessary information about the event, booth requirements, objectives, and budget while automatically preventing double-booking conflicts.

## Form Structure

### Step 1: Client Information

**Purpose**: Identify who is requesting the booth and their department.

**Fields**:
- **Full Name*** (Required)
  - Example: "John Smith"
  - The person responsible for this congress booking
  
- **Email Address*** (Required)
  - Example: "john.smith@jnj.com"
  - Must be a valid email format
  - Used for notifications and correspondence
  
- **Department*** (Required)
  - Dropdown selection from:
    - Marketing
    - Sales
    - Medical Affairs
    - Commercial Operations
    - Corporate Communications
    - R&D
    - Other

**Navigation**: Click "Next" to proceed or "Cancel" to exit

---

### Step 2: Show Information

**Purpose**: Capture details about the congress/show event.

**Fields**:
- **Show/Congress Name*** (Required)
  - Example: "American Society of Clinical Oncology (ASCO) 2025"
  - Full official name of the event
  
- **Location*** (Required)
  - Example: "Chicago, IL"
  - City and state/country
  
- **Venue*** (Required)
  - Example: "McCormick Place"
  - Name of the convention center or venue
  
- **Start Date*** (Required)
  - Date picker format
  - Must be a future date
  
- **End Date*** (Required)
  - Date picker format
  - Must be after start date
  - **Automatic conflict detection**: System checks if these dates overlap with any existing congress bookings
  
- **Booth Number** (Optional)
  - Example: "A-1234"
  - If you already know your assigned booth location

**Validation**:
- ✓ End date must be after start date
- ✓ Dates must not overlap with existing congresses
- ⚠️ If conflict detected: "These dates conflict with an existing congress booking"

**Navigation**: "Back" to return to Step 1, "Next" to proceed

---

### Step 3: Booth Details & Objectives

**Purpose**: Define booth requirements and core objectives.

**Fields**:
- **Booth Size Booked*** (Required)
  - Dropdown selection:
    - 3m x 3m (9 sqm)
    - 6m x 3m (18 sqm)
    - 6m x 6m (36 sqm)
    - 9m x 6m (54 sqm)
    - 12m x 6m (72 sqm)
    - Custom Size
  
- **Brief Description*** (Required)
  - Multi-line text area
  - 100-500 characters recommended
  - Example: "Launch booth for new oncology treatment, featuring interactive patient journey displays and private HCP consultation areas."
  
- **Booth Objectives*** (Required)
  - Multi-line text area
  - What are you trying to achieve?
  - Example: "1) Launch Drug X to oncologists, 2) Educate on new dosing protocol, 3) Generate 200+ qualified leads"
  
- **Target Audience** (Optional)
  - Example: "Oncologists, Primary Care Physicians, Nurse Practitioners"
  - Who are you trying to reach?
  
- **Special Requirements** (Optional)
  - Multi-line text area
  - Any unique needs: power, WiFi, refrigeration, storage, etc.
  - Example: "Require 20amp power for video wall, secure storage for product samples"

**Navigation**: "Back" to return to Step 2, "Next" to proceed

---

### Step 4: Goals & Budget

**Purpose**: Define measurable goals and allocate budget.

**Key Goals*** (Required - Select at least 1):

**Pre-defined Options** (click to select/deselect):
- Product Launch
- Brand Awareness
- Lead Generation
- Customer Education
- Networking
- Competitive Intelligence
- Media Coverage
- Partnership Development

**Custom Goals**:
- Type your own goal and click "Add"
- Example custom goals:
  - "FDA Approval Announcement"
  - "KOL Engagement"
  - "Phase III Results Dissemination"

**Selected Goals Display**:
- All selected goals appear as removable tags
- Click the "×" to remove a goal

**Total Budget*** (Required):
- Dollar amount
- Must be greater than 0
- Example: $50,000
- This is the total allocated budget for this congress

**Summary Section**:
- Auto-populated review of all entered information
- Review before submitting:
  - Show name and location
  - Dates
  - Booth size
  - Budget
  - Selected goals

**Navigation**: "Back" to return to Step 3, "Submit Registration" to complete

---

## Double-Booking Prevention

### How It Works

The system automatically checks for date conflicts when you enter start and end dates in Step 2.

**Conflict Detection Logic**:
```
New Congress: June 14-16, 2025

Existing Congress: June 13-16, 2025
- Start: June 13 (before new end)
- End: June 16 (after new start)
- Result: CONFLICT ❌

The system detects ANY overlap between date ranges.
```

**When Conflict Detected**:
1. Red error message appears below the date fields
2. Message: "These dates conflict with an existing congress booking"
3. Cannot proceed to next step until dates are changed
4. Adjust dates to avoid overlap

**No Conflict**:
1. Dates validated ✓
2. Green checkmark or no error
3. Can proceed to next step

### Examples

#### ✅ Valid (No Conflict)
```
Existing: ASCO 2025
- June 1-4, 2025

Your Selection: ESC 2025
- August 30 - September 2, 2025

Status: ✓ No overlap, approved
```

#### ❌ Invalid (Conflict)
```
Existing: ASCO 2025
- June 1-4, 2025

Your Selection: New Congress
- June 3-6, 2025

Status: ✗ Overlap on June 3-4, conflict detected
```

#### ✅ Valid (Adjacent Dates)
```
Existing: ASCO 2025
- June 1-4, 2025

Your Selection: Next Congress
- June 5-8, 2025

Status: ✓ Adjacent but no overlap, approved
```

---

## Validation Rules Summary

### Required Fields (Cannot Submit Without):
- ✓ Client Name
- ✓ Client Email (valid format)
- ✓ Department
- ✓ Show Name
- ✓ Location
- ✓ Venue
- ✓ Start Date
- ✓ End Date (after start date, no conflicts)
- ✓ Booth Size
- ✓ Brief Description
- ✓ Booth Objectives
- ✓ At least 1 Key Goal
- ✓ Budget > 0

### Optional Fields:
- Booth Number
- Target Audience
- Special Requirements

---

## After Submission

Once you click "Submit Registration":

1. **Form Validation**
   - All required fields checked
   - Date conflicts verified
   - Budget amount validated

2. **Success State**
   - Form closes
   - Success message appears
   - Data logged to system

3. **Next Steps** (in production)
   - Email confirmation sent
   - Booth team notified
   - Approval workflow initiated
   - Budget allocated
   - Planning begins

---

## Best Practices

### Planning Timeline
- **6-12 months before**: Register congress, reserve booth
- **3-6 months before**: Finalize objectives and goals
- **1-3 months before**: Confirm all details and customizations

### Writing Objectives
**Good Examples**:
- "Launch Product X to 500+ oncologists"
- "Generate 200 qualified HCP leads"
- "Demonstrate new device to 100 target accounts"

**Weak Examples**:
- "Show our booth" (too vague)
- "Be at ASCO" (no measurable goal)
- "Networking" (use specific goal button instead)

### Budget Planning
Include in your budget:
- Booth rental/setup
- Graphics and signage
- Technology (screens, tablets)
- Staffing
- Promotional materials
- Hospitality
- Contingency (10-15%)

### Goals Selection
- Select 3-5 primary goals (not all 8)
- Prioritize what matters most
- Add custom goals for unique objectives
- Align goals with overall congress strategy

---

## Troubleshooting

### "These dates conflict with an existing congress booking"
**Solution**: 
1. Check the dates you entered
2. Review existing congress calendar
3. Adjust dates to avoid overlap
4. Contact booth team if dates cannot be changed

### Cannot proceed to next step
**Solution**:
1. Check for red error messages
2. Ensure all required fields (*) are filled
3. Verify date formats are correct
4. Check that email is valid format

### Form won't submit
**Solution**:
1. Complete all 4 steps
2. Review Step 4 summary
3. Ensure at least 1 goal is selected
4. Check budget is greater than 0
5. Verify no validation errors on any step

---

## Tips for Success

1. **Gather Information First**
   - Have show details ready
   - Know your booth size
   - Draft objectives beforehand
   - Get budget approval

2. **Be Specific**
   - Detailed objectives help booth design
   - Clear goals enable success measurement
   - Specific requirements prevent issues

3. **Review Before Submit**
   - Check Step 4 summary
   - Verify all dates are correct
   - Confirm budget amount
   - Review selected goals

4. **Save Information**
   - Keep a copy of your submission
   - Note your registration details
   - Track your booth objectives

---

## Support

If you need help:
- Contact: J&J Events & Marketing Technology Team
- Email: events.support@jnj.com (example)
- Phone: Internal hotline

For technical issues with the form, use the feedback mechanism or contact IT support.
