

import React from 'react';
import { useRoutes } from 'react-router-dom';

// Import all route components
import Home from './components/User-Front-end/Home/Home.jsx';
import AboutUs from './components/User-Front-end/About us/AboutUs.jsx';
import FeaturesPage from './components/User-Front-end/Feature page/FeaturesPage.jsx';
import Pricing from './components/User-Front-end/Pricing/Pricing.jsx';
import Login from './components/login/Login.jsx';
import DashBoard from './components/dashboard/DashBoard.jsx';
import MediaManagerTable from './components/media-manager/MediaManagerTable.jsx';
import MediaManagerDetailpage from './components/media-manager/MediaManaerDetailpage.jsx';
import EventsList from './components/events/EventList.jsx';
import ViewEvent from './components/events/ViewEvent.jsx';
import EditEvent from './components/events/EditEvent.jsx';
import UsersList from './components/User-List/UsersList.jsx';
import UserDetail from './components/User-List/UserDetail.jsx';
import SubscriptionsList from './components/subscriptions/subcriptionsList.jsx';
import AddSubscription from './components/subscriptions/AddSubcription.jsx';
import TransactionLogs from './components/transaction-logs/TransactionLogs.jsx';
import Profile from './components/profile/Profile.jsx';
import CreateNewPassword from './components/login/Password/CreateNewPassword.jsx';
import ForgotPassword from './components/login/Password/ForgetPassword.jsx';
import SignUp from './components/Media-User-Front-end/componets-user-end/Signup pages/SignUp.jsx';
import VerificationPage from './components/Media-User-Front-end/componets-user-end/Signup pages/VerificationPage.jsx';
import WelcomeScreen from './components/Media-User-Front-end/componets-user-end/Welcome/WelcomeScreen.jsx';
import WelcomePlan from './components/Media-User-Front-end/componets-user-end/Welcome/WelcomePlan.jsx';
import WelcomeConfirmation from './components/Media-User-Front-end/componets-user-end/Welcome/WelcomeConfirmation.jsx';
import MediaDashboard from './components/Media-User-Front-end/Media-Dashboard/MediaDashboad.jsx';
import MediaSubcription from './components/Media-User-Front-end/Manage Subscriptions/MediaSubcription.jsx';
import ManagePayments from './components/Media-User-Front-end/Manage Payments/ManagePayments.jsx';
import UploadPhotos from './components/events/UploadPhotos.jsx';
import EventPhotos from './components/events/EventPhotos.jsx';

export default function AppRoutes({setIsLoggedIn}) {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/aboutus', element: <AboutUs /> },
    { path: '/features', element: <FeaturesPage /> },
    { path: '/pricing', element: <Pricing /> },
    { path: '/login', element: <Login setIsLoggedIn={setIsLoggedIn}  /> },
    { path: '/dashboard', element: <DashBoard /> },
    { path: '/media-manager', element: <MediaManagerTable /> },
    { path: '/media-manager/:id', element: <MediaManagerDetailpage /> },
    { path: '/events', element: <EventsList /> },
    { path: '/viewevent', element: <ViewEvent /> },
    { path: '/editevent', element: <EditEvent /> },
    { path: '/userslist', element: <UsersList /> },
    { path: '/userDetail', element: <UserDetail /> },
    { path: '/subscriptions', element: <SubscriptionsList /> },
    { path: '/subscriptions/add', element: <AddSubscription /> },
    { path: '/transaction-logs', element: <TransactionLogs /> },
    { path: '/profile', element: <Profile /> },
    { path: '/changepassword', element: <CreateNewPassword /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/verification', element: <VerificationPage /> },
    { path: '/welcomescreen', element: <WelcomeScreen /> },
    { path: '/welcomeplan', element: <WelcomePlan /> },
    { path: '/welcomeconfirmation', element: <WelcomeConfirmation /> },
    { path: '/media-dashboard', element: <MediaDashboard /> },
    { path: '/media-subcription', element: <MediaSubcription /> },
    { path: '/manage-payments', element: <ManagePayments /> },
    { path: '/upload-photos', element: <UploadPhotos /> },
    { path: '/event-photos', element: <EventPhotos /> },
    { path: '*', element: <h1>404 Not Found</h1> }
  ]);

  return routes;
}

