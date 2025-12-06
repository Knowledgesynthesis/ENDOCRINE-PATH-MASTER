import { useState } from 'react'
import {
  FolderOpen,
  ChevronRight,
  CircleDot,
  Layers,
  Activity,
  Brain,
  Grid3X3,
  Dna,
  Lightbulb,
  Eye,
  EyeOff,
  Target
} from 'lucide-react'
import { cn } from '../lib/utils'
import { SectionCard, FeatureList } from '../components/content'
import { Alert, Badge, Button, Card, CardContent } from '../components/ui'

interface CaseStudy {
  id: string
  title: string
  category: 'thyroid' | 'parathyroid' | 'adrenal' | 'pituitary' | 'net' | 'men'
  presentation: string
  clinicalHistory: string
  findings: string[]
  ihcResults?: { marker: string; result: string }[]
  molecularFindings?: string[]
  interpretation: string
  teachingPoints: string[]
}

const cases: CaseStudy[] = [
  {
    id: 'thyroid-01',
    title: 'Thyroid Nodule with Suspicious FNA',
    category: 'thyroid',
    presentation: 'A 45-year-old woman with a 2cm right thyroid nodule discovered incidentally on imaging.',
    clinicalHistory: 'No radiation exposure. No family history of thyroid cancer. TSH normal. FNA showed follicular lesion of undetermined significance (Bethesda III).',
    findings: [
      'Well-circumscribed nodule with thin fibrous capsule',
      'Follicular architecture throughout',
      'Focal areas of nuclear crowding',
      'Scattered nuclear grooves but no pseudoinclusions',
      'Capsule carefully examined - no transgression identified',
      'No vascular invasion in capsular vessels',
    ],
    ihcResults: [
      { marker: 'BRAF V600E', result: 'Negative' },
      { marker: 'HBME-1', result: 'Negative' },
      { marker: 'Galectin-3', result: 'Focal weak positive' },
    ],
    interpretation: 'Follicular adenoma. No evidence of capsular or vascular invasion to support carcinoma diagnosis.',
    teachingPoints: [
      'Entire capsule must be examined to exclude minimally invasive FTC',
      'Nuclear grooves alone are insufficient for PTC diagnosis',
      'IHC markers are adjunctive, not diagnostic',
      'Clinical follow-up appropriate',
    ],
  },
  {
    id: 'thyroid-02',
    title: 'Papillary Thyroid Carcinoma - Classic Features',
    category: 'thyroid',
    presentation: 'A 32-year-old woman with a 1.5cm thyroid nodule and enlarged cervical lymph node.',
    clinicalHistory: 'No risk factors. FNA of thyroid nodule showed papillary thyroid carcinoma.',
    findings: [
      'Complex branching papillae with fibrovascular cores',
      'Prominent nuclear features: grooves, pseudoinclusions, clearing',
      'Nuclear overlap and crowding',
      'Psammoma bodies present',
      'Metastatic carcinoma in lymph node with similar morphology',
    ],
    ihcResults: [
      { marker: 'TTF-1', result: 'Positive' },
      { marker: 'Thyroglobulin', result: 'Positive' },
      { marker: 'BRAF V600E', result: 'Positive' },
    ],
    interpretation: 'Classic papillary thyroid carcinoma with lymph node metastasis. BRAF V600E mutation positive.',
    teachingPoints: [
      'Classic PTC has papillary architecture + nuclear features',
      'BRAF V600E is most common mutation in classic PTC',
      'Lymph node metastasis common, affects staging but not dramatically prognosis',
      'Psammoma bodies are characteristic but not required',
    ],
  },
  {
    id: 'parathyroid-01',
    title: 'Parathyroid Lesion in Hypercalcemic Patient',
    category: 'parathyroid',
    presentation: 'A 55-year-old woman with hypercalcemia (Ca 11.8 mg/dL) and elevated PTH.',
    clinicalHistory: 'Found incidentally on routine labs. Kidney stones 5 years ago. No family history of MEN.',
    findings: [
      'Single enlarged gland (0.8g) submitted',
      'Well-circumscribed with thin capsule',
      'Sheets and nests of chief cells with reduced fat',
      'RIM OF COMPRESSED NORMAL parathyroid tissue at periphery',
      'No mitoses, no necrosis',
      'No capsular or vascular invasion',
      'Remaining glands reported as normal/small by surgeon',
    ],
    ihcResults: [
      { marker: 'PTH', result: 'Positive' },
      { marker: 'Chromogranin', result: 'Positive' },
      { marker: 'Parafibromin', result: 'Retained (positive)' },
      { marker: 'Ki-67', result: '<1%' },
    ],
    interpretation: 'Parathyroid adenoma. The rim of normal tissue and single gland involvement support adenoma over hyperplasia.',
    teachingPoints: [
      'Rim of normal parathyroid is key feature favoring adenoma',
      'Confirm other glands are normal to exclude asymmetric hyperplasia',
      'Retained parafibromin is expected in adenoma',
      'Chief cell type is most common',
    ],
  },
  {
    id: 'adrenal-01',
    title: 'Incidental Adrenal Mass',
    category: 'adrenal',
    presentation: 'A 60-year-old man with a 3cm adrenal mass found on CT for other reasons.',
    clinicalHistory: 'Non-functional (normal cortisol, aldosterone, catecholamines). No history of malignancy.',
    findings: [
      'Well-circumscribed mass with thin capsule',
      'Composed of cells with abundant clear (lipid-rich) cytoplasm',
      'Cells arranged in nests and cords resembling zona fasciculata',
      'No necrosis, mitoses <1/50 HPF',
      'No sinusoidal, venous, or capsular invasion',
      'Weiss score: 1 (diffuse architecture)',
    ],
    ihcResults: [
      { marker: 'SF1', result: 'Positive' },
      { marker: 'Inhibin', result: 'Positive' },
      { marker: 'Melan-A', result: 'Positive' },
      { marker: 'Chromogranin', result: 'Negative' },
    ],
    interpretation: 'Adrenal cortical adenoma. Weiss score 1/9. No features of malignancy.',
    teachingPoints: [
      'Most adrenal incidentalomas are benign cortical adenomas',
      'Weiss score ≥3 required for ACC diagnosis',
      'Clear cells (lipid-rich) favor benign adenoma',
      'Cortical markers (SF1, inhibin, Melan-A) confirm cortical origin',
    ],
  },
  {
    id: 'adrenal-02',
    title: 'Adrenal Mass with Hypertension',
    category: 'adrenal',
    presentation: 'A 40-year-old woman with severe episodic hypertension, headaches, and palpitations.',
    clinicalHistory: 'Elevated plasma metanephrines. CT shows 4cm adrenal mass.',
    findings: [
      'Well-circumscribed tumor with pushing borders',
      'Classic zellballen (cell ball) architecture',
      'Large polygonal cells with abundant granular basophilic cytoplasm',
      'Salt-and-pepper chromatin',
      'Scattered large bizarre nuclei present (degenerative)',
      'Peripheral S100+ sustentacular cells',
    ],
    ihcResults: [
      { marker: 'Chromogranin A', result: 'Strongly positive' },
      { marker: 'Synaptophysin', result: 'Positive' },
      { marker: 'S100', result: 'Positive (peripheral sustentacular cells)' },
      { marker: 'SF1', result: 'Negative' },
      { marker: 'SDHB', result: 'Retained' },
    ],
    interpretation: 'Pheochromocytoma with classic features. SDHB retained (not SDH-deficient). Nuclear pleomorphism is NOT a marker of malignancy.',
    teachingPoints: [
      'Zellballen pattern is characteristic of pheo',
      'Nuclear pleomorphism does NOT predict malignancy in pheo',
      'Only metastasis to non-chromaffin tissue confirms malignancy',
      'SDHB IHC screens for SDH gene mutations',
      'Genetic testing recommended for all pheo patients',
    ],
  },
  {
    id: 'pituitary-01',
    title: 'Sellar Mass with Visual Symptoms',
    category: 'pituitary',
    presentation: 'A 50-year-old man with progressive visual field defects and headaches.',
    clinicalHistory: 'MRI shows 2.5cm sellar mass with suprasellar extension. No hormonal symptoms. Labs: mild hyperprolactinemia (stalk effect), otherwise normal.',
    findings: [
      'Tumor with disrupted reticulin pattern (confirms adenoma)',
      'Monotonous cells with round nuclei and chromophobic cytoplasm',
      'No significant mitotic activity or necrosis',
      'Pseudorosette pattern focally',
    ],
    ihcResults: [
      { marker: 'Synaptophysin', result: 'Positive' },
      { marker: 'FSH', result: 'Weak patchy positive' },
      { marker: 'LH', result: 'Negative' },
      { marker: 'SF1', result: 'Positive (nuclear)' },
      { marker: 'GH, PRL, ACTH, TSH', result: 'All negative' },
      { marker: 'Ki-67', result: '2%' },
    ],
    interpretation: 'Gonadotroph PitNET (silent). Most common cause of clinically non-functioning pituitary adenoma.',
    teachingPoints: [
      'Silent gonadotroph = most common "non-functioning" PitNET',
      'SF1 is the lineage marker for gonadotrophs',
      'Mild hyperprolactinemia from stalk compression, not tumor secretion',
      'Hormone staining often weak/patchy in gonadotroph tumors',
      'Reticulin stain distinguishes hyperplasia (preserved) from adenoma (disrupted)',
    ],
  },
  {
    id: 'net-01',
    title: 'Liver Mass with Unknown Primary',
    category: 'net',
    presentation: 'A 55-year-old woman with multiple liver masses found on imaging.',
    clinicalHistory: 'No primary tumor identified on CT/MRI. Biopsy performed.',
    findings: [
      'Nested and trabecular architecture',
      'Uniform cells with round nuclei and salt-and-pepper chromatin',
      'Fine vascular network between nests',
      'Low mitotic rate (<2/10 HPF)',
    ],
    ihcResults: [
      { marker: 'Synaptophysin', result: 'Positive' },
      { marker: 'Chromogranin A', result: 'Positive' },
      { marker: 'CDX2', result: 'Positive (nuclear)' },
      { marker: 'Ki-67', result: '3%' },
      { marker: 'TTF-1', result: 'Negative' },
      { marker: 'PAX8', result: 'Negative' },
    ],
    interpretation: 'Well-differentiated neuroendocrine tumor, Grade 1 (Ki-67 3%), consistent with metastatic GI origin (CDX2+).',
    teachingPoints: [
      'Primary hepatic NET is extremely rare - always consider metastasis',
      'CDX2 positivity suggests GI (small intestine) primary',
      'Ki-67 determines grade: G1 <3%, G2 3-20%, G3 >20%',
      'Octreotide scan can help locate primary tumor',
    ],
  },
  {
    id: 'men-01',
    title: 'Young Patient with Bilateral Thyroid Nodules',
    category: 'men',
    presentation: 'A 25-year-old man with bilateral thyroid nodules and elevated calcitonin.',
    clinicalHistory: 'Mother had thyroid cancer. No symptoms of pheochromocytoma.',
    findings: [
      'Bilateral thyroid tumors with solid/trabecular architecture',
      'Cells with round to plasmacytoid morphology',
      'Salt-and-pepper chromatin',
      'Amyloid present in stroma (Congo red positive)',
      'Background C-cell hyperplasia in non-tumor thyroid',
    ],
    ihcResults: [
      { marker: 'Calcitonin', result: 'Positive' },
      { marker: 'CEA', result: 'Positive' },
      { marker: 'Chromogranin', result: 'Positive' },
      { marker: 'TTF-1', result: 'Positive' },
      { marker: 'Thyroglobulin', result: 'Negative' },
    ],
    molecularFindings: ['RET germline mutation detected (codon 634)'],
    interpretation: 'Bilateral medullary thyroid carcinoma with background C-cell hyperplasia. Germline RET mutation confirms MEN2A. Recommend screening for pheochromocytoma and parathyroid disease.',
    teachingPoints: [
      'Bilateral MTC + C-cell hyperplasia = hereditary',
      'RET germline testing required for all MTC patients',
      'MEN2A: MTC + pheo + parathyroid hyperplasia',
      'Codon 634 is high-risk - prophylactic thyroidectomy by age 5 recommended',
      'Screen for pheo BEFORE any surgery',
    ],
  },
]

