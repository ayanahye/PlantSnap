### Hello! Quick note that Our AI Disclosures are in the public folder under AI_disclosures (public/AI_disclosures)

# Objectives
PlantSnap: Data and Care is a comprehensive plant care and identification tool designed to 
meet the needs of students, gardening enthusiasts, professors, and other researchers in an all-in-one application. Users would be able to search for specific plants using Perenual Plant API and acquire data or have the option to utilize an AI image recognition tool called Pl@ntNet API to identify plants. The data returned includes: care guide specifications related to water, sunlight and indoor requirements, and keywords which will be displayed as icons indicating the severity of interacting with this plant. Our project aims to offer a wider range of features compared to existing plant search tools. This will enable researchers, gardening enthusiasts, and other users to find plant data, comparable plants, and other information without needing to search around additional websites.

# Tech Stack
Our group chose to program the project in Next.js, a popular React framework, and style/structure the pages in HTML and CSS. For the designing components of the site, we will utilize Bootstrap to assist with making the design mobile-friendly and responsive. Similarly, we will use the icons and other helpful visuals from Material UI. We chose Next.js because it promotes the creation of components that are reusable and smaller compared to using only JavaScript and retaining large files of code. Moreover, we chose Next.js rather than using only React.js because it requires less code to be written. For example, to create pages in Next.js, a folder needs to be created for each page with a corresponding page file. However, in React.js, routes to pages need to be added to the router which adds complexity. Furthermore, in Next.js the UI gets generated in advance from the server, unlike React.js that uses Client Side Rendering. For the testing aspect of our project, we are leaning towards using Jest because it is a popular testing framework for React. Additionally, we would like to use Github Actions as the CI/CD Pipeline since we are all familiar with the GitHub website. For more information about the tech stack please refer to the project report.

Reference: https://www.freecodecamp.org/news/next-vs-react/

# Contributors
This project was planned, designed, and implemented by:
- Layan Barrieshee
- Dony Wang
- Haoran Miao
- Ayana Hussain

# Link to Website
https://plantsnapify.netlify.app/

# Setup Instructions
1. Please ensure you have Node.js installed with version 18 or higher and npm. Here is a link to download them [nodejs.org](https://nodejs.org/).
2. Use command
   ```bash
   npm install
   ```
   in the terminal for the project to auto install dependencies.
3. To start the development server, please use the command
   ```bash
   npm run dev
   ```
4. You can stop the development server using Ctrl + C.

# Useful Links and Resources

### Documentation
[PlantSnap Documentation](https://docs.google.com/document/d/1DlVDQSg9P5B4akBwGmD20Acq0VpjXfX40P7dgoObh1c/edit?usp=sharing)
### WBS Detailed Document
https://docs.google.com/document/d/1s-LXTF7a9rHfaA2wmBGtz8l9fUeXtsVD30UTJ6HAnkw/edit?usp=sharing
### Image Identification Documentation (Pl@ntNet API)
https://my.plantnet.org/doc/openapi 
### Plant Data API Documentation (Perenual API)
https://perenual.com/docs/api \
### Next.js Documentation
https://nextjs.org/ 

# Dependencies
typescript 5\
react.js 18\
next.js 14.0.1\
prisma,prisma/client 5.5.2\
bootstrap 5.3.2

