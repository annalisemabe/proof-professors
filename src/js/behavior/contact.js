const [_, page] = window.location.pathname.split('/')
if (page.toLowerCase() === 'contact') {
  const service = new URLSearchParams(window.location.search).get('service')
  const pkg = new URLSearchParams(window.location.search).get('package')
  const messageInput = document.querySelector('[name=message]')
  const template = (service, pkg) => `Hi! I'm interested in learning more about the ${service} service's "${pkg}".`

  messageInput.value = template(service, pkg)
}