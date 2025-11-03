import { motion } from 'framer-motion'
import { Bot, Brain, MessageCircle, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AI Chatbot',
    description:
      'A conversational assistant with intent detection, fallback handling, and streaming responses for natural interactions.',
    tags: ['React', 'FastAPI', 'LLM', 'RAG'],
    icon: Bot,
    link: '#'
  },
  {
    title: 'Autonomous AI Agent',
    description:
      'Task-driven agent capable of planning, tool-use, and multi-step execution for research and data tasks.',
    tags: ['Agents', 'Python', 'Tools', 'Memory'],
    icon: Brain,
    link: '#'
  },
  {
    title: 'Support Assistant',
    description:
      'An AI support layer that summarizes conversations, suggests replies, and escalates with context.',
    tags: ['Chat', 'Summarization', 'Embeddings'],
    icon: MessageCircle,
    link: '#'
  }
]

function Tag({ label }) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Highlighted Projects</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            A selection of AI-forward work showcasing chat interfaces, agent workflows, and practical intelligence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => {
            const Icon = p.icon
            return (
              <motion.a
                key={p.title}
                href={p.link}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  </div>
                  <ExternalLink className="text-gray-300 transition group-hover:text-indigo-500" size={18} />
                </div>
                <p className="mt-3 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
