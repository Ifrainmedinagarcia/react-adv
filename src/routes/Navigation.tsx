import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import { 
  DynamicForm,
  FormikAbstract,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from "../03-forms/pages" 
import logo from '../logo.svg';



export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/yup" activeClassName="nav-active" exact>Formik Yup Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-component" activeClassName="nav-active" exact>Formik Component</NavLink>
            </li>
            <li>
              <NavLink to="/FormikAbstract" activeClassName="nav-active" exact>Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/Register-Formik-Page" activeClassName="nav-active" exact>Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/DynamicForm" activeClassName="nav-active" exact>Dynamic Form</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-component">
            <FormikComponents />
          </Route>
          <Route path="/FormikAbstract">
            <FormikAbstract/>
          </Route>
          <Route path="/Register-Formik-Page">
            <RegisterFormikPage/>
          </Route>
          <Route path="/DynamicForm">
            <DynamicForm/>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}