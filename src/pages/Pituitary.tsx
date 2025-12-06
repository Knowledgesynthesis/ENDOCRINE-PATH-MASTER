import {
  Brain,
  Target,
  Layers,
  AlertTriangle,
  Microscope
} from 'lucide-react'
import { SectionCard, FeatureList } from '../components/content'
import { Alert, Table, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function Pituitary() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
          <Brain className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Pituitary Pathology
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            PitNETs, hyperplasia, and sellar region lesions
          </p>
        </div>
      </div>

      {/* Normal Histology */}
      <SectionCard title="Normal Pituitary Histology" icon={Layers}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Anterior Pituitary (Adenohypophysis)</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20">
                <div className="w-4 h-4 rounded-full bg-rose-400" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">Acidophils</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Somatotrophs (GH), Lactotrophs (PRL)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="w-4 h-4 rounded-full bg-blue-400" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">Basophils</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Corticotrophs (ACTH), Thyrotrophs (TSH), Gonadotrophs (FSH/LH)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                <div className="w-4 h-4 rounded-full bg-slate-400" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">Chromophobes</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Sparse granules, may be any cell type</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Posterior Pituitary (Neurohypophysis)</h3>
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
              <FeatureList
                style="bullet"
                items={[
                  'Axonal processes from hypothalamus',
                  'Pituicytes (glial supporting cells)',
                  'Stores oxytocin and ADH',
                  'Herring bodies (neurosecretory granules)',
                ]}
              />
            </div>
            <Alert variant="info" title="Intermediate Zone" className="mt-4">
              Remnant of Rathke pouch between anterior and posterior. Site of Rathke cleft cysts.
            </Alert>
          </div>
        </div>
      </SectionCard>

      {/* PitNETs */}
      <SectionCard title="Pituitary Neuroendocrine Tumors (PitNETs)" icon={Target}>
        <Alert variant="info" title="Nomenclature Update">
          WHO 2022 renamed "pituitary adenomas" to "pituitary neuroendocrine tumors (PitNETs)" to reflect their true neuroendocrine nature and malignant potential.
        </Alert>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Classification by Cell Type</h4>
          <Accordion type="multiple" defaultValue={['lactotroph']}>
            <AccordionItem value="lactotroph">
              <AccordionTrigger value="lactotroph">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">Most Common</Badge>
                  Lactotroph PitNET (Prolactinoma)
                </div>
              </AccordionTrigger>
              <AccordionContent value="lactotroph">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-white mb-2">Sparsely Granulated</h5>
                    <FeatureList
                      style="bullet"
                      items={[
                        'Most common type',
                        'Chromophobic/weakly acidophilic',
                        'Dot-like Golgi pattern on PRL IHC',
                        'Often macroadenomas',
                        'Responds well to dopamine agonists',
                      ]}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-white mb-2">Densely Granulated</h5>
                    <FeatureList
                      style="bullet"
                      items={[
                        'Rare',
                        'Strongly acidophilic',
                        'Diffuse PRL staining',
                        'Usually microadenomas',
                        'May be more resistant to therapy',
                      ]}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="somatotroph">
              <AccordionTrigger value="somatotroph">
                <div className="flex items-center gap-2">
                  <Badge variant="success">Common</Badge>
                  Somatotroph PitNET
                </div>
              </AccordionTrigger>
              <AccordionContent value="somatotroph">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                    <h5 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Densely Granulated</h5>
                    <FeatureList
                      style="bullet"
                      items={[
                        'Strongly acidophilic',
                        'Diffuse GH positivity',
                        'Perinuclear CAM5.2 pattern',
                        'Better response to somatostatin analogs',
                      ]}
                    />
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                    <h5 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Sparsely Granulated</h5>
                    <FeatureList
                      style="bullet"
                      items={[
                        'Chromophobic',
                        'Fibrous bodies (key feature)',
                        'Dot-like CAM5.2',
                        'More aggressive behavior',
                        'Poorer response to medical therapy',
                      ]}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="corticotroph">
              <AccordionTrigger value="corticotroph">
                <div className="flex items-center gap-2">
                  <Badge variant="warning">Cushing</Badge>
                  Corticotroph PitNET
                </div>
              </AccordionTrigger>
              <AccordionContent value="corticotroph">
                <FeatureList
                  style="check"
                  items={[
                    'Basophilic cells with PAS positivity',
                    'ACTH and TPIT positive',
                    'Causes Cushing disease when functional',
                    'Often microadenomas at diagnosis',
                    'Crooke cell change in adjacent normal (hyaline ring)',
                    'Silent corticotroph adenomas exist',
                  ]}
                />
                <Alert variant="tip" title="Crooke Cell Change" className="mt-4">
                  Perinuclear hyaline material in normal corticotrophs indicates chronic glucocorticoid excess - look in non-tumoral pituitary.
                </Alert>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gonadotroph">
              <AccordionTrigger value="gonadotroph">
                <div className="flex items-center gap-2">
                  <Badge variant="accent">Often Silent</Badge>
                  Gonadotroph PitNET
                </div>
              </AccordionTrigger>
              <AccordionContent value="gonadotroph">
                <FeatureList
                  style="bullet"
                  items={[
                    'Most common clinically non-functioning PitNET',
                    'FSH and/or LH positive (often weak/patchy)',
                    'SF1 positive (lineage marker)',
                    'Chromophobic cells',
                    'Usually macroadenomas with mass effect',
                    'Pseudorosette pattern common',
                  ]}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="thyrotroph">
              <AccordionTrigger value="thyrotroph">
                <div className="flex items-center gap-2">
                  <Badge variant="danger">Rare</Badge>
                  Thyrotroph PitNET
                </div>
              </AccordionTrigger>
              <AccordionContent value="thyrotroph">
                <FeatureList
                  style="bullet"
                  items={[
                    'Rare (<1% of PitNETs)',
                    'TSH positive',
                    'PIT1 positive',
                    'Causes secondary hyperthyroidism',
                    'Often invasive at diagnosis',
                    'Stromal fibrosis common',
                  ]}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionCard>

      {/* High-Risk PitNETs */}
      <SectionCard title="High-Risk PitNETs" icon={AlertTriangle}>
        <Alert variant="warning" title="WHO 2022 Classification">
          Certain PitNET subtypes have higher rates of invasion, recurrence, and resistance to therapy. These are designated as "high-risk" tumors.
        </Alert>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {[
            { name: 'Sparsely granulated somatotroph', risk: 'Aggressive behavior, therapy resistant' },
            { name: 'Crooke cell corticotroph', risk: 'High recurrence rate' },
            { name: 'Silent corticotroph', risk: 'Large, invasive' },
            { name: 'Plurihormonal PIT1-positive', risk: 'Previously "silent subtype 3"' },
            { name: 'Acidophil stem cell', risk: 'Aggressive, giant cell change' },
            { name: 'Male lactotroph macroadenoma', risk: 'Often invasive' },
          ].map((tumor, i) => (
            <div key={i} className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <h5 className="font-medium text-red-800 dark:text-red-300">{tumor.name}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{tumor.risk}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Pituitary Hyperplasia */}
      <SectionCard title="Pituitary Hyperplasia" icon={Layers}>
        <Alert variant="info" title="Key Distinction">
          Hyperplasia preserves the reticulin network; adenomas disrupt it. Reticulin stain is essential!
        </Alert>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Lactotroph Hyperplasia</h4>
            <FeatureList
              style="bullet"
              items={[
                'Pregnancy and lactation',
                'Estrogen therapy',
                'Hypothalamic lesions disrupting dopamine inhibition',
              ]}
            />
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Corticotroph Hyperplasia</h4>
            <FeatureList
              style="bullet"
              items={[
                'Ectopic CRH production',
                'Primary adrenal insufficiency',
                'Nelson syndrome (post-adrenalectomy)',
              ]}
            />
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Thyrotroph Hyperplasia</h4>
            <FeatureList
              style="bullet"
              items={[
                'Primary hypothyroidism',
                'Reversible with thyroid replacement',
                'May cause sellar enlargement',
              ]}
            />
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Gonadotroph Hyperplasia</h4>
            <FeatureList
              style="bullet"
              items={[
                'Primary hypogonadism',
                'Post-menopausal changes',
                '"Castration cells" - large vacuolated cells',
              ]}
            />
          </div>
        </div>
      </SectionCard>

      {/* Other Sellar Lesions */}
      <SectionCard title="Other Sellar Lesions" icon={Target}>
        <Tabs defaultValue="cranio">
          <TabsList className="flex-wrap">
            <TabsTrigger value="cranio">Craniopharyngioma</TabsTrigger>
            <TabsTrigger value="rathke">Rathke Cleft Cyst</TabsTrigger>
            <TabsTrigger value="hypophysitis">Hypophysitis</TabsTrigger>
          </TabsList>

          <TabsContent value="cranio">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Adamantinomatous</h4>
                <FeatureList
                  style="bullet"
                  items={[
                    'Bimodal: children and 50-70 years',
                    'Wet keratin and calcification',
                    'Palisading epithelium',
                    'Stellate reticulum (central)',
                    'CTNNB1 mutations (beta-catenin nuclear positive)',
                    'May have finger-like invasion',
                  ]}
                />
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Papillary</h4>
                <FeatureList
                  style="bullet"
                  items={[
                    'Almost exclusively adults',
                    'Well-circumscribed, solid',
                    'No calcification/keratin',
                    'Non-keratinizing squamous epithelium',
                    'BRAF V600E mutations',
                    'Better prognosis',
                  ]}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rathke">
            <FeatureList
              style="check"
              items={[
                'Benign cyst from Rathke pouch remnant',
                'Lined by ciliated columnar to cuboidal epithelium',
                'May have goblet cells',
                'Contains mucoid material',
                'Intrasellar or suprasellar',
                'May cause hypopituitarism if large',
              ]}
            />
            <Alert variant="pitfall" title="Pitfall" className="mt-4">
              Squamous metaplasia in Rathke cyst can mimic craniopharyngioma. Look for ciliated epithelium and absence of wet keratin.
            </Alert>
          </TabsContent>

          <TabsContent value="hypophysitis">
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400">Inflammatory conditions of the pituitary:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <h5 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Lymphocytic Hypophysitis</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Autoimmune, often peripartum women. Dense lymphocytic infiltrate with pituitary destruction. May be ICI-related (checkpoint inhibitor).
                  </p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                  <h5 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">IgG4-Related Hypophysitis</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Part of systemic IgG4-RD. Plasma cell-rich infiltrate with {'>'}40% IgG4+ cells. Storiform fibrosis.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionCard>

      {/* IHC Panel */}
      <SectionCard title="Pituitary IHC Panel" icon={Microscope}>
        <Table
          headers={['Cell Type', 'Hormones', 'Transcription Factors', 'Other Markers']}
          rows={[
            ['Somatotroph', 'GH', 'PIT1', 'CAM5.2 (perinuclear in DG)'],
            ['Lactotroph', 'PRL', 'PIT1, ER', 'Golgi dot pattern in SG'],
            ['Thyrotroph', 'TSH, alpha-SU', 'PIT1, GATA2', '-'],
            ['Corticotroph', 'ACTH', 'TPIT', 'PAS+, CAM5.2+'],
            ['Gonadotroph', 'FSH, LH, alpha-SU', 'SF1, GATA2', 'Often weak/patchy'],
            ['Null cell', 'None', 'Variable', 'Diagnosis of exclusion'],
          ]}
        />
        <Alert variant="tip" title="Diagnostic Approach" className="mt-4">
          Start with synaptophysin (confirms NE), then hormone panel (GH, PRL, ACTH, TSH, FSH, LH) and transcription factors (PIT1, TPIT, SF1) for complete classification.
        </Alert>
      </SectionCard>

      {/* Pitfalls */}
      <SectionCard title="Common Pitfalls" icon={AlertTriangle}>
        <div className="space-y-4">
          <Alert variant="pitfall" title="Hyperplasia vs Adenoma">
            Always do reticulin stain! Expanded but preserved acinar architecture = hyperplasia. Disrupted reticulin = adenoma.
          </Alert>
          <Alert variant="pitfall" title="Silent vs Non-functioning">
            "Silent" means immunopositive but clinically non-secreting. "Non-functioning" or "null cell" means immunonegative. Different entities!
          </Alert>
          <Alert variant="pitfall" title="Sparse Granulated Variants">
            Sparsely granulated tumors may have weak/negative hormone staining. Use transcription factors and look for characteristic features (fibrous bodies in SG somatotroph).
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
