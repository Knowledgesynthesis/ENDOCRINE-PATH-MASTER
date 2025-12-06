import {
  Settings as SettingsIcon,
  Sun,
  Moon,
  Info,
  AlertTriangle,
  FileText,
  Heart
} from 'lucide-react'
import { useThemeStore } from '../store/themeStore'
import { SectionCard } from '../components/content'
import { Alert, Button, Card, CardContent } from '../components/ui'

export default function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center">
          <SettingsIcon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Settings
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Customize your experience
          </p>
        </div>
      </div>

      {/* Appearance */}
      <SectionCard title="Appearance" icon={theme === 'dark' ? Moon : Sun}>
        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              theme === 'dark'
                ? 'bg-slate-700 text-yellow-400'
                : 'bg-amber-100 text-amber-600'
            }`}>
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {theme === 'dark' ? 'Easier on the eyes in low light' : 'Better visibility in bright environments'}
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            onClick={toggleTheme}
            className="flex items-center gap-2"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            Switch to {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
        </div>
      </SectionCard>

      {/* About the App */}
      <SectionCard title="About the App" icon={Info}>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Endocrine Path Master
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Version 1.0.0
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                <strong className="text-slate-900 dark:text-white">Endocrine Path Master</strong> is an educational platform designed specifically for pathology residents and fellows learning endocrine pathology.
              </p>
              <p>
                The app covers comprehensive endocrine pathology topics including thyroid, parathyroid, adrenal, pituitary glands, neuroendocrine tumors, and MEN syndromes.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Key Features</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Mobile-first design</li>
                    <li>• Dark mode support</li>
                    <li>• Offline-ready (PWA)</li>
                    <li>• Icon-based diagrams</li>
                    <li>• Interactive case bank</li>
                    <li>• Self-assessment tools</li>
                  </ul>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Target Audience</h4>
                  <ul className="text-sm space-y-1">
                    <li>• PGY1-PGY4 residents</li>
                    <li>• Endocrine path fellows</li>
                    <li>• Board exam preparation</li>
                    <li>• Continuing education</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionCard>

      {/* Disclaimers */}
      <SectionCard title="Disclaimers" icon={AlertTriangle}>
        <div className="space-y-4">
          <Alert variant="warning" title="Educational Use Only">
            <p className="mb-2">
              This application is designed <strong>exclusively for educational purposes</strong>.
              It is intended to support learning and should not be used for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Clinical diagnosis</li>
              <li>Patient care decisions</li>
              <li>Treatment recommendations</li>
              <li>Medical advice</li>
            </ul>
          </Alert>

          <Alert variant="info" title="Content Disclaimer">
            <p className="mb-2">All content in this application is:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Synthetic and educational</strong> - No real patient data or images</li>
              <li><strong>Conceptual</strong> - Based on general educational principles</li>
              <li><strong>Not comprehensive</strong> - Does not replace formal medical education</li>
              <li><strong>Subject to limitations</strong> - May not reflect the latest guidelines</li>
            </ul>
          </Alert>

          <Alert variant="pitfall" title="No Protected Health Information">
            This application contains <strong>no PHI (Protected Health Information)</strong>,
            no real histology images, and no identifiable patient data. All cases are synthetic
            and created for educational demonstration only.
          </Alert>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mt-6">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-slate-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                  References & Alignment
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Content is conceptually aligned with standard references including WHO Classification
                  of Endocrine Tumors and major pathology textbooks. Users should always refer to
                  primary literature and institutional guidelines for clinical practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Privacy */}
      <SectionCard title="Privacy & Data" icon={Info}>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
          <h4 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">
            No Data Collection
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            This application does not collect, store, or transmit any personal data.
            All preferences (like dark mode) are stored locally on your device only.
            Assessment results are session-based and are not saved or tracked.
          </p>
        </div>
      </SectionCard>

      {/* Footer */}
      <div className="text-center text-sm text-slate-500 dark:text-slate-500 pt-8 border-t border-slate-200 dark:border-slate-700">
        <p>
          Built with care for pathology education.
        </p>
        <p className="mt-2">
          Educational content only - not for diagnosis or patient care.
        </p>
      </div>
    </div>
  )
}
