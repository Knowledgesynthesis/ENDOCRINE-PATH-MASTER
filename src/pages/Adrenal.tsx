import {
  Activity,
  Target,
  Layers,
  AlertTriangle,
  Microscope
} from 'lucide-react'
import { SectionCard, DiagramCard, FeatureList } from '../components/content'
import { Alert, Table, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function Adrenal() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
          <Activity className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Adrenal Pathology
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Cortex and medulla lesions - from adenoma to carcinoma
          </p>
        </div>
      </div>

      {/* Normal Histology */}
      <SectionCard title="Normal Adrenal Histology" icon={Layers}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Adrenal Cortex (3 zones)</h3>
            <div className="space-y-3">
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="warning">Outer</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Zona Glomerulosa</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Small clusters/arcs of cells. Mineralocorticoids (aldosterone). Low lipid.
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="primary">Middle</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Zona Fasciculata</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Parallel cords of large clear cells. Glucocorticoids (cortisol). Lipid-rich (clear cytoplasm).
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="accent">Inner</Badge>
                  <span className="font-medium text-slate-900 dark:text-white">Zona Reticularis</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Anastomosing cords. Androgens/DHEA. Compact eosinophilic cytoplasm. Contains lipofuscin.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Adrenal Medulla</h3>
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
              <DiagramCard
                title="Chromaffin Cells"
                description="Neuroendocrine cells producing catecholamines (epinephrine, norepinephrine). Arranged in nests with sustentacular cells at periphery."
                icon={Activity}
                iconColor="text-violet-500"
                bgColor="bg-violet-50 dark:bg-violet-900/20"
              />
            </div>
            <Alert variant="info" title="Developmental Note" className="mt-4">
              Medulla is neural crest-derived (neuroendocrine); cortex is mesoderm-derived. Different tumor types and markers!
            </Alert>
          </div>
        </div>
      </SectionCard>

      {/* Tabs for Cortex vs Medulla */}
      <Tabs defaultValue="cortex">
        <TabsList>
          <TabsTrigger value="cortex">Adrenal Cortex</TabsTrigger>
          <TabsTrigger value="medulla">Adrenal Medulla</TabsTrigger>
        </TabsList>

        {/* Adrenal Cortex */}
        <TabsContent value="cortex">
          <div className="space-y-6">
            {/* Adenoma */}
            <SectionCard title="Adrenal Cortical Adenoma (ACA)" icon={Target}>
              <FeatureList
                style="check"
                items={[
                  'Most common adrenal tumor - usually incidental',
                  'Well-circumscribed with thin capsule',
                  'Usually <5cm and <50g',
                  'Yellow cut surface (lipid-rich)',
                  'Resembles zona fasciculata (clear cells) or compact type',
                  'Low mitotic rate, no necrosis, no invasion',
                ]}
              />
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Functional Adenomas</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Cortisol-producing (Cushing)',
                      'Aldosterone-producing (Conn)',
                      'Sex steroid-producing (rare)',
                    ]}
                  />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-300 mb-2">Non-functional</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Most common type. Discovered incidentally on imaging. Benign course - often just followed.
                  </p>
                </div>
              </div>
            </SectionCard>

            {/* Carcinoma */}
            <SectionCard title="Adrenal Cortical Carcinoma (ACC)" icon={AlertTriangle}>
              <Alert variant="danger" title="Clinical Features">
                Rare but aggressive. Often functional (cortisol or androgens). Usually large ({'>'}5cm) at presentation. Peak in children (germline TP53) and 40-50 years.
              </Alert>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Weiss Scoring System</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Score ≥3 of 9 criteria indicates malignancy
                </p>
                <Table
                  headers={['Category', 'Criteria', 'Points']}
                  rows={[
                    ['Nuclear', 'High nuclear grade (Fuhrman III/IV)', '1'],
                    ['Nuclear', 'Mitotic rate >5/50 HPF', '1'],
                    ['Nuclear', 'Atypical mitoses', '1'],
                    ['Architecture', '<25% clear cells', '1'],
                    ['Architecture', 'Diffuse architecture (>33%)', '1'],
                    ['Invasion', 'Sinusoidal invasion', '1'],
                    ['Invasion', 'Venous invasion', '1'],
                    ['Invasion', 'Capsular invasion', '1'],
                    ['Necrosis', 'Necrosis present', '1'],
                  ]}
                />
              </div>

              <Alert variant="pitfall" title="Weiss System Limitations" className="mt-4">
                Oncocytic tumors score high on clear cell criterion artifactually. Use Lin-Weiss-Bisceglia system for oncocytic variants.
              </Alert>
            </SectionCard>

            {/* Oncocytic Tumors */}
            <SectionCard title="Oncocytic Adrenal Cortical Tumors" icon={Layers}>
              <FeatureList
                style="bullet"
                items={[
                  'Composed of >90% oncocytic cells',
                  'Abundant eosinophilic granular cytoplasm',
                  'Cannot use standard Weiss criteria',
                ]}
              />
              <div className="mt-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Lin-Weiss-Bisceglia Criteria</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-red-700 dark:text-red-400 mb-2">Major (any = malignant)</p>
                    <FeatureList
                      style="bullet"
                      items={[
                        'Mitotic rate >5/50 HPF',
                        'Atypical mitoses',
                        'Venous invasion',
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-2">Minor (1-4 = uncertain)</p>
                    <FeatureList
                      style="bullet"
                      items={[
                        'Large size >10cm and/or >200g',
                        'Necrosis',
                        'Capsular invasion',
                        'Sinusoidal invasion',
                      ]}
                    />
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* Other Cortical Lesions */}
            <SectionCard title="Other Cortical Lesions" icon={Layers}>
              <Accordion type="multiple">
                <AccordionItem value="hyperplasia">
                  <AccordionTrigger value="hyperplasia">Cortical Hyperplasia</AccordionTrigger>
                  <AccordionContent value="hyperplasia">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                        <h5 className="font-medium text-slate-900 dark:text-white mb-2">Diffuse Hyperplasia</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Bilateral adrenal enlargement. ACTH-dependent (Cushing disease) or primary pigmented nodular disease.
                        </p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                        <h5 className="font-medium text-slate-900 dark:text-white mb-2">Nodular Hyperplasia</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Multiple nodules in both glands. May be macronodular ({'>'}1cm) or micronodular ({'<'}1cm).
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="myelolipoma">
                  <AccordionTrigger value="myelolipoma">Myelolipoma</AccordionTrigger>
                  <AccordionContent value="myelolipoma">
                    <FeatureList
                      style="check"
                      items={[
                        'Benign tumor of mature adipose tissue + hematopoietic elements',
                        'All three cell lines (like bone marrow)',
                        'Usually incidental, can be large',
                        'Fat visible on CT (diagnostic)',
                        'No malignant potential',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Adrenal Medulla */}
        <TabsContent value="medulla">
          <div className="space-y-6">
            {/* Pheochromocytoma */}
            <SectionCard title="Pheochromocytoma" icon={Activity}>
              <Alert variant="info" title="Definition">
                Catecholamine-producing tumor arising from chromaffin cells of adrenal medulla. Extra-adrenal tumors are called paragangliomas.
              </Alert>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Classic Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                    <h5 className="font-medium text-violet-800 dark:text-violet-300 mb-2">Zellballen Pattern</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Characteristic "cell balls" - nests of tumor cells surrounded by delicate vascular network with peripheral sustentacular cells.
                    </p>
                    <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                      <div className="grid grid-cols-3 gap-2">
                        {[1,2,3,4,5,6].map(i => (
                          <div key={i} className="w-8 h-8 rounded-lg border-2 border-violet-400 bg-violet-100 dark:bg-violet-900/40" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-white mb-2">Cytologic Features</h5>
                    <FeatureList
                      style="bullet"
                      items={[
                        'Large polygonal cells',
                        'Abundant granular basophilic cytoplasm',
                        'Salt-and-pepper chromatin',
                        'May show marked pleomorphism',
                        'Hyaline globules common',
                        'Pleomorphism does NOT predict behavior',
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">"Rule of 10s" (Traditional)</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {['Extra-adrenal', 'Bilateral', 'Malignant', 'Familial', 'Pediatric'].map((item, i) => (
                    <div key={i} className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                      <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">~10%</span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item}</p>
                    </div>
                  ))}
                </div>
                <Alert variant="warning" title="Updated Understanding" className="mt-4">
                  Up to 40% of pheos are now known to have germline mutations. Genetic testing recommended for all patients.
                </Alert>
              </div>
            </SectionCard>

            {/* PASS Score */}
            <SectionCard title="PASS (Pheochromocytoma of the Adrenal Gland Scaled Score)" icon={AlertTriangle}>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Score ≥4 indicates potential for malignant behavior. However, metastasis is the only reliable indicator of malignancy.
              </p>
              <Table
                headers={['Feature', 'Points']}
                rows={[
                  ['Large nests or diffuse growth', '2'],
                  ['Central/confluent necrosis', '2'],
                  ['High cellularity', '2'],
                  ['Cellular monotony', '2'],
                  ['Tumor spindle cells', '2'],
                  ['Mitoses >3/10 HPF', '2'],
                  ['Atypical mitoses', '2'],
                  ['Invasion (capsular/vascular)', '1'],
                  ['Extension into adipose', '2'],
                  ['Nuclear pleomorphism', '1'],
                  ['Nuclear hyperchromasia', '1'],
                ]}
              />
              <Alert variant="pitfall" title="Important Limitation" className="mt-4">
                No histologic features reliably predict malignancy. Only metastasis to non-chromaffin tissue confirms malignancy.
              </Alert>
            </SectionCard>

            {/* IHC */}
            <SectionCard title="Pheochromocytoma IHC" icon={Microscope}>
              <Table
                headers={['Marker', 'Tumor Cells', 'Sustentacular Cells', 'Notes']}
                rows={[
                  ['Chromogranin A', '+', '-', 'Most specific NE marker'],
                  ['Synaptophysin', '+', '-', 'Sensitive NE marker'],
                  ['GATA3', '+', '-', 'Paraganglioma marker'],
                  ['S100', '-', '+', 'Highlights sustentacular cells'],
                  ['SDHB', '+', '-', 'Lost in SDH-mutated tumors'],
                  ['SF1', '-', '-', 'Negative (vs cortical tumors)'],
                ]}
              />
            </SectionCard>
          </div>
        </TabsContent>
      </Tabs>

      {/* Overall IHC Panel */}
      <SectionCard title="Adrenal Cortical IHC Panel" icon={Microscope}>
        <Table
          headers={['Marker', 'Cortical Tumors', 'Pheo/PGL', 'Notes']}
          rows={[
            ['SF1', '+', '-', 'Most specific cortical marker'],
            ['Inhibin', '+', '-', 'Cortical marker'],
            ['Melan-A (A103)', '+', '-', 'Cortical marker'],
            ['Calretinin', '+/-', '-', 'Variable'],
            ['Chromogranin', '-', '+', 'Medullary/NE'],
            ['Synaptophysin', '-/+', '+', 'Weak in cortex'],
            ['S100 (sustentacular)', '-', '+ (peripheral)', 'Zellballen pattern'],
          ]}
        />
      </SectionCard>

      {/* Pitfalls */}
      <SectionCard title="Common Pitfalls" icon={AlertTriangle}>
        <div className="space-y-4">
          <Alert variant="pitfall" title="Cortical vs Medullary">
            Always determine if tumor is cortical or medullary origin first - completely different tumor types and prognosis. Use SF1 vs chromogranin.
          </Alert>
          <Alert variant="pitfall" title="ACC vs Metastasis">
            Adrenal is common site for metastases (lung, breast, melanoma). Use cortical markers to confirm primary adrenal origin.
          </Alert>
          <Alert variant="pitfall" title="Pheochromocytoma Pleomorphism">
            Extreme nuclear pleomorphism in pheos is NOT a predictor of malignancy. Only metastasis confirms malignant potential.
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
