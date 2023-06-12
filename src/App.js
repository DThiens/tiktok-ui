import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import Homepage from '~/pages/Home';
import ContactPage from '~/pages/Contact';
import NewsPage from '~/pages/News';
import { DefaultLayout } from '~/components/Layout';
import GlobalStyles from './components/GlobalStyles';

function App() {
    // const [state, dispatch] = useStore()
    // const {todos, todoInput} = state
    // const handleAdd = () => {
    //   dispatch(actions.addTodo(todoInput))
    // }

    return (
        // <div>

        //   <input
        //     value={state.todoInput}
        //     placeholder = "Enter to do..."
        //     onChange = {e => {
        //       dispatch(actions.setToDoInput(e.target.value))
        //     }}
        //   >
        //   </input>
        //   <button onClick={handleAdd}>Add</button>
        //   {todos.map((todo, index) => (
        //     <li key={index} className='dark'>
        //       {todo}
        //       <span onClick={() => dispatch(deleteTodo(index))}>&times;</span>
        //     </li>
        //   ))}
        // </div>
        <div className="App">
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
