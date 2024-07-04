export default () => {
  const faqsList = [
    {
      q: "I'm new to USDA lending. Is this course right for me?",
      a: "Absolutely! This course is designed to give you a solid foundation, even if you have no prior experience with the USDA program. We'll walk you through eligibility requirements, the application process, and how to structure deals for maximum success.That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "My bank is small. Can we really handle these loans?",
      a: "Yes! The USDA program is specifically designed to help small and rural lenders. We'll cover strategies for managing the administrative side, and you'll always have access to support when questions arise. Plus, these deals generate substantial fees!",
    },
    {
      q: "What if I don't have any suitable deals in my pipeline right now?",
      a: "That's okay! This course will teach you how to identify potential USDA projects in your community. You'll also gain the skills to attract new clients with this unique offering, expanding your market share.",
    },
    {
      q: "What's the time commitment involved?",
      a: "The course is self-paced, so you can learn on your schedule. We recommend dedicating at least a few hours per week to ensure you're ready to implement what you learn. The monthly mastermind sessions offer additional support and keep you motivated.",
    },
    {
      q: "Is there a guarantee?",
      a: "We're confident that if you implement the strategies taught in this course, you'll be closing profitable USDA deals. Complete the course, put the strategies into action, and if you haven't closed a USDA loan within 180 days, I'll refund your tuition in full. This program is designed to work, and I'm backing that up by putting my money where my mouth is.",
    },
  ];

  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg">
            <h3 className="font-semibold text-[#001F3F]">
              Frequently asked questions
            </h3>
            <p className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
              All information you need to know
            </p>
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0">
          <ul className="space-y-4 divide-y">
            {faqsList.map((item, idx) => (
              <li className="py-5" key={idx}>
                <summary className="flex items-center justify-between font-semibold text-gray-700">
                  {item.q}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="mt-3 text-gray-600 leading-relaxed"
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
