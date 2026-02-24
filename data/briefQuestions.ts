export type FieldType = 'text' | 'textarea' | 'select' | 'checkbox' | 'date';

export interface BriefQuestion {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  hint?: string;
  required?: boolean;
}

export interface BriefSection {
  id: string;
  title: string;
  questions: BriefQuestion[];
}

export const briefSections: BriefSection[] = [
  {
    id: 'event-overview',
    title: 'Event Overview',
    questions: [
      { id: 'event-name', label: 'Event', type: 'text', placeholder: 'e.g. EHA 2026', required: true },
      { id: 'event-dates', label: 'Event Dates', type: 'text', placeholder: 'e.g. 11 – 14 June 2026', required: true },
      { id: 'venue', label: 'Venue (City, Country)', type: 'text', placeholder: 'e.g. Stockholm, Sweden', required: true },
      { id: 'booth-location', label: 'Booth space location, number & floor plan', type: 'text', placeholder: 'e.g. C2' },
      { id: 'booth-dimensions', label: 'Booth space dimensions', type: 'text', placeholder: 'e.g. 15m x 20m (300 sqm)' },
      { id: 'booth-split', label: 'Commercial / Medical & R&D split', type: 'text', placeholder: 'e.g. 60% Commercial, 40% Medical & R&D' },
    ],
  },
  {
    id: 'congress-strategy',
    title: 'Congress Strategy',
    questions: [
      { id: 'therapy-area', label: 'Primary therapy area / brand', type: 'text', placeholder: 'e.g. Haematology — Carvykti', required: true },
      { id: 'target-audience', label: 'Target audience', type: 'text', placeholder: 'e.g. Haematologists, oncologists, nurses', required: true },
      { id: 'key-messages', label: 'Key messages', type: 'textarea', placeholder: 'List the primary messages you want visitors to take away', required: true },
      { id: 'objectives', label: 'Primary objectives', type: 'textarea', placeholder: 'e.g. Drive HCP awareness, generate leads, support launch' },
      { id: 'budget', label: 'Estimated budget range', type: 'select', options: ['Under €50k', '€50k – €100k', '€100k – €250k', '€250k – €500k', 'Over €500k', 'To be confirmed'] },
    ],
  },
  {
    id: 'design-wishes',
    title: 'Design Wishes & Structures',
    questions: [
      { id: 'preferred-structures', label: 'Preferred structures', type: 'checkbox', options: ['Tunnel Totem', 'Short Totem', 'Totem with Seating', 'LED Freestanding Portrait Totem', 'VR Headset Desk', 'Tables with Upholstered Stools', 'Island Booth up to 100 sqm', 'Island Booth up to 180 sqm'] },
      { id: 'colour-preference', label: 'Colour / brand preferences', type: 'textarea', placeholder: 'e.g. J&J red and white palette, avoid dark backgrounds' },
      { id: 'open-enclosed', label: 'Preferred booth feel', type: 'select', options: ['Open — welcoming, easy to enter', 'Semi-open — balance of open and private', 'Enclosed — meeting-room focused'] },
      { id: 'meeting-rooms', label: 'Meeting rooms required?', type: 'select', options: ['Yes', 'No', 'To be confirmed'] },
      { id: 'storage', label: 'Storage required?', type: 'select', options: ['Yes', 'No', 'To be confirmed'] },
      { id: 'previous-feedback', label: 'Feedback on previous booth design', type: 'textarea', placeholder: 'What worked well? What would you change?' },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Regulations',
    questions: [
      { id: 'local-compliance', label: 'Local compliance regulations', type: 'textarea', placeholder: 'Detail any country-specific rules for booth content, claims, or activities' },
      { id: 'compliance-contact', label: 'Local compliance contact name & details', type: 'text', placeholder: 'Name, email or team' },
      { id: 'organiser-deadline', label: 'Show organiser approval deadline', type: 'text', placeholder: 'e.g. 1 March 2026', hint: 'This information may not be available at this stage.' },
      { id: 'content-restrictions', label: 'Restricted claims or content notes', type: 'textarea', placeholder: 'Any claims, images, or messaging that cannot be displayed' },
    ],
  },
  {
    id: 'must-haves',
    title: 'Must-Have Features',
    questions: [
      { id: 'av-requirements', label: 'AV / screen requirements', type: 'textarea', placeholder: 'e.g. 2× 55" screens, video loop, presentation capability' },
      { id: 'demo-stations', label: 'Demo stations required?', type: 'select', options: ['Yes', 'No', 'To be confirmed'] },
      { id: 'vr-experience', label: 'VR / interactive experience required?', type: 'select', options: ['Yes', 'No', 'To be confirmed'] },
      { id: 'catering', label: 'Catering / hospitality requirements', type: 'textarea', placeholder: 'e.g. Coffee bar, water station, branded cups' },
      { id: 'lead-capture', label: 'Lead capture mechanism required?', type: 'select', options: ['Yes — badge scanning', 'Yes — tablet form', 'Yes — business cards', 'No', 'To be confirmed'] },
      { id: 'accessibility', label: 'Accessibility requirements', type: 'textarea', placeholder: 'e.g. Wheelchair access, hearing loop, large print materials' },
    ],
  },
  {
    id: 'visual',
    title: 'Visual Inspiration & Engagement',
    questions: [
      { id: 'brand-guidelines', label: 'Brand guideline version / reference', type: 'text', placeholder: 'e.g. J&J Brand Standards v3.2, link or document name' },
      { id: 'engagement-activities', label: 'Planned engagement activities', type: 'textarea', placeholder: 'e.g. VR demos, patient journey experience, live presentations' },
      { id: 'competitor-refs', label: 'Competitor or reference booth notes', type: 'textarea', placeholder: 'Booths you admire or want to differentiate from' },
      { id: 'mood', label: 'Overall mood / feel', type: 'select', options: ['Clinical & precise', 'Premium & aspirational', 'Energetic & bold', 'Approachable & warm', 'To be confirmed'] },
      { id: 'additional-notes', label: 'Any other notes or requests', type: 'textarea', placeholder: 'Anything else the design team should know' },
    ],
  },
];
