import { lazy } from 'react';
import Verify from '../verify/Verify';
import GraduateHeader from '../student/components/GraduateHeader';
import Doctor from '../pages/Doctor';
const FileFolder = lazy(() => import('../pages/Form/FileFolder'));
const Design = lazy(() => import('../pages/design/Design'));
const Chart = lazy(() => import('../pages/Chart'));
const GraduateSetup = lazy(() => import('../pages/Form/GraduateSetup'));
const EmployerSetup = lazy(() => import('../pages/Form/EmployerSetup'));
const EmailSetup = lazy(() => import('../pages/Form/EmailSetup'));
const CreateCertificate = lazy(() => import('../pages/CreateCertificate'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/design',
    title: 'Design',
    component: Design,
  },
  {
    path: '/create-certificate',
    title: 'Create Certificate',
    component: CreateCertificate,
  },
  {
    path: '/forms/graduate-setup',
    title: 'Graduate Setup',
    component: GraduateSetup,
  },
  {
    path: '/forms/employer-setup',
    title: 'Employer Setup',
    component: EmployerSetup,
  },
  {
    path: '/forms/email-setup',
    title: 'Email Setup',
    component: EmailSetup,
  },
  {
    path: '/files',
    title: 'Files folder',
    component: FileFolder,
  },
  {
   path: '/doctor',
    title: 'Doctor',
    component: Doctor,
  },
  {
    path: '/graduate',
    title: 'Graduate',
    component: GraduateHeader,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },

  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
