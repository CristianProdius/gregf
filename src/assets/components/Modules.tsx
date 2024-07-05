const Sections = [
  {
    title: "1. Introduction",
    description: ` As a seasoned lender, you understand the delicate balance
    between growth and risk. But what if there was a proven way to
    unlock a new income stream while enhancing your bank's
    reputation as an economic driver? It's time to become the
    go-to expert...`,
  },
  {
    title: "2. Key Elements to Becoming Your Bank's Most Profitable Lender",
    description: ` You're not satisfied with just being another lender. You want
    to make a real impact – on your clients' businesses, your
    bank's bottom line, and your own career trajectory. The USDA
    program is your key to unlocking that potential. But it takes
    more than just knowing the rules. Let's dive into the
    essential elements that will transform you into your bank's
    Most Profitable Lender...`,
  },
  {
    title: "3. Why the USDA Business & Industry Program",
    description: ` Most banks haven't even heard of this powerful program. But
    those who have been quietly reaping the rewards. Let's dive
    into the secrets of why the USDA B&I Program could be your key
    to becoming the most profitable lender in your bank…`,
  },
  {
    title: " 4. General Lender Provisions",
    description: ` Don't let the government programs feel intimidating. This
    module breaks down the lender provisions of the USDA program
    into clear steps and understandable guidelines. Discover how
    simple it is to become an approved lender and start reaping
    the rewards.`,
  },
  {
    title: " 5. Project Eligibility",
    description: `  You might be amazed at the deals you've had to pass on in the
    past, thinking they just weren't a fit for your bank. But the
    USDA Business & Industry Program opens doors to a whole new
    world of lending opportunities. In this module, get ready to
    expand your thinking`,
  },
  {
    title: " 6. Ineligible Projects",
    description: `  Before diving into what USDA loans can fund, let's cut to the
    chase: Not every project will qualify. Knowing these
    deal-breakers early will save you time and protect your bank's
    reputation. Let's look at the types of projects and businesses
    that USDA lending won't support.`,
  },
  {
    title: "7. Structuring the Deal",
    description: `  Think of USDA loans as more than just a new product. They're a
    powerful financial tool. Knowing how to structure them
    correctly is the difference between average returns and the
    kind of premiums that make you the lending superstar of your
    bank.`,
  },
  {
    title: "8. New Construction Implications",
    description: ` Discover the USDA advantage that eliminates the need for
    complex, high-interest construction loans. Get ready to
    simplify funding and reduce risk…`,
  },
  {
    title: "9. Origination Requirements",
    description: ` We've covered how the USDA B&I program can transform your
    lending game. But to truly reap the benefits of these
    high-profit, low-risk loans, you need a rock-solid origination
    process. Understanding the USDA's specific requirements isn't
    just about compliance – it's the key to securing those premium
    deals and maximizing your bank's bottom line.`,
  },
  {
    title: "10. Compliance with USDA Requirements",
    description: `  USDA loans offer tremendous opportunities, but they also come
    with environmental and regulatory requirements. Understanding
    these from the start is crucial. Not only does it ensure your
    deals sail through the approval process, but it also protects
    your bank from costly delays or even project ineligibility.`,
  },
  {
    title: "11. Preliminary Eligibility Review",
    description: `  Think of the USDA Preliminary Eligibility Review as your
    'green light' tool. It's a quick way to get early feedback and
    avoid wasting time on deals that are unlikely to qualify. In
    this module, we'll demystify the process and show you exactly
    what the USDA is looking for.`,
  },
  {
    title: "12. Application Requirements",
    description: ` The USDA application process may seem complex, but don't let
    that deter you. A complete well-crafted application is your
    key to unlocking those extraordinary profits we've discussed.
    In this module, we'll demystify the requirements and help you
    put together a winning package for your ban`,
  },
  {
    title: "  13. Guarantee Provisions",
    description: ` In the world of lending, guarantees are a powerful tool. But
    with USDA loans, the guarantees become a true competitive
    advantage for your bank. Knowing how they work gives you the
    knowledge to not only tap into this lucrative program but also
    to maximize the return for every deal. By understanding what
    the USDA guarantees – and what they don't – you'll be able to
    confidently structure loans that minimize your risk while
    generating unprecedented fees.`,
  },
  {
    title: "14. Servicing Provisions",
    description: ` YSmart loan servicing isn't just about compliance – it's about
    protecting your bank's investment and maximizing those premium
    fees you've worked so hard to secure. In this module, we'll
    cover the essential actions that ensure a smooth process AND
    position you as the USDA lending expert within your bank.`,
  },
  {
    title: "15. Servicing Provisions (Continued)",
    description: `    Even after a USDA loan is closed, your bank has options. This
    section explores those scenarios, ensuring you have the
    flexibility to adapt as your portfolio grows and changes.`,
  },
  {
    title: " 16. What Happens In Default",
    description: ` Even the best-laid lending plans can encounter unexpected
    challenges. While the USDA program is designed to minimize
    risk, it's crucial for lenders to understand the steps
    involved when a borrower defaults. This module will walk you
    through the procedures for default, liquidation, and
    bankruptcy scenarios`,
  },
  {
    title: " 17. New Construction Implications",
    description: `  It's frustrating to watch promising deals slip through your
    fingers due to lending limits. What if there was a way to fund
    those transformative projects, strengthen your community, AND
    significantly boost your bank's earnings? There is, and the
    key lies in a strategy many banks ignore.`,
  },
];

const Modules = () => {
  return (
    <div className="bg-white dark:bg-[#001F3F]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 grid md:grid-cols-2 gap-4">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white col-span-full">
          Here's what you’ll learn in the course:
        </h2>
        {Sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              {section.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
