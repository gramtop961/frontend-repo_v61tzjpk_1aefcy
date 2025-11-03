import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 p-[1px]">
          <div className="rounded-3xl bg-white p-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900">Let's collaborate</h3>
                <p className="mt-2 text-gray-600">
                  Have an idea around chatbots, agents, or intelligent products? I'm excited to help design and build it.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:you@example.com"
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 font-medium text-white shadow hover:shadow-lg transition"
                  >
                    <Mail size={18} />
                    Email Me
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 font-medium text-white shadow hover:shadow-lg transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white shadow hover:shadow-lg transition"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="rounded-2xl border border-gray-100 p-6">
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm text-gray-500">Name</dt>
                      <dd className="font-semibold text-gray-900">Diwash Acharya</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Home</dt>
                      <dd className="font-semibold text-gray-900">Jhapa, Nepal</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Field</dt>
                      <dd className="font-semibold text-gray-900">Information Management (BIM)</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Focus</dt>
                      <dd className="font-semibold text-gray-900">AI Chatbots & Agent Systems</dd>
                    </div>
                  </dl>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
