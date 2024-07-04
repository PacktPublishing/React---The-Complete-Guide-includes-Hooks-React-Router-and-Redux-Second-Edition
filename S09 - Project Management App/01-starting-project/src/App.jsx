import {useState} from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projects, setProjects] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    function handleAddTask(text) {
        setProjects(prevState => {
            const taskId = Math.random();

            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId
            }

            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    function handleDeleteTask(id) {
        setProjects((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id),
            };
        })
    }

    function handleStartAddProject() {
        setProjects((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        })
    }

    function handleCancelAddProject() {
        setProjects((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        })
    }

    function handleAddProject(projectData) {
        setProjects(prevState => {
            const projectId = Math.random();

            const newProject = {
                ...projectData,
                id: projectId
            }

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    function handleSelectProject(id) {
        setProjects((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        })
    }

    function handleDeleteProject() {
        setProjects((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
            };
        })
    }

    const selectedProject = projects.projects.find(project => project.id === projects.selectedProjectId);

    let content = <SelectedProject project={selectedProject}
                                   tasks={projects.tasks}
                                   onDelete={handleDeleteProject}
                                   onAddTask={handleAddTask}
                                   onDeleteTask={handleDeleteTask}/>;

    if (projects.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
    } else if (projects.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

    return (
        <main className={"h-screen my-8 flex gap-8"}>
            <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projects.projects}
                             onSelectProject={handleSelectProject} selectedProjectId={projects.selectedProjectId}/>
            {content}
        </main>
    );
}

export default App;
