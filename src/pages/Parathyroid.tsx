import {
  Layers,
  Target,
  AlertTriangle,
  Microscope
} from 'lucide-react'
import { SectionCard, DiagramCard, FeatureList, ContrastList, ComparisonCard } from '../components/content'
import { Alert, Table, Badge, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function Parathyroid() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
          <Layers className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Parathyroid Pathology
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Adenoma, hyperplasia, and carcinoma differentiation
          </p>
        </div>
      </div>

      {/* Normal Histology */}
      <SectionCard title="Normal Parathyroid Histology" icon={Layers}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <DiagramCard
            title="Chief Cells"
            description="Small, uniform cells with clear to amphophilic cytoplasm - PTH producing"
            icon={Target}
            iconColor="text-emerald-500"
            bgColor="bg-emerald-50 dark:bg-emerald-900/20"
          />
          <DiagramCard
            title="Oxyphil Cells"
            description="Larger cells with abundant eosinophilic granular cytoplasm (mitochondria)"
            icon={Layers}
            iconColor="text-amber-500"
            bgColor="bg-amber-50 dark:bg-amber-900/20"
          />
          <DiagramCard
            title="Adipose Tissue"
            description="Fat cells comprise ~50% of gland in adults - IMPORTANT diagnostic feature"
            icon={Target}
            iconColor="text-slate-500"
            bgColor="bg-slate-100 dark:bg-slate-800"
          />
        </div>
        <Alert variant="info" title="Key Concept">
          Normal parathyroid contains approximately 50% fat in adults. Fat content DECREASES in both adenoma and hyperplasia - this is a key distinguishing feature.
        </Alert>
      </SectionCard>

      {/* Main Comparison */}
      <ComparisonCard
        title="Adenoma vs Hyperplasia vs Carcinoma"
        featureNames={['Number of Glands', 'Fat Content', 'Capsule', 'Rim of Normal', 'Architecture', 'Weight', 'Clinical']}
        items={[
          {
            name: 'Adenoma',
            features: {
              'Number of Glands': 'Single gland enlarged',
              'Fat Content': 'Markedly reduced',
              'Capsule': 'Thin, intact',
              'Rim of Normal': 'Often present (key feature)',
              'Architecture': 'Sheets, cords, follicles',
              'Weight': '0.3-1g typical',
              'Clinical': 'Primary hyperparathyroidism',
            },
          },
          {
            name: 'Hyperplasia',
            features: {
              'Number of Glands': 'Multiple glands (≥2)',
              'Fat Content': 'Variably reduced',
              'Capsule': 'No true capsule',
              'Rim of Normal': 'Absent',
              'Architecture': 'Diffuse or nodular',
              'Weight': 'Variable',
              'Clinical': 'Primary or secondary',
            },
          },
          {
            name: 'Carcinoma',
            features: {
              'Number of Glands': 'Single mass',
              'Fat Content': 'Absent',
              'Capsule': 'Thick, invaded',
              'Rim of Normal': 'Absent',
              'Architecture': 'Solid, trabecular',
              'Weight': 'Often >1g',
              'Clinical': 'Severe hypercalcemia',
            },
          },
        ]}
      />

      {/* Adenoma */}
      <SectionCard title="Parathyroid Adenoma" icon={Target}>
        <div className="space-y-4">
          <FeatureList
            style="check"
            items={[
              'Single enlarged gland (double adenomas rare but exist)',
              'Well-circumscribed with thin capsule',
              'RIM OF NORMAL/COMPRESSED parathyroid tissue at periphery (KEY finding)',
              'Markedly reduced intracellular fat',
              'Chief cells predominate; may have oxyphil areas',
              'Remaining 3 glands normal or atrophic',
            ]}
          />

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <h4 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Architectural Patterns</h4>
              <FeatureList
                style="bullet"
                items={[
                  'Solid/sheet-like',
                  'Trabecular/cord-like',
                  'Follicular (may mimic thyroid)',
                  'Pseudopapillary',
                  'Mixed patterns common',
                ]}
              />
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Variants</h4>
              <FeatureList
                style="bullet"
                items={[
                  'Chief cell adenoma (most common)',
                  'Oxyphil/oncocytic adenoma',
                  'Water-clear cell adenoma (rare)',
                  'Lipoadenoma (abundant fat)',
                  'Atypical adenoma (see below)',
                ]}
              />
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Atypical Adenoma */}
      <SectionCard title="Atypical Parathyroid Adenoma" icon={AlertTriangle}>
        <Alert variant="warning" title="Definition">
          Adenoma with some worrisome features of carcinoma but lacking unequivocal invasion. Behavior is typically benign.
        </Alert>
        <div className="mt-4">
          <p className="font-medium text-slate-900 dark:text-white mb-3">Features that may be present:</p>
          <FeatureList
            style="bullet"
            items={[
              'Adherence to adjacent structures (without invasion)',
              'Fibrous bands/trabecular growth',
              'Increased mitotic activity',
              'Tumor cells in capsule (without through invasion)',
              'Mild nuclear atypia',
            ]}
          />
        </div>
        <Alert variant="pitfall" title="Key Point" className="mt-4">
          The diagnosis requires ABSENCE of: unequivocal vascular invasion, perineural invasion, invasion into adjacent structures, or metastasis.
        </Alert>
      </SectionCard>

      {/* Hyperplasia */}
      <SectionCard title="Parathyroid Hyperplasia" icon={Layers}>
        <Accordion type="multiple" defaultValue={['primary']}>
          <AccordionItem value="primary">
            <AccordionTrigger value="primary">
              <div className="flex items-center gap-2">
                <Badge variant="primary">Primary</Badge>
                Primary Hyperplasia
              </div>
            </AccordionTrigger>
            <AccordionContent value="primary">
              <div className="space-y-4">
                <FeatureList
                  style="check"
                  items={[
                    'All 4 glands typically involved (asymmetrically)',
                    'Associated with MEN1 or MEN2A',
                    'Chief cell or clear cell types',
                    'Reduced fat but variable between glands',
                    'NO rim of normal tissue',
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-medium text-slate-900 dark:text-white mb-2">Chief Cell Hyperplasia</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Diffuse or nodular proliferation of chief cells. Most common type. Diffuse pattern more common in MEN syndromes.
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-medium text-slate-900 dark:text-white mb-2">Water-Clear Cell Hyperplasia</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Rare. Large cells with abundant clear cytoplasm (glycogen). Always involves all glands diffusely.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="secondary">
            <AccordionTrigger value="secondary">
              <div className="flex items-center gap-2">
                <Badge variant="accent">Secondary/Tertiary</Badge>
                Secondary & Tertiary Hyperplasia
              </div>
            </AccordionTrigger>
            <AccordionContent value="secondary">
              <FeatureList
                style="check"
                items={[
                  'Secondary: Response to chronic hypocalcemia (renal failure, vitamin D deficiency)',
                  'Tertiary: Autonomous function after prolonged secondary (post-transplant)',
                  'All glands enlarged',
                  'Nodular pattern more common in longstanding disease',
                  'May develop clonal nodules resembling adenomas',
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionCard>

      {/* Carcinoma */}
      <SectionCard title="Parathyroid Carcinoma" icon={AlertTriangle}>
        <Alert variant="danger" title="Clinical Clue">
          Parathyroid carcinoma typically presents with SEVERE hypercalcemia ({'>'}14 mg/dL), palpable neck mass, and markedly elevated PTH. Rare ({'<'}1% of primary hyperparathyroidism).
        </Alert>

        <div className="mt-6 space-y-4">
          <h4 className="font-medium text-slate-900 dark:text-white">Diagnostic Criteria:</h4>

          <ContrastList
            positiveTitle="DEFINITIVE Features (any one = carcinoma)"
            negativeTitle="Supportive but NOT diagnostic"
            positive={[
              'Invasion into adjacent structures (thyroid, soft tissue)',
              'Vascular invasion (in or beyond capsule)',
              'Perineural invasion',
              'Lymph node or distant metastasis',
            ]}
            negative={[
              'Thick fibrous bands',
              'Trabecular/solid growth',
              'Capsular irregularity',
              'Increased mitoses',
              'Nuclear atypia',
              'Macronucleoli',
            ]}
          />

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mt-4">
            <h4 className="font-medium text-red-800 dark:text-red-300 mb-2">Molecular Features</h4>
            <FeatureList
              style="bullet"
              items={[
                'CDC73/HRPT2 inactivating mutations (most common)',
                'Loss of parafibromin expression (IHC surrogate)',
                'Associated with hyperparathyroidism-jaw tumor syndrome',
                'TP53 mutations in subset',
              ]}
            />
          </div>
        </div>
      </SectionCard>

      {/* IHC Panel */}
      <SectionCard title="Parathyroid IHC Panel" icon={Microscope}>
        <Table
          headers={['Marker', 'Function', 'Normal', 'Adenoma', 'Carcinoma']}
          rows={[
            ['PTH', 'Hormone confirmation', '+', '+', '+'],
            ['GATA3', 'Parathyroid marker', '+', '+', '+'],
            ['Chromogranin A', 'NE marker', '+', '+', '+'],
            ['Parafibromin', 'Tumor suppressor', '+', '+ (usually)', 'Lost in ~70%'],
            ['Ki-67', 'Proliferation', '<1%', 'Low', 'Often elevated'],
          ]}
        />
        <Alert variant="tip" title="Diagnostic Pearl" className="mt-4">
          Loss of parafibromin staining supports carcinoma but is not specific. Some adenomas (especially those with CDC73 mutations) also show loss.
        </Alert>
      </SectionCard>

      {/* Pitfalls */}
      <SectionCard title="Common Pitfalls" icon={AlertTriangle}>
        <div className="space-y-4">
          <Alert variant="pitfall" title="Hyperplasia vs Adenoma">
            A single enlarged gland does NOT automatically mean adenoma. Must confirm other glands are normal/atrophic. Look for rim of normal tissue.
          </Alert>
          <Alert variant="pitfall" title="Parathyroid vs Thyroid">
            Intrathyroidal parathyroid tissue can be mistaken for thyroid nodule. PTH and GATA3 positive; TTF-1 and thyroglobulin negative.
          </Alert>
          <Alert variant="pitfall" title="Atypical Adenoma vs Carcinoma">
            Without definitive invasion, cannot diagnose carcinoma. Worrisome features alone warrant close follow-up but not a malignant diagnosis.
          </Alert>
        </div>
      </SectionCard>

      {/* Educational Disclaimer */}
      <Alert variant="warning" title="Educational Disclaimer">
        This content is for educational purposes only and should not be used for clinical diagnosis or patient care decisions. All diagrams are synthetic representations.
      </Alert>
    </div>
  )
}
