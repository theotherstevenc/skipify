window.onload = () => {
  const handleMutation = (mutations) => {
    mutations.forEach((mutation) => {
      const { target } = mutation
      if (target?.innerText?.includes('Skip')) {
        target.click()
        console.log('ad skipped')
      }
    })
  }

  const observeConfig = {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
  }

  const mutationObserver = new MutationObserver(handleMutation)
  mutationObserver.observe(document.body, observeConfig)
}
