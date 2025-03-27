# Changelog

All notable changes to this project will be documented in this file.

## [1.7.0]
### added
- fetch users using angular 19 provideHttpClient() same as products
## [1.6.0] - add signout
## [1.2.0] - 2025-03-26 🚀 (New Features & Enhancements)

### Added
- Created a **clean and responsive** "Contact Us" page with address, contact details, and social media links.
- Enhanced routing to allow public access to the **Home Page (`/`)** and **Contact Page (`/contact`)**.
- Improved `AuthGuard` to restrict access to protected routes like `/dashboard` and `/product`.

### Fixed
- Resolved **dashboard content** not displaying after login.
- Fixed **routing conflicts** for the root path (`/`) and `/home`.

### Updated
- Refactored `app.routes.ts` to ensure **consistent use of `AuthGuard`** for protected routes.
- Improved `contact.component.html` with **better layout and styling**.

---

## [1.1.0] - 2025-03-25 🔐 (Authentication Enhancements)

### Added
- Updated `login.component.ts` with `onFormSubmit` method and form binding.
- Added **session persistence** using `localStorage`.

### Fixed
- Resolved issue where the **dashboard did not load** after login.
- Fixed **login redirection** to `/dashboard` after successful authentication.

### Updated
- Improved UI updates when authentication state changes.

---

## [1.0.2] - 2025-03-17 🔧 (Refactoring & Signals)

### Added
- Introduced **signals** for authentication state management.
- Updated homepage to use **signals** for dynamic updates.

### Updated
- Refactored folder structure in the `auth` module for better organization.
- Renamed `AuthService` to `AuthenticationService` for clarity.

---

## [1.0.1] - 2025-03-14 🔧 (Fixes & Improvements)

### Fixed
- Resolved merge conflicts in `README.md`.

### Updated
- Added **proper redirect** from `/` to `/login`.
- Enhanced **UI for `ContactComponent`** with clickable **email & phone links**.

---

## [1.0.0] - 2025-03-14 🎉 (Initial Release)

### Added
- Created **Angular project setup**.
- Implemented **login form** with username/password validation.
- Integrated `BehaviorSubject` for **reactive authentication state**.
- Developed **main components**:
  - `HomePage`
  - `ProductPage`
  - `CartPage`
  - `DashboardComponent`
  - `ContactComponent`
- Configured **basic routing** with guards for authentication.
- Designed `LoginPage` with **validation and redirection logic**.
- Integrated **Bootstrap for responsive UI**.

---

✅ This changelog follows [Semantic Versioning](https://semver.org/).