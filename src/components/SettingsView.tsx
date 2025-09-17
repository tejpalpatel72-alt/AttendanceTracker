import React, { useState } from 'react';
import { 
  Settings,
  Users,
  Bell,
  Shield,
  Database,
  Wifi,
  QrCode,
  Camera,
  Fingerprint,
  Mail,
  Smartphone,
  Download,
  Upload,
  Calendar,
  Building2,
  UserCheck,
  Key,
  Globe,
  Clock,
  AlertTriangle,
  Check,
  X
} from 'lucide-react';

interface SettingSection {
  id: string;
  title: string;
  description: string;
  icon: any;
}

const settingSections: SettingSection[] = [
  {
    id: 'general',
    title: 'General Settings',
    description: 'System-wide configuration options',
    icon: Settings
  },
  {
    id: 'attendance',
    title: 'Attendance Methods',
    description: 'Configure attendance capture methods',
    icon: UserCheck
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Alert and notification preferences',
    icon: Bell
  },
  {
    id: 'users',
    title: 'User Management',
    description: 'Manage faculty and admin accounts',
    icon: Users
  },
  {
    id: 'departments',
    title: 'Departments & Classes',
    description: 'Organize academic structure',
    icon: Building2
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect with external systems',
    icon: Wifi
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    description: 'Security settings and data privacy',
    icon: Shield
  },
  {
    id: 'backup',
    title: 'Backup & Export',
    description: 'Data backup and export options',
    icon: Database
  }
];

