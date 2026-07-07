export async function submitContactForm(form, source) {
  const now = new Date()
  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim() || '-',
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    treatment: form.service || '-',
    message: form.message.trim(),
    source,
  }

  const res = await fetch('https://aradiscovermarketing.in/api/email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Request failed')
}
