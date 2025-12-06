import { useState, useMemo } from 'react'
import {
  ClipboardList,
  CheckCircle2,
  XCircle,
  RefreshCw,
  ChevronRight,
  Award
} from 'lucide-react'
import { cn } from '../lib/utils'
import { Alert, Button, Badge, Card, CardContent } from '../components/ui'

interface Question {
  id: string
  category: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questionBank: Question[] = [
  // Thyroid Questions
  {
    id: 'thy-01',
    category: 'Thyroid',
    question: 'Which feature is ESSENTIAL to diagnose follicular thyroid carcinoma?',
    options: [
      'Nuclear atypia',
      'High cellularity',
      'Capsular or vascular invasion',
      'RAS mutation',
    ],
    correctAnswer: 2,
    explanation: 'Follicular carcinoma is defined by invasion (capsular or vascular). Cytologic features alone cannot distinguish follicular adenoma from carcinoma.',
  },
  {
    id: 'thy-02',
    category: 'Thyroid',
    question: 'What is the most common driver mutation in classic papillary thyroid carcinoma?',
    options: [
      'RAS',
      'BRAF V600E',
      'RET/PTC',
      'TP53',
    ],
    correctAnswer: 1,
    explanation: 'BRAF V600E is found in approximately 45% of PTC cases and is associated with classic and tall cell variants.',
  },
  {
    id: 'thy-03',
    category: 'Thyroid',
    question: 'A thyroid tumor shows follicular architecture with PTC nuclear features but NO invasion. What is the diagnosis?',
    options: [
      'Follicular adenoma',
      'Follicular variant of PTC',
      'NIFTP',
      'Follicular carcinoma',
    ],
    correctAnswer: 2,
    explanation: 'NIFTP (Non-Invasive Follicular Thyroid Neoplasm with Papillary-like Nuclear Features) has follicular architecture, PTC nuclear features, but crucially NO invasion.',
  },
  {
    id: 'thy-04',
    category: 'Thyroid',
    question: 'Which variant of papillary thyroid carcinoma is considered high-risk with more aggressive behavior?',
    options: [
      'Follicular variant',
      'Cribriform-morular variant',
      'Tall cell variant',
      'Oncocytic variant',
    ],
    correctAnswer: 2,
    explanation: 'Tall cell variant (cells height ≥3x width) is associated with higher rates of extrathyroidal extension and recurrence.',
  },

  // Parathyroid Questions
  {
    id: 'para-01',
    category: 'Parathyroid',
    question: 'What feature best distinguishes parathyroid adenoma from hyperplasia?',
    options: [
      'Cell type (chief vs oxyphil)',
      'Rim of normal parathyroid tissue at the periphery',
      'Elevated PTH levels',
      'Reduced intracellular fat',
    ],
    correctAnswer: 1,
    explanation: 'A rim of compressed normal parathyroid tissue at the periphery is the key histologic feature favoring adenoma. Both adenoma and hyperplasia show reduced fat.',
  },
  {
    id: 'para-02',
    category: 'Parathyroid',
    question: 'Loss of which IHC marker supports the diagnosis of parathyroid carcinoma?',
    options: [
      'PTH',
      'GATA3',
      'Parafibromin',
      'Chromogranin',
    ],
    correctAnswer: 2,
    explanation: 'Parafibromin loss (due to CDC73 mutation) is seen in ~70% of parathyroid carcinomas, supporting but not proving the diagnosis.',
  },
  {
    id: 'para-03',
    category: 'Parathyroid',
    question: 'Which finding is REQUIRED to diagnose parathyroid carcinoma?',
    options: [
      'Thick fibrous bands',
      'Parafibromin loss',
      'Unequivocal invasion or metastasis',
      'High mitotic rate',
    ],
    correctAnswer: 2,
    explanation: 'Parathyroid carcinoma requires unequivocal invasion (into adjacent structures, vascular invasion, perineural invasion) or metastasis. Other features are supportive but not diagnostic.',
  },

  // Adrenal Questions
  {
    id: 'adr-01',
    category: 'Adrenal',
    question: 'What Weiss score indicates adrenal cortical carcinoma?',
    options: [
      '≥1',
      '≥2',
      '≥3',
      '≥5',
    ],
    correctAnswer: 2,
    explanation: 'A Weiss score of ≥3 (out of 9 criteria) indicates malignancy in adrenal cortical tumors.',
  },
  {
    id: 'adr-02',
    category: 'Adrenal',
    question: 'Which IHC marker is most specific for adrenal cortical origin?',
    options: [
      'Synaptophysin',
      'SF1',
      'Chromogranin',
      'Melan-A',
    ],
    correctAnswer: 1,
    explanation: 'SF1 (steroidogenic factor 1) is the most specific marker for adrenal cortical tumors. Melan-A is also cortical but less specific.',
  },
  {
    id: 'adr-03',
    category: 'Adrenal',
    question: 'What is the characteristic architectural pattern of pheochromocytoma?',
    options: [
      'Papillary',
      'Follicular',
      'Zellballen',
      'Trabecular',
    ],
    correctAnswer: 2,
    explanation: 'Zellballen ("cell balls") pattern with nests of cells surrounded by a vascular network and peripheral sustentacular cells is classic for pheochromocytoma.',
  },
  {
    id: 'adr-04',
    category: 'Adrenal',
    question: 'Nuclear pleomorphism in pheochromocytoma indicates:',
    options: [
      'Malignancy',
      'High-grade tumor',
      'Poor prognosis',
      'None of the above - it is not predictive',
    ],
    correctAnswer: 3,
    explanation: 'Nuclear pleomorphism in pheochromocytoma is NOT a predictor of malignancy. Only metastasis to non-chromaffin tissue confirms malignant behavior.',
  },

  // Pituitary Questions
  {
    id: 'pit-01',
    category: 'Pituitary',
    question: 'What stain is essential to distinguish pituitary hyperplasia from adenoma?',
    options: [
      'Ki-67',
      'Reticulin',
      'PAS',
      'Synaptophysin',
    ],
    correctAnswer: 1,
    explanation: 'Reticulin stain shows preserved acinar architecture in hyperplasia but disrupted pattern in adenoma.',
  },
  {
    id: 'pit-02',
    category: 'Pituitary',
    question: 'What is the most common type of clinically non-functioning pituitary adenoma?',
    options: [
      'Null cell adenoma',
      'Silent corticotroph adenoma',
      'Silent gonadotroph adenoma',
      'Silent thyrotroph adenoma',
    ],
    correctAnswer: 2,
    explanation: 'Silent gonadotroph adenomas (positive for FSH, LH, or SF1 but clinically non-secreting) are the most common cause of non-functioning pituitary adenomas.',
  },
  {
    id: 'pit-03',
    category: 'Pituitary',
    question: 'Fibrous bodies are characteristic of which pituitary tumor subtype?',
    options: [
      'Densely granulated somatotroph adenoma',
      'Sparsely granulated somatotroph adenoma',
      'Lactotroph adenoma',
      'Corticotroph adenoma',
    ],
    correctAnswer: 1,
    explanation: 'Fibrous bodies (whorls of intermediate filaments) are characteristic of sparsely granulated somatotroph adenomas and indicate more aggressive behavior.',
  },

  // NET Questions
  {
    id: 'net-01',
    category: 'NET',
    question: 'What distinguishes well-differentiated NET G3 from poorly differentiated NEC?',
    options: [
      'Ki-67 index',
      'Mitotic rate',
      'Morphology and molecular profile',
      'Synaptophysin expression',
    ],
    correctAnswer: 2,
    explanation: 'NET G3 maintains well-differentiated morphology and has different molecular alterations (MEN1, DAXX/ATRX) compared to NEC (TP53, RB1 mutations).',
  },
  {
    id: 'net-02',
    category: 'NET',
    question: 'Which Ki-67 index defines a Grade 2 neuroendocrine tumor?',
    options: [
      '<3%',
      '3-20%',
      '>20%',
      '>55%',
    ],
    correctAnswer: 1,
    explanation: 'Ki-67 grading: G1 <3%, G2 3-20%, G3 >20%. Grade is determined by whichever is higher between Ki-67 and mitotic rate.',
  },
  {
    id: 'net-03',
    category: 'NET',
    question: 'CDX2 positivity in a neuroendocrine tumor suggests origin from:',
    options: [
      'Lung',
      'Pancreas',
      'Gastrointestinal tract',
      'Thyroid',
    ],
    correctAnswer: 2,
    explanation: 'CDX2 is an intestinal transcription factor. Positivity in a NET suggests GI (especially midgut) primary.',
  },

  // MEN Questions
  {
    id: 'men-01',
    category: 'MEN',
    question: 'Which MEN syndrome is associated with medullary thyroid carcinoma?',
    options: [
      'MEN1',
      'MEN2A',
      'MEN4',
      'Carney complex',
    ],
    correctAnswer: 1,
    explanation: 'MEN2A and MEN2B are associated with medullary thyroid carcinoma (RET mutations). MEN1 involves parathyroid, pituitary, and pancreatic NETs.',
  },
  {
    id: 'men-02',
    category: 'MEN',
    question: 'What feature in thyroid pathology suggests hereditary rather than sporadic MTC?',
    options: [
      'Amyloid deposition',
      'Calcitonin positivity',
      'Background C-cell hyperplasia',
      'Large tumor size',
    ],
    correctAnswer: 2,
    explanation: 'Background C-cell hyperplasia (bilateral) suggests hereditary MTC (MEN2). Sporadic MTC does not typically show C-cell hyperplasia in the non-tumor thyroid.',
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function Assessment() {
  const [isStarted, setIsStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [sessionResults, setSessionResults] = useState<{ correct: boolean; questionId: string }[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  const sessionQuestions = useMemo(() => {
    if (isStarted) {
      return shuffleArray(questionBank).slice(0, 15)
    }
    return []
  }, [isStarted])

  const currentQuestion = sessionQuestions[currentIndex]

  const handleStartAssessment = () => {
    setIsStarted(true)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setSessionResults([])
    setIsCompleted(false)
  }

  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setShowExplanation(true)

    const isCorrect = index === currentQuestion.correctAnswer
    setSessionResults(prev => [...prev, { correct: isCorrect, questionId: currentQuestion.id }])
  }

  const handleNextQuestion = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setIsCompleted(true)
    }
  }

  const correctCount = sessionResults.filter(r => r.correct).length
  const totalCount = sessionResults.length

  if (!isStarted) {
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
              Assessment
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Session-based MCQ and pattern recognition
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
              This assessment contains 15 randomly selected questions covering all endocrine pathology topics.
              Results are shown at the end of the session.
            </p>
            <ul className="text-left text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                15 questions per session
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Immediate feedback with explanations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Session-only results (no tracking)
              </li>
            </ul>
            <Button onClick={handleStartAssessment} size="lg">
              Start Assessment
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>

        <Alert variant="info" title="Educational Assessment">
          This assessment is for self-study purposes only. Questions cover concepts from all modules and are designed to reinforce key learning points.
        </Alert>
      </div>
    )
  }

  if (isCompleted) {
    const percentage = Math.round((correctCount / totalCount) * 100)

    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Assessment Complete!
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              You answered {correctCount} of {totalCount} questions correctly this session.
            </p>

            <div className="mb-8">
              <div className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                {percentage}%
              </div>
              <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button onClick={handleStartAssessment}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>

        <Alert variant="info" title="Session Complete">
          Your results are not saved or tracked. Start a new session anytime to continue learning!
        </Alert>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">{currentQuestion.category}</Badge>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Question {currentIndex + 1} of {sessionQuestions.length}
          </span>
        </div>
        <span className="text-sm font-medium text-slate-900 dark:text-white">
          {correctCount}/{totalCount} correct
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correctAnswer
              const showResult = selectedAnswer !== null

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={cn(
                    'w-full p-4 rounded-lg border-2 text-left transition-all',
                    'flex items-center gap-3',
                    !showResult && 'hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
                    !showResult && 'border-slate-200 dark:border-slate-700',
                    showResult && isCorrect && 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
                    showResult && isSelected && !isCorrect && 'border-red-500 bg-red-50 dark:bg-red-900/20',
                    showResult && !isSelected && !isCorrect && 'border-slate-200 dark:border-slate-700 opacity-50'
                  )}
                >
                  <span className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
                    !showResult && 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
                    showResult && isCorrect && 'bg-emerald-500 text-white',
                    showResult && isSelected && !isCorrect && 'bg-red-500 text-white',
                    showResult && !isSelected && !isCorrect && 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  )}>
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                    {!showResult && String.fromCharCode(65 + index)}
                    {showResult && !isCorrect && !isSelected && String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 text-slate-900 dark:text-white">{option}</span>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={cn(
              'mt-6 p-4 rounded-lg',
              selectedAnswer === currentQuestion.correctAnswer
                ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800'
                : 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800'
            )}>
              <h4 className={cn(
                'font-semibold mb-2',
                selectedAnswer === currentQuestion.correctAnswer
                  ? 'text-emerald-800 dark:text-emerald-300'
                  : 'text-amber-800 dark:text-amber-300'
              )}>
                {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Not quite right'}
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <div className="mt-6 flex justify-end">
              <Button onClick={handleNextQuestion}>
                {currentIndex < sessionQuestions.length - 1 ? 'Next Question' : 'See Results'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
