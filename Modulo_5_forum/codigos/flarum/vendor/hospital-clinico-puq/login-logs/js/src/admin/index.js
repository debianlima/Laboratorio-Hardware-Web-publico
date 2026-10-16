import app from 'flarum/admin/app';
import StatisticsPage from 'flarum/admin/components/StatisticsPage';
import LoginLogsPage from './components/LoginLogsPage';

app.initializers.add('hospital-clinico-puq-login-logs', () => {
  app.extensionData
    .for('hospital-clinico-puq-login-logs')
    .registerPage(LoginLogsPage);
  console.log('Login Logs admin extension asdinitialized');
});
