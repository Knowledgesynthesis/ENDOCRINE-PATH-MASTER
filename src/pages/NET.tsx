import {
  Grid3X3,
  Target,
  Layers,
  AlertTriangle,
  Microscope,
  Activity
} from 'lucide-react'
import { SectionCard, DiagramCard, FeatureList, ComparisonCard } from '../components/content'
import { Alert, Table, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function NET() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
          <Grid3X3 className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Neuroendocrine Tumors (NETs)
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Classification, grading, and pattern recognition
          </p>
        </div>
      </div>

      {/* Overview */}
      <SectionCard title="NET Overview" icon={Grid3X3}>
        <Alert variant="info" title="Definition">
          Neuroendocrine tumors are epithelial neoplasms with neuroendocrine differentiation, arising from cells of the diffuse neuroendocrine system throughout the body.
        </Alert>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <DiagramCard
            title="Organoid Nests"
            description="Cells arranged in nests, trabeculae, or cords with fine vascular network"
            icon={Grid3X3}
            iconColor="text-pink-500"
            bgColor="bg-pink-50 dark:bg-pink-900/20"
          />
          <DiagramCard
            title="Salt & Pepper Chromatin"
            description="Finely granular, evenly dispersed nuclear chromatin - classic NE feature"
            icon={Target}
            iconColor="text-violet-500"
            bgColor="bg-violet-50 dark:bg-violet-900/20"
          />
          <DiagramCard
            title="Cytoplasmic Granules"
            description="Dense-core neurosecretory granules (chromogranin/synaptophysin positive)"
            icon={Layers}
            iconColor="text-emerald-500"
            bgColor="bg-emerald-50 dark:bg-emerald-900/20"
          />
        </div>
      </SectionCard>

      {/* Classification */}
      <SectionCard title="WHO Classification Framework" icon={Layers}>
        <ComparisonCard
          title="NET vs NEC"
          featureNames={['Differentiation', 'Architecture', 'Ki-67', 'Mitoses', 'Necrosis', 'Molecular', 'Prognosis']}
          items={[
            {
              name: 'Well-Diff NET (G1-G3)',
              features: {
                'Differentiation': 'Well-differentiated',
                'Architecture': 'Organoid (nests, trabeculae)',
                'Ki-67': 'G1: <3%, G2: 3-20%, G3: >20%',
                'Mitoses': 'G1: <2, G2: 2-20, G3: >20',
                'Necrosis': 'Usually absent',
                'Molecular': 'MEN1, DAXX/ATRX, mTOR pathway',
                'Prognosis': 'Generally favorable, grade dependent',
              },
            },
            {
              name: 'Poorly-Diff NEC',
              features: {
                'Differentiation': 'Poorly differentiated',
                'Architecture': 'Sheets, diffuse',
                'Ki-67': 'Usually >55%',
                'Mitoses': 'Usually >20',
                'Necrosis': 'Often present',
                'Molecular': 'TP53, RB1 mutations',
                'Prognosis': 'Aggressive',
              },
            },
          ]}
        />
        <Alert variant="warning" title="Critical Distinction" className="mt-4">
          G3 NET (well-differentiated with high Ki-67) is different from NEC (poorly differentiated). They have different molecular profiles and treatment approaches.
        </Alert>
      </SectionCard>

      {/* Grading */}
      <SectionCard title="NET Grading (WHO 2019 GI/Pancreas)" icon={Target}>
        <Table
          headers={['Grade', 'Mitoses (/10 HPF)', 'Ki-67 Index', 'Differentiation']}
          rows={[
            ['G1 (Low)', '<2', '<3%', 'Well-differentiated'],
            ['G2 (Intermediate)', '2-20', '3-20%', 'Well-differentiated'],
            ['G3 (High)', '>20', '>20%', 'Well-differentiated'],
            ['NEC Small Cell', '>20', '>20% (usually >55%)', 'Poorly differentiated'],
            ['NEC Large Cell', '>20', '>20% (usually >55%)', 'Poorly differentiated'],
          ]}
        />
        <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <h4 className="font-medium text-slate-900 dark:text-white mb-2">Grading Rules:</h4>
          <FeatureList
            style="numbered"
            items={[
              'Grade by whichever is higher (mitoses OR Ki-67)',
              'Count mitoses in 10 HPF in hotspot areas',
              'Ki-67 in hotspot, count at least 500-2000 cells',
              'Heterogeneity is common - sample adequately',
            ]}
          />
        </div>
      </SectionCard>

      {/* Site-Specific */}
      <Tabs defaultValue="gi">
        <TabsList className="flex-wrap">
          <TabsTrigger value="gi">GI NETs</TabsTrigger>
          <TabsTrigger value="pancreatic">Pancreatic NETs</TabsTrigger>
          <TabsTrigger value="nec">NECs</TabsTrigger>
        </TabsList>

        <TabsContent value="gi">
          <div className="space-y-6">
            <SectionCard title="GI Neuroendocrine Tumors (Carcinoids)" icon={Activity}>
              <Accordion type="multiple" defaultValue={['small-intestine']}>
                <AccordionItem value="small-intestine">
                  <AccordionTrigger value="small-intestine">
                    <div className="flex items-center gap-2">
                      <Badge variant="primary">Most Common</Badge>
                      Small Intestinal NET
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="small-intestine">
                    <div className="space-y-4">
                      <FeatureList
                        style="check"
                        items={[
                          'Ileum most common site',
                          'Serotonin-producing (midgut hormones)',
                          'Carcinoid syndrome with liver metastases',
                          'Insular/nested pattern',
                          'Often multiple primary tumors',
                          'Mesenteric fibrosis (desmoplastic reaction)',
                        ]}
                      />
                      <Alert variant="info" title="Carcinoid Heart Disease">
                        Right-sided valvular fibrosis from serotonin exposure. Look for tricuspid regurgitation, pulmonary stenosis.
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="appendix">
                  <AccordionTrigger value="appendix">
                    <div className="flex items-center gap-2">
                      <Badge variant="success">Usually Benign</Badge>
                      Appendiceal NET
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="appendix">
                    <FeatureList
                      style="check"
                      items={[
                        'Most common appendiceal tumor',
                        'Usually incidental at appendectomy',
                        'Tip location most common',
                        '<1cm: excellent prognosis, appendectomy curative',
                        '>2cm or base involvement: right hemicolectomy',
                        'Serotonin-positive, EC cell type',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gastric">
                  <AccordionTrigger value="gastric">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Three Types</Badge>
                      Gastric NET
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="gastric">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3">
                        <h5 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Type I (70-80%)</h5>
                        <FeatureList
                          style="bullet"
                          items={[
                            'Autoimmune gastritis',
                            'Multiple, small',
                            'ECL cell hyperplasia',
                            'Excellent prognosis',
                          ]}
                        />
                      </div>
                      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                        <h5 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Type II (5-6%)</h5>
                        <FeatureList
                          style="bullet"
                          items={[
                            'MEN1/ZES',
                            'Gastrin-driven',
                            'Multiple tumors',
                            'Intermediate prognosis',
                          ]}
                        />
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                        <h5 className="font-medium text-red-800 dark:text-red-300 mb-2">Type III (15-20%)</h5>
                        <FeatureList
                          style="bullet"
                          items={[
                            'Sporadic',
                            'Solitary, larger',
                            'Normal gastrin/mucosa',
                            'Aggressive behavior',
                          ]}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rectal">
                  <AccordionTrigger value="rectal">
                    <div className="flex items-center gap-2">
                      <Badge variant="accent">L-cell Type</Badge>
                      Rectal NET
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="rectal">
                    <FeatureList
                      style="check"
                      items={[
                        'L-cell origin (glucagon-like peptides)',
                        'Often found on routine colonoscopy',
                        'Typically small and submucosal',
                        '<1cm: local excision, excellent prognosis',
                        'PAP and prostatic acid phosphatase positive',
                        'Usually non-functional',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>

        <TabsContent value="pancreatic">
          <div className="space-y-6">
            <SectionCard title="Pancreatic Neuroendocrine Tumors (PanNETs)" icon={Grid3X3}>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Functional (30-40%)</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Insulinoma (most common functional)',
                      'Gastrinoma (ZES)',
                      'Glucagonoma',
                      'VIPoma',
                      'Somatostatinoma',
                    ]}
                  />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-300 mb-3">Non-functional (60-70%)</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Most common type overall',
                      'No clinical syndrome',
                      'Often larger at diagnosis',
                      'May still stain for hormones',
                      'Similar grading/staging to functional',
                    ]}
                  />
                </div>
              </div>

              <Accordion type="single">
                <AccordionItem value="insulinoma">
                  <AccordionTrigger value="insulinoma">Insulinoma</AccordionTrigger>
                  <AccordionContent value="insulinoma">
                    <FeatureList
                      style="check"
                      items={[
                        'Most common functional PanNET',
                        '90% benign, 90% solitary, 90% <2cm',
                        'Whipple triad: hypoglycemia, low glucose, relief with glucose',
                        'Insulin and proinsulin positive',
                        'Amyloid deposition common',
                        '10% associated with MEN1',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gastrinoma">
                  <AccordionTrigger value="gastrinoma">Gastrinoma</AccordionTrigger>
                  <AccordionContent value="gastrinoma">
                    <FeatureList
                      style="check"
                      items={[
                        'Zollinger-Ellison syndrome',
                        'Gastrin overproduction → peptic ulcers',
                        '"Gastrinoma triangle" (pancreas/duodenum)',
                        'Up to 60% malignant',
                        '25% associated with MEN1',
                        'Duodenal gastrinomas often small, multiple',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>

            <SectionCard title="PanNET Molecular Features" icon={Microscope}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-violet-800 dark:text-violet-300 mb-2">Common Alterations</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'MEN1 mutations (40%)',
                      'DAXX/ATRX mutations (40%)',
                      'mTOR pathway (PTEN, TSC2)',
                      'MUTYH (rare, inherited)',
                    ]}
                  />
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-2">DAXX/ATRX Loss</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Alternative lengthening of telomeres (ALT)',
                      'Associated with larger tumors',
                      'Higher metastatic potential',
                      'IHC: nuclear loss pattern',
                    ]}
                  />
                </div>
              </div>
            </SectionCard>
          </div>
        </TabsContent>

        <TabsContent value="nec">
          <div className="space-y-6">
            <SectionCard title="Neuroendocrine Carcinoma (NEC)" icon={AlertTriangle}>
              <Alert variant="danger" title="Key Point">
                NECs are POORLY differentiated, high-grade malignancies. They are biologically distinct from well-differentiated G3 NETs and treated more like small cell lung cancer.
              </Alert>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Small Cell NEC</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Small cells with scant cytoplasm',
                      'Nuclear molding',
                      'Crush artifact',
                      'High N:C ratio',
                      'Inconspicuous nucleoli',
                      'Similar to SCLC morphology',
                    ]}
                  />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Large Cell NEC</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Larger cells with more cytoplasm',
                      'Prominent nucleoli',
                      'Less nuclear molding',
                      'Organoid/trabecular growth may be present',
                      'Requires NE marker positivity',
                      'Must exclude metastatic LCNEC from lung',
                    ]}
                  />
                </div>
              </div>

              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-medium text-red-800 dark:text-red-300 mb-2">NEC Molecular Profile</h4>
                <FeatureList
                  style="bullet"
                  items={[
                    'TP53 mutations (almost universal)',
                    'RB1 mutations/loss (very common)',
                    'Absence of MEN1, DAXX/ATRX mutations',
                    'May arise from pre-existing adenoma/carcinoma',
                  ]}
                />
              </div>
            </SectionCard>
          </div>
        </TabsContent>
      </Tabs>

      {/* IHC Panel */}
      <SectionCard title="NET IHC Panel" icon={Microscope}>
        <Table
          headers={['Marker', 'Purpose', 'Pattern']}
          rows={[
            ['Synaptophysin', 'Most sensitive NE marker', 'Diffuse cytoplasmic'],
            ['Chromogranin A', 'Most specific NE marker', 'Granular cytoplasmic'],
            ['INSM1', 'Nuclear NE marker', 'Sensitive for NEC'],
            ['Ki-67 (MIB-1)', 'Proliferation/grading', 'Nuclear; count in hotspot'],
            ['Somatostatin receptor 2', 'Theranostic (treatment planning)', 'Membranous'],
            ['DAXX/ATRX', 'Prognostic (PanNET)', 'Nuclear loss = mutation'],
          ]}
        />
      </SectionCard>

      {/* Pitfalls */}
      <SectionCard title="Common Pitfalls" icon={AlertTriangle}>
        <div className="space-y-4">
          <Alert variant="pitfall" title="NET G3 vs NEC">
            Both have high Ki-67 but different biology! NET G3 retains organoid architecture and lacks TP53/RB1 mutations. NEC is diffuse/sheet-like with those mutations.
          </Alert>
          <Alert variant="pitfall" title="Ki-67 Heterogeneity">
            Ki-67 can vary significantly within a tumor. Always count in the hotspot area and consider sampling adequacy.
          </Alert>
          <Alert variant="pitfall" title="Metastatic vs Primary">
            NETs frequently metastasize to liver. For liver NET, always consider metastasis before primary. Check CDX2 for GI origin.
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