const categoryConfig = {
  thyroid: { icon: CircleDot, color: 'from-cyan-500 to-blue-600', label: 'Thyroid' },
  parathyroid: { icon: Layers, color: 'from-emerald-500 to-teal-600', label: 'Parathyroid' },
  adrenal: { icon: Activity, color: 'from-amber-500 to-orange-600', label: 'Adrenal' },
  pituitary: { icon: Brain, color: 'from-violet-500 to-purple-600', label: 'Pituitary' },
  net: { icon: Grid3X3, color: 'from-pink-500 to-rose-600', label: 'NET' },
  men: { icon: Dna, color: 'from-indigo-500 to-blue-600', label: 'MEN' },
}

function CaseCard({ caseStudy, onClick }: { caseStudy: CaseStudy; onClick: () => void }) {
  const config = categoryConfig[caseStudy.category]
  const Icon = config.icon

  return (
    <Card hover className="cursor-pointer" onClick={onClick}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className={cn('w-10 h-10 rounded-lg bg-gradient-to-br flex-shrink-0 flex items-center justify-center', config.color)}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="default">{config.label}</Badge>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1 line-clamp-1">
              {caseStudy.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              {caseStudy.presentation}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
        </div>
      </CardContent>
    </Card>
  )
}

function CaseDetail({ caseStudy, onBack }: { caseStudy: CaseStudy; onBack: () => void }) {
  const [showInterpretation, setShowInterpretation] = useState(false)
  const [showTeachingPoints, setShowTeachingPoints] = useState(false)
  const config = categoryConfig[caseStudy.category]
  const Icon = config.icon

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
      >
        ← Back to case list
      </button>

      <div className="flex items-center gap-4">
        <div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center', config.color)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <Badge variant="default" className="mb-1">{config.label}</Badge>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">
            {caseStudy.title}
          </h1>
        </div>
      </div>

      <SectionCard title="Clinical Presentation" icon={FolderOpen}>
        <p className="text-slate-700 dark:text-slate-300 mb-4">{caseStudy.presentation}</p>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
          <h4 className="font-medium text-slate-900 dark:text-white mb-2">Clinical History</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">{caseStudy.clinicalHistory}</p>
        </div>
      </SectionCard>

      <SectionCard title="Microscopic Findings" icon={Eye}>
        <FeatureList items={caseStudy.findings} style="bullet" />
      </SectionCard>

      {caseStudy.ihcResults && (
        <SectionCard title="Immunohistochemistry Results" icon={Target}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {caseStudy.ihcResults.map((result, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                <span className="font-medium text-slate-900 dark:text-white">{result.marker}:</span>
                <span className="ml-2 text-slate-600 dark:text-slate-400">{result.result}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {caseStudy.molecularFindings && (
        <SectionCard title="Molecular Findings" icon={Dna}>
          <FeatureList items={caseStudy.molecularFindings} style="bullet" />
        </SectionCard>
      )}

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Interpretation
          </h3>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowInterpretation(!showInterpretation)}
          >
            {showInterpretation ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            {showInterpretation ? 'Hide' : 'Reveal'}
          </Button>
        </div>
        {showInterpretation ? (
          <p className="text-slate-700 dark:text-slate-300">{caseStudy.interpretation}</p>
        ) : (
          <p className="text-slate-500 dark:text-slate-500 italic">
            Click "Reveal" to see the interpretation. Try to form your own diagnosis first!
          </p>
        )}
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            Teaching Points
          </h3>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowTeachingPoints(!showTeachingPoints)}
          >
            {showTeachingPoints ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            {showTeachingPoints ? 'Hide' : 'Reveal'}
          </Button>
        </div>
        {showTeachingPoints ? (
          <FeatureList items={caseStudy.teachingPoints} style="numbered" />
        ) : (
          <p className="text-slate-500 dark:text-slate-500 italic">
            Click "Reveal" to see teaching points after reviewing the case.
          </p>
        )}
      </div>

      <Alert variant="warning" title="Educational Disclaimer">
        This is a synthetic case for educational purposes only. It should not be used for clinical diagnosis or patient care decisions.
      </Alert>
    </div>
  )
}

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const filteredCases = filter === 'all'
    ? cases
    : cases.filter(c => c.category === filter)

  if (selectedCase) {
    return (
      <div className="max-w-4xl mx-auto">
        <CaseDetail caseStudy={selectedCase} onBack={() => setSelectedCase(null)} />
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center">
          <FolderOpen className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Case Bank
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Integrated synthetic cases with reasoning
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All Cases
        </Button>
        {Object.entries(categoryConfig).map(([key, config]) => (
          <Button
            key={key}
            variant={filter === key ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter(key)}
          >
            {config.label}
          </Button>
        ))}
      </div>

      {/* Case Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredCases.map((caseStudy) => (
          <CaseCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            onClick={() => setSelectedCase(caseStudy)}
          />
        ))}
      </div>

      {filteredCases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-slate-400">No cases found for this category.</p>
        </div>
      )}

      <Alert variant="info" title="About the Case Bank">
        These synthetic cases are designed to reinforce key concepts from each module. Try to form your own diagnosis before revealing the interpretation!
      </Alert>
    </div>
  )
}
