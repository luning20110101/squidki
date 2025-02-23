export default function FAQ() {
  const faqs = [
    {
      question: "What is Squidki?",
      answer:
        "Squidki is the ultimate fusion of Sprunki and Squid Game, where players create music to survive elimination challenges. Combine Sprunki's musical creativity with intense Squid Game survival mechanics.",
    },
    {
      question: "How do I play Squidki?",
      answer: "Choose your character (guard or contestant), create strategic beats, and survive elimination rounds inspired by Squid Game challenges. Your musical choices directly affect your survival chances.",
    },
    {
      question: "Can I save my Squidki performances?",
      answer:
        "Yes! Record and save your musical survival runs to share with others or study your strategy. Join our community to showcase your best survival performances.",
    },
    {
      question: "What platforms support Squidki?",
      answer: "Squidki is available for both desktop and mobile browsers, letting you create musical masterpieces wherever you are.",
    },
    {
      question: "What special features exist in Squidki?",
      answer:
        "Experiment with different Squidki character combinations to trigger thrilling musical challenges and unlock bone-chilling bonus features. Each combination can lead to unique survival sound patterns and disturbing visual effects.",
    },
    {
      question: "Is Squidki suitable for everyone?",
      answer:
        "While Squidki features intense survival elements, the musical creation aspect remains accessible to all. Players should be comfortable with rhythm and occasional thrilling challenges.",
    },
    {
      question: "Does Squidki receive updates?",
      answer: "Yes, we regularly update Squidki with new thrilling characters, haunting sounds, and survival features to keep the thrill fresh and evolving.",
    },
    {
      question: "Can I play Squidki offline?",
      answer: "While an internet connection is required initially, many features of Squidki will continue to function in offline mode, letting the thrill persist even without connection.",
    },
    {
      question: "How do I join the Squidki community?",
      answer: "Enter our realm through social media channels, music forums, and by sharing your Squidki creations with fellow music enthusiasts online.",
    },
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

