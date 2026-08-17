/**
 * Posts a career application (including the resume file) to the PHP handler.
 *
 * Uses multipart/form-data rather than the JSON payload used by
 * submitContactForm — the resume attachment cannot travel as JSON.
 * The matching server script is uploaded straight to Hostinger at
 * public_html/api/career.php (not tracked in this repo).
 */
export async function submitCareerApplication(form) {
  const now  = new Date()
  const data = new FormData()

  data.append('name',          form.name.trim())
  data.append('email',         form.email.trim())
  data.append('phone',         form.phone.trim())
  data.append('location',      form.location.trim())
  data.append('position',      form.position)
  data.append('experience',    form.experience)
  data.append('qualification', form.qualification)
  data.append('portfolio',     form.portfolio.trim() || '-')
  data.append('date',          now.toISOString().slice(0, 10))
  data.append('time',          now.toTimeString().slice(0, 5))
  data.append('source',        'Careers Page')
  data.append('resume',        form.resume, form.resume.name)

  const res = await fetch('https://discovermarketing.co/api/career.php', {
    method: 'POST',
    body: data, // no Content-Type header — the browser sets the multipart boundary
  })
  if (!res.ok) throw new Error('Request failed')

  // career.php answers 200 even when it rejects the submission, so the JSON
  // success flag is the real result — without this check a validation failure
  // would show the applicant a "Thank you" screen.
  const result = await res.json().catch(() => null)
  if (!result?.success) throw new Error(result?.message || 'Request failed')
}
