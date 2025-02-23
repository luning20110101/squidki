export default function FAQ() {
  const faqs = [
    {
      question: "What is Squidki?",
      answer:
        "Squidki represents the ultimate convergence of Squidki and Squid Game, where players engage in music creation to navigate and survive elimination challenges. This game seamlessly blends Sprunki's musical creativity with the intense survival mechanics reminiscent of Squid Game.",
    },
    {
      question: "How do I play Squidki?",
      answer: "To play Squidki, select your character—either a guard or a contestant—then craft strategic beats to navigate through elimination rounds inspired by classic Squid Game challenges. Your musical selections will have a direct impact on your chances of survival, making every decision critical.",
    },
    {
      question: "Can I save my Squidki performances?",
      answer:
        "Absolutely! You can record and save your musical survival runs, allowing you to share your experiences with others or analyze your strategies. Join our community to showcase your best performances and celebrate your achievements.",
    },
    {
      question: "What platforms support Squidki?",
      answer: "Squidki is accessible on both desktop and mobile browsers, enabling you to create musical masterpieces anytime and anywhere. Enjoy the flexibility of playing on your preferred device.",
    },
    {
      question: "What special features exist in Squidki?",
      answer:
        "Explore various character combinations within Squidki to trigger exhilarating musical challenges and unlock spine-chilling bonus features. Each unique combination can lead to distinct survival sound patterns and captivating visual effects that enhance your gameplay experience.",
    },
    {
      question: "Is Squidki suitable for everyone?",
      answer:
        "While Squidki incorporates intense survival elements, the musical creation aspect is designed to be accessible for all players. Participants should feel comfortable with rhythm and be prepared for occasional thrilling challenges that add excitement to the game.",
    },
    {
      question: "Does Squidki receive updates?",
      answer: "To master Squidki, practice utilizing different character combinations in both musical and survival modes. Study transformation techniques and refine your strategies to improve your performance in increasingly challenging scenarios. Engaging with the community can also provide valuable insights and tips for success.",
    },
    {
      question: "Can I play Squidki offline?",
      answer: "While an internet connection is required initially, many features of Squidki will continue to function in offline mode, letting the thrill persist even without connection.",
    },
    {
      question: "How do I join the Squidki community?",
      answer: "Enter our realm through social media channels, music forums, and by sharing your Squidki creations with fellow music enthusiasts online.",
    },
    {
      question: "Conclusion",
      answer: "Where squidki meets Squid Game offers an exhilarating blend of music and survival that redefines traditional gaming experiences. With its unique challenges, strategic gameplay, and engaging community, this game invites you to step into a world where every beat can mean the difference between life and death. Join us in this revolutionary musical survival adventure today!",
    },
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Squidki</h2>
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

