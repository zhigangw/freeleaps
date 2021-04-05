const requestPostStatusEnum = Object.freeze({
  DRAFT: 0,
  PUBLISHED: 1,
});

const requestPostSkeleton = {
  requestId: null,
  description: {
    headline: null,
    details:
      "Problem Statement <br>\
      [\
        We want to build a e-commerce website where our customers can exchange their used games. The website need to have a complete list features including user account management, payment, etc.\r\n\
      ]\
      <br>\
Deliverables <br>\
      [\
      A uprunning website hosted in a cloud platform, with java source code and design docs.\r\n\
      ]\
      <br>\
Ship Criteria <br>\
      [\
      The website need to pass our test; The source code need to meet the guidance. The product spec need to passed our review and get signed off by us.\r\n\
      ]\
      <br>\
Qualification <br>\
      [\
      1) 5+ years on Java programming <br>\
      2) Top company experience3) Can speak Chinese<br>\
      ] \
      <br>\
Appendix <br>\
      <a href='#'>Link to product spec Links to test plan</a>", 
  },
  notes: {
    pay: {
      totalBudget: 0,
      currency: "USD",
      escortedDeposit: 0
    },
    notes: "Payment Plan <br>\
    1) Down pay: 20%. Pay once the contract is signed. <br>\
    2) Acceptance Pay: 70%. Pay once the deliver is accepted. <br>\
    3) Pay-off: 10%. Pay in 30 days after the project is delivered. <br>\
    <br>\
    Other<br>\
    The acceptance of the deliver should be based on following criteria.<br>\
    1) The pass of all test cases listed in the test plan.<br>\
    2) The sign-off from our product manager.   ",
  }
}
export { requestPostStatusEnum, requestPostSkeleton }