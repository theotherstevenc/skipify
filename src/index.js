window.onload = () => {
  const clickElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) {
      element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      element.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }))
    }
  }

  const handleMutation = (mutations) => {
    const mutation = mutations.find(
      (mutation) => mutation.target?.innerText === 'Skip Ad' || mutation.target?.innerText?.includes('Skip'),
    )
    if (!mutation) return

    const { target } = mutation
    if (target.innerText === 'Skip Ad') {
      clickElement('.mgp_adRollSkipButtonContent')
    } else if (target.innerText.includes('Skip')) {
      target.click()
      console.log('ad skipped')
    }
  }

  const observeConfig = {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
  }

  new MutationObserver(handleMutation).observe(document.body, observeConfig)
}
