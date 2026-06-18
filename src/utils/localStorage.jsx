// const employees = [
//   {
//     id: 1,
//     email: "employee1@ems.com",
//     password: "123",
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Design Login Page",
//         taskDescription: "Create a responsive login page using React and Tailwind CSS.",
//         taskDate: "2026-06-18",
//         category: "Design"
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Fix Navbar Bug",
//         taskDescription: "Resolve alignment issue in the navigation bar.",
//         taskDate: "2026-06-15",
//         category: "Development"
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: false,
//         failed: true,
//         taskTitle: "API Integration",
//         taskDescription: "Connect login form with backend API.",
//         taskDate: "2026-06-14",
//         category: "Backend"
//       }
//     ]
//   },

//   {
//     id: 2,
//     email: "employee2@ems.com",
//     password: "123",
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Create Dashboard UI",
//         taskDescription: "Build employee dashboard layout.",
//         taskDate: "2026-06-18",
//         category: "Frontend"
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//         taskTitle: "Implement Context API",
//         taskDescription: "Create authentication context.",
//         taskDate: "2026-06-19",
//         category: "React"
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Code Review",
//         taskDescription: "Review pull requests from teammates.",
//         taskDate: "2026-06-16",
//         category: "Review"
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: false,
//         failed: true,
//         taskTitle: "Optimize Images",
//         taskDescription: "Reduce image sizes for better performance.",
//         taskDate: "2026-06-13",
//         category: "Performance"
//       }
//     ]
//   },

//   {
//     id: 3,
//     email: "employee3@ems.com",
//     password: "123",
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Build Settings Page",
//         taskDescription: "Create profile and settings screen.",
//         taskDate: "2026-06-20",
//         category: "Frontend"
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Setup Routing",
//         taskDescription: "Configure React Router.",
//         taskDate: "2026-06-15",
//         category: "React"
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//         taskTitle: "Write Documentation",
//         taskDescription: "Document project structure.",
//         taskDate: "2026-06-21",
//         category: "Documentation"
//       }
//     ]
//   },

//   {
//     id: 4,
//     email: "employee4@ems.com",
//     password: "123",
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Create Reports Page",
//         taskDescription: "Build monthly reports section.",
//         taskDate: "2026-06-22",
//         category: "Frontend"
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Fix Form Validation",
//         taskDescription: "Handle invalid input cases.",
//         taskDate: "2026-06-17",
//         category: "Validation"
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: false,
//         failed: true,
//         taskTitle: "Deploy Application",
//         taskDescription: "Deploy project to production.",
//         taskDate: "2026-06-12",
//         category: "Deployment"
//       }
//     ]
//   },

//   {
//     id: 5,
//     email: "employee5@ems.com",
//     password: "123",
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Create Employee Cards",
//         taskDescription: "Display employee information cards.",
//         taskDate: "2026-06-18",
//         category: "UI"
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//         taskTitle: "Implement Search",
//         taskDescription: "Add employee search functionality.",
//         taskDate: "2026-06-20",
//         category: "Feature"
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Fix CSS Issues",
//         taskDescription: "Resolve responsive design problems.",
//         taskDate: "2026-06-14",
//         category: "Styling"
//       }
//     ]
//   }
// ];

// const admin = [
//   {
//     id: 1,
//     email: "admin@ems.com",
//     password: "123"
//   }
// ];

// export const setLocalStorage = () =>{
//   localStorage.setItem('employees' , JSON.stringify(employees))
//   localStorage.setItem('admin' ,JSON.stringify(admin))

// }

// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem('employees'))
//   const admin = JSON.parse(localStorage.getItem('admin'))

//   return {employees, admin}

// }

const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "category": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "category": "Support"
            }
        ]
    }
];


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}

