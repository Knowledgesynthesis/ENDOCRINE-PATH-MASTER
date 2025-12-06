export interface Module {
  id: string
  title: string
  description: string
  icon: string
  route: string
  color: string
}

export interface Section {
  id: string
  title: string
  content: ContentBlock[]
}

export interface ContentBlock {
  type: 'text' | 'list' | 'table' | 'diagram' | 'alert' | 'comparison'
  content: string | string[] | TableData | DiagramData | AlertData | ComparisonData
}

export interface TableData {
  headers: string[]
  rows: string[][]
}

export interface DiagramData {
  title: string
  description: string
  icon: string
}

export interface AlertData {
  type: 'info' | 'warning' | 'pitfall' | 'tip'
  title: string
  content: string
}

export interface ComparisonData {
  title: string
  items: {
    name: string
    features: string[]
  }[]
}

export interface CaseData {
  id: string
  title: string
  category: string
  presentation: string
  findings: string[]
  ihcResults?: Record<string, string>
  molecularFindings?: string[]
  interpretation: string
  teachingPoints: string[]
}

export interface AssessmentQuestion {
  id: string
  category: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}
