export function extractReviewBonus(content) {
  const reviewStart = content.indexOf('<div class="review-bonus">');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("</div>", reviewStart);
  if (reviewEnd === -1) return "";

  const reviewBonusDiv = content.substring(reviewStart, reviewEnd + 6);
  return reviewBonusDiv;
}
export function extractReviewImage(content) {
  const reviewStart = content.indexOf(
    'src="https://hotoffers.casino/wp-content/uploads'
  );
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf('.png"', reviewStart);
  if (reviewEnd === -1) return "";
  let reviewImg = content.substring(reviewStart + 5, reviewEnd + 4);
  reviewImg = reviewImg.replace(/-\d+x\d+/, "");

  console.log(reviewImg);
  return reviewImg;
}
export function extractLink(content) {
  const linkStart = content.indexOf('https://hotoffers.casino/go/');
  if (linkStart === -1) return "";

  const linkEnd = content.indexOf('" class="review-logo"', linkStart);
  if (linkEnd === -1) return "";

  const linkPlay = content.substring(linkStart, linkEnd);
  console.log(linkPlay);

  return linkPlay;
}
export function extractBadge(content) {
  const reviewStart = content.indexOf('<span class="review-badge"');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("</span>", reviewStart);
  if (reviewEnd === -1) return "";

  const reviewBadge = content.substring(reviewStart, reviewEnd + 6);
  return reviewBadge;
}
export function extractPros(content) {
  const reviewStart = content.indexOf('<div class="review-pros-cons"');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("</div>", reviewStart);
  if (reviewEnd === -1) return "";

  const extractPros = content.substring(reviewStart, reviewEnd + 6);
  return extractPros;
}