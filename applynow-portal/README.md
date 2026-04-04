# ApplyNow Portal 🎓

## 📌 Project Overview
ApplyNow Portal is a multi-step admission system built with React and Tailwind CSS. It allows students to apply, track their application status, and enables admins to review and approve/reject applications.

---

## 🚀 Features

- Multi-step application form (3 steps)
- Form validation for all fields
- Dashboard displaying application details and status
- Admin panel for approving/rejecting applications
- AI-based status prediction:
  - GPA > 3.5 → Likely Approved
- Application history tracking
- Clickable history with full details
- Loading states for better UX
- Responsive and modern UI (Tailwind CSS)

---

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- React Router
- LocalStorage (for data persistence)

---

## 📊 Application Flow

1. User fills application form
2. Data is saved to localStorage
3. Dashboard displays current status
4. Admin reviews application
5. Status updates reflect in dashboard and history

---

## 🤖 AI Logic

```js
if (data.gpa > 3.5) {
  setStatus("Likely Approved");
}