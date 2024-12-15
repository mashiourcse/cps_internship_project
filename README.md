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

Added a power as role field in user with 3 values (member, student, technical) with specific permissions:

1. **Normal User**:
   - Limited access to course content.
   - Can only view course titles and brief descriptions (no access to detailed course or module information).
   - member role can only view rating learderboard and courses section

2. **Student**:
   - Access to full course details, including the module name, description, number of classes, and topics covered.
   - Can view course materials and related content.
   - can view class schedule section

3. **Social Media Manager / Developer**:
   -- social media manager developer as technical role is added  
   -- They can add course and class schedule with details
   -- Admin verification is required for further actions
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

- **Codeforces Leaderboard**:
   - There is a ranked dashboard added with users codeforces handle with codeforces api which will rank them according to max rating

---

## **Submission Guidelines**

To submit the project, the developer must complete the following steps:

1. **GitHub Repository**:
   https://github.com/mashiourcse/cps_internship_project

2. **Video Demonstration**:
   

---

## **Conclusion**

This project will deliver a working template for course management platform with secure authentication, dynamic role-based access, and a responsive frontend. By utilizing **Next.js**, **Strapi**, and **Tailwind CSS**, the platform will offer a clean and user-friendly experience, with the flexibility to expand and add more features in the future.
