import {
  AlertTriangle,
  Target,
  CircleDot,
  Layers,
  Brain,
  Activity,
  Grid3X3
} from 'lucide-react'
import { SectionCard, FeatureList } from '../components/content'
import { Alert, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui'

export default function Pitfalls() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
          <AlertTriangle className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            Pitfalls & Dangerous Mimics
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Common diagnostic traps and how to avoid them
          </p>
        </div>
      </div>

      {/* Overview */}
      <SectionCard title="Why Pitfalls Matter" icon={AlertTriangle}>
        <Alert variant="warning" title="Clinical Impact">
          Diagnostic errors in endocrine pathology can lead to unnecessary surgery, missed malignancies, or inappropriate treatment. Understanding common pitfalls is essential for safe practice.
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
            <SectionCard title="Thyroid Pitfalls" icon={CircleDot}>
              <Accordion type="multiple" defaultValue={['nuclear-clearing']}>
                <AccordionItem value="nuclear-clearing">
                  <AccordionTrigger value="nuclear-clearing">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">High Risk</Badge>
                      Nuclear Clearing Artifacts vs PTC
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="nuclear-clearing">
                    <div className="space-y-4">
                      <Alert variant="pitfall" title="The Problem">
                        Formalin fixation can cause nuclear clearing in benign thyroid tissue, mimicking the "Orphan Annie" nuclei of PTC.
                      </Alert>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-red-800 dark:text-red-300 mb-2">True PTC Features</h5>
                          <FeatureList
                            style="bullet"
                            items={[
                              'Nuclear grooves (longitudinal)',
                              'Intranuclear pseudoinclusions',
                              'Nuclear membrane irregularity',
                              'Nuclear crowding/overlap',
                              'Chromatin clearing PLUS contour abnormalities',
                            ]}
                          />
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-green-800 dark:text-green-300 mb-2">Artifact Clues</h5>
                          <FeatureList
                            style="bullet"
                            items={[
                              'Clearing only, no contour changes',
                              'Round, regular nuclear membranes',
                              'No pseudoinclusions',
                              'Background benign features',
                              'Edge artifact pattern',
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="follicular-invasion">
                  <AccordionTrigger value="follicular-invasion">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">High Risk</Badge>
                      Follicular Adenoma vs Minimally Invasive FTC
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="follicular-invasion">
                    <div className="space-y-4">
                      <Alert variant="pitfall" title="The Problem">
                        The distinction requires examination of the ENTIRE capsule. Invasion may be focal and easily missed.
                      </Alert>
                      <FeatureList
                        style="numbered"
                        items={[
                          'Submit the ENTIRE capsule for microscopic examination',
                          'Capsular invasion = complete transgression through capsule',
                          'Mushrooming INTO capsule is NOT invasion',
                          'Vascular invasion must be in/beyond capsule, attached to wall',
                          'Artifact from FNA/biopsy can mimic invasion - look for hemosiderin',
                          'When in doubt, deeper levels and more sections',
                        ]}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="htt">
                  <AccordionTrigger value="htt">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Moderate Risk</Badge>
                      Hyalinizing Trabecular Tumor vs PTC
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="htt">
                    <div className="space-y-4">
                      <Alert variant="info" title="Background">
                        HTT can show PTC-like nuclear features but is generally benign. Historically called "hyalinizing trabecular adenoma."
                      </Alert>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-blue-800 dark:text-blue-300 mb-2">HTT Features</h5>
                          <FeatureList
                            style="bullet"
                            items={[
                              'Trabecular/nested architecture',
                              'Prominent hyaline material between cells',
                              'Yellow bodies (cytoplasmic)',
                              'Encapsulated',
                              'MIB-1 membranous pattern',
                            ]}
                          />
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Distinguishing Points</h5>
                          <FeatureList
                            style="bullet"
                            items={[
                              'Architecture (trabecular vs papillary)',
                              'Hyaline material (HTT specific)',
                              'Usually benign behavior',
                              'No BRAF V600E mutation',
                              'May have RET/PTC rearrangements',
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ptc-mimics">
                  <AccordionTrigger value="ptc-mimics">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Moderate Risk</Badge>
                      Other PTC Mimics
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="ptc-mimics">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Hashimoto thyroiditis: Hurthle cell change can have nuclear grooves',
                        'Graves disease: Nuclear clearing from hyperactivity',
                        'Radiation effect: Nuclear changes',
                        'Papillary hyperplasia: True papillae but no nuclear features',
                        'Clear cell tumors: Clearing without PTC nuclear contours',
                      ]}
                    />
                    <Alert variant="tip" title="Key Principle" className="mt-4">
                      PTC diagnosis requires the COMPLETE nuclear triad in a SIGNIFICANT proportion of cells. Scattered nuclear grooves are not diagnostic.
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Parathyroid */}
        <TabsContent value="parathyroid">
          <div className="space-y-6">
            <SectionCard title="Parathyroid Pitfalls" icon={Layers}>
              <Accordion type="multiple">
                <AccordionItem value="hyperplasia-adenoma">
                  <AccordionTrigger value="hyperplasia-adenoma">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">High Risk</Badge>
                      Hyperplasia vs Adenoma
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="hyperplasia-adenoma">
                    <div className="space-y-4">
                      <Alert variant="pitfall" title="The Problem">
                        A single enlarged gland does NOT automatically mean adenoma. In MEN1 and some sporadic cases, multiple glands are involved but asymmetrically.
                      </Alert>
                      <FeatureList
                        style="numbered"
                        items={[
                          'Look for RIM OF NORMAL parathyroid tissue (suggests adenoma)',
                          'Request examination of other glands if not provided',
                          'Asymmetric hyperplasia is common - one gland may be much larger',
                          'MEN1 patients: ALWAYS hyperplasia, even if one gland dominant',
                          'Clinical context matters - renal failure suggests secondary hyperplasia',
                        ]}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="parathyroid-thyroid">
                  <AccordionTrigger value="parathyroid-thyroid">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Moderate Risk</Badge>
                      Parathyroid vs Thyroid Tissue
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="parathyroid-thyroid">
                    <div className="space-y-4">
                      <Alert variant="info" title="Background">
                        Intrathyroidal parathyroid can be mistaken for thyroid nodule. Parathyroid follicular pattern can mimic thyroid.
                      </Alert>
                      <FeatureList
                        style="bullet"
                        items={[
                          'Parathyroid: PTH+, GATA3+, TTF-1-, thyroglobulin-',
                          'Thyroid: PTH-, GATA3-, TTF-1+, thyroglobulin+',
                          'Parathyroid has adipose tissue (chief cell pattern)',
                          'Thyroid has colloid-filled follicles',
                          'When in doubt, order IHC panel',
                        ]}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="atypical-carcinoma">
                  <AccordionTrigger value="atypical-carcinoma">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">High Risk</Badge>
                      Atypical Adenoma vs Carcinoma
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="atypical-carcinoma">
                    <div className="space-y-4">
                      <Alert variant="pitfall" title="The Problem">
                        Atypical features (fibrous bands, mitoses, adherence) are concerning but NOT diagnostic of carcinoma without UNEQUIVOCAL invasion.
                      </Alert>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-red-800 dark:text-red-300 mb-2">Definitive Carcinoma</h5>
                          <FeatureList
                            style="bullet"
                            items={[
                              'Invasion into adjacent structures',
                              'Vascular invasion',
                              'Perineural invasion',
                              'Metastasis',
                            ]}
                          />
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Atypical (Not Diagnostic)</h5>
                          <FeatureList
                            style="bullet"
                            items={[
                              'Fibrous bands alone',
                              'Adherence without invasion',
                              'Capsular irregularity',
                              'Increased mitoses alone',
                              'Parafibromin loss alone',
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Adrenal */}
        <TabsContent value="adrenal">
          <div className="space-y-6">
            <SectionCard title="Adrenal Pitfalls" icon={Activity}>
              <Accordion type="multiple">
                <AccordionItem value="cortex-medulla">
                  <AccordionTrigger value="cortex-medulla">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">High Risk</Badge>
                      Cortical vs Medullary Tumors
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="cortex-medulla">
                    <div className="space-y-4">
                      <Alert variant="pitfall" title="The Problem">
                        Completely different tumor types with different prognosis. Must distinguish before any other interpretation.
                      </Alert>
                      <FeatureList
                        style="numbered"
                        items={[
                          'Use SF1 (cortical) vs chromogranin (medullary) first',
                          'Cortical tumors can be synaptophysin weak positive - don\'t overcall as NE',
                          'Pheochromocytoma can have bizarre nuclei - not a sign of malignancy',
                          'Zellballen pattern with S100+ sustentacular cells = pheo/PGL',
                          'Clinical history (hypertension, Cushing, etc.) helps',
                        ]}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="acc-metastasis">
                  <AccordionTrigger value="acc-metastasis">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Moderate Risk</Badge>
                      ACC vs Metastasis to Adrenal
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="acc-metastasis">
                    <div className="space-y-4">
                      <Alert variant="info" title="Background">
                        Adrenal is a common site for metastases (lung, breast, melanoma, renal). Primary ACC is relatively rare.
                      </Alert>
                      <FeatureList
                        style="bullet"
                        items={[
                          'Use cortical markers (SF1, inhibin, Melan-A) to confirm adrenal origin',
                          'If cortical markers negative, consider metastasis',
                          'Check for known primary malignancy',
                          'Lung: TTF-1, napsin A',
                          'Breast: GATA3, mammaglobin, ER',
                          'Renal: PAX8, CA9',
                          'Melanoma: S100, SOX10, Melan-A (confusing! - pattern differs)',
                        ]}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pheo-malignancy">
                  <AccordionTrigger value="pheo-malignancy">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">High Risk</Badge>
                      Pheochromocytoma "Malignancy"
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="pheo-malignancy">
                    <div className="space-y-4">
                      <Alert variant="pitfall" title="The Problem">
                        NO histologic feature reliably predicts malignancy in pheochromocytoma. Only metastasis to non-chromaffin tissue confirms malignancy.
                      </Alert>
                      <FeatureList
                        style="bullet"
                        items={[
                          'Pleomorphism: Does NOT predict malignancy',
                          'Mitoses: Elevated in some benign pheos',
                          'PASS score: Risk stratification, not definitive',
                          'Tumor size: Larger tumors have higher risk but not diagnostic',
                          'SDHB mutation: Higher malignant potential but still unpredictable',
                          'Only metastasis confirms malignancy',
                        ]}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>

        {/* Pituitary */}
        <TabsContent value="pituitary">
          <div className="space-y-6">
            <SectionCard title="Pituitary Pitfalls" icon={Brain}>
              <Accordion type="multiple">
                <AccordionItem value="hyperplasia-adenoma-pit">
                  <AccordionTrigger value="hyperplasia-adenoma-pit">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">High Risk</Badge>
                      Pituitary Hyperplasia vs Adenoma
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="hyperplasia-adenoma-pit">
                    <div className="space-y-4">
                      <Alert variant="pitfall" title="The Problem">
                        Hyperplasia can cause sellar enlargement and elevated hormones, mimicking adenoma.
                      </Alert>
                      <FeatureList
                        style="numbered"
                        items={[
                          'ALWAYS do reticulin stain',
                          'Hyperplasia: Expanded but PRESERVED acinar architecture',
                          'Adenoma: DISRUPTED reticulin network',
                          'Clinical context: pregnancy (lactotroph), hypothyroidism (thyrotroph)',
                          'Reversible causes should resolve hyperplasia',
                        ]}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="silent-nonfunctioning">
                  <AccordionTrigger value="silent-nonfunctioning">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Moderate Risk</Badge>
                      Silent vs Non-functioning PitNET
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="silent-nonfunctioning">
                    <div className="space-y-4">
                      <Alert variant="info" title="Terminology">
                        These terms are often confused but mean different things.
                      </Alert>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Silent PitNET</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            IHC POSITIVE for hormone but NO clinical syndrome. Examples: silent corticotroph adenoma (ACTH+, no Cushing).
                          </p>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                          <h5 className="font-medium text-slate-800 dark:text-slate-300 mb-2">Non-functioning/Null Cell</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            IHC NEGATIVE for hormones. True null cell is rare - most "non-functioning" are silent gonadotroph.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sparse-granulated">
                  <AccordionTrigger value="sparse-granulated">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Moderate Risk</Badge>
                      Sparse Granulated Variants
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="sparse-granulated">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Sparsely granulated tumors may have weak/negative hormone staining',
                        'Use transcription factors to determine lineage',
                        'Sparsely granulated somatotroph: fibrous bodies, aggressive',
                        'Sparsely granulated lactotroph: Golgi dot pattern for PRL',
                        'Don\'t call "null cell" just because hormone stains are weak',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>

        {/* NETs */}
        <TabsContent value="net">
          <div className="space-y-6">
            <SectionCard title="NET Pitfalls" icon={Grid3X3}>
              <Accordion type="multiple">
                <AccordionItem value="net-nec">
                  <AccordionTrigger value="net-nec">
                    <div className="flex items-center gap-2">
                      <Badge variant="danger">High Risk</Badge>
                      NET G3 vs NEC
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="net-nec">
                    <div className="space-y-4">
                      <Alert variant="pitfall" title="The Problem">
                        Both have high Ki-67 ({'>'}20%) but are biologically different tumors with different treatment approaches.
                      </Alert>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">NET G3</h5>
                          <FeatureList
                            style="bullet"
                            items={[
                              'Well-differentiated architecture',
                              'Organoid/trabecular pattern',
                              'TP53/RB1 usually wild-type',
                              'DAXX/ATRX loss (PanNET)',
                              'Somatostatin analog responsive',
                            ]}
                          />
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                          <h5 className="font-medium text-red-800 dark:text-red-300 mb-2">NEC</h5>
                          <FeatureList
                            style="bullet"
                            items={[
                              'Poorly differentiated',
                              'Sheets, diffuse growth',
                              'TP53 mutant (IHC: strong or null)',
                              'RB1 loss',
                              'Platinum-based chemo',
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ki67-heterogeneity">
                  <AccordionTrigger value="ki67-heterogeneity">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Moderate Risk</Badge>
                      Ki-67 Heterogeneity
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="ki67-heterogeneity">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Ki-67 can vary significantly within a single tumor',
                        'Always count in the HOTSPOT area',
                        'Minimum 500-2000 cells should be counted',
                        'Biopsy may underestimate grade (sampling)',
                        'Metastases may have higher Ki-67 than primary',
                        'Grade can increase over time (tumor evolution)',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="metastatic-net">
                  <AccordionTrigger value="metastatic-net">
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Moderate Risk</Badge>
                      Metastatic NET vs Primary
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value="metastatic-net">
                    <FeatureList
                      style="bullet"
                      items={[
                        'Liver is the most common site of NET metastasis',
                        'Primary hepatic NET is extremely rare',
                        'Always consider metastasis first',
                        'Use site-specific markers: CDX2 (GI), TTF-1 (lung), PAX8 (pancreas)',
                        'Clinical history and imaging essential',
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </TabsContent>
      </Tabs>

      {/* General Principles */}
      <SectionCard title="General Pitfall Prevention" icon={Target}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">1. Know the Differential</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Consider all possibilities before committing to a diagnosis. Build an IHC panel based on the differential.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">2. Use Clinical Context</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Laboratory values, imaging findings, and patient history are essential for interpretation.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">3. Adequate Sampling</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Many pitfalls result from inadequate sampling. When in doubt, order deeper levels or more sections.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">4. Use IHC Wisely</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              IHC supports morphology, not replaces it. Interpret in context. False positives and negatives occur.
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
