# Johnson & Johnson - Congress Booth Catalog System

A comprehensive booth inventory and ordering system for Johnson & Johnson pharmaceutical congress exhibitions. This system helps track reusable booth structures, manage congress registrations, and prevent double-bookings.

## 🎯 Key Features

### Visual Catalog
- **Johnson & Johnson Branded Interface** - Official J&J red (#cc0000) throughout
- **Grid and List Views** - Toggle between different viewing modes
- **Rich Booth Information** - Detailed specs, images, components, and features
- **Status Indicators** - Real-time availability (Available, Reserved, In-Use, Maintenance)

### Congress Registration Form ⭐ NEW
- **4-Step Registration Process**
  - Step 1: Client Information (Name, Email, Department)
  - Step 2: Show Information (Name, Location, Venue, Dates)
  - Step 3: Booth Details & Objectives (Size, Description, Objectives, Target Audience)
  - Step 4: Goals & Budget (Key Goals, Total Budget, Summary)
- **Comprehensive Data Collection**
  - Client contact details
  - Show/congress details
  - Booth size booked
  - Booth objectives and brief description
  - Key goals (selectable + custom)
  - Budget tracking
  - Target audience
  - Special requirements

### Double-Booking Prevention ⭐ NEW
- **Automatic Date Conflict Detection** - System checks for overlapping congress dates
- **Real-time Validation** - Alerts users if selected dates conflict with existing bookings
- **Visual Feedback** - Clear error messages when conflicts are detected
- **Prevents Overbooking** - Ensures resources aren't committed to multiple events simultaneously

### Advanced Search & Filtering
- **Text Search** - Search across booth names, descriptions, features, and tags
- **Multi-criteria Filters**:
  - Status (available, reserved, in-use, maintenance)
  - Dimensions (width and depth ranges)
  - Maximum cost
  - Features and tags
- **Real-time Results** - Instant filtering as you adjust criteria

### Usage History Tracking
- **Congress Timeline** - See where and when each booth was used
- **Performance Metrics** - Attendee counts, engagement notes
- **Cost Analysis** - Track setup costs across different events
- **Customization Records** - Document booth modifications for each congress

### Order/Booking System
- **Simple Request Flow** - Easy booth reservation for upcoming congresses
- **Congress Integration** - Auto-fill dates based on selected event
- **Customization Notes** - Specify branding and modification needs
- **Cost Estimation** - Transparent pricing with customization considerations

## 💼 Johnson & Johnson Branding

The system features official J&J branding:
- **Primary Color**: J&J Red (#cc0000)
- **Accent Colors**: Red variants for different UI states
- **Typography**: Professional, clean sans-serif
- **Logo Display**: "Johnson & Johnson" prominently in header
- **Consistent Design**: Red throughout buttons, highlights, and interactive elements

## 💰 Business Value

This system helps Johnson & Johnson:
- **Reduce Costs** - Maximize ROI on existing booth inventory (40-60% savings)
- **Prevent Conflicts** - Automated double-booking prevention
- **Streamline Planning** - Comprehensive congress registration in one place
- **Track Objectives** - Document and measure booth goals and performance
- **Budget Management** - Clear budget tracking per congress
- **Data-Driven Decisions** - Historical performance data for booth selection
- **Standardization** - Maintain consistent brand presence across events
- **Sustainability** - Reduce waste by reusing structures

## 🏗️ Technical Architecture

### Tech Stack
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with J&J custom colors
- **State Management**: React Hooks (useState, useMemo)

### New Components
- **CongressForm** - Multi-step congress registration form
  - Client information capture
  - Show details with date validation
  - Booth objectives and goals
  - Budget tracking
  - Double-booking prevention

### Core Data Models

#### CongressFormData (NEW)
```typescript
{
  // Client Information
  clientName: string;
  clientEmail: string;
  clientDepartment: string;
  
  // Show Information
  showName: string;
  showLocation: string;
  showVenue: string;
  startDate: string;
  endDate: string;
  
  // Booth Details
  boothSizeBooked: string;
  boothNumber?: string;
  
  // Objectives & Goals
  boothObjectives: string;
  keyGoals: string[];
  targetAudience: string;
  
  // Budget
  totalBudget: number;
  
  // Additional Information
  briefDescription: string;
  specialRequirements?: string;
}
```

#### Booth
- Specifications (dimensions, capacity)
- Components inventory
- Features and tags
- Images and gallery
- Status and availability
- Cost estimates

#### Congress
- Event information (name, location, venue, dates)
- Booth usage records
- Total costs
- Performance notes
- **Date conflict checking** (NEW)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project directory**:
```bash
cd booth-catalog
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📋 Current Features (MVP)

✅ Johnson & Johnson branded interface
✅ Visual booth catalog with grid/list views
✅ Advanced search and multi-criteria filtering
✅ Detailed booth information pages
✅ Component inventory tracking
✅ Usage history with congress timeline
✅ Performance notes and metrics
✅ Multi-step congress registration form
✅ **Double-booking prevention with date conflict detection**
✅ Comprehensive objectives and goals tracking
✅ Budget management per congress
✅ Order request system
✅ Cost estimation
✅ Status management
✅ Responsive design

## 🔮 Future Enhancements

### Phase 2 - Backend Integration
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] REST API or GraphQL
- [ ] User authentication and authorization
- [ ] Real image upload and storage
- [ ] Approval workflow system
- [ ] Email notifications for conflicts

### Phase 3 - Advanced Features
- [ ] Calendar view with visual conflict indicators
- [ ] Advanced conflict resolution suggestions
- [ ] Cost comparison reports across congresses
- [ ] ROI analytics dashboard
- [ ] Automated reminders for upcoming congresses
- [ ] PDF export for booth specs and congress plans
- [ ] 3D booth previews
- [ ] Inventory management for components
- [ ] Maintenance scheduling

### Phase 4 - Enterprise Features
- [ ] Multi-brand support (J&J family of companies)
- [ ] Role-based access control (RBAC)
- [ ] Integration with Cvent or other event management systems
- [ ] Vendor management
- [ ] Contract tracking
- [ ] Budget management with approvals
- [ ] Mobile app (React Native)
- [ ] Integration with J&J internal systems

## 🎨 Customization

### Branding
All J&J red colors are defined in `tailwind.config.js`:
```javascript
jnj: {
  red: '#cc0000',       // Primary J&J red
  'red-dark': '#991f1f', // Darker variant
  'red-light': '#dc2626' // Lighter variant
}
```

### Congress Form Configuration
Edit `components/CongressForm.tsx` to customize:
- Department options
- Booth size options
- Goal options
- Form validation rules

## 🐛 Known Limitations (MVP)

- Mock data only (no real database)
- Images are placeholder icons
- No actual email notifications
- Orders are console-logged only
- Date conflicts checked against mock data only

## 📝 Usage Examples

### Registering a New Congress

1. User fills out 4-step form:
   - Client details (name, email, department)
   - Show information with dates
   - Booth objectives and description
   - Goals and budget

2. System validates:
   - Required fields completed
   - End date after start date
   - **No date conflicts with existing congresses**

3. Form submitted and data captured

### Preventing Double-Booking

The system automatically checks when you enter dates:
```
User enters: Start: 2025-06-01, End: 2025-06-04

System checks existing congresses:
- ASCO 2024: June 1-4, 2024 ✓ Different year, OK
- ESC 2024: Aug 30-Sep 2, 2024 ✓ No overlap, OK
- ADA 2025: June 13-16, 2025 ✓ No overlap, OK

Result: Dates approved ✓
```

If conflict detected:
```
User enters: Start: 2025-06-14, End: 2025-06-16

System checks:
- ADA 2025: June 13-16, 2025 ✗ OVERLAP DETECTED

Result: Error shown - "These dates conflict with an existing congress booking"
```

## 🤝 Contributing

To extend this system:

1. Add database models matching the TypeScript types
2. Create API routes in `app/api/`
3. Replace mock data with API calls
4. Implement authentication
5. Add file upload for images
6. Create admin dashboard
7. Integrate with J&J systems

## 📄 License

This is a Johnson & Johnson internal system.

## 💡 Support

For questions or feature requests, contact the J&J Events & Marketing Technology team.

---

**Built for Johnson & Johnson Congress Management**
