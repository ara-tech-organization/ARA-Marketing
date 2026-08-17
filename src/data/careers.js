/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  CAREERS DATA — single place to update the /careers page
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  ▸ TO OPEN A ROLE   →  set  status: 'hiring'   (shows a GREEN "Currently Hiring"
 *                        badge + an "Apply Now" button)
 *  ▸ TO CLOSE A ROLE  →  set  status: 'closed'   (shows a RED "Not Hiring" badge,
 *                        card is muted and the Apply button is hidden)
 *  ▸ TO ADD A ROLE    →  copy any block below, change the fields, and add the
 *                        same `title` to `positions` further down so it also
 *                        appears in the application form dropdown.
 *  ▸ TO REMOVE A ROLE →  delete its block.
 *
 *  Open roles are automatically sorted to the top of the section — no other
 *  file needs to change.
 */
export const openings = [
  {
    title:      'Performance Marketer',
    location:   'Thanjavur',
    experience: '2+ Years',
    type:       'Full Time',
    status:     'hiring',
    desc:       'Plan, launch and optimise paid campaigns across Google Ads and Meta Ads to drive qualified leads and measurable ROI for our clients.',
  },
  {
    title:      'SEO Analyst',
    location:   'Thanjavur',
    experience: '1+ Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Handle on-page, off-page and technical SEO, keyword research, audits and monthly ranking reports for client websites.',
  },
  {
    title:      'Graphic Designer',
    location:   'Thanjavur',
    experience: '1+ Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Design social media creatives, brand identities, brochures and ad visuals that communicate clearly and look sharp.',
  },
  {
    title:      'Video Editor',
    location:   'Thanjavur',
    experience: '1+ Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Edit reels, promotional films, product videos and ad creatives with motion graphics, colour grading and sound design.',
  },
  {
    title:      'Social Media Manager',
    location:   'Thanjavur',
    experience: '2+ Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Own the content calendar, community engagement and growth strategy across client social media channels.',
  },
  {
    title:      'Social Media Executive',
    location:   'Thanjavur',
    experience: '0-2 Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Schedule posts, track engagement, coordinate with the design team and support day-to-day social media operations.',
  },
  {
    title:      'LinkedIn Marketer',
    location:   'Thanjavur',
    experience: '1+ Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Build B2B visibility through LinkedIn content, page growth, outreach campaigns and lead generation.',
  },
  {
    title:      'Business Development Executive',
    location:   'Thanjavur',
    experience: '1+ Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Identify new business opportunities, build client relationships and convert enquiries into long-term partnerships.',
  },
  {
    title:      'Sales Executive',
    location:   'Thanjavur',
    experience: '0-2 Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Meet prospects, present our digital marketing services and close deals while maintaining a healthy pipeline.',
  },
  {
    title:      'Tele Caller',
    location:   'Thanjavur',
    experience: '0-2 Years',
    type:       'Full Time',
    status:     'closed',
    desc:       'Reach out to prospective clients over the phone, qualify enquiries and schedule meetings for the sales team.',
  },
]

/* Options for the "Position Applying For" dropdown in the application form. */
export const positions = [
  'Graphic Designer',
  'Video Editor',
  'Performance Marketer',
  'SEO Analyst',
  'LinkedIn Marketer',
  'Social Media Manager',
  'Social Media Executive',
  'Sales Executive',
  'Business Development Executive',
  'Tele Caller',
  'Others',
]

export const experienceLevels = [
  '0-2 Years',
  '2-5 Years',
  '5-10 Years',
  '10+ Years',
]

export const qualifications = [
  'Diploma',
  'Undergraduate',
  'Postgraduate',
  'Doctorate / Ph.D.',
  'Other',
]

/* Benefits shown in the "Why Join ARA Discover Marketing?" section. */
export const whyJoin = [
  {
    title: 'Learn and develop new skills',
    desc:  'Hands-on training across SEO, paid ads, design and development tools that keep you ahead in a fast-moving industry.',
  },
  {
    title: 'Work with a supportive team',
    desc:  'A collaborative culture where seniors mentor freshers and every question gets a real answer.',
  },
  {
    title: 'Gain hands-on industry experience',
    desc:  'Work on live client campaigns from day one across multiple industries and business sizes.',
  },
  {
    title: 'Share your ideas and creativity',
    desc:  'Your ideas get heard. Good thinking travels straight from a team discussion into a live campaign.',
  },
  {
    title: 'Grow with a fast-developing digital marketing company',
    desc:  'As ARA Discover Marketing grows, so does your role, your responsibility and your career path.',
  },
]

/* Accepted resume formats — kept here so the UI text and the validation agree. */
export const RESUME_ACCEPT     = '.pdf,.doc,.docx'
export const RESUME_MAX_BYTES  = 5 * 1024 * 1024 // 5 MB
