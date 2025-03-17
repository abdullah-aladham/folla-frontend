const toastTrigger = document.getElementById('PaymentSuccessBtn')
const toastLiveExample = document.getElementById('OrderSuccessNotif')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}