export const SettingsView: React.FC = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [settings, setSettings] = useState({
    // General Settings
    institutionName: 'Punjab Engineering College',
    academicYear: '2024-25',
    defaultLanguage: 'en',
    timezone: 'Asia/Kolkata',
    
    // Attendance Methods
    qrCodeEnabled: true,
    facialRecognitionEnabled: true,
    biometricEnabled: false,
    gpsVerification: true,
    attendanceGracePeriod: 10,
    lateThresholdMinutes: 15,
    
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    lowAttendanceThreshold: 75,
    absenteeAlerts: true,
    weeklyReports: true,
    
    // Security
    sessionTimeout: 30,
    passwordExpiry: 90,
    twoFactorAuth: false,
    dataRetentionDays: 365,
    
    // Integrations
    lmsIntegration: false,
    erpIntegration: false,
    zoomIntegration: true,
    teamsIntegration: false
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Institution Name
          </label>
          <input
            type="text"
            value={settings.institutionName}
            onChange={(e) => handleSettingChange('institutionName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Academic Year
          </label>
          <select
            value={settings.academicYear}
            onChange={(e) => handleSettingChange('academicYear', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="2023-24">2023-24</option>
            <option value="2024-25">2024-25</option>
            <option value="2025-26">2025-26</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Default Language
          </label>
          <select
            value={settings.defaultLanguage}
            onChange={(e) => handleSettingChange('defaultLanguage', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="pa">Punjabi</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timezone
          </label>
          <select
            value={settings.timezone}
            onChange={(e) => handleSettingChange('timezone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
            <option value="Asia/Dubai">Asia/Dubai (GST)</option>
            <option value="UTC">UTC</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderAttendanceSettings = () => (
    <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-800 mb-4">Attendance Capture Methods</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <QrCode className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-800">QR Code Scanning</p>
                <p className="text-sm text-gray-500">Students scan QR codes to mark attendance</p>
              </div>
            </div>
            <button
              onClick={() => handleSettingChange('qrCodeEnabled', !settings.qrCodeEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.qrCodeEnabled ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.qrCodeEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Camera className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">Facial Recognition</p>
                <p className="text-sm text-gray-500">AI-powered face detection</p>
              </div>
            </div>
            <button
              onClick={() => handleSettingChange('facialRecognitionEnabled', !settings.facialRecognitionEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.facialRecognitionEnabled ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.facialRecognitionEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Fingerprint className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Biometric Scanner</p>
                <p className="text-sm text-gray-500">Fingerprint authentication</p>
              </div>
            </div>
            <button
              onClick={() => handleSettingChange('biometricEnabled', !settings.biometricEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.biometricEnabled ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.biometricEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-amber-600" />
              <div>
                <p className="font-medium text-gray-800">GPS Verification</p>
                <p className="text-sm text-gray-500">Location-based attendance</p>
              </div>
            </div>
            <button
              onClick={() => handleSettingChange('gpsVerification', !settings.gpsVerification)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.gpsVerification ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.gpsVerification ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attendance Grace Period (minutes)
          </label>
          <input
            type="number"
            value={settings.attendanceGracePeriod}
            onChange={(e) => handleSettingChange('attendanceGracePeriod', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            max="30"
          />
          <p className="text-sm text-gray-500 mt-1">Students can mark attendance within this time after class starts</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Late Threshold (minutes)
          </label>
          <input
            type="number"
            value={settings.lateThresholdMinutes}
            onChange={(e) => handleSettingChange('lateThresholdMinutes', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="1"
            max="60"
          />
          <p className="text-sm text-gray-500 mt-1">Students arriving after this time are marked as late</p>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-800 mb-4">Notification Channels</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-800">Email Notifications</p>
                <p className="text-sm text-gray-500">Send alerts via email</p>
              </div>
            </div>
            <button
              onClick={() => handleSettingChange('emailNotifications', !settings.emailNotifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">SMS Notifications</p>
                <p className="text-sm text-gray-500">Send alerts via SMS</p>
              </div>
            </div>
            <button
              onClick={() => handleSettingChange('smsNotifications', !settings.smsNotifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.smsNotifications ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Low Attendance Threshold (%)
          </label>
          <input
            type="number"
            value={settings.lowAttendanceThreshold}
            onChange={(e) => handleSettingChange('lowAttendanceThreshold', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="50"
            max="95"
          />
          <p className="text-sm text-gray-500 mt-1">Alert when student attendance falls below this percentage</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Daily Absentee Alerts</span>
            <button
              onClick={() => handleSettingChange('absenteeAlerts', !settings.absenteeAlerts)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.absenteeAlerts ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.absenteeAlerts ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Weekly Attendance Reports</span>
            <button
              onClick={() => handleSettingChange('weeklyReports', !settings.weeklyReports)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.weeklyReports ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.weeklyReports ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="15"
            max="120"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password Expiry (days)
          </label>
          <input
            type="number"
            value={settings.passwordExpiry}
            onChange={(e) => handleSettingChange('passwordExpiry', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="30"
            max="365"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data Retention Period (days)
          </label>
          <input
            type="number"
            value={settings.dataRetentionDays}
            onChange={(e) => handleSettingChange('dataRetentionDays', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="90"
            max="2555"
          />
        </div>
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <Key className="w-5 h-5 text-amber-600" />
            <div>
              <p className="font-medium text-gray-800">Two-Factor Authentication</p>
              <p className="text-sm text-gray-500">Require 2FA for all users</p>
            </div>
          </div>
          <button
            onClick={() => handleSettingChange('twoFactorAuth', !settings.twoFactorAuth)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );

  const renderIntegrationSettings = () => (
    <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-800 mb-4">External System Integrations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">LMS Integration</p>
              <p className="text-sm text-gray-500">Connect with Learning Management System</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${settings.lmsIntegration ? 'text-green-600' : 'text-gray-500'}`}>
                {settings.lmsIntegration ? 'Connected' : 'Disconnected'}
              </span>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Configure
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">ERP Integration</p>
              <p className="text-sm text-gray-500">Connect with College ERP System</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${settings.erpIntegration ? 'text-green-600' : 'text-gray-500'}`}>
                {settings.erpIntegration ? 'Connected' : 'Disconnected'}
              </span>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Configure
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Zoom Integration</p>
              <p className="text-sm text-gray-500">Track attendance in online classes</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${settings.zoomIntegration ? 'text-green-600' : 'text-gray-500'}`}>
                {settings.zoomIntegration ? 'Connected' : 'Disconnected'}
              </span>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Configure
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Microsoft Teams</p>
              <p className="text-sm text-gray-500">Track attendance in Teams meetings</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${settings.teamsIntegration ? 'text-green-600' : 'text-gray-500'}`}>
                {settings.teamsIntegration ? 'Connected' : 'Disconnected'}
              </span>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'general':
        return renderGeneralSettings();
      case 'attendance':
        return renderAttendanceSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'security':
        return renderSecuritySettings();
      case 'integrations':
        return renderIntegrationSettings();
      case 'users':
        return (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">User Management</h3>
            <p className="text-gray-500 mb-6">Manage faculty, admin, and student accounts</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Configure Users
            </button>
          </div>
        );
      case 'departments':
        return (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">Departments & Classes</h3>
            <p className="text-gray-500 mb-6">Manage academic structure and class organization</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Configure Departments
            </button>
          </div>
        );
      case 'backup':
        return (
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-medium text-gray-800 mb-4">Data Backup</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                  <Download className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Export All Data</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                  <Upload className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Import Data</span>
                </button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-medium text-gray-800 mb-4">Automatic Backup</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Enable automatic daily backups</p>
                  <p className="text-sm text-gray-500">Last backup: January 15, 2024 at 2:30 AM</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">System Settings</h1>
          <p className="text-gray-600 mt-1">Configure your attendance monitoring system</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <X className="w-4 h-4" />
            <span>Reset</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg">
            <Check className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="space-y-1">
              {settingSections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div>
                      <p className="font-medium text-sm">{section.title}</p>
                      <p className={`text-xs ${
                        activeSection === section.id ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {section.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {settingSections.find(s => s.id === activeSection)?.title}
              </h2>
              <p className="text-gray-600 mt-1">
                {settingSections.find(s => s.id === activeSection)?.description}
              </p>
            </div>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};