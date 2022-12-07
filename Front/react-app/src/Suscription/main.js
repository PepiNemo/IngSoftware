export async function Suscription() {

  const PUBLIC_VAPID_KEY = "BL6Teogk8mbNxIVTq6eViZXexzh775hApDcpnDic3JQKkA5zb4zjrgsdSfqc0xkQQgOswDI0w9IEmljya1Z0wwU"
  
  //Service worker

  navigator.serviceWorker.register('/worker.js')
  console.log("New server worker")
  await navigator.serviceWorker.ready.then(
    (serviceWorkerRegistration) => {
      const options = {
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY,
      
      };
      serviceWorkerRegistration.pushManager.subscribe(options).then(
        async (pushSubscription) => {
          const stringPush =JSON.stringify(pushSubscription)
          const url = "http://localhost:3300/Subscription"
          
          await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: { "Content-type": "application/json" },
            body: stringPush
          })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(e => console.log(e))
          // The push subscription details needed by the application
          // server are now available, and can be sent to it using,
          // for example, an XMLHttpRequest.
        }, (error) => {
          // During development it often helps to log errors to the
          // console. In a production environment it might make sense to
          // also report information about errors back to the
          // application server.
          console.error(error);
        }
      );
    });

}


export async function unSuscription(){
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
     registration.unregister()
   } })
}