# Project Requirement Document for CPS Academy Test Project

## **Project Overview**

CPS Academy seeks a developer to build a web application for course management, leveraging **Next.js**, **Tailwind CSS**, and **Strapi**. The goal of this project is to implement authentication, user registration, role management, and dynamic content rendering based on user roles. This application will enable users to interact with course details and modules while ensuring proper access control based on user roles.

---

## **Key Features and Requirements**

### **Technology Stack**

- **Frontend**: Next.js (React framework)
- **Backend**: Strapi (Headless CMS for data management and APIs)
- **CSS Framework**: Tailwind CSS (for responsive and utility-first styling)

---

### **Authentication & User Management**

1. **Secure Authentication**:
   - Implement **JWT (JSON Web Token)** or a similar mechanism for secure authentication.
   - Ensure secure endpoints for user registration, login, and authentication.

2. **User Registration and Login**:
   - Allow users to register and log in using an email and password.
   - Include form validation, error handling, and feedback during the registration and login processes.

3. **Password Recovery/Reset**:
   - Provide functionality for users to recover/reset their passwords.
   - Send a password reset email with a link to reset the password.

---

### **Role Management**

Define three user roles with specific permissions:

1. **Normal User**:
   - Limited access to course content.
   - Can only view course titles and brief descriptions (no access to detailed course or module information).

2. **Student**:
   - Access to full course details, including the module name, description, number of classes, and topics covered.
   - Can view course materials and related content.

3. **Social Media Manager / Developer**:
   - Access to all course and module details, along with additional data such as analytics, promotional content, and other relevant course information.
   - Admin-level permissions for managing course details and user roles.

---

### **Course Details and Modules**

Each course should contain the following details:

1. **Course Information**:
   - **Title**: Name of the course.
   - **Description**: Detailed description of the course.

2. **Modules**:
   - **Name**: Title of the module.
   - **Details**: Description of the module content.
   - **Number of Classes**: Total number of classes within the module.
   - **Topics Covered**: List of topics covered in the module.

---

### **Role-Specific Views for Course and Module Details**

1. **Students, Social Media Managers, and Developers**:
   - Can view the full course and module details (including the description, topics covered, and number of classes).

2. **Normal Users**:
   - Can only view a limited summary of courses (such as the course title and a brief description).

---

### **API Integration**

Strapi will be used to manage the backend data for courses, users, and roles. The following APIs should be built:

1. **User Registration/Login**:
   - Implement secure API endpoints for user registration, login, and authentication using JWT.

2. **Fetching Course and Module Details**:
   - Create APIs to fetch course and module details, with role-based access control. 
   - Ensure that only users with the appropriate role can access the corresponding level of detail.

3. **Updating User Roles**:
   - Provide admin-level functionality to update user roles (e.g., promote a user to a Student or Social Media Manager/Developer).

---

### **Frontend Features**

1. **Responsive Design**:
   - The application should be fully responsive and work seamlessly on mobile, tablet, and desktop devices.
   - Use **Tailwind CSS** for building a responsive layout and ensuring cross-device compatibility.

2. **Dynamic Rendering of Content**:
   - Render course and module content dynamically based on the logged-in user’s role.
   - Ensure that content displayed to users is customized according to their access level (Normal User, Student, Social Media Manager, Developer).

3. **User Interface**:
   - Provide a clean, intuitive, and user-friendly interface for browsing course details and modules.
   - Use modern UI patterns and best practices for web design.
   - Include proper feedback for authentication and role-based access, such as:
     - Redirects after login.
     - Error messages when access is denied.
     - Visual indicators for the user’s current role.

---

### **Other Features**

- **Navigation**:
   - Simple and clear navigation between pages (e.g., Home, Course Listings, Course Details, Login, Profile).
   - Role-based conditional rendering of menu items (e.g., only Admin can access user management features).

- **Authentication Feedback**:
   - Display feedback messages for users when they log in, register, or encounter an error during authentication.
   - Redirect users based on their role (e.g., students should be redirected to the course listings page, while social media managers might be redirected to analytics).

---

## **Timeline**

- **Deadline**: The project should be completed by **15 December**.
- **Project Phases**:
   1. **Phase 1 (Week 1)**: Set up the Next.js frontend and Strapi backend, implement authentication, user registration, and login functionality.
   2. **Phase 2 (Week 2)**: Develop role management system, including role-specific views and API integration.
   3. **Phase 3 (Week 3)**: Implement course and module management features, dynamic content rendering, and role-based access.
   4. **Phase 4 (Week 4)**: Test and debug the application, ensure responsive design, and perform cross-browser testing.

---

## **Submission Guidelines**

To submit the project, the developer must complete the following steps:

1. **GitHub Repository**:
   - Create a GitHub repository for the project.
   - Ensure the repository includes:
     - Well-organized folder structure.
     - Clear and concise commit messages.
     - A `README.md` file containing:
       - Project overview.
       - Installation and setup instructions.
       - Documentation for the features implemented.
       - Dependencies and versions used.
       - Example `.env` file for environment configuration (with placeholders for sensitive keys or settings).

2. **Video Demonstration**:
   - Record a video demonstrating the following:
     - Overview of the project’s functionality.
     - User authentication and role-based login.
     - Access to course and module details based on roles (Normal User, Student, Social Media Manager, Developer).
     - Any additional features or highlights of the project.
   - Provide a link to the recorded video (upload to YouTube, Google Drive, or other accessible platforms).

---

## **Conclusion**

This project will deliver a fully functional course management platform with secure authentication, dynamic role-based access, and a responsive frontend. By utilizing **Next.js**, **Strapi**, and **Tailwind CSS**, the platform will offer a clean and user-friendly experience, with the flexibility to expand and add more features in the future.
