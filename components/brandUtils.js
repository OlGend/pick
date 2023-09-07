export function extractReviewTitle(title) {

  return title;
}
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

 
  return reviewImg;
}
export function extractLink(content) {
  const linkStart = content.indexOf('/go/');
  if (linkStart === -1) return "";

  const linkEnd = content.indexOf('" class="review-logo"', linkStart);
  if (linkEnd === -1) return "";

  const linkPlay = content.substring(linkStart + 4, linkEnd);

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
export function extractDeposit(content) {
  const reviewStart = content.indexOf('<ul>\n<li>');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("</ul>>", reviewStart);
  if (reviewEnd === -1) return "";

  const extractDeposit = content.substring(reviewStart, reviewEnd + 6);
  return extractDeposit;
}

export function extractWithdrawal(content) {
  const reviewStart = content.indexOf('<h4 class="wp-block-heading" id="payment-methods">Withdrawal Methods</h4>');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("</div>", reviewStart);
  if (reviewEnd === -1) return "";

  const extractWithdrawal = content.substring(reviewStart, reviewEnd + 6);
  return extractWithdrawal;
}

export function extractDeposits(content) {
  const reviewStart = content.indexOf('<h4 class="wp-block-heading" id="payment-methods">Deposit Methods</h4>');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("</div>", reviewStart);
  if (reviewEnd === -1) return "";

  const extractDeposits = content.substring(reviewStart, reviewEnd + 6);
  return extractDeposits;
}

export function extractLimits(content) {
  const reviewStart = content.indexOf('<h4 class="wp-block-heading" id="payment-methods">Withdrawal Limits');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("</div>", reviewStart);
  if (reviewEnd === -1) return "";

  const extractDeposits = content.substring(reviewStart, reviewEnd + 6);
  return extractDeposits;
}

// brandUtils.js
export function extractCountries(content) {
  const reviewStart = content.indexOf('Restricted Countries');
  if (reviewStart === -1) return null;
  const reviewEnd = content.indexOf("</p>", reviewStart);
  if (reviewEnd === -1) return null;

  const countriesText = content.substring(reviewStart, reviewEnd);
  const countriesWithoutParentheses = countriesText
    .split("Restricted Countries</h4>\n\n\n\n<p>")[1]
    .trim()
    .replace(/\([^)]*\)/g, "") // Видаляємо текст у дужках
    .split(",")
    .map((country) => country.trim());

  return countriesWithoutParentheses;
}
export function extractProviders(content) {
  const reviewStart = content.indexOf('\n\n\n\n<p class="has-poka-boxes-background-color-alt-background-color has-background">');
  if (reviewStart === -1) return null;
  const reviewEnd = content.indexOf("</p>", reviewStart);
  if (reviewEnd === -1) return null;

  const countriesText = content.substring(reviewStart, reviewEnd);
  const countriesWithoutParentheses = countriesText
 
    .trim()
    .replace(/\([^)]*\)/g, "") // Видаляємо текст у дужках
    .split(",")
    .map((country) => country.trim());

  return countriesWithoutParentheses;
}


export function extractFlag(content) {
  const reviewStart = content.indexOf('<div class="pokageo-flag-circle">');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("</div>", reviewStart);
  if (reviewEnd === -1) return "";

  const extractFlag = content.substring(reviewStart, reviewEnd + 6);
  return extractFlag;
}


export function extractSingle(content) {
  const reviewStart = content.indexOf('<div class="wp-block-poka-affiliate-single">');
  if (reviewStart === -1) return "";
  const reviewEnd = content.indexOf("<!-- /.review-box -->", reviewStart);
  if (reviewEnd === -1) return "";

  const extractSingle = content.substring(reviewStart, reviewEnd + 6);
  return extractSingle;
}
export function extractRating(content) {
  const reviewStart = content.indexOf(
    '\r\n\t\t\t\t\t<div class="review-rating"><span><strong>'
  );
  if (reviewStart === -1) return "";

  const strongStart = content.indexOf("<strong>", reviewStart);
  if (strongStart === -1) return "";

  const strongEnd = content.indexOf("</strong>", strongStart);
  if (strongEnd === -1) return "";

  const ratingText = content.substring(strongStart + 8, strongEnd);
  const numericRating = parseFloat(ratingText);

  return numericRating;
}



