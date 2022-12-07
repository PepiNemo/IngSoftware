import webpush from "web-push"


const webp = webpush
webp.setVapidDetails(
'mailto:felipito@casa.org',
process.env.PUBLIC_VAPID_KEY,
process.env.PRIVATE_VAPID_KEY
);

export const webPush = webp

