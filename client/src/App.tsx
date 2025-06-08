import TaskList from "./components/TaskList";

const App = () => {
    return (
        <div className="p-8">
            <h1 className="mb-12 text-3xl font-bold text-center">My Tasks</h1>
            <TaskList />
        </div>
    );
};
export default App;
