const requestPostStatusEnum = Object.freeze({
  DRAFT: 0,
  PUBLISHED: 1,
});

const requestPostSkeleton = {
  requestId: null,
  description: {
    headline: null,
    details:
      "<h3>Problem Statement</h3><p>[We want to build a e-commerce website where our customers can exchange their used games. The website need to have a complete list features including user account management, payment, etc.]</p><h3>Deliverables</h3><p>[A uprunning website hosted in a cloud platform, with java source code and design docs.]</p><h3>Ship Criteria</h3><p>[The website need to pass our test; The source code need to meet the guidance.The product spec need to passed our review and get signed off by us.]</p><h3>Qualification</h3><p>[1) 5+ years on Java programming2) Top company experience3) Can speak Chinese]</p><h3>Appendix</h3><p><a href='#'>Link to product spec</a><a href='#'> Links to test plan</a></p>",
  },
  notes: {
    pay: {
      totalBudget: 0,
      currency: "USD",
      escortedDeposit: 0
    },
    notes: "Payment Plan \n\
    1) Down pay: 20%. Pay once the contract is signed. \n\
    2) Acceptance Pay: 70%. Pay once the deliver is accepted. \n\
    3) Pay-off: 10%. Pay in 30 days after the project is delivered. \n\
    \n\
    Other\n\
    The acceptance of the deliver should be based on following criteria.\n\
    1) The pass of all test cases listed in the test plan.\n\
    2) The sign-off from our product manager.   ",
  }
}
export { requestPostStatusEnum, requestPostSkeleton }