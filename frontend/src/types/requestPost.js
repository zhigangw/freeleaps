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

  }
}
export { requestPostStatusEnum, requestPostSkeleton }