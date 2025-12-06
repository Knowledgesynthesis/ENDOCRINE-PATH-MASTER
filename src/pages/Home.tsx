import { Link } from 'react-router-dom'
import {
  CircleDot,
  Layers,
  Activity,
  Brain,
  Grid3X3,
  Dna,
  Microscope,
  FlaskConical,
  AlertTriangle,
  FolderOpen,
  ClipboardList,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent } from '../components/ui'

const modules = [
  {
    id: 'thyroid',
    title: 'Thyroid Pathology',
    description: 'Follicular lesions, PTC variants, poorly differentiated carcinomas',
    icon: CircleDot,
    route: '/thyroid',
    color: 'from-cyan-500 to-blue-600',
    bgLight: 'bg-cyan-50 dark:bg-cyan-900/20',
  },
  {
    id: 'parathyroid',
    title: 'Parathyroid Pathology',
    description: 'Adenoma, hyperplasia, carcinoma differentiation',
    icon: Layers,
    route: '/parathyroid',
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    id: 'adrenal',
    title: 'Adrenal Pathology',
    description: 'Cortex and medulla lesions, pheochromocytoma',
    icon: Activity,
    route: '/adrenal',
    color: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    id: 'pituitary',
    title: 'Pituitary Pathology',
    description: 'PitNETs, hyperplasia, sellar region lesions',
    icon: Brain,
    route: '/pituitary',
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50 dark:bg-violet-900/20',
  },
  {
    id: 'net',
    title: 'Neuroendocrine Tumors',
    description: 'NETs, grading concepts, NEC patterns',
    icon: Grid3X3,
    route: '/net',
    color: 'from-pink-500 to-rose-600',
    bgLight: 'bg-pink-50 dark:bg-pink-900/20',
  },
  {
    id: 'men',
    title: 'MEN Syndromes',
    description: 'MEN1, MEN2, syndromic morphologic features',
    icon: Dna,
    route: '/men',
    color: 'from-indigo-500 to-blue-600',
    bgLight: 'bg-indigo-50 dark:bg-indigo-900/20',
  },
  {
    id: 'ihc',
    title: 'IHC Patterns',
    description: 'Immunohistochemistry frameworks by organ',
    icon: Microscope,
    route: '/ihc',
    color: 'from-teal-500 to-cyan-600',
    bgLight: 'bg-teal-50 dark:bg-teal-900/20',
  },
  {
    id: 'molecular',
    title: 'Molecular Concepts',
    description: 'BRAF, RAS, RET, TP53 high-level patterns',
    icon: FlaskConical,
    route: '/molecular',
    color: 'from-fuchsia-500 to-pink-600',
    bgLight: 'bg-fuchsia-50 dark:bg-fuchsia-900/20',
  },
  {
    id: 'pitfalls',
    title: 'Pitfalls & Mimics',
    description: 'Common diagnostic traps and how to avoid them',
    icon: AlertTriangle,
    route: '/pitfalls',
    color: 'from-red-500 to-rose-600',
    bgLight: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    id: 'cases',
    title: 'Case Bank',
    description: 'Integrated synthetic cases with reasoning',
    icon: FolderOpen,
    route: '/cases',
    color: 'from-slate-500 to-gray-600',
    bgLight: 'bg-slate-100 dark:bg-slate-800',
  },
  {
    id: 'assessment',
    title: 'Assessment',
    description: 'Session-based MCQ and pattern recognition',
    icon: ClipboardList,
    route: '/assessment',
    color: 'from-green-500 to-emerald-600',
    bgLight: 'bg-green-50 dark:bg-green-900/20',
  },
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-6">
          <Microscope className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Endocrine Path Master
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive, mobile-first educational platform for pathology residents covering endocrine pathology from benign to malignant lesions.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm">
          <AlertTriangle className="w-4 h-4" />
          Educational only - not for diagnosis or patient care
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.id} to={module.route}>
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {module.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {module.description}
                  </p>
                  <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Learning Objectives */}
      <div className="mt-12 card p-6 lg:p-8">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
          Learning Objectives
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Distinguish benign vs malignant thyroid patterns',
            'Differentiate follicular adenoma vs carcinoma via invasion concepts',
            'Recognize papillary thyroid carcinoma variants',
            'Identify parathyroid adenoma vs hyperplasia',
            'Classify adrenal cortical tumors using architecture and cytology',
            'Recognize pheochromocytoma and paraganglioma patterns',
            'Interpret pituitary adenoma patterns',
            'Recognize NET patterns & conceptual grading logic',
          ].map((objective, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs flex items-center justify-center font-medium">
                {i + 1}
              </span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{objective}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audience */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          { level: 'PGY-1 Resident', focus: 'Basic thyroid & adrenal patterns' },
          { level: 'PGY-3 Resident', focus: 'Tumor classification + molecular clues' },
          { level: 'Endocrine Path Fellow', focus: 'Rare variants, stromal patterns, molecular concepts' },
        ].map((persona, i) => (
          <div key={i} className="card p-4 text-center">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{persona.level}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{persona.focus}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
