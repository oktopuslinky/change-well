import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const, "aria-hidden": true, ...p,
});

export const Icon = {
  heart: (p: P) => (<svg {...base(p)}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>),
  users: (p: P) => (<svg {...base(p)}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  clipboard: (p: P) => (<svg {...base(p)}><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M9 12h6M9 16h4"/></svg>),
  home: (p: P) => (<svg {...base(p)}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>),
  sun: (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>),
  sparkles: (p: P) => (<svg {...base(p)}><path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9zM19 14l.9 2.1 2.1.9-2.1.9L19 20l-.9-2.1-2.1-.9 2.1-.9z"/></svg>),
  brain: (p: P) => (<svg {...base(p)}><path d="M9.5 4a2.5 2.5 0 0 0-2.5 2.5v.2A2.8 2.8 0 0 0 5 9.4a2.8 2.8 0 0 0 .6 4.4A2.8 2.8 0 0 0 8 18h1.5zM14.5 4A2.5 2.5 0 0 1 17 6.5v.2a2.8 2.8 0 0 1 2 2.7 2.8 2.8 0 0 1-.6 4.4A2.8 2.8 0 0 1 16 18h-1.5z"/></svg>),
  shield: (p: P) => (<svg {...base(p)}><path d="M12 3l7 3v6c0 4.4-3 7.9-7 9-4-1.1-7-4.6-7-9V6z"/><path d="M9.2 12.2l1.9 1.9 3.7-3.8"/></svg>),
  activity: (p: P) => (<svg {...base(p)}><path d="M3 12h4l2.5-7 5 14L17 12h4"/></svg>),
  wind: (p: P) => (<svg {...base(p)}><path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5M3 16h14a2.5 2.5 0 1 1-2.5 2.5M3 12h9"/></svg>),
  phone: (p: P) => (<svg {...base(p)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>),
  mail: (p: P) => (<svg {...base(p)}><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6.5 9 6 9-6"/></svg>),
  pin: (p: P) => (<svg {...base(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.7"/></svg>),
  arrow: (p: P) => (<svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  check: (p: P) => (<svg {...base(p)}><path d="M4 12.5 9 17.5 20 6.5"/></svg>),
  menu: (p: P) => (<svg {...base(p)}><path d="M3 6h18M3 12h18M3 18h18"/></svg>),
  close: (p: P) => (<svg {...base(p)}><path d="M6 6l12 12M18 6 6 18"/></svg>),
  chevron: (p: P) => (<svg {...base(p)}><path d="m6 9 6 6 6-6"/></svg>),
  quote: (p: P) => (<svg {...base({ ...p, strokeWidth: 0, fill: "currentColor" })}><path d="M7 7h4v6a4 4 0 0 1-4 4H6v-2h1a2 2 0 0 0 2-2v-.5H7zm8 0h4v6a4 4 0 0 1-4 4h-1v-2h1a2 2 0 0 0 2-2v-.5h-2z"/></svg>),
  calendar: (p: P) => (<svg {...base(p)}><rect x="3.5" y="4.5" width="17" height="16" rx="2.5"/><path d="M3.5 9h17M8 3v3M16 3v3"/></svg>),
  video: (p: P) => (<svg {...base(p)}><rect x="2.5" y="6.5" width="13" height="11" rx="2.5"/><path d="m15.5 10 6-3.5v11l-6-3.5z"/></svg>),
  leaf: (p: P) => (<svg {...base(p)}><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 9-4 13-9 13z"/><path d="M4 20c4-6 8-8 12-9"/></svg>),
  linkedin: (p: P) => (<svg {...base({ ...p, strokeWidth: 0, fill: "currentColor" })}><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.2 8.65 21 10.6 21 13.9V21h-4v-6.3c0-1.5 0-3.4-2.07-3.4-2.08 0-2.4 1.6-2.4 3.3V21H9z"/></svg>),
  facebook: (p: P) => (<svg {...base({ ...p, strokeWidth: 0, fill: "currentColor" })}><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.7V13h2.74v8z"/></svg>),
};

export type IconName = keyof typeof Icon;
