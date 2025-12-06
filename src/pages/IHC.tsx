import {
  Microscope,
  Target,
  AlertTriangle
} from 'lucide-react'
import { SectionCard, FeatureList, ContrastList } from '../components/content'
import { Alert, Table, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function IHC() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
          <Microscope className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            IHC Frameworks
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Immunohistochemistry patterns in endocrine pathology
          </p>
        </div>
      </div>

      {/* Overview */}
      <SectionCard title="IHC in Endocrine Pathology" icon={Microscope}>
        <Alert variant="info" title="Core Concept">
          IHC helps determine: (1) tissue/organ of origin, (2) cell lineage, (3) functional status, and (4) prognostic/predictive information. Build panels logically based on differential diagnosis.
        </Alert>
      </SectionCard>

      {/* By Organ */}
      <Tabs defaultValue="thyroid">
        <TabsList className="flex-wrap">
          <TabsTrigger value="thyroid">Thyroid</TabsTrigger>
          <TabsTrigger value="parathyroid">Parathyroid</TabsTrigger>
          <TabsTrigger value="adrenal">Adrenal</TabsTrigger>
          <TabsTrigger value="pituitary">Pituitary</TabsTrigger>
          <TabsTrigger value="net">NETs</TabsTrigger>
        </TabsList>

        {/* Thyroid */}
        <TabsContent value="thyroid">
          <div className="space-y-6">
            <SectionCard title="Thyroid IHC Panel" icon={Target}>
              <Table
                headers={['Marker', 'Cell Type', 'Pattern', 'Clinical Use']}
                rows={[
                  ['TTF-1', 'Follicular & C-cells', 'Nuclear', 'Thyroid origin, also lung'],
                  ['PAX8', 'Follicular cells', 'Nuclear', 'Thyroid/renal/Mullerian origin'],
                  ['Thyroglobulin', 'Follicular cells', 'Cytoplasmic', 'Specific for follicular differentiation'],
                  ['Calcitonin', 'C-cells (MTC)', 'Cytoplasmic', 'MTC diagnosis'],
                  ['CEA', 'C-cells (MTC)', 'Cytoplasmic', 'MTC, prognostic'],
                  ['BRAF V600E', 'PTC', 'Cytoplasmic', 'Mutation-specific'],
                ]}
              />

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Differential Diagnosis Panels</h4>
                <Accordion type="multiple">
                  <AccordionItem value="follicular-vs-metastasis">
                    <AccordionTrigger value="follicular-vs-metastasis">
                      Follicular-Derived Tumor vs Metastasis
                    </AccordionTrigger>
                    <AccordionContent value="follicular-vs-metastasis">
                      <ContrastList
                        positiveTitle="Thyroid Origin"
                        negativeTitle="Metastasis"
                        positive={[
                          'TTF-1 positive',
                          'PAX8 positive',
                          'Thyroglobulin positive',
                        ]}
                        negative={[
                          'Check for site-specific markers',
                          'CDX2 (GI)',
                          'PAX8+ER+WT1 (gynecologic)',
                          'PSA (prostate)',
                        ]}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mtc-vs-follicular">
                    <AccordionTrigger value="mtc-vs-follicular">
                      MTC vs Follicular-Derived Carcinoma
                    </AccordionTrigger>
                    <AccordionContent value="mtc-vs-follicular">
                      <Table
                        headers={['Marker', 'MTC', 'PTC/FTC', 'ATC']}
                        rows={[
                          ['Calcitonin', '+', '-', '-'],
                          ['CEA', '+', '-', '+/-'],
                          ['Chromogranin', '+', '-', '-'],
                          ['Thyroglobulin', '-', '+', '-'],
                          ['TTF-1', '+', '+', '-/+'],
                          ['PAX8', '-/weak', '+', '+/-'],
                        ]}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="atc-workup">
                    <AccordionTrigger value="atc-workup">
                      Anaplastic Thyroid Carcinoma Workup
                    </AccordionTrigger>
                    <AccordionContent value="atc-workup">
                      <FeatureList
                        style="bullet"
                        items={[
                          'PAX8 often retained (best marker for thyroid origin)',
                          'TTF-1 usually lost',
                          'Thyroglobulin negative',
                          'Cytokeratins variable',
                          'p53 mutant pattern (strong/null)',
                          'Check for residual differentiated component',
                        ]}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Parathyroid */}
        <TabsContent value="parathyroid">
          <div className="space-y-6">
            <SectionCard title="Parathyroid IHC Panel" icon={Target}>
              <Table
                headers={['Marker', 'Pattern', 'Utility']}
                rows={[
                  ['PTH', 'Cytoplasmic', 'Confirms parathyroid origin'],
                  ['GATA3', 'Nuclear', 'Parathyroid lineage marker'],
                  ['Chromogranin A', 'Cytoplasmic', 'NE marker, positive in parathyroid'],
                  ['Parafibromin', 'Nuclear', 'Lost in carcinoma (CDC73 mutation)'],
                  ['Ki-67', 'Nuclear', 'Proliferation index'],
                  ['TTF-1', 'Nuclear', 'Negative (vs thyroid)'],
                  ['Thyroglobulin', 'Cytoplasmic', 'Negative (vs thyroid)'],
                ]}
              />

              <Alert variant="tip" title="Key Panel" className="mt-4">
                PTH + GATA3 = confirms parathyroid. Add parafibromin if carcinoma suspected.
              </Alert>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Parathyroid vs Thyroid</h4>
                  <Table
                    headers={['Marker', 'Parathyroid', 'Thyroid']}
                    rows={[
                      ['PTH', '+', '-'],
                      ['GATA3', '+', '-'],
                      ['TTF-1', '-', '+'],
                      ['Thyroglobulin', '-', '+'],
                      ['Chromogranin', '+', '-/+'],
                    ]}
                  />
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 dark:text-red-300 mb-2">Carcinoma Assessment</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Parafibromin: LOST in ~70% carcinomas',
                      'Ki-67: Often elevated in carcinoma',
                      'Loss NOT specific - can occur in atypical adenomas',
                      'Retained expression does NOT exclude carcinoma',
                    ]}
                  />
                </div>
              </div>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Adrenal */}
        <TabsContent value="adrenal">
          <div className="space-y-6">
            <SectionCard title="Adrenal IHC Panel" icon={Target}>
              <Alert variant="warning" title="Critical First Step">
                Always determine cortical vs medullary origin first! Completely different tumor types and prognosis.
              </Alert>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-3">Adrenal Cortical Markers</h4>
                  <Table
                    headers={['Marker', 'Pattern', 'Note']}
                    rows={[
                      ['SF1', 'Nuclear', 'Most specific cortical marker'],
                      ['Inhibin-alpha', 'Cytoplasmic', 'Cortical (also sex cord-stromal)'],
                      ['Melan-A (A103)', 'Cytoplasmic', 'Cortical marker'],
                      ['Calretinin', 'Cytoplasmic/nuclear', 'Variable in cortex'],
                      ['Synaptophysin', 'Cytoplasmic', 'Can be weak positive!'],
                    ]}
                  />
                </div>
                <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-violet-800 dark:text-violet-300 mb-3">Adrenal Medullary Markers</h4>
                  <Table
                    headers={['Marker', 'Pattern', 'Note']}
                    rows={[
                      ['Chromogranin A', 'Cytoplasmic', 'Specific NE marker'],
                      ['Synaptophysin', 'Cytoplasmic', 'Sensitive NE marker'],
                      ['GATA3', 'Nuclear', 'Paraganglioma marker'],
                      ['S100', 'Nuclear/cytoplasmic', 'Sustentacular cells only'],
                      ['SDHB', 'Cytoplasmic', 'Lost in SDH-mutated'],
                      ['SF1', 'Nuclear', 'Negative in pheo'],
                    ]}
                  />
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Distinguishing Cortical vs Medullary</h4>
                <Table
                  headers={['Marker', 'Cortical', 'Medullary/Pheo']}
                  rows={[
                    ['SF1', '+ (strong)', '-'],
                    ['Inhibin', '+', '-'],
                    ['Melan-A', '+', '-'],
                    ['Chromogranin', '-', '+'],
                    ['S100 (sustentacular)', '-', '+ (peripheral)'],
                    ['Cytokeratins', '+/-', '-'],
                  ]}
                />
              </div>
            </SectionCard>

            <SectionCard title="SDHB in Pheochromocytoma/PGL" icon={AlertTriangle}>
              <Alert variant="info" title="SDH-Deficient Tumors">
                Loss of SDHB immunostaining indicates SDH gene mutation (SDHA, SDHB, SDHC, SDHD, SDHAF2). Important for genetic counseling and surveillance.
              </Alert>
              <div className="mt-4">
                <FeatureList
                  style="bullet"
                  items={[
                    'SDHB staining: surrogate for SDH complex integrity',
                    'Granular cytoplasmic staining = intact',
                    'Absent staining = SDH-deficient',
                    'SDHA loss only if SDHA mutated (can distinguish)',
                    'SDH-deficient tumors have higher malignant potential',
                    'Recommend genetic testing if SDHB lost',
                  ]}
                />
              </div>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Pituitary */}
        <TabsContent value="pituitary">
          <div className="space-y-6">
            <SectionCard title="Pituitary IHC Panel" icon={Target}>
              <Alert variant="info" title="Classification Approach">
                WHO 2022 classification requires hormone staining + transcription factors for complete PitNET classification.
              </Alert>

              <div className="mt-6">
                <Table
                  headers={['Cell Type', 'Hormones', 'Transcription Factors', 'Other']}
                  rows={[
                    ['Somatotroph', 'GH', 'PIT1', 'CAM5.2 (pattern specific)'],
                    ['Lactotroph', 'PRL', 'PIT1, ER', 'Dot pattern = sparse'],
                    ['Thyrotroph', 'TSH, α-SU', 'PIT1, GATA2', '-'],
                    ['Corticotroph', 'ACTH', 'TPIT', 'CAM5.2+, PAS+'],
                    ['Gonadotroph', 'FSH, LH, α-SU', 'SF1, GATA2', 'Often weak staining'],
                    ['Null cell', 'All negative', 'Variable', 'Diagnosis of exclusion'],
                  ]}
                />
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Basic Panel</h4>
                  <FeatureList
                    style="numbered"
                    items={[
                      'Synaptophysin (confirm NE)',
                      'GH, PRL, ACTH, TSH, FSH, LH',
                      'α-subunit if gonadotroph suspected',
                      'Ki-67 (proliferation)',
                    ]}
                  />
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-2">Transcription Factor Panel</h4>
                  <FeatureList
                    style="numbered"
                    items={[
                      'PIT1: somatotroph, lactotroph, thyrotroph',
                      'TPIT: corticotroph',
                      'SF1: gonadotroph',
                      'GATA2: gonadotroph, thyrotroph',
                    ]}
                  />
                </div>
              </div>

              <Alert variant="tip" title="Sparse vs Dense Granulation" className="mt-4">
                For somatotroph tumors: CAM5.2 pattern distinguishes dense (perinuclear) vs sparse (dot-like with fibrous body). Sparse granulated = more aggressive.
              </Alert>
            </SectionCard>
          </div>
        </TabsContent>

        {/* NETs */}
        <TabsContent value="net">
          <div className="space-y-6">
            <SectionCard title="NET IHC Panel" icon={Target}>
              <Table
                headers={['Marker', 'Sensitivity', 'Specificity', 'Notes']}
                rows={[
                  ['Synaptophysin', 'High', 'Moderate', 'Most sensitive NE marker'],
                  ['Chromogranin A', 'Moderate', 'High', 'Most specific NE marker'],
                  ['INSM1', 'High', 'High', 'Nuclear, useful for NEC'],
                  ['CD56', 'High', 'Low', 'Not specific, many tumors+'],
                  ['Ki-67', 'N/A', 'N/A', 'REQUIRED for grading'],
                ]}
              />

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Site-Specific Markers</h4>
                <Table
                  headers={['Site', 'Markers', 'Notes']}
                  rows={[
                    ['Pancreatic NET', 'Islet hormones, PAX8, ISL1', 'PAX8+ in majority'],
                    ['GI NET', 'CDX2, serotonin', 'CDX2+ in midgut NETs'],
                    ['Lung carcinoid', 'TTF-1, napsin-', 'TTF-1 may be negative'],
                    ['MTC', 'Calcitonin, CEA, TTF-1', 'PAX8 negative'],
                    ['Pheo/PGL', 'GATA3, SDHB', 'No epithelial markers'],
                  ]}
                />
              </div>

              <Alert variant="warning" title="NET G3 vs NEC" className="mt-4">
                Both have high Ki-67, but molecularly different. Check p53 (mutant pattern in NEC) and Rb (lost in NEC). DAXX/ATRX loss suggests NET G3 (pancreas).
              </Alert>
            </SectionCard>
          </div>
        </TabsContent>
      </Tabs>

      {/* General Principles */}
      <SectionCard title="General IHC Principles" icon={AlertTriangle}>
        <div className="space-y-4">
          <Alert variant="tip" title="Build Panels Logically">
            Start with markers that distinguish major categories, then refine. Don't order everything at once.
          </Alert>
          <Alert variant="pitfall" title="Interpret in Context">
            IHC results must be interpreted with H&E morphology. False positives/negatives occur. Weak staining may not be significant.
          </Alert>
          <Alert variant="pitfall" title="Technical Factors">
            Consider fixation, antigen retrieval, antibody clone differences. Internal positive controls essential.
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
