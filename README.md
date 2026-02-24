# Pharma Booth Catalog System

A comprehensive booth inventory and ordering system for pharmaceutical congress exhibitions. This MVP helps pharmaceutical companies catalog their reusable booth structures, track historical usage, and streamline the ordering process for upcoming events.

## 🎯 Key Features

### Visual Catalog
- **Grid and List Views** - Toggle between different viewing modes
- **Rich Booth Information** - Detailed specs, images, components, and features
- **Status Indicators** - Real-time availability status (Available, Reserved, In-Use, Maintenance)

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

## 💰 Business Value

This system helps pharmaceutical companies:
- **Reduce Costs** - Maximize ROI on existing booth inventory
- **Save Time** - Eliminate redundant booth design for each congress
- **Data-Driven Decisions** - Track performance history to optimize booth selection
- **Standardization** - Maintain consistent brand presence across events
- **Sustainability** - Reduce waste by reusing structures

## 🏗️ Technical Architecture

### Tech Stack
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useMemo)

### Project Structure
```
booth-catalog/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main application page
│   └── globals.css          # Global styles & Tailwind
├── components/              # React components
│   ├── BoothCatalog.tsx    # Main catalog with filtering
│   ├── BoothCard.tsx       # Individual booth cards
│   ├── BoothDetail.tsx     # Detailed booth view modal
│   ├── FilterPanel.tsx     # Search and filter sidebar
│   └── OrderForm.tsx       # Booth ordering form
├── types/                   # TypeScript type definitions
│   └── index.ts            # Core data types
├── data/                    # Mock data
│   └── mockData.ts         # Sample booths and congresses
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── next.config.js          # Next.js configuration
```

### Core Data Models

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

#### CongressBoothUsage
- Links booths to specific congresses
- Customizations applied
- Setup costs
- Performance metrics
- Photo gallery

#### Order
- Request details
- Approval workflow
- Cost estimation
- Customization requirements

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

✅ Visual booth catalog with grid/list views
✅ Advanced search and multi-criteria filtering
✅ Detailed booth information pages
✅ Component inventory tracking
✅ Usage history with congress timeline
✅ Performance notes and metrics
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

### Phase 3 - Advanced Features
- [ ] Calendar availability view
- [ ] Automated conflict detection
- [ ] Cost comparison reports
- [ ] ROI analytics dashboard
- [ ] Email notifications
- [ ] PDF export for booth specs
- [ ] 3D booth previews
- [ ] Inventory management for components
- [ ] Maintenance scheduling

### Phase 4 - Enterprise Features
- [ ] Multi-tenant support
- [ ] Role-based access control (RBAC)
- [ ] Integration with event management systems
- [ ] Vendor management
- [ ] Contract tracking
- [ ] Budget management
- [ ] Mobile app (React Native)

## 🎨 Customization

### Branding
Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      }
    }
  }
}
```

### Mock Data
Edit `data/mockData.ts` to add your own booths and congress data.

## 🐛 Known Limitations (MVP)

- Mock data only (no real database)
- Images are placeholder icons
- No actual approval workflow
- No user authentication
- No email notifications
- Orders are console-logged only

## 📝 Usage Examples

### Adding a New Booth
Edit `data/mockData.ts` and add to the `mockBooths` array:

```typescript
{
  id: 'booth-004',
  name: 'Your Booth Name',
  description: 'Description...',
  dimensions: { width: 6, depth: 6, height: 3, unit: 'meters' },
  // ... other properties
}
```

### Filtering Booths
Users can filter by:
- Status checkboxes
- Dimension ranges
- Max cost slider
- Feature tags
- Search text

### Viewing Usage History
Click on any booth card → "Usage History" tab to see:
- Previous congresses
- Setup costs
- Customizations
- Performance notes
- Attendee metrics

### Placing an Order
1. Select a booth
2. Click "Request This Booth"
3. Choose congress and dates
4. Add customization notes
5. Submit request

## 🤝 Contributing

This is an MVP framework. To extend it:

1. Add database models matching the TypeScript types
2. Create API routes in `app/api/`
3. Replace mock data with API calls
4. Implement authentication
5. Add file upload for images
6. Create admin dashboard

## 📄 License

This is a prototype/MVP framework for demonstration purposes.

## 💡 Support

For questions or issues, please review the code comments and TypeScript types for guidance on extending functionality.

---

**Built with ❤️ for pharmaceutical congress management**
