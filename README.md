# ApplyNow Portal 🎓

## 📌 Project Overview
ApplyNow Portal is a modern multi-step admission system built using React and Tailwind CSS.  
It allows applicants to submit their information through a structured form, track their application status, and enables administrators to review, approve, or reject applications.

The system simulates a real-world admission workflow with validation, state management, and status tracking.

---

## 🚀 Features

- Multi-step application form (3 steps)
- Real-time form validation
- Dashboard displaying application details and status
- Admin panel for approving/rejecting applications
- AI-based admission prediction:
  - GPA > 3.5 → Likely Approved
- Application history tracking
- Clickable history with full applicant details
- Dynamic status updates (synced with admin actions)
- Loading states for improved user experience
- Fully responsive and modern UI (Tailwind CSS)

---

## 🎨 Colour Palette

- Primary: #0065EA (Blue)  
- Approved: #00A652 (Green)  
- Reject / Danger: #F40000 (Red)  
- Success Light: #D3FDE8  
- Success Dark: #008243  
- Warning: #F59E0B (Yellow)  
- Background: #F3F4F6 (Gray)


Palette Link: [View Palette on Coolors](https://coolors.co/f3f4f6-0065ea-d3fde8-008243-00a652-f40000-f59e0b)


---

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- React Router
- LocalStorage (for client-side data persistence)

---

## 📊 Application Flow

1. User fills the multi-step application form  
2. Data is validated and stored in localStorage  
3. Dashboard displays submitted application and status  
4. Admin reviews application in Admin Panel  
5. Status is updated (Approved / Rejected / Likely Approved)  
6. Changes reflect instantly in Dashboard and History  

---

## 🤖 AI Logic

```js
if (data.gpa > 3.5) {
  setStatus("Likely Approved");
}

---

## 📊 Presentation

[View Presentation](./docs/presentation.pdf)

---

## 🌐 Live Demo

https://applynow-admissions-portal.vercel.app/
