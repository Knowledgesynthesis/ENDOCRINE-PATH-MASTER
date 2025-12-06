import {
  FlaskConical,
  Target,
  Layers,
  AlertTriangle,
  Dna,
  Activity
} from 'lucide-react'
import { SectionCard, DiagramCard, FeatureList } from '../components/content'
import { Alert, Table, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function Molecular() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center">
          <FlaskConical className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Molecular Concepts
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            High-level molecular patterns in endocrine pathology
          </p>
        </div>
      </div>

      {/* Overview */}
      <SectionCard title="Molecular Overview" icon={Dna}>
        <Alert variant="info" title="Educational Context">
          This module covers conceptual molecular frameworks relevant to endocrine pathology. Understanding these patterns helps integrate morphology, IHC, and molecular findings.
        </Alert>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <DiagramCard
            title="Driver Mutations"
            description="Single gene alterations driving tumorigenesis (e.g., BRAF, RET)"
            icon={Target}
            iconColor="text-fuchsia-500"
            bgColor="bg-fuchsia-50 dark:bg-fuchsia-900/20"
          />
          <DiagramCard
            title="Tumor Suppressors"
            description="Loss of function causing tumor development (e.g., MEN1, TP53)"
            icon={Layers}
            iconColor="text-blue-500"
            bgColor="bg-blue-50 dark:bg-blue-900/20"
          />
          <DiagramCard
            title="Gene Fusions"
            description="Chromosomal rearrangements creating oncogenic products"
            icon={Activity}
            iconColor="text-emerald-500"
            bgColor="bg-emerald-50 dark:bg-emerald-900/20"
          />
        </div>
      </SectionCard>

      {/* By Organ */}
      <Tabs defaultValue="thyroid">
        <TabsList className="flex-wrap">
          <TabsTrigger value="thyroid">Thyroid</TabsTrigger>
          <TabsTrigger value="adrenal">Adrenal/Pheo</TabsTrigger>
          <TabsTrigger value="pannet">PanNET</TabsTrigger>
          <TabsTrigger value="pituitary">Pituitary</TabsTrigger>
        </TabsList>

        {/* Thyroid */}
        <TabsContent value="thyroid">
          <div className="space-y-6">
            <SectionCard title="Thyroid Molecular Landscape" icon={Dna}>
              <Alert variant="info" title="TCGA Classification">
                The Cancer Genome Atlas (TCGA) classified PTC into BRAF-like (Type 1) and RAS-like (Type 2) molecular subtypes with distinct clinicopathologic features.
              </Alert>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <h4 className="font-bold text-rose-800 dark:text-rose-300">BRAF-like (Type 1)</h4>
                  </div>
                  <FeatureList
                    style="bullet"
                    items={[
                      'BRAF V600E mutation (most common)',
                      'RET/PTC rearrangements',
                      'Classic and tall cell PTC',
                      'More aggressive behavior',
                      'Higher MAPK pathway activation',
                      'Less iodine avidity',
                    ]}
                  />
                  <div className="mt-4 p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>BRAF V600E:</strong> Most common mutation in PTC (~45%). Associated with classic PTC, tall cell variant, extrathyroidal extension. IHC available (VE1 antibody).
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-300">RAS-like (Type 2)</h4>
                  </div>
                  <FeatureList
                    style="bullet"
                    items={[
                      'RAS mutations (NRAS, HRAS, KRAS)',
                      'PAX8-PPARG fusion',
                      'Follicular variant PTC, FTC',
                      'Encapsulated tumors',
                      'More indolent behavior',
                      'Better differentiation markers',
                    ]}
                  />
                  <div className="mt-4 p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>RAS mutations:</strong> Found in FTC, follicular variant PTC, and benign adenomas. Cannot distinguish benign/malignant. Associated with NIFTP.
                    </p>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Key Thyroid Molecular Patterns" icon={Target}>
              <Table
                headers={['Gene/Alteration', 'Tumor Type', 'Features', 'Frequency']}
                rows={[
                  ['BRAF V600E', 'Classic PTC, Tall cell', 'More aggressive', '45% of PTC'],
                  ['RAS (N/H/K)', 'FV-PTC, FTC, NIFTP', 'Follicular pattern', '10-20%'],
                  ['RET/PTC1,3', 'PTC', 'Radiation-associated', '10-20%'],
                  ['PAX8-PPARG', 'FTC, FV-PTC', 'Characteristic fusion', '30-40% FTC'],
                  ['TERT promoter', 'PTC, FTC, ATC', 'Poor prognosis', 'Higher grade'],
                  ['TP53', 'PDTC, ATC', 'Dedifferentiation', '~70% ATC'],
                ]}
              />
            </SectionCard>

            <SectionCard title="Anaplastic Thyroid Carcinoma" icon={AlertTriangle}>
              <Alert variant="danger" title="Molecular Evolution">
                ATC often evolves from well-differentiated carcinoma through accumulation of additional mutations (TP53, TERT, PIK3CA).
              </Alert>
              <div className="mt-4">
                <FeatureList
                  style="bullet"
                  items={[
                    'TP53 mutations: near-universal (~70%)',
                    'TERT promoter mutations: associated with aggressive behavior',
                    'BRAF V600E: retained from precursor PTC',
                    'PIK3CA/PTEN alterations: mTOR pathway activation',
                    'Targetable BRAF mutations may guide therapy',
                  ]}
                />
              </div>
            </SectionCard>

            <SectionCard title="Medullary Thyroid Carcinoma" icon={Dna}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Hereditary (25%)</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Germline RET mutations',
                      'MEN2A: codons 634, 618, 620, etc.',
                      'MEN2B: M918T (most aggressive)',
                      'Bilateral, multifocal',
                      'C-cell hyperplasia precursor',
                    ]}
                  />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-300 mb-2">Sporadic (75%)</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Somatic RET mutations (~50%)',
                      'RAS mutations in RET-negative cases',
                      'Unilateral, unifocal',
                      'No background C-cell hyperplasia',
                      'Still recommend germline testing',
                    ]}
                  />
                </div>
              </div>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Adrenal/Pheo */}
        <TabsContent value="adrenal">
          <div className="space-y-6">
            <SectionCard title="Adrenal Cortical Tumors" icon={Dna}>
              <Table
                headers={['Gene', 'Function', 'Tumor Association', 'Syndrome']}
                rows={[
                  ['TP53', 'Tumor suppressor', 'Pediatric ACC', 'Li-Fraumeni'],
                  ['CTNNB1', 'Wnt pathway', 'ACC (10-15%)', 'Sporadic'],
                  ['IGF2', 'Growth factor', 'Overexpressed in ACC', 'BWS'],
                  ['PRKAR1A', 'PKA regulatory', 'PPNAD', 'Carney complex'],
                  ['ARMC5', 'Novel tumor suppressor', 'Bilateral macronodular hyperplasia', 'Sporadic/familial'],
                ]}
              />
            </SectionCard>

            <SectionCard title="Pheochromocytoma/Paraganglioma Genetics" icon={AlertTriangle}>
              <Alert variant="warning" title="High Hereditary Rate">
                Up to 40% of pheos/PGLs have germline mutations. Genetic testing recommended for ALL patients.
              </Alert>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Susceptibility Gene Clusters</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                    <h5 className="font-medium text-violet-800 dark:text-violet-300 mb-2">Cluster 1: Pseudohypoxia</h5>
                    <FeatureList
                      style="bullet"
                      items={[
                        'SDHx (A, B, C, D, AF2)',
                        'VHL',
                        'FH',
                        'HIF2A/EPAS1',
                        'Noradrenergic phenotype',
                      ]}
                    />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h5 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Cluster 2: Kinase Signaling</h5>
                    <FeatureList
                      style="bullet"
                      items={[
                        'RET (MEN2)',
                        'NF1',
                        'MAX',
                        'TMEM127',
                        'Adrenergic phenotype',
                      ]}
                    />
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                    <h5 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Cluster 3: Wnt Signaling</h5>
                    <FeatureList
                      style="bullet"
                      items={[
                        'CSDE1',
                        'Somatic MAML3 fusions',
                        'Wnt pathway activation',
                        'Often sporadic',
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">SDH Gene Mutations</h4>
                <Table
                  headers={['Gene', 'Inheritance', 'Location Tendency', 'Malignancy Risk']}
                  rows={[
                    ['SDHB', 'AD', 'Extra-adrenal, thoracic', 'Highest (~40%)'],
                    ['SDHD', 'AD (paternal)', 'Head/neck PGL', 'Moderate'],
                    ['SDHC', 'AD', 'Head/neck, thoracic', 'Lower'],
                    ['SDHA', 'AD', 'Variable', 'Lower'],
                  ]}
                />
                <Alert variant="tip" title="SDHB IHC" className="mt-4">
                  Loss of SDHB immunostaining is a surrogate for SDH complex dysfunction (any SDH gene mutation). Recommend genetic testing if SDHB is lost.
                </Alert>
              </div>
            </SectionCard>
          </div>
        </TabsContent>

        {/* PanNET */}
        <TabsContent value="pannet">
          <div className="space-y-6">
            <SectionCard title="Pancreatic NET Molecular" icon={Dna}>
              <Alert variant="info" title="Overview">
                PanNETs have a distinct molecular landscape compared to NECs. Understanding these patterns helps distinguish NET G3 from NEC.
              </Alert>

              <div className="mt-6">
                <Table
                  headers={['Gene/Pathway', 'Function', 'Frequency', 'Implications']}
                  rows={[
                    ['MEN1', 'Tumor suppressor', '~40%', 'Sporadic and hereditary'],
                    ['DAXX/ATRX', 'Chromatin remodeling', '~40%', 'ALT phenotype, larger tumors'],
                    ['mTOR pathway', 'Cell growth', '~15%', 'mTOR inhibitor targets'],
                    ['TP53', 'Tumor suppressor', 'Rare in NET', 'Common in NEC'],
                    ['RB1', 'Cell cycle', 'Rare in NET', 'Common in NEC'],
                  ]}
                />
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Well-Diff NET Profile</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'MEN1, DAXX/ATRX mutations',
                      'mTOR pathway alterations',
                      'TP53/RB1 usually wild-type',
                      'Lower chromosomal instability',
                      'Applies to NET G1-G3',
                    ]}
                  />
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 dark:text-red-300 mb-2">NEC Profile</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'TP53 mutations (nearly universal)',
                      'RB1 loss (very common)',
                      'MEN1, DAXX/ATRX usually absent',
                      'High chromosomal instability',
                      'Different biology than NET G3',
                    ]}
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard title="DAXX/ATRX and ALT" icon={Target}>
              <FeatureList
                style="bullet"
                items={[
                  'DAXX and ATRX are chromatin remodeling proteins',
                  'Mutations lead to Alternative Lengthening of Telomeres (ALT)',
                  'Associated with larger tumor size and metastasis',
                  'IHC shows nuclear LOSS of DAXX or ATRX',
                  'Mutually exclusive (DAXX OR ATRX lost, not both)',
                  'Prognostic marker in PanNET',
                ]}
              />
            </SectionCard>
          </div>
        </TabsContent>

        {/* Pituitary */}
        <TabsContent value="pituitary">
          <div className="space-y-6">
            <SectionCard title="Pituitary Tumor Molecular" icon={Dna}>
              <Alert variant="info" title="Low Mutation Burden">
                PitNETs generally have low mutation burden compared to other tumors. Copy number changes and epigenetic alterations are more common.
              </Alert>

              <div className="mt-6">
                <Table
                  headers={['Gene', 'Tumor Type', 'Mechanism', 'Frequency']}
                  rows={[
                    ['GNAS', 'Somatotroph', 'Activating mutation', '40% sporadic acromegaly'],
                    ['USP8', 'Corticotroph', 'Gain-of-function', '40-60% Cushing'],
                    ['MEN1', 'Various', 'Tumor suppressor', 'Hereditary MEN1'],
                    ['AIP', 'Somatotroph', 'Tumor suppressor', 'Young-onset, familial'],
                    ['CDKN1B', 'Various', 'Cell cycle', 'MEN4'],
                  ]}
                />
              </div>

              <Accordion type="multiple" className="mt-6">
                <AccordionItem value="gnas">
                  <AccordionTrigger value="gnas">GNAS Mutations (McCune-Albright)</AccordionTrigger>
                  <AccordionContent value="gnas">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Activating mutation in Gs-alpha subunit',
                        'Constitutive cAMP signaling',
                        'Found in 40% of sporadic GH-secreting adenomas',
                        'Somatic mosaicism in McCune-Albright syndrome',
                        'Associated with densely granulated somatotroph PitNET',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="aip">
                  <AccordionTrigger value="aip">AIP Mutations (FIPA)</AccordionTrigger>
                  <AccordionContent value="aip">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Familial isolated pituitary adenoma (FIPA)',
                        'Young onset, aggressive somatotroph tumors',
                        'Usually sparsely granulated',
                        'Poor response to somatostatin analogs',
                        'Autosomal dominant with incomplete penetrance',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>
      </Tabs>

      {/* General Concepts */}
      <SectionCard title="Key Molecular Concepts" icon={FlaskConical}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">MAPK Pathway</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              RAS → RAF → MEK → ERK signaling cascade. Key in thyroid (BRAF, RAS), pheochromocytoma (RET, NF1).
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">mTOR Pathway</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              PI3K → AKT → mTOR signaling. Important in PanNETs (PTEN, TSC2). Therapeutic target.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Wnt/β-catenin Pathway</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Important in ACC (CTNNB1), craniopharyngioma (adamantinomatous type), some pheos.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Pseudohypoxia Pathway</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              SDH/VHL mutations → HIF stabilization → pseudohypoxic gene expression. Key in pheo/PGL.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Educational Disclaimer */}
      <Alert variant="warning" title="Educational Disclaimer">
        This content is for educational purposes only and should not be used for clinical diagnosis or patient care decisions. All diagrams are synthetic representations.
      </Alert>
    </div>
  )
}
