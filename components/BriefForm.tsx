'use client';

import { useState, useMemo } from 'react';
import { briefSections, BriefQuestion } from '../data/briefQuestions';

type FormValues = Record<string, string | string[]>;

function ProgressRing({ pct }: { pct: number }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="flex flex-col items-center justify-center" style={{ minWidth: 80 }}>
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} fill="none" stroke="#e5e7eb" strokeWidth="6" />
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="#cc0000"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(-90 36 36)"
          style={{ transition: 'stroke-dashoffset 0.4s ease' }}
        />
        <text x="36" y="40" textAnchor="middle" fontSize="13" fontWeight="700" fill="#111827">
          {pct}%
        </text>
      </svg>
      <span className="text-xs text-gray-500 mt-1 whitespace-nowrap">Completed</span>
    </div>
  );
}

function FormField({
  question,
  value,
  onChange,
}: {
  question: BriefQuestion;
  value: string | string[];
  onChange: (id: string, val: string | string[]) => void;
}) {
  const base =
    'w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-jnj-red focus:border-transparent';

  if (question.type === 'textarea') {
    return (
      <textarea
        rows={3}
        className={base}
        placeholder={question.placeholder}
        value={value as string}
        onChange={e => onChange(question.id, e.target.value)}
      />
    );
  }

  if (question.type === 'select') {
    return (
      <select
        className={base}
        value={value as string}
        onChange={e => onChange(question.id, e.target.value)}
      >
        <option value="">— Select —</option>
        {question.options?.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }

  if (question.type === 'checkbox') {
    const checked = (value as string[]) || [];
    return (
      <div className="space-y-2">
        {question.options?.map(opt => (
          <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-jnj-red"
              checked={checked.includes(opt)}
              onChange={e => {
                const next = e.target.checked
                  ? [...checked, opt]
                  : checked.filter(v => v !== opt);
                onChange(question.id, next);
              }}
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  return (
    <input
      type={question.type === 'date' ? 'date' : 'text'}
      className={base}
      placeholder={question.placeholder}
      value={value as string}
      onChange={e => onChange(question.id, e.target.value)}
    />
  );
}

export default function BriefForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [values, setValues] = useState<FormValues>({});
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => {
    const required = briefSections.flatMap(s => s.questions).filter(q => q.required);
    if (required.length === 0) return 0;
    const answered = required.filter(q => {
      const v = values[q.id];
      if (Array.isArray(v)) return v.length > 0;
      return !!v;
    });
    return Math.round((answered.length / required.length) * 100);
  }, [values]);

  function handleChange(id: string, val: string | string[]) {
    setValues(prev => ({ ...prev, [id]: val }));
  }

  function getValue(id: string, type: string): string | string[] {
    if (type === 'checkbox') return (values[id] as string[]) ?? [];
    return (values[id] as string) ?? '';
  }

  const section = briefSections[activeTab];
  const isLast = activeTab === briefSections.length - 1;

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Brief submitted</h2>
        <p className="text-gray-500 text-sm mb-8">
          Thank you — your congress brief has been received. The design team will be in touch shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setActiveTab(0); setValues({}); }}
          className="px-6 py-2 bg-jnj-red text-white text-sm font-semibold rounded hover:bg-jnj-red-dark transition-colors"
        >
          Start a new brief
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Congress Brief</h1>

      <div className="bg-white border border-gray-200 rounded mb-6">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="px-5 py-4 align-middle">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="pr-8">
                        <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">Event</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {(values['event-name'] as string) || <span className="text-gray-300">—</span>}
                        </p>
                      </td>
                      <td className="pr-8">
                        <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">Dates</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {(values['event-dates'] as string) || <span className="text-gray-300">—</span>}
                        </p>
                      </td>
                      <td>
                        <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">Venue</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {(values['venue'] as string) || <span className="text-gray-300">—</span>}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="px-5 py-4 align-middle border-l border-gray-100" style={{ width: 100 }}>
                <ProgressRing pct={progress} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto">
        {briefSections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
              i === activeTab
                ? 'border-jnj-red text-jnj-red'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded mb-6">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900">{section.title}</h2>
        </div>
        <div className="px-6 py-2">
          <table className="w-full">
            <tbody>
              {section.questions.map((q, i) => (
                <tr key={q.id} style={{ borderBottom: i < section.questions.length - 1 ? '1px solid #f9fafb' : 'none' }}>
                  <th
                    scope="row"
                    className="text-sm font-semibold text-gray-700 text-left py-3 pr-6 align-top"
                    style={{ width: '33%' }}
                  >
                    {q.label}
                    {q.required && <span className="text-jnj-red ml-0.5">*</span>}
                  </th>
                  <td className="py-3">
                    <FormField question={q} value={getValue(q.id, q.type)} onChange={handleChange} />
                    {q.hint && <p className="text-xs text-gray-400 mt-1">{q.hint}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveTab(i => Math.max(0, i - 1))}
          disabled={activeTab === 0}
          className="px-5 py-2 text-sm text-gray-600 border border-gray-200 rounded hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <span className="text-xs text-gray-400">Section {activeTab + 1} of {briefSections.length}</span>
        {isLast ? (
          <button
            onClick={() => setSubmitted(true)}
            className="px-6 py-2 bg-jnj-red text-white text-sm font-semibold rounded hover:bg-jnj-red-dark transition-colors"
          >
            Submit Brief
          </button>
        ) : (
          <button
            onClick={() => setActiveTab(i => Math.min(briefSections.length - 1, i + 1))}
            className="px-5 py-2 bg-jnj-red text-white text-sm font-semibold rounded hover:bg-jnj-red-dark transition-colors"
          >
            Next Section →
          </button>
        )}
      </div>
    </div>
  );
}
