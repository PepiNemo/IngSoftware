console.log("Hi, Im service worker")

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Notificacion recibida")
    self.registration.showNotification(data.title, {
        body: data.message   
    })
})