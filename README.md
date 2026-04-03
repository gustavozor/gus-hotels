🏨 Gus Hotels

A modern hotel management system built with Angular, focused on
performance, clean architecture and real-world features.

This project simulates how a real hotel system works, including room
management, bookings and guest tracking.

------------------------------------------------------------------------

🚀 Tech Stack

-   Angular 17+ (Standalone Components)
-   Angular Signals (state management)
-   SCSS for styling
-   Angular Material (UI components)

------------------------------------------------------------------------

✨ Features

-   🛏️ Room management (create, list, update status)
-   📅 Booking system with date validation
-   👤 Guest management
-   📊 Dashboard with hotel metrics (occupancy rate, availability, etc)
-   ⚡ Reactive state using signals (no over complicated RxJS)

------------------------------------------------------------------------

📁 Project Structure

src/app/ ├── core/ # models, services and business logic ├── features/ #
main app features (rooms, bookings, dashboard) ├── shared/ # reusable
components and UI └── app.routes.ts

The project follows a feature-based architecture, which makes easier to
scale and maintain over time.

------------------------------------------------------------------------

🧠 Architecture Decisions

-   Using Standalone Components to avoid unnecessary modules
-   Using Signals instead of heavy RxJS usage
-   Separation between core, features and shared
-   Lazy loading routes for better performance

------------------------------------------------------------------------

🖥️ Running the project

To start the development server:

ng serve

Then open: http://localhost:4200/

The app will auto reload when you change files.

------------------------------------------------------------------------

🛠️ Generate new components

ng generate component feature-name/component-name

Angular CLI makes really easy to scaffold new features fast.

------------------------------------------------------------------------

📦 Build

ng build

The build files will be generated in the dist/ folder.

------------------------------------------------------------------------

🧪 Tests

Run unit tests: ng test

------------------------------------------------------------------------

📌 Future Improvements

-   Authentication (admin / staff roles)
-   Real backend integration (Firebase or Node API)
-   Booking calendar UI (like Airbnb style)
-   Better error handling and loading states
-   Mobile responsive improvements

------------------------------------------------------------------------

💬 About the project

This project was created as a portfolio piece to demonstrate:

-   Real world Angular architecture
-   State management using signals
-   Clean and scalable code structure
-   Thinking in product instead of just components

------------------------------------------------------------------------

🤝 Contributing

Feel free to fork this project and make improvements. Any sugestions are
welcome 🙂

------------------------------------------------------------------------

📎 Author

Gustavo Felipe da Silva

------------------------------------------------------------------------

⭐ Final notes

This is still a work in progress, but already shows how to structure a
scalable Angular application.

If you liked the project, consider giving a star ⭐