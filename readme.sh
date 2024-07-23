## **Project Overview**

This project is a single-page application (SPA) featuring a responsive layout with a sidebar, navbar, and footer. The application showcases sections for Home, Services, About Us, Mission, Vision, and Contact. It supports light and dark themes and has a slide-out sidebar that appears on smaller screens.

## **Project Structure**

The project is organized into the following structure:

```
src/
  ├── components/
  │   ├── footer/
  │   │   ├── Footer.jsx
  │   │   └── Footer.css
  │   ├── navbar/
  │   │   ├── Navbar.jsx
  │   │   └── Navbar.css
  │   └── sidebar/
  │       ├── Sidebar.jsx
  │       └── Sidebar.css
  └── pages/
      ├── about/
      │   ├── About.jsx
      │   └── About.css
      ├── home/
      │   ├── Home.jsx
      │   └── Home.css
      ├── mission/
      │   ├── Mission.jsx
      │   └── Mission.css
      ├── services/
      │   ├── Services.jsx
      │   └── Services.css
      └── vision/
          ├── Vision.jsx
          └── Vision.css
```

## **Components**

### **Navbar**

- **Location:** `src/components/navbar/`
- **Files:**
  - `Navbar.jsx`: Contains the main navigation bar with links to different sections and theme toggle button.
  - `Navbar.css`: Styles for the Navbar component.

### **Sidebar**

- **Location:** `src/components/sidebar/`
- **Files:**
  - `Sidebar.jsx`: Contains the slide-out sidebar menu for navigation on smaller screens.
  - `Sidebar.css`: Styles for the Sidebar component.

### **Footer**

- **Location:** `src/components/footer/`
- **Files:**
  - `Footer.jsx`: Contains the footer section with additional links and information.
  - `Footer.css`: Styles for the Footer component.

## **Pages**

### **Home**

- **Location:** `src/pages/home/`
- **Files:**
  - `Home.jsx`: The main landing page content.
  - `Home.css`: Styles for the Home page.

### **About**

- **Location:** `src/pages/about/`
- **Files:**
  - `About.jsx`: Content for the About Us section.
  - `About.css`: Styles for the About Us page.

### **Mission**

- **Location:** `src/pages/mission/`
- **Files:**
  - `Mission.jsx`: Content for the Mission section.
  - `Mission.css`: Styles for the Mission page.

### **Services**

- **Location:** `src/pages/services/`
- **Files:**
  - `Services.jsx`: Content for the Services section.
  - `Services.css`: Styles for the Services page.

### **Vision**

- **Location:** `src/pages/vision/`
- **Files:**
  - `Vision.jsx`: Content for the Vision section.
  - `Vision.css`: Styles for the Vision page.

## **Installation**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd your-repository
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Development Server:**

   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your browser to view the application.

## **Features**

- **Responsive Design:** The layout adapts to different screen sizes.
- **Sidebar Navigation:** A slide-out sidebar menu for smaller screens.
- **Theme Toggle:** Option to switch between light and dark themes.
- **Single Page Layout:** All content is displayed on a single page with navigation links to different sections.

## **Technologies Used**

- **React.js:** JavaScript library for building user interfaces.
- **CSS:** Styling for components and pages.
- **React Icons:** For icons used in the Navbar and Sidebar.

## **Contributing**

1. **Fork the Repository:**
   - Click the "Fork" button at the top right of this page.

2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

3. **Create a Branch:**
   ```bash
   git checkout -b feature-branch
   ```

4. **Make Changes and Commit:**
   ```bash
   git add .
   git commit -m "Add feature"
   ```

5. **Push Changes:**
   ```bash
   git push origin feature-branch
   ```

6. **Create a Pull Request:**
   - Go to the original repository and create a pull request from your forked repository.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

