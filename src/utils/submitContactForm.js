export async function submitContactForm(form, source) {
  const now = new Date()
  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim() || '-',
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    service: form.service || '-',
    message: form.message.trim(),
    source,
  }

  const res = await fetch('https://discovermarketing.co/api/email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Request failed')

  // email.php answers 200 even when it rejects the submission, so the JSON
  // success flag is the real result — without this check a validation failure
  // would still send the visitor to the thank-you page.
  const result = await res.json().catch(() => null)
  if (!result?.success) throw new Error(result?.message || 'Request failed')
}
