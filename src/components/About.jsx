import { motion } from 'framer-motion'
import { Home, MapPin, User } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900">Hello, I'm Diwash Acharya</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I am currently pursuing my Bachelor's degree in Information Management. I love building intuitive user experiences backed by solid engineering and modern AI. My focus areas include conversational AI, agent frameworks, and data-driven interfaces.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><User className="mt-0.5" size={18} /><span>Clean design, reliable code, and smooth interactions are my core principles.</span></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5" size={18} /><span>From Jhapa, Nepal — proud of my roots and inspired by community.</span></li>
              <li className="flex items-start gap-3"><Home className="mt-0.5" size={18} /><span>Open to collaborations on AI-driven products and research ideas.</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -z-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-gray-500">Degree</p>
                    <p className="font-semibold text-gray-900">BIM</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-gray-500">Specialty</p>
                    <p className="font-semibold text-gray-900">AI & UI Engineering</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">Jhapa, Nepal</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-gray-500">Focus</p>
                    <p className="font-semibold text-gray-900">Agents, Chatbots, UX</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
