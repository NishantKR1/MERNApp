import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage'; // Assuming you created a FormPage component
import PostsPage from './components/PostsPage'; // Assuming you created a PostsPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home/form" element={<FormPage />} />
        <Route path="/home/posts" element={<PostsPage />} />
      </Routes>
    </Router>
  );
}

export default App;