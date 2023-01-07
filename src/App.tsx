// import React from 'react';
// import logo from './assets/images/logo.png';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import AnchorButton from './components/buttons/AnchorButton';
// import FormButton from './components/buttons/FormButton';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import Blogs from './pages/blogs/Blogs';
import News from './pages/news/News';
import VerifyCertificate from './pages/verifyCertificate/VerifyCertificate';
import FillCourseForm from './pages/courses/FillCourseForm';

function App() {
  return (
    < >
      <Header />
      <main>
        <MyRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='courses' element={<Courses />} />
      <Route path='courses/:courseId' element={<FillCourseForm />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='news' element={<News />} />
      <Route path='verify-certificate' element={<VerifyCertificate />} />
    </Routes>
  );
}
