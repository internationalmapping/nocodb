export function validatePassword(p) {
  let error = '';
  const hint = null;
  let valid = true;

  if (!p) {
    error = 'At least 10 letters';
    // error = t('msg.error.signUpRules.completeRuleSet');
    valid = false;
  } else {
    if (!(p.length >= 10)) {
      error += 'At least 10 letters. ';
      // error += t('msg.error.signUpRules.atLeast8Char');
      valid = false;
    }
  }
  return { error, valid, hint };
}
