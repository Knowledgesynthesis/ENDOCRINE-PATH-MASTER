import {
  CircleDot,
  Target,
  Layers,
  AlertTriangle,
  Microscope,
  Dna
} from 'lucide-react'
import { SectionCard, DiagramCard, FeatureList, ContrastList, ComparisonCard } from '../components/content'
import { Alert, Table, Tabs, TabsList, TabsTrigger, TabsContent, Badge, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function Thyroid() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
          <CircleDot className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Thyroid Pathology
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            From benign nodules to high-grade carcinomas
          </p>
        </div>
      </div>

      {/* Normal Histology */}
      <SectionCard title="Normal Thyroid Histology" icon={Layers}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <DiagramCard
            title="Follicles"
            description="Spherical structures lined by cuboidal epithelium containing colloid"
            icon={CircleDot}
            iconColor="text-cyan-500"
            bgColor="bg-cyan-50 dark:bg-cyan-900/20"
          />
          <DiagramCard
            title="Colloid"
            description="Eosinophilic, homogeneous material (thyroglobulin storage)"
            icon={Target}
            iconColor="text-amber-500"
            bgColor="bg-amber-50 dark:bg-amber-900/20"
          />
          <DiagramCard
            title="C-Cells"
            description="Parafollicular neuroendocrine cells (calcitonin-producing)"
            icon={Layers}
            iconColor="text-violet-500"
            bgColor="bg-violet-50 dark:bg-violet-900/20"
          />
        </div>
        <Alert variant="info" title="Key Concept">
          Normal thyroid follicles are uniformly sized with pale colloid. Variation in size and cellularity suggests pathology.
        </Alert>
      </SectionCard>

      {/* Tabs for Different Categories */}
      <Tabs defaultValue="non-neoplastic">
        <TabsList className="flex-wrap">
          <TabsTrigger value="non-neoplastic">Non-Neoplastic</TabsTrigger>
          <TabsTrigger value="follicular">Follicular Lesions</TabsTrigger>
          <TabsTrigger value="ptc">Papillary Carcinoma</TabsTrigger>
          <TabsTrigger value="high-grade">High-Grade</TabsTrigger>
        </TabsList>

        {/* Non-Neoplastic */}
        <TabsContent value="non-neoplastic">
          <div className="space-y-6">
            <SectionCard title="Nodular Hyperplasia" icon={CircleDot}>
              <FeatureList
                items={[
                  'Most common cause of thyroid nodules',
                  'Variable-sized follicles with abundant colloid',
                  'Areas of degenerative change (hemorrhage, fibrosis, calcification)',
                  'No capsule - blends with surrounding parenchyma',
                  'May show "nodule within nodule" pattern',
                ]}
              />
            </SectionCard>

            <SectionCard title="Thyroiditis Types" icon={AlertTriangle}>
              <Accordion type="multiple" defaultValue={['hashimoto']}>
                <AccordionItem value="hashimoto">
                  <AccordionTrigger value="hashimoto">
                    <div className="flex items-center gap-2">
                      <Badge variant="primary">Common</Badge>
                      Hashimoto Thyroiditis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="hashimoto">
                    <div className="space-y-4">
                      <FeatureList
                        style="check"
                        items={[
                          'Dense lymphoplasmacytic infiltrate with germinal centers',
                          'Hurthle cell (oncocytic) metaplasia',
                          'Follicular atrophy with scant colloid',
                          'Interstitial fibrosis',
                          'Anti-TPO and anti-thyroglobulin antibodies',
                        ]}
                      />
                      <Alert variant="pitfall" title="Pitfall">
                        Florid Hurthle cell change can mimic Hurthle cell neoplasm - look for background thyroiditis features.
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="subacute">
                  <AccordionTrigger value="subacute">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Granulomatous</Badge>
                      Subacute (de Quervain) Thyroiditis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="subacute">
                    <FeatureList
                      style="check"
                      items={[
                        'Granulomatous inflammation around disrupted follicles',
                        'Multinucleated giant cells engulfing colloid',
                        'Mixed inflammatory infiltrate',
                        'Often post-viral, self-limited',
                        'Different stages may be present simultaneously',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="riedel">
                  <AccordionTrigger value="riedel">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">Rare</Badge>
                      Riedel Thyroiditis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="riedel">
                    <FeatureList
                      style="check"
                      items={[
                        'Dense keloid-like fibrosis replacing thyroid',
                        'Extension into surrounding soft tissue',
                        'IgG4-related disease association',
                        'Occlusive phlebitis pattern',
                        'May mimic anaplastic carcinoma clinically',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Follicular Lesions */}
        <TabsContent value="follicular">
          <div className="space-y-6">
            <Alert variant="tip" title="Key Differentiating Feature">
              The distinction between follicular adenoma and carcinoma is based ENTIRELY on invasion (capsular and/or vascular) - NOT on cytologic features.
            </Alert>

            <ComparisonCard
              title="Follicular Adenoma vs Carcinoma"
              featureNames={['Capsule', 'Capsular Invasion', 'Vascular Invasion', 'Architecture', 'Cytology', 'Diagnosis']}
              items={[
                {
                  name: 'Follicular Adenoma',
                  features: {
                    'Capsule': 'Complete, intact',
                    'Capsular Invasion': 'Absent',
                    'Vascular Invasion': 'Absent',
                    'Architecture': 'Variable follicular patterns',
                    'Cytology': 'Can be atypical',
                    'Diagnosis': 'Benign',
                  },
                },
                {
                  name: 'Minimally Invasive FTC',
                  features: {
                    'Capsule': 'Present but violated',
                    'Capsular Invasion': 'Full-thickness breach',
                    'Vascular Invasion': 'None or limited',
                    'Architecture': 'Follicular',
                    'Cytology': 'Variable',
                    'Diagnosis': 'Malignant',
                  },
                },
                {
                  name: 'Widely Invasive FTC',
                  features: {
                    'Capsule': 'Extensively breached',
                    'Capsular Invasion': 'Widespread',
                    'Vascular Invasion': 'Usually present',
                    'Architecture': 'Follicular',
                    'Cytology': 'Variable',
                    'Diagnosis': 'Malignant',
                  },
                },
              ]}
            />

            <SectionCard title="Capsular Invasion Criteria" icon={Target}>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  <strong>True capsular invasion requires:</strong>
                </p>
                <FeatureList
                  style="numbered"
                  items={[
                    'Tumor completely penetrating through the capsule',
                    'Extension into surrounding thyroid parenchyma',
                    'NOT just mushrooming into capsule',
                    'NOT capsular irregularity alone',
                  ]}
                />
              </div>
              <Alert variant="pitfall" title="Common Pitfall">
                Biopsy site changes and prior FNA can cause capsular disruption - look for hemosiderin, granulation tissue, and history of procedure.
              </Alert>
            </SectionCard>

            <SectionCard title="Vascular Invasion Criteria" icon={CircleDot}>
              <ContrastList
                positiveTitle="True Vascular Invasion"
                negativeTitle="NOT Vascular Invasion"
                positive={[
                  'Tumor in endothelial-lined space WITHIN or BEYOND capsule',
                  'Attached to vessel wall',
                  'Covered by thrombus or endothelium',
                  'In muscular vessel preferred',
                ]}
                negative={[
                  'Tumor in artifactual space',
                  'Floating tumor without attachment',
                  'Capsular blood vessels (must be larger)',
                  'Intratumoral vessels',
                ]}
              />
            </SectionCard>

            <SectionCard title="NIFTP (Non-Invasive Follicular Thyroid Neoplasm with Papillary-like Nuclear Features)" icon={Microscope}>
              <Alert variant="info" title="Definition">
                Encapsulated/well-demarcated follicular-patterned thyroid neoplasm with PTC-type nuclear features but NO invasion. Renamed from "encapsulated follicular variant of PTC" to reflect indolent behavior.
              </Alert>
              <div className="mt-4">
                <p className="font-medium text-slate-900 dark:text-white mb-3">Diagnostic Criteria (ALL required):</p>
                <FeatureList
                  style="check"
                  items={[
                    'Encapsulation or clear demarcation',
                    'Follicular growth pattern (≤1% papillae)',
                    'Nuclear features of PTC (score 2-3)',
                    'No invasion (capsular or vascular)',
                    'No tumor necrosis',
                    'No high mitotic activity (<3/10 HPF)',
                  ]}
                />
              </div>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Papillary Thyroid Carcinoma */}
        <TabsContent value="ptc">
          <div className="space-y-6">
            <SectionCard title="PTC Nuclear Features (The Diagnostic Triad)" icon={Target}>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-primary-500 border-dashed" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Nuclear Grooves</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Linear indentations in nuclear membrane</p>
                </div>
                <div className="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-accent-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent-500" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Pseudoinclusions</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Cytoplasmic invaginations into nucleus</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-800 opacity-60" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Ground Glass/Cleared</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Optically clear "Orphan Annie eye" nuclei</p>
                </div>
              </div>
              <Alert variant="warning" title="Important">
                Nuclear features must be present in a SIGNIFICANT proportion of cells - scattered grooves are insufficient.
              </Alert>
            </SectionCard>

            <SectionCard title="PTC Variants" icon={Layers}>
              <Accordion type="multiple" defaultValue={['classic']}>
                <AccordionItem value="classic">
                  <AccordionTrigger value="classic">
                    <div className="flex items-center gap-2">
                      <Badge variant="primary">Most Common</Badge>
                      Classic PTC
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="classic">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Complex branching papillae with fibrovascular cores',
                        'Classic nuclear features prominent',
                        'Psammoma bodies common (concentric calcifications)',
                        'May have follicular areas',
                        'Excellent prognosis',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="follicular-variant">
                  <AccordionTrigger value="follicular-variant">
                    <div className="flex items-center gap-2">
                      <Badge variant="success">Common</Badge>
                      Follicular Variant
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="follicular-variant">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Follicular architecture predominant (>99%)',
                        'PTC nuclear features present',
                        'May be encapsulated (→ NIFTP if non-invasive)',
                        'Infiltrative type has worse prognosis',
                        'BRAF vs RAS mutation determines molecular subtype',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tall-cell">
                  <AccordionTrigger value="tall-cell">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Aggressive</Badge>
                      Tall Cell Variant
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="tall-cell">
                    <div className="space-y-4">
                      <FeatureList
                        style="bullet"
                        items={[
                          'Cells height ≥3x width',
                          'Abundant eosinophilic cytoplasm',
                          'Tall cells ≥30% of tumor',
                          'Often extrathyroidal extension',
                          'Higher recurrence rate',
                          'BRAF V600E mutation common',
                        ]}
                      />
                      <Alert variant="pitfall" title="Pitfall">
                        Do not confuse with Hurthle cell tumors - look for papillary architecture and PTC nuclear features.
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="columnar">
                  <AccordionTrigger value="columnar">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">Aggressive</Badge>
                      Columnar Cell Variant
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="columnar">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Pseudostratified columnar cells',
                        'Subnuclear and/or supranuclear vacuoles',
                        'May mimic endometrioid or intestinal tumors',
                        'Aggressive behavior',
                        'CDX2 may be positive',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hobnail">
                  <AccordionTrigger value="hobnail">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">Aggressive</Badge>
                      Hobnail Variant
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="hobnail">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Cells with apical nuclei bulging into lumen',
                        '"Hobnail" or "boot-shaped" appearance',
                        '≥30% hobnail features required',
                        'High rate of distant metastases',
                        'Associated with BRAF and TP53 mutations',
                        'May represent early dedifferentiation',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>

        {/* High-Grade */}
        <TabsContent value="high-grade">
          <div className="space-y-6">
            <SectionCard title="Poorly Differentiated Thyroid Carcinoma (PDTC)" icon={AlertTriangle}>
              <Alert variant="info" title="Turin Criteria">
                PDTC defined by presence of solid/trabecular/insular growth AND at least one of: necrosis, ≥3 mitoses/10 HPF, or convoluted nuclei.
              </Alert>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Growth Patterns</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'Solid sheets',
                      'Trabecular cords',
                      'Insular nests',
                    ]}
                  />
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Additional Features</h4>
                  <FeatureList
                    style="bullet"
                    items={[
                      'May arise from PTC or FTC',
                      'Loss of colloid formation',
                      'Intermediate prognosis',
                    ]}
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Anaplastic (Undifferentiated) Thyroid Carcinoma" icon={AlertTriangle}>
              <Alert variant="danger" title="Clinical Note">
                Rapidly fatal malignancy - median survival 3-6 months. Always T4 disease by definition.
              </Alert>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Morphologic Patterns</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-red-800 dark:text-red-300">Spindle Cell</span>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-red-800 dark:text-red-300">Giant Cell</span>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-red-800 dark:text-red-300">Squamoid</span>
                    </div>
                  </div>
                </div>
                <FeatureList
                  style="bullet"
                  items={[
                    'Marked pleomorphism and mitotic activity',
                    'Necrosis common',
                    'May show residual differentiated component',
                    'PAX8 may be positive (confirms thyroid origin)',
                    'TTF-1 usually negative',
                    'TP53 mutation near universal',
                  ]}
                />
              </div>
            </SectionCard>
          </div>
        </TabsContent>
      </Tabs>

      {/* IHC Panel */}
      <SectionCard title="Thyroid IHC Panel" icon={Microscope}>
        <Table
          headers={['Marker', 'Normal Thyroid', 'PTC', 'FTC', 'MTC', 'ATC']}
          rows={[
            ['TTF-1', '+', '+', '+', '+', '-/+'],
            ['PAX8', '+', '+', '+', '-', '+/-'],
            ['Thyroglobulin', '+', '+', '+', '-', '-'],
            ['Calcitonin', '-', '-', '-', '+', '-'],
            ['CEA', '-', '-', '-', '+', '-'],
            ['p53 (mutant)', '-', '-', '-', '-', '+'],
          ]}
        />
      </SectionCard>

      {/* Molecular */}
      <SectionCard title="Molecular Landscape" icon={Dna}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              BRAF-like (Type 1)
            </h4>
            <FeatureList
              style="bullet"
              items={[
                'BRAF V600E mutation',
                'RET/PTC rearrangements',
                'Classic PTC morphology',
                'Tall cell variant association',
                'Generally aggressive behavior',
              ]}
            />
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              RAS-like (Type 2)
            </h4>
            <FeatureList
              style="bullet"
              items={[
                'RAS mutations (NRAS, HRAS, KRAS)',
                'PAX8-PPARG fusion',
                'Follicular variant PTC',
                'Follicular carcinoma',
                'Generally indolent behavior',
              ]}
            />
          </div>
        </div>
      </SectionCard>

      {/* Common Pitfalls */}
      <SectionCard title="Common Pitfalls" icon={AlertTriangle}>
        <div className="space-y-4">
          <Alert variant="pitfall" title="Nuclear Clearing Artifacts">
            Formalin fixation and processing can cause nuclear clearing in benign thyroid - evaluate nuclear contour irregularities, not just clearing.
          </Alert>
          <Alert variant="pitfall" title="Adenoma vs Minimally Invasive FTC">
            Requires examination of the ENTIRE capsule. Never diagnose FTC on incomplete sampling.
          </Alert>
          <Alert variant="pitfall" title="Hyalinizing Trabecular Tumor vs PTC">
            HTT can show PTC-like nuclear features but has characteristic trabecular pattern and hyaline material. Usually benign behavior.
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
