import {
  Dna,
  Target,
  Layers,
  AlertTriangle,
  Microscope,
  Link2
} from 'lucide-react'
import { SectionCard, FeatureList, ComparisonCard } from '../components/content'
import { Alert, Table, Badge, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function MEN() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
          <Dna className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            MEN Syndromes
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Multiple Endocrine Neoplasia - Pathologic Concepts
          </p>
        </div>
      </div>

      {/* Overview */}
      <SectionCard title="MEN Syndromes Overview" icon={Link2}>
        <Alert variant="info" title="Definition">
          Multiple Endocrine Neoplasia (MEN) syndromes are inherited disorders characterized by tumors/hyperplasia in multiple endocrine glands. Autosomal dominant inheritance.
        </Alert>
        <div className="mt-6">
          <ComparisonCard
            title="MEN Syndrome Comparison"
            featureNames={['Gene', 'Chromosome', 'Mechanism', 'Parathyroid', 'Pituitary', 'Pancreas/GI', 'Thyroid', 'Adrenal', 'Other']}
            items={[
              {
                name: 'MEN1',
                features: {
                  'Gene': 'MEN1 (menin)',
                  'Chromosome': '11q13',
                  'Mechanism': 'Tumor suppressor loss',
                  'Parathyroid': 'Hyperplasia (95%)',
                  'Pituitary': 'PitNETs (40%)',
                  'Pancreas/GI': 'PanNETs (60%)',
                  'Thyroid': 'Rare',
                  'Adrenal': 'Cortical tumors (40%)',
                  'Other': 'Facial angiofibromas, collagenomas',
                },
              },
              {
                name: 'MEN2A',
                features: {
                  'Gene': 'RET',
                  'Chromosome': '10q11.2',
                  'Mechanism': 'Gain-of-function',
                  'Parathyroid': 'Hyperplasia (20-30%)',
                  'Pituitary': 'No',
                  'Pancreas/GI': 'No',
                  'Thyroid': 'MTC (100%)',
                  'Adrenal': 'Pheo (50%)',
                  'Other': 'Cutaneous lichen amyloidosis',
                },
              },
              {
                name: 'MEN2B',
                features: {
                  'Gene': 'RET (M918T)',
                  'Chromosome': '10q11.2',
                  'Mechanism': 'Gain-of-function',
                  'Parathyroid': 'Rare',
                  'Pituitary': 'No',
                  'Pancreas/GI': 'No',
                  'Thyroid': 'MTC (100%)',
                  'Adrenal': 'Pheo (50%)',
                  'Other': 'Mucosal neuromas, marfanoid habitus',
                },
              },
            ]}
          />
        </div>
      </SectionCard>

      {/* MEN1 */}
      <SectionCard title="MEN1 (Wermer Syndrome)" icon={Dna}>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-6">
          <p className="text-indigo-800 dark:text-indigo-300 font-medium">
            "3 P's": Parathyroid, Pituitary, Pancreas
          </p>
        </div>

        <Accordion type="multiple" defaultValue={['parathyroid']}>
          <AccordionItem value="parathyroid">
            <AccordionTrigger value="parathyroid">
              <div className="flex items-center gap-2">
                <Badge variant="primary">95%</Badge>
                Parathyroid Involvement
              </div>
            </AccordionTrigger>
            <AccordionContent value="parathyroid">
              <FeatureList
                style="check"
                items={[
                  'Most common and earliest manifestation',
                  'Multigland hyperplasia (not single adenoma)',
                  'Asymmetric involvement typical',
                  'Often presents by age 20-25',
                  'Recurrence after subtotal parathyroidectomy',
                  'Chief cell or water-clear cell hyperplasia',
                ]}
              />
              <Alert variant="pitfall" title="Surgical Consideration" className="mt-4">
                Single-gland surgery in MEN1 leads to high recurrence. Total parathyroidectomy with autotransplant preferred.
              </Alert>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pituitary">
            <AccordionTrigger value="pituitary">
              <div className="flex items-center gap-2">
                <Badge variant="accent">40%</Badge>
                Pituitary Involvement
              </div>
            </AccordionTrigger>
            <AccordionContent value="pituitary">
              <FeatureList
                style="check"
                items={[
                  'Most common: prolactinoma (60%)',
                  'GH-secreting (acromegaly) 25%',
                  'Non-functioning 15%',
                  'ACTH-secreting rare',
                  'Often macroadenomas, more aggressive',
                  'May be multicentric',
                ]}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pancreas">
            <AccordionTrigger value="pancreas">
              <div className="flex items-center gap-2">
                <Badge variant="warning">60%</Badge>
                Pancreatic/GI NETs
              </div>
            </AccordionTrigger>
            <AccordionContent value="pancreas">
              <FeatureList
                style="check"
                items={[
                  'Often multiple and microscopic',
                  'Gastrinoma most common functional type',
                  'Duodenal gastrinomas common',
                  'Non-functioning PanNETs frequent',
                  'Insulinoma in 10%',
                  'Main cause of morbidity/mortality',
                ]}
              />
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                  <h5 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Gastrinoma in MEN1</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Multiple, small, duodenal location common. ZES symptoms but malignant potential lower than sporadic.
                  </p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3">
                  <h5 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Insulinoma in MEN1</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    May be multiple (vs sporadic usually single). 10% of MEN1 patients. Higher malignant potential than sporadic.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="other">
            <AccordionTrigger value="other">
              <div className="flex items-center gap-2">
                <Badge variant="default">Variable</Badge>
                Other Manifestations
              </div>
            </AccordionTrigger>
            <AccordionContent value="other">
              <FeatureList
                style="bullet"
                items={[
                  'Adrenal cortical tumors (40%) - usually non-functional',
                  'Facial angiofibromas (85%)',
                  'Collagenomas (70%)',
                  'Lipomas (30%)',
                  'Thymic/bronchial carcinoid (rare but aggressive)',
                  'Meningiomas, ependymomas',
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionCard>

      {/* MEN2 */}
      <SectionCard title="MEN2 Syndromes (RET-Related)" icon={Dna}>
        <Alert variant="info" title="RET Proto-oncogene">
          MEN2 is caused by activating (gain-of-function) mutations in RET. Different mutations correlate with phenotype severity. Genetic testing guides management timing.
        </Alert>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* MEN2A */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg mb-4">MEN2A (Sipple Syndrome)</h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="danger">100%</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Medullary Thyroid Carcinoma</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Bilateral, multifocal MTC. C-cell hyperplasia precedes carcinoma. Prophylactic thyroidectomy based on RET mutation.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="warning">50%</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Pheochromocytoma</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Often bilateral. Epinephrine-predominant. Screen before thyroid surgery. Usually adrenal-confined.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="success">20-30%</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Parathyroid Hyperplasia</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Milder than MEN1. Usually multigland. May present with hypercalcemia.
                </p>
              </div>
            </div>
          </div>

          {/* MEN2B */}
          <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6">
            <h3 className="font-bold text-rose-800 dark:text-rose-300 text-lg mb-4">MEN2B</h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="danger">100%</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Aggressive MTC</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Earlier onset, more aggressive than MEN2A. May present in first year of life. Prophylactic thyroidectomy in infancy.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="warning">50%</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Pheochromocytoma</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Similar to MEN2A.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="accent">Characteristic</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Mucosal Neuromas</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Lips, tongue, eyelids. Ganglioneuromatosis of GI tract. Marfanoid body habitus.
                </p>
              </div>
            </div>
            <Alert variant="warning" title="M918T Mutation" className="mt-4">
              Most MEN2B cases have M918T RET mutation - highest risk category. ~50% de novo mutations.
            </Alert>
          </div>
        </div>
      </SectionCard>

      {/* Medullary Thyroid Carcinoma */}
      <SectionCard title="Medullary Thyroid Carcinoma (MTC) Pathology" icon={Target}>
        <div className="space-y-4">
          <FeatureList
            style="check"
            items={[
              'C-cell (parafollicular cell) origin',
              'Produces calcitonin (tumor marker)',
              'Amyloid stroma (Congo red positive) in 80%',
              'Variable architecture: solid, trabecular, insular',
              'Round to spindle cells with salt-and-pepper chromatin',
              'May have plasmacytoid, giant cell, or small cell variants',
            ]}
          />

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Sporadic MTC (75%)</h4>
              <FeatureList
                style="bullet"
                items={[
                  'Unilateral, unifocal',
                  'Older age at presentation',
                  'Somatic RET mutations in 50%',
                  'No C-cell hyperplasia in background',
                ]}
              />
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Hereditary MTC (25%)</h4>
              <FeatureList
                style="bullet"
                items={[
                  'Bilateral, multifocal',
                  'Younger age',
                  'C-cell hyperplasia in background',
                  'Germline RET mutation',
                ]}
              />
            </div>
          </div>
        </div>
      </SectionCard>

      {/* C-Cell Hyperplasia */}
      <SectionCard title="C-Cell Hyperplasia" icon={Layers}>
        <Alert variant="info" title="Precursor Lesion">
          C-cell hyperplasia (CCH) is the precursor to hereditary MTC. Identification in thyroidectomy specimens prompts genetic testing.
        </Alert>
        <div className="mt-4">
          <Table
            headers={['Type', 'Definition', 'Significance']}
            rows={[
              ['Physiologic', '<40 C-cells per low-power field', 'Normal, reactive'],
              ['Neoplastic', '>50 C-cells/LPF, diffuse, bilateral', 'MEN2-associated, premalignant'],
              ['Nodular', 'C-cells replacing/extending beyond follicles', 'Higher risk of MTC'],
            ]}
          />
        </div>
        <Alert variant="tip" title="Detection" className="mt-4">
          Calcitonin IHC required for identification. CEA also positive. TTF-1 positive; thyroglobulin negative.
        </Alert>
      </SectionCard>

      {/* IHC */}
      <SectionCard title="MTC IHC Panel" icon={Microscope}>
        <Table
          headers={['Marker', 'MTC', 'PTC/FTC', 'Notes']}
          rows={[
            ['Calcitonin', '+', '-', 'Sensitive and specific for MTC'],
            ['CEA', '+', '-', 'Prognostic marker'],
            ['Chromogranin', '+', '-', 'NE differentiation'],
            ['Synaptophysin', '+', '-', 'NE differentiation'],
            ['TTF-1', '+', '+', 'Positive in both'],
            ['Thyroglobulin', '-', '+', 'Key distinction'],
            ['PAX8', '-/weak', '+', 'Usually negative in MTC'],
          ]}
        />
      </SectionCard>

      {/* Genetic Testing */}
      <SectionCard title="Genetic Testing Implications" icon={Dna}>
        <Alert variant="warning" title="Clinical Impact">
          RET mutation testing determines timing of prophylactic thyroidectomy in MEN2 families.
        </Alert>
        <div className="mt-4">
          <Table
            headers={['Risk Category', 'RET Codons', 'Example', 'Thyroidectomy Timing']}
            rows={[
              ['Highest', '918', 'M918T (MEN2B)', 'First year of life'],
              ['High', '634, 883', 'C634R (MEN2A)', 'By age 5'],
              ['Moderate', '609, 611, 618, 620, 804, 891', 'Various', 'Before age 10 or based on calcitonin'],
            ]}
          />
        </div>
      </SectionCard>

      {/* Pitfalls */}
      <SectionCard title="Common Pitfalls" icon={AlertTriangle}>
        <div className="space-y-4">
          <Alert variant="pitfall" title="Sporadic vs Hereditary">
            All MTC patients should have RET germline testing. ~7% of "sporadic" cases have germline mutations.
          </Alert>
          <Alert variant="pitfall" title="MTC vs Other Thyroid Tumors">
            MTC can mimic other tumors. Always check calcitonin if tumor is not classic PTC/FTC. TTF-1 is positive in both MTC and follicular-derived tumors.
          </Alert>
          <Alert variant="pitfall" title="Single Adenoma in MEN">
            In MEN1, parathyroid disease is multigland hyperplasia, not single adenoma. Treating as adenoma leads to recurrence.
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
